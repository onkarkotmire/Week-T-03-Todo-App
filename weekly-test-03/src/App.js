// import React from 'react';
// import { TodoProvider } from './components/TodoContext';
// import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <h1>Todo List</h1>
//       <TodoProvider>
//         <TodoList />
//       </TodoProvider>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { TodoProvider } from './components/TodoContext';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
