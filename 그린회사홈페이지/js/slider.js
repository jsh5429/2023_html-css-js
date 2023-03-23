/**슬라이더 버튼을 눌렀을 때 화면 전환 */
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// 슬라이더 아이템
const sliderItem = document.querySelectorAll(".slider-item");

// 전체 슬라이더 갯수. 제한을 정해둬서 for문이 계속 실행되는 일을 방지
const maxSlide = sliderItem.length;
// 현재 슬라이더를 알려주기 위한 변수
let currSlide = 1;

// 다음 버튼을 눌렀을때 left값이 이동
nextButton.addEventListener("click", function(){
    if(currSlide<maxSlide){
        currSlide++; // 2일때 -100%, 3일때 -200%이어야한다. 4, -300%
        // %말고도 화면의 넓이를 곱해서 이동하는 방식도 있음.
        //sliderItems를 통해서 모든 left값을 이동
        for(let i =0; i<sliderItem.length; i++){
            sliderItem[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})

// 이전 버튼

prevButton.addEventListener("click", function(){
    if(currSlide>1){
        currSlide--; // 2일때 -100%, 3일때 -200%이어야한다. 4, -300%
        // %말고도 화면의 넓이를 곱해서 이동하는 방식도 있음.
        //sliderItems를 통해서 모든 left값을 이동
        for(let i =0; i<sliderItem.length; i++){
            sliderItem[i].style.left = `${100+(-100)*currSlide}%`;
        }
    }
})