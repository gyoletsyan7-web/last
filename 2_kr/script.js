const flowers = [
    { name: "Розы", price: "350 руб./1 шт.", img: "./images/roses.jpeg" },
    { name: "Пионовидные розы", price: "650 руб./1 шт.", img: "/Users/macbook/Downloads/пионовидные розы.jpg" },
    { name: "Пионы", price: "850 руб./1 шт.", img: "/Users/macbook/Downloads/пионы.JPG" },
    { name: "Хризантемы", price: "450 руб./1 шт.", img: "/Users/macbook/Downloads/хризантемы.jpg" },
    { name: "Тюльпаны", price: "550 руб./1 шт.", img:"/Users/macbook/Downloads/тюльпан.jpg.webp" },
    { name: "Готовые букеты", price: "5000 руб./1 шт.", img: "/Users/macbook/Downloads/готовый букет.jpg" }
];

function renderFlowers() {
    const container = document.getElementById("flower-list");
    if (!container) return;

    flowers.forEach(flower => {
        const card = `
        <div class="col-md-4 mb-4 d-flex justify-content-center">
            <div class="flower-card">
                <img src="${flower.img}" class="img-fluid rounded mb-2">
                <h5>${flower.name}</h5>
                <p>${flower.price}</p>
                <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p
            </div>
        </div>`;
        container.innerHTML += card;
    });
}
renderFlowers();
