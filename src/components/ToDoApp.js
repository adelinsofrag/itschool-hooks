//3. `useReducer` Hook (Complexitate Ridicată):

import React, { useReducer } from "react";

const initialState = {
  todos: [],
  filter: "ALL",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const setFilter = (filter) => {
    dispatch({ type: "SET_FILTER", payload: filter });
  };

  return (
    <div>
      <input type="text" onKeyPress={(e) => e.key === "Enter" && addTodo(e.target.value)} />
      <ul>
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("COMPLETED")}>Completed</button>
      <button onClick={() => setFilter("ACTIVE")}>Active</button>
    </div>
  );
};
export default TodoApp;

//- În acest exemplu, `useReducer` este folosit pentru a gestiona o aplicație simplă de TODO, care conține trei acțiuni: `ADD_TODO`, `TOGGLE_TODO` și `SET_FILTER`.
//- Funcțiile `addTodo`, `toggleTodo` și `setFilter` trimit acțiunile corespunzătoare reducer-ului pentru a actualiza starea aplicației.
//- Starea aplicației este reprezentată de un obiect care conține o listă de obiecte TODO (`todos`) și un filtru (`filter`).
