webengage.survey.onSubmit(function (data) {
    if (data.surveyId === "7djkef6") {
        var name;
        var email;
        var phone;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {

                    if (keys == "Your name") {
                        name = data.questionResponses[i].value.values[keys];
                    }

                    if (keys == "Your email") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Contact number?") {
                        phone = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_Name", name);
        console.log("we_email", email);
        console.log("we_phone", phone);
        if (
            webengage &&
            webengage.state &&
            typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null ||
                webengage.state.getForever().cuid === undefined)
        ) {
            webengage.user.setAttribute({
                "we_first_name": name,
                "we_phone": phone,
                "we_email": email
            });

            webengage.track('Survey Completed', {
                "we_first_name": name,
                "we_phone": phone,
                "we_email": email
            });
        }
    }
});


