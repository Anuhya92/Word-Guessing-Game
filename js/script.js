const WORDS = [
        { word: "dependent", hint: "Relies on something else" },
        { word: "dog", hint: "A common household pet that barks" },
        { word: "superficial", hint: "Only concerned with surface appearance" },
        { word: "admit", hint: "To confess or acknowledge" },
        { word: "juice", hint: "Liquid from fruits or vegetables" },
        { word: "javascript", hint: "Programming language of the web" },
        { word: "developer", hint: "Someone who writes code" },
        { word: "airplane", hint: "Flies in the sky and carries passengers" },
        { word: "fun", hint: "Enjoyable activity" },
        {
          word: "manipulate",
          hint: "To skillfully handle or control something",
        },
        { word: "transition", hint: "Change from one state to another" },
        { word: "school", hint: "Place for learning" },
        {
          word: "computer",
          hint: "Electronic device used for processing data",
        },
        { word: "programming", hint: "The process of writing code" },
        { word: "north", hint: "One of the four cardinal directions" },
      ];

      const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
      let selectedWord, hint, guessedLetters, remainingAttempts, gameActive;
      let loggedIn = false;

      const loginBtn = document.getElementById("loginBtn");
      const logoutBtn = document.getElementById("logoutBtn");
      const startGameBtn = document.getElementById("startGameBtn");

      // LOGIN SYSTEM
      loginBtn.addEventListener("click", () => {
        const username = prompt("Enter your username to log in:");
        if (username && username.trim() !== "") {
          loggedIn = true;
          alert(`👋 Welcome, ${username}!`);

          // Show how to play after login
          alert(
            " HOW TO PLAY WORDMASTER 🧩\n\n" +
              " GOAL:\nGuess the hidden word one letter at a time before you run out of attempts.\n\n" +
              " RULES:\n" +
              "1️⃣ Choose a difficulty (Easy, Medium, Hard).\n" +
              "2️⃣ You’ll get a hint about the word.\n" +
              "3️⃣ Enter one letter per turn.\n" +
              "4️⃣ Each wrong guess costs 1 attempt.\n" +
              "5️⃣ Repeating a guessed letter also costs 1 attempt.\n" +
              "6️⃣ Win by revealing all letters before attempts run out!\n\n" +
              "💡 TIP: Think carefully and use the hint wisely!\n\n" +
              "When you’re ready, click 'Start Game' below to begin!"
          );

          loginBtn.disabled = true;
          logoutBtn.disabled = false;
          startGameBtn.disabled = false;
        } else {
          alert(" Login cancelled or invalid name. Try again!");
        }
      });

      logoutBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to log out?")) {
          loggedIn = false;
          alert("You’ve been logged out. See you soon!");
          loginBtn.disabled = false;
          logoutBtn.disabled = true;
          startGameBtn.disabled = true;
        }
      });

      // MAIN GAME INITIALIZATION
      function initGame() {
        //  Simple input validation before starting
        if (!loggedIn) {
          alert(" Please log in first to start the game!");
          return;
        }
        //  User input with prompt
        let difficulty = prompt(
          "Choose difficulty:\n\n Easy = 12 attempts\n Medium = 8 attempts\n Hard = 5 attempts\n\nType: easy / medium / hard"
        );
        //  Cancel handling
        if (difficulty === null) {
          alert("Game cancelled before starting. Come back anytime!");
          return;
        }
        //  Conditional logic for difficulty level
        difficulty = difficulty.trim().toLowerCase();
        if (difficulty === "easy") {
          remainingAttempts = 12;
        } else if (difficulty === "medium") {
          remainingAttempts = 8;
        } else if (difficulty === "hard" || difficulty === "difficult") {
          remainingAttempts = 5;
        } else {
          alert(
            "Invalid choice. Defaulting to Medium difficulty (8 attempts)."
          );
          remainingAttempts = 8;
        }
          alert(
            `You choose "${difficulty}". You have ${remainingAttempts} attempts!`
          );
        }