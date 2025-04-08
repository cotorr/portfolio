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
  

