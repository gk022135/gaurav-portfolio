// lib/models/Comment.ts
import mongoose, { Schema, models } from "mongoose";

const CommentSchema = new Schema(
  {
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    isApproved: {
      type: Boolean,
      default: true, // or false if you want moderation
    },
  },
  { timestamps: true }
);

export default models.Comment || mongoose.model("Comment", CommentSchema);
