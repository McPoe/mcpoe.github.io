document.addEventListener('DOMContentLoaded', function() {
    var triggers = document.querySelectorAll('.img_trigger');
    var closes = document.querySelectorAll('.close');

    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            var modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'flex';
        });
    });

    closes.forEach(function(close) {
        close.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});