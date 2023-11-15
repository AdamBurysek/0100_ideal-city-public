import "./knowMorePage.css";
import MasdarCity from "../images/Masdar City, Spojené arabské emiráty.jpeg";
import Oulu from "../images/Oulu, Finsko.jpeg";
import Sondgo from "../images/Songdo International City, Jižní Korea.jpeg";
import Stockholm from "../images/Stockholm, Švédsko.jpeg";
import TheLine from "../images/The Line, Spojené arabské emiráty.webp";
import Vilatopia from "../images/Vilatopia, Nizozemsko.jpeg";
import { useEffect, useRef } from "react";

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
          <h1>Masdar City</h1>
          <img
            className="city_img"
            src={MasdarCity}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            Město bylo založeno v roce 2006 vládou Spojených arabských emirátů s
            cílem vytvořit udržitelné město, které by bylo vzorem pro ostatní
            města na světě. Město je postaveno na ploše 6 kilometrů čtverečních
            a má kapacitu až 50 000 obyvatel.
          </p>
          <p>
            Město bylo pojmenováno po Masdaru, starověkém městě, které se
            nacházelo v oblasti. Masdar City byl původně plánován jako vědecké a
            technologické centrum, ale postupem času se jeho zaměření rozšířilo
            na udržitelnost.
          </p>
          <p>
            V roce 2008 se Masdar City stal domovem Masdar Institute of Science
            and Technology, mezinárodní univerzity zaměřené na udržitelné
            technologie. V roce 2010 se město stalo domovem Khalifa University
            of Science and Technology, státní univerzity, která nabízí širokou
            škálu programů v oblasti vědy, techniky a inženýrství.
          </p>
          <p>
            Město je také domovem mnoha technologických společností, včetně
            Siemensu, Mitsubishi a Honeywellu. Tyto společnosti využívají město
            jako testovací místo pro své nové udržitelné technologie.
          </p>
          <h4>Kultura</h4>
          <p>
            Masdar City má bohatou kulturní scénu. Město je domovem muzea,
            divadla a galerie. Masdar City také hostí řadu kulturních akcí,
            včetně festivalů, koncertů a divadelních představení.
          </p>
          <h4>Doprava</h4>
          <p>
            Masdar City je plně propojeno s veřejnou dopravou. Město má vlastní
            systém autobusů a vlaků. Město má také vynikající infrastrukturu pro
            cyklisty a pěší.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            Masdar City je postaven na principech udržitelnosti. Město je
            postaveno z udržitelných materiálů a využívá obnovitelné zdroje
            energie. Město má také vynikající systém nakládání s odpadem a
            recyklací.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Energetické zdroje:</b> Masdar City využívá obnovitelné zdroje
              energie, jako je sluneční a větrná energie. Město má také systém
              na výrobu energie z odpadu.
            </li>
            <li>
              <b>Vodní zdroje:</b> Masdar City využívá recyklovanou vodu. Město
              také má systém na zadržování dešťové vody.
            </li>
            <li>
              <b>Doprava:</b> Masdar City má systém veřejné dopravy, který je
              založen na elektromobilech. Město také má vynikající
              infrastrukturu pro cyklisty a pěší.
            </li>
            <li>
              <b>Budovy:</b> Budovy v Masdar City jsou postaveny z udržitelných
              materiálů, jako je dřevo a kámen. Budovy jsou také navrženy tak,
              aby byly energeticky úsporné.
            </li>
            <li>
              <b>Odpad:</b> Masdar City má systém nakládání s odpadem a
              recyklací. Město má také systém na výrobu energie z odpadu.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            Masdar City je ambiciózní projekt, který má potenciál ukázat světu,
            jak lze postavit udržitelné město. Město je stále ve výstavbě, ale
            již nyní je vidět, že má potenciál stát se příkladem pro ostatní
            města na světě.
          </p>
          <h1>Oulu</h1>
          <img
            className="city_img"
            src={Oulu}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            Oulu bylo založeno ve 12. století a je jedním z nejstarších měst ve
            Finsku. Město se nachází na severu Finska a je důležitým centrem pro
            obchod a průmysl.
          </p>
          <p>
            Oulu je domovem mnoha technologických společností, včetně Nokia,
            Fujitsu a Microsoft. Město je také domovem několika univerzit,
            včetně University of Oulu a Oulu University of Applied Sciences.
          </p>
          <h4>Kultura</h4>
          <p>
            Oulu má bohatou kulturní scénu. Město je domovem muzeí, divadel a
            galerií. Oulu také hostí řadu kulturních akcí, včetně festivalů,
            koncertů a divadelních představení.
          </p>
          <h4>Doprava</h4>
          <p>
            Oulu je dobře propojeno s veřejnou dopravou. Město má vlastní systém
            autobusů a vlaků. Město má také vynikající infrastrukturu pro
            cyklisty a pěší.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            Oulu je zavázáno k udržitelnosti. Město má ambiciózní cíle snížit
            své emise uhlíku a zvýšit využívání obnovitelných zdrojů energie.
            Oulu také pracuje na zlepšení svého systému nakládání s odpadem a
            recyklací.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Energetické zdroje:</b> Oulu využívá obnovitelné zdroje
              energie, jako je sluneční a větrná energie. Město také má systém
              na výrobu energie z odpadu.
            </li>
            <li>
              <b>Vodní zdroje:</b> Oulu využívá recyklovanou vodu. Město také má
              systém na zadržování dešťové vody.
            </li>
            <li>
              <b>Doprava:</b> Oulu má systém veřejné dopravy, který je založen
              na elektromobilech. Město také má vynikající infrastrukturu pro
              cyklisty a pěší.
            </li>
            <li>
              <b>Budovy:</b> Budovy v Oulu jsou postaveny z udržitelných
              materiálů, jako je dřevo a kámen. Budovy jsou také navrženy tak,
              aby byly energeticky úsporné.
            </li>
            <li>
              <b>Odpad:</b> Oulu má systém nakládání s odpadem a recyklací.
              Město také má systém na výrobu energie z odpadu.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            Oulu je moderní město s bohatou historií a kulturou. Město je také
            zavázáno k udržitelnosti a má potenciál stát se příkladem pro
            ostatní města na světě.
          </p>
          <h1>Songdo</h1>
          <img
            className="city_img"
            src={Sondgo}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            Songdo bylo založeno v roce 2003 a je jedním z nejnovějších měst v
            Jižní Koreji. Město se nachází na západním pobřeží Jižní Koreje a je
            důležitým centrem pro obchod, finance a technologie.
          </p>
          <p>
            Songdo je domovem mnoha technologických společností, včetně
            Samsungu, LG a Hyundai. Město je také domovem několika univerzit,
            včetně Sungkyunkwan University a Korea University.
          </p>
          <h4>Kultura</h4>
          <p>
            Songdo má bohatou kulturní scénu. Město je domovem muzeí, divadel a
            galerií. Songdo také hostí řadu kulturních akcí, včetně festivalů,
            koncertů a divadelních představení.
          </p>
          <h4>Doprava</h4>
          <p>
            Songdo je dobře propojeno s veřejnou dopravou. Město má vlastní
            systém metra, autobusů a vlaků. Město má také vynikající
            infrastrukturu pro cyklisty a pěší.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            Songdo je zaměřeno na udržitelnost. Město má ambiciózní cíle snížit
            své emise uhlíku a zvýšit využívání obnovitelných zdrojů energie.
            Songdo také pracuje na zlepšení svého systému nakládání s odpadem a
            recyklací.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Moderní architektura:</b> Songdo je známé svou moderní
              architekturou. Město je domovem mnoha výškových budov a
              futuristických budov.
            </li>
            <li>
              <b>Turistika:</b> Songdo je oblíbeným cílem turistů. Město nabízí
              řadu atrakcí, včetně muzeí, divadel, galerií a přírodních parků.
            </li>
            <li>
              <b>Výzkum:</b> Songdo je domovem několika výzkumných institucí,
              včetně Korea Institute of Science and Technology.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            Songdo je moderní město s ambiciózními cíli v oblasti udržitelnosti.
            Město má potenciál stát se příkladem pro ostatní města na světě.
          </p>
          <h1>Stockholm</h1>
          <img
            className="city_img"
            src={Stockholm}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            Stockholm je hlavní město Švédska a je jedním z nejstarších měst v
            zemi. Město bylo založeno v 13. století a je důležitým centrem pro
            obchod, finance a kulturu.
          </p>
          <h4>Kultura</h4>
          <p>
            Stockholm má bohatou kulturní scénu. Město je domovem mnoha muzeí,
            divadel, galerií a dalších kulturních institucí. Stockholm je také
            známý svými živými festivaly a událostmi.
          </p>
          <h4>Doprava</h4>
          <p>
            Stockholm je dobře propojeno s veřejnou dopravou. Město má vlastní
            systém metra, autobusů a vlaků. Město má také vynikající
            infrastrukturu pro cyklisty a pěší.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            Stockholm je zaměřeno na udržitelnost. Město má ambiciózní cíle
            snížit své emise uhlíku a zvýšit využívání obnovitelných zdrojů
            energie. Stockholm také pracuje na zlepšení svého systému nakládání
            s odpadem a recyklací.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Architektura:</b> Stockholm je známé svou krásnou
              architekturou. Město je domovem mnoha historických budov, stejně
              jako moderních architektonických skvostů.
            </li>
            <li>
              <b>Příroda:</b> Stockholm je obklopen přírodou. Město je domovem
              mnoha parků, lesů a jezer.
            </li>
            <li>
              <b>Turistika:</b> Stockholm je oblíbeným cílem turistů. Město
              nabízí řadu atrakcí, včetně muzeí, divadel, galerií, přírodních
              parků a dalších.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            Stockholm je krásné a živé město s bohatou historií a kulturou.
            Město je také zaměřeno na udržitelnost a je dobrým příkladem toho,
            jak lze budovat udržitelné město.
          </p>
          <h1>The Line</h1>
          <img
            className="city_img"
            src={TheLine}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            The Line je plánované město, které se má nacházet v Saudské Arábii.
            Město bylo oznámeno v roce 2021 a má být postaveno na 170
            kilometrech dlouhém umělém ostrově.
          </p>
          <p>
            The Line je navrženo tak, aby bylo co nejvíce udržitelné. Město bude
            mít nulovou uhlíkovou stopu a bude využívat obnovitelné zdroje
            energie.
          </p>
          <h4>Kultura</h4>
          <p>
            The Line bude mít bohatou kulturní scénu. Město bude domovem muzeí,
            divadel, galerií a dalších kulturních institucí.
          </p>
          <h4>Doprava</h4>
          <p>
            The Line bude mít systém veřejné dopravy, který bude založen na
            bezemisních vozidlech.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            The Line je navrženo tak, aby bylo co nejvíce udržitelné. Město bude
            mít nulovou uhlíkovou stopu a bude využívat obnovitelné zdroje
            energie.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Umělý ostrov:</b> The Line se bude nacházet na 170 kilometrech
              dlouhém umělém ostrově.
            </li>
            <li>
              <b>Nula uhlíkové stopy:</b> The Line bude mít nulovou uhlíkovou
              stopu a bude využívat obnovitelné zdroje energie.
            </li>
            <li>
              <b>Bezemisní doprava:</b> The Line bude mít systém veřejné
              dopravy, který bude založen na bezemisních vozidlech.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            The Line je ambiciózní projekt, který má potenciál stát se příkladem
            pro ostatní města na světě. Město je navrženo tak, aby bylo
            udržitelné, moderní a pohodlné.
          </p>
          <h1>Vilatopia</h1>
          <img
            className="city_img"
            src={Vilatopia}
          ></img>
          <h4>Historie a ekonomika</h4>
          <p>
            Vilatopia je plánované město, které se má nacházet v České
            republice. Město bylo oznámeno v roce 2023 a má být postaveno v
            oblasti mezi Prahou a Plzní.
          </p>
          <p>
            Vilatopia je navržena tak, aby byla co nejvíce udržitelná. Město
            bude mít nulovou uhlíkovou stopu a bude využívat obnovitelné zdroje
            energie.
          </p>
          <h4>Kultura</h4>
          <p>
            Vilatopia bude mít bohatou kulturní scénu. Město bude domovem muzeí,
            divadel, galerií a dalších kulturních institucí.
          </p>
          <h4>Doprava</h4>
          <p>
            Vilatopia bude mít systém veřejné dopravy, který bude založen na
            bezemisních vozidlech.
          </p>
          <h4>Udržitelnost</h4>
          <p>
            Vilatopia je navržena tak, aby byla co nejvíce udržitelná. Město
            bude mít nulovou uhlíkovou stopu a bude využívat obnovitelné zdroje
            energie.
          </p>
          <h4>Další informace</h4>
          <ul>
            <li>
              <b>Umístění:</b> Vilatopia se bude nacházet v oblasti mezi Prahou
              a Plzní.
            </li>
            <li>
              <b>Nula uhlíkové stopy:</b> Vilatopia bude mít nulovou uhlíkovou
              stopu a bude využívat obnovitelné zdroje energie.
            </li>
            <li>
              <b>Bezemisní doprava:</b> Vilatopia bude mít systém veřejné
              dopravy, který bude založen na bezemisních vozidlech.
            </li>
            <li>
              <b>Investor:</b> Vilatopia je financována společností XYZ.
            </li>
            <li>
              <b>Termín dokončení:</b> Vilatopia má být dokončena do roku 2030.
            </li>
          </ul>
          <h4>Závěr</h4>
          <p>
            Vilatopia je ambiciózní projekt, který má potenciál stát se
            příkladem pro ostatní města na světě. Město je navrženo tak, aby
            bylo udržitelné, moderní a pohodlné.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMorePage;
