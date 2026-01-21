"use client";
import { useEffect, useState } from "react";

type Comment = {
  _id: string;
  content: string;
  user: { name: string };
  createdAt: string;
};

export default function CommentSection({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function load() {
    const res = await fetch(`/api/comments?blogId=${blogId}`);
    const data = await res.json();
    setComments(data || []);
  }

  useEffect(() => {
    load();
  }, [blogId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blogId, content, name, email }),
    });
    setContent("");
    await load();
  }

  return (
    <section className="mt-16">
      <h3 className="text-xl font-semibold mb-6">Comments</h3>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="space-y-4">
          <input
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <input
            required
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <textarea
            required
            placeholder="Write your comment…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
            Post comment →
          </button>
        </div>
      </form>

      {/* List */}
      <ul className="space-y-6">
        {comments.map((c) => (
          <li
            key={c._id}
            className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <p className="text-white/80 mb-3">{c.content}</p>
            <div className="text-xs text-white/50">
              — {c.user?.name || "Guest"} ·{" "}
              {new Date(c.createdAt).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
