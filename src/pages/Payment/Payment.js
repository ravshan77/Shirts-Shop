import React, { useContext  } from 'react'
import { Redirect,useHistory} from 'react-router-dom'
import "../../css/Payment.css"
import {DataContext} from '../../store/Context'


const Payment = () => {
    const context =useContext(DataContext) 
    const history = useHistory()
    const {card,payOrder} = context; // context
    // calc dates
    const total_count = card?.map((card) =>{ return( card.count)});
    const total = card?.map((card) => card.price * card.count);
    const total_cost = total?.reduce((a, b) => a + b, 0);
    const total_counts = total_count?.reduce((a, b) => a + b, 0);

    function onSubmitHandler (){
        payOrder() 
        setTimeout(function(){
            return history.push("/")
        },2000)
        // return history.push("/")
    }

    return (
        <div>
            <section className="payment">
            <div className="wrapperOne"> 
                <form onSubmit={() => onSubmitHandler()}>
                <div className="input-field">
                        <input   type="text"/>
                        <label>Name</label>
                    </div>
                    <div className="input-field">
                        <input  type="number" min="9" minLength="9"/>
                        <label>Mobile</label>
                    </div>
                    <div className="input-field">
                        <input   type="text"/>
                        <label>City and Street</label>
                    </div>
                    <div className="input-field">
                        <input   type="text"/>
                        <label>House number</label>
                    </div>
                    <div className="input-field">
                        <input   type="text"/>
                        <label>Card Name</label>
                    </div>
                    <div className="input-field">
                        <input   type="number" minLength="16" min="16"/>
                        <label>Card number</label>
                    </div>
                    <div className="input-field">
                        <input   type="text"/>
                        <label>MM / YY</label>
                    </div>
                    <input  type="submit" name="" value="To order" className="btn btn--black"/>
                </form>
            </div>
            <div className="wrapperTwo">
                <div className="">
                    <p>All products</p> <span>{total_counts} x</span>
                </div>
                <div className="">
                    <p>Total cost of products</p> <span>{total_cost} $</span>
                </div>
                <div className="">
                    <p>For delivery service</p> <span>+5 $</span>
                </div>
                <hr />
                <div className="">
                    <p>Total</p> <span>{total_cost + 5} $</span>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Payment;
