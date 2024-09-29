$(document).ready(function () {
    let imageBox = $("#imageBox")
    let qrImage = $("#qrImage")
    let inputText = $("#inputText")

    window.getQrImage = function () {
        if (inputText.val().trim().length > 0) {
            // API to generate and return QR Code image.
            qrImage.attr("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
                + inputText.val())
            imageBox.addClass("show-img")
        } else {
            // Adding class for error shaking animation.
            inputText.addClass('error')
            inputText.attr("style","border: 2px solid darkred;")
            setTimeout(() => {
                inputText.removeClass('error')
                inputText.attr("style","")
            }, 500)
        }
    }
});
