import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import loaderImg from "./images/loader.svg";
import penaltyGuidelines from "./data/penaltyGuidelines";
import tournamentRules from "./data/tournamentRules";

export default function Search() {
  const [processedPenaltyGuidelines, setProcessedPenaltyGuidelines] = useState(
    null
  );
  const [processedTournamentRules, setProcessedTournamentRules] = useState(
    null
  );
  const [policySearchResults, setPolicySearchResults] = useState([]);
  const [tournamentSearchResults, setTournamentSearchResults] = useState([]);
  const [loader, setLoader] = useState(true);

  const searchTerm = useRef(null);

  useEffect(() => {
    var processedPenaltyGuidelines = [];
    penaltyGuidelines.forEach((section) => {
      section.subsections.forEach((infraction) => {
        var contentToPush = "";
        infraction.content.forEach((content) => {
          contentToPush = contentToPush + " " + content.text.toLowerCase();
        });
        processedPenaltyGuidelines.push({
          number: infraction.number,
          name: infraction.name,
          content: contentToPush,
        });
      });
    });

    setProcessedPenaltyGuidelines(processedPenaltyGuidelines);
    var processedTournamentRules = [];
    tournamentRules.forEach((section) => {
      section.subsections.forEach((policy) => {
        var contentToPush = "";
        policy.content.forEach((content) => {
          contentToPush = contentToPush + " " + content.text.toLowerCase();
        });
        processedTournamentRules.push({
          number: policy.number,
          name: policy.name,
          content: contentToPush,
        });
      });
    });
    setProcessedTournamentRules(processedTournamentRules);
  }, []);

  useEffect(() => {
    if (processedPenaltyGuidelines && processedTournamentRules)
      setLoader(false);
  }, [processedPenaltyGuidelines, processedTournamentRules]);

  function searchUpdate() {
    if (searchTerm.current.value === "") {
      setPolicySearchResults([]);
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
    setPolicySearchResults(auxSearchResults);

    auxSearchResults = [];
    processedTournamentRules.forEach((policy) => {
      if (
        policy.content.indexOf(searchTerm.current.value.toLowerCase()) !== -1
      ) {
        auxSearchResults.push(policy);
      }
    });
    setTournamentSearchResults(auxSearchResults);
  }

  return (
    <div className="mainRoute search">
      <div className="title">Search</div>
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
          {policySearchResults.length > 0 && (
            <div className="subsectionsContainer">
              <div className="searchDocument">Penalty Guidelines</div>
              {policySearchResults.map((infraction, index) => {
                return (
                  <Link to={"/infraction/" + infraction.number} key={index}>
                    <div className="subsectionName">
                      <span className="actualSubsectionName">
                        {infraction.number} -{infraction.name}
                      </span>
                      <i className="far fa-arrow-alt-circle-right navigateArrow"></i>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {tournamentSearchResults.length > 0 && (
            <div className="subsectionsContainer">
              <div className="searchDocument">Tournament Rules</div>
              {tournamentSearchResults.map((policy, index) => {
                return (
                  <Link to={"/tournamentpolicy/" + policy.number} key={index}>
                    <div className="subsectionName">
                      <span className="actualSubsectionName">
                        {policy.number} -{policy.name}
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
