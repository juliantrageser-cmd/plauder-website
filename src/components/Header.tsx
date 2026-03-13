import { Link } from "react-router-dom";
import logoTransp from "@/assets/logo_transp.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoTransp} alt="Plauder Logo" className="h-10 w-10" />
          <span className="font-heading text-2xl font-bold text-foreground">Plauder</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/datenschutz"
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
