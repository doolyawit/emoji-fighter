let fighters = [
  "🪼",
  "🦖",
  "🪸",
  "🦉",
  "🦹🏻‍♀️",
  "🦦",
  "🐩",
  "🦭",
  "🧚🏻‍♀️",
  "👩🏻‍🚀",
  "🤖",
  "🧙🏻‍♂️",
  "🧜🏻‍♀️",
  "🕷",
  "🐆",
  "🦕",
  "🧟‍♀️",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // figther1
  let ranIndex1 = Math.floor(Math.random() * fighters.length);
  let emoji1 = fighters[ranIndex1];
  //figther2
  let ranIndex2 = Math.floor(Math.random() * fighters.length);
  let emoji2 = fighters[ranIndex2];
  //output
  stageEl.textContent = emoji1 + " VS " + emoji2;

  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
});
