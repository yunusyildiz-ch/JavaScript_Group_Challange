# 📋 Pseudocode – Game Flow

This is the high-level logic behind **"Data Center Breakout: Rogue AI"** 🧠💻  
A step-by-step breakdown of how the game operates using only JavaScript prompts and alerts.

---

## 🟢 Game Start

- Show welcome message (`alert`)
- Ask for player name (`prompt`)
- Initialize empty inventory `[]`

---

## 🗂️ Define Rooms (Each with a Random Challenge)

- Power Grid → random challenge  
- Cooling Room → random challenge  
- AI Core → random challenge  

---

## 🚪 Enter Each Room

**For each room:**

1. Show room name (`alert`)
2. Ask player for action (`explore`, `skip`, or `inventory`)

---

## ❓ Player Action Logic

### 🔍 If player chooses **explore**:

- Run a challenge (`logic`, `math`, `memory`, etc.)
- If passed:
  - Show success message
  - Add item to inventory:
    - `"Tool"` if regular room
    - `"Keycard"` if AI Core
- If failed:
  - Ask if player wants to retry
    - If no → **Game Over**
    - If yes → run challenge again
      - If passed → continue
      - If failed → **Game Over**

---

### ⏩ If player chooses **skip**:

- 50% chance: trigger trap → **Game Over**
- 50% chance: continue to next room

---

### 🎒 If player chooses **inventory**:

- Show current inventory (or "Empty")
- Let player choose again in the same room

---

## 🔐 Final Escape

- After all rooms are complete:
  - Show escape message
  - If `inventory` includes `"Keycard"`:
    - ✅ **Victory! Player escapes**
  - Else:
    - 🔒 **Failure! Trapped forever**

---

## 🏁 End Game

- Display final outcome using `alert()`

---

# 💻 Pseudocode (Structured – Code Style)

```bash
START GAME
  - Show welcome message
  - Ask for player name
  - Initialize empty inventory

DEFINE ROOMS:
  - Power Grid (with a random challenge)
  - Cooling Room (with a random challenge)
  - AI Core (with a random challenge)

SHOW mission intro

FOR EACH room IN rooms:
  - Show room name
  - Ask player: explore / skip / inventory

  IF player chooses "skip":
    - Random chance: trigger trap → GAME OVER
    - Else, continue to next room

  IF player chooses "inventory":
    - Show collected items
    - Stay in same room (ask again next turn)

  IF player chooses "explore":
    - Run challenge for this room
    - IF passed:
        - Show success message
        - IF room is AI Core → add "Keycard" to inventory
        - ELSE → add "Tool" to inventory
    - IF failed:
        - Ask: "Retry?"
        - IF no → GAME OVER
        - IF yes:
            - Run challenge again
            - IF fail again → GAME OVER
            - ELSE → show comeback message

AFTER ALL ROOMS:
  - Show final escape attempt
  - IF inventory contains "Keycard":
      - Show WIN message
  - ELSE:
      - Show trapped (LOSE) message

END GAME

```

---

# 👥 Team Members

This game was created with ❤️ **love**, 🧠 **logic**, and ☕ **lots of coffee** by our unstoppable team:

- 🧑‍💻 Sara Posso PARRA
- 🧑‍💻 Dawit Teum GEBRU
- 🧑‍💻 Yunus YILDIZ

© 2025 Powercoders Bootcamp – JavaScript Group Challenge