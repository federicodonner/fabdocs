import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import loaderImg from "./images/loader.svg";
import penaltyGuidelines from "./data/penaltyGuidelines";

export default function Infraction(props) {
  const [loader, setLoader] = useState(true);
  const [selectedInfraction, setSelectedInfraction] = useState(null);

  const history = useHistory();
  function navigateBack() {
    history.push("/section");
  }
  useEffect(() => {
    var infractionParams = props.match.params.infraction;
    penaltyGuidelines.forEach((section) => {
      section.subsections.forEach((infraction) => {
        if (
          infraction.name === infractionParams ||
          infraction.number === infractionParams
        ) {
          setSelectedInfraction(infraction);
        }
      });
    });
  }, [props.match.params.infraction]);

  useEffect(() => {
    if (selectedInfraction) {
      setLoader(false);
    }
  }, [selectedInfraction]);

  return (
    <div className="mainRoute infraction">
      {loader && (
        <div className="loaderContainer">
          <img className="loader" src={loaderImg} alt="loader" />
        </div>
      )}
      {!loader && (
        <div className="infractionContainer">
          <div className="backArrowContainer" onClick={navigateBack}>
            <i className="fas fa-long-arrow-alt-left backArrow"></i>
          </div>
          <div className="title">
            {selectedInfraction.number} - {selectedInfraction.name}
          </div>
          <div className="infractionContentContainer">
            {selectedInfraction.content.map((content, index) => {
              return (
                <p
                  className={content.modifiers ? content.modifiers : ""}
                  key={index}
                >
                  {content.content}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
