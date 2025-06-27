function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById("modeToggle");
    const img = document.getElementById("toggleimg");

    body.classList.toggle("dark-mode");


    if (body.classList.contains("dark-mode")) {
        img.src = "https://res.cloudinary.com/dwnr3udpy/image/upload/v1750923092/Moon_apg91i.png";

    } else {
        img.src = "https://res.cloudinary.com/dwnr3udpy/image/upload/v1750922841/Group_21_dn8v4r.png";


    }
}

