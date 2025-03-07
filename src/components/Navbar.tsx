
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border/50 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Remotion App
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/">Dashboard</Link>
          <Link to="/editor">Editor</Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
