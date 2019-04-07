var images = document.getElementsByClassName("gallery-img");

for (let index = 0; index < images.length; index++) {
    images[index].addEventListener("click", function (event) {
        var overlay = document.createElement("div");
        overlay.className = "gallery-image-overlay";

        var html_string = "<button type=\"button\" class=\"fas fa-times btn-gallery-image-overlay-close\"></button><img class=\"gallery-image-overlay-image\" src=\"" + event.srcElement.src + "\"/>";
        overlay.innerHTML = html_string;

        overlay.getElementsByClassName("btn-gallery-image-overlay-close")[0].addEventListener("click", function (event) {
            event.srcElement.parentElement.remove();
        });

        document.getElementsByTagName("body")[0].appendChild(overlay);
    });
}

function sort_all() {
    activate_sort_button("btn-all");

    var images = document.getElementsByClassName("gallery-img");
    var col = document.getElementById("gallery");
    col.classList.add("animate");
    activate_category_images(images, "", 300, true);
    setTimeout(function () {
        col.classList.remove("animate");
    }, 300);
}

function sort_animals() {
    activate_sort_button("animals");

    var images = document.getElementsByClassName("gallery-img");
    var col = document.getElementById("gallery");
    col.classList.add("animate");
    activate_category_images(images, "animals", 300, false);
    setTimeout(function () {
        col.classList.remove("animate");
    }, 300);
}

function sort_landscape() {
    activate_sort_button("landscape");

    var images = document.getElementsByClassName("gallery-img");
    var col = document.getElementById("gallery");
    col.classList.add("animate");
    activate_category_images(images, "landscape", 300, false);
    setTimeout(function () {
        col.classList.remove("animate");
    }, 300);
}

function sort_category(category){
    activate_sort_button("btn-" + category);

    var images = document.getElementsByClassName("gallery-img");
    var col = document.getElementById("gallery");
    col.classList.add("animate");
    activate_category_images(images, category, 300, false);
    setTimeout(function () {
        col.classList.remove("animate");
    }, 300);
}

function activate_sort_button_old(btn_name) {
    var btn_all = document.getElementById("btn-all");
    var btn_landscape = document.getElementById("btn-landscape");
    var btn_animals = document.getElementById("btn-animals");

    if (btn_name == "all") {
        btn_all.classList.add("active");
        btn_landscape.classList.remove("active");
        btn_animals.classList.remove("active");
    } else if (btn_name == "landscape") {
        btn_all.classList.remove("active");
        btn_landscape.classList.add("active");
        btn_animals.classList.remove("active");
    } else if (btn_name == "animals") {
        btn_all.classList.remove("active");
        btn_landscape.classList.remove("active");
        btn_animals.classList.add("active");
    }
}

function activate_sort_button(btn_name) {
    var btns = document.getElementsByClassName("sort-button");

    for (let index = 0; index < btns.length; index++) {
        if (btn_name == btns[index].id)    {
            btns[index].classList.add("active");
        }else{
            btns[index].classList.remove("active");
        }
    }
}

function activate_category_images(image_set, category, timeout, set_all){
    setTimeout(function () {
        Array.prototype.forEach.call(image_set, function (image) {
            if (image.classList.contains('cat-' + category) || set_all) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }, timeout);
}