export type PublicationType = 'Article' | 'Review' | 'Chapter' | 'Other';

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
    title: 'The reggae artistes and the marijuana legalization struggle: The Bob Marley example',
    authors: ISIANI,
    venue: 'Journal of Drug and Alcohol Research 12',
    type: 'Article',
    year: 2024,
  },
  {
    title: 'The hype of coronavirus pandemic in Southeast Nigeria: Some thoughts',
    authors: ISIANI,
    venue: 'South Asian Journal of Social Sciences and Humanities 2(1), 116–140',
    type: 'Article',
    year: 2021,
  },
  {
    title: 'Religious reactions and interpretations of Covid-19 in Nigeria',
    authors: ISIANI,
    venue: 'Nigerian Journal of Social Sciences 14(2), 47–58',
    type: 'Article',
    year: 2020,
  },
  {
    title:
      '“The forgotten treasure in the midst of wants”: An assessment of Igbariam Farm Settlement Scheme in Eastern Nigeria, 1961–1979',
    authors: ISIANI,
    venue: 'International Journal of Scientific and Research Publications 10(2), 503–519',
    type: 'Article',
    year: 2020,
  },
  {
    title: 'Resource competition and agricultural revolution in Eastern Nigeria, 1954–1975',
    authors: ISIANI,
    venue: 'COOU International Journal of Humanities 1(1), 58–83',
    type: 'Article',
    year: 2019,
  },
  {
    title: 'Education and youth empowerment in Nigeria: An appraisal',
    authors: ISIANI,
    venue: 'In C.C. Osakwe and L.F. Odeh (eds), History and the Niger Delta: Oil, Politics and Culture (Festschrift in honour of Professor S.O. Aghalino)',
    type: 'Chapter',
    year: 2021,
  },
  {
    title: 'Ethnocentrism, cultural ideology and military leadership strategy of nations',
    authors: ISIANI,
    venue: 'In C.C. Osakwe et al. (eds), Evolving Trends in Socio-Economic and Military History (Festschrift in honour of Professor O.E. Tangban)',
    type: 'Chapter',
    year: 2020,
  },
  {
    title: 'The green alternative: Herdsmen and food scarcity in Uzo-Uwani, Nsukka Division, Nigeria, 2016–2018',
    authors: ISIANI,
    venue: 'In E. Nwabueze (ed.), New Frontiers in Contemporary African Studies, 36–50',
    type: 'Chapter',
    year: 2019,
  },
  {
    title: 'Religion and mental slavery in Nigeria: An analysis of Bob Marley’s “Redemption Song”',
    authors: `KC Ugwu, NA Obi-Ani, ${ISIANI}`,
    venue: 'Book chapter',
    type: 'Chapter',
    year: 2024,
  },
  {
    title: 'Iwuewu: Unmasking Simon Odo, the enigmatic monarch of Satan, Enugu-Ezike, Southeast Nigeria',
    authors: `KC Ugwu, NA Obi-Ani, ${ISIANI}`,
    venue: 'Book chapter',
    type: 'Chapter',
    year: 2023,
  },
  {
    title: 'Xenophobia: South Africa as a mirror on insecurity in Nigeria',
    authors: `NA Obi-Ani, ${ISIANI}, NE Enemchukwu`,
    venue: 'Nigerian Forum (Nigerian Institute of International Affairs) 40(1), 69–81',
    type: 'Article',
    year: 2020,
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

const doi = (d: string) => `https://doi.org/${d}`;
const rg = (slug: string) => `https://www.researchgate.net/publication/${slug}`;

// Links taken from the University of Nigeria staff profile; matched by title fragment.
const LINKS: [string, string][] = [
  ['dark humour', doi('10.1093/afraf/adaf013')],
  ['city of boys', doi('10.1016/j.cities.2024.105003')],
  ['reggae artistes', doi('10.4303/JDAR/236226')],
  ['no religion is superior', doi('10.1108/jchmsd-05-2022-0082')],
  ['not all deities', doi('10.1108/JCHMSD-07-2021-0132')],
  ['creativity, spirituality', doi('10.1108/JCHMSD-12-2020-0178')],
  ['presumed urbanization', doi('10.1016/j.cities.2021.103399')],
  ['international monetary fund', doi('10.1080/23311983.2021.1932283')],
  ['socio-economic transformations', doi('10.1080/23311983.2021.1922154')],
  ['hype of coronavirus', doi('10.48165/sajssh.2021.2109')],
  ['primary healthcare', doi('10.1080/23311983.2020.1859075')],
  ['nigerian immigrants', doi('10.1080/23311983.2020.1846262')],
  ['social media and the covid', doi('10.1080/23311983.2020.1799483')],
  ['urbanization in nigeria', doi('10.1016/j.cities.2020.102744')],
  ['forgotten treasure', 'http://dx.doi.org/10.29322/IJSRP.10.02.2020.p9872'],
  ['war and gender', 'https://cogito.ucdc.ro/COGITO%2029%20septembrie%202019.pdf'],
  ['resource competition', 'https://coou.edu.ng/journals/coouijhsga/Vol1_Iss1/coouijhsga1119004.pdf'],
  ['children of the soil', 'https://journals.flvc.org/ASQ/article/view/137782/143212'],
  ['infrastructural south', doi('10.1017/asr.2024.134')],
  ['everyday state', 'https://asq.africa.ufl.edu/current-issue/'],
  // ResearchGate pages, used where no publisher link was available.
  ['tapestry of city life', doi('10.1016/j.cities.2026.106817')],
  ['architecture of the bight', doi('10.1080/17449855.2026.2722811')],
  ['aesthetics of belonging', doi('10.1017/asr.2026.10267')],
  ['egypt in historical', rg('340465025_Egypt_in_Historical_Perspective_Some_Thoughts')],
  ['back to land', rg('340464905_Back_to_Land_Interrogating_the_Israeli_Moshav_-Igbariam_Farm_Settlement_Model_in_Eastern_Nigeria_1961-1970')],
  ['amalgamation', rg('336901133_AMALGAMATION_OF_NORTHERN_AND_SOUTHERN_PROTECTORATES_OF_NIGERIA_BLESSING_OR_CURSE')],
  ['mistake of 1914', rg('290566908_1_The_Mistake_of_1914_100_Years_After')],
  ['xenophobia', rg('342348253_Xenophobia_South_Africa_as_a_Mirror_on_Insecurity_in_Nigeria')],
  ['redemption song', rg('398319491_Religion_and_Mental_Slavery_in_Nigeria_An_Analysis_of_Bob_Marley\'s_Redemption_Song')],
  ['iwuewu', rg('395468825_Iwuewu_Unmasking_Simon_Odo_the_Enigmatic_Monarch_of_Satan_Enugu-Ezike_Southeast_Nigeria')],
  ['green alternative', rg('343290052_THE_GREEN_ALTERNATIVE_HERDSMEN_AND_FOOD_SCARCITY_IN_UZO-UWANI_NSUKKA_DIVISON_NIGERIA_2016-2018')],
];

export const catalogue = publications.map((p, i) => ({
  ...p,
  id: `MCI-${String(i + 1).padStart(4, '0')}`,
  url: LINKS.find(([key]) => p.title.toLowerCase().includes(key))?.[1],
}));

// Home-page selection: the most cited paper first, then his own selection from the UC Berkeley profile.
const SELECTED_KEYS = [
  'social media and the covid',
  'children of the soil',
  'infrastructural south',
  'everyday state',
  'dark humour',
  'city of boys',
  'urbanization in nigeria',
  'creativity, spirituality',
  'socio-economic transformations',
  'war and gender',
];

// Most cited first; uncited items follow in the order of his own list (sort is stable).
export const selected = SELECTED_KEYS.flatMap((key) => {
  const entry = catalogue.find((p) => p.title.toLowerCase().includes(key));
  return entry ? [entry] : [];
}).sort((a, b) => (b.citations ?? 0) - (a.citations ?? 0));

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
