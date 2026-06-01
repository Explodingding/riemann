import React, { useMemo, useState } from 'react';

type Region = 'Lommel' | 'Uganda' | 'Transfer lesson';
type Theme = 'Resource base' | 'Value chain' | 'Environmental control' | 'Renewable energy' | 'Policy and governance' | 'Circular economy';

interface EvidenceCard {
  title: string;
  region: Region;
  theme: Theme;
  metric: string;
  finding: string;
  implication: string;
  source: string;
  sourceUrl?: string;
}

interface ComparisonRow {
  category: string;
  lommel: string;
  uganda: string;
  action: string;
}

const evidenceCards: EvidenceCard[] = [
  {
    title: 'High-purity silica is the economic anchor',
    region: 'Lommel',
    theme: 'Resource base',
    metric: 'Report benchmark: SiO2 > 99.5%; Fe2O3 < 0.01%',
    finding:
      'Lommel built its industrial identity around exceptionally pure quartz sand that can support demanding glass, chemical, construction and foundry uses.',
    implication:
      'Uganda should not treat sand as a generic bulk material; each deposit needs chemistry, grain-size and impurity testing before policy or factory design decisions.',
    source: 'Uploaded comparative report; Sibelco Lommel site profile',
    sourceUrl: 'https://www.sibelco.com/en/sites/lommel'
  },
  {
    title: 'Local processing keeps more value near the resource',
    region: 'Lommel',
    theme: 'Value chain',
    metric: 'Extraction -> processing -> customer-specific grades -> glass and industrial customers',
    finding:
      'The Lommel model links quarrying, washing, grading, drying, logistics and downstream industrial customers instead of exporting only raw sand.',
    implication:
      'Uganda can use industrial zones and procurement policy to move from low-margin extraction toward domestic container glass, architectural glass and solar-component inputs.',
    source: 'Uploaded comparative report; Sibelco operations summary',
    sourceUrl: 'https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations'
  },
  {
    title: 'Mine water is treated as a controlled loop',
    region: 'Lommel',
    theme: 'Environmental control',
    metric: 'Process water purified on site and circulated back to nearby quarries',
    finding:
      'Sibelco describes quarry-water handling as part of the production process, with purification and recirculation rather than unmanaged discharge.',
    implication:
      'Ugandan projects near Lake Victoria need water-balance monitoring, discharge standards and wetland buffer protection before extraction expands.',
    source: 'Sibelco Lommel sustainability article',
    sourceUrl: 'https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations'
  },
  {
    title: 'Renewable power is integrated into the mine site',
    region: 'Lommel',
    theme: 'Renewable energy',
    metric: '28,000 MWh/year wind output; 3 MW solar park; about 75% renewable plant energy',
    finding:
      'Lommel combines mineral processing with on-site renewables, including wind turbines and a solar park placed on remediated land.',
    implication:
      'Uganda can evaluate floating solar or adjacent solar farms to power washing, grading and glass manufacturing while preserving agricultural land.',
    source: 'Sibelco Lommel sustainability article',
    sourceUrl: 'https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations'
  },
  {
    title: 'Post-mining land can become biodiversity infrastructure',
    region: 'Lommel',
    theme: 'Environmental control',
    metric: '18 ha Maatheide-Blokwaters area transferred for nature management',
    finding:
      'A former extraction landscape is being managed for ponds, drifting dunes and species such as natterjack toad, smooth snake and rare wetland beetles.',
    implication:
      'Ugandan permits should define the post-mining land use before extraction starts: wetland restoration, aquaculture, eco-tourism or controlled industrial reuse.',
    source: 'VRT NWS report on Sibelco and Natuurpunt',
    sourceUrl: 'https://www.vrt.be/vrtnws/nl/2023/10/05/sibelco-draagt-ontginningsgebied-maatheide-blokwaters-in-lommel/'
  },
  {
    title: 'Uganda has resource potential but needs standardized deposit data',
    region: 'Uganda',
    theme: 'Resource base',
    metric: 'Report benchmark: many deposits around 98.5%-99% SiO2, requiring washing and verification',
    finding:
      'The strongest project candidates are around Lake Victoria locations such as Bukakata/Masaka, Diisi Island and Nyimu, but the public dataset is fragmented.',
    implication:
      'The first research task is a deposit register with location, ownership, chemistry, grain size, overburden, water sensitivity and current extraction status.',
    source: 'Uploaded comparative report'
  },
  {
    title: 'Unregulated sand mining creates ecological and livelihood risk',
    region: 'Uganda',
    theme: 'Environmental control',
    metric: 'NEMA impact list: habitat destruction, erosion, sedimentation and water-quality degradation',
    finding:
      'NEMA frames sand extraction from lakes, rivers, beaches and inland dunes as environmentally sensitive and legally controlled.',
    implication:
      'A Uganda pathway should begin with mapped no-go zones, wetland buffers, environmental impact assessment screening and public monitoring dashboards.',
    source: 'Uganda National Environment Management Authority',
    sourceUrl: 'https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/'
  },
  {
    title: 'Informal markets weaken resource control',
    region: 'Uganda',
    theme: 'Policy and governance',
    metric: 'ISS notes unreliable export data and weak oversight in Lake Victoria districts',
    finding:
      'Sand extraction has been reported around Masaka, Wakiso, Kalungu, Gomba and Mpigi, with black-market flows reducing revenue and accountability.',
    implication:
      'Formal licensing, traceable transport permits and public production/export statistics are environmental tools as much as economic tools.',
    source: 'Institute for Security Studies',
    sourceUrl: 'https://issafrica.org/iss-today/sweeping-illegal-sand-mining-under-the-rug-in-uganda'
  },
  {
    title: 'The law already supports stricter environmental control',
    region: 'Uganda',
    theme: 'Policy and governance',
    metric: 'National Environment Act requires project briefs for 2-5 m3/day extraction and penalties for violations',
    finding:
      'NEMA states that Uganda has legal tools for sand-mining control, including project briefs, lake and wetland management provisions and enforcement penalties.',
    implication:
      'The policy gap is less about inventing new principles and more about implementation: budgets, inspections, transparent permits and community reporting.',
    source: 'Uganda National Environment Management Authority',
    sourceUrl: 'https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/'
  },
  {
    title: 'Circular glass can reduce extraction pressure',
    region: 'Transfer lesson',
    theme: 'Circular economy',
    metric: 'Glass cullet reduces virgin raw-material demand and melting energy needs',
    finding:
      'The comparative report recommends a national glass-collection and cullet system so new industry does not depend only on virgin silica.',
    implication:
      'Uganda should pair any new glass cluster with bottle/container take-back, city collection jobs and quality standards for cullet sorting.',
    source: 'Uploaded comparative report'
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    category: 'Resource quality',
    lommel: 'Known ultra-high-purity quartz sand, long industrial history and customer-specific processing standards.',
    uganda: 'Promising high-silica deposits around Lake Victoria, but public chemistry and reserve data are incomplete.',
    action: 'Create a national silica dataset: SiO2, Fe2O3, grain size, clay content, water-table sensitivity and land tenure.'
  },
  {
    category: 'Economic model',
    lommel: 'Integrated regional supply chain that links extraction, processing, renewables and industrial customers.',
    uganda: 'Often extractive or informal, with continued dependence on imported finished glass and construction materials.',
    action: 'Prioritize value-added processing zones near transport and power corridors before expanding raw exports.'
  },
  {
    category: 'Environmental legacy',
    lommel: 'Damaged industrial landscapes have been remediated into nature areas and managed quarry-water systems.',
    uganda: 'Lake Victoria shore and wetland extraction risks erosion, fisheries, water quality and local livelihoods.',
    action: 'Make concurrent reclamation plans, wetland buffers and third-party audits mandatory permit conditions.'
  },
  {
    category: 'Energy strategy',
    lommel: 'Wind and solar now support a large share of plant energy; remediated land is used for solar generation.',
    uganda: 'Strong solar resource, but industrial energy planning must avoid competing with food production and wetlands.',
    action: 'Evaluate floating solar on engineered reservoirs or post-mining lakes only after biodiversity and water studies.'
  },
  {
    category: 'Governance',
    lommel: 'Established permitting, corporate reporting and nature-management partnerships.',
    uganda: 'Legal tools exist, but enforcement, export data and miner registration remain major research gaps.',
    action: 'Publish permits, production volumes, environmental-monitoring results and rehabilitation-bond status.'
  }
];

