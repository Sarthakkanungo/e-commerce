import React,{useState ,useEffect}from "react";
import Feature from "../../components/Features";
import Hero from '../../components/Hero/index';
import Products from "../../components/Products/index.js";
import StatsCard from "../../components/StatsCard";
const Home = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products?limit=12");
        const data = await response.json();
        console.log(data);
        setProduct(data);
      };
      fetchProducts();
    }, []);

  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
          Products
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          Most Popular Products
        </h1>
      </div>
      {products.length > 0 ? (
        <Products list={products} />
      ) : (
        <div> Loading...</div>
      )}
      <Products product={products}/>
      <Feature />
      <StatsCard />
    </div>
  );
};

export default Home;
