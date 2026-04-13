export interface Program {
  slug: string;
  title: string;
  tagline: string;
  codeBadge: string;
  bgImage: string;
  heroGradient: string;
  stats: {
    duration: string;
    totalHours: string;
    eligibility: string;
  };
  content?: string[]; // Generic content paragraphs for the alternating layout
}

export const programs: Program[] = [
  {
    slug: 'cpl',
    title: 'Commercial Pilot Licence',
    tagline: 'Zero to Commercial Pilot with international flight training.',
    codeBadge: 'DGCA APPROVED · CPL',
    bgImage: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(7,61,127,0.88) 0%, rgba(7,61,127,0.6) 100%)',
    stats: {
      duration: '18 – 24 Months',
      totalHours: '252 Hours',
      eligibility: '10+2 Physics & Maths',
    },
    content: [
      'The Aviora Commercial Pilot Licence (CPL) program provides a seamless zero-to-hero pipeline for cadets looking to start their professional aviation careers. Featuring complete ground school, advanced FBS simulation, and comprehensive international flight training in the USA.',
      'Our dedicated DGCA ground school runs full-time out of our Hyderabad headquarters, led by veteran airline instructors with decades of navigational and meteorological experience. After completing academic theory, cadets transition to actual cockpit environments.',
      'International flight training takes place over 200+ hours in dedicated airspace environments across the USA, guaranteeing fair weather, clear skies, and a rigorous international standard of safety and communication discipline.'
    ]
  },
  {
    slug: 'ppl',
    title: 'Private Pilot Licence',
    tagline: 'Master the skies for personal flying and recreation.',
    codeBadge: 'DGCA APPROVED · PPL',
    bgImage: 'https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(7,61,127,0.7) 0%, rgba(100,145,222,0.5) 100%)',
    stats: {
      duration: '4 – 6 Months',
      totalHours: '50 Hours',
      eligibility: '10th Standard',
    },
    content: [
      'Enjoy the freedom of personal aviation with the Private Pilot Licence. The PPL is perfect for individuals wanting to fly for leisure or businessmen looking for an efficient alternative across regional airports.',
      'Training is completely hands-on with a structured syllabus of theory subjects including Navigation, Air Regulations, and Engine Systems. Flying is executed domestically, tailored completely to the students timeline and availability.',
      'Upon satisfying DGCA requirements, cadets will be capable of commanding light single-engine piston aircraft in standard Visual Flight Rules (VFR) conditions securely and confidently.'
    ]
  },
  {
    slug: 'atpl',
    title: 'Airline Transport Pilot',
    tagline: 'The ultimate professional qualification for command.',
    codeBadge: 'DGCA DIRECT · ATPL',
    bgImage: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(7,61,127,0.88) 0%, rgba(7,61,127,0.6) 100%)',
    stats: {
      duration: '10 – 12 Months',
      totalHours: '1500 Hours Min.',
      eligibility: 'Valid CPL Holder',
    },
    content: [
      'The Airline Transport Pilot Licence (ATPL) is the pinnacle of aviation licensing, a strict prerequisite for ascending from First Officer to Pilot In Command (Captain) on scheduled commercial airlines.',
      'Aviora provides focused ATPL theoretical training, specializing in the complex navigational, meteorological, and radio aid examinations required by the DGCA for an ATPL upgrade.',
      'Tailored specially for working First Officers, our ground classes feature flexible timing, distance learning resources, and weekend seminars designed to smoothly integrate with line flying rosters without compromising preparation.'
    ]
  },
  {
    slug: 'type-rating',
    title: 'Type Rating',
    tagline: 'Transition from general aviation to narrow-body airline operations.',
    codeBadge: 'A320 / B737 · ENDORSEMENT',
    bgImage: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(7,61,127,0.75) 100%)',
    stats: {
      duration: '6 – 10 Weeks',
      totalHours: 'Simulator Only',
      eligibility: 'Valid DGCA CPL',
    },
    content: [
      'Aviora operates extensive international partnerships providing type rating endorsements on the world’s most popular twin-engine narrow-body jets: the Airbus A320 family and the Boeing 737 NG/MAX.',
      'Our programs are situated in leading global training facilities, including Madrid, Vietnam, and Bangkok. Each partner center houses Level D Full Flight Simulators ensuring total immersive learning environments matching actual flight dynamics seamlessly.',
      'This 6-10 week program includes extensive ground school transitioning knowledge from piston aircraft to automated jet transports across systems, High Altitude aerodynamics, and Crew Resource Management (CRM).'
    ]
  },
  {
    slug: 'ground-school',
    title: 'Ground School',
    tagline: 'Comprehensive DGCA theory for commercial and private operators.',
    codeBadge: 'DGCA DIRECT · THEORY',
    bgImage: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(7,61,127,0.82) 0%, rgba(13,27,42,0.85) 100%)',
    stats: {
      duration: '4 – 6 Months',
      totalHours: 'Classroom Theory',
      eligibility: '10+2 Physics & Maths',
    },
    content: [
      'The core foundation to any flying career lies in absolute theoretical understanding. The Aviora DGCA Ground School handles all five essential subject examinations guaranteeing rapid first-attempt pass outcomes.',
      'With dedicated specialists instructing Air Navigation, Air Regulations, Aviation Meteorology, Technical General, and Technical Specific, students absorb practical contextual knowledge rather than raw rote memory procedures.',
      'Classes maintain strict maximum intakes ensuring direct access. State-of-the-art interactive whiteboards, regular mock testing environments, and 1-on-1 performance breakdown sessions ensure cadets are continuously monitored until final exam sign-off.'
    ]
  },
  {
    slug: 'cabin-crew',
    title: 'Cabin Crew Training',
    tagline: 'World-class grooming, safety, and hospitality preparations.',
    codeBadge: 'INTERNATIONAL · CREW',
    bgImage: 'https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80',
    heroGradient: 'linear-gradient(135deg, rgba(100,145,222,0.7) 0%, rgba(7,61,127,0.85) 100%)',
    stats: {
      duration: '6 Months',
      totalHours: '—',
      eligibility: '10+2 Any Stream',
    },
    content: [
      'Our premier Cabin Crew certification delivers 6 months of comprehensive training, elevating applicants onto the fast-track required by tier-one international airlines traversing elite global networks.',
      'Programs encompass more than just in-flight hospitality. Cadets simulate advanced emergency procedures, firefighting, ditching scenarios, first aid, and critical incident management within controlled environments.',
      'Supplemented heavily with extensive interview profiling coaching, professional grooming standards, and etiquette lessons, the Aviora Cabin Crew program ensures graduates are instantly recognized as highly polished, competitive assets.'
    ]
  }
];
