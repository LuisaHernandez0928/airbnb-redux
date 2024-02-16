import StarIcon from "@mui/icons-material/Star";
function Score({ value }) {
  return (
    <div style={{ fontSize: "14px", color: "#222222" }}>
      <StarIcon style={{ paddingRight: "5px" }} sx={{ fontSize: 13 }} />
      {value}
    </div>
  );
}
export { Score };
