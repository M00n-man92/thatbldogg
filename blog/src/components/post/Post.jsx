import './post.css'
import Posts from '../posts/Posts'
export default function post( {post}) {
    return (
        <div className="post">
            {post.map((p)=>(<Posts post={p}/>))}
           
          

        </div>
    )
}
