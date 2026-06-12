const fs = require('fs');
const path = require('path');

const ALL_POSTS = [
  { tag:'Career Guide', date:'March 2026', title:'How to Become a Commercial Pilot in India — The Complete 2026 Guide', excerpt:'From choosing the right training academy to passing your DGCA exams and landing your first First Officer role — a step-by-step roadmap.', readTime:'12 min', slug:'how-to-become-commercial-pilot-india-2026', img:'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=60' },
  { tag:'DGCA Exams', date:'February 2026', title:'The 5 DGCA Ground School Papers — What to Study and How to Pass First Time', excerpt:'Air Navigation, Air Regulations, Meteorology, Technical General, Technical Specific. Everything you need about preparation strategy and common failure traps.', readTime:'9 min', slug:'dgca-ground-school-5-papers-guide', img:'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=60' },
  { tag:'Cabin Crew', date:'January 2026', title:'Cabin Crew Career in 2026 — Salaries, Airlines, and What They Actually Look For', excerpt:'A realistic look at the cabin crew profession in India — what IndiGo, Air India, and Emirates want, and how to position yourself ahead of competition.', readTime:'8 min', slug:'cabin-crew-career-india-2026', img:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=60' },
  { tag:'Flight Training', date:'January 2026', title:'Why Indian Pilot Cadets Train in the USA — And Why It Matters for Your Career', excerpt:'The airspace, weather, infrastructure, and FAA Part 141 advantage explained. Why 90% of serious aviation academies send their students overseas for flight hours.', readTime:'7 min', slug:'why-train-in-usa-indian-pilots', img:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=60' },
  { tag:'DGCA Exams', date:'December 2025', title:'Air Navigation for DGCA CPL — The Complete Study Breakdown', excerpt:'The subject with the highest failure rate. Charts, VOR/NDB, dead reckoning, flight planning — how to approach every topic systematically and pass first attempt.', readTime:'14 min', slug:'dgca-air-navigation-cpl-study-guide', img:'https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=60' },
  { tag:'Industry', date:'December 2025', title:"India's Aviation Boom — What It Means for Pilot and Cabin Crew Careers in 2026–31", excerpt:"Fleet expansion, new routes, and 10,000 pilots needed by 2030. The numbers behind India's aviation growth and what it means for you if you start training today.", readTime:'10 min', slug:'india-aviation-boom-careers-2026-2030', img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=60' },
  { tag:'Medical', date:'November 2025', title:'DGCA Class 2 Medical — What to Expect and How to Prepare', excerpt:"The full Class 2 medical examination explained: vision, hearing, cardiovascular, ENT. What disqualifies you, what doesn't, and how to find an approved AME.", readTime:'8 min', slug:'dgca-class-2-medical-guide', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60' },
  { tag:'Career Guide', date:'November 2025', title:'First Officer to Captain — The Career Progression Timeline for Indian Pilots', excerpt:'How long does it take? What does it cost? How many hours? The realistic progression from CPL to command, with actual timelines from Indian airline first officers.', readTime:'11 min', slug:'first-officer-to-captain-career-timeline', img:'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=60' },
  { tag:'Cabin Crew', date:'October 2025', title:"IndiGo Cabin Crew Recruitment 2026 — What the Walk-in Process Actually Looks Like", excerpt:"From the initial document check to the final interview, a realistic account of what IndiGo's recruitment process involves and how to prepare for each stage.", readTime:'7 min', slug:'indigo-cabin-crew-recruitment-process', img:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=60' },
  { tag:'Flight Training', date:'October 2025', title:"Cessna 172 — The Training Aircraft That Has Produced More Pilots Than Any Other", excerpt:"Why the world's most popular training aircraft is used by Aviora cadets in Arizona. The C172 airframe, its limitations, and what it teaches student pilots.", readTime:'6 min', slug:'cessna-172-training-aircraft-guide', img:'https://images.unsplash.com/photo-1474321226871-e59f01059ef5?w=1920&q=60' },
  { tag:'DGCA Exams', date:'September 2025', title:'Aviation Meteorology for DGCA CPL — Thunderstorms, Icing, and the Questions That Fail Students', excerpt:'The tricky topics: microbursts, mountain wave, structural icing, and tropical weather. A topic-by-topic breakdown with the question types that appear most often.', readTime:'10 min', slug:'dgca-aviation-meteorology-cpl-guide', img:'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=60' },
  { tag:'Industry', date:'September 2025', title:"How to Read a METAR and TAF — The Pilot's Weather Briefing Made Simple", excerpt:"METAR and TAF decoding from scratch. Every abbreviation explained, with real-world examples and the decision-making framework commercial pilots use on dispatch.", readTime:'9 min', slug:'how-to-read-metar-taf-pilot-guide', img:'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=60' },
];

const ALL_NEWS = [
  { tag:'Industry', date:'10 March 2026', title:'IndiGo Announces 500 First Officer Vacancies for 2026–27', excerpt:"India's largest carrier opens one of its biggest recruitment drives in five years, with positions across its A320 and ATR fleets.", source:'Aviation Week', slug:'indigo-500-fo-2026', img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=60' },
  { tag:'DGCA', date:'4 March 2026', title:'DGCA Updates CPL Medical Standards — New AME Circular Effective April 2026', excerpt:'The DGCA has issued revised Class 2 medical examination guidelines effective April 1, 2026. Key changes for pilot training applicants.', source:'DGCA India', slug:'dgca-medical-circular-april-2026', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60' },
  { tag:'Global Aviation', date:'28 Feb 2026', title:"IATA Forecasts India to Become World's Third Largest Aviation Market by 2030", excerpt:"IATA revises its India forecast upward, citing rapid fleet expansion, new route launches, and growing domestic passenger demand.", source:'IATA', slug:'iata-india-third-largest-2030', img:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=60' },
  { tag:'Airline', date:'20 Feb 2026', title:'Air India Expands Fleet by 40 Aircraft — Recruitment Push Expected in Q3 2026', excerpt:'Air India confirms delivery schedule for 40 new narrowbody aircraft, signalling significant recruitment activity for pilots and cabin crew.', source:'The Hindu Business', slug:'air-india-fleet-expansion-2026', img:'https://images.unsplash.com/photo-1613690399151-65ea69478674?w=1920&q=60' },
  { tag:'DGCA', date:'15 Feb 2026', title:'DGCA Increases FBS Simulator Hours Acceptance for CPL Applicants', excerpt:'Under a new amendment, up to 40 hours of approved FBS simulator time can now be counted toward the total flight time requirement for CPL issuance.', source:'DGCA India', slug:'dgca-fbs-hours-increase-cpl', img:'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=60' },
  { tag:'Industry', date:'8 Feb 2026', title:'SpiceJet Returns to Profit — Announces 200 Cabin Crew Positions', excerpt:"Following restructuring, SpiceJet signals confidence with a cabin crew hiring drive targeting experienced and fresh candidates from certified academies.", source:'Mint', slug:'spicejet-cabin-crew-200-positions', img:'https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=60' },
  { tag:'Global Aviation', date:'1 Feb 2026', title:'Emirates Resumes India Recruitment — 300 Cabin Crew Positions Open', excerpt:"Emirates HR teams return to India for a structured recruitment campaign, targeting candidates from recognised cabin crew training programmes.", source:'Gulf News', slug:'emirates-india-cabin-crew-300', img:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=60' },
  { tag:'Industry', date:'25 Jan 2026', title:'India To Add 1,000+ New Aircraft by 2030 — CAPA India Forecast', excerpt:"Aviation consultancy CAPA India projects fleet additions across IndiGo, Air India, Akasa, and emerging LCCs as Indian air travel demand hits record levels.", source:'CAPA India', slug:'india-1000-aircraft-2030-capa', img:'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=60' },
  { tag:'DGCA', date:'18 Jan 2026', title:'DGCA Issues Advisory on CPL Knowledge Test Scheduling — New Portal Launch', excerpt:'DGCA launches an updated online portal for CPL ground examination scheduling, replacing the legacy system. Changes effective February 2026.', source:'DGCA India', slug:'dgca-cpl-test-portal-launch', img:'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=60' },
  { tag:'Airline', date:'10 Jan 2026', title:"Akasa Air Expands to 8 New Cities — Pilot Hiring Programme Announced", excerpt:"India's newest airline Akasa Air continues rapid network expansion with fresh recruitment for Boeing 737 MAX first officers.", source:'Aviation Week', slug:'akasa-air-8-cities-pilot-hiring', img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=60' },
  { tag:'Industry', date:'3 Jan 2026', title:'Pilot Shortage to Reach 80,000 in Asia-Pacific by 2032 — Boeing Report', excerpt:"Boeing's annual Pilot and Technician Outlook confirms Asia-Pacific will be the world's most pilot-short region by 2032, with India leading demand growth.", source:'Boeing', slug:'pilot-shortage-asia-pacific-boeing', img:'https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=60' },
  { tag:'Global Aviation', date:'27 Dec 2025', title:"Qatar Airways Signs MoU with Indian Aviation Academy Network for Cabin Crew Placement", excerpt:"Qatar Airways' talent acquisition team formalises a partnership framework with Indian aviation training institutes for structured cabin crew entry pathways.", source:'ATW', slug:'qatar-airways-india-cabin-crew-mou', img:'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=60' },
];

const filenames = [
  "SIV03073.webp", "SIV03075.webp", "SIV03079.webp", "SIV03080.webp", "SIV03081.webp",
  "SIV03083.webp", "SIV03084.webp", "SIV03085.webp", "SIV03086.webp", "SIV03092.webp",
  "SIV03094.webp", "SIV03096.webp", "SIV03097.webp", "SIV03099.webp", "SIV03100.webp",
  "SIV03106.webp", "SIV03108.webp", "SIV03115.webp", "SIV03124.webp", "SIV03147.webp",
  "SIV03159.webp", "SIV03182.webp", "SIV03192.webp", "SIV03232.webp", "SIV03233.webp",
  "SIV03237.webp", "SIV03239.webp", "SIV03512.webp", "SIV03521.webp",
  "SIV03552.webp", "SIV03564.webp", "SIV03600.webp", "SIV03617.webp", "SIV03644.webp",
  "SIV03656.webp", "SIV03673.webp", "SIV03685.webp", "SIV03695.webp", "SIV03711.webp"
];
const cats = ['Facility', 'Student Life', 'USA Training'];
const ALL_GALLERY = filenames.map((f, i) => ({
  src: `/gallery/${f}`,
  alt: `Aviora Gallery Image ${i + 1}`,
  cat: cats[i % cats.length],
  caption: 'Aviora Aviation Academy'
}));

const BLOG_BODY = [
  "Aviation in India is at an inflection point. The combination of fleet expansion, route liberalisation, and a young, aspirational population has created a pilot demand the country has never seen. Understanding the landscape — and positioning yourself correctly within it — is the most important career decision you will make.",
  "The DGCA Commercial Pilot Licence pathway begins with ground school. Four papers: Air Navigation, Aviation Meteorology, Air Regulations, and Technical General/Specific. Each has its own failure points. Air Navigation has the highest first-attempt failure rate — not because the material is the hardest, but because most candidates underestimate the chart work and VOR/NDB intercept calculations.",
  "Flight training follows ground school. In India, the regulatory baseline is 250 hours. The quality of those hours — the airspace they are flown in, the weather patterns encountered, the navigation techniques practiced — determines whether a pilot emerges from training ready for a simulator assessment or not.",
  "The USA advantage comes from exactly that: complex airspace, variable weather, high-density traffic environments, and FAA-standard aerodrome procedures. A cadet who has completed cross-country flights across Arizona and California has built a different level of situational awareness than one who has only flown Indian circuits.",
  "Type rating follows CPL issuance. The A320, B737, and ATR are the three aircraft you will encounter in Indian airline hiring. The type rating is conducted in a Level D Full Flight Simulator — 32 hours minimum — and culminates in a DGCA Licence Skill Test conducted by a Type Rating Examiner.",
  "Placement follows type rating. Airlines do not hire CPL holders directly — they hire type-rated first officers. The sequence from zero to airline right seat, done efficiently, takes approximately 24–30 months from ground school commencement."
];

const NEWS_BODY = [
  "The announcement marks a significant shift in the Indian aviation employment landscape. Industry analysts who have tracked hiring patterns over the past decade describe this as the most concentrated period of airline recruitment activity since the post-COVID recovery began in 2022.",
  "For pilot cadets and cabin crew trainees currently in programme, the timing is strategically significant. The typical lag between training completion and airline interview invitation has compressed — airlines are now approaching academies directly for pre-screened candidate lists rather than waiting for walk-in applicants.",
  "The regulatory environment is also evolving in parallel. Recent DGCA circulars have streamlined the CPL issuance process, reducing the average time between skill test completion and licence issue from 90 days to approximately 45 days in most cases.",
  "Cabin crew recruiting processes at Indian carriers have shifted toward structured, academy-linked pathways rather than open walk-in drives. Airlines are increasingly partnering with certified training institutes to access pre-screened candidates who have completed formal grooming, emergency procedure, and service standards training.",
  "The implications for those considering aviation training are straightforward: the window between training completion and first employable opportunity is shorter now than it has been in the past five years. Cadets entering programmes in 2026 will graduate into a different market than those who began in 2022."
];

function escape(str) {
  return str.replace(/"/g, '\\"');
}

function parseDate(dateStr) {
  // Try to parse dates like "March 2026", "10 March 2026"
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) {
    return new Date().toISOString();
  }
  return d.toISOString();
}

ALL_POSTS.forEach(p => {
  const content = `---
title: "${escape(p.title)}"
tag: "${escape(p.tag)}"
date: "${parseDate(p.date)}"
excerpt: "${escape(p.excerpt)}"
readTime: "${escape(p.readTime)}"
img: "${p.img}"
---

${BLOG_BODY.join('\n\n')}
`;
  fs.writeFileSync(path.join(__dirname, '../content/blog', `${p.slug}.md`), content);
});

ALL_NEWS.forEach(p => {
  const content = `---
title: "${escape(p.title)}"
tag: "${escape(p.tag)}"
date: "${parseDate(p.date)}"
excerpt: "${escape(p.excerpt)}"
source: "${escape(p.source)}"
img: "${p.img}"
---

${NEWS_BODY.join('\n\n')}
`;
  fs.writeFileSync(path.join(__dirname, '../content/news', `${p.slug}.md`), content);
});

ALL_GALLERY.forEach((g, i) => {
  const filename = g.src.split('/').pop().replace('.webp', '');
  const content = JSON.stringify({
    src: g.src,
    alt: g.alt,
    cat: g.cat,
    caption: g.caption
  }, null, 2);
  fs.writeFileSync(path.join(__dirname, '../content/gallery', `${filename}.json`), content);
});

console.log('Migration complete!');
