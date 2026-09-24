# RajTech Assist — Rajasthan Technical Education Chatbot

A share-ready browser chatbot for the Rajasthan technical-education admission-assistance project.

## What it does

- Understands normal English, Hindi and Hinglish, including phrases like "fees kitni hai?", "Kota ka polytechnic batao", "admission kaise hoga?" and "documents kya lagenge?"
- English, Hindi and Marwari response modes.
- Searches the Rajasthan DTE college-directory records embedded in the prototype.
- Returns college name, district, establishment year, phone and address where the official directory publishes those fields.
- Admission, eligibility, documents, fees, scholarships, cut-offs, placements and portal guidance.
- Quick prompts, responsive mobile UI, clear-chat and browser voice input.
- Official DTE source desk.
- No API key is exposed in browser code.

## Data boundary

The Rajasthan Department of Technical Education states that it manages 43 Government Polytechnic Colleges and 108 Unaided Private Polytechnic Colleges. The public directory page used by this prototype exposes a set of college records and directory fields. The chatbot does not invent missing private-college, fee, placement or cut-off data. Current rules and numbers should be verified from the official DTE source.

For a full SIH production deployment, the next data layer should ingest and refresh all official government + private college records, branch/intake matrices, year-wise allotments/cut-offs, approved fees, hostel details, scholarships and verified placement/alumni data.

## Public deployment

The repository deploys the chatbot folder through GitHub Pages using GitHub Actions.

Public path: https://shubhamrajverma66-blip.github.io/shubhamraj-portfolio-v2/chatbot/

## Official sources

DTE College Directory: https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/91469
DTE First Year Admissions 2026-27: https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31012
DTE Lateral Entry 2026-27: https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/31013
DTE Department Portal: https://hte.rajasthan.gov.in/DepartmentofTechnicalEducation/30717


## SIH build status

The interface is being evolved toward a module-based SIH demo with college exploration, factual comparison, multilingual conversational UX and source-first verification.
