// 카테고리 필터 기능
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // 선택된 카테고리 확인
        const filterValue = button.dataset.filter;

        // 버튼 활성화 상태 변경
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        // 작업물 필터링
        portfolioItems.forEach(item => {

            if (
                filterValue === 'all' ||
                item.dataset.category === filterValue
            ) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        });

    });

});