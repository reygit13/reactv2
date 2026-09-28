// ════════════════════════════════════════════════════════════════════════════
// api.js — OMDb API calls (NEW in Lesson 4)
// ════════════════════════════════════════════════════════════════════════════

import { OMDB_API_KEY } from '../config';

// ──────────────────── LESSON 4 ────────────────────
// Write omdbSearch(query) — fetch from OMDb search endpoint, return results array
// Endpoint: https://www.omdbapi.com/?apikey=KEY&s=QUERY&type=movie

// Write omdbDetails(imdbID) — fetch full movie details by IMDb ID
// Endpoint: https://www.omdbapi.com/?apikey=KEY&i=IMDB_ID&plot=full
// ──────────────────── STUBS: delete after adding real code ────────────────
export async function omdbSearch() { return []; }
export async function omdbDetails() { return null; }
// ──────────────────── END ─────────────────────────
