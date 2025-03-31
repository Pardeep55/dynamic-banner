(function() {
    const scriptTag = document.currentScript;
    const width = scriptTag.getAttribute("data-width") || "300px";
    const height = scriptTag.getAttribute("data-height") || "250px";
    const position = scriptTag.getAttribute("data-position") || "bottom-right";

    fetch("/api/banner?width=" + width + "&height=" + height + "&position=" + position)
        .then(response => response.json())
        .then(data => {
            const banner = document.createElement("a");
            banner.href = data.link;
            banner.target = "_blank";

            const img = document.createElement("img");
            img.src = data.imageUrl;
            img.alt = data.altText;
            img.style.width = width;
            img.style.height = height;
            img.style.position = "fixed";

            // Positioning
            if (position === "bottom-right") {
                img.style.bottom = "10px";
                img.style.right = "10px";
            } else if (position === "bottom-left") {
                img.style.bottom = "10px";
                img.style.left = "10px";
            } else if (position === "top-right") {
                img.style.top = "10px";
                img.style.right = "10px";
            } else if (position === "top-left") {
                img.style.top = "10px";
                img.style.left = "10px";
            }
            console.log(banner, img)
            banner.appendChild(img);
            document.body.appendChild(banner);
        })
        .catch(error => console.error("Error loading banner:", error));
})();
