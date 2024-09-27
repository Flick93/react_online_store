import { useContext } from "react";
import "./Cart.css";
import DataContext from "../state/DataContext";

function Cart(){
    const {cart} = useContext(DataContext)
 // const cart - useContext(DataContext).cart;    
    function getTotal(){
        let total= 0;
        for(let i = 0; i< cart.length; i++) {
            const prod = cart[i];
            total+= (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }

    return(
        <div className="cart page">
            <h1>Thank you for shopping</h1>
            <h4>You have <b>{cart.length}</b> items.</h4>

            <div className="parent">
                <div className="list">
                    {
                    cart.length == 0 ?
                        <div className="alert alert-danger">
                            <h5>Go to Catalog to add items here!</h5>
                         </div>
                    :null
                    }
                    
                    {cart.map(prod => (
                        <div className="prod-cart">
                            <img src={prod.image} alt="" />
                            <h5>{prod.title}</h5>
                            <label>${prod.price}</label>
                            <label>#{prod.quantity}</label>
                            <label>${(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className="btn btn-sm btn-outline-danger">
                                <i class="fa-solid fa-trash-can-arrow-up"></i>
                                </button>
                        </div>
                    ))}
                </div>

                {
                cart.length > 0 ?
                    <div className="side">
                    <h4>Total</h4>
                    <h3>${getTotal()}</h3>

                    <button className="btn btn-primary">Proceed to paymrnt</button>
                    </div>
                : null
                }
                
            </div>
            
        </div>
    );
}

export default Cart;

