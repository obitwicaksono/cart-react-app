import PropTypes from "prop-types";

function Todos(props) {
  return (
    // overflow-auto max-h-[405px]
    <>
      <div className="overflow-auto max-h-[435px]">
        {props.todos.map((todo, index) => (
          <div
            key={index}
            className="bg-slate-800 mx-6 py-3 rounded-lg flex items-center justify-between mb-4"
          >
            <div className="text-white font-medium mx-4 max-w-[150px] break-words">{todo.title}</div>

            <div id="btn-count-min-plus" className="flex items-center">
              <button
                onClick={() => props.onSubstraction(index)}
                className="bg-slate-200 flex items-center rounded-md px-1 py-1 mr-4"
              >
                <svg
                  className="w-[20px] h-[20px] text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14"
                  />
                </svg>
              </button>

              <div className="text-white font-medium">{todo.count}</div>

              <button
                onClick={() => props.onAdditon(index)}
                className="bg-slate-200 flex items-center rounded-md px-1 py-1 ml-4"
              >
                <svg
                  className="w-[20px] h-[20px] text-slate-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </button>

              <button
                onClick={() => props.onDelete(index)}
                className="bg-red-600 flex items-center rounded-md px-1 py-1 ml-2 mr-4"
              >
                <svg
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAdditon: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Todos;

{
  /* <div id="list-todos">
        <div
          id="todo-item"
          className="h-14 bg-slate-800 mx-6 py-3 rounded-lg flex items-center justify-between"
        >
          <p className="text-white font-medium mx-4">Todo Title</p>

          <div id="btn-count-min-plus" className="flex items-center">
            <button
              id="minus-btn"
              className="bg-slate-200 flex items-center rounded-md px-1 py-1 mx-4"
            >
              <svg
                className="w-[20px] h-[20px] text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <p className="text-white font-medium">0</p>
            <button
              id="plus-btn"
              className="bg-slate-200 flex items-center rounded-md px-1 py-1 mx-4"
            >
              <svg
                className="w-[20px] h-[20px] text-slate-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div> */
}
