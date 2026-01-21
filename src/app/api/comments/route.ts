import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Comment from "../../../lib/models/comments";
import User from "../../../lib/models/user";

export async function POST(req: Request) {
  // public: create a comment (will create user if email provided)
  try {
    const body = await req.json();
    await connectDB();

    let user = null;
    if (body.email) {
      user = await User.findOne({ email: body.email });
      if (!user) user = await User.create({ name: body.name || "Guest", email: body.email });
    } else {
      // create an anonymous user document
      user = await User.create({ name: body.name || "Guest" });
    }

    const comment = await Comment.create({ blog: body.blogId, user: user._id, content: body.content });

    return NextResponse.json(comment, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // list comments for a blogId query param
  const url = new URL(req.url);
  const blogId = url.searchParams.get("blogId");
  if (!blogId) return NextResponse.json({ error: "blogId required" }, { status: 400 });
  await connectDB();
  const comments = await Comment.find({ blog: blogId, isApproved: true }).populate("user", "name").sort({ createdAt: -1 });
  return NextResponse.json(comments);
}
