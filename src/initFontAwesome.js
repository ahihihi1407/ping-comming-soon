import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faTwitterSquare, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faInstagram);
}
export default initFontAwesome;