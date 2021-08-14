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
        
    }else if(hash === "#/hotel"){
        $main.appendChild(Hotel())
    }else if(hash === "#/event"){
        $main.appendChild(Event())
    }
        



}