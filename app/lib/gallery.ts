import fs from "node:fs";
import path from "node:path";

export type GalleryEntry = {
  title: string;
  category: string;
  note: string;
  image: string;
  order: number;
  featured?: boolean;
};

export function getGalleryEntries(): GalleryEntry[] {
  const directory = path.join(process.cwd(), "content", "gallery");
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(fs.readFileSync(path.join(directory, file), "utf8")) as GalleryEntry)
    .sort((a, b) => a.order - b.order);
}
