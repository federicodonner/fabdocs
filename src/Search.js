import React, { useState, useEffect, useRef } from "react";
import SubsectionLink from "./SubsectionLink";

export default function Search(props) {
  const [selectedDocument, setSelectedDocument] = useState(props.document);
  const [processedDocument, setProcessedDocument] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const searchTerm = useRef(null);

  useEffect(() => {
    setSelectedDocument(props.document);
    searchTerm.current.value = "";
    setSearchResults([]);
    props.setSearchActive(false);
  }, [props]);

  useEffect(() => {
    var processedDocument = [];
    selectedDocument.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        var contentToPush = "";
        subsection.content.forEach((content) => {
          contentToPush = contentToPush + " " + content.text.toLowerCase();
        });
        processedDocument.push({
          number: subsection.number,
          name: subsection.name,
          content: contentToPush,
        });
      });
    });
    setProcessedDocument(processedDocument);
  }, [selectedDocument]);

  function searchUpdate() {
    if (searchTerm.current.value === "") {
      setSearchResults([]);
      props.setSearchActive(false);
      return;
    }
    var auxSearchResults = [];
    processedDocument.forEach((subsection) => {
      if (
        subsection.content.indexOf(searchTerm.current.value.toLowerCase()) !==
        -1
      ) {
        auxSearchResults.push(subsection);
      }
    });
    setSearchResults(auxSearchResults);
    props.setSearchActive(true);
  }

  return (
    <div className="search">
      <div className="searchBarContainer">
        <span className="searchTag">Search</span>
        <input
          type="text"
          className="searchBar"
          onChange={searchUpdate}
          ref={searchTerm}
        />
      </div>
      {searchResults.length > 0 && (
        <div className="subsectionsContainer">
          {searchResults.map((subsection, subsectionIndex) => {
            return (
              <SubsectionLink
                key={subsectionIndex}
                index={subsectionIndex}
                document={props.document.code}
                number={subsection.number}
                name={subsection.name}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
