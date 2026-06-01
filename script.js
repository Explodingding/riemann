const evidenceCards = [
  {
    title: "High-purity silica is the economic anchor",
    region: "Lommel",
    theme: "Resource base",
    metric: "Report benchmark: SiO2 > 99.5%; Fe2O3 < 0.01%",
    finding:
      "Lommel built its industrial identity around exceptionally pure quartz sand that can support demanding glass, chemical, construction and foundry uses.",
    implication:
      "Uganda should not treat sand as a generic bulk material; each deposit needs chemistry, grain-size and impurity testing before policy or factory design decisions.",
    source: "Uploaded comparative report; Sibelco Lommel site profile",
    sourceUrl: "https://www.sibelco.com/en/sites/lommel"
  },
  {
    title: "Local processing keeps more value near the resource",
    region: "Lommel",
    theme: "Value chain",
    metric: "Extraction -> processing -> customer-specific grades -> glass and industrial customers",
    finding:
      "The Lommel model links quarrying, washing, grading, drying, logistics and downstream industrial customers instead of exporting only raw sand.",
    implication:
      "Uganda can use industrial zones and procurement policy to move from low-margin extraction toward domestic container glass, architectural glass and solar-component inputs.",
    source: "Uploaded comparative report; Sibelco operations summary",
    sourceUrl:
      "https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations"
  },
  {
    title: "Mine water is treated as a controlled loop",
    region: "Lommel",
    theme: "Environmental control",
    metric: "Process water purified on site and circulated back to nearby quarries",
    finding:
      "Sibelco describes quarry-water handling as part of the production process, with purification and recirculation rather than unmanaged discharge.",
    implication:
      "Ugandan projects near Lake Victoria need water-balance monitoring, discharge standards and wetland buffer protection before extraction expands.",
    source: "Sibelco Lommel sustainability article",
    sourceUrl:
      "https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations"
  },
  {
    title: "Renewable power is integrated into the mine site",
    region: "Lommel",
    theme: "Renewable energy",
    metric: "28,000 MWh/year wind output; 3 MW solar park; about 75% renewable plant energy",
    finding:
      "Lommel combines mineral processing with on-site renewables, including wind turbines and a solar park placed on remediated land.",
    implication:
      "Uganda can evaluate floating solar or adjacent solar farms to power washing, grading and glass manufacturing while preserving agricultural land.",
    source: "Sibelco Lommel sustainability article",
    sourceUrl:
      "https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations"
  },
  {
    title: "Post-mining land can become biodiversity infrastructure",
    region: "Lommel",
    theme: "Environmental control",
    metric: "18 ha Maatheide-Blokwaters area transferred for nature management",
    finding:
      "A former extraction landscape is being managed for ponds, drifting dunes and species such as natterjack toad, smooth snake and rare wetland beetles.",
    implication:
      "Ugandan permits should define the post-mining land use before extraction starts: wetland restoration, aquaculture, eco-tourism or controlled industrial reuse.",
    source: "VRT NWS report on Sibelco and Natuurpunt",
    sourceUrl:
      "https://www.vrt.be/vrtnws/nl/2023/10/05/sibelco-draagt-ontginningsgebied-maatheide-blokwaters-in-lommel/"
  },
  {
    title: "Uganda has resource potential but needs standardized deposit data",
    region: "Uganda",
    theme: "Resource base",
    metric: "Report benchmark: many deposits around 98.5%-99% SiO2, requiring washing and verification",
    finding:
      "The strongest project candidates are around Lake Victoria locations such as Bukakata/Masaka, Diisi Island and Nyimu, but the public dataset is fragmented.",
    implication:
      "The first research task is a deposit register with location, ownership, chemistry, grain size, overburden, water sensitivity and current extraction status.",
    source: "Uploaded comparative report"
  },
  {
    title: "Unregulated sand mining creates ecological and livelihood risk",
    region: "Uganda",
    theme: "Environmental control",
    metric: "NEMA impact list: habitat destruction, erosion, sedimentation and water-quality degradation",
    finding:
      "NEMA frames sand extraction from lakes, rivers, beaches and inland dunes as environmentally sensitive and legally controlled.",
    implication:
      "A Uganda pathway should begin with mapped no-go zones, wetland buffers, environmental impact assessment screening and public monitoring dashboards.",
    source: "Uganda National Environment Management Authority",
    sourceUrl:
      "https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/"
  },
  {
    title: "Informal markets weaken resource control",
    region: "Uganda",
    theme: "Policy and governance",
    metric: "ISS notes unreliable export data and weak oversight in Lake Victoria districts",
    finding:
      "Sand extraction has been reported around Masaka, Wakiso, Kalungu, Gomba and Mpigi, with black-market flows reducing revenue and accountability.",
    implication:
      "Formal licensing, traceable transport permits and public production/export statistics are environmental tools as much as economic tools.",
    source: "Institute for Security Studies",
    sourceUrl: "https://issafrica.org/iss-today/sweeping-illegal-sand-mining-under-the-rug-in-uganda"
  },
  {
    title: "The law already supports stricter environmental control",
    region: "Uganda",
    theme: "Policy and governance",
    metric: "National Environment Act requires project briefs for 2-5 m3/day extraction and penalties for violations",
    finding:
      "NEMA states that Uganda has legal tools for sand-mining control, including project briefs, lake and wetland management provisions and enforcement penalties.",
    implication:
      "The policy gap is less about inventing new principles and more about implementation: budgets, inspections, transparent permits and community reporting.",
    source: "Uganda National Environment Management Authority",
    sourceUrl:
      "https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/"
  },
  {
    title: "Circular glass can reduce extraction pressure",
    region: "Transfer lesson",
    theme: "Circular economy",
    metric: "Glass cullet reduces virgin raw-material demand and melting energy needs",
    finding:
      "The comparative report recommends a national glass-collection and cullet system so new industry does not depend only on virgin silica.",
    implication:
      "Uganda should pair any new glass cluster with bottle/container take-back, city collection jobs and quality standards for cullet sorting.",
    source: "Uploaded comparative report"
  }
];

