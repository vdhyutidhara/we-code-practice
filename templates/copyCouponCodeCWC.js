webengage.onReady(function () {
    webengage.notification.onOpen(function (data) {
        if (data.notificationId === '317733bb') {
            webengage.util.withWeJquery(function () {
                $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('#webklipper-publisher-widget-container-notification-container > div.description > div:nth-child(3) > h3').click(function (e) {
                    $weJQuery('#webklipper-publisher-widget-container-notification-frame').contents().find('#webklipper-publisher-widget-container-notification-container > div.description > div:nth-child(3) > h3').removeClass('offerCodeDisabled');

                    e.target.classList.add('offerCodeDisabled');
                    e.target.innerText = "INSTANT";
                    var data = e.target.parentElement;
                    var el = data.getElementsByClassName('coupon-code');
                    var dealText = el[0].innerText;
                    navigator.clipboard.writeText(dealText);
                });
            });
        }
    });
});