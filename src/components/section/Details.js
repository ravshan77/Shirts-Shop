import React, { Component,useContext,useState,useEffect} from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'


const Details = (props) => {
    const context = useContext(DataContext)
console.log(context);
    
    const [state,setState] = useState({product:[]})

    function getProduct(){
        if(props.match.params.id){
            const res = context.products;
            const data = res.filter(item =>{
                return item._id === props.match.params.id
            })
            setState({product: data})
        }
    };

useEffect(() => {
    getProduct();
},[])



    // render() {
        const {product} = state;
        const {addCart} = context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" onClick={addCart(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    // }
}

export default Details
