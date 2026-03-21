import Image from "next/image";

type Member = {
  name: string;
  role: string;
  joined?: string;
  avatar: string;
  focus: string;
};

const nationalCoordinator: Member = {
  name: "Mwai Mtayamanja",
  role: "National Coordinator",
  avatar: "/teampics/national-coordinator.png",
  focus: "Guides strategy, partnerships, and nationwide program delivery.",
};

const team: Member[] = [
  {
    name: "Clement Chiwambo",
    role: "Funding & Compliance Manager",
    joined: "2025",
    avatar: "/teampics/funding-officer.png",
    focus: "Stewards grants, reporting, and donor relationships.",
  },
  {
    name: "Rashid Mailos",
    role: "Extension Methodologies Manager",
    joined: "2025",
    avatar: "/teampics/extensions-officer.png",
    focus: "Designs youth-led field methods and monitoring tools.",
  },
  {
    name: "Salomy Chivunga",
    role: "Public Relations & Events Manager",
    joined: "2025",
    avatar: "/teampics/public-relations.png",
    focus: "Builds our public story and convenes partners on key moments.",
  },
  {
    name: "Mussa John Witness",
    role: "Media Relations Manager",  
    joined: "2025",
    avatar: "/teampics/mediarelations.png",
    focus: "Leads multimedia storytelling across radio, print, and digital.",
  },
  {
    name: "Martha Megan Phiri",
    role: "Regional Coordinator - North",
    joined: "2025",
    avatar: "/teampics/northern-coordinator.png",
    focus: "Coordinates district clubs and reforestation actions in the North.",
  },
  {
    name: "Chisomo Nyirenda",
    role: "Regional Coordinator - Central",
    joined: "2025",
    avatar: "/teampics/central-coordinator.png",
    focus: "Supports schools and communities across the Central Region.",
  },
  {
    name: "Prince Magombo",
    role: "Regional Coordinator - East",
    joined: "2025",
    avatar: "/teampics/eastern-coordinator.png",
    focus: "Champions shoreline resilience and youth training in the East.",
  },
  {
    name: "Bridget Namakhwa",
    role: "Regional Coordinator - South",
    joined: "2025",
    avatar: "/teampics/southern-coordinator.png",
    focus: "Leads southern conservation clubs and community mobilization.",
  },
];

function FeaturedCard({ member }: { member: Member }) {
  return (
    <article className="relative overflow-hidden shadow-2xl bg-white border border-gray-100 py-6">
      <div className="relative h-64  text-white px-6 py-6 flex flex-col  justify-end">
        <div className="absolute inset-0">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover "
            sizes="(min-width: 1024px) 400px, 90vw"
            priority
          />
        </div>
        
      </div>
      <div className="p-6">
        <div className="relative">
          
          <h3 className="text-2xl text-green-950 font-extrabold leading-tight drop-shadow">
            {member.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a017]">
            {member.role}
          </p>
          <p className="text-sm font-semibold text-white/90 mt-1">{member.role}</p>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{member.focus}</p>
      </div>
    </article>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (

   <article className="overflow-hidden  shadow-lg border border-gray-100 bg-white backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl transition">
      <div className="relative h-64 b text-white px-6 py-6 flex flex-col  justify-end">
        <div className="absolute inset-0">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            className="object-cover "
            sizes="(min-width: 1024px) 400px, 90vw"
            priority
          />
        </div>
        
      </div>
      <div className="p-6">
        <div className="relative">
          
          <h3 className="text-2xl text-green-950 font-extrabold leading-tight drop-shadow">
            {member.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4a017]">
            {member.role}
          </p>
          <p className="text-sm font-semibold text-white/90 mt-1">{member.role}</p>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{member.focus}</p>
        <p className="text-sm text-gray-500 font-light leading-relaxed py-2">Joined in {member.joined}</p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[url(/team/river-forest.avif)] bg-cover bg-center text-white bg-[#1a2e1a] ">
      <section className="relative overflow-hidden  bg-cover bg-center text-white py-24 px-4 text-center">
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#d4a017] bg-[#1a2e1a]/80 px-3 py-2 rounded-full">
            <span className="h-px w-5 bg-[#d4a017]" />
            Leadership
            <span className="h-px w-5 bg-[#d4a017]/60" />
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 drop-shadow-lg">
            Management Team
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90">
            The people steering YASCON's mission - unified across national leadership
            and regional coordination.
          </p>
          <div className="w-12 h-[3px] bg-[#d4a017] mt-8 mx-auto rounded-sm shadow-lg shadow-[#d4a017]/40" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative -mt-10 md:-mt-14 z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 lg:row-span-2">
            <FeaturedCard member={nationalCoordinator} />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
