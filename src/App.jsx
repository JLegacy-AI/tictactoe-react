import BoxGrid from "./components/BoxGrid";

function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          flexDirection: "column",
        }}
      >
        <BoxGrid />
      </div>
    </>
  );
}

export default App;
