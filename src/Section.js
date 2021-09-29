import penaltyGuidelines from "./data/penaltyGuidelines";
export default function Section() {
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
                    <div key={subsectionIndex} className="subsectionName">
                      {subsection.number && <span>{subsection.number} - </span>}
                      {subsection.name}
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
