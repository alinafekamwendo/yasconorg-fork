"use client";
import "./southern.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────
   REGION DATA
───────────────────────────────────────────── */
const ACCENT = "#1a5c1a";

const heroImages = [
  "/Images/Eastern1.png",
  "/Images/Eastern2.png",
  "/Images/Eastern3.png",
];

const stats = [
  { value: 4,    suffix: "",  label: "Districts",     desc: "Under Southern Coverage" },
  { value: 620,  suffix: "+", label: "Members",       desc: "Registered Youth" },
  { value: 1370, suffix: "+", label: "Trees Planted", desc: "Reforestation Total" },
  { value: 10,   suffix: "",  label: "Youth Clubs",   desc: "Active This Season" },
  { value: 22,   suffix: "+", label: "Activities",    desc: "Completed to Date" },
  { value: 5,    suffix: "",  label: "Key Partners",  desc: "NGOs & Government" },
];

/* Only districts NOT already in Eastern Region */
const districts = [
  { name: "Chikwawa", coordinator: "Dalitso Mwale",  activities: 8, trees: 520, members: 180 },
  { name: "Nsanje",   coordinator: "Esther Phangwa", activities: 6, trees: 380, members: 140 },
  { name: "Mwanza",   coordinator: "Tapiwa Mtande",  activities: 4, trees: 250, members: 98  },
  { name: "Neno",     coordinator: "Fatima Banda",   activities: 4, trees: 220, members: 90  },
];

const partners = [
  { name: "Shire Valley Transformation Programme", type: "Government / World Bank", image: "/Images/mangochi.jpg",  desc: "Co-implementing riverbank stabilisation and reforestation along the Lower Shire to reduce erosion and flood risk in Chikwawa and Nsanje." },
  { name: "Mulanje Mountain Conservation Trust",   type: "NGO",                    image: "/Images/mangochi1.jpg", desc: "Joint patrols and youth education campaigns to protect the UNESCO-listed Mulanje Massif from encroachment and illegal logging." },
  { name: "WWF Malawi",                            type: "International NGO",      image: "/Images/USAID.jpg",     desc: "Providing capacity-building, training materials, and co-funding for biodiversity monitoring in the Southern highlands." },
  { name: "Chancellor College (UNIMA)",            type: "Academic",               image: "/Images/Unima.jpg",     desc: "Research collaboration on vegetation cover change using satellite imagery and ground-truthing by YASCON youth teams." },
  { name: "GIZ Malawi",                            type: "Development Partner",    image: "/Images/ZOMBA.jpg",     desc: "Technical support for climate-smart agriculture integration within conservation programmes across Chikwawa and Nsanje." },
];

/* Only team members with photos */
const team = [
  { name: "Bridget Namakhwa", initials: "BN", image: "/Images/Bridget.png", role: "Regional Coordinator",   district: "Southern Region", bio: "Bridget holds a BSc in Education (Geography) from the Catholic University of Malawi and a certificate in Introduction to Child Protection. She initially served as a Conservation Coordinator, successfully leading YASCON's conservation activities across the Southern region. She brings proven communication, community mobilization, project management, leadership and coordination skills." },
  { name: "Salomy Chivunga",  initials: "SC", image: "/Images/Shalome.png",  role: "Communications Officer", district: "Southern Region", bio: "Salomy is a pending journalism graduate from the Malawi University of Business and Applied Sciences with training and experience in media, communications, and digital content production. She brings practical skills in news writing, feature writing, photography, videography, and social media content creation, gained through her internship at the Malawi Liverpool Wellcome Programme (MLW)." },
  { name: "Chisomo Kachali",  initials: "CK", image: "/Images/Chisomo.png", role: "District Coordinator",   district: "Chikwawa",        bio: "Chisomo coordinates youth conservation patrols and manages the region's largest tree nursery along the Lower Shire." },
];

