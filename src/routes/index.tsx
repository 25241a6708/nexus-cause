import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import {
  ArrowRight,
  Bell,
  Building2,
  Clock3,
  HeartHandshake,
  MapPin,
  PackageCheck,
  Radio,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactMap = lazy(() => import("@/components/ImpactMap"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SocialCause — Community Impact Coordination" },
      {
        name: "description",
        content: "Coordinate urgent community needs, local partners, and measurable impact in real time.",
      },
      { property: "og:title", content: "SocialCause — Community Impact Coordination" },
      {
        property: "og:description",
        content: "Coordinate urgent community needs, local partners, and measurable impact in real time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const activities = [
  {
    title: "FreshBite listed 60 surplus meals",
    meta: "2 min ago · Food partner",
    icon: PackageCheck,
    tone: "text-positive bg-positive/10",
  },
  {
    title: "Hope Community Center updated need",
    meta: "8 min ago · 30 meals remaining",
    icon: Building2,
    tone: "text-urgent bg-urgent/10",
  },
  {
    title: "Priya joined Mission #2048",
    meta: "14 min ago · Volunteer",
    icon: UsersRound,
    tone: "text-map bg-map/10",
  },
  {
    title: "40 meals marked ready for pickup",
    meta: "22 min ago · Green Plate",
    icon: Sparkles,
    tone: "text-positive bg-positive/10",
  },
];

function Index() {
  return (
    <div id="dashboard" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-[1000] border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] flex-col px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6">
            <a href="#dashboard" className="flex shrink-0 items-center gap-2.5" aria-label="SocialCause dashboard">
              <span className="grid size-9 place-items-center rounded-md bg-foreground text-background">
                <HeartHandshake className="size-5" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-extrabold">SocialCause</span>
            </a>

            <div className="hidden items-center gap-6 border-x border-border px-6 xl:flex">
              <Metric value="380" label="Impact Points" />
              <Metric value="240" label="Meals Coordinated" />
              <Metric value="520" label="People Reached" />
            </div>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              <NavLink href="#dashboard" active>Dashboard</NavLink>
              <NavLink href="#impact-map">Impact Map</NavLink>
              <NavLink href="#active-mission">Active Missions</NavLink>
              <NavLink href="#my-impact">My Impact</NavLink>
            </nav>

            <Button variant="ghost" size="icon" aria-label="Notifications" className="relative shrink-0">
              <Bell />
              <span className="absolute right-2 top-2 size-2 rounded-full bg-urgent ring-2 ring-card" />
            </Button>
          </div>

          <div className="flex gap-6 overflow-x-auto border-t border-border py-2 lg:hidden">
            <NavLink href="#dashboard" active>Dashboard</NavLink>
            <NavLink href="#impact-map">Impact Map</NavLink>
            <NavLink href="#active-mission">Missions</NavLink>
            <NavLink href="#my-impact">My Impact</NavLink>
          </div>
        </div>
      </header>

      <main className="grid-surface px-4 py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-[1500px]">
          <section id="active-mission" className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-[1fr_310px]">
              <div className="p-6 md:p-8">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-muted-foreground">
                    <Radio className="size-4 text-urgent" /> Priority response
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-urgent px-2.5 py-1 text-[11px] font-extrabold text-urgent-foreground shadow-[0_0_18px_color-mix(in_oklab,var(--urgent)_42%,transparent)]">
                    <span className="size-1.5 animate-pulse rounded-full bg-urgent-foreground" /> URGENT
                  </span>
                </div>
                <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">URGENT IMPACT MISSION</h1>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <span className="inline-flex items-center gap-2 font-bold"><Building2 className="size-4 text-map" />Hope Community Center</span>
                  <span className="text-muted-foreground">100 prepared meals for 120 people</span>
                </div>

                <div className="mt-8 max-w-3xl">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <p className="text-sm font-bold">70 / 100 Meals Fulfilled <span className="text-positive">(70%)</span></p>
                    <p className="text-xs font-semibold text-urgent">30 Meals Remaining</p>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[70%] rounded-full bg-positive shadow-impact" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-border bg-foreground p-6 text-background lg:border-l lg:border-t-0 lg:p-8">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase text-background/60">Time left</p>
                  <div className="flex items-center gap-3">
                    <Clock3 className="size-6 text-primary" />
                    <span className="text-3xl font-extrabold">5h 20m</span>
                  </div>
                  <p className="mt-2 text-sm text-background/65">Deadline: Today, 7:00 PM</p>
                </div>
                <Button variant="impact" size="xl" className="mt-8 w-full">
                  FIND HOW I CAN HELP <ArrowRight />
                </Button>
              </div>
            </div>
          </section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_370px]">
            <section id="impact-map" className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-map" />
                    <h2 className="text-lg font-extrabold">Live Impact Map</h2>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Kukatpally area · live availability</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-2"><i className="size-2.5 rounded-full bg-urgent" />Need</span>
                  <span className="flex items-center gap-2"><i className="size-2.5 rounded-full bg-map" />Available</span>
                </div>
              </div>
              <div className="relative h-[430px]">
                <ClientOnly fallback={<MapSkeleton />}>
                  <Suspense fallback={<MapSkeleton />}><ImpactMap /></Suspense>
                </ClientOnly>
              </div>
            </section>

            <aside className="rounded-lg border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2.5"><span className="absolute inline-flex size-full animate-ping rounded-full bg-positive opacity-60" /><span className="relative inline-flex size-2.5 rounded-full bg-positive" /></span>
                    <h2 className="text-lg font-extrabold">Live Activity</h2>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Updates from your community</p>
                </div>
                <span className="rounded-sm bg-positive/10 px-2 py-1 text-[10px] font-extrabold uppercase text-positive">Live</span>
              </div>
              <div className="px-5">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.title} className="relative flex gap-4 border-b border-border py-5 last:border-0">
                      {index < activities.length - 1 && <span className="absolute left-[17px] top-12 h-12 w-px bg-border" />}
                      <span className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-md ${activity.tone}`}><Icon className="size-4" /></span>
                      <div>
                        <p className="text-sm font-bold leading-snug">{activity.title}</p>
                        <p className="mt-1.5 text-xs text-muted-foreground">{activity.meta}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="my-impact" className="border-t border-border bg-muted/45 p-5">
                <div className="flex items-center gap-2 text-sm font-bold"><ShieldCheck className="size-4 text-positive" />Your contribution this week</div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div><p className="text-2xl font-extrabold">42</p><p className="text-xs text-muted-foreground">People helped</p></div>
                  <div><p className="text-2xl font-extrabold">3</p><p className="text-xs text-muted-foreground">Missions joined</p></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="whitespace-nowrap"><span className="text-sm font-extrabold text-positive">{value}</span><span className="ml-1.5 text-[11px] font-semibold text-muted-foreground">{label}</span></div>;
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return <a href={href} className={`whitespace-nowrap rounded-md px-3 py-2 text-xs font-bold transition-colors ${active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{children}</a>;
}

function MapSkeleton() {
  return <div className="grid h-full place-items-center bg-muted"><div className="flex items-center gap-2 text-sm font-bold text-muted-foreground"><MapPin className="size-4 animate-pulse" />Loading live map</div></div>;
}
