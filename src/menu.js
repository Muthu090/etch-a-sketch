import React from 'react';

const Menu = ({ setBrushColor, setBrushOpacity, setBrushWidth, setEraseMode, eraseMode }) => {

   const handleEraserClick = () => {
    setEraseMode(true);   
  };

   const handleDrawClick = () => {
    setEraseMode(false);   
  };

  return (
    <div className="menu">
      <div className="menu-item">
        <label htmlFor="brush-color">Brush Color:</label>
        <input
          id="brush-color"
          type="color"
          onChange={(e) => setBrushColor(e.target.value)}  
        />
      </div>

      <div className="menu-item">
        <label htmlFor="brush-width">Brush Width:</label>
        <input
          id="brush-width"
          type="range"
          min="3"
          max="20"
          onChange={(e) => setBrushWidth(e.target.value)}  
        />
      </div>

      <div className="menu-item">
        <label htmlFor="brush-opacity">Brush Opacity:</label>
        <input
          id="brush-opacity"
          type="range"
          min="1"
          max="100"
          onChange={(e) => setBrushOpacity(e.target.value)}  
        />
      </div>

      <div className="menu-item">
         <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleEraserClick}
          disabled={eraseMode}  
        >
          Eraser
        </button>

         <button
          type="button"
          className="btn btn-sm btn-outline-primary"
          onClick={handleDrawClick}
          disabled={!eraseMode}  
        >
          Draw
        </button>
      </div>
    </div>
  );
};

export default Menu;
