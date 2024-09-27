import Product from '../components/Product';
import "./Catalog.css";
import {catalog as Products, catagories} from "../services/DataService";
import { useState } from 'react';

function Catalog(){
    //filter ""
    const [filter, setFilter] = useState("");

    return(
        <div className="catalog page">
            <h1>Our amazing catalog</h1>

            <div className='filters'>
                <button className='btn btn-sm btn-info' onClick={()  => setFilter("")} >All</button>
                {catagories.map(cat => <button className='btn btn-sm btn-outline-dark' onClick={() => setFilter(cat)}>{cat}</button>)}
            </div>
            
            {Products.filter(prod => filter == ""|| prod.category == filter).map((prod) => (<Product data={prod}></Product>
        ))}
        </div>
    );
}

export default Catalog;