import { Banner } from "../dummyComponents/banner.js";
import { BannerDataHome } from "./bannerDataHome.js";
import { MainDescription } from "../dummyComponents/MainDescription.js";
import { MainDescriptionHome } from "./MainDescriptionHome.js";
import { MainServices } from "./MainServices.js";
import { MainServicesRestaurant } from "./MainServicesRestaurant.js";
import { MainServicesEvent } from "./MainServicesEvent.js";
import { MainServicesHotel } from "./MainServicesHotel.js";
import { AdditionalServices } from "../dummyComponents/AdditionalServices.js";
import { AdditionalServicesDataHome } from "./AdditonalServicesDataHome.js";
import { OptionalServices } from "../dummyComponents/OptionalServices.js";
import { OptionalServicesDataHome } from "./OptionalServicesDataHome.js";

export const Home = () => {
    const $home = document.createElement("div");
    
    $home.appendChild(Banner(BannerDataHome))
    $home.appendChild(MainDescription(MainDescriptionHome))
    $home.appendChild(MainServices(MainServicesHotel));
    $home.appendChild(MainServices(MainServicesRestaurant));
    $home.appendChild(MainServices(MainServicesEvent));
    $home.appendChild(AdditionalServices(AdditionalServicesDataHome));
    $home.appendChild(OptionalServices(OptionalServicesDataHome))
    return $home;
}