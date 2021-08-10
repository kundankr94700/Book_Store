import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent.js'
import NestedComponent from './NestedComponent.js';
import MyComponent from './SecondComponent'

ReactDOM.render(
  <React.StrictMode>
    <NestedComponent/>
    <MyComponent/>   {/*this is mycomponent that contains name age and */}
    <FirstComponent/> {/*this is how we use a component*/}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