const activities = [
  { title: "Lower Shire Riverbank Reforestation",       date: "April 2025",    district: "Chikwawa", type: "Tree Planting", participants: 180, desc: "Youth clubs planted 520 indigenous trees along critically eroded Shire riverbanks in partnership with the Shire Valley Transformation Programme to reduce sedimentation and flooding." },
  { title: "Nsanje Flood Awareness and Mangrove Drive", date: "February 2025", district: "Nsanje",   type: "Awareness",     participants: 220, desc: "Community awareness campaign on flood-risk reduction combined with riverbank vegetation restoration in flood-prone Nsanje villages." },
  { title: "Mwanza Riverbank Clean-Up",                 date: "November 2024", district: "Mwanza",   type: "Clean-Up",      participants: 95,  desc: "A major clean-up along the Mwanza River targeting plastic waste and invasive water plants blocking river flow and degrading water quality." },
  { title: "Neno Agroforestry Youth Workshop",          date: "January 2025",  district: "Neno",     type: "Workshop",      participants: 60,  desc: "A two-day training workshop on integrating trees into smallholder farms in Neno, co-facilitated with GIZ Malawi and local extension officers." },
  { title: "Chikwawa Vegetation Survey",                date: "December 2024", district: "Chikwawa", type: "Survey",        participants: 30,  desc: "Ground-truthing exercise comparing riverbank vegetation cover change along the Shire over the past decade, in collaboration with UNIMA researchers." },
  { title: "Nsanje School Conservation Campaign",       date: "October 2024",  district: "Nsanje",   type: "Awareness",     participants: 180, desc: "YASCON teams visited 6 secondary schools in Nsanje delivering talks on wetland protection, climate change, and the importance of riparian forests." },
];

const blogs = [
  { title: "The Lower Shire: Malawi's Most Threatened River",   date: "April 2025",    author: "Dalitso Mwale",    category: "Waterways",     readTime: "6 min read", excerpt: "The Lower Shire River has lost over 60% of its original riparian vegetation. YASCON's Chikwawa clubs are planting trees at scale — and the results are already visible after just one season." },
  { title: "Nsanje: Conservation on the Flood Frontline",       date: "March 2025",    author: "Esther Phangwa",   category: "Conservation",  readTime: "5 min read", excerpt: "Nsanje is Malawi's most flood-prone district. YASCON is working with communities on the ground to restore vegetation that protects lives and livelihoods." },
  { title: "Women Leading Conservation in Southern Malawi",     date: "February 2025", author: "Bridget Namakhwa", category: "Gender",        readTime: "5 min read", excerpt: "Over 50% of YASCON Southern Region's club leadership positions are now held by young women. We explore what that means for conservation outcomes on the ground." },
  { title: "A Decade of Deforestation: What the Data Shows",    date: "January 2025",  author: "Salomy Chivunga",  category: "Research",      readTime: "8 min read", excerpt: "Using satellite imagery and YASCON's own field data, this piece presents a sobering look at vegetation loss across the Southern Region — and what can still be saved." },
];

/* ─────────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────────── */
const TYPE_COLORS: Record<string, string> = {
  "Tree Planting": "#2d7a2d",
  "Clean-Up":      "#1a6b8a",
  "Workshop":      "#7a5c2d",
  "Awareness":     "#8a1a6b",
  "Survey":        "#2d5a7a",
};

