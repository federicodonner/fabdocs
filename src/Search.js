import React, { useState, useEffect, useRef } from "react";
import SubsectionLink from "./SubsectionLink";

// This component provides search functionality to the Document component
export default function Search(props) {
  const [selectedDocument, setSelectedDocument] = useState(props.document);
  const [processedDocument, setProcessedDocument] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const searchTerm = useRef(null);

  // When the document is loaded, the search is cleared
  useEffect(() => {
    setSelectedDocument(props.document);
    searchTerm.current.value = "";
    setSearchResults([]);
  }, [props.document]);

  // When the document is loaded, it's processed to make search easier
  useEffect(() => {
    var processedDocument = [];
    selectedDocument.sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        var contentToPush = "";
        subsection.content.forEach((content) => {
          // For each subsection in the documents, it concatenates all the content
          // in lower case to be able to search
          contentToPush = contentToPush + " " + content.text.toLowerCase();
        });
        processedDocument.push({
          number: subsection.number,
          name: subsection.name,
          content: contentToPush,
        });
      });
    });
    // Processed document is the document but with subsection in plain lowercase text
    setProcessedDocument(processedDocument);
  }, [selectedDocument]);

  // Function triggered on each onChange of the search field
  function searchUpdate() {
    // If it's empty, it clears the search and tells the parent that it can show
    // the document
    if (searchTerm.current.value === "") {
      setSearchResults([]);
      props.setSearchActive(false);
      return;
    }
    // If there is a search term, it searches the processed document
    var auxSearchResults = [];
    processedDocument.forEach((subsection) => {
      if (
        subsection.content.indexOf(searchTerm.current.value.toLowerCase()) !==
        -1
      ) {
        auxSearchResults.push(subsection);
      }
    });
    // Search results are pushed to state and the parent is told to hide the
    // document and only show search results
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
