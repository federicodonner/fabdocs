const penaltyGuidelines = [
  { name: "Introduction", subsections: [{ name: "Introduction" }] },
  {
    number: "1",
    name: "Type of Penalty",
    subsections: [
      {
        number: "1.1",
        name: "Caution",
        content: [
          {
            content:
              "An informal warning for an error that has occurred. Usually very minor and easily fixed, this is not recorded in the system. A Caution may be upgraded into a Warning at a Judge’s discretion.",
          },
        ],
      },
      {
        number: "1.2",
        name: "Warning",
        content: [
          {
            content:
              "A formal warning for an error that has occurred. Warnings are recorded in the system for the current tournament to keep track of which errors each player has incurred. Multiple instances of the warning for the same or similar reasons may result in an upgrade to a harsher penalty.",
          },
        ],
      },
      {
        number: "1.3",
        name: "Intellect Penalty",
        content: [
          {
            content:
              "An Intellect Penalty (IP) is used when a penalty is to be implemented but a game loss penalty would be too harsh. This is particularly relevant when the match structure is best of 1.",
          },

          {
            content:
              "An Intellect Penalty is an invisible game effect that gives the penalized player’s hero -1{i} for 2 or 5 turns. During the game, when the game system, or an effect, would cause the player to draw up to their hero’s intellect, they draw one less card due to the penalty, then the number of the penalty is reduced by 1.",
          },

          {
            content:
              "If a player receives an IP while currently subject to an IP, the new IP will be added to the current number of turns of the existing penalty. It will not stack as to create a lower hero intellect (e.g. two IP2 will not cause a hero to have -2{i} for two turns, it will become an IP4 with the effect of -1{i} for four turns.)",
          },

          {
            content:
              "An intellect penalty can be issued for either 2 or 5 turns, being a minor or major infraction. Variations to this are not recommended.",
          },

          {
            content:
              "Players are recommended to put a dice on top of their deck to keep track of how many instances of drawing up to their hero's intellect the IP penalty remains for.",
          },

          {
            content:
              "If an IP penalty is issued to a player before a game begins, the number of cards that player starts the game with in their hand, will be affected by the IP penalty but the IP number will not be reduced. (e.g. A player that starts the game with an IP2 will typically have 3 cards in their starting hand, and still have an IP with 2 turns left.)",
          },

          {
            content:
              "For the sake of visualizing an intellect penalty, it can be considered a token outside the game with the following effect:",
          },

          { content: "IP Penalty", modifiers: "bold" },

          {
            content:
              "IP Penalty starts with X turn counters on it, where X is the penalty issued. (IP2 means X=2, and IP5 means X=5).",
          },

          {
            content:
              "Your hero has -1{i} for as long as there is a infraction counter on IP Penalty.",
          },

          {
            content:
              "Whenever an effect or the game system instructs a player to draw cards up to their hero's intellect, instead they draw that many cards and remove a infraction counter from the IP Penalty. If there are no infraction counters on IP Penalty, it is removed from the game.]",
          },
        ],
      },
      {
        number: "1.4",
        name: "Game Loss",
        content: [
          {
            content:
              "A game loss is a penalty that ends the current game and the person with the infraction loses the game. If they are between a game or match, the player will receive the game loss on their next game. If a player receives a game loss in a best of 1, they will lose the match. If all players in a game receive a game loss, the game results in a double loss (not a draw).",
          },
        ],
      },
      {
        number: "1.5",
        name: "Match Loss",
        content: [
          {
            content:
              "A match loss is a penalty that ends the current match and the person with the infraction loses the match regardless of the current game score. If a match loss is given between rounds, the player will receive a match loss on their next round.",
          },
        ],
      },
      {
        number: "1.6",
        name: "Disqualification",
        content: [
          "A disqualification is a penalty that results in the player being removed entirely from the tournament. A disqualification is the harshest penalty and the player will be required to write a statement which will be later reviewed by LSS for potential further infractions (such as suspension, or in rare cases, a permanent ban).",
        ],
      },
    ],
  },
  {
    number: "2",
    name: "Gameplay Errors",
    subsections: [
      { number: "2.1", name: "Missed trigger" },
      { number: "2.2", name: "Looking at extra cards" },
      { number: "2.3", name: "Hidden card error" },
      { number: "2.4", name: "Games rule violation" },
      { number: "2.5", name: "Failure to maintain game state" },
    ],
  },
  {
    number: "3",
    name: "Tournament Errors",
    subsections: [
      { number: "3.1", name: "Tardiness" },
      { number: "3.2", name: "Outside assistance" },
      { number: "3.3", name: "Slow play" },
      { number: "3.4", name: "Decklist error" },
      { number: "3.5", name: "Presenting an illegal deck" },
      { number: "3.6", name: "Draft procedure violation" },
      { number: "3.7", name: "Marked cards" },
      { number: "3.8", name: "Insufficient shuffling" },
      { number: "3.9", name: "Improper shuffling" },
      { number: "3.10", name: "Unsporting conduct" },
      { number: "3.11", name: "Improperly determining a winner" },
      { number: "3.12", name: "Bribery" },
      { number: "3.13", name: "Wagering" },
      { number: "3.14", name: "Aggressive behaviour" },
      { number: "3.15", name: "Theft" },
      { number: "3.16", name: "Stalling" },
      { number: "3.17", name: "Cheating" },
      { number: "3.18", name: "Conceding" },
      { number: "3.19", name: "Rules sharking" },
    ],
  },
];

export default penaltyGuidelines;
