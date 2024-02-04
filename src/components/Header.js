import { useState } from 'react';
import {LOGO_URL} from '../../utils/constants';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
                <div className='flex items-center'>
                    <ul className="flex p-4 m-4">
                        <li className='px-3'>Home</li>
                        <li className='px-3'>About Us</li>
                        <li className='px-3'>Contact Us</li>
                        <li className='px-3'>Cart</li>
                        <button className="login" onClick={()=>{btnName === "Login" ? 
                        setBtnName("Logout")
                        : setBtnName("Login")
                    }}> 
                        {btnName} </button>
                    </ul>
                </div>
        </div>
    )
}

export default Header;