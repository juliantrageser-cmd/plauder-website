import { MapPin, Trophy, Users, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logoTransp from "@/assets/logo_transp.png";

const features = [
  {
    icon: Smartphone,
    title: "Handy weg, Plauderei an",
    description:
      "Starte eine Plauderei in deiner Lieblingskneipe. Je länger du dein Handy weglegst, desto mehr Punkte sammelst du.",
  },
  {
    icon: MapPin,
    title: "Kneipen in deiner Nähe",
    description:
      "Entdecke Bars und Kneipen in Frankfurt auf der interaktiven Karte – mit Öffnungszeiten und Live-Infos.",
  },
  {
    icon: Trophy,
    title: "Challenges & Level",
    description:
      'Meistere Herausforderungen wie die "Tour de Äppler" und steige im Level auf. Wer ist der beste Plauderer?',
  },
  {
    icon: Users,
    title: "Mit Freunden messen",
    description:
      "Vernetze dich mit Freunden, sieh wo sie plaudern und klettere gemeinsam in der Rangliste nach oben.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 text-center">
          <img
            src={logoTransp}
            alt="Plauder Logo"
            className="mx-auto h-28 w-28 mb-8 animate-fade-in drop-shadow-lg"
          />
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Weg vom Handy.
            <br />
            <span className="text-primary">Rein ins Gespräch.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Plauder belohnt dich fürs echte Quatschen in Frankfurts Kneipen.
            Handy weglegen, Punkte sammeln, Level aufsteigen.
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-5 py-3 gold-glow animate-fade-in-up font-body text-sm text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            Aktuell in der Testphase via Apple TestFlight
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            So funktioniert <span className="text-primary">Plauder</span>
          </h2>
          <p className="text-center text-muted-foreground font-body mb-14 max-w-xl mx-auto">
            Vier einfache Gründe, warum du Plauder ausprobieren solltest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="feature-card rounded-lg bg-card p-8 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent mb-5">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit zum <span className="text-secondary">Plaudern</span>?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Plauder befindet sich aktuell in der Testphase. Schreib uns eine E-Mail, um Zugang über Apple TestFlight zu erhalten.
          </p>
          <a
            href="mailto:juliantrageser@gmail.com?subject=Plauder%20TestFlight%20Zugang"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 font-body text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            TestFlight Zugang anfragen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
