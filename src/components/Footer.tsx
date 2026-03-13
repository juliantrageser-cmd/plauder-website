import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-lg font-semibold text-foreground mb-2">Plauder</p>
        <p className="text-sm text-muted-foreground mb-4">
          Echte Gespräche. Echte Punkte. Frankfurt.
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">
            Datenschutzerklärung
          </Link>
          <a href="mailto:juliantrageser@gmail.com" className="hover:text-foreground transition-colors">
            Kontakt
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Julian Trageser. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
