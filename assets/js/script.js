// form repeater
$(document).ready(function () {
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

var now = new Date(),
    // minimum date the user can choose, in this case now and in the past
    minDate = now.toISOString().substring(0,10);

$('#start-date-input').prop('max', minDate);