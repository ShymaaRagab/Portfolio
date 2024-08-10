const MY_WORKS = [
  {
    name: "Tiny Fashonista",
    img: "../assets/images/projects/tinyWebSite (1).png",
    describtion:
      "The website is dedicated to selling children's clothing, offering a wide range of items for boys, girls, and kids.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css", "scss", "js"],
    responsive: false,
  },

  {
    name: "Yummy Website",
    img: "../assets/images/projects/Yummy.png",
    describtion: "This food website made by html, css, bootstrap.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css", "bootstrap"],
    responsive: true,
  },

  {
    name: "Resturant",
    img: "../assets/images/projects/resturant.png",
    describtion:
      "This is website made by html,css only show simple design of resturant page that have menue ,about ,contact sections.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: false,
  },

  {
    name: "Dev Desgin",
    img: "../assets/images/projects/Dev.png",
    describtion: "It is real website that i take the desgin from.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: false,
  },

  {
    name: "Menu",
    img: "../assets/images/projects/menu.png",
    describtion:
      "it is desgin using html,css,scss,js show how filter the menu with button above.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css", "scss", "js"],
    responsive: true,
  },

  {
    name: "Food Menu With Sidebar",
    img: "../assets/images/projects/foodWithSidebar.png",
    describtion:
      "this page show simple menu with sidebar made by flex box in css and html",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: false,
  },

  {
    name: "Validation Form",
    img: "../assets/images/projects/formWithVlidation.png",
    describtion: "this simple responsive form and also with full validation",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css", "js"],
    responsive: true,
  },

  {
    name: "Grid Challenge",
    img: "../assets/images/projects/grid.png",
    describtion:
      "simple grid style for sections/articals and it also fully responsive.",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: true,
  },

  {
    name: "AX IT Website",
    img: "../assets/images/projects/project.png",
    describtion: "The website made by html ,css only",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: false,
  },

  {
    name: "tutorial Web Desgin",
    img: "../assets/images/projects/project2.png",
    describtion: "The website made by html ,css only",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css"],
    responsive: false,
  },

  {
    name: "Newsletter-sign-up-form-with-success-message",
    img: "../assets/images/projects/validationOfEmail.png",
    describtion: "The website is Newsletter-sign-up-form-with-success-message",
    codeLink: "",
    demoLink: "",
    lang: ["html", "css", "js"],
    responsive: true,
  },
];
/*
<div class="work">
  <img src="./assets/images/projects/menu.png" alt="">
  <div class="layer">
    <h3>menu</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quo?</p>
    <a href="#">View Code</a>
    <a href="#">Demo</a>
  </div>
</div>
*/
const projects_list = document.getElementById("projects-list");
function displayProjects(name, img, des, code, demo) {
  let box = document.createElement("div");
  let projectImg = document.createElement("img");
  let projectInfo = document.createElement("div");
  let projectName = document.createElement("h3");
  let projectDes = document.createElement("p");
  let codeLink = document.createElement("a");
  let demoLink = document.createElement("a");

  box.classList.add("work");
  projectImg.src = img;
  projectName.innerHTML = name;
  projectDes.innerHTML = des;
  codeLink.href = code;
  demoLink.href = demo;
  codeLink.innerText = "View Code";
  demoLink.innerText = "Demo";

  // projectInfo.append(projectName,projectDes,codeLink,demoLink)
  projectInfo.appendChild(projectName);
  projectInfo.appendChild(projectDes);
  projectInfo.appendChild(codeLink);
  projectInfo.appendChild(demoLink);

  box.appendChild(projectImg);
  box.appendChild(projectInfo);
  projects_list.appendChild(box);
}

for (let i = 0; i < MY_WORKS.length; i++) {
  displayProjects(
    MY_WORKS[i].name,
    MY_WORKS[i].img,
    MY_WORKS[i].describtion,
    MY_WORKS[i].codeLink,
    MY_WORKS[i].demoLink
  );
}

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    projects_list.innerHTML = "";
    for (let i = 0; i < MY_WORKS.length; i++) {
      console.log(e.currentTarget.getAttribute("data-id"))
      if (e.currentTarget.getAttribute("data-id") == "all") {
        displayProjects(
          MY_WORKS[i].name,
          MY_WORKS[i].img,
          MY_WORKS[i].describtion,
          MY_WORKS[i].codeLink,
          MY_WORKS[i].demoLink
        );
      } else if (
        MY_WORKS[i].lang.includes(e.currentTarget.getAttribute("data-id"))
      ) {

        displayProjects(
          MY_WORKS[i].name,
          MY_WORKS[i].img,
          MY_WORKS[i].describtion,
          MY_WORKS[i].codeLink,
          MY_WORKS[i].demoLink
        );
      }
      else if (
        e.currentTarget.getAttribute("data-id")=='resposive' && MY_WORKS[i].responsive
      ) {

        displayProjects(
          MY_WORKS[i].name,
          MY_WORKS[i].img,
          MY_WORKS[i].describtion,
          MY_WORKS[i].codeLink,
          MY_WORKS[i].demoLink
        );
      }
    }
  });
});
