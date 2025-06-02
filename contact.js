document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('contact-message').textContent = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.";
            this.reset();
        });
    }
});