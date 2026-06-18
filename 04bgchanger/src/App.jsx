import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 flex justify-center items-end pb-10"
      style={{ backgroundColor: color }}
    >
      {/* Button Container */}
      <div className="flex gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">
        
        <button
          onClick={() => setColor("red")}
          className="px-4 py-1 rounded-full text-white shadow-md"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-1 rounded-full text-white shadow-md"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-1 rounded-full text-white shadow-md"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

      </div>
    </div>
  );
}

export default App;