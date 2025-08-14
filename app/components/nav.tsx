import Link from "next/link";
import { metaData } from "../config";

const navItems = {
  "/edu": { name: "Education" },
  "/work-ex": { name: "Work" },
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-3 items-center justify-end flex-wrap">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="nav-link text-sm"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
