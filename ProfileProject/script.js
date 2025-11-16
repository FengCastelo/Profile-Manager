function login() {
const userId = document.getElementById("inputID").value;

if(!userId) {
    alert("Por favor, ingrese un ID de usuario válido.");
    return;
}

localStorage.setItem("currentUserId", userId);

window.location.href = "perfil.html";
}

function loadProfile() {

const userID = localStorage.getItem("currentUserId");

if(userID) {
    const nome = localStorage.getItem(userID + "_nome");
    const idade = localStorage.getItem(userID + "_idade");
    const email = localStorage.getItem(userID + "_email");
    const tema = localStorage.getItem(userID + "_tema");
    const cor = localStorage.getItem(userID + "_cor_fonte");
    const foto = localStorage.getItem(userID + "_foto");

    if (nome) document.getElementById('nameInput').value = nome;
    if (idade) document.getElementById('ageInput').value = idade;
    if (email) document.getElementById('emailInput').value = email;
    if (tema) document.getElementById('themeSelect').value = tema;
    if (cor) document.getElementById('fontColorSelect').value = cor;
    if (foto) document.getElementById('photoInput').value = foto;

    if (foto) {
        document.getElementById('userPhoto').src = foto;
    } else {
        document.getElementById('userPhoto').src = 'Pictures/default.png';
    }
    mudartema();
    return;
}

alert("Cadastre seu perfil!");

}

function changetheme() {
        
    const tema = document.getElementById("themeSelect").value;
    const corFonte = document.getElementById("fontColorSelect").value;
    const body = document.body;
    const container = document.getElementById("profileContainer");
    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const emailInput = document.getElementById("emailInput");
    const themeSelect = document.getElementById("themeSelect");
    const fontColorSelect = document.getElementById("fontColorSelect");
    const photoInput = document.getElementById("photoInput");


    body.className = '';
    container.className = 'p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col gap-6';
    nameInput.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';
    ageInput.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';
    emailInput.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';
    themeSelect.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';
    fontColorSelect.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';
    photoInput.className = 'w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500';

    
    if (tema === "lightTheme") {   
        body.classList.add("bg-slate-100");
        container.classList.add("bg-slate-300");
        nameInput.classList.add("bg-white", "text-gray-900", "placeholder-gray-500", "border-gray-300");
        ageInput.classList.add("bg-white", "text-gray-900", "placeholder-gray-500", "border-gray-300");
        emailInput.classList.add("bg-white", "text-gray-900", "placeholder-gray-500", "border-gray-300");
        themeSelect.classList.add("bg-white", "text-gray-900", "border-gray-300");
        fontColorSelect.classList.add("bg-white", "text-gray-900", "border-gray-300");
        photoInput.classList.add("bg-white", "text-gray-900", "border-gray-300");
    } else if (tema === "nightTheme") {
        body.classList.add("bg-gray-900");
        container.classList.add("bg-gray-800");
        nameInput.classList.add("bg-gray-900");
        ageInput.classList.add("bg-gray-900");
        emailInput.classList.add("bg-gray-900");
        themeSelect.classList.add("bg-gray-900");
        fontColorSelect.classList.add("bg-gray-900");
        photoInput.classList.add("bg-gray-900");
    } 

    if (corFonte === "darkFont") {
        body.classList.add("placeholder-gray-900");
        nameInput.classList.add("text-gray-900", "placeholder-gray-900");
        ageInput.classList.add("text-gray-900", "placeholder-gray-900");
        emailInput.classList.add("text-gray-900", "placeholder-gray-900");
        photoInput.classList.add("text-gray-900", "placeholder-gray-900");
        themeSelect.classList.add("text-gray-900", "placeholder-gray-900");
        fontColorSelect.classList.add("text-gray-900", "placeholder-gray-900");
       
    } else if (corFonte === "lightFont") {
        body.classList.add("placeholder-gray-100");
        nameInput.classList.add("text-gray-500", "placeholder-gray-500");
        ageInput.classList.add("text-gray-500", "placeholder-gray-500");
        emailInput.classList.add("text-gray-500", "placeholder-gray-500");
        photoInput.classList.add("text-gray-500", "placeholder-gray-500");
        themeSelect.classList.add("text-gray-500", "placeholder-gray-500");
        fontColorSelect.classList.add("text-gray-500", "placeholder-gray-500");
    }


}