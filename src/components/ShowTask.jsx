import TaskCard from "./TaskCard";

const ShowTask = ({ task }) => {
  return (
    <main>
      <div className="px-4">
        <div className="my-5">
          <h2 className="text-lg font-semibold text-gray-900 text-white">
            All Tasks
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
          <TaskCard task={task} />
        </div>
      </div>
    </main>
  );
};

export default ShowTask;
