
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Header";

export default function HomPage({title="", children}){
    return(
        <div className = "">
            <Navbar/>
            <div className="banner1">
            <Banner/>
            </div>
            
            <div className="row content">
            <div className="col-12"><h3>{title}</h3></div>
                
                <hr/>
                <div className="col-12">{children}</div>
            </div>
            <Footer/>
        </div>

    );
}