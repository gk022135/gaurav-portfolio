import Link from "next/link";

type Props = {
  blog: any;
};

export default function BlogCard({ blog }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-sm transition hover:shadow-lg hover:border-white/20">
      {/* Cover Image */}
      {blog.coverImage && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        <h2 className="text-xl font-semibold leading-snug text-white mb-2 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-sm text-white/60 mb-4">
          By{" "}
          <span className="text-white/80">
            {blog.author?.name || "Unknown"}
          </span>{" "}
          · {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition group-hover:text-white"
        >
          Read post
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
