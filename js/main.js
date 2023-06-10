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

//перестановка 
itemsList[0].remove();
itemsList[3].after(itemsList[0]);