const roadmap = [
  {
    step: '1',
    title: 'Map the resource before scaling extraction',
    detail:
      'Build a deposit register for Bukakata/Masaka, Diisi Island, Nyimu and other candidate sites. Record chemistry, hydrology, biodiversity sensitivity and existing community use.'
  },
  {
    step: '2',
    title: 'Attach every permit to a concurrent reclamation plan',
    detail:
      'Require operators to rehabilitate each depleted block immediately through bank stabilization, native wetland planting, water-quality monitoring and agreed post-mining land use.'
  },
  {
    step: '3',
    title: 'Use financial assurance to protect the public',
    detail:
      'Reclamation bonds or escrow funds should be sized from independent closure-cost estimates and released only after ecological targets are verified.'
  },
  {
    step: '4',
    title: 'Build a green glass cluster instead of a raw-sand export route',
    detail:
      'Co-locate washing, grading, glass manufacturing, cullet sorting and renewable power so more value and skilled work stays inside Uganda.'
  },
  {
    step: '5',
    title: 'Create a public monitoring dashboard',
    detail:
      'Track permits, extraction volumes, water quality, shoreline change, complaints, restoration progress, cullet volumes and enforcement actions.'
  }
];

const dataNeeds = [
  'Certified chemical assays for each candidate Ugandan deposit, including iron contamination and washing requirements.',
  'GIS layers for Lake Victoria wetlands, fish-spawning zones, erosion-prone shorelines, roads, power lines and community land use.',
  'Current import volumes and prices for architectural glass, container glass and solar-related glass inputs.',
  'Registered and unregistered sand-mining sites, transport routes, license status and annual production estimates.',
  'Baseline water quality, turbidity, groundwater levels and biodiversity indicators for each proposed extraction zone.',
  'Closure-cost model for reclamation bonds, including revegetation, bank stabilization, water treatment and long-term monitoring.'
];

