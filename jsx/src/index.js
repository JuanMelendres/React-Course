// Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//   return 'Click on me!';
// getButtonText()
// }

// Crate a react component
const App = () => {
  const buttonText = { text: 'Click Me!' };
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';

  return (
    <div>
      <h1>Hi there!</h1>
      <label className="label" htmlFor="name">
        { labelText }
      </label>
      <input id="name" type="text"></input>
      <button style={ style }>
        { buttonText.text }
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);