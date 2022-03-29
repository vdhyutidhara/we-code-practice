webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "~24cp64c") {
        var email;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                    if (keys == "Leave us your Email ID") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_email", email);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) &&
            phone !== null
        ) {
            webengage.user.login(email);
            webengage.user.setAttribute({
                "we_email": email
            });
            webengage.track('lead_captured', {
                "we_email": email
            });
        }
    }
});