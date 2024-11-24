import { useState } from "react";

export const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskValue, setTaskValue] = useState([]);
  const formSet = (event) => {
    event.preventDefault();
    setTaskValue((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const deletHandler = (task) => {
   const removeItem = taskValue.filter((delt)=> delt!==task ); 
    setTaskValue(removeItem);

};

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div>
          <form onSubmit={formSet}>
            <input
              value={inputValue}
              type="text"
              placeholder="Write a Task"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button type="submit">Add</button>
          </form>
          <div>
            {taskValue.map((task) => {
              return (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{task}</h6>
                    <button
                      onClick={() => deletHandler(task)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};
