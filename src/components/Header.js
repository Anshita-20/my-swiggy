import { useState, useContext } from 'react';
import {LOGO_URL} from '../../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    // Subscribing to the store by using useSelector.
    const cartItems = useSelector((store) => store?.cart?.items);

    return (
        <div className="flex justify-between shadow-lg bg-pink-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
                <div className='flex items-center'>
                    <ul className="flex p-4 m-4">
                        <li>Online Status: {onlineStatus ?  "✅" : "🔴" }</li>
                        <li className='px-3'><Link to='/'>Home</Link></li>
                        <li className='px-3'><Link to ='/about'>About Us</Link></li>
                        <li className='px-3'><Link to = '/contact'>Contact Us</Link></li>
                        <li className='px-3 font-bold text-xl'>
                        <Link to = '/cart'>Cart {cartItems.length}</Link>
                            </li>
                        <button className="login" onClick={()=>{btnName === "Login" ? 
                        setBtnName("Logout")
                        : setBtnName("Login")
                    }}> 
                        {btnName} </button>
                        <li className='px-4 font-bold'>{loggedInUser}</li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;