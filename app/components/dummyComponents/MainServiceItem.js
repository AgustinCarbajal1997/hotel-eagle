export const MainServiceItem = async (path) => {
    try {
        const { hash } = location;
        const endpoint = hash.split("/")[hash.split("/").length-1].split("-").slice(1).join("-");
        const response = await fetch(`https://eagle-hotel-c85d8-default-rtdb.firebaseio.com/${path}/${endpoint}/.json`);
        const data = await response.json()
        console.log(data)
        const $placeToInsert = document.querySelector("#main");

        const $section = document.createElement("section"),
            $divCarousel = document.createElement("div"),
            $divContent = document.createElement("div"),
            $divBigImage = document.createElement("div"),
            $img = document.createElement("img"),
            $divTinyImages = document.createElement("div"),
            $title = document.createElement("h2"),
            $description = document.createElement("p"),
            $divDetails = document.createElement("div"),
            $divBook = document.createElement("div"),
            $divDetailsData = document.createElement("div"),
            $titleDetails = document.createElement("h3"),
            $detailsList = document.createElement("ul");

            $img.src = data.image[0];
            $img.alt = data.name;
            $divBigImage.classList.add("service-view-carousel-bigImage")
            $divBigImage.appendChild($img);
            $divTinyImages.classList.add("service-view-carousel-tinyImages");
            
            data.image.map((item, index)=>{
                const $divTinyImageView = document.createElement("div"),
                    $tinyImage = document.createElement("img");
                $tinyImage.src = item;
                $tinyImage.alt = `tiny-image-${index}`;
                $divTinyImageView.dataset.source = item
                $divTinyImageView.appendChild($tinyImage);
                $divTinyImageView.addEventListener("click",onChangeImageHandler)

                return $divTinyImages.appendChild($divTinyImageView);
            })

            
            $divCarousel.classList.add("service-view-carousel");
            $divCarousel.appendChild($divBigImage);
            $divCarousel.appendChild($divTinyImages);







            $title.textContent = data.name;
            $description.textContent = data.description;
            $divContent.classList.add("service-view-content");
            $divContent.appendChild($title);
            $divContent.appendChild($description);

            data.caracteristicas.map((item) => {
                const $li = document.createElement("li");
                $li.innerHTML = `<p>${item}</p>`;
                return $detailsList.appendChild($li);
            })
            $divDetails.classList.add("service-view-details");
            $titleDetails.textContent = "Servicios";
            $divDetailsData.appendChild($titleDetails);
            $divDetailsData.appendChild($detailsList);

            $divDetailsData.classList.add("service-view-details-data");
            $divDetails.appendChild($divDetailsData);
            $divBook.classList.add("service-view-details-book");
            $divDetails.appendChild($divBook);



            $section.classList.add("section-service-view");
            $section.appendChild($divCarousel);
            $section.appendChild($divContent);
            $section.appendChild($divDetails);

            return $placeToInsert.appendChild($section)


    } catch (error) {
     console.log(error)   
    }
}


const onChangeImageHandler = (e) => {
    const $bigImage = document.querySelector(".service-view-carousel-bigImage img");
    $bigImage.src = e.currentTarget.dataset.source;
}