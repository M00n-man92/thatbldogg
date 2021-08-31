import './sidebar.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useLocation,Link } from 'react-router-dom'
export default function Sidebar() {
    const [cat,setCat]=useState([])
    const {search} = useLocation()

    useEffect(() => {
        const func=async ()=>{
            const catagory=await axios.get("http://localhost:5000/api/catagory/"+search)
            setCat(catagory.data)
        }
        func()
    }, [])
    return (
        <div className="sidebar">
           <div className="sidebaritem">
               <span className="sidebartitle">Catagories</span>
               <ul className="sidebarlist">
                   {cat.map((c)=>(<Link to={`/?cat=${c.catname}`} className="link"><li className="sidebarlistitem">
                       {c.catname}
                   </li></Link>))}
                   
               </ul>
               <span className="sidebartitle">
                   Follow US

               </span>
               <div className="sidebarsocial"> <i className="sidebaricons fab fa-facebook"></i>
                <i className="sidebaricons fab fa-pinterest"></i>
                <i className="sidebaricons fab fa-twitter"></i>
                <i className="sidebaricons fab fa-instagram"></i>
           </div>
              </div>

        </div>
    )
}
