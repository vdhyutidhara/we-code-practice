<div>
    <code id="myCode" style="display:none">
        setTimeout(function (){
            document.querySelector("body &gt; div &gt; div &gt; div.inner-container &gt; div.field.custom-field &gt; label &gt; div").addEventListener("click", copyCode);

            function copyCode(){
                console.log("call copy");
                const textarea = document.createElement("textarea")
                textarea.setAttribute('readonly','');
                textarea.value = "DVOXLNV100"
                textarea.style.position = "absolute"
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand("copy")
                document.body.removeChild(textarea)
            }
        }, 1000);
    </code>
    <iframe style="display:none" src="about:blank" onload="eval($('#myCode').text())"></iframe>
</div>