import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from "../constants/ProductConstant"
// import Axios from "../../node_modules/axios/index";
import instanceAll from '../axiosInstance';


export const listProducts=()=> async(dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST,  
    });
    try{
        const {data}=await instanceAll.get('/api/products');
        dispatch({
            type:PRODUCT_LIST_SUCCESS,payload:data
        });
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,payload:error.message
        });
    }
}

export const detailsProduct  =(productId) =>async(dispatch) =>{
    dispatch({type:PRODUCT_DETAILS_REQUEST,
    payload:productId})
    try{
        const {data}=await instanceAll.get(`/api/products/${productId}`);
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })
    }catch(error){
            dispatch({
                type:PRODUCT_DETAILS_FAIL,
                payload:
                error.response && error.response.data.message ?
                error.response.data.message : error.message
            })
        }
    
}