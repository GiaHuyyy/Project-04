window.addEventListener("load", function () {
    const sliderMain = document.querySelector(".review__list");
    const sliderItems = document.querySelectorAll(".review-item");
    const nextBtn = document.querySelector(".review__control-next");
    const prevBtn = document.querySelector(".review__control-prev");
    const dotItems = document.querySelectorAll(".review__dot");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;

    let positionX = 0;
    let index = 0;

    // Event
    function handleChangeSlide(direction) {
        // Cập nhật chỉ số slide dựa trên hướng di chuyển
        index += direction;

        // Giới hạn giá trị chỉ số slide trong khoảng từ 0 đến sliderLength - 1
        // index = Math.max(0, Math.min(index, sliderLength - 1));
        if (index <= 0) {
            index = 0;
        } else if (index >= sliderLength - 1) {
            index = sliderLength - 1;
        }
        // Tính toán vị trí mới của slider
        positionX = -index * sliderItemWidth;
        // Di chuyển slider tới vị trí mới
        sliderMain.style.transform = `translateX(${positionX}px)`;
    }

    // Next Btn
    nextBtn.addEventListener("click", function () {
        handleChangeSlide(1);
    });

    // Prev Btn
    prevBtn.addEventListener("click", function () {
        handleChangeSlide(-1);
    });

    // Dot Event
    [...dotItems].forEach((item, slideIndex) =>
        item.addEventListener("click", function () {
            // Xóa class "review__dot--active" khỏi tất cả các dot
            dotItems.forEach((dot) =>
                dot.classList.remove("review__dot--active")
            );
            // Thêm class "review__dot--active" cho dot được bấm vào
            item.classList.add("review__dot--active");
            // Kiểm tra nếu dot được nhấn khác với slide hiện tại
            if (slideIndex !== index) {
                // Cập nhật chỉ số và vị trí slide mới
                index = slideIndex;
                positionX = -index * sliderItemWidth;

                // Di chuyển slider tới slide tương ứng
                sliderMain.style.transform = `translateX(${positionX}px)`;
            }
        })
    );
});
