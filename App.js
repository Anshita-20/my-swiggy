import React, { useEffect, useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './src/components/Header';
import Body from './src/components/Body';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import RestaurantMenu from './src/components/RestaurantMenu';
import UserContext from './utils/UserContext';

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() =>{
        //call API to get userName
        data = {
            name : "Anshita Pandey"
        }
        setUserName(data.name);
    })

    return (
        <UserContext.Provider value={{loggedInUser : userName}}>
        <div className="app">
            <></>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body />,
            },
            {
                path : "/about",
                element : <About />,
            },
            {
                path : "/contact",
                element : <Contact />,
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />
            },
        ],
        errorElement : <Error />
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);