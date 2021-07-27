import PropagateLoader from "react-spinners/PropagateLoader";

export function Loader() {
  return (
    <div style={{ alignSelf: "center", justifySelf: "center" }}>
      <PropagateLoader color="#555" />
    </div>
  );
}
