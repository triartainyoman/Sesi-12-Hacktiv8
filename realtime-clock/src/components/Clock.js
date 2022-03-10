import React, { useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  setInterval(() => tick(), 1000);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;

// Class Component
// export default class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
