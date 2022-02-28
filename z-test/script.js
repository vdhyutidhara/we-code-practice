function copyToClipboard() {
    var copyText = "waszexdfcgvhb";
    navigator.clipboard.writeText(copyText);
    alert("Copied the Coupon Code: " + copyText);
}


setTimeout(function () {
    document.querySelector("#yes-btn").addEventListener("click", copyCode);
    function copyCode() {
        console.log("call copy")
        var copyText = "TIV15";
        copyText.select();
        document.execCommand("copy");
        alert("Copied the Coupon Code: " + copyText);
    }
}, 1000);