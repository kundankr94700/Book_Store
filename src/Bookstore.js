import React from 'react'
import './index.css'

function Bookstore(props) {
    return (
        <section >            
            <Book photo={props.img} titles={props.title} authers={props.auther} prices={props.price}> </Book>
        </section>
    )
}
const Book=(props)=>{
    return (
    <article>
        <Img pic={props.photo}/>
        <Title mytitle={props.titles}/>
        <Auther myauther={props.authers}/>   
        <Price myprice={props.prices}/> 
        </article>
    
    )
}
const Img=(props)=><img src={props.pic}/>

const Auther=(props)=><h3> {props.myauther}</h3>

const Title=(props)=> <h1> {props.mytitle}</h1>

const Price=(props)=> <h3> {props.price}</h3>

export default Bookstore
