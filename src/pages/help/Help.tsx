import { useState } from "react";
import "./help.scss";
import StorageCapacity from "../../components/storageCapacity/StorageCapacity";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Was kann diese WebApp?",
    answer:
      "Mit der UserApplication kannst du Benutzerprofile anlegen, bearbeiten und in einer Übersicht ansehen. Jedes Profil enthält Angaben wie Name, Geburtsdatum, Geschlecht, E-Mail, Telefonnummer, Adresse, Webseite und optional ein Profilbild.",
  },
  {
    question: "Wo werden meine Daten gespeichert?",
    answer:
      "Alle Daten werden lokal in deinem Browser im sogenannten localStorage gespeichert. Es gibt keine Verbindung zu einem Server oder einer Datenbank – deine Daten verlassen deinen Browser nicht.",
  },
  {
    question: "Was passiert, wenn ich den Browser-Cache lösche?",
    answer:
      "Da alle Daten im localStorage deines Browsers liegen, gehen sie beim Löschen des Browser-Caches oder der Browserdaten unwiderruflich verloren. Es gibt aktuell keine Möglichkeit, sie wiederherzustellen.",
  },
  {
    question:
      "Kann ich die App auf mehreren Geräten nutzen und sehe ich überall die gleichen Daten?",
    answer:
      "Nein. Der localStorage ist an den jeweiligen Browser auf einem bestimmten Gerät gebunden. Wenn du die App auf einem anderen Gerät oder in einem anderen Browser öffnest, siehst du eine leere Übersicht – die Daten werden nicht automatisch synchronisiert.",
  },
  {
    question: "Welche Bildformate kann ich für das Profilbild hochladen?",
    answer:
      "Du kannst gängige Bildformate wie JPG und PNG hochladen. Das Bild wird beim Hochladen automatisch verkleinert und komprimiert, damit es weniger Speicherplatz im localStorage belegt.",
  },
  {
    question: "Wie bearbeite ich einen bestehenden Benutzer?",
    answer:
      "Klicke in der Übersicht einfach auf die Profilkarte des gewünschten Benutzers. Du wirst dann zu einem Formular weitergeleitet, in dem die bestehenden Daten bereits vorausgefüllt sind und angepasst werden können.",
  },
  {
    question: "Gibt es ein Limit, wie viele Benutzer ich anlegen kann?",
    answer:
      "Technisch begrenzt der localStorage deines Browsers die Gesamtmenge an speicherbaren Daten auf etwa 5–10 MB. Da jedes Profil (insbesondere mit Bild) etwas Speicherplatz benötigt, kannst du je nach Bildgröße einige hundert bis wenige tausend Benutzer anlegen, bevor das Limit erreicht wird.",
  },
  {
    question: "Kann ich einen Benutzer wieder löschen?",
    answer:
      "Ja, du kannst angelegte Benutzer jederzeit wieder löschen. Die Daten werden dabei dauerhaft aus dem localStorage entfernt und können nicht wiederhergestellt werden.",
  },
  {
    question: "Sind alle Felder beim Anlegen eines Benutzers Pflichtfelder?",
    answer:
      "Aktuell sind alle Felder optional – du kannst ein Profil auch mit unvollständigen Angaben speichern. Du kannst die Daten jederzeit später über die Bearbeiten-Funktion ergänzen.",
  },
  {
    question: "Sind meine Daten sicher bzw. wer hat Zugriff darauf?",
    answer:
      "Da alle Daten ausschließlich lokal in deinem Browser gespeichert werden, hat niemand außer dir selbst (bzw. jeder, der physischen Zugriff auf deinen Browser hat) Zugriff darauf. Es findet keine Übertragung an einen Server statt.",
  },
  {
    question: "Was passiert, wenn der Speicherplatz (localStorage) voll ist?",
    answer:
      "Der localStorage deines Browsers ist auf etwa 5–10 MB begrenzt. Wird dieses Limit erreicht, schlägt das Speichern eines neuen oder bearbeiteten Benutzers fehl. In diesem Fall solltest du nicht mehr benötigte Profile löschen, um Platz zu schaffen.",
  },
];

function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="page">
      <div className="header-container">
        <div className="storageCapacity-container">
          <StorageCapacity />
        </div>
        <div className="formpage__search">
          <input
            className="formpage__input"
            type="search"
            placeholder="Suche nach Fragen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="help-formPage">
        {filteredFaq.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {item.question}
              <span
                className={`faq-item__chevron ${openIndex === index ? "faq-item__chevron--open" : ""}`}>
                ▾
              </span>
            </button>
            {openIndex === index && <p className="faq-item__answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Help;
