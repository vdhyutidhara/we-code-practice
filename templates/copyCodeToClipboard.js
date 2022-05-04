<div>
    <code id="myCode" style="display:none">
        setTimeout(function (){
            document.querySelector(".yes-btn").addEventListener("click", copyCode)
            function copyCode() {
                console.log("call copy");
                const textarea = document.createElement("textarea")
                textarea.setAttribute('readonly', '');
                textarea.value = "DVOXLNV100"
                textarea.style.position = "absolute"
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand("copy")
                document.body.removeChild(textarea)
                alert(textarea.value);
            }
        }, 1000);
    </code>
    <iframe style="display:none" src="about:blank" onload="eval($('#myCode').text())"></iframe>
</div>


