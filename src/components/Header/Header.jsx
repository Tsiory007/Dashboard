import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import  SearchBar  from './SearchBar';
import Status from './Status';
import Sidebar from "../Sidebar/Sidebar";

const Header = () =>{

// header contient le bouton pour ouvrir ou fermer ma sidebar
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toogleSidebar = () =>{
     setIsSidebarOpen(!isSidebarOpen);
}


    return(
     <>
        <nav className="top-0 fixed w-full z-50 h-13 bg-white flex items-center border-blue-100 border-b">
           <div className="flex items-center space-x-2 px-3">
               <CiMenuFries onClick={toogleSidebar} className="text-2xl"/>
               <a href="#" className="font-bold text-xl">ERP System</a>
           </div>
           <div>
                <SearchBar/>
           </div>
           <div>
                <Status />
           </div>

        </nav>

       { /*Sidebar doit savoir quand elle doit être affichée ou cachée */}
          <Sidebar isSidebarOpen={isSidebarOpen} />
     </>
    )
}


export default Header;    