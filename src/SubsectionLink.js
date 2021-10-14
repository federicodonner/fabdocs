import { Link } from "react-router-dom";

// This component shows a link to a document subsection
// Receives the information from the Document or Search components
// Always links to the subsection route
export default function SubsectionLink(props) {
  return (
    <Link to={"/s/" + props.document + "/" + props.number}>
      <div className="subsectionName">
        <span className="actualSubsectionName">
          {props.number} - {props.name}
        </span>
        <i className="far fa-arrow-alt-circle-right navigateArrow"></i>
      </div>
    </Link>
  );
}
