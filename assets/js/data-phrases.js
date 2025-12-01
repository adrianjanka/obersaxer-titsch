/**
 * Phrase data model for Obersaxer Titsch (Redewendiga)
 * 
 * TODO: Check alle germanWords in data-phrases
 * 
 * To add a new phrase:
 * 1. Create folder: redewendungen/[phrase-name]/
 * 2. Add images: [phrase-name].jpg (front) and [phrase-name]2.jpg (back)
 * 3. Add object below with folder name and metadata
 * 4. Card will automatically appear on the website
 * 
 * Properties:
 * - id: Unique identifier (folder name, also used for sorting)
 * - folder: Path to image folder
 * - frontImage: Front card filename
 * - backImage: Back card filename
 * - germanWord: German translation (used for sorting by German)
 * - category: Usually "expression" for phrases
 * - tags: Array of topic tags for filtering (always includes "phrase")
 * - addedAt: Date added (YYYY-MM-DD format)
 */

export const phrases = [
  {
    id: "redewendung1",
    folder: "redewendungen/redewendung1",
    frontImage: "redewendung1.jpg",
    backImage: "redewendung12.jpg",
    germanWord: "alles unordentlich herumliegen lassen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung2",
    folder: "redewendungen/redewendung2",
    frontImage: "redewendung2.jpg",
    backImage: "redewendung22.jpg",
    germanWord: "es geht reibungslos",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung3",
    folder: "redewendungen/redewendung3",
    frontImage: "redewendung3.jpg",
    backImage: "redewendung32.jpg",
    germanWord: "sehr startke heftige niederschläge",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung4",
    folder: "redewendungen/redewendung4",
    frontImage: "redewendung4.jpg",
    backImage: "redewendung42.jpg",
    germanWord: "hier stimmt etwas nicht mehr",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung5",
    folder: "redewendungen/redewendung5",
    frontImage: "redewendung5.jpg",
    backImage: "redewendung52.jpg",
    germanWord: "das benötigt keinen unterhalt",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung6",
    folder: "redewendungen/redewendung6",
    frontImage: "redewendung6.jpg",
    backImage: "redewendung62.jpg",
    germanWord: "die meinung sagen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung7",
    folder: "redewendungen/redewendung7",
    frontImage: "redewendung7.jpg",
    backImage: "redewendung72.jpg",
    germanWord: "der mag übermässig viel essen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung8",
    folder: "redewendungen/redewendung8",
    frontImage: "redewendung8.jpg",
    backImage: "redewendung82.jpg",
    germanWord: "er hat immer glück",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung9",
    folder: "redewendungen/redewendung9",
    frontImage: "redewendung9.jpg",
    backImage: "redewendung92.jpg",
    germanWord: "dich sollte man ordentlich bestrafen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung10",
    folder: "redewendungen/redewendung10",
    frontImage: "redewendung10.jpg",
    backImage: "redewendung102.jpg",
    germanWord: "die frau hat geboren",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung11",
    folder: "redewendungen/redewendung11",
    frontImage: "redewendung11.jpg",
    backImage: "redewendung112.jpg",
    germanWord: "ich gehe schlafen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung12",
    folder: "redewendungen/redewendung12",
    frontImage: "redewendung12.jpg",
    backImage: "redewendung122.jpg",
    germanWord: "mir wurde die milch sauer (beim käsen)",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung13",
    folder: "redewendungen/redewendung13",
    frontImage: "redewendung13.jpg",
    backImage: "redewendung132.jpg",
    germanWord: "friedlich schlafen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung14",
    folder: "redewendungen/redewendung14",
    frontImage: "redewendung14.jpg",
    backImage: "redewendung142.jpg",
    germanWord: "rassig und fehlerlos tanzen",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung15",
    folder: "redewendungen/redewendung15",
    frontImage: "redewendung15.jpg",
    backImage: "redewendung152.jpg",
    germanWord: "schlagfertig sein",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  }
];
