"use strict";


// 이미지 슬라이드
const bannerBox = document.querySelector(".bannerBox > ul");
const bannerItem = document.querySelectorAll(".banner_item");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = bannerItem[0].clientWidth;
console.log(bannerItem);

let counter = 0;

nextBtn.addEventListener('click', () => {
  
  if(counter < bannerItem.length -1){
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if(counter === bannerItem.length -1){
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener('click', () => {
  if(counter > 0){
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});


// 더보기 클릭
const overflow = document.querySelector(".textOverflow");
const label = document.querySelector(".labelBtn");
const textBlock = document.querySelector(".textBlock")

label.addEventListener('click', () => {
  
  if (textBlock.style.display === "block") {
    textBlock.style.display = "none";
  } else {
    textBlock.style.display = "block";
  };
});



