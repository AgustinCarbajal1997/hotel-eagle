import { MainServiceItem } from "./dummyComponents/MainServiceItem.js";
import { Event } from "./event/Event.js";
import { Home } from "./home/home.js";
import { Hotel } from "./hotel/Hotel.js";

export const Router = () => {
    let { hash } = location;
    let $main = document.getElementById("main");

    window.scroll({
        top:0,
        behavior:"auto"
    });
    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        $main.appendChild(Home())
        console.log(location.pathname)
        
    }else if(hash === "#/hotel"){
        $main.appendChild(Hotel())
        console.log(location)
    }else if(hash === "#/event"){
        $main.appendChild(Event())
    }else if(hash.includes("room")){
        MainServiceItem("rooms")
    }else if(hash.includes("space")){
        MainServiceItem("events")
    }
        



}