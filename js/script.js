//사이드 메뉴 열기/닫기 토글 & 화면 바깥 클릭 시 닫기
window.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');

    // 메뉴 열기
    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sideMenu.classList.add('open');
    });

    // 메뉴 바깥 클릭 시 닫기
    document.addEventListener('click', function (e) {
        if (!sideMenu.contains(e.target)) {
            sideMenu.classList.remove('open');
        }
    });

    // 메뉴 내부 클릭은 유지
    sideMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});

//세일 아이템 클릭 시 모달 열기 + 오버레이 클릭 또는 버튼으로 닫기
window.onload = function () {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const closeModalBtn = modal.querySelector('.close');
    const closeModalBtn2 = document.querySelector('#close_modal button');
    const saleItems = document.querySelectorAll('.open_modal');

    function disableScroll(e) {
        e.preventDefault();
    }

    saleItems.forEach(item => {
        item.addEventListener('click', function () {
            modalTitle.textContent = this.getAttribute('data-title');
            modalPrice.textContent = this.getAttribute('data-price');
            modalDescription.textContent = this.getAttribute('data-description');
            modalImage.src = this.getAttribute('data-image');

            modal.style.display = 'block';
            overlay.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');

            document.body.classList.add('no-scroll');
            document.addEventListener("wheel", disableScroll, { passive: false });
            document.addEventListener("touchmove", disableScroll, { passive: false });
        });
    });

    const closeModal = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');

        document.body.classList.remove('no-scroll');
        document.removeEventListener("wheel", disableScroll);
        document.removeEventListener("touchmove", disableScroll);
    };

    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    if (closeModalBtn2) {
        closeModalBtn2.addEventListener('click', closeModal);
    }
};

//About 섹션의 이미지 자동 슬라이드 + 페이드 전환
window.addEventListener('DOMContentLoaded', function () {
    const slide1 = document.getElementById("slideImage1");
    const slide2 = document.getElementById("slideImage2");
    const slide3 = document.getElementById("slideImage3");

    const images1 = ["img/about_01.png", "img/about_01_1.png"];
    const images2 = ["img/about_02.png", "img/about_02_1.png"];
    const images3 = ["img/about_03.png", "img/about_03_1.png"];
    let index1 = 0, index2 = 0, index3 = 0;

    function fadeSwitchImage(imgElement, images, indexVarName) {
        imgElement.classList.add("fade-out");

        setTimeout(() => {
            if (indexVarName === "index1") {
                index1 = (index1 + 1) % images.length;
                imgElement.src = images[index1];
            } else if (indexVarName === "index2") {
                index2 = (index2 + 1) % images.length;
                imgElement.src = images[index2];
            } else if (indexVarName === "index3") {
                index3 = (index3 + 1) % images.length;
                imgElement.src = images[index3];
            }

            imgElement.classList.remove("fade-out");
        }, 800);
    }

    setInterval(() => fadeSwitchImage(slide1, images1, "index1"), 3350);
    setInterval(() => fadeSwitchImage(slide2, images2, "index2"), 3350);
    setInterval(() => fadeSwitchImage(slide3, images3, "index3"), 3350);
});

//the-product 섹션 이미지 마우스 오버 확대
document.addEventListener('DOMContentLoaded', function () {
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
