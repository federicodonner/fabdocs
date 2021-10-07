import tournamentRules from "./data/tournamentRules";
import { NavLink } from "react-router-dom";

export default function Section() {
  return (
    <div className="mainRoute section">
      <div className="title">Sections</div>
      <div className="sectionsContainer">
        {tournamentRules.map((section, sectionIndex) => {
          return (
            <div key={sectionIndex}>
              <div className="sectionName">
                {section.number && <span>{section.number} - </span>}
                {section.name}
              </div>
              <div className="subsectionsContainer">
                {section.subsections.map((subsection, subsectionIndex) => {
                  return (
                    <NavLink
                      to={"/tournamentpolicy/" + subsection.number}
                      key={subsectionIndex}
                    >
                      <div className="subsectionName">
                        <span className="actualSubsectionName">
                          {subsection.number} - {subsection.name}
                        </span>
                        <i className="far fa-arrow-alt-circle-right navigateArrow"></i>
                      </div>
                    </NavLink>
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
