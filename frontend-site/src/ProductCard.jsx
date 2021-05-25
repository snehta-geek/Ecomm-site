import React from "react";
import Rating from "./Rating";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "./actions/productActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";
import SlideScreen from "./SlideScreen";

const ProductCard = () => {                             
    const dispatch=useDispatch();
   const productList=useSelector((state) => state.productList);  //react component gets products data from redux store
   const {loading,error,products}=productList;
    useEffect(() =>{
        dispatch(listProducts());          
    },[dispatch]);
    return (
        <>
        <SlideScreen></SlideScreen>
            <main>
            <h1>Suggested For You</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
          ) : error ? (
               <MessageBox variant="danger">{error}</MessageBox>
      	      ) : (
                <div className="roww center">
                   
                    {products.map((product) => (
                        <div key={product._id} className="card" id="cp">
                            <Link to={`/product/${product._id}`}>
                                <img
                                    className="medium"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </Link>
                            <div className="card-body" >
                                <Link to={`/product/${product._id}`} id="plink">
                                    <p>{product.name}
                                    </p>
                                    </Link>
                              <Rating rating={product.rating}
                                     numReviews={product.numReviews}/>
                                <div className="price">
                                <i class="fa fa-rupee"/>{product.price}
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
                )} 
            </main>
            
        </>
    )
}

export default ProductCard;