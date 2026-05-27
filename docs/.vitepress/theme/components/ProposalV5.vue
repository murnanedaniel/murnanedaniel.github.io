<template>
  <div class="proposal-v5">
    <!-- arXiv Header Bar -->
    <header class="arxiv-header">
      <div class="arxiv-header-inner">
        <div class="arxiv-logo-area">
          <span class="arxiv-logo">arXiv<span class="arxiv-dot">.</span>org</span>
          <span class="arxiv-tagline">open access</span>
        </div>
        <div class="arxiv-nav">
          <a href="#" class="arxiv-nav-link">Search</a>
          <div class="arxiv-search-box">
            <input type="text" placeholder="Search arXiv" class="arxiv-search-input" disabled />
            <button class="arxiv-search-btn" disabled>Go</button>
          </div>
        </div>
        <div class="arxiv-header-links">
          <a href="#" class="arxiv-link">Help</a>
          <span class="arxiv-sep">|</span>
          <a href="#" class="arxiv-link">Advanced Search</a>
        </div>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="arxiv-breadcrumb">
      <div class="arxiv-breadcrumb-inner">
        <a href="#">arXiv</a> &gt; <a href="#">cs</a> &gt; <a href="#">arXiv:2024.42069</a>
      </div>
    </div>

    <!-- Paper Content Area -->
    <main class="arxiv-main">
      <div class="arxiv-paper">
        <!-- Action Sidebar -->
        <div class="arxiv-actions">
          <div class="arxiv-action-group">
            <strong>Download:</strong>
            <ul>
              <li><a href="#">PDF</a></li>
              <li><a href="#">PostScript</a></li>
              <li><a href="#">Other formats</a></li>
            </ul>
          </div>
          <div class="arxiv-action-group">
            <strong>Current browse context:</strong>
            <p class="arxiv-context">cs.HC</p>
          </div>
          <div class="arxiv-action-group">
            <a href="#" class="arxiv-action-link">References &amp; Citations</a>
            <a href="#" class="arxiv-action-link">NASA ADS</a>
            <a href="#" class="arxiv-action-link">Google Scholar</a>
            <a href="#" class="arxiv-action-link">Semantic Scholar</a>
          </div>
          <div class="arxiv-action-group">
            <a href="#" class="arxiv-bookmark">Bookmark</a>
          </div>
        </div>

        <!-- Paper Metadata -->
        <div class="arxiv-content">
          <div class="arxiv-id-line">
            <span class="arxiv-id"><strong>arXiv:2024.42069</strong> [cs.HC]</span>
          </div>

          <h1 class="paper-title">
            Daniel Murnane: A Production-Ready Human Integration Library for High Energy Physics and Machine Learning
          </h1>

          <div class="paper-authors">
            <span class="author-name">Daniel Murnane</span><sup>1,2,3</sup>
          </div>

          <div class="paper-affiliations">
            <p><sup>1</sup> Niels Bohr Institute, University of Copenhagen, Copenhagen, Denmark</p>
            <p><sup>2</sup> ATLAS Collaboration, CERN, Geneva, Switzerland</p>
            <p><sup>3</sup> Lawrence Berkeley National Laboratory, Berkeley, CA, USA (Research Affiliate)</p>
          </div>

          <div class="paper-dates">
            <p>(Submitted on 1 Apr 2024 (v1), last revised 15 Nov 2024 (this version, v3.0))</p>
          </div>

          <!-- Abstract -->
          <div class="paper-abstract">
            <h2 class="abstract-heading">Abstract:</h2>
            <p class="abstract-text">
              We present a novel human integration library, <code>daniel-murnane/core</code> v3.0, designed for
              high-throughput research in particle physics and machine learning. The library features a configurable
              attention mechanism with tunable caffeine parameters, built-in graph neural network processing
              capabilities, and native ATLAS detector integration. We demonstrate state-of-the-art performance on
              multiple benchmarks including track reconstruction (GNN4ITk), physics language modeling (PLM), and
              collaborative research management. Our results show significant improvements over previous versions
              (v2.x, Berkeley build) after migration to the Copenhagen runtime environment. The library achieves
              an <em>h</em>-index of 8 with over 1,276 citations across 42 published releases, suggesting robust
              community adoption. We note that performance degrades gracefully under sleep deprivation but exhibits
              non-deterministic behavior when exposed to free coffee at conferences. We discuss rate limiting
              strategies, maintenance scheduling, and future development roadmaps including the proposed Physics
              Language Model paradigm. A formal proof that the author is Turing-complete is left as an exercise
              for the reviewer.
            </p>
          </div>

          <!-- Paper Meta Info -->
          <div class="paper-meta-table">
            <table>
              <tr>
                <td class="meta-label">Comments:</td>
                <td>42 pages, 1276 citations, 1 author. Accepted for deployment at Niels Bohr Institute. Funding generously provided by caffeine</td>
              </tr>
              <tr>
                <td class="meta-label">Subjects:</td>
                <td>
                  <strong>Machine Learning (cs.LG)</strong>; High Energy Physics - Experiment (hep-ex);
                  Human-Computer Interaction (cs.HC); Coffee Studies (phys.coff)
                </td>
              </tr>
              <tr>
                <td class="meta-label">Cite as:</td>
                <td><a href="#">arXiv:2024.42069</a> [cs.HC]</td>
              </tr>
              <tr>
                <td class="meta-label">DOI:</td>
                <td>10.48550/arXiv.2024.42069 (lol)</td>
              </tr>
              <tr>
                <td class="meta-label">License:</td>
                <td>MIT License (Open Source Human)</td>
              </tr>
            </table>
          </div>

          <hr class="paper-divider" />

          <!-- Section 1: Introduction -->
          <div class="paper-body">
            <div class="two-column">
              <h2 class="section-heading">1. Introduction</h2>
              <p>
                The exponential growth of data at the Large Hadron Collider (LHC) has created unprecedented
                demand for high-performance research entities capable of bridging the gap between theoretical
                physics and practical machine learning systems. While several human-in-the-loop solutions
                have been proposed [1,2], most suffer from scalability limitations, poor documentation, and
                inconsistent availability during weekends.
              </p>
              <p>
                In this work, we introduce <code>daniel-murnane/core</code>, a production-ready human integration
                library originally compiled at University College Dublin (v1.0, 2016), subsequently deployed at
                Lawrence Berkeley National Laboratory (v2.x, 2019-2023), and recently migrated to the Niels Bohr
                Institute, University of Copenhagen (v3.0, 2023-present). The library is optimized for two primary
                workloads: (a) graph neural network-based charged particle tracking for the ATLAS experiment,
                and (b) the development of foundation models for high energy physics, termed the Physics Language
                Model (PLM) paradigm.
              </p>
              <p>
                The current deployment serves as DDSA Postdoctoral Fellow at the Niels Bohr Institute and
                ML co-convener for the ATLAS experiment at CERN, demonstrating multi-threaded execution across
                geographically distributed computing environments (primarily Copenhagen and Geneva, with occasional
                context switches to various conference locations worldwide).
              </p>

              <h2 class="section-heading">2. Architecture</h2>
              <p>
                The library architecture consists of several tightly coupled modules, each responsible for a
                distinct research domain. We describe the principal components below.
              </p>

              <h3 class="subsection-heading">2.1 Graph Neural Network Track Reconstruction Module</h3>
              <p>
                The GNN4ITk pipeline [3,4] represents the primary computational kernel. This module implements
                a heterogeneous graph construction and message-passing framework for reconstructing charged
                particle trajectories in the ATLAS Inner Tracker (ITk) detector. Key features include:
              </p>
              <ul class="paper-list">
                <li>Metric learning-based graph construction with edge filtering</li>
                <li>Interaction Network and Graph Attention architectures</li>
                <li>Scalable inference on GPU clusters via the ACTS framework integration</li>
                <li>Demonstrated efficiency &gt; 99% on simulated HL-LHC data</li>
              </ul>

              <h3 class="subsection-heading">2.2 Physics Language Model (PLM) Module</h3>
              <p>
                A recently initialized research thread exploring the application of large language model paradigms
                to particle physics data. This module is under active development and exhibits the characteristic
                behavior of a pre-v1.0 release: high ambition, intermittent crashes, and verbose logging to
                anyone who will listen at conferences.
              </p>

              <h3 class="subsection-heading">2.3 ATLAS Collaboration Interface</h3>
              <p>
                A well-tested interface layer providing bidirectional communication with the ATLAS experiment
                (approximately 5,000 collaborators). In v3.0, this module was upgraded to ML co-convener status,
                granting elevated permissions for coordinating machine learning activities across the collaboration.
                Known issues include excessive meeting overhead and the tendency to volunteer for additional
                service tasks.
              </p>

              <h3 class="subsection-heading">2.4 Caffeine Dependency Manager</h3>
              <p>
                A critical runtime dependency. Empirical studies show a strong correlation (<em>r</em> = 0.94,
                <em>p</em> &lt; 0.001) between daily caffeine intake and research output as measured by lines
                of code committed. The library is not tested for production use without this dependency and
                will raise <code>DecafException</code> errors if instantiated before 9:00 AM local time.
              </p>

              <h2 class="section-heading">3. Experimental Results</h2>
              <p>
                We evaluate the library across multiple benchmarks. Aggregated performance metrics are
                presented in Table 1.
              </p>

              <div class="paper-table-wrapper">
                <table class="paper-table">
                  <caption>Table 1: Summary of benchmark results for daniel-murnane/core v3.0</caption>
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Value</th>
                      <th>Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Total publications</td>
                      <td>42</td>
                      <td>Exact count</td>
                    </tr>
                    <tr>
                      <td>Total citations</td>
                      <td>1,276+</td>
                      <td>Google Scholar</td>
                    </tr>
                    <tr>
                      <td><em>h</em>-index</td>
                      <td>8</td>
                      <td>As of 2024</td>
                    </tr>
                    <tr>
                      <td>GNN4ITk track efficiency</td>
                      <td>&gt; 99%</td>
                      <td>Simulated HL-LHC</td>
                    </tr>
                    <tr>
                      <td>Coffee consumption rate</td>
                      <td>3.2 cups/day</td>
                      <td>Self-reported (biased)</td>
                    </tr>
                    <tr>
                      <td>Conference talks survived</td>
                      <td>20+</td>
                      <td>Lower bound</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Selected key publications include:
              </p>
              <ul class="paper-list">
                <li><em>Graph Neural Network Track Reconstruction for the ATLAS ITk Detector</em> (ATL-ITK-PROC, 2023) -- the flagship result establishing GNN-based tracking as viable for HL-LHC</li>
                <li><em>Charged Particle Tracking with Machine Learning on FPGAs</em> (JINST, 2024) -- hardware acceleration of ML tracking</li>
                <li><em>Performance of the ATLAS Track Reconstruction Algorithms</em> (Eur. Phys. J. C, 2022) -- comprehensive tracking performance evaluation</li>
                <li><em>Track Seeding and Labelling with Embedded-space Graph Neural Networks</em> (EPJ Web of Conferences, 2021) -- foundational GNN tracking methodology</li>
              </ul>

              <h2 class="section-heading">4. Related Work</h2>
              <p>
                Several competing implementations exist in the broader ecosystem. The
                <code>ctd2024-proceedings/</code> framework provides similar functionality but targets a different
                detector geometry. The <code>acts-project/acts</code> library [5] offers a complementary
                C++-native implementation with which our library maintains strong integration bindings. We note
                that while hardware-based solutions (TPUs, FPGAs) have shown promising results on isolated
                subtasks, our library provides the advantage of creative problem solving, the ability to consume
                pizza during late-night debugging sessions, and a non-zero probability of generating genuinely
                novel research ideas during shower time.
              </p>
              <p>
                We acknowledge the broader ecosystem of approximately 5,000 collaborators within ATLAS, each
                representing a unique human-integration library with distinct specializations, runtime
                requirements, and opinions about Python vs. C++. The author's particular niche --
                ML-for-tracking -- occupies a Goldilocks zone between "pure ML people who have never seen a
                detector" and "pure physicists who view neural networks with deep suspicion."
              </p>

              <h2 class="section-heading">5. Conclusion and Future Work</h2>
              <p>
                We have presented <code>daniel-murnane/core</code> v3.0, a human integration library demonstrating
                strong performance across particle physics and machine learning workloads. The library is
                currently deployed at the Niels Bohr Institute and maintains active connections to the ATLAS
                experiment and the global HEP-ML community.
              </p>
              <p>
                Future development priorities include: (1) the Physics Language Model research program,
                (2) continued optimization of GNN4ITk for production deployment in ATLAS Run 4, (3) expansion
                of the library's mentoring and supervision capabilities (forking support), and (4) eventual
                migration to a tenured runtime environment (long-term stability release).
              </p>
              <p>
                The source code is available at
                <a href="https://github.com/murnanedaniel" target="_blank">github.com/murnanedaniel</a>.
                Bug reports may be filed via email but are processed on a best-effort basis, particularly
                during ATLAS data-taking periods.
              </p>

              <!-- References -->
              <h2 class="section-heading">References</h2>
              <ol class="paper-references">
                <li>
                  D. Murnane et al., "Graph Neural Network Track Reconstruction for the ATLAS ITk Detector,"
                  ATL-ITK-PROC-2023-002, 2023.
                  <a href="https://arxiv.org/abs/2304.01150" target="_blank">[arXiv:2304.01150]</a>
                </li>
                <li>
                  D. Murnane et al., "Charged Particle Tracking with Machine Learning on FPGAs,"
                  JINST, 2024.
                  <a href="https://arxiv.org/abs/2309.16754" target="_blank">[arXiv:2309.16754]</a>
                </li>
                <li>
                  ATLAS Collaboration, "Performance of the ATLAS Track Reconstruction Algorithms,"
                  Eur. Phys. J. C 82, 2022.
                  <a href="https://arxiv.org/abs/2203.12852" target="_blank">[arXiv:2203.12852]</a>
                </li>
                <li>
                  D. Murnane et al., "Track Seeding and Labelling with Embedded-space Graph Neural Networks,"
                  EPJ Web of Conferences, 2021.
                  <a href="https://arxiv.org/abs/2007.00149" target="_blank">[arXiv:2007.00149]</a>
                </li>
                <li>
                  S. Ju et al., "Performance of a Geometric Deep Learning Pipeline for HL-LHC Particle Tracking,"
                  Eur. Phys. J. C, 2021.
                  <a href="https://arxiv.org/abs/2103.06995" target="_blank">[arXiv:2103.06995]</a>
                </li>
                <li>
                  X. Ai et al., "A Common Tracking Software Project (ACTS),"
                  JINST 17 P02031, 2022.
                </li>
                <li>
                  D. Murnane, "I really need more coffee,"
                  Unpublished internal memo, 2024.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="arxiv-footer">
      <div class="arxiv-footer-inner">
        <p>This is a parody page. Not affiliated with the real arXiv.org (operated by Cornell University).</p>
        <p>Made with LaTeX-flavored CSS and a sense of humor.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No reactive logic needed -- this is a static parody page
