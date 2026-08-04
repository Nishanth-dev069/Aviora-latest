---
title: "How to Read METAR and TAF Reports — Complete Pilot Guide with Real Examples"
tag: "Practical Skills"
date: "2026-02-19T18:30:00.000Z"
excerpt: "Decoding CAVOK, TEMPO, BECMG, wind shear, cloud layers, and runway visual range. Real Indian airport examples decoded."
readTime: "9 min"
img: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1920&q=60"
---

Aeronautical meteorological reports are the international standard for communicating current and forecasted weather conditions to flight crews, air traffic controllers, and flight dispatchers. Every pilot cadet preparing for DGCA examinations and live flight operations must be capable of rapidly and accurately interpreting **METAR** (Meteorological Aerodrome Report) and **TAF** (Terminal Aerodrome Forecast) messages.

This guide provides a comprehensive breakdown of standard ICAO syntax, key abbreviations, trend forecasts, and real-world examples decoded from major Indian international airports.

---

## 1. What is a METAR?

A **METAR** is an observational weather report issued routinely (typically every 30 minutes or 1 hour at scheduled intervals) for a specific aerodrome. When significant sudden weather changes occur between routine intervals, a special observation called a **SPECI** is issued immediately.

### Anatomy of a METAR String

Consider this real-world observation from Indira Gandhi International Airport, New Delhi (VIDP):

```
METAR VIDP 150600Z 28008KT 2000 R28/1200D FU HZ FEW020 BKN090 18/14 Q1016 BECMG 4000 HZ=
```

Let's break down each element step-by-step:

| Token | Meaning | Detailed Description |
|---|---|---|
| `METAR` | Report Type | Routine meteorological aerodrome observation. |
| `VIDP` | ICAO Station Identifier | Indira Gandhi International Airport, New Delhi. |
| `150600Z` | Date / Time Group | 15th day of the current month at 06:00 UTC (Zulu time). |
| `28008KT` | Surface Wind | Wind blowing from $280^\circ$ True at 8 knots. |
| `2000` | Prevailing Visibility | Minimum prevailing visibility of 2,000 metres (2 km). |
| `R28/1200D` | Runway Visual Range | On Runway 28, the RVR is 1,200 metres with a downward (D) trend over the past 10 minutes. |
| `FU HZ` | Present Weather | Smoke (`FU` from French *fumée*) and Haze (`HZ`). |
| `FEW020 BKN090` | Cloud Layers | Few clouds (1-2 oktas) at 2,000 ft AGL, Broken ceiling (5-7 oktas) at 9,000 ft AGL. |
| `18/14` | Temp / Dew Point | Ambient air temperature $+18^\circ\text{C}$, Dew point temperature $+14^\circ\text{C}$. |
| `Q1016` | Altimeter Setting (QNH) | Aerodrome QNH is 1016 hectopascals (hPa). |
| `BECMG 4000 HZ` | Trend Forecast | Becoming: Visibility expected to improve gradually to 4,000 metres in haze. |

---

## 2. Common METAR Codes & Descriptors

### Cloud Cover Classifications (in eighths / oktas):
- `FEW`: 1 to 2 oktas (Scattered patches)
- `SCT`: 3 to 4 oktas (Scattered)
- `BKN`: 5 to 7 oktas (Broken - constitutes an official operational ceiling)
- `OVC`: 8 oktas (Overcast - complete sky coverage)
- `CB`: Cumulonimbus (e.g., `SCT025CB`)
- `TCU`: Towering Cumulus (e.g., `BKN030TCU`)

### CAVOK: Ceiling and Visibility OK
The group `CAVOK` replaces visibility, RVR, weather, and cloud groups when:
1. Visibility is 10 km or more.
2. No clouds below 5,000 ft or below minimum sector altitude (whichever is greater), and no CB or TCU present.
3. No significant weather phenomena at or near the aerodrome.

### Weather Descriptors & Abbreviations:
- **Intensity:** `-` (Light), No sign (Moderate), `+` (Heavy), `VC` (In the vicinity).
- **Precipitation:** `RA` (Rain), `DZ` (Drizzle), `SN` (Snow), `GR` (Hail), `GS` (Small hail).
- **Obscuration:** `FG` (Fog, visibility $< 1000\text{m}$), `BR` (Mist, visibility $1000\text{m} - 5000\text{m}$), `HZ` (Haze), `DU` (Dust).
- **Other:** `TS` (Thunderstorm), `SQ` (Squall), `WS` (Wind Shear).

---

## 3. What is a TAF?

A **TAF** (Terminal Aerodrome Forecast) is a forward-looking weather forecast valid for a specific period (typically 9, 24, or 30 hours) for operations within 5 nautical miles of the aerodrome.

### Example TAF: Rajiv Gandhi International Airport, Hyderabad (VOHS)

```
TAF VOHS 200500Z 2006/2112 09010KT 6000 SCT025 
    TEMPO 2009/2013 3000 TSRA SCT020CB BKN080
    BECMG 2014/2016 04005KT 4000 HZ=
```

### Decoding the TAF:
- **Validity:** From 06:00 UTC on the 20th until 12:00 UTC on the 21st (30-hour forecast).
- **Base Conditions:** Winds from $090^\circ$ at 10 knots, 6,000m visibility, scattered clouds at 2,500 ft AGL.
- **TEMPO (Temporary Fluctuations):** Between 09:00 UTC and 13:00 UTC on the 20th, temporary periods of 3,000m visibility with thunderstorms and rain (`TSRA`), scattered Cumulonimbus at 2,000 ft, and broken ceiling at 8,000 ft.
- **BECMG (Gradual Change):** Between 14:00 UTC and 16:00 UTC on the 20th, conditions will transition to winds from $040^\circ$ at 5 knots with 4,000m visibility in haze.

---

## Mastering Weather for DGCA Ground Exams and Airline Line Flying

Accurate weather interpretation is essential across multiple DGCA papers:
- Review the broader syllabus in our [DGCA Aviation Meteorology CPL Guide](/blog/dgca-aviation-meteorology-cpl-guide).
- Connect weather analysis to flight planning in our [DGCA Air Navigation Study Guide](/blog/dgca-air-navigation-cpl-study-guide).
- See all written exam subjects in [The 5 DGCA Ground School Papers](/blog/dgca-ground-school-5-papers-guide).

---

## Advance Your Flight Training with Aviora

At Aviora Aviation Academy, cadets practice live METAR/TAF briefings before every simulator sortie in our briefing rooms:
- **Commercial Pilot Licence (CPL):** Explore our full [Pilot Training Program](/programs/pilot-training).
- **California Flight Experience:** Build flying hours across dynamic US airspace with our [Global Pilot Training Pathway](/programs/global-training).
- **Training Simulators & Ground Facilities:** Visit our [Facilities Page](/facilities).
- **Meet Our Airline Faculty:** Learn under active airline pilots on our [Mentors Page](/mentors).

Start your aviation career today. [Apply for Admissions](/admissions) or [Contact our Admissions Team](/contact).
