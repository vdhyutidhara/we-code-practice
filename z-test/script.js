//webengage.feedback.options('alignment', 'left');
webengage.onReady(function () {
    setTimeout(function () {
        var ele1 = document.getElementById("webklipper-publisher-widget-container-content-expand-collapse");
        var custom_style1 = {
            bottom: '50%',
            right: '0px',
            width: '30px',
            height: '120px',
            'background-color': 'rgb(198, 235, 241)',
            'background-image': 'url(https://static-webengage-implementation.s3.amazonaws.com/candere/Feedback.svg)',
            'background-position': '50% 100%',
            'background-repeat': 'no-repeat',
            border: '1px solid rgb(204, 204, 204)',
            "border-radius": '0'
        };
        Object.assign(ele1.style, custom_style1);

        var ele2 = document.querySelector("#webklipper-publisher-widget-container-content-expand-collapse > svg");
        var custom_style2 = {
            margin: "0px",
            padding: "0px",
            width: "20px",
            height: "87px",
            'background-position': '50% 100%',
            'background-repeat': 'no-repeat',
            overflow: "visible",
            "box-sizing": "content-box"
        };
        Object.assign(ele2.style, custom_style2);

        var ele3 = document.querySelector("#Page-1");
        var custom_style3 = {
            visibility: "hidden"
        };
        Object.assign(ele3.style, custom_style3);
        
    }, 10);

});