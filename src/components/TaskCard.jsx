import { useTask } from "../context/TaskContext";

export default function TaskCard({ tasks }) {
  const { deleteTask, updateTask } = useTask();

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleDone = (id, status) => {
    updateTask(id, { done: !status });
  };

  return (
    <div className="container grid grid-cols-1 mt-4 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="m-auto w-full"
          >
            <div className="border border-gray-border p-3 rounded-lg hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
              <div>
                <h1 className="font-bold uppercase">{task.name}</h1>
                <p>
                  <span className="font-semibold">done?:</span>{" "}
                  {JSON.stringify(task.done)}
                </p>
              </div>

              <div className="flex flex-row justify-center items-center mt-3">
                <button
                  onClick={() => handleDelete(task.id)}
                  className="border rounded-md border-gray-border px-2 py-1"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleDone(task.id, task.done)}
                  className="border rounded-md border-gray-border px-2 py-1 ml-3"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
