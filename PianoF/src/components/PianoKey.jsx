// components/PianoKey.jsx

import * as Tone from "tone";
import "../styles/Piano.css";

const PianoKey = ({ note, type, left }) => {
  const handleClick = async () => {
    const synth = new Tone.Synth().toDestination();
    await Tone.start(); // 유저 인터랙션 이후 시작 필수
    synth.triggerAttackRelease(note, "8n"); // 예: "C4", "G#5" 등
    console.log(`Played: ${note}`);
  };

  const keyStyle = type === "black" ? { left: `${left}px` } : {};

  return (
    <div
      className={`piano-key ${type}`}
      onClick={handleClick}
      style={keyStyle}
      title={note}
    >
      {type === "white" && <span className="note-label">{note}</span>}
    </div>
  );
};

export default PianoKey;
