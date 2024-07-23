// import React from "react";
// import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

// const Todos = () => {
// const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     const updatedTodos = [...todos, todo];
//     setTodos(updatedTodos);
//   };

// const toggleTodo = (id) => {
//   const updatedTodos = todos.map((el) =>
//     el.id === id ? { ...el, status: !el.status } : el
//   );
//   setTodos(updatedTodos);
//   console.log("toggle run");
// };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter((el) => el.id !== id);
//     setTodos(updatedTodos);
//     console.log("delete run");
//   };

//   return (
//     <div>
//       <AddTodo addTodo={addTodo} />
//       {todos.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           {...todo}
//           toggleTodo={toggleTodo}
//           deleteTodo={deleteTodo}
//         />
//       ))}
//     </div>
//   );
// };

// export default Todos;
import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const updatedTodo = [...state, action.payload];
      return updatedTodo;
    }
    case "DELETE_TODO": {
      const updatedTodo = state.filter((el) => el.id !== action.payload);
      return updatedTodo;
    }
    case "TOGGLE_TODO": {
      const updatedTodo = state.map((el) =>
        el.id === action.payload ? { ...el, status: !el.status } : el
      );
      return updatedTodo;
    }
    default: {
      throw new Error(`Invalid action type`, action.type);
    }
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <div>
      <div>
        <AddTodo addTodo={addTodo} />
        {state.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
