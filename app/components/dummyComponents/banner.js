export const Banner = ({ mobile, tablet, desktop,title }) => {
    const $section = document.createElement("section");

    $section.classList.add("banner-section");
    $section.innerHTML = `
        <picture >
            <source srcset="${mobile}" media="(max-width: 480px)">
            <source srcset="${tablet}" media="(max-width: 780px)">
            <img class="banner-section-picture" srcset="${desktop}">
        </picture>
        <h2 class="banner__text">${title}</h2>
    `;


    return $section;

}