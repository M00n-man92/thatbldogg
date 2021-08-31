import "./topbar.css"
import {Link} from "react-router-dom";
export default function Topbar() {
    const user=false;
    return (
        <> <div className="top">
            <div className="topright">
                <i className="topicons fab fa-facebook"></i>
                <i className="topicons fab fa-pinterest"></i>
                <i className="topicons fab fa-twitter"></i>
                <i className="topicons fab fa-instagram"></i>
                </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem">
                        <Link to="/" className="link">Home</Link></li>
                    <li className="toplistitem"><Link to="/contact" className="link">Contact</Link></li>
                    <li className="toplistitem"><Link to="/about" className="link" >About</Link></li>
                    <li className="toplistitem"><Link to="/blog" className="link">Blog</Link></li>
                </ul>

            </div>
          <div className="topleft">
{
    user?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9VCuPSieEqtrz6jCf1YE3HKDnO1BzK0SVw&usqp=CAU" alt="" className="topimage" />):(<><li className="toplistitem1"><Link to="/login" className="link">Login</Link></li><li className="toplistitem1"><Link to="/register" className="link">Register</Link></li></>)
}

    
    <i className="topsearchimage"><i class="fas fa-search"></i></i>
          </div>

        </div>

        </>
    )
}
