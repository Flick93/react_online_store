import { useContext, useState } from "react";
import "./Product.css"
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";


function Product(props){
    const [quantity, setQuantity] = useState(1);

    const addToCart =  useContext(DataContext).addProductToCart;

    function addValue(){
        let prod = {...props.data, quantity: quantity};
        addToCart(prod);
    }

    function handleQuantity(qty){
        setQuantity(qty);
    }

    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h5>{props.data.title}</h5>
            <div className="prices">
                <label className="price">Price  <span>${props.data.price.toFixed(2)}</span></label>
                <label className="total">Total  <span>${getTotal()}</span></label>
            </div>

            <div className="controls">
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <button className="btn btn-sm btn-outline-success" onClick={addValue}>
                Add To
                <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
            
        </div>
    );
}

export default Product;