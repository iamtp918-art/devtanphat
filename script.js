// --- BẮT ĐẦU CODE ĐỒNG HỒ ĐẾM NGƯỢC ---
const countDownDate = new Date("Oct 30, 2026 21:00:00").getTime();

// 2. Lấy các phần tử HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// 3. Cập nhật đồng hồ mỗi giây
const interval = setInterval(() => {
    // Lấy thời gian hiện tại
    const now = new Date().getTime();
    
    // Tính khoảng cách thời gian
    const distance = countDownDate - now;
    
    // Tính toán Ngày, Giờ, Phút, Giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // 4. Hiển thị kết quả lên HTML
    // (Chúng ta dùng hàm formatTime để thêm số 0 đằng trước nếu < 10)
    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minutesEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
    
    // 5. Xử lý khi đếm ngược kết thúc
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown-title").innerText = "";
        document.getElementById("countdown").innerHTML = "<h2>ĐÃ ĐẾN LÚC TRỞ LẠI!</h2>";
    }
}, 1000); // 1000ms = 1 giây

// Hàm thêm số 0 (ví dụ: 9 -> 09)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
