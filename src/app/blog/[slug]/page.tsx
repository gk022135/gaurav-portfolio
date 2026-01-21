import { connectDB } from "../../../../src/lib/db";
import Blog from "../../../../src/lib/models/blogs";
import editorjsHtml from "editorjs-html";
import CommentSection from "../../../../src/components/CommentSection";
import Footer from "@/components/Footer";

import {
  Link as LinkIcon,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

type Props = { params: { slug: string } };

export const revalidate = 60;

/* ----------------------------------------------------
   INLINE IMAGE INJECTION LOGIC (NON-INTRUSIVE)
---------------------------------------------------- */
function injectInlineImages(html: string) {
  const imageRegex = /\[\[image:(https?:\/\/[^\]]+)\]\]/g;

  return html.replace(
    imageRegex,
    (_, url) => `
      <div class="my-12 overflow-hidden rounded-2xl border border-white/10">
        <img
          src="${url}"
          alt="Blog image"
          loading="lazy"
          class="w-full object-cover"
        />
      </div>
    `
  );
}

export default async function BlogPage({ params }: Props) {
  const { slug } = params;
  await connectDB();

  const blog = await Blog.findOne({ slug, published: true }).populate(
    "author",
    "name"
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Not found
      </div>
    );
  }

  let html = "";

  try {
    const parser = editorjsHtml();

    if (typeof blog.content === "object") {
      const parsed = parser.parse(blog.content);
      html = injectInlineImages(parsed);
    } else {
      html = injectInlineImages(String(blog.content || ""));
    }
  } catch (e) {
    html =
      typeof blog.content === "string"
        ? injectInlineImages(blog.content)
        : JSON.stringify(blog.content);
  }


  const postUrl = `https://gaurav-portfolio.vercel.app/blog/${blog.slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(blog.title);
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <article className="max-w-3xl mx-auto px-4 py-16 text-white">
        {/* Header */}
        <header className="mb-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
            {blog.title}
          </h1>

          {/* Meta */}
          <p className="text-sm text-white/60 mb-6">
            By{" "}
            <span className="text-white/80">
              {blog.author?.name || "Unknown"}
            </span>{" "}
            · {new Date(blog.createdAt).toLocaleDateString()}
          </p>

          {/* Share Row */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-white/50 mr-2">Share:</span>

            {/* Copy Link */}

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
              title="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            {/* Twitter / X */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
              title="Share on Twitter"
            >
              <Twitter size={16} />
            </a>

            {/* Instagram (no direct share, links to profile/share intent) */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
              title="Share on Instagram"
            >
              <Instagram size={16} />
            </a>

            {/* Substack */}
            <a
              href={`https://substack.com/share?url=${encodedUrl}&title=${encodedTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/70 hover:text-white hover:bg-white/10 transition"
              title="Share on Substack"
            >
              <Send size={16} />
            </a>
          </div>
        </header>

        {/* Cover Image */}
        {blog.coverImage && (
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
                     prose-headings:font-semibold
                     prose-p:text-white/80
                     prose-a:text-white
                     underline-offset-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Comments */}
        <CommentSection blogId={String(blog._id)} />
      </article>

      <Footer />
    </main>
  );
}
