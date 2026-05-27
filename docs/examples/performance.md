# Performance Benchmarks

Quantitative measurements of `@daniel-murnane/core` at runtime. Sourced from public bibliometric data (OpenAlex, ORCID) and self-reported throughput metrics.

## Headline Metrics

```typescript
const stats = await daniel.getStats();
// =>
{
  worksCount: 36,
  citedByCount: 369,
  hIndex: 8,
  i10Index: 7,
  twoYearMeanCitedness: 6.14,
  source: 'OpenAlex (live, see /publications)'
}
```

A live, machine-readable copy is at [`/data/publications.json`](https://github.com/murnanedaniel/murnanedaniel.github.io).

## Throughput

Outputs per unit time, averaged over the most recent operational window.

| Output | Rate |
|--------|------|
| Preprints / papers | ~5 per year |
| Conference talks (contributed + invited) | ~6 per year |
| Code commits (across `gnn4itk`, `exa-trkx`, etc.) | bursty; long-tail distribution |
| Peer reviews completed | ~1 per month |
| Espresso shots consumed | ~3.5 per day |

## Latency

| Operation | p50 | p90 |
|-----------|-----|-----|
| Email reply | 24h | 48h |
| Code review on a draft PR | 48h | 1 week |
| Detailed feedback on a paper | 1 week | 3 weeks |
| Decision on a new collaboration | 2 weeks | 6 weeks |

Latencies degrade during conference travel; check the [`status`](/api/types#researcher) field before benchmarking.

## Citation Distribution

The citation distribution is power-law-like, as is typical for research bibliographies. A few highly-cited works (Exa.TrkX, GNN4ITk) drive the bulk of the h-index; many shorter contributions trail behind.

```typescript
const distribution = {
  top5Percent: 'drives ~60% of total citations',
  median: '~5 citations',
  longTail: 'preprints and CHEP proceedings'
};
```

For the full breakdown, see [Publications](/publications), which renders the live OpenAlex data sorted by citation count.

## Reliability

Production-relevant SLAs based on the last decade of operation.

| Metric | Value |
|--------|-------|
| Annual paper-shipping uptime | &gt;99% |
| Conference attendance reliability | ~95% (modulo pandemic years) |
| Showing up to a scheduled meeting | high; ~3 sigma below 100% |
| Returning a paper review on time | improving; trending toward 100% |

## Hardware Profile

The substrate has known limits and is documented for capacity planning.

```typescript
const hardware = {
  cores: 1,           // physical
  contextSwitchCost: 'see /api/limits',
  sleepCycle: '~7h nightly, hard requirement',
  caffeineDependency: 'present, well-tolerated',
  upgradePath: 'firmware updates via espresso',
};
```

## Comparing Against Baselines

For benchmarking against other researchers, the relevant comparable bibliometric data is published on Google Scholar and ORCID. Note that h-index in particle physics + ML is not directly comparable to single-author fields; collaboration-paper inclusion conventions vary.

## Bibliography Sync

The publication-level metrics here are kept current by a CI workflow that pulls from OpenAlex weekly. See `scripts/sync-publications.py` in the [site repository](https://github.com/murnanedaniel/murnanedaniel.github.io) for the implementation.
