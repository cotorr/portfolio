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

window.onload = function () {
    // 모달 및 오버레이 요소 선택
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');

    // 모달 닫기 버튼들 선택
    const closeModalBtn = modal.querySelector('.close');
    const closeModalBtn2 = document.querySelector('#close_modal button');

    // 여러 세일 아이템 요소들을 클래스('.open_modal')로 선택
    const saleItems = document.querySelectorAll('.open_modal');

    // 스크롤 막기용 함수
    function disableScroll(e) {
        e.preventDefault();
    }

    // 세일 아이템 클릭 시 모달 내용 채우고 표시하는 이벤트 등록
    saleItems.forEach(item => {
        item.addEventListener('click', function () {
            // data 속성에서 필요한 값 읽어오기
            const title = this.getAttribute('data-title');
            const price = this.getAttribute('data-price');
            const description = this.getAttribute('data-description');
            const image = this.getAttribute('data-image');

            // 모달 콘텐츠 업데이트
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modalDescription.textContent = description;
            modalImage.src = image;

            // 모달과 오버레이 표시
            modal.style.display = 'block';
            overlay.style.display = 'block';
            modal.setAttribute('aria-hidden', 'false');

            // body 스크롤 정지: no-scroll 클래스 추가 및 wheel/touchmove 이벤트 막기
            document.body.classList.add('no-scroll');
            document.addEventListener("wheel", disableScroll, { passive: false });
            document.addEventListener("touchmove", disableScroll, { passive: false });
        });
    });

    // 모달 닫기 함수
    const closeModal = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');

        // body 스크롤 복원: no-scroll 클래스 제거 및 이벤트 리스너 삭제
        document.body.classList.remove('no-scroll');
        document.removeEventListener("wheel", disableScroll, { passive: false });
        document.removeEventListener("touchmove", disableScroll, { passive: false });
    };

    // 닫기 버튼과 오버레이 클릭 시 모달 닫기 이벤트 등록
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    if (closeModalBtn2) {
        closeModalBtn2.addEventListener('click', closeModal);
    }
};