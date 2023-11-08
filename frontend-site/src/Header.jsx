import React from "react";
import { signout } from "./actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header =() =>{
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;                      /*==(cart.cartItems) */
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const sigoutHandler = () => {
      dispatch(signout());
    }
    return(
        <>
         <nav className="navbar navbar-expand-lg mx-auto " id="nav-header" >
        <Link to="/" className="navbar-brand">@monTron</Link>
        <button className="navbar-toggler" id="hicon"type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* <button classnaName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}

        {/* <div className="input-group">
          <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
          {/* <button classnaName="btn" type="submit" id="search"> */}
          {/* <div className="input-group-append">

            <span className="input-group-text" id="basic-addon2">

              <svg width="2em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              </svg> */}
              {/* </button> */}
            {/* </span>
          </div>
        </div>  */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">        

          <ul className="navbar-nav mx-auto">
          

            <li className="nav-item dropdown  ">
              {userInfo ? (
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hello,{userInfo.name}
                </a>) : (
                  <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hello,Sign in
                  </a>
                )
              }

              <div className="dropdown-menu back" aria-labelledby="navbarDropdown">

                <Link className="dropdown-item " to="/signin">
                  <button type="button" className="btn btn-outline-dark" id="login">Sign In</button>
                </Link>
                <p>New Customer?  <Link to="/register" className="register">Sign Up</Link></p>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/profile" id="items">My Profile</Link>
                <Link className="dropdown-item" to="/orderhistory" id="items">My Order</Link>
                <Link className="dropdown-item" to="/signin" id="items" onClick={sigoutHandler}>Sign Out</Link>
              </div>

            </li>



            <li className="nav-item ml-2">
              <a className="nav-link" href="/cart" id="cart">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
                <span className="sh-cart">Cart</span>


              </a>
            </li>
            {userInfo && userInfo.isAdmin && (
              <li className="nav-item">
              <Link className="nav-link uname" to="#admin">Admin</Link>
              </li>
            )}

            
      
          </ul>

        </div>
      </nav>

        </>
    )
}

export default Header;