import SideBar from "../component/SideBar";

export default function TemplateAdmin({title="", children}){
    return(
        <div className = "">
           
            <SideBar/>
            <div className="tieude">
                <div className="col-12">{children}</div>
            </div>
            
            
           
        </div>

    );
}