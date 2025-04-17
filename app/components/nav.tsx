import Link from "next/link";
import { metaData } from "../config";
import "app/styles/theme.css";

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
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="nav-link text-sm font-medium"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