const sourceList = [
  {
    label: 'Uploaded report: Comparative Environmental & Industrial Strategy',
    detail: 'Core framework and Lommel-to-Uganda transfer model.'
  },
  {
    label: 'Sibelco - Lommel sustainability article',
    detail: 'Operational details on output, renewable energy, water recirculation and site reconstruction.',
    url: 'https://www.sibelco.com/en/news/new-wind-turbines-at-lommel-demonstrate-sibelco-s-commitment-to-sustainable-operations'
  },
  {
    label: 'NEMA Uganda - sand mining impacts and laws',
    detail: 'Environmental risks, legal requirements and enforcement framing.',
    url: 'https://www.nema.go.ug/en/understanding-impacts-challenges-and-laws-on-governing-sand-mining-in-uganda/'
  },
  {
    label: 'ISS Africa - illegal sand mining in Uganda',
    detail: 'Governance, informal markets, export-data and livelihood risks.',
    url: 'https://issafrica.org/iss-today/sweeping-illegal-sand-mining-under-the-rug-in-uganda'
  },
  {
    label: 'VRT NWS - Maatheide-Blokwaters nature transfer',
    detail: 'Example of post-extraction biodiversity management in the Lommel region.',
    url: 'https://www.vrt.be/vrtnws/nl/2023/10/05/sibelco-draagt-ontginningsgebied-maatheide-blokwaters-in-lommel/'
  }
];