/* React-safe image with fallback — NO direct DOM mutation */
function CardImage({ src, alt, initials, height = 220 }: { src: string; alt: string; initials?: string; height?: number }) {
  const [errored, setErrored] = useState(false);
  return (
    <div style={{ width: "100%", height: `${height}px`, overflow: "hidden", background: "#e8f5e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {!errored ? (
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={() => setErrored(true)}
        />
      ) : (
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: ACCENT + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", fontWeight: 900, color: ACCENT }}>
          {initials ?? alt.charAt(0)}
        </div>
      )}
    </div>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span className="px-3 py-1 rounded-sm text-xs font-bold tracking-wide" style={{ background: color + "18", color }}>
      {text}
    </span>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-black text-gray-900">{title}</h2>
    </div>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / 2000, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/* ─────────────────────────────────────────────
   TAB PANELS
───────────────────────────────────────────── */
function PartnersPanel() {
  return (
    <div>
      <SectionHeader label="Collaboration" title="Our Partners" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p, i) => (
          <div key={i} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200" style={{ borderRadius: "20px", border: "1px solid #e8f5e8" }}>
            <CardImage src={p.image} alt={p.name} initials={p.name.charAt(0)} height={220} />
            <div className="p-5">
              <div className="mb-3"><Badge text={p.type} color={ACCENT} /></div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{p.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPanel() {
  return (
    <div>
      <SectionHeader label="People" title="Our Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <div key={i} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200" style={{ borderRadius: "20px", border: "1px solid #e8f5e8" }}>
            <CardImage src={m.image} alt={m.name} initials={m.initials} height={220} />
            <div className="p-5">
              <div className="mb-3"><Badge text={m.district} color={ACCENT} /></div>
              <h3 className="font-bold text-gray-900 text-lg mb-1 leading-snug">{m.name}</h3>
              <div className="text-sm font-semibold mb-3" style={{ color: ACCENT }}>{m.role}</div>
              <div className="w-full h-px mb-3" style={{ background: "#e8f5e8" }} />
              <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DistrictCard({ d, rank, totalActivities, totalTrees }: { d: typeof districts[0]; rank: number; totalActivities: number; totalTrees: number }) {
  const districtImages: Record<string, string> = {
    Chikwawa: "/Images/mangochi1.jpg",
    Nsanje:   "/Images/Eastern1.png",
    Mwanza:   "/Images/balaka.jpg",
    Neno:     "/Images/Eastern2.png",
  };
  const [imgErrored, setImgErrored] = useState(false);
  const activityPct = Math.round((d.activities / totalActivities) * 100);
  const treesPct    = Math.round((d.trees / totalTrees) * 100);
  return (
    <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "#f0faf0", border: "1.5px solid #c6e8c6" }}>
      <div style={{ position: "relative", height: "144px", overflow: "hidden", background: ACCENT }}>
        {!imgErrored && (
          <img
            src={districtImages[d.name] ?? "/Images/Eastern1.png"}
            alt={d.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setImgErrored(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white z-10" style={{ background: ACCENT }}>{rank}</div>
        <div className="absolute bottom-2 left-3 z-10">
          <h3 className="font-black text-white text-lg leading-tight drop-shadow">{d.name}</h3>
          <div className="text-xs text-white/75 drop-shadow">{d.coordinator}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col gap-2 mb-4">
          {([["Activities", d.activities], ["Trees", d.trees.toLocaleString()], ["Members", d.members]] as [string, string | number][]).map(([lbl, val]) => (
            <div key={lbl} className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-800">{lbl}</span>
              <span className="text-sm font-black text-gray-900">{val}</span>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1"><span className="font-semibold text-gray-800">Activity share</span><span className="font-semibold text-gray-900">{activityPct}%</span></div>
          <div className="w-full h-1.5 rounded-full" style={{ background: "#e8f5e8" }}><div className="h-1.5 rounded-full" style={{ width: `${activityPct}%`, background: ACCENT }} /></div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1"><span className="font-semibold text-gray-800">Trees share</span><span className="font-semibold text-gray-900">{treesPct}%</span></div>
          <div className="w-full h-1.5 rounded-full" style={{ background: "#e8f5e8" }}><div className="h-1.5 rounded-full" style={{ width: `${treesPct}%`, background: "#0f4a1f" }} /></div>
        </div>
      </div>
    </div>
  );
}

function DistrictsPanel() {
  const totalActivities = districts.reduce((s, d) => s + d.activities, 0);
  const totalTrees      = districts.reduce((s, d) => s + d.trees, 0);
  const totalMembers    = districts.reduce((s, d) => s + d.members, 0);
  return (
    <div>
      <SectionHeader label="Coverage" title="Districts Overview" />
      <div className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-2xl" style={{ background: ACCENT }}>
        {[
          { label: "Total Activities",    value: totalActivities },
          { label: "Total Trees Planted", value: totalTrees.toLocaleString() + "+" },
          { label: "Total Members",       value: totalMembers },
        ].map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="text-3xl font-black text-white">{value}</div>
            <div className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: "#a8d8a8" }}>{label}</div>
          </div>
        ))}
      </div>

      <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>All Districts</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {districts.map((d, i) => (
          <DistrictCard key={d.name} d={d} rank={i + 1} totalActivities={totalActivities} totalTrees={totalTrees} />
        ))}
      </div>

      <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Full Breakdown</div>
      <div className="bg-white p-8 rounded-3xl" style={{ border: "1.5px solid #e8f5e8" }}>
        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Activities count</div>
        <div className="flex items-end justify-between gap-3" style={{ height: "280px" }}>
          {[...districts].sort((a, b) => b.activities - a.activities).map((d, i) => {
            const maxActivities = Math.max(...districts.map((x) => x.activities));
            const barHeightPct  = Math.round((d.activities / maxActivities) * 100);
            const barColors     = ["#0f4a1f", "#1a5c1a", "#2d6e2d", "#7abe7a"];
            return (
              <div key={d.name} className="flex flex-col items-center flex-1 h-full justify-end group">
                <div className="w-full rounded-t-2xl rounded-b-sm transition-all duration-700 group-hover:opacity-80" style={{ height: `${barHeightPct}%`, background: barColors[i], minHeight: "24px" }} />
                <div className="mt-3 text-center">
                  <div className="text-xs font-black text-gray-800 leading-tight">{d.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{d.coordinator.split(" ")[0]}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-px mt-1 mb-6" style={{ background: "#e8f5e8" }} />
        <div className="grid grid-cols-4 gap-3">
          {[...districts].sort((a, b) => b.activities - a.activities).map((d) => (
            <div key={d.name} className="text-center">
              <div className="text-xs font-black text-gray-700">{d.trees}</div>
              <div className="text-xs text-gray-400">trees</div>
              <div className="text-xs font-black text-gray-700 mt-1">{d.members}</div>
              <div className="text-xs text-gray-400">mbrs</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-6 pt-5 border-t border-gray-100 text-xs text-gray-400 font-semibold">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ background: ACCENT }} /> Most active</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ background: "#7abe7a" }} /> Least active</div>
          <div className="ml-auto">Bar height = relative activity count</div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({ a }: { a: typeof activities[0] }) {
  const districtImages: Record<string, string> = {
    Chikwawa: "/Images/mangochi1.jpg",
    Nsanje:   "/Images/Eastern1.png",
    Mwanza:   "/Images/balaka.jpg",
    Neno:     "/Images/Eastern2.png",
  };
  const [imgErrored, setImgErrored] = useState(false);
  return (
    <div className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" style={{ borderRadius: "20px", border: "1.5px solid #e8f5e8" }}>
      <div style={{ position: "relative", height: "176px", overflow: "hidden", background: ACCENT }}>
        {!imgErrored && (
          <img
            src={districtImages[a.district] ?? "/Images/Eastern1.png"}
            alt={a.district}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setImgErrored(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 z-10"><Badge text={a.type} color={TYPE_COLORS[a.type] ?? ACCENT} /></div>
        <div className="absolute bottom-3 left-4 z-10"><div className="text-white text-xs font-semibold opacity-80">{a.district}</div></div>
      </div>
      <div className="p-5">
        <h3 className="font-black text-gray-900 text-base leading-snug mb-2">{a.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{a.desc}</p>
        <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-semibold">
          <span>{a.date}</span><span>{a.participants} participants</span>
        </div>
      </div>
    </div>
  );
}

function ActivitiesPanel() {
  const [filter, setFilter] = useState("All");
  const types    = ["All", ...Array.from(new Set(activities.map((a) => a.type)))];
  const filtered = filter === "All" ? activities : activities.filter((a) => a.type === filter);
  return (
    <div>
      <SectionHeader label="On the Ground" title="Activities" />
      <div className="flex flex-wrap gap-2 mb-8">
        {types.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className="px-4 py-2 rounded-sm text-sm font-semibold transition-all duration-200"
            style={filter === t ? { background: ACCENT, color: "#fff" } : { background: "#f3f4f6", color: "#374151" }}>
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((a, i) => <ActivityCard key={i} a={a} />)}
      </div>
    </div>
  );
}

function BlogCard({ b, imgSrc }: { b: typeof blogs[0]; imgSrc: string }) {
  const [imgErrored, setImgErrored] = useState(false);
  return (
    <div className="bg-white overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" style={{ borderRadius: "20px", border: "1.5px solid #e8f5e8" }}>
      <div style={{ position: "relative", height: "176px", overflow: "hidden", background: ACCENT }}>
        {!imgErrored && (
          <img
            src={imgSrc}
            alt={b.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={() => setImgErrored(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <Badge text={b.category} color={ACCENT} />
          <span className="text-xs text-white/80 font-semibold">{b.readTime}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-black text-gray-900 text-lg leading-snug mb-3 group-hover:text-green-800 transition-colors">{b.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">{b.excerpt}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: ACCENT }}>{b.author.charAt(0)}</div>
          <span>{b.author}</span><span>·</span><span>{b.date}</span>
        </div>
      </div>
    </div>
  );
}

function BlogsPanel() {
  const blogImages = ["/Images/mangochi1.jpg", "/Images/Eastern1.png", "/Images/balaka.jpg", "/Images/Eastern2.png"];
  return (
    <div>
      <SectionHeader label="Stories" title="Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((b, i) => <BlogCard key={i} b={b} imgSrc={blogImages[i] ?? "/Images/Eastern1.png"} />)}
      </div>
    </div>
  );
}

function StatsPanel() {
  return (
    <div>
      <SectionHeader label="Impact" title="Regional Statistics" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 shadow-sm text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style={{ borderRadius: "20px", border: "1.5px solid #e8f5e8" }}>
            <div className="text-4xl font-black mb-1" style={{ color: ACCENT }}><CountUp target={s.value} suffix={s.suffix} /></div>
            <div className="font-bold text-gray-900 mb-1">{s.label}</div>
            <div className="text-xs text-gray-400">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
type Tab = "partners" | "team" | "districts" | "activities" | "blogs" | "stats";
const TABS: { id: Tab; label: string }[] = [
  { id: "partners",   label: "Our Partners"       },
  { id: "team",       label: "Our Team"            },
  { id: "districts",  label: "Districts"           },
  { id: "activities", label: "Activities"          },
  { id: "blogs",      label: "Blogs"               },
  { id: "stats",      label: "Regional Statistics" },
];

export default function SouthernRegionPage() {
  const [activeTab,    setActiveTab]    = useState<Tab>("activities");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* HERO */}
      <div className="relative h-screen flex flex-col justify-start overflow-hidden">
        {heroImages.map((img, idx) => (
          <div key={idx} className={`hero-slide kb-${idx}`} style={{ opacity: idx === currentImage ? 1 : 0, zIndex: idx === currentImage ? 1 : 0 }}>
            <img src={img} alt={`Southern Region hero ${idx + 1}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

        <div className="absolute top-6 right-6 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentImage(idx)} className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ background: idx === currentImage ? "#fff" : "rgba(255,255,255,0.35)", transform: idx === currentImage ? "scale(1.3)" : "scale(1)" }} />
          ))}
        </div>

        <div className="relative z-20 px-8 md:px-16 pt-20 max-w-6xl">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#4ade80", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            YASCON Regional Hub
          </div>
          <h1 className="font-black text-white leading-none mb-5"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", textShadow: "0 4px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)", letterSpacing: "-0.02em" }}>
            Southern Region
          </h1>
          <p className="text-xl font-semibold text-white mb-3 max-w-2xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
            Protecting Malawi's most densely populated region — from the Shire Valley to the highlands.
          </p>
          <p className="text-base text-white/80 max-w-2xl leading-relaxed mb-10" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>
            YASCON's Southern Region covers Chikwawa, Nsanje, Mwanza, and Neno — tackling riverbank erosion,
            flooding, and wetland loss along the Lower Shire and into Malawi's remote western highlands.
          </p>
          <div className="flex flex-wrap gap-8">
            {stats.slice(0, 4).map((s, i) => (
              <div key={i} className="text-white">
                <div className="text-3xl font-black leading-none" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
                  {s.value.toLocaleString()}{s.suffix}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY TAB BAR */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide px-4">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 flex-shrink-0"
              style={activeTab === tab.id ? { borderColor: ACCENT, color: ACCENT } : { borderColor: "transparent", color: "#111" }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "partners"   && <PartnersPanel />}
        {activeTab === "team"       && <TeamPanel />}
        {activeTab === "districts"  && <DistrictsPanel />}
        {activeTab === "activities" && <ActivitiesPanel />}
        {activeTab === "blogs"      && <BlogsPanel />}
        {activeTab === "stats"      && <StatsPanel />}
      </div>
    </div>
  );
}