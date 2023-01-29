//main and body
let body = document.querySelector('body')
let main = document.createElement('main')

//header create
let header = document.createElement('header')
//left
let left = document.createElement('div')
let img1 = document.createElement('img')
let img2 = document.createElement('img')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
//right
let right= document.createElement('div')
let p1r = document.createElement('p')
let p2r = document.createElement('p')
let imgR = document.createElement('img')
let p3r = document.createElement('p')

//header styling div 
left.classList.add('left')
right.classList.add('right')

//header styling img
img1.classList.add('img1')
img2.classList.add('img2')
imgR.classList.add('imgR')

//header left text 
p1.innerHTML = 'Мероприятие'
p2.innerHTML = 'Базы знаний'
p3.innerHTML = 'Карьера'

//header right text 
p1r.innerHTML = 'Нижний новгород'
p2r.innerHTML = '8 800 950-33-98'
p3r.innerHTML = 'Войти'

//header left attributes
img1.setAttribute('src', './assets/icons/Group 1.svg')
img2.setAttribute('src', './assets/icons/Group 14.svg')

//header right attributes
imgR.setAttribute('src', './assets/icons/Group 593.png')

//header append
right.append( p1r, p2r, imgR, p3r)
left.append(img1,  img2, p1, p2, p3)
header.append(left, right)
main.append(header)
body.append(main)
//header create end -------------------------------------------------------------------------->

//topMain create 
let topMain = document.createElement('div')
let span1 = document.createElement('span')
let items = document.createElement('div')
//items
let children = document.createElement('div')
for (let i = 0; i <= 2; i++) {
let imgChildren = document.createElement('img')
let txts = document.createElement('div') 
let person = document.createElement('p')
let age = document.createElement('p')


//topMain styling div
topMain.classList.add('topMain')
items.classList.add('items')
children.classList.add('children')
txts.classList.add('txts')

//topMain styling span and p
span1.classList.add('span1')
person.classList.add('person')
age.classList.add('age')
imgChildren.classList.add('imgChilderen')

//topMain text
span1.innerHTML = 'Все программы обучения'
person.innerHTML = 'Дети'
age.innerHTML = '8-14 лет'
let childeren1 = document.querySelectorAll(".items img:nth-child(3)")
let person2 = document.querySelectorAll(".imgChilderen:nth-child(2)")
console.log(person2);
childeren1.forEach(element => {
    element.setAttribute('src', './assets/icons/children 2.png')
});



//topMain attributes
imgChildren.setAttribute('src', './assets/icons/children.png')

//topMain append
txts.append(person, age)
children.append(imgChildren, txts)
items.append(children)
topMain.append(span1, items)
main.append(topMain)

}
//create topMain end-------------------------------------------------------------------------->


//vector
let vector = document.createElement('div')
//styling
vector.classList.add('vector')
//append 
main.append(vector)
//vector end-------------------------------------------------------------------------->


//create radios
let radios = document.createElement('div')
let radiosh3 = document.createElement('h3')
let type = document.createElement('h3')
let radiosLabel1 = document.createElement('label') 
let radiosLabel2 = document.createElement('label') 
let radiosLabel3 = document.createElement('label') 
let radiosLabel4 = document.createElement('label')
let radiosLabel5 = document.createElement('label')
let radiosLabel6 = document.createElement('label')
let radiosLabel7 = document.createElement('label')
let radiosInp1 = document.createElement('input') 
let radiosInp2 = document.createElement('input') 
let radiosInp3 = document.createElement('input') 
let radiosInp4 = document.createElement('input') 
let radiosInp5 = document.createElement('input') 
let radiosInp6 = document.createElement('input') 
let radiosInp7 = document.createElement('input') 

// radios styling 
radios.classList.add('radios')
radiosh3.classList.add('lvl')
type.classList.add('type')

//radios text
radiosh3.innerHTML = 'Уровень сложности'
radiosLabel1.innerHTML = "Новичок"
radiosLabel2.innerHTML = "Пользователь"
radiosLabel3.innerHTML = "Профессионал"
radiosLabel4.innerHTML = "Читер"
type.innerHTML = 'Тип обучения'
radiosLabel5.innerHTML = "Любой"
radiosLabel6.innerHTML = "Профессия"
radiosLabel7.innerHTML = "Курс"

//radios attribute
radiosInp1.setAttribute('type', 'radio')
radiosInp1.name = 'txt'
radiosInp2.setAttribute('type', 'radio')
radiosInp2.name = 'txt'
radiosInp3.setAttribute('type', 'radio')
radiosInp3.name = 'txt'
radiosInp4.setAttribute('type', 'radio')
radiosInp4.name = 'txt'

