import React, { useEffect, useState } from "react";

// Functinal Component
function HaluFetch() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.splice(0, 20)));
  });

  return (
    <div>
      <table className="table">
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "v" : "x"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HaluFetch;

// Class Component
// export default class HaluFetch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => this.setState({ todos: data.splice(0, 20) }));
//   }

//   render() {
//     return (
//       <div>
//         <table className="table">
//           <tbody>
//             {this.state.todos.map((todo, index) => (
//               <tr key={index}>
//                 <td>{todo.id}</td>
//                 <td>{todo.title}</td>
//                 <td>{todo.completed ? "v" : "x"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
