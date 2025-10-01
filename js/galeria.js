document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".gallery-slider");
    const gallerySection = document.querySelector(".gallery-section");
    const prevBtn = document.querySelector(".gallery-arrow.left");
    const nextBtn = document.querySelector(".gallery-arrow.right");

    let firstUpdate = true;

    // Datos
    const galleryData = [
        {
            rubro: "ARQUITECTURA",
            obra: "Farnsworth House",
            artista: "Ludwig Mies van der Rohe",
            ano: "1951",
            desc: "Casa de vidrio y acero que encarna el 'menos es más' en arquitectura.",
            img: "../imagenes/farnsworth-house.jpg"
        },
        {
            rubro: "MODA",
            obra: "Minimal Collection",
            artista: "Calvin Klein",
            ano: "1990s",
            desc: "Ropa de líneas puras y colores neutros que llevó el minimalismo a la moda global.",
            img: "../imagenes/minimal-collection.jpg"
        },
        {
            rubro: "PINTURA",
            obra: "Die Fahne Hoch",
            artista: "Frank Stella",
            ano: "1959",
            desc: "Pintura en franjas paralelas que eliminó la ilusión de profundidad.",
            img: "../imagenes/die-fahne-hoch.jpg"
        },
        {
            rubro: "ESCULTURA",
            obra: "Untitled (Stacks)",
            artista: "Donald Judd",
            ano: "1967",
            desc: "Columnas de módulos metálicos repetidos, símbolo del orden minimalista.",
            img: "../imagenes/untitled-stacks.jpg"
        },
        {
            rubro: "ILUMINACIÓN",
            obra: "Monument for V. Tatlin",
            artista: "Dan Flavin",
            ano: "1964",
            desc: "Instalación con tubos fluorescentes industriales que transforman el espacio con luz.",
            img: "../imagenes/monument-for-v-tatlin.jpg"
        },
        {
            rubro: "DISEÑO GRÁFICO",
            obra: "Bauhaus Ausstellung",
            artista: "Herbert Bayer",
            ano: "1923",
            desc: "Cartel de la exposición Bauhaus en Weimar, con tipografía geométrica y composición clara.",
            img: "../imagenes/bauhaus-ausstellung.jpg"
        },
        {
            rubro: "DISEÑO INDUSTRIAL",
            obra: "Silla Barcelona",
            artista: "Ludwig Mies van der Rohe",
            ano: "1929",
            desc: "Ícono del diseño moderno, líneas simples y materiales nobles.",
            img: "../imagenes/silla-barcelona.jpg"
        },
        {
            rubro: "ARQUITECTURA",
            obra: "Church of the Light",
            artista: "Tadao Ando",
            ano: "1989",
            desc: "Iglesia japonesa donde el vacío y la luz se convierten en protagonistas.",
            img: "../imagenes/church-of-the-light.jpg"
        },
        {
            rubro: "ESCULTURA",
            obra: "Equivalent VIII",
            artista: "Carl Andre",
            ano: "1966",
            desc: "Instalación de 120 ladrillos dispuestos en el suelo, redefiniendo qué puede ser arte.",
            img: "../imagenes/equivalent-viii.jpg"
        },
        {
            rubro: "PINTURA",
            obra: "Concentric Squares",
            artista: "Frank Stella",
            ano: "1966",
            desc: "Serie de pinturas con cuadrados concéntricos en colores planos y formas geométricas claras.",
            img: "../imagenes/concentric-squares.jpg"
        },
        {
            rubro: "INSTALACIÓN",
            obra: "Wall Drawing #51",
            artista: "Sol LeWitt",
            ano: "1970",
            desc: "Mural geométrico creado a partir de instrucciones, donde el concepto prima sobre la ejecución.",
            img: "../imagenes/wall-drawing-51.jpg"
        },
        {
            rubro: "ARQUITECTURA",
            obra: "Seagram Building",
            artista: "Ludwig Mies van der Rohe & Philip Johnson",
            ano: "1958",
            desc: "Rascacielos en Nueva York que ejemplifica la pureza formal y estructural del minimalismo arquitectónico.",
            img: "../imagenes/seagram-building.jpg"
        },
        {
            rubro: "MODA",
            obra: "Uniqlo U Collection",
            artista: "Christophe Lemaire",
            ano: "2016",
            desc: "Ropa básica de líneas simples y paleta neutra, acercando el minimalismo a la vida cotidiana.",
            img: "../imagenes/uniqlo-u-collection.jpg"
        }
    ];

    // Render dinámico
    galleryData.forEach((item, i) => {
        const div = document.createElement("div");
        div.classList.add("gallery-item");
        if (i === 0) div.classList.add("active");
        div.dataset.rubro = item.rubro;
        div.dataset.obra = item.obra;
        div.dataset.artista = item.artista;
        div.dataset.ano = item.ano;
        div.dataset.desc = item.desc;
        div.innerHTML = `<img src="${item.img}" alt="${item.obra}">`;
        slider.appendChild(div);
    });

    let items = document.querySelectorAll(".gallery-item");

    function updateActive() {
        items.forEach(item => item.classList.remove("active"));
        const centerIndex = Math.floor(items.length / 2);
        items[centerIndex].classList.add("active");

        const active = items[centerIndex];
        const infoTop = document.getElementById("gallery-info-top");
        const infoBottom = document.getElementById("gallery-info-bottom");

        infoTop.innerHTML = `
            <h2>${active.dataset.rubro}</h2>
            <h3>${active.dataset.obra}</h3>
        `;
        infoBottom.innerHTML = `
            <p class="nombre-ano">${active.dataset.artista} (${active.dataset.ano})</p>
            <p class="descripcion-obra">${active.dataset.desc}</p>
        `;
    }

    function animateSlide(direction) {
        gallerySection.classList.add("transitioning");

        const currentActive = document.querySelector(".gallery-item.active");
        currentActive.classList.remove("active");

        let newActive;
        if (direction === "next") {
            newActive = currentActive.nextElementSibling || slider.firstElementChild;
        } else {
            newActive = currentActive.previousElementSibling || slider.lastElementChild;
        }
        newActive.classList.add("active");

        if (direction === "next") {
            slider.style.transition = "transform 1s ease";
            slider.style.transform = "translateX(-22.2%)";

            slider.addEventListener("transitionend", () => {
                slider.style.transition = "none";
                slider.appendChild(slider.firstElementChild);
                slider.style.transform = "translateX(0)";
                items = document.querySelectorAll(".gallery-item");
                updateActive();
                gallerySection.classList.remove("transitioning");
            }, { once: true });

        } else {
            slider.style.transition = "none";
            slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
            slider.style.transform = "translateX(-22.2%)";

            requestAnimationFrame(() => {
                slider.style.transition = "transform 1s ease";
                slider.style.transform = "translateX(0)";
            });

            slider.addEventListener("transitionend", () => {
                items = document.querySelectorAll(".gallery-item");
                updateActive();
                gallerySection.classList.remove("transitioning");
            }, { once: true });
        }

        resetAutoplay();
    }

    function showNext() { animateSlide("next"); }
    function showPrev() { animateSlide("prev"); }

    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Autoplay
    let autoplay = setInterval(showNext, 15000);
    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(showNext, 15000);
    }

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const caption = document.querySelector(".lightbox-caption");

    slider.addEventListener("click", e => {
        const active = document.querySelector(".gallery-item.active");
        if (active.contains(e.target)) {
            clearInterval(autoplay);
            lightbox.style.display = "flex";
            lightboxImg.src = active.querySelector("img").src;
            caption.textContent = `${active.dataset.obra} (${active.dataset.ano})`;
        }
    });

    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            resetAutoplay();
        }
    });

    updateActive();
});
