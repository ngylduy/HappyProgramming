import { Row , Col} from "react-bootstrap";
import SideBar from "../component/SideBar";

export default function TemplateAdmin({title="", children}){
    return(
        <Row>
            <Col md={2} xs={2}>
            <SideBar/>
            </Col>
            <Col md={9} xs={10}>
            <div style={{marginTop:"70px"}}>{children}</div>
            </Col>
        </Row>
            

    );
}
