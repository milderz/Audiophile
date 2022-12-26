import { StyledPrimaryBtn } from "./Styles/PrimaryBtn.styled";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ text, version, path, category }) => {
  return (
    <StyledPrimaryBtn version={version}>
      <Link to={"/" + category + "/" + path}>{text}</Link>
    </StyledPrimaryBtn>
  );
};

export default PrimaryBtn;