const comparisonRows = [
  {
    category: "Resource quality",
    lommel: "Known ultra-high-purity quartz sand, long industrial history and customer-specific processing standards.",
    uganda: "Promising high-silica deposits around Lake Victoria, but public chemistry and reserve data are incomplete.",
    action: "Create a national silica dataset: SiO2, Fe2O3, grain size, clay content, water-table sensitivity and land tenure."
  },
  {
    category: "Economic model",
    lommel: "Integrated regional supply chain that links extraction, processing, renewables and industrial customers.",
    uganda: "Often extractive or informal, with continued dependence on imported finished glass and construction materials.",
    action: "Prioritize value-added processing zones near transport and power corridors before expanding raw exports."
  },
  {
    category: "Environmental legacy",
    lommel: "Damaged industrial landscapes have been remediated into nature areas and managed quarry-water systems.",
    uganda: "Lake Victoria shore and wetland extraction risks erosion, fisheries, water quality and local livelihoods.",
    action: "Make concurrent reclamation plans, wetland buffers and third-party audits mandatory permit conditions."
  },
  {
    category: "Energy strategy",
    lommel: "Wind and solar now support a large share of plant energy; remediated land is used for solar generation.",
    uganda: "Strong solar resource, but industrial energy planning must avoid competing with food production and wetlands.",
    action: "Evaluate floating solar on engineered reservoirs or post-mining lakes only after biodiversity and water studies."
  },
  {
    category: "Governance",
    lommel: "Established permitting, corporate reporting and nature-management partnerships.",
    uganda: "Legal tools exist, but enforcement, export data and miner registration remain major research gaps.",
    action: "Publish permits, production volumes, environmental-monitoring results and rehabilitation-bond status."
  }
];

const roadmap = [
  {
    step: "1",
    title: "Map the resource before scaling extraction",
    detail:
      "Build a deposit register for Bukakata/Masaka, Diisi Island, Nyimu and other candidate sites. Record chemistry, hydrology, biodiversity sensitivity and existing community use."
  },
  {
    step: "2",
    title: "Attach every permit to a concurrent reclamation plan",
    detail:
      "Require operators to rehabilitate each depleted block immediately through bank stabilization, native wetland planting, water-quality monitoring and agreed post-mining land use."
  },
  {
    step: "3",
    title: "Use financial assurance to protect the public",
    detail:
      "Reclamation bonds or escrow funds should be sized from independent closure-cost estimates and released only after ecological targets are verified."
  },
  {
    step: "4",
    title: "Build a green glass cluster instead of a raw-sand export route",
    detail:
      "Co-locate washing, grading, glass manufacturing, cullet sorting and renewable power so more value and skilled work stays inside Uganda."
  },
  {
    step: "5",
    title: "Create a public monitoring dashboard",
    detail:
      "Track permits, extraction volumes, water quality, shoreline change, complaints, restoration progress, cullet volumes and enforcement actions."
  }
];

const dataNeeds = [
  "Certified chemical assays for each candidate Ugandan deposit, including iron contamination and washing requirements.",
  "GIS layers for Lake Victoria wetlands, fish-spawning zones, erosion-prone shorelines, roads, power lines and community land use.",
  "Current import volumes and prices for architectural glass, container glass and solar-related glass inputs.",
  "Registered and unregistered sand-mining sites, transport routes, license status and annual production estimates.",
  "Baseline water quality, turbidity, groundwater levels and biodiversity indicators for each proposed extraction zone.",
  "Closure-cost model for reclamation bonds, including revegetation, bank stabilization, water treatment and long-term monitoring."
];

