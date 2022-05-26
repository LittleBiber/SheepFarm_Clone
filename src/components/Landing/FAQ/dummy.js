export const DATA_LIST = [
  {
    question: "When will the game be released?",
    answer:
      "The early access version of our game will be released on 10 March 2022, and it will be available only to individuals who own Stewart Island pastures. The game's OBT will begin in late April.",
  },
  {
    question: "How do I obtain the pastures required for gameplay?",
    answer: [
      "We're launching a Local NFT marketplace on our website in April 2022 but for the time being, OpenSea is the only place where you can purchase our pastures. The following link will show you where each pasture is located: ",
      <a href="/map" key={Math.random()}>
        https://sheepfarm.io/map
      </a>,
    ],
  },
  {
    question: "How do I obtain the sheep required for gameplay?",
    answer:
      "Sheep can be obtained through a variety of sources, including events, lucky boxes, and NFT marketplaces.",
  },
  {
    question: "Which wallet do I need in order to play the game?",
    answer:
      "A Metamask (Cypress network), Kaikas, or KLIP wallet is required to play the game. Additional wallets will be supported in the future.",
  },
  {
    question: "What kind of blockchain network does the game use?",
    answer:
      "Our game is currently running on the Klaytn chain, but we plan on expanding to other platforms in the future.",
  },
  {
    question: "What is MARD and NGIT?",
    answer: [
      <div key={Math.random()}>
        <strong>• MARD</strong> is an abbreviation for Marmalade token, which is
        an in-game token that can be obtained through gameplay.
      </div>,
      <div key={Math.random()}>
        <strong>• NGIT</strong> is an abbreviation for Nightingale token, which
        is a governance token that will play an essential role in the
        decision-making process regarding gaming features.
      </div>,
    ],
  },
  {
    question: "Where can I find my NFTs?",
    answer: [
      "To view your Sheepfarm NFTs, visit the following page and connect your wallet.",
      <br key={Math.random()} />,
      <a href="/inventory" key={Math.random()}>
        https://sheepfarm.io/inventory
      </a>,
    ],
  },
  {
    question: "How do I open a box or envelope in my inventory?",
    answer: [
      "You can access your boxes by going to the following webpage:",
      <br key={Math.random()} />,
      <a href="/luckybox" key={Math.random()}>
        https://sheepfarm.io/luckybox
      </a>,
    ],
  },
  {
    question: "How can I determine the rarity of my sheep?",
    answer:
      "A collection will be available on our website in the near future. Sheep are currently available in three varieties: Normal, Rare, and Epic.",
  },
  {
    question: "Where can I buy lucky boxes and how much do they cost?",
    answer:
      "The price of each box may vary, and it can be purchased on our website.",
  },
];
