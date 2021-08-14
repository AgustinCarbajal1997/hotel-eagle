export const MainDescription = (props) => {
    const $section = document.createElement("section"),
        $divDescription = document.createElement("div"),
        $videoDescriptionContainer = document.createElement("div");

    $section.classList.add("section-description");
    $divDescription.classList.add("div-description");
    $divDescription.innerHTML = `
        <div class="content-description">
            <h2 class="hotel__title">${props.title}</h2>
            <h3>${props.subtitle}</h3>
            <p>${props.paragraph1}</p>
            <p>${props.paragraph2}</p>
            <p>${props.paragraph3}</p>
        </div>
    `;

    $videoDescriptionContainer.innerHTML = `
        <div class="video-description">
            <video src="${props.video}" muted controls autoplay loop></video>
        </div>
    `;
    $videoDescriptionContainer.classList.add("video-description-container");
    $divDescription.appendChild($videoDescriptionContainer);

    document.addEventListener("mouseover", e=>{
        const video = document.querySelector(".video-description video");
        if(e.target === video) video.play();
    })

    window.addEventListener("resize",e =>{
        const $videoDescription = document.querySelector(".video-description-container");
        if(e.currentTarget.innerWidth < 1050 ) $divDescription.removeChild($videoDescription);
        if(e.currentTarget.innerWidth > 1050 ) $divDescription.appendChild($videoDescriptionContainer);
    })


    $section.appendChild($divDescription);

    return $section;

}