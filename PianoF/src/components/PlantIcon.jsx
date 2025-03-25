import { useState } from "react";


const frames = [
    `   xxxx                 \n` +
    `xxxxxxxxx               \n` +
    `xxxx    xx              \n` +
    `  xxxxxxxxx-+     xxx   \n` +
    `     xx   | | xxxxx xxxx\n` +
    `          | |xxxx   xxx \n` +
    `          | |   xxxxx   \n` +
    `          | |           \n` +
    `          | |           \n` + 
    `          +-+           `,
  
    `   xx x               \n` +
    `xxxxxxxxxx        xxx   \n` +
    `xxxx    xxx-+   xxx xxxx\n` +
    `  xxxxxx  | | xxx   xxx \n` +
    `     xx   | |xxxxxxxx   \n` +
    `          | |           \n` +
    `          | |           \n` +
    `          | |           \n` +
    `          +-+           `,
  
    `                    xx  \n` +
    `                 xxx xxxx\n` +
    `    xxxx  x     xx   xxx \n` +
    `xxxxxxxxxxxx-+ xxxxxxx   \n` +
    `xxxxx    x | | xxxx      \n` +
    `   xxxxxxx | |xx         \n` +
    `      xx   | |           \n` +
    `           | |           \n` +
    `           | |           \n` +
    `           +-+           `
  ];
  
  function PlantIcon({ frameIndex, onWater, onSunlight, onTalk, points }) {
    return (
      <div className="plant-container">
        <div className="plant">
          <pre>{frames[frameIndex]}</pre>
  
         
        </div>
         {/* 버튼 영역 */}
         <div className="plant-buttons">
            <div className="points">🌱 포인트: {points}P</div>
            <button onClick={onWater}>💧 물 주기 (-100P)</button>
            <button onClick={onSunlight}>☀️ 햇볕 주기 (-50P)</button>
            <button onClick={onTalk}>💬 말 걸기 (-20P)</button>
          </div>
      </div>
    );
  }
  
  export default PlantIcon;