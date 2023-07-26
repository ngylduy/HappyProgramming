import { Row , Col} from "react-bootstrap";

import SideBarUser from "../component/SideBarUser";

export default function TemplateUser({title="", children}){
    return(
        <Row>
            <Col md={2} xs={2}>
            <SideBarUser/>
            </Col>
            <Col md={9} xs={10}>
            <div style={{marginTop:"45px"}}>{children}</div>
            </Col>
        </Row>
            

    );
}