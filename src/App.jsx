import { Route, Routes } from "react-router-dom";

import { useState } from "react";
import Addtast from "./components/Addtast";
import ShowTask from "./components/ShowTask";
import SinglePost from "./components/SinglePost";

function App() {
  const [addTask, setAddTask] = useState([]);

  return (
    <>
      <Routes>
        <Route
          element={
            <div className="min-h-screen flex flex-col md:flex-row bg-purple-900 gap-2">
              <div className="flex flex-row m-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500">
                <div className="flex flex-col">
                  <Addtast addTask={addTask} setAddTask={setAddTask} />
                  <ShowTask task={addTask} />
                </div>
              </div>
            </div>
          }
          path="/"
          exect
        />
        <Route element={<SinglePost task={addTask} />} path="/post/:id" />
      </Routes>
    </>
  );
}

export default App;
