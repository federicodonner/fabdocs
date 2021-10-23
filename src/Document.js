import React, { useState, useEffect } from "react";
import tournamentRules from "./data/tournamentRules";
import penaltyGuidelines from "./data/penaltyGuidelines";
import Search from "./Search";
import SubsectionLink from "./SubsectionLink";
import loaderImg from "./images/loader.svg";

// This component loads all the sections and subsections of the selected document
export default function Document(props) {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [loader, setLoader] = useState(true);
  const [searchActive, setSearchActive] = useState(false);

  // It takes the document code from the URL d/:code
  // All available documents need to be improted at the top and added to this switch
  // Each document code is hardcoded in the footer component
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

  // Once the document is loaded, the loader is turned off
  useEffect(() => {
    if (selectedDocument) {
      setLoader(false);
    }
  }, [selectedDocument]);

  return (
    <div className="mainRoute section">
      {loader && (
        <div className="loaderContainer">
          <img className="loader" src={loaderImg} alt="loader" />
        </div>
      )}
      {!loader && selectedDocument && (
        <>
          <div className="title">{selectedDocument.name}</div>
          <Search
            document={selectedDocument}
            setSearchActive={setSearchActive}
          />
          {!searchActive && (
            <div className="sectionsContainer">
              {selectedDocument.sections.map((section, sectionIndex) => {
                return (
                  <div key={sectionIndex}>
                    <div className="sectionName">
                      {section.number && <span>{section.number} - </span>}
                      {section.name}
                    </div>
                    <div className="subsectionsContainer">
                      {section.subsections.map(
                        (subsection, subsectionIndex) => {
                          return (
                            <SubsectionLink
                              key={subsectionIndex}
                              index={subsectionIndex}
                              document={props.match.params.document}
                              number={subsection.number}
                              name={subsection.name}
                            />
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
