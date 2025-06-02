document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('review-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('review-message').textContent = "Cảm ơn bạn đã gửi đánh giá!";
            this.reset();
        });
    }
});