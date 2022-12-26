import { useNavigate } from "react-router-dom";
import { StyledPreviousPage } from "./Styles/PreviousPage.styled";

const PreviousPage = () => {
  const navigate = useNavigate();

  return (
    <StyledPreviousPage>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </StyledPreviousPage>
  );
};

export default PreviousPage;
