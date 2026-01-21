"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("./Editor"), { ssr: false });

type Props = {
  initialData?: any;
  slug?: string;
};

export default function BlogEditor({ initialData, slug }: Props) {
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [postSlug, setPostSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(false);

  async function handleEditorSave(content: any) {
    setSaving(true);
    try {
      const payload = {
        authorEmail : "gk022135@gmail.com",
        title: title || "Untitled",
        slug:
          postSlug ||
          (title
            ? title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            : ""),
        content,
        coverImage,
        tags: tags ? tags.split(",").map((t) => t.trim()) : [],
        published,
      };

      const res = await fetch(`/api/blogs${slug ? `/${slug}` : ""}`, {
        method: slug ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Save failed");
      alert("Saved");
    } catch (e: any) {
      alert(e.message || "Error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="space-y-8">
      {/* Meta Card */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm">
        <h2 className="text-sm font-medium text-white/70 mb-4">
          Post Settings
        </h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <input
            value={postSlug}
            onChange={(e) => setPostSlug(e.target.value)}
            placeholder="Slug (optional)"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <input
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Cover image URL"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <label className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3">
            <span className="text-sm text-white/80">Publish article</span>
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="h-4 w-4 accent-white"
            />
          </label>
        </div>
      </div>

      {/* Editor */}
      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm">
        <Editor onSave={handleEditorSave} initialData={initialData} />
      </div>

      {/* Save Status */}
      {saving && (
        <div className="text-sm text-white/60 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          Saving changes…
        </div>
      )}
    </section>
  );
}
