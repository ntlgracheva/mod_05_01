'use strict'


const itemsList = document.querySelectorAll(".item");
console.log(itemsList);

//правка первого раздела
const propsItemFour = document.querySelector('.item_two .props__item_four');
const itemsFourList = document.querySelectorAll('.item_four .props__item_four');
itemsFourList[2].after(propsItemFour);

//правка четвертого раздела
const itemsFiveList = document.querySelector('.item_five .props__list');
console.log(itemsFiveList);

const itemsThreeList = document.querySelector('.item_three .props__list');
console.log(itemsThreeList);

itemsThreeList.replaceWith(itemsFiveList);

//правка пятого раздела
const itemFiveContent = document.querySelector('.item_five .content');
itemFiveContent.append(itemsThreeList);

//правка шестого раздела
const itemsTwo = document.querySelectorAll('.item_six .props__item_two');
const itemsTwoList = document.querySelector('.item_two .props__list');
itemsTwoList.append(itemsTwo[0]);
itemsTwoList.append(itemsTwo[1]);

//перестановка 
itemsList[0].remove();
itemsList[3].after(itemsList[0]);

//удаление рекламы
const adds = document.querySelector(".ads");
adds.remove();