import { Banner } from "../dummyComponents/banner.js";
import { MainDescription } from "../dummyComponents/MainDescription.js";
import { ListingServices } from "../dummyComponents/ListingMainServices.js";
import { BannerDataEvent } from "./BannerDataEvent.js";
import { MainDescriptionEvent } from "./MainDescriptionEvent.js";

export const Event = () => {
    const $event = document.createElement("div");
    
    $event.appendChild(Banner(BannerDataEvent));
    $event.appendChild(MainDescription(MainDescriptionEvent))
    // ListingServices("events","space")
    
    
    return $event;
}