import axios from 'axios';
import { useLocation ,Link} from 'react-router-dom'
import './singlepost.css'
import { useEffect, useState } from 'react';
import Topbar from '../topbar/Topbar';

export default function Singlepost() {
    const location = useLocation();
    const [post, setPost] = useState({});

    const res = location.pathname.split("/")[2]
    useEffect(() => {
        const func = async () => {
            const responce = await axios.get("http://localhost:5000/api/posts/" + res)
            setPost(responce.data)
        }
        func()
    }, [res])
    return (
    
    
        <div className="singlepost">
            <div className="singlepostinfoone">
                {post.img && (<img className="singlepostimg" src={post.img} alt="" className="singlepostimg" />)}

                <h1 className="singleposttitle">{post.title}
                    <div className="singlepostedit">
                        <i className="singleposticon far fa-edit"></i>
                        <i class="singleposticon far fa-trash-alt"></i>

                    </div>
                </h1>
                <div className="singlrpostinfotwo">
                    <span className="singlepostauthor"> author: <b><Link to={`/?name=${post.username}`} className="link">{post.username}</Link></b></span>
                    <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlepostdesc">{post.desc}</p>
            </div>
        </div>

  
    )
}
