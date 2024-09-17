const catalog = [
    {
        name: 'Кроссовка Жордан орижинал',
        img: './img/balloons.png',
        price: 500,
        oldPrice: 1000, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'АДидас Канье Уэст',
        img: './img/balloons.png',
        price: 750,
        oldPrice: 1500, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Адидас Кампус',
        img: './img/balloons.png',
        price: 900,
        oldPrice: 1900, 
        currency: '$',
        description: 'Какое-то описание',
    },
    {
        name: 'Кроксы',
        img: './img/balloons.png',
        price: 1200,
        oldPrice: 3500, 
        currency: '$',
        description: 'Какое-то описание',
    },
]


const box3 = document.querySelector('.box3')
 const bb = catalog.map(bb => {
    return`
    <div class="bb">
    <img src=${bb.img} alt="">
    <h4${bb.name}</h4>
    <p>${bb.price}</p>
    <p>${bb.price}</p>
    <button class="btn">Заказать</button>
    </div>
    `
 })

 box3.innerHTML = bb