</script>

<style scoped>
/* ============================
   Font & Reset
   ============================ */
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@400;600;700&family=Source+Code+Pro:wght@400;500&display=swap');

.proposal-v5 {
  font-family: 'Source Serif 4', 'Georgia', 'Times New Roman', serif;
  color: #000000;
  background: #ffffff;
  min-height: 100vh;
  line-height: 1.6;
  font-size: 15px;
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.proposal-v5 *,
.proposal-v5 *::before,
.proposal-v5 *::after {
  box-sizing: border-box;
}

.proposal-v5 a {
  color: #b31b1b;
  text-decoration: none;
}

.proposal-v5 a:hover {
  text-decoration: underline;
}

/* ============================
   arXiv Header Bar
   ============================ */
.arxiv-header {
  background: #b31b1b;
  border-bottom: 3px solid #8b1515;
  padding: 0;
}

.arxiv-header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.arxiv-logo-area {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-shrink: 0;
}

.arxiv-logo {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.arxiv-dot {
  color: #ffcccc;
}

.arxiv-tagline {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.75rem;
  color: #ffcccc;
  font-style: italic;
}

.arxiv-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.arxiv-nav-link {
  color: #ffffff !important;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
}

.arxiv-search-box {
  display: flex;
  gap: 0;
}

.arxiv-search-input {
  padding: 4px 10px;
  border: 1px solid #ddd;
  border-radius: 3px 0 0 3px;
  font-size: 0.8rem;
  width: 200px;
  background: #fff;
  font-family: 'Source Sans 3', Arial, sans-serif;
}

.arxiv-search-btn {
  padding: 4px 14px;
  background: #ddd;
  border: 1px solid #bbb;
  border-left: none;
  border-radius: 0 3px 3px 0;
  font-size: 0.8rem;
  cursor: default;
  font-family: 'Source Sans 3', Arial, sans-serif;
  color: #333;
}

.arxiv-header-links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.arxiv-link {
  color: #ffffff !important;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.8rem;
}

.arxiv-sep {
  color: #ffcccc;
  font-size: 0.8rem;
}

/* ============================
   Breadcrumb
   ============================ */
.arxiv-breadcrumb {
  background: #f4f4f4;
  border-bottom: 1px solid #ddd;
  padding: 6px 0;
}

.arxiv-breadcrumb-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.82rem;
  color: #555;
}

.arxiv-breadcrumb a {
  color: #b31b1b;
}

/* ============================
   Main Layout
   ============================ */
.arxiv-main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 20px 60px;
}

