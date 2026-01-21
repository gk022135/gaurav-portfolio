import CommentSection from "../../../../src/components/CommentSection";
import Footer from "@/components/Footer";
import editorjsHtml from "editorjs-html";
import BlogShare from "../../../components/blogShare";

export const dynamic = "force-dynamic";

/* ----------------------------------------------------
   INLINE IMAGE INJECTION LOGIC
---------------------------------------------------- */
function injectInlineImages(html: string) {
  const imageRegex = /\[\[image:(https?:\/\/[^\]]+)\]\]/g;

  return html.replace(
    imageRegex,
    (_, url) => `
      <div class="my-12 overflow-hidden rounded-2xl border border-white/10">
        <img src="${url}" alt="Blog image" loading="lazy" class="w-full object-cover" />
      </div>
    `
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Not found
      </div>
    );
  }

  const blog = await res.json();

  let html = "";
  try {
    const parser = editorjsHtml();
    const parsed =
      typeof blog.content === "object"
        ? parser.parse(blog.content)
        : String(blog.content || "");
    html = injectInlineImages(parsed);
  } catch {
    html =
      typeof blog.content === "string"
        ? injectInlineImages(blog.content)
        : "";
  }

  const postUrl = `${baseUrl}/blog/${blog.slug}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <article className="max-w-3xl mx-auto px-4 py-16 text-white">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            {blog.title}
          </h1>

          <p className="text-sm text-white/60 mb-6">
            By{" "}
            <span className="text-white/80">
              {blog.author?.name || "Unknown"}
            </span>{" "}
            · {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          <BlogShare url={postUrl} title={blog.title} />
        </header>

        {blog.coverImage && (
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-[380px] object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <CommentSection blogId={String(blog._id)} />
      </article>

      <Footer />
    </main>
  );
}
