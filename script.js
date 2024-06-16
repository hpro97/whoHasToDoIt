document.addEventListener("DOMContentLoaded", function () {
  const goButton = document.getElementById("go");
  const loader = document.getElementById("loader");

  goButton.addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput").value;
    const namesList = document.getElementsByClassName("nameInput");
    const names = [];
    for (let i = 0; i < namesList.length; i++) {
      if (namesList[i].checked) {
        names.push(namesList[i].value);
      }
    }

    function randomName(names) {
      return names[Math.floor(Math.random() * names.length)];
    }

    if (taskInput.length === 0 || names.length === 0) {
      loader.innerHTML = `no names/task selected`;
    } else {
      loader.innerHTML = `${randomName(names)} has to ${taskInput}`;
    }
  });
});
