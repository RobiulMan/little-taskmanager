import { useState } from "react";

const Addtast = ({ setAddTask }) => {
  const [task, setTask] = useState("");
  const hangleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && task !== "") {
      setAddTask((prav) => [...prav, { id: crypto.randomUUID(), title: task }]);
      setTask("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="mb-6">
        <input
          type="text"
          id="username-success"
          className="placeholder-gray text-sm rounded focus:ring-black-500 focus:border-black-500 block w-full p-2.5 "
          placeholder="write a task"
          onChange={hangleChange}
          onKeyUp={handleSubmit}
          value={task}
        />
        <p className="mt-2 text-sm text-whit dark:text-gray">
          <span className="font-medium">press Enter</span> to add task !
        </p>
      </div>
    </div>
  );
};

export default Addtast;
