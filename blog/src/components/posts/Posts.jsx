import './posts.css'
import {Link} from "react-router-dom"
export default function Posts({post}) {
    return (
        <div className="posts">
{post.photo && (<img src={post.photo} />)}
            
            <div className="postsinfo">
                <div className="postscat">
                    {post.catagory.map((c)=>( <span className="poststitle">{c} </span>))}
                   
                    
                </div>
                <Link to={`/posts/${post._id}`} className="link"> <span className="title">{post.title}</span></Link>
               
                <hr />
                <span className="date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postsdescription">{post.desc}</p>
        </div>

    )

}
