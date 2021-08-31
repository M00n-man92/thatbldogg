import {useState,useEffect} from "react";
import Sidebar from "../../components/sidebar/Sidebar"

import Post from "../../components/post/Post"
import Header from "../../components/header/Header"
import './home.css'
import Topbar from "../../components/topbar/Topbar"
import axios from "axios"
import { useLocation } from "react-router-dom";
export default function Home() {
    const [post,setPosts]=useState([])
    const {search}=useLocation()
    


    useEffect(() => {
        const postFetch=async()=> {
const res=await axios.get("http://localhost:5000/api/posts/"+search)
      setPosts(res.data)
}
        postFetch();
      }, [search])
    return (
        <>
        <Topbar/>
        <Header/>
        <div className="home"><Post post={post}/>
        <Sidebar/></div>
            
        </>
    )
}
