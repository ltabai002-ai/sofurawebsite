import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Simple — Build Better, Ship Faster" },
      { name: "description", content: "A simple landing page built with TanStack Start and Tailwind CSS." },
      { property: "og:title", content: "Simple — Build Better, Ship Faster" },
      { property: "og:description", content: "A simple landing page built with TanStack Start and Tailwind CSS." },
    ],
  }),
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-lg font-semibold text-foreground">Simple</span>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Build something simple today
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A clean, minimal landing page that puts your message first. No clutter, no distractions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start now
              </Link>
              <a
                href="#features"
                className="rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-border bg-muted/50 px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
            {[
              { title: "Clean Design", desc: "A focused layout that keeps visitors on your message." },
              { title: "Fast Setup", desc: "Built with TanStack Start and Tailwind for rapid iteration." },
              { title: "Responsive", desc: "Looks great on every screen, from phone to desktop." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Why simple works</h2>
            <p className="mt-4 text-muted-foreground">
              The best landing pages communicate one thing clearly. This template gives you a solid foundation to do exactly that.
            </p>
          </div>
        </section>

        <section id="contact" className="bg-primary px-6 py-16 text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mt-4">Replace this content with your own call to action.</p>
            <Link
              to="/"
              className="mt-8 inline-block rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary hover:bg-primary-foreground/90"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Simple. All rights reserved.
      </footer>
    </div>
  );
}
