export type PublicationType = 'Article' | 'Review' | 'Other';

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  type: PublicationType;
  year: number | null;
  citations?: number;
}

const ISIANI = 'MC Isiani';

export const publications: Publication[] = [
  {
    title: 'Social media and the Covid-19 pandemic: Observations from Nigeria',
    authors: `NA Obi-Ani, C Anikwenze, ${ISIANI}`,
    venue: 'Cogent Arts & Humanities 7(1), 1799483',
    type: 'Article',
    year: 2020,
    citations: 250,
  },
  {
    title: 'Urbanization in Nigeria: The Onitsha experience',
    authors: `NA Obi-Ani, ${ISIANI}`,
    venue: 'Cities 104, 102744',
    type: 'Article',
    year: 2020,
    citations: 67,
  },
  {
    title: 'A historical perspective of Nigerian immigrants in Europe',
    authors: `P Obi-Ani, NA Obi-Ani, ${ISIANI}`,
    venue: 'Cogent Arts & Humanities 7(1), 1846262',
    type: 'Article',
    year: 2020,
    citations: 39,
  },
  {
    title: 'Covid-19 and the Nigerian primary healthcare system: The leadership question',
    authors: `NA Obi-Ani, DO Ezeaku, O Ikem, ${ISIANI}, P Obi-Ani, et al.`,
    venue: 'Cogent Arts & Humanities 8(1), 1859075',
    type: 'Article',
    year: 2021,
    citations: 35,
  },
  {
    title: 'Amalgamation of Northern and Southern protectorates of Nigeria: Blessing or curse',
    authors: `${ISIANI}, NA Obi-Ani`,
    venue: 'International Journal of Development and Sustainability 13, 145–158',
    type: 'Article',
    year: 2019,
    citations: 20,
  },
  {
    title: 'Interrogating the International Monetary Fund (IMF) policies in Nigeria, 1986–2018',
    authors: `${ISIANI}, NA Obi-Ani, P Obi-Ani, CG Chidume, S Okoye-Ugwu`,
    venue: 'Cogent Arts & Humanities 8(1), 1932283',
    type: 'Article',
    year: 2021,
    citations: 16,
  },
  {
    title: 'The mistake of 1914: 100 years after',
    authors: `NA Obi-Ani, P Obi-Ani, ${ISIANI}`,
    venue: 'Nsukka Journal of the Humanities 24(2), 27–35',
    type: 'Article',
    year: 2016,
    citations: 15,
  },
  {
    title:
      'Socio-economic transformations in Nigeria: The role of Church Missionary Society (CMS) schools and social stigmatization in Onitsha Province, 1904–1975',
    authors: `${ISIANI}, UU Okonkwo, NA Obi-Ani`,
    venue: 'Cogent Arts & Humanities 8(1), 1922154',
    type: 'Article',
    year: 2021,
    citations: 12,
  },
  {
    title:
      'The city of boys: An ethnographic survey into the experiences of apprentices and urbanization of Onitsha city, Nigeria',
    authors: `${ISIANI}, LA Isiani, NA Obi-Ani, A Isiani, P Obi-Ani, OJ Isiani`,
    venue: 'Cities 149, 105003',
    type: 'Article',
    year: 2024,
    citations: 10,
  },
  {
    title: '“Presumed urbanization”: The experiences of Onitsha city slum dwellers',
    authors: `${ISIANI}, NA Obi-Ani, P Obi-Ani`,
    venue: 'Cities 119, 103399',
    type: 'Article',
    year: 2021,
    citations: 9,
  },
  {
    title:
      'Creativity, spirituality and society: A study in preservation of Ikenga and Ọfọ sculptures in contemporary Igbo society',
    authors: `${ISIANI}, NA Obi-Ani, CC Akabuike, SJ Onyemechalu, SP Okafor, et al.`,
    venue: 'Journal of Cultural Heritage Management and Sustainable Development 13(4)',
    type: 'Article',
    year: 2023,
    citations: 7,
  },
  {
    title: 'Not all deities were transformed in Igboland: A cultural history of the Api-Opi deity',
    authors: `${ISIANI}, SJ Onyemechalu, SC Osinem, SA Dimelu, NA Obi-Ani`,
    venue: 'Journal of Cultural Heritage Management and Sustainable Development 14(2)',
    type: 'Article',
    year: 2024,
    citations: 6,
  },
  {
    title:
      'Back to land: Interrogating the Israeli Moshav-Igbariam farm settlement model in Eastern Nigeria, 1961–1970',
    authors: 'M Isiani',
    venue: 'Asian Journal of Multidisciplinary Studies 8(4)',
    type: 'Article',
    year: 2020,
    citations: 3,
  },
  {
    title:
      '“No religion is superior”: History, culture, politics and heritage preservation of the Ogwugwu Mmiri deity',
    authors: `${ISIANI}, B Chukwudebelu, U Onyishi`,
    venue: 'Journal of Cultural Heritage Management and Sustainable Development 16(1)',
    type: 'Article',
    year: 2026,
    citations: 2,
  },
  {
    title: 'War and gender: Socio-economic reflections of the Sierra Leonean civil war',
    authors: `${ISIANI}, NC Ihediwa`,
    venue: 'Cogito 11(3), 133',
    type: 'Article',
    year: 2019,
    citations: 2,
  },
  {
    title: 'Egypt in historical perspective: Some thoughts',
    authors: `${ISIANI}, OA Ngozika`,
    venue: 'Asian Journal of Multidisciplinary Studies 8(4), 1–12',
    type: 'Article',
    year: 2020,
    citations: 1,
  },
  {
    title:
      'The tapestry of city life: Colonial modernity and everyday urban experiences in twentieth-century Onitsha, Nigeria',
    authors: ISIANI,
    venue: 'Cities 172, 106817',
    type: 'Article',
    year: 2026,
  },
  {
    title: 'The architecture of the Bight of Biafra: Spatial entanglements, by Joseph Godlewski (Routledge, 2024)',
    authors: ISIANI,
    venue: 'Journal of Postcolonial Writing',
    type: 'Review',
    year: 2026,
  },
  {
    title:
      'The aesthetics of belonging: Indigenous urbanism and city building in oil-boom Luanda, by Claudia Gastrow (University of North Carolina Press)',
    authors: ISIANI,
    venue: 'African Studies Review',
    type: 'Review',
    year: 2026,
  },
  {
    title: 'Dark humour, social media, and everyday violence in Nigeria: Gbaa ya ọkụ in Onitsha city',
    authors: ISIANI,
    venue: 'African Affairs 124(495), 131–152',
    type: 'Article',
    year: 2025,
  },
  {
    title: 'Election has no meaning: A re-appraisal of the 2023 general elections in Nigeria',
    authors: `P Obi-Ani, UU Okonkwo, ${ISIANI}`,
    venue: 'Galda Verlag',
    type: 'Other',
    year: 2024,
  },
  {
    title: 'The infrastructural south: Techno-environments of the third wave of urbanization, by Jonathan Silver',
    authors: ISIANI,
    venue: 'African Studies Review 67(4), 1101–1103',
    type: 'Review',
    year: 2024,
  },
  {
    title: 'Children of the soil: The power of built form in urban Madagascar, by Tasha Rijke-Epstein (Duke University Press, 2023)',
    authors: ISIANI,
    venue: 'African Studies Quarterly 22(4)',
    type: 'Review',
    year: 2024,
  },
  {
    title: 'Everyday state and democracy in Africa: Ethnographic encounters',
    authors: ISIANI,
    venue: 'African Studies Quarterly 21(4), 65–66',
    type: 'Review',
    year: 2023,
  },
  {
    title: 'Xenophobia: South Africa as a mirror on insecurity in Nigeria',
    authors: `NA Obi-Ani, ${ISIANI}, NE Enemchukwu`,
    venue: '',
    type: 'Other',
    year: null,
  },
];

