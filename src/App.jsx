import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontStyle: "italic",
        }}
      >
        Registration Form
      </h1>
      <Registration />
    </div>
  );
};

export default App;
