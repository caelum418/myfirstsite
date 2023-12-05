document.getElementById("extendmap").addEventListener("click", function () {
    var mapElement = document.getElementById("map");
    var currentWidth = (parseFloat(getComputedStyle(mapElement).width) / window.innerWidth) * 100;

    if (currentWidth < 50) {
        // widthが50%未満の場合
        mapElement.style.width = "60%";
        mapElement.style.height = "90%";
    } else {
        // widthが50%以上の場合
        mapElement.style.width = "45%";
        mapElement.style.height = "55%";
    }
});z