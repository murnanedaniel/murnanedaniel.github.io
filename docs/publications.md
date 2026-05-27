---
title: Publications
---

<script setup>
import { data } from './data/publications.data.js'

const stats = data.author.stats
const author = data.author
const publications = data.publications

const byYear = publications.reduce((acc, pub) => {
  const year = (pub.date || '').slice(0, 4) || 'unknown'
  if (!acc[year]) acc[year] = []
  acc[year].push(pub)
  return acc
}, {})

const years = Object.keys(byYear).sort().reverse()

function authorList(authors) {
  if (!authors || !authors.length) return ''
  if (authors.length <= 8) return authors.join(', ')
  return authors.slice(0, 6).join(', ') + `, et al. (+${authors.length - 6})`
}

function doiHref(doi) {
  if (!doi) return null
  if (doi.startsWith('http')) return doi
  return `https://doi.org/${doi}`
}
</script>

# Publications

A live list, synced from [OpenAlex](https://openalex.org/{{ author.openalex_id }}). For an ORCID-side view: [orcid.org/{{ author.orcid }}](https://orcid.org/{{ author.orcid }}).

<div class="pub-stats">
  <div class="pub-stat">
    <span class="pub-stat-value">{{ stats.works_count }}</span>
    <span class="pub-stat-label">works</span>
  </div>
  <div class="pub-stat">
    <span class="pub-stat-value">{{ stats.cited_by_count }}</span>
    <span class="pub-stat-label">citations</span>
  </div>
  <div class="pub-stat">
    <span class="pub-stat-value">{{ stats.h_index }}</span>
    <span class="pub-stat-label">h-index</span>
  </div>
  <div class="pub-stat">
    <span class="pub-stat-value">{{ stats.i10_index }}</span>
    <span class="pub-stat-label">i10-index</span>
  </div>
</div>

<div v-for="year in years" :key="year" class="pub-year-group">
  <h2>{{ year }}</h2>
  <ol class="pub-list">
    <li v-for="pub in byYear[year]" :key="pub.doi || pub.title" class="pub-item">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-authors">{{ authorList(pub.authors) }}</div>
      <div class="pub-meta">
        <span v-if="pub.source" class="pub-source">{{ pub.source }}</span>
        <span v-if="pub.type" class="pub-type">{{ pub.type }}</span>
        <span v-if="pub.cited_by_count > 0" class="pub-cites">{{ pub.cited_by_count }} citations</span>
        <a v-if="doiHref(pub.doi)" :href="doiHref(pub.doi)" target="_blank" rel="noopener" class="pub-link">DOI</a>
        <a v-if="pub.open_access_url" :href="pub.open_access_url" target="_blank" rel="noopener" class="pub-link">PDF</a>
      </div>
    </li>
  </ol>
</div>

<p class="pub-footer">
  Data refreshed via <code>scripts/sync-publications.py</code> (OpenAlex). Latest sync: {{ data.last_updated && data.last_updated.slice(0, 10) }}.
</p>

<style scoped>
.pub-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin: 24px 0 32px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.pub-stat {
  text-align: center;
}
.pub-stat-value {
  display: block;
  font-size: 1.8em;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.pub-stat-label {
  display: block;
  font-size: 0.85em;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 4px;
}
.pub-year-group h2 {
  margin-top: 32px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.pub-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.pub-item {
  padding: 14px 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}
.pub-item:last-child {
  border-bottom: none;
}
.pub-title {
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.4;
}
.pub-authors {
  font-size: 0.92em;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
}
.pub-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.85em;
  color: var(--vp-c-text-3);
}
.pub-source {
  font-style: italic;
}
.pub-type {
  padding: 1px 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  text-transform: lowercase;
}
.pub-cites {
  color: var(--vp-c-brand-2);
}
.pub-link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}
.pub-link:hover {
  text-decoration: underline;
}
.pub-footer {
  margin-top: 32px;
  font-size: 0.85em;
  color: var(--vp-c-text-3);
}
</style>
