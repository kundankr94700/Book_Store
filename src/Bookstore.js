import React from 'react'

function Bookstore() {
    return (
        <section>
            <Book/>
        </section>
    )
}
const Book=()=>{
    return <article><Img></Img></article>
}
const Img=()=>
{
    return <img src='https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL320_SR228,320_.jpg' width='100' height='100'/>
}
export default Bookstore
