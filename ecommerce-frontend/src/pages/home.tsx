import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";


const Home = () => {

    const addToCartHandler = () =>{}


    return <div className="home">
        <section></section>

        <h1>Latest Products 

            <Link to="/search" className="findmore">
                More
            </Link>

            <main>
                <ProductCard productId="fafjasd" name="macbook" price={80000} stock={10} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg" />
            </main>
            
        </h1>
    </div>
}

export default Home;
