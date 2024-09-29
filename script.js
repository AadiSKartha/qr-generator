$(document).ready(function () {
    let imgBox = $("#imgBox");
    let qrImage = $("#qrImage");
    let qrText = $("#qrText");

    window.getQrImage = function() {
        if (qrText.val().trim() !== "") {
            qrImage.attr("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.val());
            imgBox.addClass("show-img");
        }
    }
});
