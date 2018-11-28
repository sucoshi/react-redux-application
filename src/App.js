import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("Clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <React.Fragment>
      <Beep />
      <Beep />
      <Beep />
      <Beep />
    </React.Fragment>
  )
}

const Beep = () => {
  return <div>Pi!</div>
}

export default App;
