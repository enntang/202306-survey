
// lightbox
var modal = document.getElementById("lightboxModal");
var trigger = document.getElementById("lightboxmodalTrigger");
trigger.onclick = function () {
    modal.style.display = "flex";
}
var closeModal = document.getElementById("closeModal");
lightboxModal.onclick = function () {
    modal.style.display = "none";
}
closeModal.onclick = function () {
    modal.style.display = "none";
}

// rating
var ratingModal = document.getElementById("ratingModal");
var trigger2 = document.getElementById("ratingmodalTrigger");
trigger2.onclick = function () {
    ratingModal.style.display = "flex";
}
var closeModal = document.getElementById("closeratingModal");
closeModal.onclick = function () {
    ratingModal.style.display = "none";
}
