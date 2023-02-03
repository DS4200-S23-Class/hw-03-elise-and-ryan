let count = 0;

function inc() {
    let text = document.getElementById("content");
    count = count + 1000;
    text.innerHTML = "Love for Data Science: " + count;
}