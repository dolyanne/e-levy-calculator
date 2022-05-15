import { h } from "preact";

const ToPicker = ({ id, handleChange, title, theme }) => {
  return (
    <div className="toGrid">
      <div
        className={`selectedVisual ${theme} pointer`}
        role="button"
        onClick={(event) => handleChange(event, id)}
      />
      <div className="selectedText">
        <span className="selectedPlatform">{title}</span>
        <span
          role="button"
          className="togglePicker pointer"
          onClick={(event) => handleChange(event, id)}
        >
          Tap to change
        </span>
      </div>
    </div>
  );
};

ToPicker.defaultProps = {
  theme: "",
};

export default ToPicker;
