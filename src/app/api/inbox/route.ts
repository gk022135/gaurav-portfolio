import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Message from "../../../lib/models/message";
import { requireAdmin } from "../../../lib/auth";

export async function POST(req: Request) {
  // public: send a message
  try {
    const body = await req.json();
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await connectDB();
    const msg = await Message.create({ name: body.name, email: body.email, message: body.message });
    return NextResponse.json(msg, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // admin-only: list messages
  try {
    requireAdmin(req);
    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: e.status || 500 });
  }
}

export async function PUT(req: Request) {
  // admin: mark read/unread
  try {
    requireAdmin(req);
    const body = await req.json();
    if (!body.id) return NextResponse.json({ error: "id required" }, { status: 400 });
    await connectDB();
    const msg = await Message.findByIdAndUpdate(body.id, { isRead: !!body.isRead }, { new: true });
    return NextResponse.json(msg);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: e.status || 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    requireAdmin(req);
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
    await connectDB();
    await Message.findByIdAndDelete(id);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: e.status || 500 });
  }
}
