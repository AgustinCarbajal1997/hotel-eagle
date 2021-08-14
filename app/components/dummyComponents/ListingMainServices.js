export const ListingServices = async (endpoint) => {
    try {
        const reponse = await fetch(`https://eagle-hotel-c85d8-default-rtdb.firebaseio.com/${endpoint}/.json`);
        const data = await reponse.json();
    
        const $placeToInsert = document.querySelector(".section-description");
        
        const $section = document.createElement("section");

        data.map(item =>{
            const $divCard = document.createElement("div"),
                $divImg = document.createElement("div"),
                $img = document.createElement("img"),
                $divContent = document.createElement("div"),
                $h3 = document.createElement("h3"),
                $button = document.createElement("button");

                
                $img.src = item.image;
                $img.alt = item.name;
                $divImg.classList.add("mainService__img");
                $divImg.appendChild($img);

                $h3.classList.add("titleCard");
                $h3.textContent = item.name;
                $button.classList.add("buttonCard");
                $button.textContent = "VER MÁS";
                $divContent.classList.add("mainServiceContent");
                $divContent.appendChild($h3);
                $divContent.appendChild($button);

                $divCard.classList.add("mainService-card");
                $divCard.appendChild($divImg);
                $divCard.appendChild($divContent);
                $divCard.addEventListener("mouseover",cardMouseOver);
                $divCard.addEventListener("mouseout",cardMouseOut)

                $section.appendChild($divCard);
                $section.classList.add("mainService-section");


                return $section.appendChild($divCard);

            })
            
            return $placeToInsert.insertAdjacentElement("afterend",$section);

    } catch (error) {
        console.log(error)
    }
    
    
}

const cardMouseOver = (e) => {
    e.currentTarget.querySelector(".mainServiceContent").classList.add("mainServiceContentActive");
    e.currentTarget.querySelector(".buttonCard").classList.add("buttonCardActive");
}
const cardMouseOut = (e) => {
    e.currentTarget.querySelector(".mainServiceContent").classList.remove("mainServiceContentActive");
    e.currentTarget.querySelector(".buttonCard").classList.add("buttonCardActive");
}