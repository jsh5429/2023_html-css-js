/* 버튼을 눌렀을때 환영인사 출력 */
/* form의 submit을 눌렀을때 input의 값이 h1태그에 할당 */

// id를 통해서 직접 접근
// submit을 눌렀을때(이벤트 - submit:form): form에 이벤트
// input의 값이 h1태그에 할당(실행할 함수)
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", onLogin)

// 로그인 함수
function onLogin(e){
    // submit이벤트는 새로고침이 들어가있다
    e.preventDefault();
    
    //값을 들고올 input태그 가져옴 - value
    const loginId = document.querySelector("#login-id");
    //값을 넣어줄 h1태그 가져옴 - innerHTML
    const greeting = document.querySelector("#greeting");
    
    //greeting.innerHTML += " "+loginId.value+"님";
    greeting.innerHTML = `환영합니다 ${loginId.value}님`;

    // 화면에 글자를 보여주기위해 class 제거
    greeting.classList.remove("hidden");
    // 로그인 후에 보이지 않던 할일 입력창과 할일 목록 보이게하기.
    document.querySelector("#todo-form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    // 로그인 후에는 로그인 창을 보이지 않게하기위해 class 추가
    loginForm.classList.add("hidden");

}   