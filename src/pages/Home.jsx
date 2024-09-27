import "./Home.css"

import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home page">
            <h2>Welcome to Electopia </h2>

            <Link className="btn btn-large btn-primary" to="/catalog">
            <i class="fa-regular fa-circle-right"></i>
            Check out our cutting edge Tech
            <i class="fa-regular fa-circle-left"></i>
            </Link>

            <img src="/images/wrap4.jpg" alt="" ></img>
        </div>

    );
}

export default Home;