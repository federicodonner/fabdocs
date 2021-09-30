const penaltyGuidelines = [
  {
    number: "0",
    name: "Introduction",
    subsections: [
      {
        number: "0.1",
        name: "Introduction",
        content: [
          {
            content:
              "The purpose of this document is to ensure there is a consistent guideline in which penalties are given. The purpose of providing penalties to players is to ensure there is fair play amongst all players. The intention of these penalties is not to punish mistakes but to educate the players so there is a professional and high standard of play at all levels.",
          },
          {
            content:
              "This document serves as a recommended guideline only. It’s up to the Head Judge, Judge staff and Tournament Organizers to deviate from it when appropriate.",
          },
          {
            content:
              "Updates to this document are scheduled to coincide with the release date of each major booster set. Updates whether scheduled or otherwise, will be announced through an update bulletin posted to the homepage of fabtcg.com. Changes to this document since its last publication are shown in summary of changes below.",
          },
        ],
      },
      {
        number: "0.2",
        name: "Symbol table",
        content: [
          { content: "{i} intellect" },
          { content: "{r} resource point" },
          { content: "{h} life points" },
          { content: "{p} power" },
          { content: "{d} defense value" },
        ],
      },
    ],
  },
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
              "Whenever an effect or the game system instructs a player to draw cards up to their hero's intellect, instead they draw that many cards and remove a infraction counter from the IP Penalty. If there are no infraction counters on IP Penalty, it is removed from the game.",
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
      {
        number: "2.1",
        name: "Missed trigger",
        content: [
          {
            content:
              "A missed trigger is when a triggered ability that was supposed to become a layer on the chain, and resolve, is forgotten about. A triggered ability is different from a resolution, activated or, static ability, in that a triggered ability is an ability that becomes a layer on the chain (which can be responded to), when a game state or event triggers the ability. If a group of triggered abilities are missed together (by relevance of when they are missed), then it is only considered a single offence for the purposes of penalties - each trigger is still fixed separately/independently.",
          },
          {
            content:
              "A trigger is considered missed at the point of when the relevancy of the trigger happens, and the player that controls the triggered ability does not acknowledge either the trigger or the effect of the ability. The point of when the trigger must be acknowledged is different for different triggers. Some typical examples include:",
          },
          {
            content:
              "Snatch’s hit trigger must be announced before the next action is played (i.e. before the chain link resolves).",
            modifiers: "example",
          },
          {
            content:
              "Bittering Thorn’s hit trigger must be acknowledged before the next attack does damage, or there is an effect that interacts with the power of the attack (i.e. when the +1{p} bonus becomes relevant).",
            modifiers: "example",
          },
          {
            content:
              "Spinal Crush’s effect must be announced before the crushed player takes an action which would dictate go again was not lost (i.e. player could make a play that requires an action point).",
            modifiers: "example",
          },
          {
            content:
              "The player that controls the trigger must acknowledge the progression of the game state, or physical game state must have progressed past the point of the trigger becoming relevant for it to be considered missed. An opponent asking to progress the game state is not enough for the trigger to be missed, even if the player that controls the trigger acknowledges it. Similarly, the player that controls the trigger must be given the opportunity to acknowledge the trigger before the physical game state progresses. If a player is found to be asking to progress the game state, or physically progresses the game state to intentionally have a player miss a trigger, other penalties may occur see 3.16 Rules Sharking.",
          },
          {
            content: "Examples of where the trigger is not missed.",
            modifiers: "bold",
          },

          {
            content:
              "Player plays Flock of the Feather Walker. Opponent asks the player if it’s okay to defend/asks if the player has any attack reactions. Player says “yes” but remembers the Quicken Token before the physical game state has changed.",
            modifiers: "example",
          },
          {
            content:
              "Player plays Savage Feast discarding Beast Within. Player resolves the Beast Within triggered ability. Opponent defends with 2 cards. Player is still able to draw a card from Savage Feast as the player has not indicated that he is ready to move to the defending window.",
            modifiers: "example",
          },
          {
            content:
              "If the player that controls the trigger is the one that progresses the game state and the opponent obliges, then the trigger is considered to be missed. It is important to clearly communicate and the intention is not to play in a manner where you want your opponents to miss the trigger.",
          },
          {
            content: "Examples of where the trigger is missed",
            modifiers: "bold",
          },
          {
            content:
              "Player plays Flock of the Feather Walker. Opponent says “No blocks” and the player plays Razor Reflex. (The player has physically progressed the gamestate and has had and opportunity to acknowledge the trigger)",
            modifiers: "example",
          },
          {
            content:
              "Player plays Savage Feast discarding a 6{p} card. Opponent defends with a card. Player says “take 3?” (The player has verbally progressed the gamestate and has had and opportunity to acknowledge the trigger)",
            modifiers: "example",
          },
          { content: "Detrimental Triggers", modifiers: "bold" },
          {
            content:
              "Detrimental triggers generate an effect that is detrimental or partially detrimental to the player. Detrimental effects include (but not limited to) loss of life, discarding cards, banishing cards, destroying cards of your own. If a trigger has a part detrimental and part beneficial, it is still considered a detrimental trigger.",
          },
          {
            content:
              "A player plays an attack action card while a Quicken aura token is in the arena and does not destroy the Quicken token.",
            modifiers: "example",
          },
          {
            content:
              "A player defends with an equipment card with Battleworn and forgets to put a -1{d} counter on it when the combat chain closes.",
            modifiers: "example",
          },
          {
            content:
              "A player attacks with Ravenous Meataxe and forgets to draw and discard a card.",
            modifiers: "example",
          },
          {
            content:
              "A player forgets to banish at the start of their action phase from Soul Shackles.",
            modifiers: "example",
          },
          { content: "Beneficial Triggers", modifiers: "example" },
          {
            content:
              "Beneficial triggers generate an effect that is only beneficial to a player. Beneficial effects include (but are not limited to) gaining life, gaining resources, opponent paying resources to avoid detrimental effects, drawing cards, opponent discarding cards, creating beneficial tokens for the player or detrimental tokens for the opponent, and increases to the properties of the players cards such as pitch, power, defense, and intellect.",
          },
          {
            content: "A player hits with Snatch and forgets to draw a card.",
            modifiers: "example",
          },
          {
            content:
              "A player plays Flock of the Feather Walker and forgets to create a Quicken aura token.",
            modifiers: "example",
          },
          {
            content:
              "A player plays Warmonger’s Recital and the next attack hits but forgets to put it on the bottom of their deck.",
            modifiers: "example",
          },
          {
            content: "Recommended penalty (Detrimental Trigger):",
            modifiers: "bold",
          },
          { content: "Casual - Warning" },
          {
            content:
              "Professional - Warning - It is recommended to upgrade on repeated effects or if a noticeable advantage is to be gained",
          },
          {
            content: "Recommended penalty (Beneficial Trigger):",
            modifiers: "bold",
          },
          { content: "Casual - Caution" },
          { content: "Professional - Caution" },
          { content: "Recommended Fix:", modifiers: "bold" },
          {
            content:
              "When a trigger is NOT considered missed, but the gamestate has progressed, such as when the opponent physically progresses the gamestate without giving the opportunity for the player to acknowledge the trigger, then the gamestate is rewound to the point where the trigger should have been acknowledged and play continues.",
          },
          {
            content:
              "When a trigger is missed, if it is still the same turn, the opponent will decide whether the missed trigger is put on as a layer of the chain. Otherwise play continues.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "Player has two Soul Shackles in the arena and starts the turn with activating Chane then playing an attack. The players now notice they have forgotten the Soul Shackle triggers. Opponent is given the option if he would like each of the Soul Shackle triggers to happen. If he chooses yes the top card(s) will be banished now. (In an event of two triggers, the player has separate choices from each, but must decide each one at the time the trigger was noticed to be missed i.e he can’t see the banish of the first Soul Shackle then decide if he will add the second Soul Shackle trigger as a layer to the chain.)",
            modifiers: "example",
          },
        ],
      },
      {
        number: "2.2",
        name: "Looking at extra cards",
        content: [
          {
            content:
              "A player has seen extra cards that they were not entitled to see (but have yet to reach a hidden zone).",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player sees extra cards while drawing or looking at cards from their deck.",
            modifiers: "example",
          },
          {
            content:
              "A player accidentally revealed cards from their opponent deck while shuffling their deck.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual - Caution" },
          { content: "Professional - Warning" },
          { content: "Casual and Professional fix", modifiers: "bold" },
          {
            content:
              "If this happens while the contents of the deck is not fully randomized (i.e. in the middle of the game when there are known pitched cards at the bottom of the deck), the extra card is revealed to both players and the opponent chooses if the card goes back to the top or bottom of the deck.",
          },
          {
            content:
              "If this occurs while the contents of the deck are completely random (i.e., while shuffling up for start of game) the revealed card is to be shuffled back into the deck and play continues.",
          },
          {
            content:
              "If a player uses this penalty intentionally to gain an advantage or to stall the game, it is considered Unsporting Conduct - Cheating and the penalty would be treated accordingly.",
          },
        ],
      },
      {
        number: "2.3",
        name: "Hidden card error",
        content: [
          {
            content:
              "A player has illegally combined hidden cards from two or more zones into a single collection of cards; therefore, it is not possible to 100% distinguish which cards in the collection were previously in each zone.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player draws to their intellect of 4 at the end of turn but accidentally draws up to 5 cards (drawing an extra card).",
            modifiers: "example",
          },
          {
            content:
              "A player hits with Snatch and draws 2 cards as the card sleeves were stuck together. The cards touch the player’s hand (drawing an extra card).",
            modifiers: "example",
          },
          {
            content:
              "A player picks up a face-down card from their arsenal and accidentally puts it into their hand (combining the hand and arsenal).",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - Warning / IP2" },
          { content: "Casual/Professional fix", modifiers: "bold" },
          {
            content:
              "The player reveals the combined collection of hidden cards to the opponent. The opponent decides which cards should be returned to each zone (ensuring that the number of cards in each zone is the same as before the infraction was committed). The cards are then returned to the zones designated by the opponent. If one of the zones is the deck, the opponent chooses for the card(s) to go to the top and/or bottom of the deck in any order.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player draws two extra cards at the end of their turn. To fix, they would reveal their hand and the opponent selects two cards to go to the top and/or bottom of the deck in any order. The rest of the cards remain in their hand.",
            modifiers: "example",
          },
          {
            content:
              "A player combines their hand and their face-down card in arsenal. To fix, they would reveal the collection of cards and the opponent selects the card that would return to their arsenal face-down, the rest of the cards remain in their hand.",
            modifiers: "example",
          },
        ],
      },
      {
        number: "2.4",
        name: "Games rule violation",
        content: [
          {
            content:
              "A player has made a play that is illegal and in violation of the game rules.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "Player A pitches Leg Tap to attack with Harmonized Kodachi then proceeds to play a Surging Strike. After Surging Strike is defended, players realize Harmonized Kodachi did not have go again.",
            modifiers: "example",
          },
          {
            content:
              "Player A plays Potion of Strength, then activates it and plays Wrecker Romp.",
            modifiers: "example",
          },
          {
            content:
              "You have 1 card intimidated and forget to add it back to your hand at the end of turn. You play your next turn as if the card did not exist then draw to your hero’s intellect at end of turn. You then realize a card is set aside that was intimidated on a previous turn.",
            modifiers: "example",
          },
          {
            content:
              "Player A attacks with a card that has dominate and player B defends with a single card from hand. In the reaction window, Player A plays Pummel, then player B responds with Unmovable from hand. Players then move to the next phase.",
            modifiers: "example",
          },
          {
            content:
              "Player A pitches Enlightened Strike and attacks with Romping Club without having the correct amount of resources to pay for Romping Club’s attack.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - Warning / IP2" },
          { content: "Casual fix", modifiers: "bold" },
          {
            content:
              "If it has been caught immediately, the game state is reversed to the time it was last legal and play continues. The player who committed the infraction is given a Warning.",
          },
          {
            content:
              "If it is still the same turn, the player who did not commit the infraction is asked if they would like the game state to be reversed to the time it was last legal. If they do not, play will continue from the point the Judge was called. The player who committed the infraction is given a Warning for Games Rule Violation. Their opponent is given a Warning for Failure to maintain game state.",
          },
          {
            content:
              "If it is not the same turn, the Judge should review the game state and decide whether it has progressed too far to be reversed. In most cases, too much will have happened in the interim and the Judge will advise that the game should continue from its current state. If it is reversible, the player who did not commit the infraction is given the option of reversing the game state to the time it was last legal. If they decline this option, play will continue from the point where the Judge was called. The player who committed the infraction is given a Warning for Games Rule Violation. Their opponent is given a Warning for Failure to maintain game state.",
          },
          { content: "Professional Fix", modifiers: "bold" },
          {
            content:
              "If it has been caught immediately, the game state is reversed to the time it was last legal and play continues. The player who committed the infraction is given a Warning.",
          },
          {
            content:
              "If it is still the same turn, the player who did not commit the infraction is asked if they would like the game state to be reversed to the time it was last legal. If they do not, play will continue from the point the Judge was called. The player who committed the infraction is given a Warning for Games Rule Violation. Their opponent is given a Warning for Failure to maintain game state.",
          },
          {
            content:
              "If it is not the same turn, the Judge should review the game state and decide whether it has progressed too far to be reversed. In most cases, too much will have happened in the interim and the Judge will advise that the game should continue from its current state. If it is reversible, the player who did not commit the infraction is given the option of reversing the game state to the time it was last legal. If they decline this option, play will continue from the point where the Judge was called. The player who committed the infraction is given a Warning for Games Rule Violation. Their opponent is given a Warning for Failure to maintain game state.",
          },
          {
            content:
              "If the player who committed the infraction is deemed to have gained a considerable advantage, it is recommended to upgrade this penalty to an IP2.",
          },
        ],
      },
      {
        number: "2.5",
        name: "Failure to maintain game state",
        content: [
          {
            content:
              "A player (or both players) are playing with an incorrect game state. Not being aware of an opponent’s game rule violation is a failure to maintain game state.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "Opponent defends with Remembrance and both players are unaware that this is not allowed until two attacks later.",
            modifiers: "example",
          },
          {
            content:
              "A player forgets to reveal the card that they searched for with Show Time! It is not noticed until the next turn.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - Warning" },
          { content: "Casual/Professional Fix", modifiers: "bold" },
          {
            content:
              "The procedure for fixing this is the same as Game Rule Violation. The game state will be fixed as long as not too much has happened since the violation. In instances that are caught by a player relatively quickly, only the player who did not correct the game state will get a warning for failure to maintain game state.",
          },
        ],
      },
    ],
  },
  {
    number: "3",
    name: "Tournament Errors",
    subsections: [
      {
        number: "3.1",
        name: "Tardiness",
        content: [
          {
            content:
              "A player is not seated at their table once the round starts.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player arrives at their seat 5 minutes after the round starts.",
            modifiers: "example",
          },
          {
            content:
              "A player sits down at the wrong table and does not realize until after they start playing with the incorrect opponent.",
            modifiers: "example",
          },
          {
            content:
              "A player plays a whole match with the incorrect opponent.",
            modifiers: "example",
          },
          {
            content:
              "A player loses cards in their deck and cannot find replacement cards within 10 minutes.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual", modifiers: "bold" },
          {
            content:
              "Best of 1 match - IP5 (3 mins after round timer starts), Match Loss (10 mins)",
          },
          {
            content:
              "Best of 3 match - Game Loss (3 mins), Match Loss (10 mins)",
          },
          { content: "Professional", modifiers: "bold" },
          {
            content:
              "Best of 1 match - IP5 (0 mins after round time starts), Match Loss (10 mins)",
          },
          {
            content:
              "Best of 3 match - Game Loss (0 mins), Match Loss (10 mins)",
          },
          { content: "Casual and Professional Fix", modifiers: "bold" },
          {
            content:
              "A player is considered tardy when the amount of time since the round timer starts has surpassed the threshold for the tournament.",
          },
          {
            content:
              "The thresholds recommended for IP5 / Game Loss / Match Loss penalties are provided above.",
          },
          {
            content:
              "This can be changed at Tournament Organizers discretion provided it is announced at the start of the tournament. The player present at the table should alert a Judge if their opponent is late or arrives late in order to apply the appropriate penalty. If a Game Loss is issued in a best of 3 match, the player who received the game loss will choose who plays first in the next game (if there is one).",
          },
        ],
      },
      {
        number: "3.2",
        name: "Outside assistance",
        content: [
          {
            content:
              "Players may not seek or offer outside assistance from any player, spectator, official or device during a game or match, including referring to personal notes made prior to, or during the event. The exception to this is personal notes (but not other forms of outside assistance) may be referred to during the start of game procedure, for example “sideboard guides”. Players may not give advice to players of a match they are a spectator of.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "During a game (after the start of game procedure has concluded) you reference notes that were created outside of the match.",
            modifiers: "example",
          },
          {
            content:
              "You are communicating with someone outside the game using hand gestures, facial expressions, electronic devices, or other means of communication.",
            modifiers: "example",
          },
          {
            content:
              "You walk past a table with a game in progress and you say out loud “Oh, that Crippling Crush is going to devastate him!”",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Game Loss" },
          { content: "Professional - Match Loss" },
          {
            content:
              "It’s important to take into account intent. If the player did it intentionally, upgrade the penalty, which in some cases would make this infraction fall under Unsporting Conduct - Cheating.",
          },
          {
            content:
              "In cases when the comment is harmless or out of ignorance, a downgrade to a warning is recommended, at the Judge’s discretion.",
          },
          {
            content:
              "Players and spectators not in the tournament giving outside assistance may be asked to leave the venue if outside assistance is deemed intentional or occurs on multiple instances. Additional penalties such as suspension may be applied if the outside assistance is deemed malicious.",
          },
        ],
      },
      {
        number: "3.3",
        name: "Slow play",
        content: [
          {
            content:
              "Players are expected to play at a pace sufficient enough to complete the match within the round time limit. Slow play is when a player takes longer than an acceptable period of time to make a decision in order to progress the game state. If a player looks to be taking advantage of the time limit to benefit their current position in a game or match, it’s considered stalling - see section 3.16 Stalling.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player checking either player’s graveyard multiple times before taking an action.",
            modifiers: "example",
          },
          {
            content:
              "A player taking excessive time to shuffle after they search their deck with Show Time!",
            modifiers: "example",
          },
          {
            content:
              "A player has one card in their hand and takes an unreasonable amount of time to decide what to do.",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Caution" },
          { content: "Professional - Warning" },
          {
            content:
              "If a player is suspected to be playing slowly on purpose, it’s considered Stalling and is recommended that a Judge be alerted as soon as possible. Multiple instances of Slow Play Warnings can be upgraded to a game loss at both levels of play. This is up to the Judge’s discretion and harsher penalties apply if the player has a history of stalling or slow play.",
          },
        ],
      },
      {
        number: "3.4",
        name: "Decklist error",
        content: [
          {
            content:
              "A player has incorrectly filled out their deck registration or card pool registration sheet (decklist) so that it does not match the cards they intended to play, or needs to be adjusted due to cards being lost during the tournament.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player has 3 x Snatch (1) on their decklist, but only owns 2 and assumed they would get the third by the time the tournament starts but failed to do so. Now they are only playing with 2 x Snatch (1).",
            modifiers: "example",
          },
          {
            content:
              "A player lists 3 x “Pummel” but does not state what the pitch value of the card is, when there are 3 variations of Pummel that it could be.",
            modifiers: "example",
          },
          {
            content:
              "A player lists Snapdragon Scalers as one of their equipment, but they have Ironrot Legs in their deck instead.",
            modifiers: "example",
          },
          {
            content:
              "A player has 3 Potion of Strength on their decklist, but in their deck they have 3 Timesnap Potion and 0 Potion of Strength.",
            modifiers: "example",
          },
          {
            content:
              "A player has Primeval Bellow on their decklist, but Awakening Bellow in their deck.",
            modifiers: "example",
          },
          {
            content:
              "A player has 1 Harmonized Kodachi on their decklist, but has 2 in their deck.",
            modifiers: "example",
          },
          {
            content:
              "A player loses a number of cards in their deck during the event and cannot find replacements.",
            modifiers: "example",
          },
          {
            content:
              "A player has only 63 cards on their decklist, 4 of which are equipment cards, making their deck illegal as they can only present 59 main deck cards to their opponent.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – IP2" },
          { content: "Professional - IP2" },
          {
            content:
              "Since casual tournaments usually do not require decklists, it’s assumed that tournaments run at Casual with decklists are intended to be of a more competitive nature, therefore the penalty for Casual is harsher than it would be otherwise.",
          },
          {
            content:
              "If it’s thought there is an advantage gained by a decklist error, the penalty may be upgraded.",
          },
          {
            content:
              "If the decklist error is caught before any play has begun, it is recommended that the penalty be downgraded.",
          },
          {
            content:
              "If the decklist error is called upon by the player them self, the penalty may be downgraded at the Judge’s discretion.",
          },
        ],
      },
      {
        number: "3.5",
        name: "Presenting an illegal deck",
        content: [
          {
            content:
              "A player has presented an illegal deck to their opponent at the start of game.",
          },
          {
            content: "Examples include (but are not limited to):",
            modifiers: "bold",
          },
          {
            content:
              "During a Classic Constructed tournament, a player presents a 58 card deck during the start of game procedure.",
            modifiers: "example",
          },
          {
            content:
              "During a Sealed Deck tournament, a player presents a 29 card deck during the start of game procedure.",
            modifiers: "example",
          },
          {
            content:
              "During a Classic Constructed tournament, a player presents a 61 card deck to their opponent that includes a card that belongs to an opponent from a previous round.",
            modifiers: "example",
          },
          {
            content:
              "During a Classic Constructed tournament, a player presents a 90 card deck during the start of game procedure.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Warning" },
          {
            content:
              "Professional -  IP5 (If the error is caught by the player them self, it's recommended the penalty is downgraded to an IP2.) / Match Loss",
          },
          { content: "Casual/Professional Fix", modifiers: "bold" },
          {
            content:
              "If the deck has less than the minimum number of cards required for that format, the player adds cards until the number of cards in their deck is equal to, but not more than, the minimum number of cards required. They cannot remove or exchange any cards from the presented deck.",
          },
          {
            content:
              "If there are illegal cards in the deck, such as cards that are not theirs, these cards are removed. If the deck is then less than the minimum number of cards required for that format, they add cards from the cards they are not using, until the deck contains the minimum number of cards required. If they do not have enough cards available to do so, Cracked Baubles are added to their deck until it contains the minimum number of cards required.",
          },
          {
            content:
              "If the deck presented has more than the maximum number of cards that could legally be played in the format (factoring in equipment and weapons used), the player must remove cards from their deck until the total number of weapons, equipment, and cards that can be played in their deck is equal to the maximum number of cards that can be registered for that format. In this instance, the recommended penalty is a match loss.",
          },
        ],
      },
      {
        number: "3.6",
        name: "Draft procedure violation",
        content: [
          {
            content:
              "A player commits a procedural infringement during a draft.",
          },
          { content: "Examples (minor):", modifiers: "bold" },
          {
            content: "A player passes a pack the wrong way during the draft.",
            modifiers: "example",
          },
          {
            content:
              "A player forgets to count the cards in the pack after picking a card during a professional tournament.",
            modifiers: "example",
          },
          { content: "Examples (major):", modifiers: "bold" },
          {
            content:
              "A player picks a card and adds it to their pile, then tries to pick it up to change it for another card.",
            modifiers: "example",
          },
          {
            content:
              "A player passes a pack with multiple cards rotated in a different direction to other cards in the pack.",
            modifiers: "example",
          },
          { content: "Examples (severe):", modifiers: "bold" },
          {
            content:
              "A player looks at another person’s pack during the draft in order to try and gain information they should not have.",
            modifiers: "example",
          },
          {
            content:
              "A player intentionally puts a Brute card in the front of the pack to signal the next player to go Brute.",
            modifiers: "example",
          },
          { content: "Recommended penalty - minor", modifiers: "bold" },
          { content: "Casual – Caution" },
          { content: "Professional - Warning" },
          { content: "Recommended penalty - major", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - IP2" },
          { content: "Recommended penalty - severe", modifiers: "bold" },
          { content: "Casual – Game Loss" },
          { content: "Professional - DQ" },
          {
            content:
              "In some cases, it’s important that the Judge does not interrupt the players train of thought as it would slow down and disrupt the draft. The Judge should wait until the current pack, or in some cases, the entire draft is finished before implementing a penalty.",
          },
        ],
      },
      {
        number: "3.7",
        name: "Marked cards",
        content: [
          {
            content:
              "Players must ensure that all cards and card sleeves in their deck are in good condition and do not have markings or any other features that make them identifiable while face down in a deck. This includes (but is not limited to) scuff marks, nail indents, bent corners, and curvature of the card itself.",
          },

          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player has 3 cards in their deck with bending that is not uniform with the other cards in the deck. All 3 cards Snatch (1).",
            modifiers: "example",
          },
          {
            content:
              "A player has an amount of foil cards in their deck that are noticeably different from the rest of the cards in their deck.",
            modifiers: "example",
          },
          {
            content:
              "A player has a deck without sleeves and there is noticeable wear on a number of the cards in the deck. When inspecting it’s noticed that all the cards with wear pitch for {r}{r}{r}.",
            modifiers: "example",
          },
          {
            content:
              "A player has an altered art card in their deck that is noticeably thicker than the other cards in the deck, due to paint on the surface of the card.",
            modifiers: "example",
          },
          {
            content:
              "A player has a deck of cards with different size sleeves that are easily distinguishable.",
            modifiers: "example",
          },
          {
            content:
              "A player has some amount of cards upside down and it is possible to tell the difference between the cards.",
            modifiers: "example",
          },
          {
            content:
              "Players should check their cards and sleeves after every round and replace any that are considered worn or marked. If a player is unsure if their cards are in acceptable condition, it’s recommended they check with the Head Judge.",
          },
          {
            content: "Recommended penalty - minor (no pattern)",
            modifiers: "bold",
          },
          { content: "Casual – Caution" },
          { content: "Professional - Warning" },
          {
            content: "Recommended penalty - major (pattern)",
            modifiers: "bold",
          },
          { content: "Casual – Match Loss / DQ" },
          { content: "Professional - DQ" },
          {
            content:
              "A player may be asked by a Judge to change their sleeves. If they are between games in a match, the Judge may advise for the player to change the sleeves after the round as not to cause delays to the tournament.",
          },
        ],
      },
      {
        number: "3.8",
        name: "Insufficient shuffling",
        content: [
          {
            content:
              "To ensure fairness, both players decks must be sufficiently randomized prior to beginning the game and after anytime a player looks through the contents of a deck. Insufficient shuffling is when a player fails to sufficiently randomize their deck through shuffling, before presenting it to their opponent.",
          },
          {
            content:
              "There are multiple ways to randomize a deck, and it is encouraged that more than one method is used, such as riffle shuffle, and overhand shuffle.",
          },
          {
            content:
              "Once a deck is presented to the opponent it’s implied that the deck is thoroughly randomized.",
          },
          {
            content:
              "Players are expected to shuffle their deck in an efficient manner so that it does not take longer than 30 seconds.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player finishes their start of game procedure and riffle shuffles his deck a single time and presents it to their opponent.",
            modifiers: "example",
          },
          {
            content:
              "A player pile shuffles, then collects the piles and presents it to their opponent. A player sits down and pre-creates sequences on hands they want in their deck then cuts a couple times before presenting the deck to their opponent.",
            modifiers: "example",
          },
          {
            content:
              "Players are not allowed to presort, arrange the order of cards in their decks, or manipulate the order of cards before or during shuffling. This is considered Unsporting Conduct – Cheating.",
          },
          {
            content: "Recommended penalty - minor (no pattern)",
            modifiers: "bold",
          },
          { content: "Casual – Caution" },
          { content: "Professional - Warning" },
          {
            content: "Recommended penalty - major (pattern)",
            modifiers: "bold",
          },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
        ],
      },
      {
        number: "3.9",
        name: "Improper shuffling",
        content: [
          {
            content:
              "A player has shuffled their deck illegally resulting in pitched cards at the bottom of deck to be randomized into the deck.",
          },
          {
            content: "Examples include (but are not limited to):",
            modifiers: "bold",
          },
          {
            content:
              "A player triggers Katsu's hero ability, searching their deck when they were ineligible to do so.",
            modifiers: "example",
          },
          {
            content:
              "A player plays Singing Steelblade and searches their deck, when they had no resources available and are unable to generate resources to pay for it.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - IP5" },
          {
            content:
              "If there are zero known cards at the bottom of the deck, the penalty should be downgraded to a warning. If there is minimal disruption to the order of the deck, for example because their are only 3 known cards on the bottom of the deck, the penalty may be downgraded to IP2.",
          },
          { content: "Casual/Professional Fix", modifiers: "bold" },
          { content: "The deck is to be shuffled and penalties are issued." },
        ],
      },
      {
        number: "3.10",
        name: "Unsporting conduct",
        content: [
          {
            content:
              "Unsporting conduct is when a player displays negative, offensive, or disruptive behavior that affects the safety or enjoyment of others, and/or the integrity of the event.",
          },
          {
            content:
              "The Head Judge determines what constitutes as Unsporting Conduct during their event. Each Head Judge may have a different opinion of what is acceptable, and this could be due to variables such as age demographic at the event, time constraints, venue rules etc.",
          },
          {
            content:
              "Judges will inform the player as to why their behavior is unacceptable and the player is expected to remedy it immediately (if possible).",
          },
          { content: "Unsporting Conduct - Minor", modifiers: "bold" },
          {
            content:
              "A player who does something that disrupts the flow of a tournament or the participants but does not require investigation or further penalties.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content: "A player uses mild-moderate offensive language.",
            modifiers: "example",
          },
          {
            content:
              "A player throws their deck in frustration after they have lost a game or match.",
            modifiers: "example",
          },
          {
            content: "A player does not pick up litter they have created.",
            modifiers: "example",
          },
          {
            content:
              "A player shoves other players while moving through crowds.",
            modifiers: "example",
          },
          {
            content:
              "A player demands the Head Judge before being given a ruling from a floor Judge.",
            modifiers: "example",
          },
          {
            content:
              "A player demands that their opponent be given a warning before a Judge can resolve the issue.",
            modifiers: "example",
          },
          {
            content:
              "A player ignores a Judge that ask them to move out of the play area.",
            modifiers: "example",
          },
          { content: "Recommended penalty - minor", modifiers: "bold" },
          { content: "Casual – Warning" },
          { content: "Professional - Warning" },
          { content: "Unsporting Conduct - Major", modifiers: "bold" },
          {
            content:
              "A player who’s actions negatively impact one or more players by making them feel threatened, harassed, scared, belittled or unsafe. This includes communicated (verbal and/or written) harassment and physical harassment towards another person.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content: "A player makes a racial remark towards another person.",
            modifiers: "example",
          },
          {
            content: "A player uses intimidation tactics to get their way.",
            modifiers: "example",
          },
          {
            content: "A player harasses another person on social media.",
            modifiers: "example",
          },
          {
            content:
              "A player takes photos of another person with malicious intent.",
            modifiers: "example",
          },
          {
            content:
              "A player wipes a card on their backside or crotch before playing it.",
            modifiers: "example",
          },
          {
            content:
              "A player makes another person feel unwelcome at an event because of their sexual orientation.",
            modifiers: "example",
          },
          { content: "Recommended penalty - major", modifiers: "bold" },
          { content: "Casual – Match Loss / DQ" },
          { content: "Professional - DQ" },
        ],
      },
      {
        number: "3.11",
        name: "Improperly determining a winner",
        content: [
          {
            content:
              "Improperly determining a winner is when players use a method other than playing a game to its conclusion to determine a winner and loser of a game or match. This includes using manipulation to try and trick the opponent into conceding a match.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "Time is called in the round so players decide to roll a dice to determine the winner to avoid the match resulting in a draw.",
            modifiers: "example",
          },
          {
            content:
              "Trying to see the results of other matches to determine who has the better chance in the future rounds of the tournament.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
        ],
      },
      {
        number: "3.12",
        name: "Bribery",
        content: [
          {
            content:
              "Bribery is when a player offers an incentive to entice their opponent into conceding, or changing the actual outcome of a match result. This also includes accepting such offers.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content: "A player offers their opponent cash to concede.",
            modifiers: "example",
          },
          {
            content:
              "A player offers their opponent their eventual prizes to concede.",
            modifiers: "example",
          },
          {
            content:
              "A player offers their opponent cards out of their folder for a concession.",
            modifiers: "example",
          },
          {
            content:
              "A player offers to concede at a later date for a concession now.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
          {
            content:
              "At Professional tournaments, it’s recommended that Judges remind players (especially before the last round of swiss) about the Bribery policy to ensure nobody is ignorant of this rule.",
          },
          { content: "Casual fix", modifiers: "bold" },
          {
            content:
              "If the player is in the middle of a bribery statement but nothing has been agreed upon, this could be downgraded at Head Judge’s discretion if the player is found to be new/ignorant.",
          },
        ],
      },
      {
        number: "3.13",
        name: "Wagering",
        content: [
          {
            content:
              "Wagering is when a player, spectator, or official of a tournament places or offers bets on the outcome of the tournament, match, or any part of a match result. The wager does not need to be of monetary value, neither is it relevant if the person offering the wager is the one participating in the match being waged on.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "Two or more spectators wager $10 that a specific player will win the current match.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
        ],
      },
      {
        number: "3.14",
        name: "Aggressive behaviour",
        content: [
          {
            content:
              "Aggressive behavior is when a person makes others around them feel uncomfortable by acting threatening and abusive.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player threatens physical abuse to another player during a match.",
            modifiers: "example",
          },
          {
            content:
              "A player throws their own or another person's belongings.",
            modifiers: "example",
          },
          {
            content:
              "A player threatens a Judge when they are not happy with a ruling outcome.",
            modifiers: "example",
          },
          {
            content:
              "A player destroys or attempts to damage tournament materials, such as table or chairs.",
            modifiers: "example",
          },
          {
            content:
              "A player swears at their opponent during or after a match.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Match Loss / DQ" },
          { content: "Professional - Match Loss / DQ" },
          {
            content:
              "The penalty should be determined by the Head Judge based on the severity of the incident.",
          },
        ],
      },
      {
        number: "3.15",
        name: "Theft",
        content: [
          {
            content:
              "A player steals tournament materials from the event, or steals belongings from another player at the event.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player secretly drops cards from the opponent's deck on the floor and hides them with intent of theft.",
            modifiers: "example",
          },
          {
            content:
              "A player steals tablecloths, or table numbers off a table.",
            modifiers: "example",
          },
          {
            content:
              "A player is given prizes, then says to tournament officials that they did not receive prizes with the intent of trying to get more.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
          {
            content:
              "Under rare cases, the penalty may be downgraded if there is miscommunication or ignorance involved and the player returns the item.",
          },
        ],
      },
      {
        number: "3.16",
        name: "Stalling",
        content: [
          {
            content:
              "Stalling is when a player intentionally slows the pace of a game down to take advantage of the time limit.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "A player has a weapon that cost {r}{r} to activate and 1 card in hand with pitch value {r}. They spend an excessive amount of time running down the clock ‘thinking’ about what to do.",
            modifiers: "example",
          },
          {
            content:
              "A player is ahead in the game and starts to play significantly slower as it gets closer to the end of the round, making it very hard for the opponent to have a chance of winning.",
            modifiers: "example",
          },
          {
            content:
              "A player who repetitively checks either player's graveyard in a single turn without progressing the game with the intention of running down the clock.",
            modifiers: "example",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
          {
            content:
              "Stalling is different from Slow Play. Stalling assumes the player is intentionally playing slow to gain an advantage. If it’s deemed the person is not intentionally playing slow, the penalty should be a Slow Play penalty.",
          },
        ],
      },
      {
        number: "3.17",
        name: "Cheating",
        content: [
          {
            content:
              "A player that intentionally breaks Tournament Rules and Policy or Comprehensive Rules.",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – DQ" },
          { content: "Professional - DQ" },
        ],
      },
      {
        number: "3.18",
        name: "Conceding",
        content: [
          {
            content:
              "A player asks for a concession during a match (after presenting their deck). Any kind of pressure or suggestion to concede, such as saying 'Come on, man, don't defend my attack here' is considered to be asking for a concession.",
          },
          {
            content:
              "In a casual tournament, it is recommended to downgrade the penalty if the player is clearly ignorant or new.",
          },
          {
            content:
              "If it is later found during a tournament that asking for a concession has occurred, the penalty would be a match loss in the next/current round if it has not started. (Or in some cases upgraded to Disqualification)",
          },
          {
            content:
              "If this is the second time in a tournament a player asks for a concession it is upgraded to a DQ (As ignorance of rules is not a factor)",
          },
          {
            content:
              "The current game is to continue as normal. Players who concede a match are to be dropped from the tournament unless Head Judge or Tournament Organizer decides otherwise (i.e genuine reason such as feeling unwell)",
          },
          { content: "Recommended penalty", modifiers: "bold" },
          { content: "Casual – Match Loss next round / DQ" },
          { content: "Professional - Match Loss next round / DQ" },
        ],
      },
      {
        number: "3.19",
        name: "Rules sharking",
        content: [
          {
            content:
              "Rules Sharking is when a player shows intentional behaviour to have their opponent miss a window of opportunity or to break rules in the Penalty Guidelines. Methodical or pedantic play is not considered Rules Sharking unless the discerned intention is malicious. The Head Judge determines what constitutes Rules Sharking during their event.",
          },
          {
            content:
              "When a judge rules for a player to receive the penalty for ‘Rules Sharking - Minor’ they should inform the player that if they do not play in a less suspicious manner they may be receiving an upgrade to a ‘Rules Sharking - Major’, which may result in the player being disqualified.",
          },
          {
            content:
              "Before a judge rules for a player to receive the penalty for ‘Rules Sharking - Major’ they should have clear evidence of the infraction on hand, through interviewing the involved players and/or spectators. Or have repeated infractions for ‘Rules Sharking - Minor’.",
          },
          {
            content:
              "When making a ruling involving Rules Sharking, if it is a case where the player attempts to pass priority for both players and the opponent makes an automated response to this attempt, thereby missing a trigger. The window and/or trigger may be considered to not be missed (See 2.1 Missed Trigger).",
          },
          { content: "Rules Sharking - Minor", modifiers: "bold" },
          {
            content:
              "A player who does something to make the judge suspicious that they may have led an opponent to break the rules intentionally.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "It’s player A’s turn, and player B asks player A to ‘hurry-up and finish their turn’ while they’re trying to figure out if they have any triggers at the end of the turn. Player A then quickly states ‘it's your go’. Player B then calls a judge and states the opponent has missed triggers during the end of turn, with the intent to try and get Player A a penalty.",
            modifiers: "example",
          },
          { content: "Recommended penalty - minor", modifiers: "bold" },
          { content: "Casual – Caution" },
          { content: "Professional - Caution" },
          { content: "Rules Sharking - Major", modifiers: "bold" },
          {
            content:
              "A player who has blatantly led an opponent to miss a window of opportunity or to break the rules intentionally.",
          },
          { content: "Examples:", modifiers: "bold" },
          {
            content:
              "The player's opponent plays a Flock of the Featherwalkers. Before the opponent has a chance to make a quicken token the player adds several defending cards to Flock of the Featherwalkers chain link. They now tell the opponent they have missed their trigger and are unable to make the quicken token.",
            modifiers: "example",
          },
          { content: "Recommended penalty - major", modifiers: "bold" },
          { content: "Casual – Warning / DQ" },
          { content: "Professional - Warning / DQ" },
        ],
      },
    ],
  },
];

export default penaltyGuidelines;
