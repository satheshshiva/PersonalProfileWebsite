import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 sm:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
        <div className="font-mono text-xs">
          Built with Next.js · Framer Motion · Tailwind
        </div>
      </div>
    </footer>
  );
}