const SustainableResources: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedRegion, setSelectedRegion] = useState<'All' | Region>('All');
  const [selectedTheme, setSelectedTheme] = useState<'All' | Theme>('All');

  const regions = useMemo(() => Array.from(new Set(evidenceCards.map((card) => card.region))), []);
  const themes = useMemo(() => Array.from(new Set(evidenceCards.map((card) => card.theme))), []);

  const filteredEvidence = evidenceCards.filter((card) => {
    const regionMatches = selectedRegion === 'All' || card.region === selectedRegion;
    const themeMatches = selectedTheme === 'All' || card.theme === selectedTheme;
    return regionMatches && themeMatches;
  });

  return (
    <div className="research-page">
      <section className="hero-panel" id="overview">
        <p className="eyebrow">Environmental protection research hub</p>
        <h1>Lommel vs Uganda: Sustainable Resource Management</h1>
        <p className="hero-copy">
          A data-collection page for comparing how Lommel, Belgium manages high-purity silica extraction,
          ecological reclamation and renewable power with how Uganda could control silica sand resources
          around Lake Victoria without repeating preventable environmental damage.
        </p>
        <div className="hero-actions" aria-label="Research sections">
          {[
            ['overview', 'Overview'],
            ['evidence', 'Evidence bank'],
            ['comparison', 'Comparison'],
            ['roadmap', 'Uganda roadmap'],
            ['sources', 'Sources']
          ].map(([id, label]) => (
            <button
              key={id}
              className={activeSection === id ? 'active' : ''}
              onClick={() => setActiveSection(id)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {activeSection === 'overview' && (
        <>
          <section className="insight-grid" aria-label="Research summary">
            <article className="insight-card">
              <span>Core question</span>
              <h2>Can Uganda copy the useful parts of the Lommel model?</h2>
              <p>
                Yes, but only if the model is adapted: deposit testing, wetland protection, enforceable
                reclamation, local manufacturing and transparent monitoring must come before rapid extraction.
              </p>
            </article>
            <article className="insight-card">
              <span>Lommel lesson</span>
              <h2>Extraction is managed as an industrial ecosystem</h2>
              <p>
                Lommel links processed silica, customer logistics, renewable energy, water recirculation and
                post-mining nature planning into one long-term system.
              </p>
            </article>
            <article className="insight-card">
              <span>Uganda risk</span>
              <h2>Lake Victoria changes the environmental stakes</h2>
              <p>
                Sand mining near wetlands and shorelines can affect erosion, fish habitat, water quality and
                local livelihoods, especially where informal extraction outpaces enforcement.
              </p>
            </article>
            <article className="insight-card">
              <span>Research output</span>
              <h2>A living dataset, not a one-time essay</h2>
              <p>
                The page organizes evidence into metrics, source links, data gaps and policy actions so your
                friend can expand it into a fieldwork or dissertation-style project.
              </p>
            </article>
          </section>

          <section className="research-question-panel">
            <div>
              <p className="eyebrow">Working thesis</p>
              <h2>Resource control should mean more than stopping illegal mining.</h2>
            </div>
            <p>
              A strong system controls what is extracted, who benefits, how water and biodiversity are protected,
              where value is added, how much financial assurance is posted, and what the land becomes after mining.
            </p>
          </section>
        </>
      )}

      {activeSection === 'evidence' && (
        <section className="section-card" id="evidence">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Evidence bank</p>
              <h2>Collect and filter research findings</h2>
            </div>
            <p>
              Use these cards as a starting dataset. Add field measurements, interviews and official permit
              records as they become available.
            </p>
          </div>

          <div className="filter-bar">
            <label>
              Region
              <select value={selectedRegion} onChange={(event) => setSelectedRegion(event.target.value as 'All' | Region)}>
                <option value="All">All regions</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Theme
              <select value={selectedTheme} onChange={(event) => setSelectedTheme(event.target.value as 'All' | Theme)}>
                <option value="All">All themes</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="evidence-grid">
            {filteredEvidence.map((card) => (
              <article className="evidence-card" key={card.title}>
                <div className="card-meta">
                  <span>{card.region}</span>
                  <span>{card.theme}</span>
                </div>
                <h3>{card.title}</h3>
                <p className="metric">{card.metric}</p>
                <p>{card.finding}</p>
                <div className="implication">
                  <strong>So what?</strong>
                  <p>{card.implication}</p>
                </div>
                {card.sourceUrl ? (
                  <a href={card.sourceUrl} target="_blank" rel="noreferrer">
                    {card.source}
                  </a>
                ) : (
                  <span className="source-note">{card.source}</span>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'comparison' && (
        <section className="section-card" id="comparison">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Side-by-side analysis</p>
              <h2>What Lommel proves, and what Uganda still needs</h2>
            </div>
          </div>
          <div className="comparison-table" role="table" aria-label="Lommel and Uganda comparison">
            <div className="comparison-row comparison-header" role="row">
              <span role="columnheader">Category</span>
              <span role="columnheader">Lommel, Belgium</span>
              <span role="columnheader">Uganda</span>
              <span role="columnheader">Research or policy action</span>
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" role="row" key={row.category}>
                <strong role="cell">{row.category}</strong>
                <span role="cell">{row.lommel}</span>
                <span role="cell">{row.uganda}</span>
                <span role="cell">{row.action}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'roadmap' && (
        <>
          <section className="section-card" id="roadmap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Action framework</p>
                <h2>Roadmap for a Uganda-focused research proposal</h2>
              </div>
            </div>
            <div className="roadmap">
              {roadmap.map((item) => (
                <article key={item.step} className="roadmap-item">
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Data gaps</p>
                <h2>What to collect next</h2>
              </div>
              <p>
                These missing datasets can become interview questions, fieldwork checklists or spreadsheet columns.
              </p>
            </div>
            <ul className="data-list">
              {dataNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      {activeSection === 'sources' && (
        <section className="section-card" id="sources">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Source trail</p>
              <h2>Research sources used on this page</h2>
            </div>
          </div>
          <div className="sources-list">
            {sourceList.map((source) => (
              <article key={source.label}>
                <h3>{source.label}</h3>
                <p>{source.detail}</p>
                {'url' in source && source.url && (
                  <a href={source.url} target="_blank" rel="noreferrer">
                    Open source
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SustainableResources;
