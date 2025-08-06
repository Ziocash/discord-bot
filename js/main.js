$(function () {
    let $progress = $('#prg_progress');
    let $label = $('#lbl_percentage');
    let width = 0;
    let target = 15;
    const interval = setInterval(function () {
        if (width >= target) {
            clearInterval(interval);
        } else {
            width++;
            $progress.css('width', width + '%');
            $label.text(width + '%');
        }
    }, 20);

    $('#toggle-theme').on('click', function () {
        $('body').toggleClass('dark-mode');
        $(this).text($('body').hasClass('dark-mode') ? '☀️' : '🌙');
    });

    const year = new Date().getFullYear();
    $('#main-footer').text(`© ${year} - Informatica e Software`);
});