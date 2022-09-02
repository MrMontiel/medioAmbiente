let contentNav = document.getElementById("contentNavbar");
let btns = contentNav.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const btnTop = document.getElementById("btn");

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
  ) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
};

const topFuction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


let snackbar = document.getElementById("snackbar");
const showSnackbar = (msg) => {
  snackbar.innerHTML = msg;
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
};