import penaltyGuidelines from "./data/penaltyGuidelines";
import { useHistory } from "react-router-dom";

export default function Section() {
  const history = useHistory();
  function navigateToInfraction(infraction) {
    history.push("/infraction/" + infraction);
  }

  return (
    <div className="mainRoute section">
      <div className="title">Sections</div>
      <div className="sectionsContainer">
        {penaltyGuidelines.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex}>
              <div className="sectionName">
                {section.number && <span>{section.number} - </span>}
                {section.name}
              </div>
              <div className="subsectionsContainer">
                {section.subsections.map((subsection, subsectionIndex) => {
                  return (
                    <div
                      className="subsectionName"
                      key={subsectionIndex}
                      onClick={() => {
                        navigateToInfraction(subsection.number);
                      }}
                    >
                      <span className="actualSubsectionName">
                        {subsection.number} -{subsection.name}
                      </span>
                      <i className="far fa-arrow-alt-circle-right navigateArrow"></i>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
