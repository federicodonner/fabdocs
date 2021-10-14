import quickReferenceTable from "./data/quickReferenceTable";

export default function Reference() {
  return (
    <div className="mainRoute reference">
      <div className="title">Quick Reference Table</div>
      <div className="quickReferenceContainer">
        <div className="penaltyCodeReference">CP = Casual Penalty</div>
        <div className="penaltyCodeReference">PP = Professional Penalty</div>
        {quickReferenceTable.map((section, index) => {
          return (
            <div key={index} className="quickReferenceSection">
              <div className="quickReferenceTitle">{section.category}</div>
              {section.content.map((infraction, infractionIndex) => {
                return (
                  <div
                    className="quickReferenceInfraction"
                    key={infractionIndex}
                  >
                    <div className="quickReferenceInfractionName">
                      {infraction.infraction}
                    </div>
                    <div>CP: {infraction.casual}</div>
                    <div>PP: {infraction.professional}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
