// components/Piano.jsx
import PianoKey from "./PianoKey";
import "../styles/piano.css";


const notes = [
  { note: "C4", type: "white", left: 0 },
  { note: "C#4", type: "black", left: 35 },
  { note: "D4", type: "white", left: 50 },
  { note: "D#4", type: "black", left: 85 },
  { note: "E4", type: "white", left: 100 },
  { note: "F4", type: "white", left: 150 },
  { note: "F#4", type: "black", left: 190 },
  { note: "G4", type: "white", left: 200 },
  { note: "G#4", type: "black", left: 245 },
  { note: "A4", type: "white", left: 250 },
  { note: "A#4", type: "black", left: 300 },
  { note: "B4", type: "white", left: 300 },

  { note: "C5", type: "white", left: 360 },
  { note: "C#5", type: "black", left: 395 },
  { note: "D5", type: "white", left: 400 },
  { note: "D#5", type: "black", left: 450 },
  { note: "E5", type: "white", left: 450 },
  { note: "F5", type: "white", left: 500 },
  { note: "F#5", type: "black", left: 550 },
  { note: "G5", type: "white", left: 550 },
  { note: "G#5", type: "black", left: 605 },
  { note: "A5", type: "white", left: 600 },
  { note: "A#5", type: "black", left: 655 },
  { note: "B5", type: "white", left: 650 },

  { note: "C6", type: "white", left: 680 },
];


const Piano = () => {
  return (
    <div className="piano">
      {notes.map((key, idx) => (
        <PianoKey key={idx} note={key.note} type={key.type} left={key.left}/>
      ))}
    </div>
  );
};

export default Piano;
