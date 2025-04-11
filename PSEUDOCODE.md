# 📋 Pseudocode – Game Flow

This is the high-level logic behind **"Data Center Breakout: Rogue AI – Extended Edition"** 🧠💻  
An interactive JavaScript game where you explore rooms, collect items, and try to shut down a rogue AI.

---

## 🟢 1. Game Initialization

- 🔔 Show welcome message (`alert`)
- 🧑 Ask for player name (`prompt`)
- 📦 Initialize empty inventory `[]`
- 📋 Initialize empty visited room list `[]`

---

## 🗂️ 2. Rooms Overview

The player can choose from **5 rooms**, each with a different challenge:

1️⃣ **Power Grid** – sparks, toolbox  
2️⃣ **Security Room** – locked locker  
3️⃣ **Lab** – glowing liquid  
4️⃣ **Ventilation Shaft** – broken glass  
5️⃣ **Server Room** – math riddle

---

## 🎮 3. Game Loop (Max 3 Rounds)

Repeat up to **3 times**:

1. 📜 Show list of **unvisited rooms**
2. 🔢 Ask player to select a room **by number** (1–5)
3. 🚫 If room already visited → show warning and ask again
4. 🚪 Enter selected room and run room-specific scenario
5. ☠️ If "Poisoned" is in inventory → skip next round and remove poison

---

## 🧪 4. Room Events & Choices

Each room has **interactive actions** like:

- 🧰 Power Grid → "Pick up the toolbox?" → add `Toolbox`
- 🔒 Security Room → "Open locker?" → needs `Toolbox` to get `Keycard`
- 🧪 Lab → "Drink the glowing liquid?" → causes `"Poisoned"` status
- 🌀 Ventilation → "Break glass?" → needs `Toolbox` to find `Passcode`
- 💻 Server Room → "Solve a riddle?" → get `ShutdownCode` if correct

---

## ❓ 5. Input & Action Validation

All `prompt()`s validate input:

- Accept only expected answers (`yes/no`, `1–5`, etc.)
- Invalid input shows a friendly ❗ error and repeats the question

---

## 🔐 6. Final Escape Sequence

After 3 room visits:

- 🚪 Player approaches the AI Core
- ✅ If inventory includes both `"Keycard"` and `"ShutdownCode"`:
  - Show victory message – player escapes!
- ❌ Otherwise:
  - Show failure message – player is locked in forever

---

## 🏁 7. End Game

- Show final result using `alert()`
- End script

---

# 💻 Pseudocode (Structured – Code Style)

```bash
START GAME
  - Show welcome message
  - Ask for player name
  - Initialize inventory = []
  - Initialize visitedRooms = []

DEFINE ROOMS:
  1. Power Grid
  2. Security Room
  3. Lab
  4. Ventilation Shaft
  5. Server Room

FOR i from 1 to 3:
  - Show available rooms (excluding visited)
  - ASK user to pick a room number (1–5)
  - IF room already visited:
      - Show warning → retry
  - ELSE:
      - Run selected room logic
      - Mark room as visited

  - IF "Poisoned" in inventory:
      - Show poison message
      - Remove "Poisoned" from inventory
      - Skip next turn (i++)

FINAL ESCAPE CHECK:
  - IF inventory contains "Keycard" AND "ShutdownCode":
      - Show success message
  - ELSE:
      - Show failure message

END GAME

```

---

# 👥 Team Members

This game was created with ❤️ **love**, 🧠 **logic**, and ☕ **lots of coffee** by our unstoppable team:

- 🧑‍💻 Sara Posso PARRA
- 🧑‍💻 Dawit Teum GEBRU
- 🧑‍💻 Yunus YILDIZ

© 2025 Powercoders Bootcamp – JavaScript Group Challenge