
import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaCalendar, FaHome, FaLine, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { FaBook, FaEnvelope, FaList, } from "react-icons/fa6";

import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
     <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-full bg-orange-400">
            <ul className="menu p-4">
             {
                isAdmin? <>
                      <li>
                  
                    <NavLink to="/dashboard/adminHome">
                     <FaHome />Admin Home</NavLink>
             </li>
            <li>
                  
                    <NavLink to="/dashboard/addItems">
                     <FaCalendar />Add Items</NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                     </NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/review">
                     <FaBook />Manage Bookings</NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/users">
                     <FaUsers />All Users</NavLink>
             </li>
                </>:
                <>
                      <li>
                  
                    <NavLink to="/dashboard/userHome">
                     <FaHome />User Home</NavLink>
             </li>
            <li>
                  
                    <NavLink to="/dashboard/reservation">
                     <FaCalendar />Reservation</NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/cart">
                     <FaShoppingCart />My Cart ({cart.length})</NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/review">
                     <FaAd />Add Review</NavLink>
             </li>
                <li>
                  
                    <NavLink to="/dashboard/bookings">
                     <FaLine />My Bookings</NavLink>
             </li>
                </>

             }
             {/* shared nav links */}
             <div className="divider"></div>
             <li>
                <NavLink to="/">
                    <FaHome></FaHome>
                     Home
                </NavLink>
             </li>
             <li>
                <NavLink to="/order/salad">
                    <FaSearch></FaSearch>
                    Menu
                </NavLink>
             </li>
             <li>
                <NavLink to="order/contact">
                    <FaEnvelope></FaEnvelope>
                </NavLink>
             </li>
            </ul>
        </div>
              {/* dashboard content */}
           <div className="flex-1 p-8">
            <Outlet></Outlet>
           </div>
     </div>
    );
};

export default Dashboard;