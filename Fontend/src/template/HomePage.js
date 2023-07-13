
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Header";

export default function HomPage({ title = "", children }) {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <div className="banner1">
                <Banner />
            </div>
            <div className="col-12 p-0">{children}</div>
            <Footer />
        </div>

    );
}