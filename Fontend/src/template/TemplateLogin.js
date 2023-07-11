
import Navbar from "../component/Header";




export default function TemplateLogin({title="", children}){
    return(
        <div className = "container">
          
            <div className="row content">
                <div className="col-12">{children}</div>
            </div>
          
        </div>

    );
}