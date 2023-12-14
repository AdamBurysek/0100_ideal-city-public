import { useEffect, useRef } from "react";
import "./infoPages.css";

const KnowMorePage = (props: any) => {
  const knowMoreElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (knowMoreElement.current) {
      knowMoreElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "know-more"]);
  return (
    <div
      className={
        props.activePage === "know-more"
          ? "know-more_window"
          : "know-more_window know-more_hide"
      }
    >
      <div
        ref={knowMoreElement}
        className="know-more_content"
      >
        <div>
          {props.language === "cz" && (
            <>
              <p>
                Názory na ideální podobu měst se v průběhu doby měnily podle
                toho, k jakému účelu měla sídla sloužit. U římských táborů byl
                podstatný zejména jejich vojenský účel, z hlediska logistiky
                bylo důležité pravidelné rozdělení ulic s výrazným křížením dvou
                hlavních cest. Hradby, které byly typické pro starověká i
                středověká města, často vydržely až do 19. století, kdy byly
                hromadně bourány, což umožňovalo nový rozvoj a růst měst.
                Záměrem bylo skloubení vztahů mezi bydlením (nejčastěji v
                činžovních domech), prací (v továrnách) a přírodou. Ve dvacátém
                století na dlouhou dobu převládl názor, že klasické formy ulice
                nebo náměstí by měly být pro potřeby moderního člověka nahrazeny
                novými formami, které dokáží bydlení, práci a rekreaci oddělit.
                Mnohé tehdejší ideální návrhy proto v důsledku vypadaly spíše
                jako krajina s dálnicemi než jako obydlené město. V současné
                době jsou ulice a náměstí opět oceňovány pro svou schopnost
                propojit více funkcí: blízkost oblíbené hospody nebo večerky,
                přirozený pocit bezpečí, možnost snadné přepravy na jiné místo a
                v neposlední řadě mezilidskou komunikaci, která se odehrává ve
                sdíleném veřejném prostoru.
              </p>
              <p>
                Každý z nás bydlí v nějaké obci. Znáte územní plán vaší obce?
                Víte, kde se zamýšlí postavit nové obchodní centrum či kde se
                plánuje výsadba parkové zeleně? Budete to mít k obchodům blíž? A
                budou to mít blíž i vaši sousedé? Bude vaše obec časem ještě
                krásnější, než je? A bude se vám v takovém prostředí lépe žít?
                Nejen pro tyto otázky se vyplatí zamyslet, jak by asi ideální
                město naší doby mohlo vypadat.
              </p>
            </>
          )}
          {props.language === "en" && (
            <>
              <p>
                Ideas about what an ideal city should look like have changed
                over time, depending on the purpose the respective settlements
                were supposed to serve. For Roman camps, their military purpose
                was of primary significance – in terms of logistics, it was
                important for streets to be laid out regularly, with a prominent
                cross-composed of two main roads. The walls, a typical feature
                of ancient and medieval towns, often survived until the 19th
                century, when they were removed on a large scale to allow new
                urban development and growth. The intention was to reconcile the
                relationship between housing (usually in blocks of flats), work
                (in factories) and nature. In the twentieth century, for a
                relatively long time there was a prevailing opinion that the
                classical forms of streets or squares should be replaced with
                new forms that separated housing, work and recreation to suit
                the needs of modern people. Therefore, many ideal designs looked
                like a landscape with highways rather than an inhabited city.
                Currently, streets and squares are appreciated again for their
                ability to bring together multiple functions: proximity to a
                popular pub or convenience store, natural sense of security,
                easy transport to another location and, last but not least,
                interpersonal communication that takes place in shared public
                spaces.
              </p>
              <p>
                Each of us lives in a municipality. Do you know the spatial plan
                of your municipality? Will the shops be closer to your home? And
                will they be closer to your neighbours’ homes too? Over time,
                will your municipality become even more beautiful than it is
                now? Will such an environment be better to live in, or is that
                someone is just trying to fool you? These are only some of the
                questions to consider when you are trying to figure out what the
                ideal city of our time should look like.
              </p>
            </>
          )}
          {props.language === "de" && (
            <>
              <p>
                Die Meinungen zur idealen Gestalt von Städten haben sich mit der
                Zeit in Abhängigkeit davon geändert, welchem Zweck eine Siedlung
                dienen sollte. Bei den Lagern der Römer war insbesondere ihr
                militärischer Zweck wesentlich, aus Sicht der Logistik war eine
                regelmäßige Verteilung der Straßen mit einer markanter Kreuzung
                zweier Hauptwege wichtig. Stadtmauern, die für antike und
                mittelalterliche Städte typisch waren, hielten oft bis ins 19.
                Jahrhundert stand, wo sie massenweise abgerissen wurde, was eine
                neue Entwicklung und ein Wachstum der Städte ermöglichte. Die
                Absicht war eine Verbindung der Beziehungen zwischen dem Wohnen
                (meist in Mietshäusern), der Arbeit (in Fabriken) und der Natur.
                Im zwanzigsten Jahrhundert herrschte für lange Zeit die
                Auffassung vor, dass die klassischen Formen einer Straße oder
                eines Platzes für die Bedürfnisse des modernen Menschen durch
                neue Formen ersetzt werden sollten, die in der Lage sind,
                Wohnen, Arbeit und Erholung zu trennen. Viele ideale Entwürfe
                sahen deshalb in der Konsequenz eher wie eine Landschaft mit
                Autobahnen, den als bewohnte Städte aus. Derzeit werden Straßen
                und Plätze wieder wegen ihrer Fähigkeit geschätzt, mehrere
                Funktionen zu verbinden: die Nähe der Lieblingskneipe oder einer
                Spätverkaufsstelle, das natürliche Sicherheitsgefühl, die
                Möglichkeit, an einen anderen Ort zu gelangen, und nicht zuletzt
                die zwischenmenschliche Kommunikation, die sich im geteilten
                öffentlichen Raum abspielt.
              </p>
              <p>
                Jeder von uns wohnt in einer Gemeinde. Kennt ihr den
                Raumordnungsplan in eurer Gemeinde? Werdet ihr es näher zu
                Geschäften haben? Und werden es auch eure Nachbarn näher haben?
                Wird eure Gemeinde mit der Zeit noch schöner als jetzt? Werdet
                ihr in einem solchen Umfeld besser leben oder will euch nur
                jemand hinters Licht führen? Nicht nur wegen dieser Fragen zahlt
                es sich aus nachzudenken, wie wohl die ideale Stadt unserer Zeit
                aussehen könnte.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowMorePage;
