import TasksCRUD from "./pages/TasksCRUD";

function App() {
  return (
    <>
      <h1 className="text-center">Tasks management</h1>
      <div className="container">
        <div className="row my-1">
          <div className="col">
            <TasksCRUD/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
