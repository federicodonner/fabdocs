import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loaderImg from "./images/loader.svg";
import penaltyGuidelines from "./data/penaltyGuidelines";
import tournamentRules from "./data/tournamentRules";

// This component shows the selected section
export default function Section(props) {
  const [loader, setLoader] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedSubsection, setSelectedSubsection] = useState(null);

  // It takes the document code and section number from the URL s/:document/:number
  // All available documents need to be improted at the top and added to this switch
  useEffect(() => {
    switch (props.match.params.document) {
      case "tr":
        setSelectedDocument(tournamentRules);
        break;
      case "pg":
        setSelectedDocument(penaltyGuidelines);
        break;
      default:
        console.log("document not found");
        break;
    }
  }, [props]);

  // Once the document is selected, it goes over the object to find the selected subsection
  useEffect(() => {
    if (selectedDocument) {
      selectedDocument.sections.forEach((section) => {
        section.subsections.forEach((subsection) => {
          if (subsection.number === props.match.params.section) {
            setSelectedSubsection(subsection);
          }
        });
      });
    }
  }, [selectedDocument, props.match.params.section]);

  // Once the subsection is found, the loader is turned off
  useEffect(() => {
    if (selectedSubsection) {
      setLoader(false);
    }
  }, [selectedSubsection]);

  // The back button is dynamic and goes back to the document component route
  // specifying which document it was showing the subsection of.
  return (
    <div className="mainRoute infraction">
      {loader && (
        <div className="loaderContainer">
          <img className="loader" src={loaderImg} alt="loader" />
        </div>
      )}
      {!loader && selectedDocument && (
        <div className="infractionContainer">
          <Link to={"/d/" + selectedDocument.code}>
            <div className="backArrowContainer">
              <i className="fas fa-long-arrow-alt-left backArrow"></i>
            </div>
          </Link>
          <div className="title">
            {selectedSubsection.number} - {selectedSubsection.name}
          </div>
          <div className="infractionContentContainer">
            {selectedSubsection.content.map((content, index) => {
              return (
                <p
                  className={content.modifiers ? content.modifiers : ""}
                  key={index}
                >
                  {content.text}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