.arxiv-paper {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

/* ============================
   Action Sidebar
   ============================ */
.arxiv-actions {
  width: 180px;
  flex-shrink: 0;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.82rem;
  padding-top: 8px;
}

.arxiv-action-group {
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e0e0e0;
}

.arxiv-action-group strong {
  display: block;
  margin-bottom: 4px;
  color: #333;
  font-size: 0.82rem;
}

.arxiv-action-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arxiv-action-group ul li {
  margin: 2px 0;
}

.arxiv-action-group ul li a {
  color: #b31b1b;
  font-size: 0.82rem;
}

.arxiv-context {
  margin: 4px 0 0 0;
  color: #555;
}

.arxiv-action-link {
  display: block;
  margin: 3px 0;
  color: #b31b1b;
  font-size: 0.82rem;
}

.arxiv-bookmark {
  display: inline-block;
  padding: 4px 12px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #333 !important;
  font-size: 0.78rem;
  text-align: center;
}

/* ============================
   Paper Content
   ============================ */
.arxiv-content {
  flex: 1;
  min-width: 0;
}

.arxiv-id-line {
  margin-bottom: 16px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.9rem;
}

.arxiv-id {
  color: #b31b1b;
}

.paper-title {
  font-family: 'Source Serif 4', 'Georgia', 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 16px 0;
  color: #1a1a1a;
}

.paper-authors {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 1.05rem;
  margin-bottom: 8px;
  color: #222;
}

.paper-authors sup {
  font-size: 0.7em;
  color: #b31b1b;
}

.author-name {
  font-weight: 600;
  color: #b31b1b;
}

.paper-affiliations {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.82rem;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.5;
}

.paper-affiliations p {
  margin: 2px 0;
}

.paper-affiliations sup {
  font-size: 0.8em;
  color: #b31b1b;
  margin-right: 2px;
}

.paper-dates {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.82rem;
  color: #777;
  margin-bottom: 20px;
  font-style: italic;
}

.paper-dates p {
  margin: 0;
}

/* ============================
   Abstract
   ============================ */
.paper-abstract {
  background: #fafafa;
  border: 1px solid #e8e8e8;
  border-left: 3px solid #b31b1b;
  padding: 16px 20px;
  margin-bottom: 20px;
}

.abstract-heading {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #333;
}

.abstract-text {
  font-family: 'Source Serif 4', 'Georgia', 'Times New Roman', serif;
  font-size: 0.92rem;
  line-height: 1.65;
  margin: 0;
  color: #222;
  text-align: justify;
}

.abstract-text code {
  font-family: 'Source Code Pro', 'Courier New', monospace;
  font-size: 0.88em;
  background: #f0eded;
  padding: 1px 4px;
  border-radius: 2px;
  color: #b31b1b;
}

/* ============================
   Meta Table
   ============================ */
.paper-meta-table {
  margin-bottom: 24px;
}

.paper-meta-table table {
  border-collapse: collapse;
  width: 100%;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.85rem;
}

.paper-meta-table td {
  padding: 5px 10px 5px 0;
  vertical-align: top;
  border: none;
}

.meta-label {
  font-weight: 700;
  white-space: nowrap;
  color: #333;
  width: 100px;
}

.paper-divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 24px 0 32px;
}

