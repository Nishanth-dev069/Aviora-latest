import { notFound } from 'next/navigation';
import ProgramHero from '@/components/programs/ProgramHero';
import ProgramBody from '@/components/programs/ProgramBody';

const PROGRAMS = [
  {
    slug: 'pilot-training',
    num: '01',
    tag: 'DGCA · CPL',
    title: 'Pilot Training',
    sub: 'Zero to Commercial Pilot Licence',
    desc: 'Complete ground school, FBS simulator, and international flight training in the USA. DGCA-aligned across all 4 written papers. The full CPL pathway.',
    duration: '18 – 24 Months',
    outcome: 'DGCA CPL + Instrument Rating',
    img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1600&q=90',
    heroOverlay: 'linear-gradient(135deg, rgba(7,61,127,0.88) 0%, rgba(7,61,127,0.60) 100%)',
    eyebrow: 'DGCA APPROVED · COMMERCIAL PILOT LICENCE',
    stats: [
      { label: 'Duration',     value: '18 – 24 Months'       },
      { label: 'Flight Hours', value: '200+ Hours'            },
      { label: 'Eligibility',  value: '10+2 · Age 17+'        },
    ],
    overview: 'The Commercial Pilot Licence is your gateway to a professional aviation career. DGCA-approved and ICAO-aligned, this program takes you from zero experience through ground school, FBS simulator training, and international flight hours in the USA — emerging as a fully qualified CPL holder with Instrument Rating.',
    curriculum: [
      {
        module: 'Ground School — 4 DGCA Papers',
        duration: '3 Months',
        topics: ['Air Regulations (CAR)', 'Air Navigation', 'Aviation Meteorology', 'Technical General & Specific', 'Radio Telephony (RT)'],
      },
      {
        module: 'FBS Simulator Training',
        duration: '2 Months',
        topics: ['Instrument procedures', 'Engine failure drills', 'IFR approaches', 'Emergency handling'],
      },
      {
        module: 'International Flight Training — USA',
        duration: '10 – 14 Months',
        topics: ['FAA Part 141 certified school', 'PA-34 Piper Seneca multi-engine', '225–252 flight hours', 'Solo and cross-country navigation', 'Night flying', 'Multi-engine IFR'],
      },
      {
        module: 'DGCA CPL Skill Test Prep',
        duration: '1 Month',
        topics: ['Mock DGCA written exams', 'Skill test briefing', 'DI/SP interview guidance', 'Licence conversion process'],
      },
    ],
    eligibility: [
      '10+2 with Physics & Mathematics (50%+)',
      'DGCA Class 1 Medical Certificate',
      'Age minimum 17 years',
      'English proficiency',
      'Valid passport for USA training',
    ],
    careerPaths: [
      'First Officer — IndiGo, Air India, SpiceJet',
      'Charter & Corporate Pilot',
      'Flight Instructor',
      'Cargo Pilot',
      'Upgrade to Type Rating → Airline Captain',
    ],
    certification: 'DGCA Commercial Pilot Licence · Multi-Engine Rating · Instrument Rating',
  },
  {
    slug: 'cabin-crew',
    num: '02',
    tag: 'Airlines · IndiGo · AirAsia',
    title: 'Cabin Crew',
    sub: 'Airline-Ready in 6 Months',
    desc: 'Grooming, safety, emergency procedures, mock cabin, and airline interview coaching. Structured for IndiGo, Air India, and international carrier standards.',
    duration: '6 Months',
    outcome: 'Certified Cabin Crew — Airline Ready',
    img: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=1600&q=90',
    heroOverlay: 'linear-gradient(135deg, rgba(100,145,222,0.72) 0%, rgba(7,61,127,0.88) 100%)',
    eyebrow: 'AIRLINE CERTIFIED · CABIN CREW PROGRAMME',
    stats: [
      { label: 'Duration',   value: '6 Months'                 },
      { label: 'Age Range',  value: '18 – 27 Years'            },
      { label: 'Placement',  value: 'Airline-Linked Programme'  },
    ],
    overview: 'Cabin crew are the first line of safety in the sky and the face of every airline. This comprehensive programme trains you in aviation emergency procedures, in-flight service excellence, professional grooming, and the communication standards demanded by IndiGo, Air India, AirAsia, and international carriers.',
    curriculum: [
      {
        module: 'Aviation Safety & Emergency Procedures',
        duration: '6 Weeks',
        topics: ['Emergency evacuation drills', 'Firefighting on-board', 'First Aid & CPR certification', 'Ditching & water survival', 'Passenger handling in emergencies'],
      },
      {
        module: 'In-Flight Service Excellence',
        duration: '5 Weeks',
        topics: ['Galley operations', 'Cabin service standards', 'Special needs passenger care', 'Catering, bar & duty-free service', 'Meal and beverage service protocols'],
      },
      {
        module: 'Communication & Professional Grooming',
        duration: '4 Weeks',
        topics: ['Voice, diction & accent neutralisation', 'Airline grooming standards', 'Uniform and presentation', 'CRM & crew cooperation'],
      },
      {
        module: 'Mock Drills & Airline Interview Prep',
        duration: '9 Weeks',
        topics: ['Full emergency drills (live mock cabin)', 'Live service mock scenarios', 'Group discussion practice', 'Airline selection interview coaching', 'IndiGo / Air India profile matching'],
      },
    ],
    eligibility: [
      '10+2 from recognised board',
      'Age 18 – 27 years',
      'Height: 157 cm minimum (Female) / 170 cm minimum (Male)',
      'Fit and healthy — no visible tattoos',
      'Fluent English; additional language an advantage',
      'Pleasant personality and strong communication skills',
    ],
    careerPaths: [
      'Cabin Crew — IndiGo, Air India, SpiceJet',
      'Cabin Crew — International Carriers (AirAsia, Emirates, Qatar)',
      'Senior Cabin Crew / Purser / Cabin Manager',
      'Corporate & Charter Aviation Crew',
      'Ground Hostess / Airport Guest Relations',
    ],
    certification: 'Aviora Cabin Crew Certification · Airline-Ready Graduate Profile',
  },
  {
    slug: 'global-training',
    num: '03',
    tag: 'FAA · USA · PA-34',
    title: 'Global Training',
    sub: 'Flight Hours in America',
    desc: 'FAA Part 141 certified schools. Phoenix AZ and California Sacramento. PA-34 Piper Seneca multi-engine. 225–252 hours depending on program. The international edge India cannot provide.',
    duration: '7 – 10 Months',
    outcome: '200+ FAA Flight Hours · CPL International Credit',
    img: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1600&q=90',
    heroOverlay: 'linear-gradient(135deg, rgba(13,27,42,0.90) 0%, rgba(7,61,127,0.75) 100%)',
    eyebrow: 'FAA PART 141 · USA FLIGHT TRAINING',
    stats: [
      { label: 'Duration',      value: '7 – 10 Months'                   },
      { label: 'Flight Hours',  value: '225 – 252 FAA Hours'              },
      { label: 'Locations',     value: 'Phoenix AZ · Sacramento CA'       },
    ],
    overview: 'The international edge India cannot provide. FAA Part 141 certified schools in Phoenix, Arizona and Sacramento, California. Training on the PA-34 Piper Seneca multi-engine aircraft across 225–252 hours depending on program. These hours carry direct credit toward your DGCA CPL, giving you the global exposure and precision that separates Aviora graduates from every other candidate.',
    curriculum: [
      {
        module: 'FAA Ground School & Pre-Solo',
        duration: '4 Weeks',
        topics: ['FAA Part 141 ground theory', 'Pre-solo knowledge test', 'Airport operations — Phoenix/Sacramento', 'Weather briefing & flight planning USA'],
      },
      {
        module: 'Primary Flight Training — Solo',
        duration: '8 Weeks',
        topics: ['Circuit and pattern work', 'First solo flight', 'Cross-country VFR navigation', 'Emergency procedures'],
      },
      {
        module: 'Advanced Flying — IFR & Multi-Engine',
        duration: '12 Weeks',
        topics: ['Instrument Flight Rules (IFR)', 'ILS and VOR approaches', 'Multi-engine operations — PA-34 Piper Seneca', 'OEI (One Engine Inoperative) procedures', 'Long cross-country navigation'],
      },
      {
        module: 'CPL Hours Build & Sign-Off',
        duration: '10 Weeks',
        topics: ['Hours accumulation to 225 – 252 total', 'Night flying requirements', 'FAA CPL sign-off flights', 'DGCA credit documentation package'],
      },
    ],
    eligibility: [
      'Enrolled in or completed Aviora Pilot Training programme',
      'Valid passport (minimum 1 year validity)',
      'USA Student or Training Visa',
      'DGCA Class 1 Medical Certificate',
      'Age minimum 17 years',
    ],
    careerPaths: [
      'FAA hours credited toward DGCA CPL',
      'Multi-engine type currency for airline entry',
      'International aviation profile for global airline applications',
      'Upgrade to Type Rating (A320/B737/ATR)',
    ],
    certification: '225 – 252 FAA Flight Hours · Multi-Engine Rating · DGCA CPL Credit Package',
  },
  {
    slug: 'type-rating',
    num: '04',
    tag: 'A320 · B737 · ATR',
    title: 'Type Rating',
    sub: 'From CPL to Airline First Officer',
    desc: "Aviora's global type rating partnerships across Vietnam, Madrid Spain, and Bangkok. A320, B737, and ATR programmes for DGCA CPL holders. Max 85 cadets per annual intake.",
    duration: '6 – 10 Weeks',
    outcome: 'DGCA Type Rating — Airline Entry',
    img: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1600&q=90',
    heroOverlay: 'linear-gradient(135deg, rgba(13,27,42,0.93) 0%, rgba(7,61,127,0.82) 100%)',
    eyebrow: 'OEM APPROVED · TYPE RATING PROGRAMME',
    stats: [
      { label: 'Duration',     value: '6 – 10 Weeks'                          },
      { label: 'Aircraft',     value: 'A320 · B737 · ATR'                      },
      { label: 'Locations',    value: 'Vietnam · Madrid · Bangkok'             },
    ],
    overview: "The final step from CPL to airline cockpit. Aviora's global type rating partnerships span Vietnam, Madrid (Spain), and Bangkok — giving DGCA CPL holders access to A320, B737, and ATR type rating programmes on Full Flight Simulators (FFS Level D). Maximum 85 cadets per annual intake ensures individual attention and direct airline placement support.",
    curriculum: [
      {
        module: 'Aircraft Systems Ground School',
        duration: '2 Weeks',
        topics: ['Powerplant & APU systems', 'Hydraulic & pneumatic systems', 'Electrical systems architecture', 'Avionics, FMGS & autopilot', 'Emergency systems & procedures'],
      },
      {
        module: 'Full Flight Simulator — FFS Level D',
        duration: '4 – 6 Weeks',
        topics: ['Normal & abnormal procedures', 'Engine failure & fire drills', 'Emergency evacuation scenarios', 'LOFT — Line Oriented Flight Training', 'Rejected takeoff & V1 cuts', 'ILS CAT II/III approaches'],
      },
      {
        module: 'OPC / LPC Proficiency Check',
        duration: '1 Week',
        topics: ['Operator Proficiency Check (OPC)', 'Line Check (LPC)', 'DGCA type endorsement application', 'Airline join documentation'],
      },
    ],
    eligibility: [
      'Valid DGCA Commercial Pilot Licence',
      'Valid Instrument Rating (IR)',
      'DGCA Class 1 Medical Certificate (current)',
      'Minimum 200 total flight hours',
      'Airline sponsorship or self-sponsored',
      'Valid passport for international training location',
    ],
    careerPaths: [
      'First Officer — IndiGo (A320)',
      'First Officer — Air India (B737/A320)',
      'First Officer — SpiceJet (B737)',
      'Regional Carrier (ATR) — Alliance Air, Star Air',
      'Command upgrade pathway to Captain',
      'Type Rating Instructor (TRI) / Examiner (TRE)',
    ],
    certification: 'DGCA-endorsed Type Rating · A320 or B737 or ATR (programme dependent)',
  },
];

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const program = PROGRAMS.find((p) => p.slug === resolvedParams.slug);
  if (!program) notFound();
  return (
    <>
      <ProgramHero program={program} />
      <ProgramBody program={program} />
    </>
  );
}
