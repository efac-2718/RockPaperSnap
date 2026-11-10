# RockPaperSnap

RockPaperSnap is a Rock Paper Scissors game built with React Native and Expo Router in VS Code. You pick Rock, Paper or Scissors, the computer picks one at random, and a scoreboard keeps track of your wins, draws and losses. The game logic and the screen state (your choice, the computer's choice, the result and the score) are managed with `useState`. The layout uses Flexbox for the scoreboard, the YOU vs COMPUTER arena and the three weapon buttons.

The app uses file-based navigation with two bottom tabs, **Play Game** and **Rules**, defined in `src/app/(tabs)/_layout.tsx` with Ionicons tab icons. A root Stack layout in `src/app/_layout.tsx` hides its own header so only the tab header shows. A custom splash screen and app icon made from the game logo are set up in `app.json`.
