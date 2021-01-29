import React from 'react';
import ReactDOM from 'react-dom';

//function Component App definition
const App = () => {
  return (
    <div style={{ backgroundColor: 'blueviolet', color: 'whitesmoke' }}>  {/*Inline Styling using JSX*/}
      <h1>Testing develop branch</h1>
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);