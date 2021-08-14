export const OptionalServices = (listItem) => {
    const $section = document.createElement("section");
    
    $section.classList.add("other-services");
    $section.innerHTML = `
        <h2 class="other-services__title">Servicios de los que disfrutarás</h2>
        
    `;

    listItem.map((item)=>{
        const $card = document.createElement("div"),
            $img = document.createElement("img"),
            $div = document.createElement("div"),
            $h3 = document.createElement("h3"),
            $p = document.createElement("p");

        $card.classList.add("other-services__card");
        $img.src = item.image;
        $img.alt = item.title;
        $h3.textContent = item.title;
        $p.textContent = item.paragraph;

        $div.appendChild($h3);
        $div.appendChild($p);
        $div.classList.add("other-services__content");

        $card.appendChild($img);
        $card.appendChild($div);

        
        $card.addEventListener("mouseover", (e)=>{
            if(window.innerWidth < 1050) return;
            $img.classList.add("imgServiceBright");
            $div.style.visibility = "visible";
            $div.style.opacity = "1";
        })
        $card.addEventListener("mouseout", (e)=>{
            if(window.innerWidth < 1050) return;
            $img.classList.remove("imgServiceBright");
            $div.style.visibility = "hidden";
            $div.style.opacity = "0";
        })

        return $section.appendChild($card);
    })


    

    return $section;
}


// const cardMouseOver = (e, index) => {
//     const $card = document.querySelectorAll(".other-services__card");
//     const $content = document.querySelectorAll(".other-services__content");
//     if(e.target === $card[index]){
//         $card[index].classList.add("imgServiceBright");
//         $content[index].style.visibility = "visible";
//         $content[index].style.opacity = "1";

//     }
// }