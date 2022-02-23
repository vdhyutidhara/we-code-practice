webengage.survey.onSubmit(function (data) {
    // CWC -> Custom Widget Code
    if (data.surveyId === "~162i8n7") {    // Here, survey id is survey's VARIATION ID
        var fName;
        var lName;
        var phone;
        console.log(data);
        for (var i = 0; i < data.questionResponses.length; i++) {
            if (
                Object.prototype.toString.call(
                    data.questionResponses[i].value.values
                ) == "[object Object]"
            ) {
                for (var keys in data.questionResponses[i].value.values) {
                    if (keys == "First Name") {
                        fName = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Last Name") {
                        lName = data.questionResponses[i].value.values[keys];
                    }
                    if (keys == "Mobile Number") {
                        phone = data.questionResponses[i].value.values[keys];
                    }
                }
            }
        }
        console.log("we_fName", fName);
        console.log("we_lName", lName);
        console.log("we_phone", phone);
        if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
            (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) &&
            phone !== null
        ) {
            webengage.user.login(phone);
            webengage.user.setAttribute({
                "we_last_name": lName,
                "we_phone": phone,
                "we_first_name": fName
            });
            webengage.track('lead_captured', {
                "we_last_name": lName,
                "we_phone": phone,
                "we_first_name": fName
            });
        }
    }
});