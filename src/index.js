import React from 'react';
import ReactDOM from 'react-dom';
import Bookstore from './Bookstore.js';
import FirstComponent from './FirstComponent.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <MyComponent/>   this is mycomponent that contains name age and */}
    {/* <FirstComponent/> this is how we use a component */}
    
    <table rules='all'>
      <tr  width='200'>
        <td ><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL320_SR228,320_.jpg"title="Ikigai: The Japanese secret to a long and…" auther='Héctor García' price='290'/></td>
        <td><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/71xBLRBYOiL._AC_UL200_SR200,200_.jpg" title="My First Library: Boxset of 10 Board Books…" auther='Board book' price='399'/></td>
        <td><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg" title="The Psychology of Money" auther='Morgan Housel' price='254'/></td>
     
      </tr>
      <tr>
      <td><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg" title="Rich Dad Poor Dad: What the Rich Teach…" auther='Mass Market Paperback' price='317'/></td>
      <td><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" title="Atomic Habits: The life-changing million…" auther='James Clear' price='542'/></td>
      <td><Bookstore img="https://images-eu.ssl-images-amazon.com/images/I/81j0Jii6mZL._AC_UL200_SR200,200_.jpg" title="Picture Books Collection for Early Learning…" auther='E C Axus' price='230'/></td>
    
      </tr>
    </table>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

