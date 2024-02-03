const body = document.querySelector("body");
const no = document.querySelector(".no_btn");
const yes = document.querySelector(".yes_btn");
const mainText = document.querySelector("h1");
const nuotrauka = document.querySelector("img");
let noTry = 0;

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }
  return "desktop";
};

if (getDeviceType() !== "desktop") {
  body.innerHTML = "<H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1><H1>TIK ANT PC!!!<H1>";
}
function sendEmail(message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nnfdmatywxults@gmail.com",
    Password: "588091961A5A8AFEF0ECBE57C6DEACF748F0",
    To: "nojusnojus67@gmail.com",
    From: "nnfdmatywxults@gmail.com",
    Subject: message,
    Body: message,
  }).then(function (message) {
    console.log(message);
  });
}

no.addEventListener("mouseover", (e) => {
  noTry += 1;

  if (noTry == 1) {
    nuotrauka.src = "./foto/piktas.jpg";
    mainText.textContent = "Neteisingas pasirinkimas";
  } else if (noTry == 5) {
    mainText.textContent = "Damn Tiesiog spausk taip";
    nuotrauka.src = "./foto/carprincess.jpg";
  } else if (noTry == 10) {
    nuotrauka.src = "./foto/laukiu.jpg";
    mainText.textContent = "Ne zinai as laiko tai turiu";
  }

  if (e.target.classList.contains("moved")) {
    e.target.style.top = "0px";
    e.target.style.right = "0px";
    e.target.style.borderColor = "rgb(255, 92, 217)";
    e.target.classList = "no_btn";
  } else {
    e.target.style.top = `${Math.random() > 0.4 ? "-" : "+"}${100 + (Math.random() * window.innerHeight) / 20}px`;
    e.target.style.right = `${Math.random() > 0.4 ? "-" : "+"}${100 + (Math.random() * window.innerWidth) / 5}px`;
    e.target.style.borderColor = "white";
    e.target.classList = "no_btn moved";
  }
  console.log(noTry);
});

yes.addEventListener("click", (e) => {
  sendEmail("YAY Yay taip taip");
  mainText.textContent = "Nuostabus pasirinkimas 😽";
  no.style.display = "none";
  e.target.textContent = "MYLIU";
  nuotrauka.src = "./cat2.gif";

  if (e.target.classList.contains("myliu")) {
    sendEmail("awuga wuga");
    mainText.textContent = "As tave daug labiau 😽";
    yes.style.display = "none";
    nuotrauka.src = "./foto/yay.jpg";
  }
  e.target.classList = "yes_btn myliu";
});
