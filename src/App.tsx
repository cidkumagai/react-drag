import { useState } from 'react';

const DragBox = () => {
  const [isHover, setIsHover] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div
      onMouseMove={(e) => mouseMove(e)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p
        style={{
          display: isHover ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          position: 'fixed',
          fontSize: '20px',
          top: y - 10,
          left: x - 10,
          margin: 0,
          zIndex: 999,
        }}
      >
        👆
      </p>
    </div>
  );
};

function App() {
  return (
      <div style={{ cursor: 'none', width: '500px', height: '500px', backgroundColor: 'blue', margin: '0 auto' }}>
        <DragBox />
      </div>
  );
}

export default App;
