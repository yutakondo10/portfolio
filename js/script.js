document.addEventListener("DOMContentLoaded", function () {
    // ヘッダーを読み込む
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    // フッターを読み込む
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