radiosInp5.setAttribute('type', 'radio')
radiosInp5.name = 'txt'
radiosInp6.setAttribute('type', 'radio')
radiosInp6.name = 'txt'
radiosInp7.setAttribute('type', 'radio')
radiosInp7.name = 'txt'
// radios append
radiosLabel7.append(radiosInp7)
radiosLabel6.append(radiosInp6)
radiosLabel5.append(radiosInp5)
radiosLabel4.append(radiosInp4) 
radiosLabel3.append(radiosInp3) 
radiosLabel2.append(radiosInp2) 
radiosLabel1.append(radiosInp1) 
radios.append(radiosh3, radiosLabel1, radiosLabel2, radiosLabel3, radiosLabel4, type, radiosLabel5, radiosLabel6, radiosLabel7)
main.append(radios)
//radios end-------------------------------------------------------------------------->

//create btns
let btns = document.createElement('div')
let btnsP = document.createElement('p')
let btns2 = document.createElement('div')
for (let i = 0; i <= 8; i++) {
let btn = document.createElement('button')
btn.classList.add('btn')
btns2.append(btn)

}
//styling btns
btns.classList.add('btns')
btns2.classList.add('btns2')

//append
btns.append(btnsP, btns2)
main.append(btns)
//text btns
btnsP.innerHTML = 'Направление'
let btn1 = document.querySelectorAll(".btn:nth-child(1)")
let btn2 = document.querySelectorAll(".btn:nth-child(2)")
let btn3 = document.querySelectorAll(".btn:nth-child(3)")
let btn4 = document.querySelectorAll(".btn:nth-child(4)")
let btn5 = document.querySelectorAll(".btn:nth-child(5)")
let btn6 = document.querySelectorAll(".btn:nth-child(6)")
let btn7 = document.querySelectorAll(".btn:nth-child(7)")
let btn8 = document.querySelectorAll(".btn:nth-child(8)")
let btn9 = document.querySelectorAll(".btn:nth-child(9)")

btn1.forEach(element => {
    element.innerHTML = 'Робототехника'
});
btn2.forEach(element => {
    element.innerHTML = 'Создание игр'
});
btn3.forEach(element => {
    element.innerHTML = 'Web-Разработка'
});
btn4.forEach(element => {
    element.innerHTML = 'Мультимедиа'
});
btn5.forEach(element => {
    element.innerHTML = 'Шахматы'
});
btn6.forEach(element => {
    element.innerHTML = '3D-моделирование и дизайн'
});
btn7.forEach(element => {
    element.innerHTML = 'Английский язык'
});
btn8.forEach(element => {
    element.innerHTML = 'Блогинг'
});
btn9.forEach(element => {
    element.innerHTML = 'Soft skills'
});
//btns end

//create main-items
let mainItems = document.createElement('div')
for (let i = 0; i <= 9; i++) {
let item = document.createElement('div')
let programm = document.createElement('p')
let itemsImg = document.createElement('img')
let mainp = document.createElement('div')
let mainpP = document.createElement('p')
let info = document.createElement('p')
let month = document.createElement('p')

//styling
mainItems.classList.add('mainItems')
item.classList.add('item')
programm.classList.add('programm')
mainp.classList.add('mainp')
info.classList.add('info')
month.classList.add('month')

//text
programm.innerHTML = "Программа"
mainpP.innerHTML = '«Разработка мобильных<br> приложений»'
info.innerHTML = 'Разработчик мобильных приложений создаёт<br>приложения, которыми люди ежедневно пользуются<br> на смартфонах, умных часах и планшетах.'
month.innerHTML = '24 месяца'

//atributte

itemsImg.setAttribute('src', './assets/img/Group 815.png')

//append
mainp.append(mainpP)
item.append(programm, itemsImg, mainp, info, month)
mainItems.append(item)
main.append(mainItems)

}

/////
let item2 = document.querySelectorAll('.mainItems .item:nth-child(2)')
let item3 = document.querySelectorAll('.mainItems .item:nth-child(3)')
let item4 = document.querySelectorAll('.mainItems .item:nth-child(4)')
let item5 = document.querySelectorAll('.mainItems .item:nth-child(5)')
let item6 = document.querySelectorAll('.mainItems .item:nth-child(6)')
let item7 = document.querySelectorAll('.mainItems .item:nth-child(7)')
let item8 = document.querySelectorAll('.mainItems .item:nth-child(8)')
let item9 = document.querySelectorAll('.mainItems .item:nth-child(9)')
let item10 = document.querySelectorAll('.mainItems .item:nth-child(10)')

item2.forEach(i => {
    i.style.background = '#FFCE94'
});

item3.forEach(i => {
    i.style.background = '#FFE38E'
});

item4.forEach(i => {
    i.style.background = '#DDDDFF'
});

item5.forEach(i => {
    i.style.background = '#B8EFCF'
});

item6.forEach(i => {
    i.style.background = '#C7EEFF'
});

item7.forEach(i => {
    i.style.background = '#C5DDFF'
});

item8.forEach(i => {
    i.style.background = '#FFE9A8'
});

item9.forEach(i => {
    i.style.background = '#FFEEF6'
});

item10.forEach(i => {
    i.style.background = '#FFEEF6'
});


