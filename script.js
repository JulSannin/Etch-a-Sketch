document.addEventListener('DOMContentLoaded', function () {

    const container = document.querySelector('.container');
    const inputMeshSize = document.querySelector('.mesh-size');
    const buttonSubmit = document.querySelector('.submit');

    buttonSubmit.addEventListener('click', function () {

        const value = inputMeshSize.value;

        if (value < 4 || value > 100) {
            return;
        }

        container.innerHTML = '';

        const meshSize = value * value;

        for (let i = 0; i < meshSize; i++) {
            const flex_element = document.createElement('div');
            flex_element.classList.add('flex-element');
            flex_element.style.width = `calc(100% / ${value})`;
            flex_element.style.height = `calc(100% / ${value})`;
            container.appendChild(flex_element);
        }

    })

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        return rgb;
    }

    container.addEventListener('mouseover', function (event) {
        const target = event.target;

        if (target.classList.contains('flex-element')) {
            target.style.background = randomColor();
        }
    });
});