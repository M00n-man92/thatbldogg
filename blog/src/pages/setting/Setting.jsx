import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Setting() {
    return (<>
    <div className="settingwrapper">
        <div className="setting">
          
            <div className="settingcat">
                <div className="settingtitle">
                    <span className="settingtitleitem">Update your profile</span>
                    <span className="settingtitleitem2">Delete </span>
                </div>
                <form  className="settingform"> <label className="settingtext">Profile Image</label>
                <div className="settingpp"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHvtiSUvBn70nkROax_-ckqY2kyBFHoSOlw&usqp=CAU" alt="" className="settingimg" />
               <label htmlFor="fileinput">
               <i className="settingiconitem fas fa-user-astronaut"></i></label> 
               <input type="file" id="fileinput" className="settinginput" style={{display:'none'}} /></div>
               <label >User Name</label>
               <input type="text" className="settinginput" placeholder="username"/>
               <label >Email</label>
               <input type="email" className="settinginput" placeholder="email"/>
               <label >Password</label>
               <input type="password" className="settinginput" placeholder="password"/>
               <button className="settingsubmit">Change</button>

               </form>
               
               
            </div>
        </div>
        <Sidebar/></div>
        
        </>
    )
}
