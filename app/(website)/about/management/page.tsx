import Image from "next/image";

type Member = {
  name: string;
  role: string;
  joined?: string;
  avatar: string;
  focus: string;
  bio?: string;
};

const nationalCoordinator: Member = {
  name: "Mwai Mtayamanja",
  role: "National Coordinator",
  avatar: "/teampics/national-coordinator.webp",
  focus: "Guides strategy, partnerships, and nationwide program delivery.",
  bio: "A distinguished anthropologist and dedicated young conservation leader, co-founder of YASCON, and a prominent advocate for youth empowerment. His work focuses on harnessing youth leadership to drive conservation and promote sustainable development in Malawi. Through entrepreneurship, innovation, and research, Mwai aims to create opportunities for young people to thrive and realise their full potential.",
};

const team: Member[] = [
  {
    name: "Clement Chiwambo",
    role: "Funding & Compliance Manager",
    joined: "2025",
    avatar: "/teampics/funding-officer.webp",
    focus: "Stewards grants, reporting, and donor relationships.",
  },
  {
    name: "Rashid Mailos",
    role: "Extension Methodologies Manager",
    joined: "2025",
    avatar: "/teampics/extensions-officer.webp",
    focus: "Designs youth-led field methods and monitoring tools.",
  },
  {
    name: "Salomy Chivunga",
    role: "Public Relations & Events Manager",
    joined: "2025",
    avatar: "/teampics/public-relations.webp",
    focus: "Builds our public story and convenes partners on key moments.",
  },
  {
    name: "Mussa John Witness",
    role: "Media Relations Manager",
    joined: "2025",
    avatar: "/teampics/mediarelations.webp",
    focus: "Leads multimedia storytelling across radio, print, and digital.",
  },
  {
    name: "Martha Megan Phiri",
    role: "Regional Coordinator - North",
    joined: "2025",
    avatar: "/teampics/northern-coordinator.webp",
    focus: "Coordinates district clubs and reforestation actions in the North.",
  },
  {
    name: "Chisomo Nyirenda",
    role: "Regional Coordinator - Central",
    joined: "2025",
    avatar: "/teampics/central-coordinator.webp",
    focus: "Supports schools and communities across the Central Region.",
  },
  {
    name: "Prince Magombo",
    role: "Regional Coordinator - East",
    joined: "2025",
    avatar: "/teampics/east-region-coordinator.webp",
    focus: "Champions shoreline resilience and youth training in the East.",
  },
  {
    name: "Bridget Namakhwa",
    role: "Regional Coordinator - South",
    joined: "2025",
    avatar: "/teampics/southern-coordinator.webp",
    focus: "Leads southern conservation clubs and community mobilization.",
  },
];

function NationalCoordinatorCard({ member }: { member: Member }) {
  return (
    <article className="overflow-hidden shadow-2xl border-2 border-[#d4a017]/50 bg-white">
      <div className="h-1 w-full bg-gradient-to-r from-[#d4a017] via-yellow-300 to-[#d4a017]" />
      <div className="relative h-80 flex-shrink-0 bg-green-900">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="400px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4a017] bg-green-950/80 px-2 py-1 mb-2">
            National Coordinator
          </span>
          <h2 className="text-2xl font-extrabold text-white leading-tight">
            {member.name}
          </h2>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-1 bg-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-800 border-l-2 border-[#d4a017] pl-3">
          {member.focus}
        </p>
        {member.bio && (
          <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
        )}
        <div className="mt-auto pt-4 border-t border-[#d4a017]/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4a017]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4a017]">
            Co-Founder · YASCON
          </span>
        </div>
      </div>
    </article>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="overflow-hidden shadow-lg border border-gray-200 bg-white hover:-translate-y-1 hover:shadow-2xl transition duration-200 flex flex-col">
      <div className="relative h-56 flex-shrink-0 bg-green-900">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="300px"
          priority
        />
      </div>
      <div className="p-5 flex flex-col flex-1 bg-white">
        <h3 className="text-base font-extrabold text-green-950 leading-tight">
          {member.name}
        </h3>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4a017] mt-1 mb-3">
          {member.role}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {member.focus}
        </p>
        {member.joined && (
          <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100">
            Joined {member.joined}
          </p>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className="relative min-h-screen text-white">

      {/* ── Background: dark overlay over forest image ── */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/team/river-forest.avif"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Heavy dark overlay so cards are always readable */}
        <div className="absolute inset-0 bg-[#0d1a0e]/80" />
      </div>

      {/* ── Hero header ── */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#d4a017] bg-black/40 px-3 py-2 rounded-full">
            <span className="h-px w-5 bg-[#d4a017]" />
            Leadership
            <span className="h-px w-5 bg-[#d4a017]/60" />
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 drop-shadow-lg">
            Management Team
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80">
            The people steering YASCON&apos;s mission — unified across national
            leadership and regional coordination.
          </p>
          <div className="w-12 h-[3px] bg-[#d4a017] mt-8 mx-auto rounded-sm" />
        </div>
      </section>

    
      {/* ── Management Team ── */}
      <section className="max-w-7xl mx-auto flex flex-col sm:flex-row px-4 sm:px-6 py-10 pb-20">
      <div className="max-w-sm pr-4">
            <NationalCoordinatorCard member={nationalCoordinator} />
      </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}