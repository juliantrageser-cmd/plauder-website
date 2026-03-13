import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Datenschutzerklärung für <span className="text-primary">"Plauder"</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-10">Stand: März 2026</p>

          <div className="prose-plauder font-body text-foreground space-y-8 leading-relaxed">
            <p>
              Wir freuen uns, dass du die "Plauder"-App (im Folgenden "App") testest. Der Schutz
              deiner persönlichen Daten ist uns sehr wichtig. In dieser Datenschutzerklärung
              erklären wir dir, welche Daten wir sammeln, warum wir das tun und welche Rechte du
              hast.
            </p>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                1. Wer ist verantwortlich?
              </h2>
              <p>Verantwortlich für die Datenverarbeitung in dieser App ist:</p>
              <p className="mt-2">
                <strong>Julian Trageser</strong>
                <br />
                <strong>Frankfurt am Main</strong>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:juliantrageser@gmail.com"
                  className="text-primary hover:underline"
                >
                  juliantrageser@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                2. Welche Daten wir erfassen und warum
              </h2>
              <ul className="list-disc list-outside pl-5 space-y-3">
                <li>
                  <strong>Account-Daten (Supabase):</strong> Um deinen Fortschritt (z.B.
                  Plauder-Punkte und Level) zu speichern, musst du einen Account anlegen. Wir
                  speichern deine E-Mail-Adresse und ein verschlüsseltes Passwort. Diese Daten
                  werden sicher über unseren Backend-Anbieter <em>Supabase</em> verarbeitet und
                  gespeichert.
                </li>
                <li>
                  <strong>Standortdaten (Mapbox &amp; Google):</strong> Um dir Kneipen und Bars in
                  deiner Nähe (z.B. in Frankfurt) auf der Karte anzuzeigen, greift die App auf
                  deinen Standort zu. Dein genauer Live-Standort wird lokal genutzt, um die Karte
                  über den Anbieter <em>Mapbox</em> zu laden und relevante Ortsdaten (wie
                  Öffnungszeiten) über die <em>Google Places API</em> abzurufen. Dein Standort wird
                  nicht dauerhaft in unserer Datenbank gespeichert.
                </li>
                <li>
                  <strong>App-Aktivitäten &amp; Gamification:</strong> Wir speichern deine
                  gesammelten Plauder-Punkte, abgeschlossenen Aufgaben (z.B. "Tour de Äppler") und
                  dein aktuelles Level, um dir die App-Funktionen bereitzustellen.
                </li>
                <li>
                  <strong>Fehlerberichte (Apple TestFlight):</strong> Da sich die App in der
                  Testphase befindet, erhalten wir bei App-Abstürzen anonymisierte Fehlerberichte
                  über <em>Apple TestFlight</em>, um die App zu verbessern.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                3. Eingesetzte Drittanbieter
              </h2>
              <p>
                Damit die App funktioniert, nutzen wir folgende Dienstleister, die Daten in unserem
                Auftrag verarbeiten:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2 mt-3">
                <li>
                  <strong>Supabase:</strong> Für Datenbank, Hosting und sicheren Login
                  (Authentication).
                </li>
                <li>
                  <strong>Mapbox:</strong> Für die visuelle Darstellung der Karte.
                </li>
                <li>
                  <strong>Google Places API (Google Ireland Limited / Google LLC):</strong> Um
                  aktuelle Informationen zu Kneipen, Bars und deren Öffnungszeiten abzurufen und in
                  der App darzustellen.
                </li>
                <li>
                  <strong>Apple (TestFlight):</strong> Für die Bereitstellung der Test-Version auf
                  deinem iPhone.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                4. Deine Rechte
              </h2>
              <p>
                Du hast jederzeit das Recht auf Auskunft über deine gespeicherten Daten. Außerdem
                kannst du die Berichtigung, Sperrung oder Löschung deiner Daten verlangen. Wenn du
                deinen Account und alle damit verbundenen Plauder-Punkte dauerhaft löschen möchtest,
                schreibe einfach eine kurze E-Mail an{" "}
                <a
                  href="mailto:juliantrageser@gmail.com"
                  className="text-primary hover:underline"
                >
                  juliantrageser@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                5. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Da sich die App in der Entwicklung befindet, kann sich diese Datenschutzerklärung
                ändern. Wir werden dich über wesentliche Änderungen informieren.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
