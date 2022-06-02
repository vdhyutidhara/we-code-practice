
webengage.survey.onSubmit(function (data) {
    if ( data.surveyId == "~5g1cldm" || data.surveyId == "7djke51" || data.surveyId == "33l1272" || data.surveyId == "5g1cldo") {
        var fName;
        var phone;
        var email;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                    if (keys == "Name") {
                        fName = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Mobile Number") {
                        phone = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Email(Optional)") {
                        email = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_fName", fName);
        console.log("we_phone", phone);
        console.log("we_email", email);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) &&
            phone !== null
        ) {
            webengage.user.setAttribute({
                "we_first_name": fName,
                "we_phone": phone,
                "we_email": email
            });
        }
    }
});