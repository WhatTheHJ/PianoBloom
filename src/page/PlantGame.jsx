import { useState } from 'react';
import PlantIcon from '../components/PlantIcon';
import Piano from '../components/Piano'; // 피아노 컴포넌트 추가
import "../styles/GamePage.css";

function PlantGame() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [points, setPoints] = useState(200); // 시작 포인트

  const usePoints = (amount) => {
    if (points >= amount) {
      setPoints(points - amount);
      shakePlant(); // 흔들리게
    } else {
      alert('포인트가 부족해요!');
    }
  };

  const shakePlant = () => {
    setFrameIndex((prev) => (prev + 1) % 3); // 흔들림 프레임 전환
  };

  return (
    <div className="game-wrapper">
      

      {/* 중단: 피아노 */}
      <Piano onKeyPress={shakePlant} />
      {/* 하단: 식물 흔들림 */}
       <PlantIcon
            frameIndex={frameIndex}
            points={points}
            onWater={() => usePoints(100)}
            onSunlight={() => usePoints(50)}
            onTalk={() => usePoints(20)}
            />
    </div>
  );
}

export default PlantGame;
