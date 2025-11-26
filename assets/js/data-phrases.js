/**
 * Phrase data model for Obersaxer Titsch (Redewendiga)
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
    germanWord: "", // TODO: Add German translation
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung2",
    folder: "redewendungen/redewendung2",
    frontImage: "redewendung2.jpg",
    backImage: "redewendung22.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung3",
    folder: "redewendungen/redewendung3",
    frontImage: "redewendung3.jpg",
    backImage: "redewendung32.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung4",
    folder: "redewendungen/redewendung4",
    frontImage: "redewendung4.jpg",
    backImage: "redewendung42.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung5",
    folder: "redewendungen/redewendung5",
    frontImage: "redewendung5.jpg",
    backImage: "redewendung52.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung6",
    folder: "redewendungen/redewendung6",
    frontImage: "redewendung6.jpg",
    backImage: "redewendung62.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung7",
    folder: "redewendungen/redewendung7",
    frontImage: "redewendung7.jpg",
    backImage: "redewendung72.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung8",
    folder: "redewendungen/redewendung8",
    frontImage: "redewendung8.jpg",
    backImage: "redewendung82.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung9",
    folder: "redewendungen/redewendung9",
    frontImage: "redewendung9.jpg",
    backImage: "redewendung92.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung10",
    folder: "redewendungen/redewendung10",
    frontImage: "redewendung10.jpg",
    backImage: "redewendung102.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung11",
    folder: "redewendungen/redewendung11",
    frontImage: "redewendung11.jpg",
    backImage: "redewendung112.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung12",
    folder: "redewendungen/redewendung12",
    frontImage: "redewendung12.jpg",
    backImage: "redewendung122.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung13",
    folder: "redewendungen/redewendung13",
    frontImage: "redewendung13.jpg",
    backImage: "redewendung132.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung14",
    folder: "redewendungen/redewendung14",
    frontImage: "redewendung14.jpg",
    backImage: "redewendung142.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  },
  {
    id: "redewendung15",
    folder: "redewendungen/redewendung15",
    frontImage: "redewendung15.jpg",
    backImage: "redewendung152.jpg",
    category: "expression",
    tags: ["phrase"],
    addedAt: "2024-01-01"
  }
];
