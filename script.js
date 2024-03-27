document.addEventListener("DOMContentLoaded", function() {
    var x = document.querySelector("#cross");
    var box = document.querySelector("#box");
    var btn = document.querySelector("#btn");
    var submit = document.querySelector("#submit");

    x.addEventListener("click", function() {
        box.style.display = "none";
        window.location.href = "index.html";
    });

    btn.addEventListener("click", function() {
        window.location.href = "create.html";
    });

    submit.addEventListener("click", function() {
        window.location.href = "index.html";
        submit.style.backgroundColor = "red"
    });
});