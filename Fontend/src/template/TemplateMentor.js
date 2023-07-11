import { Row , Col} from "react-bootstrap";
import SideBarMentor from "../component/SidebarMentor";



export default function TemplateMentor({title="", children}){
    return(
        <Row>
            <Col md={2} xs={2}>
           <SideBarMentor/>
            </Col>
            <Col md={9} xs={10}>
            <div style={{marginTop:"70px"}}>{children}</div>
            </Col>
        </Row>
            

    );
}