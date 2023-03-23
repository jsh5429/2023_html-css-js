
/* 슬라이더 버튼을 눌렀을 때 각 위치의 슬라이더 출력 */
// 배열형태로 들고온다.
const slider2Buttons = document.querySelectorAll("#slider2-buttons a");

// 슬라이더 아이템. 배열형태로 들고온다.
const slider2Item = document.querySelectorAll(".slider2-item");

// 각각의 버튼을 눌렀을 때 그 위치에 있는 슬라이더로 이동
// 각각의 버튼 : slider2Buttons[0], slider2Buttons[1], slider2Buttons[2]
// 각각의 아이템 : slider2Items[0], slider2Items[1], slider2Items[2]
// 화면이 보이는 위치 : left = 0, left = -100%, left = -200%
// 규칙 : 버튼[0]을 누르면 left = 0 이동
//          버튼[1]을 누르면 left = -100 이동
// >> 버튼[i]를 누르면 left = i*(-100) 이동

// 버튼[1] 가져와서 확인 후 아래 내용 반복해서 사용
// 버튼에 이벤트리스너 추가
for(let i = 0; i <slider2Buttons.length; i++) {
    slider2Buttons[i].addEventListener("click", function(e) {
        e.preventDefault();
        // forEach는 배열에 있는 각각의 값을 꺼내서
        // 콜백함수를 통해 쓸수 있다
        // 배열.forEach(function(배열의값, 인덱스){});
        // forEach 메서드는 다음 매개변수(parameter)와 
        // 함께 배열의 각 요소에 적용하게 될 
        // 콜백 함수(callback function)를 전달합니다.
        // 즉 각 인덱스의 배열요소마다 함수를 적용시키고 싶을때
        // foreach를 쓴다.
        slider2Item.forEach(function(item, index){
            item.style.left = `${i*-100}%`
            //console.log(item);
        });

        // 먼저 a태그의 모든 on을 제거
        for(let i=0;i<slider2Buttons.length; i++){
            slider2Buttons[i].classList.remove("on");
        }
        // 현재 a태그, 지금 누른 버튼에 on을 추가
        e.target.classList.add("on");
    })
}

/* 슬라이더 내부에 slider2-dots을 만들어서 버튼 작성 */
// 형태 : div class = "slider2-dots" : dot을 묶는 태그
//          div class = "dot" : 각 슬라이더로 이동하는 dot
// 어떻게 추가할 것인가 : slider2Item의 갯수에 따라서 생성 및 추가
// 어느 위치에 추가할 것인가 : slider2의 하단에 추가
const dots= document.createElement("div");
dots.classList.add("slider2-dots");
for(let i=0; i<slider2Item.length;i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    // dot에 이벤트 리스너 추가
    dot.addEventListener("click", function(e){
        // 각각의 슬라이더의 left값 수정
        slider2Item.forEach(function(item){
            item.style.left = `${i*(-100)}%`;
        });

        // 모든 dot의 .on을 제외하고 현재 클릭한 dot만 .on
        // 모든 dot은 무엇? dots의 자식을 통해서 찾을 수 있다.
        // >> dots의 자식들을 반복해서 remove()
        for(let i=0; i<dots.children.length; i++){
            dots.children[i].classList.remove("on");
        }

        // 현재dot은 무엇? 이벤트 객체
        e.target.classList.add("on");

    });
}

const slider2 = document.querySelector("#slider2");
// 실컷 만들어놓고 HTML에 추가(append)하는 코드를 안써놨음.
slider2.appendChild(dots);