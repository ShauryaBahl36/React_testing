import React, { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import LibrarySystem from "./components/LibrarySystem";

const App = () => {
  const [view, setView] = useState("welcome");

  return (
    <div>
      {/* Green Bar */}
      <div style={{ backgroundColor: "green", padding: "10px", color: "white" }}>
        <h1>Simple Library System</h1>
      </div>
      {view === "welcome" ? (
        <div>
          <WelcomePage />
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setView("library")}
          >
            Go to Library
          </button>
        </div>
      ) : (
        <LibrarySystem />
      )}
    </div>
  );
};

export default App;
