function addTerm() {
    const termInput = document.getElementById("termInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const termList = document.getElementById("termList");
    const term = termInput.value.trim();
    const description = descriptionInput.value.trim();

    if (term !== "" && description !== "") {
        const termBox = document.createElement("div");
        termBox.className = "term-box";

        const termHeading = document.createElement("h2");
        termHeading.textContent = term;

        const termDescription = document.createElement("p");
        termDescription.textContent = description;

        termBox.appendChild(termHeading);
        termBox.appendChild(termDescription);

        termList.appendChild(termBox);

        termInput.value = "";
        descriptionInput.value = "";
    }
}