window.onload = function () {

    let images1 = ["../img/about_01.png", "../img/about_01_1.png"];
    let images2 = ["../img/about_02.png", "../img/about_02_1.png"];

    let currentIndex = 0; // 현재 이미지 인덱스
    let imgElement1 = document.getElementById("slideImage1"); // 첫 번째 이미지
    let imgElement2 = document.getElementById("slideImage2"); // 두 번째 이미지
    let slideInterval; // setInterval을 저장할 변수

    // 슬라이드 변경 함수 (두 개의 이미지를 동시에 변경)
    function showSlide(index) {
        currentIndex = (index + images1.length) % images1.length; // 인덱스 순환
        imgElement1.src = images1[currentIndex]; // 첫 번째 이미지 변경
        imgElement2.src = images2[currentIndex]; // 두 번째 이미지 변경
    }

    // 자동 슬라이드 시작 함수
    function startSlideShow() {
        clearInterval(slideInterval); // 기존 인터벌 제거 (중복 실행 방지)
        slideInterval = setInterval(() => showSlide(currentIndex + 1), 3000); // 새 인터벌 시작
    }

    // 초기 슬라이드 시작
    startSlideShow();
}


