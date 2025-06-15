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
// モーダル
document.addEventListener("DOMContentLoaded", function () {
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const openBtns = document.querySelectorAll(".modalOpen");

// モーダルを開く
openBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute("href");
            modalImg.setAttribute("src", imgSrc);
            modal.style.display = "flex";
            document.body.classList.add("modal-open"); // スクロールを止める
        });
    });

    modal.addEventListener("click", function (e) {
        if (
            e.target.classList.contains("modalClose") || 
            e.target === modal
        ) {
            modal.style.display = "none";
            modalImg.setAttribute("src", "");
            document.body.classList.remove("modal-open"); // スクロールを戻す
            setTimeout(() => {
                modalImg.setAttribute("src", "");
            }, 300); // CSSのアニメ時間に合わせる
        }
    });
});