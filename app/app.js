import { Header } from "./components/header/header.js";
import { Main } from "./components/main/main.js";
import { Router } from "./components/Router.js";

const $root = document.getElementById("root");
const App = () => {

    $root.innerHTML = ``;
    $root.appendChild(Header())
    $root.appendChild(Main());

    Router();
    
    return $root;
}

export default App;