// lib/models/Like.ts
import mongoose, { Schema, models } from "mongoose";

const LikeSchema = new Schema(
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
  },
  { timestamps: true }
);

// One user can like a blog only once
LikeSchema.index({ blog: 1, user: 1 }, { unique: true });

export default models.Like || mongoose.model("Like", LikeSchema);
