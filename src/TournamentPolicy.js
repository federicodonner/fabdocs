import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loaderImg from "./images/loader.svg";
import tournamentRules from "./data/tournamentRules";

export default function Infraction(props) {
  const [loader, setLoader] = useState(true);
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  useEffect(() => {
    var tournamentParams = props.match.params.policy;
    tournamentRules.forEach((section) => {
      section.subsections.forEach((policy) => {
        if (
          policy.name === tournamentParams ||
          policy.number === tournamentParams
        ) {
          setSelectedPolicy(policy);
        }
      });
    });
  }, [props.match.params.policy]);

  useEffect(() => {
    if (selectedPolicy) {
      setLoader(false);
    }
  }, [selectedPolicy]);

  return (
    <div className="mainRoute infraction">
      {loader && (
        <div className="loaderContainer">
          <img className="loader" src={loaderImg} alt="loader" />
        </div>
      )}
      {!loader && (
        <div className="infractionContainer">
          <Link to="/tournament">
            <div className="backArrowContainer">
              <i className="fas fa-long-arrow-alt-left backArrow"></i>
            </div>
          </Link>
          <div className="title">
            {selectedPolicy.number} - {selectedPolicy.name}
          </div>
          <div className="infractionContentContainer">
            {selectedPolicy.content.map((content, index) => {
              return (
                <p
                  className={content.modifiers ? content.modifiers : ""}
                  key={index}
                >
                  {content.text}
                  {content.href && (
                    <span>
                      {" "}
                      <a
                        className="highlightedLink"
                        href={content.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Link
                      </a>
                    </span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
