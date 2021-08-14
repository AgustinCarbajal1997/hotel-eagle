import { Banner } from "../dummyComponents/banner.js";
import { MainDescription } from "../dummyComponents/MainDescription.js";
import { AdditionalServices } from "../dummyComponents/AdditionalServices.js";
import { AdditionalServicesDataHotel } from "./AdditionalServicesDataHotel.js";
import { BannerDataHotel } from "./bannerDataHotel.js";
import { MainDescriptionHotel } from "./MainDescriptionHotel.js";
import { OptionalServices } from "../dummyComponents/OptionalServices.js";
import { OptionalServicesDataHotel } from "./OptionalServicesDataHotel.js";
import { ListingServices } from "../dummyComponents/ListingMainServices.js";

export const Hotel = () => {
    const $hotel = document.createElement("div");
    
    $hotel.appendChild(Banner(BannerDataHotel))
    $hotel.appendChild(MainDescription(MainDescriptionHotel))
    ListingServices("rooms")
    $hotel.appendChild(AdditionalServices(AdditionalServicesDataHotel))
    $hotel.appendChild(OptionalServices(OptionalServicesDataHotel))
    
    return $hotel;
}