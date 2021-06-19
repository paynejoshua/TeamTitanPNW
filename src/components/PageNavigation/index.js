import Home from "../../pages/Home.js";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs.js";
import Events from "../../pages/Events.js";
import Media from "../../pages/Media.js";
import MeetTheTeam from "../../pages/MeetTheTeam.js";

// The following should be imported in future DB version of site:
// import AdminLogin from "../../pages/AdminLogin";




const PageNav = {
    "home": Home,
    "aboutUs": AboutUs,
    "contactUs": ContactUs,
    "events": Events,
    "media": Media,
    "meetTheTeam": MeetTheTeam,
        // The following item will be added in future DB version of site:
    // "adminLogin": AdminLogin,
}



export default PageNav