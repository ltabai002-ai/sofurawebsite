import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Newspaper, Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useLang } from "@/components/LanguageContext";
import { getAllPosts, urlFor, type SanityPostPreview } from "@/lib/sanity";

export const Route = createFileRoute("/press-release")({
  head: () => ({
    meta: [
      { title: "Press Release — SOFURA Educational Trust" },
      { name: "description", content: "Latest press releases, announcements and updates from SOFURA Educational Trust, Assam." },
    ],
  }),
  component: PressRelease,
});

function PressRelease() {
  const { t } = useLang();
  const [posts, setPosts] = useState<SanityPostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isList = pathname === "/press-release";

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch posts:", err);
        setLoading(false);
      });
  }, []);

  if (!isList) {
    return <Outlet />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
          <Newspaper className="h-4 w-4" /> {t("Press Release", "প্ৰেছ বিজ্ঞপ্তি")}
        </span>
        <h1 className="mt-2 font-serif text-5xl font-bold text-primary md:text-6xl">
          {t("Press Release", "প্ৰেছ বিজ্ঞপ্তি")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          {t(
            "Latest announcements, articles and updates from SOFURA Educational Trust.",
            "ছফুৰা এডুকেশ্যনেল ট্ৰাষ্টৰ পৰা সাম্প্ৰতিক ঘোষণা, প্ৰবন্ধ আৰু আপডেট।"
          )}
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-gold" />
        </div>
      ) : posts.length === 0 ? (
        <div className="mt-20 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
            <Newspaper className="h-10 w-10 text-gold" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-primary">
            {t("No articles yet", "এতিয়ালৈকে কোনো প্ৰবন্ধ নাই")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            {t(
              "Articles and press releases will be published here soon. Please check back later.",
              "প্ৰবন্ধ আৰু প্ৰেছ বিজ্ঞপ্তি সোনকালে ইয়াত প্ৰকাশ কৰা হ'ব। অনুগ্ৰহ কৰি পিছত চাওক।"
            )}
          </p>
        </div>
      ) : (
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              to="/press-release/$slug"
              params={{ slug: post.slug.current }}
              className="group rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md block overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                {post.mainImage?.asset?._ref ? (
                  <img
                    src={urlFor(post.mainImage).width(600).height(338).url()}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Newspaper className="h-10 w-10 text-muted-foreground/30" />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post._createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-primary group-hover:text-gold transition-colors leading-snug">
                  {post.title}
                </h3>
                {post.author?.name && (
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>{post.author.name}</span>
                  </div>
                )}
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold transition group-hover:gap-2">
                  {t("Read More", "আৰু পঢ়ক")} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
