let textarea = document.querySelector(".goal textarea");
let editIcon = document.querySelector(".goal .icon.fa-edit");

editIcon.addEventListener("click", function() {
    textarea.removeAttribute("readonly");
    textarea.focus();
    textarea.setSelectionRange(0, 0);
});

var saveButton = document.getElementById("saveButton");
var removeButton = document.getElementById("removeButton");
saveButton.addEventListener("click", function() {
    window.location.href = "kpilist.html";
});
removeButton.addEventListener("click", function() {
    window.location.href = "kpilist.html";
});
