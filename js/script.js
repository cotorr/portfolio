window.onload = function () {

    let images1 = ["../img/about_01.png", "../img/about_01_1.png"];
    let images2 = ["../img/about_02.png", "../img/about_02_1.png"];
    let images3 = ["../img/about_03.png", "../img/about_03_1.png"];

    let currentIndex = 0; // 현재 이미지 인덱스
    let imgElement1 = document.getElementById("slideImage1"); // 첫 번째 이미지
    let imgElement2 = document.getElementById("slideImage2");
    let imgElement3 = document.getElementById("slideImage3"); // 두 번째 이미지
    let slideInterval; // setInterval을 저장할 변수

    // 슬라이드 변경 함수 (두 개의 이미지를 동시에 변경
    function showSlide(index) {
        currentIndex = (index + images1.length) % images1.length; // 인덱스 순환
        imgElement1.src = images1[currentIndex]; // 첫 번째 이미지 변경
        imgElement2.src = images2[currentIndex]; // 두 번째 이미지 변경
        imgElement3.src = images3[currentIndex];
    }

    // 자동 슬라이드 시작 함수
    function startSlideShow() {
        clearInterval(slideInterval); // 기존 인터벌 제거 (중복 실행 방지)
        slideInterval = setInterval(() => showSlide(currentIndex + 1), 3000); // 새 인터벌 시작
    }

    // 초기 슬라이드 시작
    startSlideShow();
}


document.addEventListener('DOMContentLoaded', function() {
    // 모달 관련 요소 선택
    const modal = document.getElementById("myModal");
    const modalProductImage = document.getElementById("modalProductImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalPrice = document.getElementById("modalPrice");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".modal .close");
  
    // 모든 상품 요소 선택
    const saleItems = document.querySelectorAll('.sale-item-box .sale-ltems');
  
    // 각 상품에 클릭 이벤트 등록
    saleItems.forEach(item => {
      item.addEventListener('click', () => {
        console.log("Clicked!");
        modal.style.display = "block";
  
        // data 속성에서 모달에 표시할 값 읽어오기
        const imgSrc = item.getAttribute("data-image");
        const title = item.getAttribute("data-title");
        const price = item.getAttribute("data-price");
        const description = item.getAttribute("data-description");
  
        // 모달 내부 요소 업데이트
        modalProductImage.src = imgSrc;
        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalDescription.textContent = description;
      });
    });
  
    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', () => {
      modal.style.display = "none";
    });
  
    // 모달 외부 클릭 시 모달 닫기
    modal.addEventListener('click', event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.menu-box figure img');
  
    images.forEach(img => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  });
  
  

  /* 메뉴아이콘을 클릭하면 사이드 메뉴에 open 클래스를 토글하는거 */
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
  
    // 메뉴 아이콘 클릭 시: 사이드 메뉴 토글
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      sideMenu.classList.toggle('open');
    });
  
    // 닫기 버튼 클릭 시: 사이드 메뉴 닫기
    closeBtn.addEventListener('click', function() {
      sideMenu.classList.remove('open');
    });
    
    // (옵션) 문서 클릭 시 메뉴 닫기 (메뉴 외부 클릭)
    document.addEventListener('click', function(e) {
      // 사이드 메뉴 내부 클릭은 제외
      if (!sideMenu.contains(e.target) && sideMenu.classList.contains('open')) {
        sideMenu.classList.remove('open');
      }
    });
  });
  


  
  document.addEventListener('DOMContentLoaded', function() {
    const vincentSection = document.querySelector('.vincent-box.hidden-section2');
    
    if (vincentSection) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
          } else {
            entry.target.classList.remove('show-section');
          }
        });
      }, { threshold: 0.1 });
  
      observer.observe(vincentSection);
    }
  });
  

  


