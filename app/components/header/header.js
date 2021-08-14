

export const Header = () => {
    const $header = document.createElement("header"),
        $logoDiv = document.createElement("div"),
        $logo = document.createElement("h1"),
        $nav = document.createElement("nav"),
        $menu = document.createElement("ul");

    $logo.textContent = "EAGLE HOTEL";
    $logoDiv.classList.add("logo");
    $logoDiv.appendChild($logo);


    const listMenu = [
        {
            item:"HOME",
            href:"#/"
        },
        {
            item:"HOTEL",
            href:"#/hotel"
        },
        {
            item:"EVENT",
            href:"#/event"
        },
        {
            item:"RESERVAS",
            href:"#/reservas"
        },
        {
            item:"UBICACION",
            href:"#/ubicacion"
        }
    ]


    listMenu.map((item) =>{
        const $li = document.createElement("li");
        $li.classList.add("menu__item")
        $li.innerHTML = `<a href="${item.href}">${item.item}</a>`;
        return $menu.appendChild($li);
    })



    $menu.classList.add("menu");
    $nav.classList.add("nav");
    $nav.appendChild($menu);
    $header.classList.add("header");
    $header.appendChild($logoDiv);
    $header.appendChild($nav);


    return $header;





}