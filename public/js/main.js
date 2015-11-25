$(document).on("click", "em", function (e) {
    var amt = $(".subheads").offset().top-20;
    $("html,body").animate({
        scrollTop: amt
    }, 300)

})


$(document).on("click", ".donate", function () {
    $(".modal.donate-modal").addClass("active");
    $(".modal.donate-modal-bg").addClass("active");
    $("body").addClass("no-overflow");
})


$(document).on("click", ".close-modal", function () {
    $(".modal").removeClass("active");
    $(".modal.modal-bg").removeClass("active");
    $("body").removeClass("no-overflow");
})
