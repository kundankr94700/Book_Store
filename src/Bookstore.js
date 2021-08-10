import React from 'react'
import './index.css'
const firstBook={
    title:'Ikigai: The Japanese secret to a long and…',
    img:"https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL320_SR228,320_.jpg",
    auther:'Héctor García' ,price:'290'
}
const secondBook={
    img:"https://images-eu.ssl-images-amazon.com/images/I/71xBLRBYOiL._AC_UL200_SR200,200_.jpg",
     title:"My First Library: Boxset of 10 Board Books…",
      auther:'Board book',
       price:'399'

}
function Bookstore() {
    return (
        <section className='bookList'>            
      <Book img={firstBook.img} title={firstBook.title} price={firstBook.price} auther={firstBook.auther}/>
      <Book img={secondBook.img} title={secondBook.title} price={secondBook.price} auther={secondBook.auther}/>
      <Book img="https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg" title="The Psychology of Money" auther='Morgan Housel' price='254'/>
     
      <Book img="https://images-eu.ssl-images-amazon.com/images/I/91VokXkn8hL._AC_UL200_SR200,200_.jpg" title="Rich Dad Poor Dad: What the Rich Teach…" auther='Mass Market Paperback' price='317'/>
      <Book img="https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg" title="Atomic Habits: The life-changing million…" auther='James Clear' price='542'/>
      <Book img="https://images-eu.ssl-images-amazon.com/images/I/81j0Jii6mZL._AC_UL200_SR200,200_.jpg" title="Picture Books Collection for Early Learning…" auther='E C Axus' price='230'/>
    
        </section>
    )
}
const Book=(props)=>{
    return (
    <article >
        <Img pic={props.img}/>
        <Title mytitle={props.title}/>
        <Auther myauther={props.auther}/>   
        <Price myprice={props.price}/> 
        </article>
    
    )
}
const Img=(props)=><img className='center' src={props.pic} width='150px' height='200px'/>

const Auther=(props)=><h3 style={{color:'#617d98', fontSize:'0.95rem' }}> {props.myauther}</h3>

const Title=(props)=> <h1 style={{color:'#915d98', fontSize:'1.35rem' }} > {props.mytitle}</h1>

const Price=(props)=> <h4> {props.myprice}</h4>

export default Bookstore
