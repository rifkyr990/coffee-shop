import Image from "next/image";
import { Award, Users, Leaf, Globe, Coffee, Star } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "We partner directly with certified-organic farms and pay above fair trade prices, ensuring ethical supply chains and sustainable practices at origin.",
  },
  {
    icon: Award,
    title: "Craft Excellence",
    description:
      "Our roasting team cupp hundreds of lots each season. Only those scoring above 80 SCA points earn a place on our menu.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We host monthly cupping events, brewing workshops, and support local artists by regularly featuring their work in our space.",
  },
  {
    icon: Globe,
    title: "Global Origins",
    description:
      "We rotate single-origin beans from Ethiopia, Colombia, Rwanda, Guatemala, and Sumatra across our seasonal menu.",
  },
];

const team = [
  {
    name: "Dian Hartono",
    role: "Head Barista & Co-founder",
    bio: "Former SCA World Barista Championship semi-finalist with 10 years in specialty coffee across Jakarta and Singapore.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    name: "Maya Kusuma",
    role: "Head Roaster",
    bio: "Trained at Square Mile Coffee in London, Maya leads our sourcing trips and develops every roast profile from her custom drum roaster.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b39c?w=300&q=80",
  },
  {
    name: "Andi Maulana",
    role: "Executive Chef",
    bio: "Andi's background in French patisserie informs our food menu — where every item is made fresh in-house from whole ingredients.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
];

const milestones = [
  {
    year: "2020",
    event: "AromaCo. opens its first 45-seat location in Kemang, Jakarta.",
  },
  {
    year: "2021",
    event: "Named Best New Café by Jakarta Food Magazine. 10,000 cups served.",
  },
  {
    year: "2022",
    event: "Launched our direct-trade relationship with two Ethiopian farms.",
  },
  {
    year: "2023",
    event:
      "Expanded to a second location in SCBD and launched retail bean subscriptions.",
  },
  {
    year: "2024",
    event: "Hosted 50+ community events, brewing workshops, and art pop-ups.",
  },
  {
    year: "2025",
    event:
      "AromaCo. Roastery opens — a dedicated production space and coffee lab.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative pt-16 overflow-hidden">
        <div className="relative h-[55vh] min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=85"
            alt="Barista crafting coffee"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-950/50 to-stone-950/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-amber-400 font-medium tracking-[0.25em] uppercase text-sm mb-3">
              Who We Are
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-tight">
              Our Story
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Born from a Love of the Perfect Cup
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-5">
            It started with a question: why is truly great coffee only accessible
            to those who know where to look? AromaCo. was founded in 2020 by two
            friends — a barista champion and a chef — to answer that question
            with a simple, beautiful café.
          </p>
          <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
            We believe great coffee is a story — of farmers, soil, weather, craft
            and care. Our job is to honour every chapter of that story in the cup
            we hand you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-50 dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
              Our Guiding Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white dark:bg-stone-900 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center mb-5 group-hover:bg-amber-200 dark:group-hover:bg-amber-950/80 transition-colors">
                  <Icon className="w-6 h-6 text-amber-700 dark:text-amber-500" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                  {title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 dark:text-amber-500 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              The People
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-stone-100 dark:ring-stone-800 group-hover:ring-amber-200 dark:group-hover:ring-amber-900 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="192px"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-700 dark:text-amber-500 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-amber-950 dark:bg-stone-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-400 font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-amber-700/40 -translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-amber-500 -translate-x-1/2 mt-1.5 ring-4 ring-amber-950 dark:ring-stone-950 z-10" />
                  <div className="pl-10 sm:pl-0 sm:w-1/2 sm:pr-10 sm:text-right even:sm:pr-0 even:sm:pl-10 even:sm:text-left">
                    <span className="inline-block text-amber-400 font-bold text-lg font-serif mb-1">
                      {m.year}
                    </span>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <div className="bg-stone-100 dark:bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {[
              "Best New Café 2021",
              "4.9 ★ Google Rating",
              "SCA Member",
              "Fair Trade Certified",
              "Top 10 Jakarta Cafés 2023",
            ].map((award) => (
              <div
                key={award}
                className="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm font-medium"
              >
                <Star className="w-4 h-4 text-amber-600 fill-amber-600 shrink-0" />
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
