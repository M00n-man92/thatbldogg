import './single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'
import Topbar from '../../components/topbar/Topbar'
export default function Singles() {
    return (
        <>
        <Topbar/>
        <div className="single"><Singlepost/><Sidebar/></div>

           
        </>
    )
}
