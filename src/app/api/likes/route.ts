import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Like from "../../../lib/models/like";
import Blog from "../../../lib/models/blogs";
import User from "../../../lib/models/user";

export async function POST(req: Request) {
  // body: { blogId, email (optional), name (optional) }
  try {
    const body = await req.json();
    await connectDB();
    let user = null;
    if (body.email) {
      user = await User.findOne({ email: body.email });
      if (!user) user = await User.create({ name: body.name || "Guest", email: body.email });
    } else {
      user = await User.create({ name: body.name || "Guest" });
    }

    // create like (unique index prevents duplicates)
    try {
      await Like.create({ blog: body.blogId, user: user._id });
      await Blog.findByIdAndUpdate(body.blogId, { $inc: { likesCount: 1 } });
    } catch (e: any) {
      // duplicate key or other error -> ignore duplicate
      if (e.code === 11000) {
        return NextResponse.json({ ok: true, message: "already liked" });
      }
      throw e;
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Error" }, { status: 500 });
  }
}
