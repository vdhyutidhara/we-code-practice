webengage.survey.onSubmit(function (data) {
  if (data.surveyId === "7djkebm") {
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
          if (keys == "Enter your email") {
            email = data.questionResponses[i].value.values[keys];
          }
          if (keys == "Enter your mobile") {
            phone = data.questionResponses[i].value.values[keys];
          }
        }
      }
    }
    console.log("we_email", email);
    console.log("we_phone", phone);
    if (webengage && webengage.state && typeof webengage.state.getForever === "function" &&
      (webengage.state.getForever().cuid === null || webengage.state.getForever().cuid === undefined) &&
      phone !== null
    ) {
      webengage.user.login(email);
      webengage.user.setAttribute({
        "we_email": email,
        "we_phone": phone
      });
      webengage.track('lead_captured', {
        "we_email": email,
        "we_phone": phone
      });
    }
  }
});