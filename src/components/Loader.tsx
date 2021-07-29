import styled from "styled-components";
import PropagateLoader from "react-spinners/PropagateLoader";

export const LoaderBox = styled.div`
  height: 2rem;
`;

const LoaderWrapper = styled.div`
  margin-top: -2rem;
`;

export function Loader() {
  return (
    <LoaderWrapper style={{ alignSelf: "center", justifySelf: "center" }}>
      <PropagateLoader color="#555" />
    </LoaderWrapper>
  );
}
