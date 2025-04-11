
// Ask the player a question using prompt and trim the input
function ask(promptText) {
  return prompt(promptText)?.trim();
}

// Ask until a valid input is provided
function askWithValidation(question, validAnswers) {
  let answer;
  do {
    answer = ask(question)?.toLowerCase();
    if (!validAnswers.includes(answer)) {
      alert(`❗ Invalid input. Please choose one of: ${validAnswers.join(" / ")}`);
    }
  } while (!validAnswers.includes(answer));
  return answer;
}

// Initialize player and inventory
let player = "";
let inventory = [];

// List of all room names (for user display)
const roomNames = [
  "Power Grid",
  "Security Room",
  "Lab",
  "Ventilation Shaft",
  "Server Room"
];

// Track visited rooms to avoid repetition
let visitedRooms = [];

// Action inside Power Grid room
function powerGridRoom() {
  alert("⚡ You enter the Power Grid. Sparks are flying everywhere.");

  const choice = askWithValidation("You see a toolbox on the floor. Pick it up? (yes/no)", ["yes", "no"]);
  if (choice === "yes") {
    alert("🧰 You picked up a TOOLBOX.");
    inventory.push("Toolbox");
  } else {
    alert("You left the toolbox behind.");
  }
}

// Action inside Security Room
function securityRoom() {
  alert("🔒 You enter the Security Room. There’s a locked locker and a broken camera.");

  const choice = askWithValidation("Try to open the locker? (yes/no)", ["yes", "no"]);
  if (choice === "yes") {
    if (inventory.includes("Toolbox")) {
      alert("🗝️ You used the TOOLBOX to open the locker and found a KEYCARD!");
      inventory.push("Keycard");
    } else {
      alert("You need tools to open the locker. Nothing happens.");
    }
  } else {
    alert("You ignored the locker.");
  }
}

// Action inside Lab
function labRoom() {
  alert("🧪 You enter a dim lab. Strange chemicals are on the table.");

  const choice = askWithValidation("You see a glowing liquid. Drink it? (yes/no)", ["yes", "no"]);
  if (choice === "yes") {
    alert("🤢 Oh no! It was toxic. You feel dizzy and lose time... (Skip next room)");
    inventory.push("Poisoned");
  } else {
    alert("Wise choice. You didn’t touch unknown substances.");
  }
}

// Action inside Ventilation Shaft
function ventilationRoom() {
  alert("🌀 You crawl into the ventilation shaft. It's tight and dark.");

  const choice = askWithValidation("There’s a cracked glass panel. Try to break it with a hammer? (yes/no)", ["yes", "no"]);
  if (choice === "yes") {
    if (inventory.includes("Toolbox")) {
      alert("🔨 You smashed the glass and found a hidden PASSCODE!");
      inventory.push("Passcode");
    } else {
      alert("You have nothing to break it with. Nothing happens.");
    }
  } else {
    alert("You crawl back carefully.");
  }
}

// Action inside Server Room
function serverRoom() {
  alert("💻 You enter the Server Room. Blinking lights and wires surround you.");

  const riddle = askWithValidation("To shut down the AI, solve this: What is (25 + 15) / 4?", ["10", "9", "11", "13"]);
  if (Number(riddle) === 10) {
    alert("✅ Access granted. Shutdown sequence initiated.");
    inventory.push("ShutdownCode");
  } else {
    alert("❌ Wrong answer. AI remains active.");
  }
}

// Room dispatcher – routes the player to the selected room
function visitRoom(roomNumber) {
  switch (roomNumber) {
    case 1: powerGridRoom(); break;
    case 2: securityRoom(); break;
    case 3: labRoom(); break;
    case 4: ventilationRoom(); break;
    case 5: serverRoom(); break;
    default: alert("Invalid room number.");
  }
  visitedRooms.push(roomNumber);
}

// Main game function
function playGame() {
  alert("⚠️ Welcome to 'Escape the Data Center: Extended Edition'");
  player = ask("Enter your name:");
  alert(`Hello, ${player}! Your mission is to explore and shut down the rogue AI.`);

  let turns = 0;

  while (turns < 3) {
    // Show numbered room list (excluding visited ones)
    let availableRooms = roomNames
      .map((room, i) => visitedRooms.includes(i + 1) ? null : `${i + 1}. ${room}`)
      .filter(Boolean)
      .join("\n");

    const roomChoice = askWithValidation(`Choose a room to explore:\n${availableRooms}`, ["1", "2", "3", "4", "5"]);
    const numChoice = Number(roomChoice);

    if (visitedRooms.includes(numChoice)) {
      alert("🚫 You've already visited that room. Choose another one.");
      continue;
    }

    visitRoom(numChoice);
    turns++;

    // If poisoned, skip next round
    if (inventory.includes("Poisoned")) {
      alert("😵 You're poisoned and skip the next room...");
      inventory = inventory.filter(item => item !== "Poisoned");
      turns++;
    }
  }

  // Final Check
  alert("🚪 Approaching the final AI Core...");

  if (inventory.includes("ShutdownCode") && inventory.includes("Keycard")) {
    alert(`🎉 ${player}, you used the KEYCARD and SHUTDOWN CODE to disable the AI. You escaped!`);
  } else {
    alert(`🔐 ${player}, you are missing critical items. The AI locks you in forever.`);
  }
}

playGame();