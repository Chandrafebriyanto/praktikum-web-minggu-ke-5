// tittle: fungsi hide and show profile
let hide = () => {
  let profile = document.querySelector(".picture");
  let buttonHide = document.querySelector(".hide");
  profile.style.display = "none";
  buttonHide.textContent = "Tampilkan Profile";

  if (buttonHide.textContent === "Tampilkan Profile") {
    buttonHide.onclick = show;
  }
};

let show = () => {
  let profile = document.querySelector(".picture");
  let buttonHide = document.querySelector(".hide");
  profile.style.display = "block";
  buttonHide.textContent = "Sembunyikan Profile";

  if (buttonHide.textContent === "Sembunyikan Profile") {
    buttonHide.onclick = hide;
  }
};

// tittle: fungsi toggle theme light and dark
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleCheckbox = document.querySelector(
    ".toggle-switch .checkbox"
  );
  const body = document.body;

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light");
      themeToggleCheckbox.checked = true;
    } else {
      body.classList.remove("light");
      themeToggleCheckbox.checked = false;
    }
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme("dark");
  }

  themeToggleCheckbox.addEventListener("change", function () {
    if (this.checked) {
      applyTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      applyTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

// tittle: fungsi submit form contact
document.getElementById("submit").onclick = function submit() {
  let username = document.getElementById("name").value.trim();
  let email = document.getElementById("mail").value.trim();
  let message = document.getElementById("message").value.trim();

  if (username === "" || email === "" || message === "") {
    document.getElementById("notification").style.display = "flex";
    document.getElementById("notification-message").textContent =
      "Harap isi semua form!";
    return;
  } else {
    document.getElementById("notification").style.display = "flex";
    document.getElementById("notification-message").textContent = "Terima kasih telah mengirim pesan"
  }
};

