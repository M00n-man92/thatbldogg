import './blog.css'
import Topbar from '../../components/topbar/Topbar'
export default function Blog() {
    return (
    <>
    <Topbar/>
        <div className="write">
             <div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHvtiSUvBn70nkROax_-ckqY2kyBFHoSOlw&usqp=CAU" alt="" className="writeimg" />
             <label htmlFor="fileinput" className="writegrouplabel"><i className="writeicon fas fa-plus"></i></label>
            </div>
             <form  className="writeform">
                <div className="writeformgroup">
                   
                   
                    <input type="file" id="fileinput" style={{display:'none'}}/>
                    <input type="text" className="writeformtext" placeholder="Title"/>
                </div>
                <div className="writeformgroup">
                   <textarea  className="writeformtext1" placeholder="this will tell your story..." type="text"></textarea>
                </div>
                <button className="writeformsubmit">Publish</button>
            </form>
            
        </div>
</>    )
}
