import React, { useState, useRef } from 'react';
import Menu from './menu';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import './App.css';

function App() {
  const [brushColor, setBrushColor] = useState("blue");
  const [brushWidth, setBrushWidth] = useState(8);
  const [brushOpacity, setBrushOpacity] = useState(100); 
  const [eraseMode, setEraseMode] = useState(false);
  const canvasRef = useRef(null);

  return (
    <div className="app">
      <h1 className="title">SKETCHES</h1>
      <div className="draw">
         
        <Menu
          setBrushColor={setBrushColor}
          setBrushOpacity={setBrushOpacity}
          setBrushWidth={setBrushWidth}
          setEraseMode={setEraseMode}
          eraseMode={eraseMode}
        />
 
        <ReactSketchCanvas
          ref={canvasRef}
          style={{ border: '1px solid black', width: '100%', height: '80vh' }}
          strokeColor={eraseMode ? 'white' : brushColor}
          strokeWidth={eraseMode ? 20 : brushWidth}
          opacity={eraseMode ? 1 : brushOpacity / 100} // Apply opacity
        />
      </div>
    </div>
  );
}

export default App;
