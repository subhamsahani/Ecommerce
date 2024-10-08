import React, { useState, useEffect } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart-solid-24.png'
import v_logo from './../Assets/newlogo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const [menu, setMenu] = useState("shop");

    useEffect(() => {
        // Set the menu state based on the current path
        switch (location.pathname) {
            case '/mens':
                setMenu("mens");
                break;
            case '/womens':
                setMenu("womens");
                break;
            case '/kids':
                setMenu("kids");
                break;
            default:
                setMenu("shop");
        }
    }, [location.pathname]);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={v_logo} alt="" />
                <p>EGAIKYA</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link to='/mens'>Demo1</Link>
                    {menu === "mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link to='/womens'>Demo2</Link>
                    {menu === "womens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link to='/kids'>Demo3</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button className='btn-login'>Signup</button>
                </Link>
                <Link to='/cart' ><img className='login-cart-img' src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar;