export const featured = [...publications]
  .filter((p) => p.citations)
  .sort((a, b) => (b.citations ?? 0) - (a.citations ?? 0))
  .slice(0, 5);

export const CITATIONS_PER_YEAR = [
  { year: 2019, relative: 3 },
  { year: 2020, relative: 15 },
  { year: 2021, relative: 80 },
  { year: 2022, relative: 90 },
  { year: 2023, relative: 78 },
  { year: 2024, relative: 95 },
  { year: 2025, relative: 80 },
  { year: 2026, relative: 52 },
];

export const catalogue = publications.map((p, i) => ({
  ...p,
  id: `MCI-${String(i + 1).padStart(4, '0')}`,
}));

export type CatalogueEntry = (typeof catalogue)[number];

export const topCited = [...catalogue]
  .filter((p) => p.citations)
  .sort((a, b) => (b.citations ?? 0) - (a.citations ?? 0))
  .slice(0, 5);

export const SERIES = [
  {
    id: '01',
    title: 'Housing and urban history',
    text: 'Housing, city space and urban form in twentieth-century Nigeria, and what colonial-era city spaces reveal about African social and urban life.',
    match: ['urbanization', 'tapestry', 'city of boys', 'socio-economic transformations', 'back to land'],
  },
  {
    id: '02',
    title: 'Architectural and visual history',
    text: 'Built form, design and visual sources as historical evidence, in Onitsha and across the continent.',
    match: ['architecture of the bight', 'aesthetics of belonging', 'children of the soil', 'infrastructural south', 'tapestry'],
  },
  {
    id: '03',
    title: 'Postcolonial urban violence',
    text: 'Violence, humour and everyday life in the cities of Southeast Nigeria, and the politics around them.',
    match: ['dark humour', 'everyday state', 'city of boys', 'xenophobia', 'war and gender', 'election has no meaning'],
  },
  {
    id: '04',
    title: 'Heritage and environment',
    text: 'Igbo material culture, religion and heritage preservation, with attention to the ecology of urban growth.',
    match: ['creativity, spirituality', 'not all deities', 'no religion is superior'],
  },
];
