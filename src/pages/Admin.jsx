import { useState } from "react"; 
import "./Admin.css";


/** 
 * when the user click on the save coupon button
 * call a save Coupon fn
 * the fn should console log the coupon vae 
 
*/
/**

 * Finish the product form

 * create the product state var

 * crate the handlProduct fn

 * set the onBlur and name to input fields

 * create the saveProduct that console logs the product

 * call the fn on the click event of the save button

 */

function Admin(){
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount:""
    })

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price:"",
        image:"",
        category:""
    })
        

    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name
        console.log(name, text);

        //copy,modify the copy, set the copy
        const copy = {...product};
        copy[name] = text;
        setProduct(copy);
    }
    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name
        console.log(name, text);

        //copy,modify the copy, set the copy
        const copy = {...coupon};
       copy[name] = text;
        setCoupon(copy);
    }

    function saveProduct(){
        console.log(product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }
    function saveCoupon(){
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return(
        <div className="admin page">
            <h1>Administrative Support</h1>


            <div className="parent">
                <div className="products" >
                    
                    <div className="form">
                        <h3 >Register a Product</h3>
                        <div>
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="title"/>
                        </div>
                        <div>
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="image"/>
                        </div>
                        <div>
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="category"/>
                        </div>
                        <div>
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" onBlur={handleProduct} number="price"/>
                        </div>
                        <div className="controls">
                            <button className="btn btn-outline-primary" onClick={saveProduct}>Save Product </button>
                        </div>
                    </div>

                    {allProducts.map((prod) => (
                    <li className="prod">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>
                        <label>${prod.price}</label>                     
                    </li>))}

                </div>

                <div className="coupons">
                    <div className="form">
                        <h3 >Register a Coupon</h3>
                        <div>
                            <label className="form-label">Code</label>
                            <input type="text" className="form-control" onBlur={handleCoupon} name="code"/>
                        </div>

                        <div>
                            <label className="form-label">Discount</label>
                            <input type="number" className="form-control" onBlur={handleCoupon} name="discount"/>
                        </div>

                        <div className="controls">
                            <button className="btn btn-outline-primary" onClick={saveCoupon}>Save Coupon</button>
                        </div>
                    </div>

                    {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}

                </div>
            </div>

        </div>
    );
}

export default Admin;

/**
 * coupon:
 * code: qwerty
 * discount: 10
 */

/**
 * product:
 * title
 * image
 * category
 * price
 * 
 */

/**
 * create a contact page with a contact form
 * 
 * create a Contact page
 * create a route for it   /contact
 * 
 * create a menu item for contact
 * 
 * create a form in the page with
 * - name
 * - email
 * - message
 * - button to send
 * 
 * 
 * - create the message state var
 * - create the handle fn
 * - set the onBlur and name in the input field
 * 
 * - create the send fn
 * - on click of the button, call the send function
 */