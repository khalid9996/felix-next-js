import { NextResponse } from "next/server";
import { AdminAuthModel } from "../../../../../lib/services/db/models/AdminUser.schema";
import db from "../../../../../lib/services/db/setupDatabase";
import bcrypt from "bcryptjs";
import validator from "validator";

export async function POST(req) {
  await db();

  const { email, password } = await req.json();

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      {
        message: "not a valid email",
      },
      { status: 400 }
    );
  } else {
    if (!validator.isLength(password, { min: 8 })) {
      return NextResponse.json(
        {
          message: "Password Length must be min 8",
        },
        { status: 400 }
      );
    }
  }

  const existingAdminUser = await AdminAuthModel.findOne({ email });

  if (existingAdminUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newAdminUser = new AdminAuthModel({
    email,
    password: hashedPassword,
  });

  try {
    await newAdminUser.save();
    return NextResponse.json(
      { message: "Admin User Created" },
      { status: 200 }
    );
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
}