const sources = [
  {
    label: "Uploaded report: Comparative Environmental & Industrial Strategy",
    detail: "Core framework and Lommel-to-Uganda transfer model."
  },
  {
    label: "Sibelco - Lommel sustainability article",
    detail: "Operational details on output, renewable energy, water recirculation and site reconstruction.",
    url:
      "https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations"
  },
  {
    label: "NEMA Uganda - sand mining impacts and laws",
    detail: "Environmental risks, legal requirements and enforcement framing.",
    url: "https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/"
  },
  {
    label: "ISS Africa - illegal sand mining in Uganda",
    detail: "Governance, informal markets, export-data and livelihood risks.",
    url: "https://issafrica.org/iss-today/sweeping-illegal-sand-mining-under-the-rug-in-uganda"
  },
  {
    label: "VRT NWS - Maatheide-Blokwaters nature transfer",
    detail: "Example of post-extraction biodiversity management in the Lommel region.",
    url:
      "https://www.vrt.be/vrtnws/nl/2023/10/05/sibelco-draagt-ontginningsgebied-maatheide-blokwaters-in-lommel/"
  }
];

const byId = (id) => document.getElementById(id);

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]))];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function populateFilters() {
  const regionFilter = byId("region-filter");
  const themeFilter = byId("theme-filter");

  uniqueValues(evidenceCards, "region").forEach((region) => {
    regionFilter.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(region)}">${escapeHtml(region)}</option>`);
  });

  uniqueValues(evidenceCards, "theme").forEach((theme) => {
    themeFilter.insertAdjacentHTML("beforeend", `<option value="${escapeHtml(theme)}">${escapeHtml(theme)}</option>`);
  });
}

function renderEvidence() {
  const region = byId("region-filter").value;
  const theme = byId("theme-filter").value;
  const cards = evidenceCards.filter((card) => {
    const regionMatches = region === "All" || card.region === region;
    const themeMatches = theme === "All" || card.theme === theme;
    return regionMatches && themeMatches;
  });

  byId("evidence-grid").innerHTML = cards
    .map((card) => {
      const source = card.sourceUrl
        ? `<a href="${escapeHtml(card.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(card.source)}</a>`
        : `<span class="source-note">${escapeHtml(card.source)}</span>`;

      return `
        <article class="evidence-card">
          <div class="card-meta">
            <span>${escapeHtml(card.region)}</span>
            <span>${escapeHtml(card.theme)}</span>
          </div>
          <h3>${escapeHtml(card.title)}</h3>
          <p class="metric">${escapeHtml(card.metric)}</p>
          <p>${escapeHtml(card.finding)}</p>
          <div class="implication">
            <strong>So what?</strong>
            <p>${escapeHtml(card.implication)}</p>
          </div>
          ${source}
        </article>
      `;
    })
    .join("");
}

function renderComparison() {
  byId("comparison-table").innerHTML = `
    <div class="comparison-row comparison-header" role="row">
      <span role="columnheader">Category</span>
      <span role="columnheader">Lommel, Belgium</span>
      <span role="columnheader">Uganda</span>
      <span role="columnheader">Research or policy action</span>
    </div>
    ${comparisonRows
      .map(
        (row) => `
          <div class="comparison-row" role="row">
            <strong role="cell">${escapeHtml(row.category)}</strong>
            <span role="cell">${escapeHtml(row.lommel)}</span>
            <span role="cell">${escapeHtml(row.uganda)}</span>
            <span role="cell">${escapeHtml(row.action)}</span>
          </div>
        `
      )
      .join("")}
  `;
}

function renderRoadmap() {
  byId("roadmap-list").innerHTML = roadmap
    .map(
      (item) => `
        <article class="roadmap-item">
          <span>${escapeHtml(item.step)}</span>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderDataNeeds() {
  byId("data-list").innerHTML = dataNeeds.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderSources() {
  byId("sources-list").innerHTML = sources
    .map((source) => {
      const link = source.url
        ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">Open source</a>`
        : "";

      return `
        <article>
          <h3>${escapeHtml(source.label)}</h3>
          <p>${escapeHtml(source.detail)}</p>
          ${link}
        </article>
      `;
    })
    .join("");
}

function activateSection(sectionName) {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionName);
  });

  document.querySelectorAll("[data-content-section]").forEach((section) => {
    section.classList.toggle("active", section.dataset.contentSection === sectionName);
  });
}

function bindEvents() {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => activateSection(button.dataset.section));
  });

  byId("region-filter").addEventListener("change", renderEvidence);
  byId("theme-filter").addEventListener("change", renderEvidence);
}

populateFilters();
renderEvidence();
renderComparison();
renderRoadmap();
renderDataNeeds();
renderSources();
bindEvents();
