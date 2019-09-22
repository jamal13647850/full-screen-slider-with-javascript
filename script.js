window.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    slider();

    function slider() {
        let image = document.getElementsByClassName('image');
        for (let o of image) {
            o.style.display = "none";
        }
        count++;
        if (count > image.length) {
            count = 1;
        }
        image[count - 1].style.display = "block";
        setTimeout(slider, 2000);
    }
});