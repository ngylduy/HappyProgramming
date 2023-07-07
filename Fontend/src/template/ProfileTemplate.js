
import Footer from "../component/Footer";
import Navbar from "../component/Header";

export default function ProfileTemplate({title="", children}){
    return(
        <div className = "container-fluid">
            <Navbar/>
            
            
            <div className="row content">
            <div className="col-12"><h3>{title}</h3></div>
                
                <hr/>
                <div className="col-12">{children}</div>
            </div>
            <Footer/>
        </div>

    );
}