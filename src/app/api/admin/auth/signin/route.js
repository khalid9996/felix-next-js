import { NextResponse } from "next/server";

export function GET(req) {
  return NextResponse.json(
    { message: "hii from admin auth login" },
    { status: 200 }
  );
}
