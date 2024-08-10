const form = document.getElementById("form");

function styleingError(valid, idName, message) {
  const targetInput = document.getElementById(idName).previousElementSibling;
  if (valid) {
    document.getElementById(idName).innerHTML = "";
    targetInput.style.border = "2px solid hsl(231, 7%, 60%)";
    targetInput.style.backgroundColor = "transparent";
  } else {
    document.getElementById(idName).innerHTML = message;
    targetInput.style.border = "2px solid hsl(4, 100%, 67%)";
    targetInput.style.backgroundColor = "hsl(4, 100%, 67% , 0.1)";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
  checkName = data["name"].length <= 50 && data["name"] != "";
  checksubject = data["subject"].length <= 80 && data["subject"] != "";
  checkMessage = data["message"] != "";
  checkEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data["email"]
    );
  styleingError(checkName, "name-error", "please enter valid name");
  styleingError(checkEmail, "email-error", "valid email required");
  styleingError(checksubject, "subject-error", "please enter suitable subject");
  styleingError(checkMessage, "message-error", "please write your message");
  if (checkEmail && checkName && checksubject && checkMessage) {
    let prames;
    prames = {
      name: data["name"],
      email: data["email"],
      subject: data["subject"],
      message: data["message"],
    };
    const servesID = "service_cj3yzfe";
    const templateID = "template_eijlt7i";
    emailjs
      .send(servesID, templateID, prames)
      .then((res) => {
        console.log(res);
        alert("your message send successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    e.preventDefault();
  }
}

form.addEventListener("submit", handleSubmit);
