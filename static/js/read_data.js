let content = document.getElementById("cover");

function search_vehicle() {
    search_val = document.getElementById("search").value;
    if (search_val != "") {
        console.log("Hey! I'm in search_vehicle()", content);
        content.style.position = "absolute";
        content.style.top = "100px";
        content.style.transition = "4s";
    }
}