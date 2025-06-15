const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");

const log = document.getElementById("log");

function logSubmit(event) {
    event.preventDefault();
    
    if (log) {
        log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
        setTimeout(() => log.textContent = "", 3000); 
    }

    const guestName = input.value.trim();
    if (guestName === "") return;
        
    const li = document.createElement("li");
    li.textContent = guestName;

    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    li.textContent = `${guestName} (Added at ${timeString})`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove());
        
    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Attending";
    rsvpBtn.addEventListener("click", () => {
        rsvpBtn.textContent =
        rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
        li.classList.toggle("attending");
    });
        
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
        
    const list = document.getElementById("guest-list");
    if (list.children.length >= 10) {
        alert("Guest list limit reached (10)");
        return;
    }
        
    list.appendChild(li);
    input.value = "";
}

form.addEventListener("submit", logSubmit);