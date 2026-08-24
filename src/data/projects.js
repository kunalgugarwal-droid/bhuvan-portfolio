// src/data/projects.js
// ---------------------------------------------------------------------------
// Dynamic project data sourced from the /images folder via Vite's
// import.meta.glob. Sub-folders determine the project status:
//   images/completed/        → status: "completed"
//   images/under-construction/ → status: "under-construction"
//
// Filenames are transformed into human-readable titles by stripping the
// extension and capitalising each word (hyphens / underscores become spaces).
// ---------------------------------------------------------------------------

/**
 * Takes a raw filename and returns a formatted project title.
 * e.g.  "modern-glass_villa.jpg"  →  "Modern Glass Villa"
 */
export function formatTitle(filename) {
  return filename
    .replace(/\.[^.]+$/, "")          // strip file extension
    .replace(/[-_]+/g, " ")           // hyphens / underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalise first letter of each word
}

/**
 * Derive the project status from its folder path.
 */
function deriveStatus(path) {
  if (path.includes("/under-construction/")) return "under-construction";
  return "completed";
}

// ---- Eager glob import of every image inside /images/**/* ------------------
// Because images live in the *public* `/images` folder Vite serves them
// as static assets. We use `import.meta.glob` with `{ eager: true, query: '?url' }`
// on the public path equivalent exposed through an alias (see below).
//
// However, since the images folder sits at the project root (next to `src/`),
// and Vite's `import.meta.glob` works with the file-system (not the public
// server path), we glob from the root-relative path `/images/**/*`.
// ---------------------------------------------------------------------------

const imageModules = import.meta.glob("/images/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

// Build the projects array automatically
let _id = 0;

export const projects = Object.entries(imageModules).map(([path, url]) => {
  _id += 1;

  // `path` looks like "/images/completed/modern-glass-villa.jpg"
  const filename = path.split("/").pop();

  return {
    id: _id,
    title: formatTitle(filename),
    image: url,
    status: deriveStatus(path),
  };
});

// Pre-filtered convenience exports
export const completedProjects = projects.filter(
  (p) => p.status === "completed"
);
export const underConstructionProjects = projects.filter(
  (p) => p.status === "under-construction"
);