/* ============================
   Paper Body (two-column)
   ============================ */
.paper-body {
  margin-top: 10px;
}

.two-column {
  column-count: 2;
  column-gap: 32px;
  column-rule: 1px solid #eee;
}

.two-column > h2,
.two-column > h3 {
  column-span: none;
  break-after: avoid;
}

.section-heading {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 28px 0 10px 0;
  color: #1a1a1a;
  break-after: avoid;
}

.section-heading:first-child {
  margin-top: 0;
}

.subsection-heading {
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.98rem;
  font-weight: 700;
  margin: 20px 0 8px 0;
  color: #333;
  font-style: italic;
  break-after: avoid;
}

.paper-body p {
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0 0 12px 0;
  text-align: justify;
  hyphens: auto;
}

.paper-body code {
  font-family: 'Source Code Pro', 'Courier New', monospace;
  font-size: 0.86em;
  background: #f5f2f2;
  padding: 1px 4px;
  border-radius: 2px;
  color: #b31b1b;
}

.paper-list {
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0 0 14px 0;
  padding-left: 20px;
}

.paper-list li {
  margin-bottom: 4px;
}

/* ============================
   Paper Table
   ============================ */
.paper-table-wrapper {
  break-inside: avoid;
  margin: 16px 0 20px;
}

