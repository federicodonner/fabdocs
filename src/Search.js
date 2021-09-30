import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import loaderImg from "./images/loader.svg";
import penaltyGuidelines from "./data/penaltyGuidelines";

export default function Search() {
  const [processedPenaltyGuidelines, setProcessedPenaltyGuidelines] = useState(
    null
  );
  const [searchResults, setSearchResults] = useState([]);
  const [loader, setLoader] = useState(true);
  const [searchLoader, setSearchLoader] = useState(false);

  const searchTerm = useRef(null);

  useEffect(() => {
    var processedPenaltyGuidelines = [];
    penaltyGuidelines.forEach((section) => {
      section.subsections.forEach((infraction) => {
        var contentToPush = "";
        infraction.content.forEach((content) => {
          contentToPush = contentToPush + " " + content.content.toLowerCase();
        });
        processedPenaltyGuidelines.push({
          number: infraction.number,
          name: infraction.name,
          content: contentToPush,
        });
      });
    });
    setProcessedPenaltyGuidelines(processedPenaltyGuidelines);
  }, []);

  useEffect(() => {
    setLoader(false);
  }, [processedPenaltyGuidelines]);

  useEffect(() => {
    if (searchResults.length >= 0) {
      setSearchLoader(false);
    }
  }, [searchResults]);

  function searchUpdate() {
    setSearchLoader(true);
    if (searchTerm.current.value === "") {
      setSearchResults([]);
      return;
    }
    var auxSearchResults = [];
    processedPenaltyGuidelines.forEach((penalty) => {
      if (
        penalty.content.indexOf(searchTerm.current.value.toLowerCase()) !== -1
      ) {
        auxSearchResults.push(penalty);
      }
    });
    setSearchResults(auxSearchResults);
  }

  return (
    <div className="mainRoute search">
      <div className="title">SEARCH</div>
      {loader && (
        <div className="loaderContainer">
          <img className="loader" src={loaderImg} alt="loader" />
        </div>
      )}
      {!loader && (
        <div>
          <div className="searchBarContainer">
            <input
              type="text"
              className="searchBar"
              onChange={searchUpdate}
              ref={searchTerm}
            />
          </div>
          {searchLoader && <div>SearchLoaderPrendido</div>}
          {searchResults.length > 0 && (
            <div className="subsectionsContainer">
              {searchResults.map((infraction, index) => {
                return (
                  <Link to={"/infraction/" + infraction.number} key={index}>
                    <div className="subsectionName">
                      <span className="actualsubSectionName">
                        {infraction.number} -{infraction.name}
                      </span>
                      <i className="far fa-arrow-alt-circle-right navigateArrow"></i>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
