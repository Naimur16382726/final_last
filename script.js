document.addEventListener("DOMContentLoaded", function() {
    let users = [
        { name: "User1", points: 100 },
        { name: "User2", points: 200 },
        { name: "User3", points: 150 }
    ];

    let userList = document.getElementById("userList");

    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `${user.name}: ${user.points} points`;
        userList.appendChild(li);
    });

    console.log("Mimi App Loaded!");
});
