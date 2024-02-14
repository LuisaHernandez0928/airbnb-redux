function Subtitle({ text, typeColor }) {
  return (
    <div className={typeColor ? "blackSubtitle" : "subtitleFont"}>{text}</div>
  );
}

export { Subtitle };
