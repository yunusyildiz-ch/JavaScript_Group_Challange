function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function ask(promptText) {
    return prompt(promptText)?.trim();
  }
  
  function logicChallenge() {
    const question = "A switch flips the state. Starting from off, what’s the state after 3 flips?";
    const answer = ask(question);
    return answer.toLowerCase() === "on";
  }
  
  function mathChallenge() {
    const answer = ask("Solve: (12 + 18) / 3");
    return Number(answer) === 10;
  }
  
  function algebraChallenge() {
    const equation = "Solve for x: 2x + 3 = 15";
    const answer = ask(equation);
    return Number(answer) === 6;
  }
  
  function codeBreakingMath() {
    const code = getRandomInt(1000);
    const mathRiddle = `To unlock the code, solve: (x * 2) + 100 = ${code + 100}`;
    const answer = ask(mathRiddle);
    return Number(answer) === (code / 2);
  }
  
  function memoryChallenge() {
    const code = ["K", "9", "Z"][getRandomInt(3)] + getRandomInt(10);
    alert(`Remember this code: ${code}`);
    const guess = ask("Enter the code you just saw:");
    return guess?.toUpperCase() === code;
  }
  
  function getRandomChallenge() {
    const challenges = [
      logicChallenge,
      mathChallenge,
      algebraChallenge,
      codeBreakingMath,
      memoryChallenge
    ];
    return challenges[getRandomInt(challenges.length)];
  }
  
  function playGame() {
    alert("⚠️ Welcome to 'Data Center Breakout: Rogue AI'");
    const player = ask("Enter your name:");
    const inventory = [];
    const rooms = [
      { name: "Power Grid", challenge: getRandomChallenge() },
      { name: "Cooling Room", challenge: getRandomChallenge() },
      { name: "AI Core", challenge: getRandomChallenge() }
    ];
  
    alert(`Hello, ${player}! Your mission is to shut down the AI and escape.`);
  
    for (let room of rooms) {
      alert(`🔐 Entering: ${room.name}`);
      const action = ask("What do you want to do? (explore / skip / inventory)").toLowerCase();
  
      if (action === "skip") {
        alert("You skipped! Risky move…");
        if (getRandomInt(2) === 0) {
          alert("⚠️ You walked into a trap! Game Over.");
          return;
        }
        continue;
      } else if (action === "inventory") {
        alert("🎒 Inventory: " + (inventory.length ? inventory.join(", ") : "Empty"));
        continue;
      }
  
      let success = room.challenge();
      if (success) {
        alert("✅ Challenge passed!");
        const item = room.name === "AI Core" ? "Keycard" : "Tool";
        inventory.push(item);
      } else {
        const retry = ask("❌ Failed! Retry? (yes/no)");
        if (retry.toLowerCase() !== "yes") {
          alert("You gave up. The AI locks the door forever.");
          return;
        }
        if (!room.challenge()) {
          alert("You failed again. GAME OVER.");
          return;
        } else {
          alert("Nice comeback!");
        }
      }
    }
  
    // Final Escape
    alert("🚪 Reaching the main exit…");
    if (inventory.includes("Keycard")) {
      alert(`🔓 ${player}, you unlocked the gate and escaped! You win!`);
    } else {
      alert(`🔐 The gate won't open… You forgot the Keycard. ${player}, you're trapped forever.`);
    }
  }
  playGame();
  