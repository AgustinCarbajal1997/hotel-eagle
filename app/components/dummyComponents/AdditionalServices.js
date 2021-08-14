export const AdditionalServices = (props) => {
    const $section = document.createElement("section");
    $section.classList.add("additonal-services")
    $section.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${props.backgroundImage})`
    $section.innerHTML = `
        <div class="additonal-services__content-container">
            <h2>${props.title}</h2>
            <p>${props.paragraph1}</p>
            <p>${props.paragraph2}</p>
        </div>
        <div class="additonal-services__img-container">
            <div class="additional-services__containerImg--photo"><img src="${props.image1}" alt="image"></div>
            <div class="additional-services__containerImg--photo"><img src="${props.image2}" alt=""></div>
            <div class="additional-services__containerImg--photo"><img src="${props.image3}" alt=""></div>
        </div>
    `;

    return $section;
}