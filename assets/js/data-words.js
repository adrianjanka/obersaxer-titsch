/**
 * Word data model for Obersaxer Titsch
 * 
 * TODO: Go through all entries and add germanWord translations for empty "" values
 *       Search for: germanWord: ""
 * 
 * To add a new word:
 * 1. Create folder: cards/[word-name]/
 * 2. Add images: [word-name].jpg (front) and [word-name]2.jpg (back)
 * 3. Add object below with folder name and metadata
 * 4. Card will automatically appear on the website
 * 
 * Properties:
 * - id: Unique identifier (folder name, also used for dialect A-Z sorting)
 * - folder: Path to image folder
 * - frontImage: Front card filename
 * - backImage: Back card filename  
 * - germanWord: German translation (used for sorting by German)
 * - category: "noun", "verb", "adjective", or "expression"
 * - tags: Array of topic tags for filtering
 * - addedAt: Date added (YYYY-MM-DD format) for "newest first" sorting
 */

export const words = [
  {
    id: "aani",
    folder: "cards/aani",
    frontImage: "aani.jpg",
    backImage: "aani2.jpg",
    germanWord: "Grossmutter",
    category: "noun",
    tags: ["family"],
    addedAt: "2024-01-01"
  },
  {
    id: "albig",
    folder: "cards/albig",
    frontImage: "albig.jpg",
    backImage: "albig2.jpg",
    germanWord: "Immer",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "antwarrischt",
    folder: "cards/antwarrischt",
    frontImage: "antwarrischt.jpg",
    backImage: "antwarrischt2.jpg",
    germanWord: "quer",
    category: "adjective",
    tags: ["emotions"],
    addedAt: "2024-01-01"
  },
  {
    id: "azinnta",
    folder: "cards/azinnta",
    frontImage: "azinnta.jpg",
    backImage: "azinnta2.jpg",
    germanWord: "Feuer anzünden",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "baaba",
    folder: "cards/baaba",
    frontImage: "baaba.jpg",
    backImage: "baaba2.jpg",
    germanWord: "einfältige Frau",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "baarg-giir",
    folder: "cards/baarg-giir",
    frontImage: "baarg-giir.jpg",
    backImage: "baarg-giir2.jpg",
    germanWord: "Steinadler",
    category: "noun",
    tags: ["animals", "nature"],
    addedAt: "2024-01-01"
  },
  {
    id: "bara_lugi",
    folder: "cards/bara_lugi",
    frontImage: "bara_lugi.jpg",
    backImage: "bara_lugi2.jpg",
    germanWord: "voll Lüge",
    category: "expression",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "bassma",
    folder: "cards/bassma",
    frontImage: "bassma.jpg",
    backImage: "bassma2.jpg",
    germanWord: "der Besen",
    category: "noun",
    tags: ["traditions"],
    addedAt: "2024-01-01"
  },
  {
    id: "blaaw",
    folder: "cards/blaaw",
    frontImage: "blaaw.jpg",
    backImage: "blaaw2.jpg",
    germanWord: "blau",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "britschi",
    folder: "cards/britschi",
    frontImage: "britschi.jpg",
    backImage: "britschi2.jpg",
    germanWord: "Butter",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "busara",
    folder: "cards/busara",
    frontImage: "busara.jpg",
    backImage: "busara2.jpg",
    germanWord: "schlecht arbeiten",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "chara",
    folder: "cards/chara",
    frontImage: "chara.jpg",
    backImage: "chara2.jpg",
    germanWord: "Schubkarre",
    category: "noun",
    tags: ["work"],
    addedAt: "2024-01-01"
  },
  {
    id: "chiffla",
    folder: "cards/chiffla",
    frontImage: "chiffla.jpg",
    backImage: "chiffla2.jpg",
    germanWord: "streiten",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "chilcha",
    folder: "cards/chilcha",
    frontImage: "chilcha.jpg",
    backImage: "chilcha2.jpg",
    germanWord: "Kirche",
    category: "noun",
    tags: ["places"],
    addedAt: "2024-01-01"
  },
  {
    id: "chnaba",
    folder: "cards/chnaba",
    frontImage: "chnaba.jpg",
    backImage: "chnaba2.jpg",
    germanWord: "Jungmänner",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "chnauw",
    folder: "cards/chnauw",
    frontImage: "chnauw.jpg",
    backImage: "chnauw2.jpg",
    germanWord: "knie",
    category: "noun",
    tags: ["people"],
    addedAt: "2024-01-01"
  },
  {
    id: "chriz",
    folder: "cards/chriz",
    frontImage: "chriz.jpg",
    backImage: "chriz2.jpg",
    germanWord: "Kreuz",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "chüuwa",
    folder: "cards/chüuwa",
    frontImage: "chüuwa.jpg",
    backImage: "chüuwa2.jpg",
    germanWord: "Kuh",
    category: "noun",
    tags: ["animals"],
    addedAt: "2024-01-01"
  },
  {
    id: "diraab",
    folder: "cards/diraab",
    frontImage: "diraab.jpg",
    backImage: "diraab2.jpg",
    germanWord: "hinunter",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "dirii",
    folder: "cards/dirii",
    frontImage: "dirii.jpg",
    backImage: "dirii2.jpg",
    germanWord: "einwärts",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "dirüss",
    folder: "cards/dirüss",
    frontImage: "dirüss.jpg",
    backImage: "dirüss2.jpg",
    germanWord: "auswärts",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "eeni",
    folder: "cards/eeni",
    frontImage: "eeni.jpg",
    backImage: "eeni2.jpg",
    germanWord: "Grossvater",
    category: "noun",
    tags: ["family"],
    addedAt: "2024-01-01"
  },
  {
    id: "faara",
    folder: "cards/faara",
    frontImage: "faara.jpg",
    backImage: "faara2.jpg",
    germanWord: "fahren",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "feppla",
    folder: "cards/feppla",
    frontImage: "feppla.jpg",
    backImage: "feppla2.jpg",
    germanWord: "foppen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "figglar",
    folder: "cards/figglar",
    frontImage: "figglar.jpg",
    backImage: "figglar2.jpg",
    germanWord: "leicht gebaute hütte",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "füül",
    folder: "cards/füül",
    frontImage: "füül.jpg",
    backImage: "füül2.jpg",
    germanWord: "faul",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "gaaltseggal",
    folder: "cards/gaaltseggal",
    frontImage: "gaaltseggal.jpg",
    backImage: "gaaltseggal2.jpg",
    germanWord: "Geldbeutel",
    category: "noun",
    tags: ["daily life"],
    addedAt: "2024-01-01"
  },
  {
    id: "gauma",
    folder: "cards/gauma",
    frontImage: "gauma.jpg",
    backImage: "gauma2.jpg",
    germanWord: "kinder hüten",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "geefarli",
    folder: "cards/geefarli",
    frontImage: "geefarli.jpg",
    backImage: "geefarli2.jpg",
    germanWord: "dünne schicht schnee",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "ggana",
    folder: "cards/ggana",
    frontImage: "ggana.jpg",
    backImage: "ggana2.jpg",
    germanWord: "spazierstock",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "gginggal",
    folder: "cards/gginggal",
    frontImage: "gginggal.jpg",
    backImage: "gginggal2.jpg",
    germanWord: "kaninchen",
    category: "noun",
    tags: ["people"],
    addedAt: "2024-01-01"
  },
  {
    id: "ggragga",
    folder: "cards/ggragga",
    frontImage: "ggragga.jpg",
    backImage: "ggragga2.jpg",
    germanWord: "krähe",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "gguttar",
    folder: "cards/gguttar",
    frontImage: "gguttar.jpg",
    backImage: "gguttar2.jpg",
    germanWord: "flasche",
    category: "noun",
    tags: ["family"],
    addedAt: "2024-01-01"
  },
  {
    id: "griina",
    folder: "cards/griina",
    frontImage: "griina.jpg",
    backImage: "griina2.jpg",
    germanWord: "weinen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "gschwenta",
    folder: "cards/gschwenta",
    frontImage: "gschwenta.jpg",
    backImage: "gschwenta2.jpg",
    germanWord: "roden",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "haardepfal",
    folder: "cards/haardepfal",
    frontImage: "haardepfal.jpg",
    backImage: "haardepfal2.jpg",
    germanWord: "Kartoffel",
    category: "noun",
    tags: ["food"],
    addedAt: "2024-01-01"
  },
  {
    id: "heitamaija",
    folder: "cards/heitamaija",
    frontImage: "heitamaija.jpg",
    backImage: "heitamaija2.jpg",
    germanWord: "alpenrosen",
    category: "noun",
    tags: ["animals", "nature"],
    addedAt: "2024-01-01"
  },
  {
    id: "hiissli",
    folder: "cards/hiissli",
    frontImage: "hiissli.jpg",
    backImage: "hiissli2.jpg",
    germanWord: "toilette",
    category: "noun",
    tags: ["places"],
    addedAt: "2024-01-01"
  },
  {
    id: "hinat",
    folder: "cards/hinat",
    frontImage: "hinat.jpg",
    backImage: "hinat2.jpg",
    germanWord: "heute abend",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "hipschli",
    folder: "cards/hipschli",
    frontImage: "hipschli.jpg",
    backImage: "hipschli2.jpg",
    germanWord: "leise",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "hooraschlita",
    folder: "cards/hooraschlita",
    frontImage: "hooraschlita.jpg",
    backImage: "hooraschlita2.jpg",
    germanWord: "hornschlitten",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "hung",
    folder: "cards/hung",
    frontImage: "hung.jpg",
    backImage: "hung2.jpg",
    germanWord: "konfitüre",
    category: "noun",
    tags: ["animals"],
    addedAt: "2024-01-01"
  },
  {
    id: "hüs",
    folder: "cards/hüs",
    frontImage: "hüs.jpg",
    backImage: "hüs2.jpg",
    germanWord: "Haus",
    category: "noun",
    tags: ["places"],
    addedAt: "2024-01-01"
  },
  {
    id: "iinapsa",
    folder: "cards/iinapsa",
    frontImage: "iinapsa.jpg",
    backImage: "iinapsa2.jpg",
    germanWord: "eindösen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "jumpfara",
    folder: "cards/jumpfara",
    frontImage: "jumpfara.jpg",
    backImage: "jumpfara2.jpg",
    germanWord: "Jungfrau",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "kalfaktar",
    folder: "cards/kalfaktar",
    frontImage: "kalfaktar.jpg",
    backImage: "kalfaktar2.jpg",
    germanWord: "frecher Mensch",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "leew",
    folder: "cards/leew",
    frontImage: "leew.jpg",
    backImage: "leew2.jpg",
    germanWord: "lauwarm",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "leiga",
    folder: "cards/leiga",
    frontImage: "leiga.jpg",
    backImage: "leiga2.jpg",
    germanWord: "lügen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "maalti",
    folder: "cards/maalti",
    frontImage: "maalti.jpg",
    backImage: "maalti2.jpg",
    germanWord: "mahlzeit",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "maija",
    folder: "cards/maija",
    frontImage: "maija.jpg",
    backImage: "maija2.jpg",
    germanWord: "blumen",
    category: "noun",
    tags: ["people"],
    addedAt: "2024-01-01"
  },
  {
    id: "malüüra",
    folder: "cards/malüüra",
    frontImage: "malüüra.jpg",
    backImage: "malüüra2.jpg",
    germanWord: "kaputt",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "marand",
    folder: "cards/marand",
    frontImage: "marand.jpg",
    backImage: "marand2.jpg",
    germanWord: "zwischenverpflegung",
    category: "noun",
    tags: ["time"],
    addedAt: "2024-01-01"
  },
  {
    id: "minni",
    folder: "cards/minni",
    frontImage: "minni.jpg",
    backImage: "minni2.jpg",
    germanWord: "katze",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "müül",
    folder: "cards/müül",
    frontImage: "müül.jpg",
    backImage: "müül2.jpg",
    germanWord: "Mund",
    category: "noun",
    tags: ["body"],
    addedAt: "2024-01-01"
  },
  {
    id: "narrabei",
    folder: "cards/narrabei",
    frontImage: "narrabei.jpg",
    backImage: "narrabei2.jpg",
    germanWord: "empfindlichste stelle an Ellbogen",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "niana",
    folder: "cards/niana",
    frontImage: "niana.jpg",
    backImage: "niana2.jpg",
    germanWord: "nirgends",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "niit",
    folder: "cards/niit",
    frontImage: "niit.jpg",
    backImage: "niit2.jpg",
    germanWord: "nichts",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "nitla",
    folder: "cards/nitla",
    frontImage: "nitla.jpg",
    backImage: "nitla2.jpg",
    germanWord: "rahm",
    category: "noun",
    tags: ["food"],
    addedAt: "2024-01-01"
  },
  {
    id: "nüuwjaar",
    folder: "cards/nüuwjaar",
    frontImage: "nüuwjaar.jpg",
    backImage: "nüuwjaar2.jpg",
    germanWord: "Neujahr",
    category: "noun",
    tags: ["traditions", "time"],
    addedAt: "2024-01-01"
  },
  {
    id: "oorna",
    folder: "cards/oorna",
    frontImage: "oorna.jpg",
    backImage: "oorna2.jpg",
    germanWord: "ordnung machen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "paader",
    folder: "cards/paader",
    frontImage: "paader.jpg",
    backImage: "paader2.jpg",
    germanWord: "pader",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "patschiffig",
    folder: "cards/patschiffig",
    frontImage: "patschiffig.jpg",
    backImage: "patschiffig2.jpg",
    germanWord: "gemütlich",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "pfulf",
    folder: "cards/pfulf",
    frontImage: "pfulf.jpg",
    backImage: "pfulf2.jpg",
    germanWord: "Kissen",
    category: "noun",
    tags: ["home"],
    addedAt: "2024-01-01"
  },
  {
    id: "pijihung",
    folder: "cards/pijihung",
    frontImage: "pijihung.jpg",
    backImage: "pijihung2.jpg",
    germanWord: "Bienenhonig",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "pilvara",
    folder: "cards/pilvara",
    frontImage: "pilvara.jpg",
    backImage: "pilvara2.jpg",
    germanWord: "schiessen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "pitschgi",
    folder: "cards/pitschgi",
    frontImage: "pitschgi.jpg",
    backImage: "pitschgi2.jpg",
    germanWord: "obst-kerngehäuse",
    category: "noun",
    tags: ["food"],
    addedAt: "2024-01-01"
  },
  {
    id: "pitta",
    folder: "cards/pitta",
    frontImage: "pitta.jpg",
    backImage: "pitta2.jpg",
    germanWord: "kuchen",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "plaubari",
    folder: "cards/plaubari",
    frontImage: "plaubari.jpg",
    backImage: "plaubari2.jpg",
    germanWord: "heidelbeeren",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "pop",
    folder: "cards/pop",
    frontImage: "pop.jpg",
    backImage: "pop2.jpg",
    germanWord: "säugling",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "propi",
    folder: "cards/propi",
    frontImage: "propi.jpg",
    backImage: "propi2.jpg",
    germanWord: "ziemlich",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "rangg",
    folder: "cards/rangg",
    frontImage: "rangg.jpg",
    backImage: "rangg2.jpg",
    germanWord: "strassenkehre",
    category: "noun",
    tags: ["body"],
    addedAt: "2024-01-01"
  },
  {
    id: "regenta",
    folder: "cards/regenta",
    frontImage: "regenta.jpg",
    backImage: "regenta2.jpg",
    germanWord: "befehlen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "repla",
    folder: "cards/repla",
    frontImage: "repla.jpg",
    backImage: "repla2.jpg",
    germanWord: "klettern",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "rigg",
    folder: "cards/rigg",
    frontImage: "rigg.jpg",
    backImage: "rigg2.jpg",
    germanWord: "Rücken",
    category: "noun",
    tags: ["body"],
    addedAt: "2024-01-01"
  },
  {
    id: "saaja",
    folder: "cards/saaja",
    frontImage: "saaja.jpg",
    backImage: "saaja2.jpg",
    germanWord: "säen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "sackrappa",
    folder: "cards/sackrappa",
    frontImage: "sackrappa.jpg",
    backImage: "sackrappa2.jpg",
    germanWord: "Sackgeld",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "sagarssa",
    folder: "cards/sagarssa",
    frontImage: "sagarssa.jpg",
    backImage: "sagarssa2.jpg",
    germanWord: "Sense",
    category: "noun",
    tags: ["work"],
    addedAt: "2024-01-01"
  },
  {
    id: "samachlaas",
    folder: "cards/samachlaas",
    frontImage: "samachlaas.jpg",
    backImage: "samachlaas2.jpg",
    germanWord: "St.Nikolaus",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schachla",
    folder: "cards/schachla",
    frontImage: "schachla.jpg",
    backImage: "schachla2.jpg",
    germanWord: "lachen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "scheita",
    folder: "cards/scheita",
    frontImage: "scheita.jpg",
    backImage: "scheita2.jpg",
    germanWord: "Holzspähe",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schetz",
    folder: "cards/schetz",
    frontImage: "schetz.jpg",
    backImage: "schetz2.jpg",
    germanWord: "schoss",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schgaffa",
    folder: "cards/schgaffa",
    frontImage: "schgaffa.jpg",
    backImage: "schgaffa2.jpg",
    germanWord: "Schrank",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schgarnutz",
    folder: "cards/schgarnutz",
    frontImage: "schgarnutz.jpg",
    backImage: "schgarnutz2.jpg",
    germanWord: "papiersack",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schigg",
    folder: "cards/schigg",
    frontImage: "schigg.jpg",
    backImage: "schigg2.jpg",
    germanWord: "Kautabak / Snus",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schissali",
    folder: "cards/schissali",
    frontImage: "schissali.jpg",
    backImage: "schissali2.jpg",
    germanWord: "Schüssel",
    category: "noun",
    tags: ["home"],
    addedAt: "2024-01-01"
  },
  {
    id: "schlonja",
    folder: "cards/schlonja",
    frontImage: "schlonja.jpg",
    backImage: "schlonja2.jpg",
    germanWord: "kauen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schnafali",
    folder: "cards/schnafali",
    frontImage: "schnafali.jpg",
    backImage: "schnafali2.jpg",
    germanWord: "kleiner dünngeschnittenes Stück",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schnija",
    folder: "cards/schnija",
    frontImage: "schnija.jpg",
    backImage: "schnija2.jpg",
    germanWord: "schneien",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schnützblatz",
    folder: "cards/schnützblatz",
    frontImage: "schnützblatz.jpg",
    backImage: "schnützblatz2.jpg",
    germanWord: "Taschentuch",
    category: "noun",
    tags: ["daily life"],
    addedAt: "2024-01-01"
  },
  {
    id: "schora",
    folder: "cards/schora",
    frontImage: "schora.jpg",
    backImage: "schora2.jpg",
    germanWord: "schnee schaufeln",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schüuwa",
    folder: "cards/schüuwa",
    frontImage: "schüuwa.jpg",
    backImage: "schüuwa2.jpg",
    germanWord: "Schuhe",
    category: "noun",
    tags: ["places", "work"],
    addedAt: "2024-01-01"
  },
  {
    id: "schwetti",
    folder: "cards/schwetti",
    frontImage: "schwetti.jpg",
    backImage: "schwetti2.jpg",
    germanWord: "eine menge",
    category: "expression",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schwiifigglar",
    folder: "cards/schwiifigglar",
    frontImage: "schwiifigglar.jpg",
    backImage: "schwiifigglar2.jpg",
    germanWord: "schweineunterstand",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "schwiimaija",
    folder: "cards/schwiimaija",
    frontImage: "schwiimaija.jpg",
    backImage: "schwiimaija2.jpg",
    germanWord: "Löwenzahn",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "spaat",
    folder: "cards/spaat",
    frontImage: "spaat.jpg",
    backImage: "spaat2.jpg",
    germanWord: "spät",
    category: "adjective",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "spargamenti",
    folder: "cards/spargamenti",
    frontImage: "spargamenti.jpg",
    backImage: "spargamenti2.jpg",
    germanWord: "faxen machen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "spinnawuppa",
    folder: "cards/spinnawuppa",
    frontImage: "spinnawuppa.jpg",
    backImage: "spinnawuppa2.jpg",
    germanWord: "Spinnennetz",
    category: "noun",
    tags: ["animals"],
    addedAt: "2024-01-01"
  },
  {
    id: "sturna",
    folder: "cards/sturna",
    frontImage: "sturna.jpg",
    backImage: "sturna2.jpg",
    germanWord: "zwängeln",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "süüfa",
    folder: "cards/süüfa",
    frontImage: "süüfa.jpg",
    backImage: "süüfa2.jpg",
    germanWord: "trinken",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "tabakseggal",
    folder: "cards/tabakseggal",
    frontImage: "tabakseggal.jpg",
    backImage: "tabakseggal2.jpg",
    germanWord: "Tabakbeutel",
    category: "noun",
    tags: ["daily life"],
    addedAt: "2024-01-01"
  },
  {
    id: "teisch",
    folder: "cards/teisch",
    frontImage: "teisch.jpg",
    backImage: "teisch2.jpg",
    germanWord: "kuhfladen",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "tiifal",
    folder: "cards/tiifal",
    frontImage: "tiifal.jpg",
    backImage: "tiifal2.jpg",
    germanWord: "Teufel",
    category: "noun",
    tags: ["traditions"],
    addedAt: "2024-01-01"
  },
  {
    id: "trinscha",
    folder: "cards/trinscha",
    frontImage: "trinscha.jpg",
    backImage: "trinscha2.jpg",
    germanWord: "stöhnen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "trogg",
    folder: "cards/trogg",
    frontImage: "trogg.jpg",
    backImage: "trogg2.jpg",
    germanWord: "Brunnen",
    category: "noun",
    tags: ["work"],
    addedAt: "2024-01-01"
  },
  {
    id: "tschiggi",
    folder: "cards/tschiggi",
    frontImage: "tschiggi.jpg",
    backImage: "tschiggi2.jpg",
    germanWord: "Ferkel",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "tschungga",
    folder: "cards/tschungga",
    frontImage: "tschungga.jpg",
    backImage: "tschungga2.jpg",
    germanWord: "Schinken",
    category: "noun",
    tags: ["body"],
    addedAt: "2024-01-01"
  },
  {
    id: "tüuwa",
    folder: "cards/tüuwa",
    frontImage: "tüuwa.jpg",
    backImage: "tüuwa2.jpg",
    germanWord: "tun",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "uacha",
    folder: "cards/uacha",
    frontImage: "uacha.jpg",
    backImage: "uacha2.jpg",
    germanWord: "herauf",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "ubaranni_si",
    folder: "cards/ubaranni_si",
    frontImage: "ubaranni_si.jpg",
    backImage: "ubaranni_si2.jpg",
    germanWord: "eingeschlafen sein",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "umma_si",
    folder: "cards/umma_si",
    frontImage: "umma_si.jpg",
    backImage: "umma_si2.jpg",
    germanWord: "da sein",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "undar_si",
    folder: "cards/undar_si",
    frontImage: "undar_si.jpg",
    backImage: "undar_si2.jpg",
    germanWord: "im bett sein",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "ütar",
    folder: "cards/ütar",
    frontImage: "ütar.jpg",
    backImage: "ütar2.jpg",
    germanWord: "euter",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "valoch",
    folder: "cards/valoch",
    frontImage: "valoch.jpg",
    backImage: "valoch2.jpg",
    germanWord: "auf und davon",
    category: "expression",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "varbreeschmala",
    folder: "cards/varbreeschmala",
    frontImage: "varbreeschmala.jpg",
    backImage: "varbreeschmala2.jpg",
    germanWord: "zerkrümeln",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "varhunza",
    folder: "cards/varhunza",
    frontImage: "varhunza.jpg",
    backImage: "varhunza2.jpg",
    germanWord: "verderben",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "varkumma_heissa",
    folder: "cards/varkumma_heissa",
    frontImage: "varkumma_heissa.jpg",
    backImage: "varkumma_heissa2.jpg",
    germanWord: "willkommen heissen",
    category: "expression",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "varlocha",
    folder: "cards/varlocha",
    frontImage: "varlocha.jpg",
    backImage: "varlocha2.jpg",
    germanWord: "vergraben",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "virschi",
    folder: "cards/virschi",
    frontImage: "virschi.jpg",
    backImage: "virschi2.jpg",
    germanWord: "vorwärts",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "voorna",
    folder: "cards/voorna",
    frontImage: "voorna.jpg",
    backImage: "voorna2.jpg",
    germanWord: "vorne",
    category: "adverb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "vori",
    folder: "cards/vori",
    frontImage: "vori.jpg",
    backImage: "vori2.jpg",
    germanWord: "vorhin",
    category: "adverb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "waschgi",
    folder: "cards/waschgi",
    frontImage: "waschgi.jpg",
    backImage: "waschgi2.jpg",
    germanWord: "Wespe",
    category: "noun",
    tags: ["clothing"],
    addedAt: "2024-01-01"
  },
  {
    id: "wiala",
    folder: "cards/wiala",
    frontImage: "wiala.jpg",
    backImage: "wiala2.jpg",
    germanWord: "graben",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "wiata",
    folder: "cards/wiata",
    frontImage: "wiata.jpg",
    backImage: "wiata2.jpg",
    germanWord: "wüten",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "wimbari",
    folder: "cards/wimbari",
    frontImage: "wimbari.jpg",
    backImage: "wimbari2.jpg",
    germanWord: "Weinbeere",
    category: "noun",
    tags: ["fruit"],
    addedAt: "2024-01-01"
  },
  {
    id: "wind_cho",
    folder: "cards/wind_cho",
    frontImage: "wind_cho.jpg",
    backImage: "wind_cho2.jpg",
    germanWord: "erkältet sein",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zadal",
    folder: "cards/zadal",
    frontImage: "zadal.jpg",
    backImage: "zadal2.jpg",
    germanWord: "Blatt Papier",
    category: "noun",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zamakija",
    folder: "cards/zamakija",
    frontImage: "zamakija.jpg",
    backImage: "zamakija2.jpg",
    germanWord: "zusammenfallen",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zangga",
    folder: "cards/zangga",
    frontImage: "zangga.jpg",
    backImage: "zangga2.jpg",
    germanWord: "streiten",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zeewa",
    folder: "cards/zeewa",
    frontImage: "zeewa.jpg",
    backImage: "zeewa2.jpg",
    germanWord: "Zehe",
    category: "noun",
    tags: ["food"],
    addedAt: "2024-01-01"
  },
  {
    id: "ziggla",
    folder: "cards/ziggla",
    frontImage: "ziggla.jpg",
    backImage: "ziggla2.jpg",
    germanWord: "necken",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zinnta",
    folder: "cards/zinnta",
    frontImage: "zinnta.jpg",
    backImage: "zinnta2.jpg",
    germanWord: "zünden",
    category: "verb",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zmaal",
    folder: "cards/zmaal",
    frontImage: "zmaal.jpg",
    backImage: "zmaal2.jpg",
    germanWord: "auf einmal",
    category: "other",
    tags: [],
    addedAt: "2024-01-01"
  },
  {
    id: "zuggarbooni",
    folder: "cards/zuggarbooni",
    frontImage: "zuggarbooni.jpg",
    backImage: "zuggarbooni2.jpg",
    germanWord: "Bonbon",
    category: "noun",
    tags: ["food"],
    addedAt: "2024-01-01"
  },
  {
    id: "zuu",
    folder: "cards/zuu",
    frontImage: "zuu.jpg",
    backImage: "zuu2.jpg",
    germanWord: "zaun",
    category: "noun",
    tags: ["body"],
    addedAt: "2024-01-01"
  }
];
