export const MainServices = (props) => {
    const $section = document.createElement("section");

    $section.classList.add("main-services")
    $section.innerHTML = `
        <div class="main-services__img-container">
            <picture>
                <source srcset="${props.imgMobile}" media="(max-width: 480px)">
                <source srcset="${props.imgTablet}" media="(max-width: 780px)">
                <img class="main-services__img" srcset="${props.imgDefault}"/>
            </picture>
        </div>
        <div class="main-services__data-container">
            <h3>${props.title}</h3>
            <p>${props.paragraph1}</p>
            <p>${props.paragraph2}</p>
            <button>Ver más</button>
        </div>
    `

    return $section;
}