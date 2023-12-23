import { NextResponse } from "next/server";
import db from "../../../lib/services/db/setupDatabase";

db();
export async function GET(req, res) {
  return NextResponse.json({ message: "Hi, From API" }, { status: 200 });
}