.paper-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.82rem;
}

.paper-table caption {
  font-size: 0.8rem;
  font-style: italic;
  text-align: left;
  margin-bottom: 6px;
  color: #555;
  caption-side: top;
}

.paper-table th {
  border-top: 2px solid #333;
  border-bottom: 1px solid #333;
  padding: 6px 10px;
  text-align: left;
  font-weight: 700;
  background: #fafafa;
}

.paper-table td {
  padding: 5px 10px;
  border-bottom: 1px solid #e0e0e0;
}

.paper-table tbody tr:last-child td {
  border-bottom: 2px solid #333;
}

/* ============================
   References
   ============================ */
.paper-references {
  font-size: 0.82rem;
  line-height: 1.6;
  padding-left: 24px;
  margin: 10px 0 0 0;
}

.paper-references li {
  margin-bottom: 8px;
  color: #333;
}

.paper-references a {
  color: #b31b1b;
  font-size: 0.82rem;
}

/* ============================
   Footer
   ============================ */
.arxiv-footer {
  background: #f4f4f4;
  border-top: 1px solid #ddd;
  padding: 20px 0;
  text-align: center;
}

.arxiv-footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Source Sans 3', Arial, sans-serif;
  font-size: 0.78rem;
  color: #888;
}

.arxiv-footer-inner p {
  margin: 4px 0;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 900px) {
  .arxiv-paper {
    flex-direction: column;
  }

  .arxiv-actions {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  .arxiv-action-group {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .two-column {
    column-count: 1;
  }
}

@media (max-width: 600px) {
  .arxiv-header-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .arxiv-search-input {
    width: 140px;
  }

  .paper-title {
    font-size: 1.3rem;
  }

  .arxiv-header-links {
    display: none;
  }
}

/* ============================
   VitePress overrides
   ============================ */
.proposal-v5 :deep(.VPDoc),
.proposal-v5 :deep(.vp-doc) {
  padding: 0 !important;
  max-width: none !important;
}
</style>
