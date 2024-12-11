document.getElementById("tema-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("adicionar-hobby").addEventListener("click", () => {
    const hobbyInput = document.getElementById("hobby-input");
    const hobbyList = document.getElementById("hobby-list");
    if (hobbyInput.value.trim()) {
        const li = document.createElement("li");
        li.textContent = hobbyInput.value;
        hobbyList.appendChild(li);
        hobbyInput.value = "";
    }
});
