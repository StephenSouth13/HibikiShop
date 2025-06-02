document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang đã được tải thành công!");

    // Bảng tính toán sản phẩm
    document.querySelectorAll('.qty').forEach(function(input) {
        input.addEventListener('input', updateTable);
    });
    function updateTable() {
        let total = 0;
        document.querySelectorAll('#product-table tbody tr').forEach(function(row) {
            const price = parseInt(row.querySelector('.price').textContent, 10);
            const qty = parseInt(row.querySelector('.qty').value, 10) || 0;
            const subtotal = price * qty;
            row.querySelector('.subtotal').textContent = subtotal.toLocaleString();
            total += subtotal;
        });
        document.getElementById('total').textContent = total.toLocaleString();
    }
    updateTable();

    // CRM Form gửi lên Google Sheets qua Google Forms
    document.getElementById('crm-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('crm-message').textContent = "Cảm ơn bạn đã đăng ký!";
        this.reset();
    });
});
