import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Switch, Link } from "react-router-dom";



import Orders from './Orders';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ProductCard from './ProductCard';
import Signin from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './PrivateRoute';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import Header from './Header';



// switch shows only one page at a time(switch b/w pages)
function App() {
 
  return (

    <>


<header>
  <Header></Header>
</header>

     
     

<main>


      <Switch>
        <Route exact path="/" component={ProductCard} />
        <Route path="/signin" component={Signin} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/orders" component={Orders} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/shipping" component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/orderhistory" component={OrderHistoryScreen} />
        <PrivateRoute path="/profile" component={ProfileScreen} />
       
      </Switch>
      </main>
      
      <div className="footer">
        
        <div className="ft">
         Conditions of Use & Sale | Privacy Notice | Copyright &copy; 2020 , @monTron | All right reserved
         <hr id="hr"/>
         <div>Made with <i class="fa fa-heart"/> by Snehta</div>
        </div>
       
         </div>
        
        
    </>

  );
}

export default App;
