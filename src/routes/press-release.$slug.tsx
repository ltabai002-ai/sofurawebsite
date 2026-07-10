import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useCallback } from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { ArrowLeft, ArrowRight, Calendar, User, Loader2, FileText, Link as LinkIcon, Check, Share2, Newspaper } from "lucide-react";
import { useLang } from "@/components/LanguageContext";
import { getPostBySlug, getAllPosts, urlFor, type SanityPost, type SanityPostPreview } from "@/lib/sanity";

export const Route = createFileRoute("/press-release/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Loading... — SOFURA` },
    ],
  }),
  component: ArticlePage,
});

function randomKey(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

function groupConsecutiveImages(blocks: any[]): any[] {
  const result: any[] = [];
  let group: any[] = [];
  for (const block of blocks) {
    if (block._type === "image" && (block.asset?._ref || block._ref)) {
      group.push(block);
    } else {
      if (group.length) {
        result.push({ _type: "gallery", _key: randomKey(), images: group });
        group = [];
      }
      result.push(block);
    }
  }
  if (group.length) {
    result.push({ _type: "gallery", _key: randomKey(), images: group });
  }
  return result;
}

function createPTComponents(onImageClick: (url: string) => void): PortableTextComponents {
  return {
    block: {
      normal: ({ children }) => <p className="mb-5 leading-[1.8] text-foreground/85">{children}</p>,
      h1: ({ children }) => <h1 className="mt-10 mb-5 font-serif text-3xl font-bold text-primary">{children}</h1>,
      h2: ({ children }) => <h2 className="mt-8 mb-4 font-serif text-2xl font-bold text-primary">{children}</h2>,
      h3: ({ children }) => <h3 className="mt-6 mb-3 font-serif text-xl font-bold text-primary">{children}</h3>,
      h4: ({ children }) => <h4 className="mt-5 mb-2 font-serif text-lg font-bold text-primary">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="my-8 border-l-[3px] border-gold bg-gold/5 pl-5 py-3 italic text-foreground/80 rounded-r-lg">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="mb-5 list-disc pl-6 space-y-1.5 text-foreground/85">{children}</ul>,
      number: ({ children }) => <ol className="mb-5 list-decimal pl-6 space-y-1.5 text-foreground/85">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      link: ({ value, children }) => (
        <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2 hover:opacity-80 transition">
          {children}
        </a>
      ),
    },
    types: {
      gallery: ({ value }) => {
        if (!value?.images?.length) return null;
        const { images } = value;
        const count = images.length;

        if (count === 1) {
          const img = images[0];
          return (
            <figure className="my-8">
              <button
                onClick={() => onImageClick(urlFor(img).width(1600).url())}
                className="block mx-auto cursor-pointer max-w-[600px] w-full md:w-auto"
              >
                <img
                  src={urlFor(img).width(600).url()}
                  alt={img.alt || ""}
                  loading="lazy"
                  className="w-full md:w-auto h-auto max-w-full mx-auto rounded-[16px] shadow-md"
                />
              </button>
              {img.alt && (
                <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">{img.alt}</figcaption>
              )}
            </figure>
          );
        }

        const gridClass =
          count === 2
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4";

        return (
          <figure className="my-8">
            <div className={gridClass}>
              {images.map((img: any) => (
                <button
                  key={img._key}
                  onClick={() => onImageClick(urlFor(img).width(1600).url())}
                  className="group relative w-full overflow-hidden rounded-[16px] shadow-md cursor-pointer text-left"
                >
                  <img
                    src={urlFor(img).width(count === 2 ? 400 : 300).url()}
                    alt={img.alt || ""}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[4/3] transition duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </figure>
        );
      },
      htmlEmbed: ({ value }) => {
        if (!value?.html) return null;
        return (
          <div className="my-8" dangerouslySetInnerHTML={{ __html: value.html }} />
        );
      },
    },
  };
}

function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      bg: "bg-[#25D366] hover:bg-[#20bd5a]",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      bg: "bg-[#1877F2] hover:bg-[#166fe5]",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      bg: "bg-[#000] hover:bg-[#1a1a1a] dark:bg-[#fff] dark:hover:bg-[#e6e6e6] dark:text-black",
    },
  ];

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [url]);

  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
        <Share2 className="h-4 w-4" /> Share
      </span>
      <div className="flex items-center gap-1.5">
        {shareLinks.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-white transition ${s.bg}`}
          >
            {s.name === "WhatsApp" ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ) : s.name === "Facebook" ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            )}
          </a>
        ))}
        <button
          onClick={handleCopyLink}
          className={`flex h-9 w-9 items-center justify-center rounded-full border border-border transition ${
            copied ? "bg-green-500 text-white border-green-500" : "hover:bg-muted text-muted-foreground"
          }`}
          aria-label="Copy link"
        >
          {copied ? <Check className="h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function Lightbox({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <img
        src={url}
        alt=""
        className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [related, setRelated] = useState<SanityPostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    Promise.all([getPostBySlug(slug), getAllPosts()])
      .then(([postData, allPosts]) => {
        if (postData) {
          setPost(postData);
          setRelated(allPosts.filter((p) => p.slug.current !== slug).slice(0, 4));
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch article:", err);
        setLoading(false);
      });
  }, [slug]);

  const processedBody = useMemo(() => {
    if (!post?.body) return undefined;
    return groupConsecutiveImages(post.body as any[]);
  }, [post?.body]);

  const ptComponents = useMemo(() => createPTComponents(setLightboxUrl), []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
          <FileText className="h-10 w-10 text-gold" />
        </div>
        <h1 className="mt-6 font-serif text-3xl font-bold text-primary">
          {t("Article not found", "প্ৰবন্ধ পোৱা নগ'ল")}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          {t("The article you're looking for doesn't exist or has been removed.", "আপুনি বিচৰা প্ৰবন্ধটো নাই বা আঁতৰোৱা হৈছে।")}
        </p>
        <Link
          to="/press-release"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gold px-6 py-3 font-semibold text-gold-foreground hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" /> {t("Back to Press Releases", "প্ৰেছ বিজ্ঞপ্তিলৈ উভতি যাওক")}
        </Link>
      </div>
    );
  }

  const mainImageUrl = post.mainImage?.asset?._ref ? urlFor(post.mainImage).width(600).url() : null;

  const formattedDate = new Date(post._createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <Link
        to="/press-release"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:opacity-80 transition"
      >
        <ArrowLeft className="h-4 w-4" /> {t("Back to Press Releases", "প্ৰেছ বিজ্ঞপ্তিলৈ উভতি যাওক")}
      </Link>

      <div className="mt-8 flex flex-col-reverse md:flex-row md:gap-10 lg:gap-14">
        <div className="flex-1 md:w-[70%]">
          <header>
            <h1 className="font-serif text-3xl font-bold text-primary leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground border-b border-border pb-5">
              {post.author?.name && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" /> {post.author.name}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formattedDate}
              </span>
            </div>
          </header>

          <div className="mt-8 max-w-[750px] text-[18px] leading-[1.8] text-foreground/85">
            {processedBody ? (
              <PortableText value={processedBody as any} components={ptComponents} />
            ) : (
              <p className="text-muted-foreground italic">{t("No content available.", "কোনো সমল উপলব্ধ নাই।")}</p>
            )}
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <SocialShare title={post.title} />
          </div>
        </div>

        {mainImageUrl && (
          <div className="w-full md:w-[30%]">
            <div className="md:sticky md:top-24">
              <img
                src={mainImageUrl}
                alt={post.title}
                className="w-full max-w-[400px] h-auto object-cover rounded-[16px] shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        )}
      </div>

      {related.length > 0 && (
        <section className="mt-20 pt-10 border-t border-border">
          <h2 className="font-serif text-2xl font-bold text-primary mb-8">
            {t("Related Articles", "সম্পৰ্কীয় প্ৰবন্ধ")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r._id}
                to="/press-release/$slug"
                params={{ slug: r.slug.current }}
                className="group rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md block overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  {r.mainImage?.asset?._ref ? (
                    <img
                      src={urlFor(r.mainImage).width(400).height(225).url()}
                      alt={r.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Newspaper className="h-8 w-8 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-muted-foreground">
                    {new Date(r._createdAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <h3 className="mt-1.5 font-serif text-base font-bold text-primary group-hover:text-gold transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gold group-hover:gap-2 transition-all">
                    {t("Read More", "আৰু পঢ়ক")} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {lightboxUrl && (
        <Lightbox url={lightboxUrl} onClose={() => setLightboxUrl(null)} />
      )}
    </article>
  );
}
