import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import User from "@/lib/models/user";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email } = body || {};

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const existing = await User.findOne({ email: String(email).toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const user = await User.create({ name, email: String(email).toLowerCase() });

    return NextResponse.json({ ok: true, user: { id: user._id, name: user.name, email: user.email } }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}
