# RajTech Assist — Multilingual Technical Education Chatbot

A polished working prototype for the Rajasthan technical-education admission-assistance concept from the minor-project synopsis.

## Prototype features
- English, Hindi and Marwari conversation modes
- Natural-language keyword/intent routing
- Admission, eligibility, fees, scholarships, cut-offs and placements intents
- Quick-question chips
- Responsive chat UI
- Browser voice-input support where available
- Structured responses with an explicit verification boundary for official figures

## Current architecture
This GitHub Pages-friendly prototype is API-key free. It uses a small local knowledge base and intent matcher so it can run immediately in a browser.

## Production upgrade
For the full SIH implementation:
1. verified DTE/college knowledge ingestion
2. searchable database/vector index
3. multilingual NLP/LLM retrieval
4. admin update workflow
5. analytics and source citations
6. secure backend API (never expose an LLM API key in browser JavaScript)

## Open
Serve this folder with any static web server or open index.html directly. On GitHub Pages, use the repository Pages URL followed by /chatbot/.
