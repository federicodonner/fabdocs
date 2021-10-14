const tournamentRules = {
  name: "Tournament Rules",
  code: "tr",
  sections: [
    {
      number: "0",
      name: "Introduction",
      subsections: [
        {
          number: "0.1",
          name: "Introduction",
          content: [
            {
              text:
                "Legend Story Studios (LSS) strives to provide players with the best play experience possible. This includes transparent tournament rules and guidelines to ensure a fair and fun play experience.",
            },
            {
              text:
                "The purpose of this document is to provide transparency of rules, responsibilities and procedures to ensure there is fair play at all levels of competition.",
            },
            {
              text:
                "Updates to this document are scheduled to coincide with the release date of each major booster set. Updates whether scheduled or otherwise, will be announced through an update bulletin posted to the homepage of fabtcg.com. Changes to this document since its last publication are shown in summary of changes below.",
            },
          ],
        },
      ],
    },
    {
      number: "1",
      name: "Tournament Information",
      subsections: [
        {
          number: "1.1",
          name: "Tournament types",
          content: [
            {
              text:
                "Flesh and Blood tournaments are separated into two major categories: Professional and Casual. ",
            },
            {
              text:
                "Professional tournaments are run by Legend Story Studios (LSS) or Organized Play partners appointed by LSS. Examples include the World Championship, National Championships and The Calling $10k tournaments.",
            },
            {
              text:
                "Casual tournaments can be run by any Tournament Organizer who has an active GEM (Game Event Manager) Tournament Organizer account.",
            },
          ],
        },
        {
          number: "1.2",
          name: "Formats",
          content: [
            {
              text:
                "There are two major tournament formats that Legend Story Studios supports: Constructed and Limited. Some tournaments may include both formats.",
            },
            {
              text:
                "Constructed tournaments involve players preparing a deck beforehand and require players to bring their own cards and decks. Limited tournaments involve the Tournament Organizer providing all Flesh and Blood product required for tournament play and players are not required to bring their own cards.",
            },
            {
              text:
                "Legend Story Studios currently support the following official formats:",
            },
            { text: "Constructed formats", modifiers: "bold" },
            { text: "Blitz", modifiers: "list" },
            { text: "Classic constructed", modifiers: "list" },
            { text: "Limited formats", modifiers: "bold" },
            { text: "Booster draft", modifiers: "list" },
            { text: "Saled deck", modifiers: "list" },
            { text: "Special formats", modifiers: "bold" },
            { text: "Welcome deck", modifiers: "list" },
            {
              text:
                "For detailed information on which cards are legal in official formats, please view the Card Legality Policy.",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/card-legality-policy/",
            },
          ],
        },
        {
          number: "1.3",
          name: "Ratings",
          content: [
            {
              text:
                "Flesh and Blood uses two separate rating systems, XP and ELO, to track player performance in official tournaments.",
            },
            { text: "XP - Casual and Professional", modifiers: "bold" },
            {
              text:
                "Both Casual and Professional tournaments use the “XP” rating system. XP is gained for match wins. No XP is lost upon a match loss or draw.",
            },
            {
              text:
                "XP is used to rank players on a global XP leaderboard, and is used to qualify players to Professional tournaments among other things.",
            },
            { text: "ELO - Professional", modifiers: "bold" },
            {
              text: "Only Professional tournaments use the ELO rating system.",
            },
            {
              text:
                "A players ELO rating is influenced by match wins, losses, and draws. The amount of ELO rating points a player can gain or lose in any given match is dependent on the comparative ELO rating of their opponent.",
            },
            {
              text:
                "ELO is used to rank players on a global professional leaderboard, and is used to qualify players to Professional tournaments.",
            },
            {
              text:
                "Further information about the Flesh and Blood rating system can be found in the Rules and Policy Center.",
              href: "https://fabtcg.com/resources/rules-and-policy-center/",
            },
          ],
        },
        {
          number: "1.4",
          name: "Scores, Standings and Tiebreakers",
          content: [
            {
              text:
                "Tournaments are separated into rounds. Every round, each player plays a match against another player, unless they have been awarded a bye. The result of each match (win, loss, or draw), is reported to the Tournament Organizer who enters it into GEM (Game Event Manager) software. During the tournament, players improve their standing by gaining match points as follows:",
            },
            { text: "Win a match (W) = 1 match point", modifiers: "list" },
            { text: "Lose a match (L) = 0 match points", modifiers: "list" },
            {
              text:
                "Draw a match (D) = 0 match points (but is significant for tiebreakers)",
              modifiers: "list",
            },
            {
              text:
                "Bye (B) = 1 match point (A bye is when a player is not assigned an opponent, usually because there is an uneven number of players in the tournament)",
              modifiers: "list",
            },
            {
              text:
                "Information that is tracked throughout the tournament for each player includes:",
            },
            {
              text: "Total match points = sum of all Wins and Byes",
              modifiers: "list",
            },

            {
              text:
                "Cumulative tiebreaker (CTB) = tiebreaker last round / 4 + total match-win points",
              modifiers: "list",
            },
            {
              text:
                "Player match loss % (PML) = Player total losses / total matches played",
              modifiers: "list",
            },
            {
              text:
                "Player’s average opponent match loss % (OML%) = sum (PML of each opponent played so far) / number of opponents played",
              modifiers: "list",
            },
            {
              text:
                "Player’s average opponent CTB (OCTB) = sum (CTB for each opponent played so far) / number of opponents played",
              modifiers: "list",
            },
            {
              text:
                "Throughout the tournament, player standings (or rank) are determined by the following logic, in this order;",
            },
            {
              text:
                "A player with higher total match-win points has a higher standing. > If multiple players have the same number of match-win points, they tie for that standing, then;",
              modifiers: "list",
            },
            {
              text:
                "A player with a higher CTB within a tie has the higher standing. > If multiple players within a tie have the same CTB, then;",
              modifiers: "list",
            },
            {
              text:
                "A player with a lower PML within a tie has the higher standing. > If multiple players within a tie have the same PML, then;",
              modifiers: "list",
            },
            {
              text:
                "A player with a lower OML% within a tie has the higher standing. > If multiple players within a tie have the same OML%, then;",
              modifiers: "list",
            },
            {
              text:
                "A player with a higher OCTB within a tie has the higher standing. > If multiple players within a tie have the same OCTB, then;",
              modifiers: "list",
            },
            {
              text: "Player standing is randomized within the tie.",
              modifiers: "list",
            },
            {
              text:
                "Further information about tiebreakers can be found in the Pairings and Tiebreaker Policy.",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/pairings-and-tiebreaker-policy/",
            },
          ],
        },
        {
          number: "1.5",
          name: "Time limits",
          content: [
            {
              text:
                "The following time limits are recommended for each round of the tournament, inclusive of start of game procedure:",
            },
            { text: "Classic Constructed - 50 minutes", modifiers: "list" },
            { text: "Blitz - 30 minutes", modifiers: "list" },
            { text: "Limited formats - 30 minutes", modifiers: "list" },
            { text: "Welcome Deck format - 30 minutes", modifiers: "list" },
            {
              text:
                "The following time limits are recommended for sealed deck operations:",
            },
            { text: "Deck construction - 30 minutes", modifiers: "list" },
            {
              text:
                "Card pool registration (if required) - 30 minutes (5 minutes to open, 20 minutes to sort and register the card pool, and 5 minutes to validate the card pool has been registered correctly.)",
              modifiers: "list",
            },
            {
              text:
                "The following time limits are recommended for booster draft operations:",
            },
            { text: "Deck construction - 15 minutes", modifiers: "list" },
            {
              text: "Card pool registration (if required) - 5 minutes",
              modifiers: "list",
            },
            {
              text:
                "Time limits may be changed at the discretion of the Head Judge or Tournament Organizer. Deviations from the recommended time limits must be announced prior to the tournament beginning.",
            },
          ],
        },
        {
          number: "1.6",
          name: "Number of Rounds",
          content: [
            {
              text:
                "The following is the recommended number of swiss rounds for tournaments. It is recommended that Tournament Organizers follow this guideline. If the number of swiss rounds differ from the table, the Tournament Organizer must inform players at the time of registration or be clearly stated in event advertising.",
            },
            {
              text:
                "Professional tournaments and multi-format tournaments may have a different structure, please refer to the fact sheet of that event for more information.",
            },
            { text: "Players / Swiss rounds / play-off" },
            { text: "5-8 / 3 / None", modifiers: "list" },
            { text: "9-16 / 4 / Top 4", modifiers: "list" },
            { text: "17-32 / 5 / Top 8", modifiers: "list" },
            { text: "33-64 / 6 / Top 8", modifiers: "list" },
            { text: "65-128 / 7 / Top 8", modifiers: "list" },
            { text: "129-226 / 8 / Top 8", modifiers: "list" },
            { text: "227-409 / 9 / Top 8", modifiers: "list" },
            { text: "410+ / 10 / Top 8", modifiers: "list" },
          ],
        },
        {
          number: "1.7",
          name: "Identification",
          content: [
            {
              text:
                "Identification may be required to participate in Flesh and Blood tournaments.",
            },
            {
              text:
                "Events that require an invitation to participate and/or have an age restriction will require identification to participate. These include (but are not limited to), National Champs, the World Championship.",
            },
            {
              text: "The following forms of identification are acceptable;",
            },
            {
              text:
                "Proof of control of the associated GEM account (e.g. can demonstrate to the Tournament Organiser that they can log in to the account)",
              modifiers: "list",
            },
            {
              text: "Birth Certificate (for players under the age of 13)",
              modifiers: "list",
            },
            { text: "Drivers Licence", modifiers: "list" },
            { text: "Passport", modifiers: "list" },
            { text: "School ID card", modifiers: "list" },
            { text: "Government issued ID card", modifiers: "list" },
          ],
        },
        {
          number: "1.8",
          name: "GEM Player ID Number Duplication",
          content: [
            {
              text:
                "A player may only have one GEM Player ID number. If a player has more than one GEM Player ID number, they must email op@fabtcg.com with details of all GEM Player ID numbers registered to their name and request that they are merged. Failure to do this could result in all GEM Player ID numbers registered to that player being suspended.",
            },
          ],
        },
      ],
    },
    {
      number: "2",
      name: "Tournament Roles and Responsibilities",
      subsections: [
        {
          number: "2.0",
          name: "General",
          content: [
            {
              text:
                "Each person at the tournament venue is considered to have one or more roles within the categories of player or event staff.",
            },
            { text: "Players can have the role of:" },
            { text: "Competitor", modifiers: "list" },
            { text: "Spectator", modifiers: "list" },
            { text: "Event staff can have the role of:" },
            { text: "Tournament Organizer ", modifiers: "list" },
            { text: "Head Judge", modifiers: "list" },
            { text: "Judge", modifiers: "list" },
            { text: "Scorekeeper", modifiers: "list" },
            { text: "Media Representative", modifiers: "list" },
            {
              text: "Legend Story Studios (LSS) Representative",
              modifiers: "list",
            },
            { text: "Third-party Representative", modifiers: "list" },
          ],
        },
        {
          number: "2.1",
          name: "Competitor",
          content: [
            {
              text:
                "A Competitor is considered a player who is competing in the tournament and is part of a match in progress. A competitor is responsible for:",
            },
            {
              text:
                "Acting in a respectful way to players and event staff, and to the integrity of the game.",
              modifiers: "list",
            },
            {
              text: "Complying with the rules and policies of the game.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.2",
          name: "Spectator",
          content: [
            {
              text:
                "A Spectator is considered anyone who is physically present at the tournament but is not part of a match in progress or an event staff. A spectator is responsible for:",
            },
            {
              text:
                "Remaining silent and passive towards competitors, to ensure they do not influence the outcome of any match in progress.",
              modifiers: "list",
            },
            {
              text:
                "Alerting a Judge or event staff if they have observed a game action or otherwise that is in violation of our rules or policy.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.3",
          name: "Tournament Organizer",
          content: [
            {
              text:
                "A Tournament Organizer is the designated person or persons that are responsible for organising and maintaining the logistics of a tournament. A Tournament Organizer is responsible for:",
            },
            {
              text:
                "Providing a venue that can adequately support the tournament and the players.",
              modifiers: "list",
            },
            {
              text:
                "Providing all materials necessary for the smooth and efficient running of tournament operations (e.g. tables, chairs, printers, product etc)",
              modifiers: "list",
            },
            {
              text:
                "Ensuring information about the tournament is made clear well in advance of the tournament date.",
              modifiers: "list",
            },
            {
              text:
                "Ensuring there are enough event staff and they are adequately knowledgeable about Flesh and Blood rules and policies.",
              modifiers: "list",
            },
            {
              text:
                "Reporting the required event information to Legend Story Studios.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.4",
          name: "Head Judge",
          content: [
            {
              text:
                "A Head Judge is an official who oversees the tournament, manages the Judge team, and makes the final decision over any ruling disputes that players may have. A Head Judge is responsible for:",
            },
            {
              text:
                "Using sound judgement to enforce (or modify when necessary) the rules and policy of the game to uphold the integrity of the tournament.",
              modifiers: "list",
            },
            {
              text:
                "Making the final ruling decision in the event a player appeals the ruling of a Judge.",
              modifiers: "list",
            },
            {
              text:
                "Assigning Judges with tasks and ensuring they have adequate knowledge to carry out tasks assigned to them.",
              modifiers: "list",
            },
            {
              text:
                "Providing feedback to Judges to support their rules, policy, and personal development.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.5",
          name: "Judge",
          content: [
            {
              text:
                "A Judge is an official who is tasked with settling disputes between players and enforcing the rules and policy of the game to ensure tournament matches are played out fairly. A judge is responsible for:",
            },
            { text: "Settling disputes between players.", modifiers: "list" },
            {
              text:
                "Issue rulings in the event of a rules or policy violation and apply appropriate penalties.",
              modifiers: "list",
            },
            {
              text:
                "Answer questions a player may have about the game or tournament.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.6",
          name: "Scorekeeper",
          content: [
            {
              text:
                "A scorekeeper is an official that collects and processes the information of the tournament to generate the pairings, standings, and other records throughout the tournament. A scorekeeper is responsible for:",
            },
            {
              text:
                "Inputting all tournament information and match results into GEM.",
              modifiers: "list",
            },
            { text: "Generating pairings and standings.", modifiers: "list" },
            {
              text:
                "Resolving any incorrect results entries or player information.",
              modifiers: "list",
            },
            {
              text:
                "Ensuring the tournament information entered in GEM is legitimate, true, and correct.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.7",
          name: "Media Representative",
          content: [
            {
              text:
                "A media representative is an official who is doing coverage for the event. A media representative is responsible for:",
            },
            {
              text:
                "Reporting what is happening during the tournament in a way that competitors are unable to gain information that could influence the outcome of a match in progress.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "2.8",
          name: "LSS Representative",
          content: [
            {
              text:
                "An LSS representative is an official who observes the event and interacts with players. An LSS representative may also hold other event roles, such as (but not limited to) Tournament Organizer, Judge, scorekeeper or media representative. An LSS representative is responsible for:",
            },
            {
              text: "Ensuring the event is run to the highest standard. ",
              modifiers: "list",
            },
            {
              text:
                "Gaining feedback from players to improve Flesh and Blood products and play experience.",
              modifiers: "list",
            },
            {
              text:
                "Gaining feedback from event staff and through observation, to improve operations and overall event experience for event staff and players.",
              modifiers: "list",
            },
            { text: "Administer Judge exams.", modifiers: "list" },
          ],
        },
        {
          number: "2.9",
          name: "Third-party Representative",
          content: [
            {
              text:
                "A third-party representative is an individual involved in an official capacity who is not part of the operations of the tournament or an LSS representative. Examples of a third-party representative include (but are not limited to) vendors, artists, venue facility staff. A third-party representative is responsible for:",
            },
            {
              text:
                "Fulfilling the duties of their position with the third party in a way that does not influence the outcome of a match in progress.",
              modifiers: "list",
            },
          ],
        },
      ],
    },
    {
      number: "3",
      name: "Tournament Logistics",
      subsections: [
        {
          number: "3.1",
          name: "Match Structure",
          content: [
            {
              text:
                "Flesh and Blood rounds are played until one player has won a pre-set number of games or until the round timer runs out. If the round timer runs out and end of match procedure is completed (see section 3.3), the player with the most game wins in the match is declared the winner. If both players have the same number of games wins, the match is declared a draw.",
            },
            {
              text:
                "The amount of games required to win a match is decided by the Tournament Organizer and must be announced prior to the tournament beginning.",
            },
            {
              text:
                "The recommended match structure is best of one for all formats.",
            },
          ],
        },
        {
          number: "3.2",
          name: "Start of Game Procedure",
          content: [
            {
              text:
                "The start of game procedure happens in the following order:",
            },
            {
              text:
                "Players place their hero card face up in the hero zone, then;",
              modifiers: "list",
            },
            {
              text:
                "A random method is used to determine who chooses to play first, then;",
              modifiers: "list",
            },
            {
              text:
                "Both players choose the equipment, weapons, and deck they will use for the game (60 cards minimum for Classic Constructed, 30 cards minimum for limited formats, and exactly 40 cards for Blitz). If your hero has an effect that allows you to start the game with 1 or more cards in the arena, choose these cards and place them face down in the arena, then;",
              modifiers: "list",
            },
            {
              text:
                "Both players shuffle and present their deck to the opponent for final shuffle and/or cut, then;",
              modifiers: "list",
            },
            {
              text:
                "Both players reveal the weapon(s) and equipment chosen for this game, and cards their hero allows them to start the game with in play (if any), draw cards up to their hero's intellect, and begin the first turn of the game.",
              modifiers: "list",
            },
            {
              text:
                "For the first game of a match, the player who plays first is determined by a random method such as rolling dice or flipping a coin. The person who wins the random method decides who plays first.",
            },
            {
              text:
                "For the first game of a play-off match, the player with the higher standing after the final round of swiss, chooses who plays first.",
            },
            {
              text:
                "If there is more than one game in the match, the player who lost the last game of the match decides who will play first in next game of the match.",
            },
            {
              text:
                "The maximum time allowed for the start of game procedure is 5 minutes for the first game of a match, and 3 minutes for each subsequent game in the match (if there is more than one game in the match.)",
            },
          ],
        },
        {
          number: "3.3",
          name: "End of Match Procedure",
          content: [
            {
              text:
                "When time is called in the round and a winner of the current game is yet to be determined, the turn player completes their turn, then 1 additional turn is played. At the conclusion of the additional turn, if a winner of the game has not been determined, the current game is a draw.",
            },
            { text: "Elimination Matches with Time Limits", modifiers: "bold" },
            {
              text:
                "If the match being played is during an elimination round of the tournament, and a winner of the current game has not been determined at the conclusion of the additional turn, then;",
            },
            {
              text:
                "If a player has won more completed games in the match than the opponent, that player is declared the winner of the match (applicable only if there is more than 1 game in the match).",
              modifiers: "list",
            },
            {
              text:
                "If the number of completed games in the match is tied, the hero with the highest life total is declared the winner of the match. If life totals are tied, the game will continue until one hero has a higher life total, at which point the hero with the highest life total is immediately declared the winner of the match.",
              modifiers: "list",
            },
            {
              text:
                "If game wins of an elimination match consisting of more than 1 game is tied after the completion of the additional turn, or time has been called before the first turn of a game has begun and no player has more game wins than another player, then players will start a new game with 4 turns total (2 turns per player). At the end of the fourth turn, the hero with the highest life total is declared the winner of the match. If life totals are tied, the game will continue until one hero has a higher life total, at which point the hero with the highest life total is immediately declared the winner of the match. (This is only applicable if there is more than 1 game in the match).",
            },
          ],
        },
        {
          number: "3.4",
          name: "Conceding",
          content: [
            {
              text:
                "When a player concedes a game, the result will be processed as a game/match loss for the conceding player.",
            },
            {
              text:
                "If a player concedes their match at any point after presenting their deck during the start of game procedure, they will be dropped from the tournament unless the Head Judge or Tournament Organizer decides otherwise. A player will not be dropped if there is a genuine reason why they need to stop playing the current match and they wish to rejoin the tournament in a future round, or if a player has no way in which they are able to win a game. In all instances where a player wants to concede and not be dropped from the tournament, a judge should be called to oversee the concession. Examples include but are not limited to:",
            },
            {
              text:
                "There is an emergency that requires the attention of the player",
              modifiers: "list",
            },
            { text: "A player doesn't feel well", modifiers: "list" },
            {
              text: "A player feels uncomfortable playing against the opponent",
              modifiers: "list",
            },
            {
              text:
                "A player spills a cup of coffee over themselves and their belongings (only) and they want to concede in order to clean themselves up",
              modifiers: "list",
            },
            {
              text:
                "A player has no cards left in their hand or deck and therefore has no way to win the game",
              modifiers: "list",
            },
            {
              text:
                "If a player asks for a concession at any point in a match after both players have presented their decks, that player will receive a match loss for their next round. This penalty may be upgraded or downgraded at the discretion of the Head Judge. Any kind of pressure or suggestion to concede, such as saying 'Come on man, don't defend my attack here' is considered to be asking for a concession.",
            },
            {
              text:
                "For avoidance of doubt, a player may ask for a concession and/or concede (without being dropped from the tournament) before presenting their deck. For example, it is the last round of swiss and two friends are paired. One of these players already has enough match wins to make the top 8, so he concedes the match before presenting his deck. (Note - conceding before presenting decks can not be in exchange for any kind of consideration. Refer section 5.2 Bribery.)",
            },
            {
              text:
                "If a player refuses to play a game, it is assumed that player is conceding the game. If both players refuse to play a game or match, the match result will be declared a match loss for both players.",
            },
          ],
        },
        {
          number: "3.4a",
          name: "Intentional Draws",
          content: [
            {
              text:
                "Players may intentionally draw a game at any time. An intentional draw results in both players receiving 0 match points.",
            },
          ],
        },
        {
          number: "3.5",
          name: "Dropping from a Tournament",
          content: [
            {
              text:
                "A player may drop from a tournament at any time. A player must inform the scorekeeper before the pairings are generated or else it will be assumed the player is playing the next round. If a player drops after pairings have been generated, they will be considered to have conceded the match.",
            },
            {
              text:
                "Players who do not show up for their match will be considered to have conceded the match and will be dropped from the tournament unless the scorekeeper or Tournament Organizer is informed before the next round pairings are generated.",
            },
            {
              text:
                "If a player drops from a limited format tournament during deck construction or a draft pod, they take all the cards they own with them. This includes their sealed deck card pool and unopened boosters, or cards they have drafted and unopened boosters.",
            },
            {
              text:
                "If a player drops from a tournament early, they may not be eligible for participation prizes at the discretion of the Tournament Organizer.",
            },
            {
              text:
                "If a player drops from the tournament after they have been announced in the top cut play-off, there will not be a replacement for them in the play-off.",
            },
            {
              text:
                "Dropped players may be re-entered into a tournament at the discretion of the Head Judge.",
            },
          ],
        },
        {
          number: "3.6",
          name: "Time Extensions",
          content: [
            {
              text:
                "If a Judge pauses a match for any reason while the round timer is running, the players in the affected match will be given an equal amount of additional time to finish the match. Examples include (but are not limited to), Judge calls, deck checks, and event coverage requests.",
            },
          ],
        },
        {
          number: "3.7",
          name: "Deck Registration",
          content: [
            {
              text:
                "Deck / card pool registration is required for all Professional tournaments. It is only required for Casual tournaments if specified by the Tournament Organizer (TO).",
            },
            {
              text:
                "Tournament level / Format / Deck or card pool registration required",
              modifiers: "bold",
            },
            { text: "Professional / Constructed / Yes" },
            { text: "Professional / Limited / Yes" },
            { text: "Casual / Constructed / No, unless specified by the TO" },
            { text: "Casual / Limited / No, unless specified by the TO" },
            { text: "Casual / Welcome deck / No" },
            {
              text:
                "When deck registration is required, the deck list and information contained therein becomes the property of the TO upon the player's submission of the deck list to a tournament official. A player may decline to submit a deck list. If they do, they will not be eligible to participate if the event requires deck registration",
            },
            { text: "Constructed Formats", modifiers: "bold" },
            {
              text:
                "If deck registration is required for a constructed format, the deck list must clearly record the name, pitch value (if applicable), and quantity of every card included in the deck.",
            },
            {
              text:
                "It is required that cards are grouped as follows on the deck registration sheet:",
            },
            { text: "All equipment and weapons together", modifiers: "list" },
            {
              text: "All cards with pitch value 1 (red) together",
              modifiers: "list",
            },
            {
              text: "All cards with pitch value 2 (yellow) together",
              modifiers: "list",
            },
            {
              text: "All cards with pitch value 3 (blue) together",
              modifiers: "list",
            },
            {
              text:
                "Failure to group cards as shown, may result in penalties. It is recommended that players use the official deck registration sheet available in the Rules and Policy Center.",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/tournament-rules-and-policy/",
            },
            { text: "Limited Formats", modifiers: "bold" },
            {
              text:
                "For limited formats, if players are required to register their card pool, it is recommended that the TO provide players with the appropriate card pool registration sheet available in the Rules and Policy Center.",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/tournament-rules-and-policy/",
            },
            {
              text:
                "When card pool registration is required, players must record the quantity of all non-token cards in their card pool, separated by name and pitch value (if applicable). Players are not required to register a deck, only the hero they will play for the duration of the tournament (note - not being able to change your hero between rounds is only applicable when card pool registration is required).",
            },
            {
              text: "Submitting Deck / Card Pool Registration Sheets",
              modifiers: "bold",
            },
            {
              text:
                "When constructed format deck registration is required, the deck registration sheet must be submitted to a tournament official before the first round of the tournament begins. This includes players that have been awarded a bye in the first round.",
            },
            {
              text:
                "When limited format card pool registration is required, the card pool registration sheet must be submitted to a tournament official before the end of deck construction.",
            },
            {
              text:
                "All deck / card pool registration sheets must clearly display the players name and GEM player ID number.",
            },
            {
              text:
                "Players may request to see their registration sheet between matches.",
            },
          ],
        },
        {
          number: "3.8",
          name: "Deck Checks",
          content: [
            {
              text:
                "Deck checks will be performed at all Professional tournaments to ensure fair play. The Head Judge reserves the right to deck check any player, including when they are in the middle of a match or between rounds.",
            },
            {
              text:
                "In Casual tournaments, deck checks will be at the Tournament Organizers discretion.",
            },
          ],
        },
        {
          number: "3.9",
          name: "Sleeves",
          content: [
            {
              text:
                "A player may use plastic card sleeves on their cards provided they are all of equal length with identical sleeve backs.",
            },
            {
              text:
                "Players may use up to two sleeves per card in order to maintain the condition of their cards. Typically, this would be a ‘perfect fit’ style sleeve with a standard card size sleeve over the top. If a Judge deems the type of sleeves used to be excessive, or that the sleeves used allow for cards to be distinguished from one another, the Judge may require a player to change sleeves.",
            },
            {
              text:
                "In Professional tournaments, the Head Judge may enforce all players to be required to use sleeves. ",
            },
            {
              text:
                "Players are responsible for ensuring their sleeves and/or cards are not marked in any way during a tournament. A card or sleeve is considered marked if it is possible to differentiate the card or sleeve from other cards in the same deck.",
            },
            {
              text:
                "Judges will be on the lookout for marked cards during the tournament, including deck checks, to ensure the integrity of the tournament is upheld. During a match, a player may alert a judge if they suspect the opponent’s cards or sleeves are marked in a way that would give that player an advantage. It is at the Judge’s discretion if that player may continue using those sleeves as well as any further penalties. ",
            },
            {
              text:
                "Sleeves with holographic or reflective patterns are not recommended at Professional or Casual tournaments.",
            },
            {
              text:
                "Cards that are not included in your deck zone, such as hero cards, equipment and weapons, are not required to be in the same color sleeves as your cards in your deck zone. Cards that are not included in your deck zone, may be contained within heavy plastic cases, so long as they do not impeded game play space in an unreasonable way.",
            },
            {
              text:
                "The Head Judge has the final say on whether any type of sleeve is not allowed to be used in the tournament.",
            },
          ],
        },
        {
          number: "3.10",
          name: "Tournament Materials Required",
          content: [
            {
              text:
                "Players are responsible for having their own materials required to play the event, including (but not limited to):",
            },
            { text: "GEM Player ID number", modifiers: "list" },
            { text: "Personal identification", modifiers: "list" },
            {
              text:
                "Pen and paper or other method to keep track of life totals",
              modifiers: "list",
            },
            { text: "Dice", modifiers: "list" },
            { text: "Tokens", modifiers: "list" },
            { text: "Extra card sleeves", modifiers: "list" },
            {
              text:
                "Players are responsible for looking after their own belongings at all times.",
            },
          ],
        },
        {
          number: "3.11",
          name: "Note Taking",
          content: [
            {
              text:
                "Note taking is not allowed during Flesh and Blood tournaments. Note taking is a broad term that refers to the use of aids to record information relating to the game. The exceptions to this rule include meta-game information and invisible public information about the current game state. This includes (but is not limited to):",
            },
            {
              text:
                "Writing down meta-game information such as the opponent’s name and hero, the player who went first, and winner of the game.",
              modifiers: "list",
            },
            {
              text:
                "Recording the life total, changes to the life total, the source of the change (i.e. the source of damage or effect).",
              modifiers: "list",
            },
            {
              text:
                "Using objects, such as dice, to represent remaining resources, and action points.",
              modifiers: "list",
            },
            {
              text:
                "Rotating objects or placing objects on cards/tokens to represent the use of activated abilities or triggered abilities for the turn.",
              modifiers: "list",
            },
            {
              text:
                "Writing down, or using dice or tokens to represent, the value of X for effects.",
              modifiers: "list",
            },
            {
              text:
                "Writing down the name of a card specified from a card effect. e.g. Chains of Eminence.",
              modifiers: "list",
            },
            {
              text:
                "All other forms of note taking are not allowed, including tracking hidden information or visible public information. Examples of note taking that is not allowed:",
            },
            {
              text:
                "Recording cards that you pitch that go to the bottom of your deck or revealed cards, such as those in your opponent's hand or pitch zone.",
              modifiers: "list",
            },
            {
              text:
                "Tracking cards that have been played by you or your opponent.",
              modifiers: "list",
            },
            {
              text:
                "Ordering your graveyard and/or banished zone to track cards left in your deck. (Separating cards for gameplay/communication purposes is acceptable, such as cards with “Blood debt”, or “play this from the banished zone”.)",
              modifiers: "list",
            },
            {
              text:
                "Using dice to track how many cards you or your opponent has drawn.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "3.12",
          name: "Toilet Breaks",
          content: [
            {
              text:
                "Players are allowed to call a judge and request a toilet break provided they are not doing so to try to gain an advantage, intentionally disrupt the pace of play, or cause excessive disruption to tournament operations.",
            },
            {
              text:
                "Players must leave all electronic devices at the table while they take a toilet break.",
            },
            {
              text:
                "The number of mid-match toilet breaks a player requests during the tournament will be noted by the Head Judge. Players using toilet breaks to try to gain an advantage will be penalised.",
            },
            {
              text:
                "It’s suggested that players use the toilet between rounds.",
            },
          ],
        },
      ],
    },
    {
      number: "4",
      name: "Tournament communications",
      subsections: [
        {
          number: "4.1",
          name: "Player Communication",
          content: [
            {
              text:
                "Players are expected to maintain clear communication during the course of a match. Public information must be made clear and any changes must be announced to the other player. If a player is unable or unwilling to communicate this information, it’s encouraged that a Judge is called to assist.",
            },
            {
              text:
                "For the avoidance of doubt, this information does not need to be explicitly declared to your opponent, but must be provided at any time when requested by them.",
            },
            {
              text: "Public information includes (but is not limited to):",
            },
            { text: "Life totals", modifiers: "list" },
            { text: "The power of an attack", modifiers: "list" },
            { text: "Number of counters on a card", modifiers: "list" },
            {
              text: "Any face up card owned by either player",
              modifiers: "list",
            },
            {
              text: "The amount of resource points in a resource pool",
              modifiers: "list",
            },
            {
              text: "The amount of action points remaining",
              modifiers: "list",
            },
            {
              text: "The number of cards remaining in a deck",
              modifiers: "list",
            },
            { text: "The game score of the current match", modifiers: "list" },
            {
              text:
                "Hidden information is information that players are not obliged to answer. This is often information that is private or no longer public (such as a face up card being shuffled into a deck).",
            },
            {
              text: "Hidden information includes (but is not limited to):",
            },
            {
              text:
                "Cards in a deck, including cards that have been put on the bottom of a deck from the pitch zone.",
              modifiers: "list",
            },
            { text: "Cards in hand that are not revealed.", modifiers: "list" },
            { text: "Cards that are face down in a zone.", modifiers: "list" },
          ],
        },
        {
          number: "4.2",
          name: "Triggered Abilities",
          content: [
            {
              text:
                "Players are responsible for their own abilities. This includes all triggered abilities such as (but not limited to) hit triggers, start of turn effects and end of turn effects. A player must point out their mandatory triggered abilities. Intentionally ignoring a mandatory trigger is cheating. Players are not required to point out triggered abilities of their opponents although it is allowed.",
            },
            {
              text:
                "Triggered abilities are considered missed once the game state has moved beyond the point the triggered effect becomes relevant (i.e. it is considered missed if the player controlling the trigger does not acknowledge its effect on the game state).",
            },
            {
              text:
                "Please see the Penalty Guidelines in the Rules and Policy Centre for more information about missed triggered abilities and how to handle them: Penalty Guidelines",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/penalty-guidelines/",
            },
          ],
        },
        {
          number: "4.3",
          name: "Player Appeals",
          content: [
            {
              text:
                "A player may appeal a Judge ruling and request the Head Judge to make the final ruling. In the event there is no Head Judge, a Judge may discuss with another Judge to determine the final ruling.",
            },
            {
              text:
                "In an event where there are floor Judges in addition to a Head Judge, it is preferable that a floor Judge is the first responder to all judge calls, with the Head Judge stepping in when a ruling is appealed. However, it is sometimes the case that the Head Judge will be the first responder to a judge call if another judge is not available or close by.",
            },
            {
              text:
                "When the Head Judge is the first responder, the player may request a second opinion from another Judge before the Head Judge's ruling becomes final. In this instance, regardless of whether the Head Judge adjusts their initial ruling, the Head Judge will make the final decision on how the ruling will be applied",
            },
          ],
        },
        {
          number: "4.4",
          name: "Game Layout",
          content: [
            {
              text:
                "Players are expected to follow the Flesh and Blood official zone layout. This can be modified within reason, to meet physical requirements such as being left-handed. Any changes from the official zone layout must be clear to the opponent while playing.",
            },
            {
              text:
                "There are many cards in Flesh and Blood that become or create permanents in the arena, such as auras and items, which don’t have purpose-built zones for them. While these permanents are in the arena, they must be easily identifiable from other cards in the official zone layout.",
            },
          ],
        },
        {
          number: "4.5",
          name: "Tokens",
          content: [
            {
              text:
                "At professional level tournaments, if you are playing with cards that create tokens, you are required to have the appropriate token card(s) to represent them. If your deck is able to create multiple instances of the same token, you may use a dice placed on top of the token card to represent how many of that token you control.",
            },
            {
              text:
                "A token should only be present in the arena if it currently exists. Eg. If you are playing a Runeblade hero, a Runechant should only be in the arena if you control 1 or more Runechant tokens. You should not start the game with a token relevant to your hero (such as Spectral Shield or Runechant) in the arena, then add counters to this token once they are created.",
            },
            {
              text:
                "Non-official 'fan-made' token cards can be used, as long as the token name, card type, and effect are clearly readable.",
            },
            {
              text:
                "At professional level events, players who have cards with effects that create Tokens are required to supply enough of those tokens to accurately represent the gamestate. For example:",
            },
            {
              text:
                "If you have Coax a Commotion in your registered deck, you must have at least 2 Quicken token cards, one for yourself and one for your opponent.",
              modifiers: "list",
            },
            {
              text:
                "If you have a card with an effect that generates a Runechant token, you may need at least 2 Runechant token cards, one to represent Runechant tokens that have triggered due to playing an attack action card or attacking with a weapon, and one to represent Runechant tokens that have not triggered because they have been created after the trigger event.",
              modifiers: "list",
            },
            {
              text:
                "If you have Tectonic Plating, you must have 2 Seismic Surge token cards. When the Seismic Surge effect triggers, the token must be placed in or next to the pitch zone until end of turn. If Tectonic Plating is activated during the same turn, a second Seismic Surge token must be put into the arena.",
              modifiers: "list",
            },
          ],
        },
      ],
    },
    {
      number: "5",
      name: "Tournament violations",
      subsections: [
        {
          number: "5.1",
          name: "Cheating",
          content: [
            {
              text:
                "Cheating in all forms will not be tolerated in the Flesh and Blood community. All tournament violations will be reviewed by the Head Judge and if they believe a player has cheated, the appropriate penalty will be issued. ",
            },
            { text: "Examples include (but are not limited to):" },
            { text: "Bribery", modifiers: "list" },
            { text: "Wagering", modifiers: "list" },
            { text: "Unsporting Conduct", modifiers: "list" },
            { text: "Slow Play", modifiers: "list" },
            { text: "Outside Assistance", modifiers: "list" },
            {
              text:
                "Please see the Penalty Guidelines in the Rules and Policy Centre for more information.",
              href: "https://fabtcg.com/resources/rules-and-policy-center/",
            },
          ],
        },
        {
          number: "5.2",
          name: "Bribery",
          content: [
            {
              text:
                "Bribery is offering or accepting a reward or incentive in exchange for determining the result of a game or match. ",
            },
            {
              text: "Examples include (but are not limited to):",
            },
            {
              text:
                "Offering to concede in exchange for a concession in the future.",
              modifiers: "list",
            },
            {
              text: "Offering money in exchange for a match win.",
              modifiers: "list",
            },
            {
              text:
                "Offering favors to a player or official to induce an action they otherwise would not do.",
              modifiers: "list",
            },
            {
              text:
                "Players are allowed to offer a prize split provided it’s not tied to a match result (e.g. splitting for a concession or international draw).",
            },
            {
              text:
                "It is not bribery when players agree to evenly split their eventual prizes, as long as the agreement does not determine the outcome of a match or game. ",
            },
          ],
        },
        {
          number: "5.3",
          name: "Wagering",
          content: [
            {
              text:
                "Players and event staff may not wager, ante or bet on the outcome or result of a tournament, match or game. ",
            },
            {
              text:
                "Players may not use a random method to determine the outcome of a tournament, match or game.",
            },
          ],
        },
        {
          number: "5.4",
          name: "Unsporting Conduct",
          content: [
            {
              text:
                "Players must behave in a respectful manner to both their opponent, event staff, and anyone in the tournament area.",
            },
            {
              text: "Unsporting conduct includes (but is not limited to):",
            },
            {
              text:
                "Profanity or explicit words, especially in the vicinity of minors.",
              modifiers: "list",
            },
            {
              text: "Harassment, bullying, shaming or insults of any kind.",
              modifiers: "list",
            },
            {
              text:
                "Aggressive behaviour including (but not limited to) physical violence or any action violating the safety and privacy of players, staff or spectators.",
              modifiers: "list",
            },
            {
              text:
                "Failing to follow instructions from a tournament official.",
              modifiers: "list",
            },
            { text: "Using inappropriate imagery.", modifiers: "list" },
            {
              text:
                "Unsporting conduct violations are taken very seriously. Legend Story Studios strives to ensure a safe and welcoming environment for all players, event staff, and the general public at all Flesh and Blood tournaments.",
            },
          ],
        },
        {
          number: "5.5",
          name: "Slow Play",
          content: [
            {
              text:
                "It’s important that players maintain a pace of play that allows a match to finish within the round time limit.",
            },
            {
              text:
                "If a player takes an unreasonable amount of time to make a decision, it is considered stalling. Players may request a judge to watch their game to ensure an adequate pace of play (if logistically possible).",
            },
            {
              text:
                "Please see the Penalty Guidelines in the Rules and Policy Centre for more information.",
              href: "https://fabtcg.com/resources/rules-and-policy-center/",
            },
          ],
        },
        {
          number: "5.6",
          name: "Outside Assistance",
          content: [
            {
              text:
                "During a match, draft, or limited format deck construction, players may not seek or offer outside assistance from or to any player, spectator, official, or device, including referring to personal notes made prior to or during the event. The exception to this is personal notes (but not other forms of outside assistance) may be referred to during the start of game procedure up to when the decks are presented. For example, “sideboard guides” may be referred to from the moment the heroes are revealed, to when players present their decks to their opponent.",
            },
            {
              text:
                "In Professional tournaments, players may not use any electronic devices during a match. This includes (but is not limited to) cellphones, headphones or any device capable of communication or accessing the internet.",
            },
            {
              text:
                "During a match, spectators must not give advice to players, and players must not use spectators to gain an unfair advantage. Examples include (but are not limited to):",
            },
            { text: "Using signs or hand gestures", modifiers: "list" },
            { text: "Electronic Devices", modifiers: "list" },
            {
              text: "Speaking loudly, or in a language foreign to the opponent",
              modifiers: "list",
            },
          ],
        },
        {
          number: "5.7",
          name: "Order of Cards in Graveyards",
          content: [
            {
              text:
                "A player may not change the order of cards in an opponent's graveyard.",
            },
            {
              text:
                "A player may not change the order of cards in their graveyard in a way that allows them to track the composition of cards remaining in their deck.",
            },
            {
              text: "Examples include (but are not limited to):",
            },
            { text: "Ordering cards by name", modifiers: "list" },
            { text: "Ordering cards by card type", modifiers: "list" },
            { text: "Ordering cards by pitch value", modifiers: "list" },
          ],
        },
      ],
    },
    {
      number: "6",
      name: "Limited Format Tournament Procedures",
      subsections: [
        {
          number: "6.1",
          name: "Booster draft",
          content: [
            {
              text:
                "A booster draft begins with all players sitting next to each other in a circular formation (referred to as a draft pod). Each player is required to have 3 booster packs in front of them that are identical to every other player in the draft. The recommended number of players for a booster draft is 8.",
            },
            {
              text:
                "Simultaneously, all players in the draft pod open 1 of their 3 packs and remove the token card from the pack. Players then choose (draft) 1 card from among the cards remaining in the pack and place it face down into a single pile in front of them. The cards remaining in the pack are then shuffled and passed to the player seated on their left. Players pick up the cards passed to them, and repeat this process until all cards in the pack have been drafted.",
            },
            {
              text:
                "The second pack is drafted the same as the first pack with the exception that packs are passed to the player seated on the right after each card is drafted.",
            },
            {
              text:
                "The third pack is drafted the same as the first pack (passing to the left).",
            },
            {
              text:
                "Once a card has been placed face down into a player’s pile, that draft pick is considered to be locked in. It may not be swapped with another card from the pack.",
            },
            {
              text:
                "Players may not look at the face down pile of cards they have drafted while the drafting of cards is in progress, unless the Head Judge has specifically announced that this is allowed.",
            },
            {
              text:
                "After all cards in the first and second packs have been drafted, there is a review period where players may look at the cards they have drafted. The recommended time limit for the review period is 1 minute. At the conclusion of the review period, players place the cards they have drafted face down in a single pile in front of them. Players may change the order of the cards they have drafted.",
            },
            {
              text:
                "After the final pack is drafted, players construct a 30-card minimum deck using only the cards they have drafted. If a player cannot construct a 30-card minimum deck from the cards they have drafted, they add Cracked Baubles to their deck until the number of cards in their deck is at least 30. The recommended time limit for booster draft deck construction is 15 minutes. (For more information about limited format deck construction, see section 6.3.)",
            },
            {
              text:
                "The cards a player drafts are referred to as a player’s card pool. Players keep the cards they draft unless announced otherwise by the Tournament Organizer before the start of the draft.",
            },
            {
              text:
                "While the draft is in progress, players may not disclose, or seek to gain information about the content of packs or cards that have been drafted, and may not communicate in any way that could influence, inform, or mislead players participating in the draft. Examples include (but are not limited to):",
            },
            {
              text:
                "Looking at the cards another player is drafting or has drafted.",
              modifiers: "list",
            },
            {
              text:
                "Saying “Oh my goodness, I’m so lucky to open [CARD NAME].”",
              modifiers: "list",
            },
            {
              text: "Saying “Looks like I’m drafting my favourite hero again.”",
              modifiers: "list",
            },
            {
              text: "Turning cards upside down in a pack before passing it.",
              modifiers: "list",
            },
            {
              text:
                "Players may only play against other players within the same draft pod.",
            },
            {
              text: "Drafting Timing - Professional Tournaments",
              modifiers: "bold",
            },
            {
              text:
                "Professional tournament booster drafts will be timed. The table below sets out the recommended time limit for each pack during the draft. It is recommended that Casual tournaments do not use draft timing.",
            },
            {
              text:
                "All players must have drafted a card, placing it face down into their draft pile, within the time limit. If a player is consistently taking more than the time limit to draft a card, they may be subject to penalties.",
            },
            {
              text:
                "Players may not open or pick up a pack passed to them, until the Judge overseeing the draft pod announces players may do so. It’s from the Judges announcement, that the timer starts for the next draft pick. The Judge may announce to pick up the next pack before the time limit has expired, if all players have completed their draft pick from the current pack.",
            },
            {
              text:
                "Number of cards remaining in pack / Recommended time to draft",
              modifiers: "bold",
            },
            { text: "15 / 60 seconds" },
            { text: "14 / 60 seconds" },
            { text: "13 / 60 seconds" },
            { text: "12 / 55 seconds" },
            { text: "11 / 50 seconds" },
            { text: "10 / 45 seconds" },
            { text: "9 / 40 seconds" },
            { text: "8 / 35 seconds" },
            { text: "7 / 30 seconds" },
            { text: "6 / 25 seconds" },
            { text: "5 / 20 seconds" },
          ],
        },
        {
          number: "6.2",
          name: "Sealed Deck",
          content: [
            {
              text:
                "It’s recommended that players use 6 booster packs from the same set for sealed deck. The cards opened from these packs are referred to as a player’s card pool.",
            },
            {
              text:
                "Players must construct a 30-card minimum deck using only the contents of the booster packs they opened. (For more information about limited format deck construction, see section 6.3.)",
            },
          ],
        },
        {
          number: "6.3",
          name: "Deck Construction",
          content: [
            {
              text:
                "Decks in limited format tournaments must contain a minimum of 30 cards (not including hero, weapon(s), and equipment cards). There is no maximum deck size.",
            },
            {
              text:
                "The recommended time limit for booster draft deck construction is 15 minutes. ",
            },
            {
              text:
                "The recommended time limit for sealed deck construction is 30 minutes.",
            },
            {
              text:
                "Note - It’s during the start of game procedure that the exact 30 cards (minimum) are chosen. Typically, a player will change a small number of cards in their deck based on the hero they are about to play against and cards available from their card pool.",
              modifiers: "example",
            },
            {
              text:
                "Only young hero cards featured in the product being used for the tournament are legal for limited formats.",
            },
            {
              text:
                "When card pool registration is required, players must choose and register the hero they will play before the end of deck construction. They must play as that hero for the entire tournament. For tournaments that do not require card pool registration, players may change hero between rounds.",
            },
            {
              text:
                "A deck may only contain generic cards and cards with the same class and/or talent as your hero card.",
            },
            {
              text:
                "Players must construct their deck and choose equipment, using only cards from their card pool. The exception to this is young hero cards, weapon cards, and Cracked Bauble. (see section 6.4 for more information about young hero and weapon cards, and section 6.5 for more information about Cracked Bauble.)",
            },
            {
              text:
                "A limited format deck may contain any number of copies of each unique card (unlike constructed formats). For example, if your sealed pool contains 5 copies of Scar for a Scar (1), you may include all 5 copies in your deck. The exception to this are cards with the keyword Legendary (You may only have 1 [CARD NAME] in your deck.). Players may not have more than 1 copy of each unique card with the Legendary keyword in their deck.",
            },
          ],
        },
        {
          number: "6.4",
          name: "Heroes and Weapons",
          content: [
            {
              text:
                "Players may add young hero and weapon card(s) to their card pool during deck construction. Cards added this way are usually from a publicly available pool of young hero and weapon token cards provided by the Tournament Organizer or by pooling the token cards opened between all players in the event.",
            },
            {
              text:
                "Young hero and weapon token cards are plentifully available in booster packs. Each booster pack contains 1 token card.",
            },
            {
              text:
                "Players may provide their own young hero and/or weapon cards.",
            },
          ],
        },
        {
          number: "6.5",
          name: "Cracked Bauble",
          content: [
            {
              text:
                "(Cracked Bauble exists to support booster draft and sealed deck formats. A player may add any number of Cracked Bauble to their card pool. Typically, a player would only do this if they did not have enough legally playable cards to make a 30-card minimum deck.)",
              modifiers: "example",
            },
            {
              text:
                "Cracked Bauble is a card that is found in the token slot of a Flesh and Blood booster pack. It’s the only card with a standard card back that appears in the token slot. A player who opens a Cracked Bauble in a draft pod must remove it from the pack the same as the would remove any other token card.",
            },
            {
              text:
                "Players are allowed to add any number of Cracked Bauble to their card pool during deck construction. This is only recommended if a player cannot construct a 30-card minimum deck from their card pool. (This would normally only occur in booster draft, and only when a player drafted too many cards spread across multiple classes.)",
            },
          ],
        },
        {
          number: "6.6",
          name: "Card Pool Registration",
          content: [
            {
              text:
                "Card pool registration is required at all Professional tournaments.",
            },
            {
              text:
                "Card pool registration may be used for Casual tournaments, at the discretion of the Tournament Organizer.",
            },
            {
              text:
                "Card pool registration sheets can be found in the Rules & Policy Centre.",
              href: "https://fabtcg.com/resources/rules-and-policy-center/",
            },
            { text: "Booster draft", modifiers: "bold" },
            {
              text:
                "Booster draft card pool registration is done during deck construction. Players must register all cards they have drafted (their card pool). If card pool registration is required, it’s recommended that an additional 5 minutes is added to the deck construction time limit.",
            },
            { text: "Sealed deck", modifiers: "bold" },
            {
              text:
                "Sealed deck card pool registration happens prior to deck construction. The recommended time limit for sealed deck card pool registration is 30 minutes, being 5 minutes to open, 20 minutes to sort and register the card pool, and 5 minutes to validate the card pool has been registered correctly.",
            },
            {
              text: "The recommended card pool registration process is:",
            },
            { text: "Open", modifiers: "bold" },
            {
              text: "Players will be assigned seating in the tournament area.",
              modifiers: "list",
            },
            {
              text:
                "Tournament staff will give each player 6 booster packs and a card pool registration sheet. The contents of these 6 booster packs will become the card pool the player uses during the tournament and keep thereafter.",
              modifiers: "list",
            },
            {
              text:
                "Players must write their name in the “PLAYER USING POOL” section of the card pool registration sheet.",
              modifiers: "list",
            },
            {
              text:
                "Players on one side of the table open the booster packs given to them, one at a time, removing the token card (placing it in the center of the table), and counting the number of non-token cards contained in each booster pack to ensure each booster contains 15 non-token cards. They then put the cards opened into a single stack in front of them. When all 6 booster packs have been opened, the stack in front of them should contain exactly 90 cards. While they do this, the player sitting opposite them is required to observe this process to ensure no cards are added or removed from that players card pool during this process. If a player does not have a player sitting opposite them, a Judge will serve in this role. When the first player seated at the table finishes this process, the other player at that table opens their booster packs while being observed by the player who has finished the open process. When both players have finished the open process, their card pool should remain in a single stack in front of them while they await instructions from the Head Judge.",
              modifiers: "list",
            },
            {
              text:
                "It is recommended that the open process take no longer than 5 minutes, being 2 minutes per player to open their packs, and 1 minute for logistics.",
            },
            { text: "Sort and Register", modifiers: "bold" },
            {
              text:
                "When all players have finished opening their boosters and have a single stack of cards sitting in front of them, the Head Judge will instruct all players to exchange card pools and registration sheets with the player sitting opposite them. If a player does not have a player sitting opposite them, a Judge will serve in this role. This card pool exchange is done only for the purpose of registering the card pool. Card pools will return to the player who opened them upon completion of the card pool registration process.",
              modifiers: "list",
            },
            {
              text:
                "The player registering the card pool is required to write their name in the “PLAYER REGISTERING POOL” section of the card pool registration sheet. They are responsible for registering all cards in the card pool (not including token cards which should have been removed during the open process.)",
              modifiers: "list",
            },
            {
              text:
                "Players then sort the card pool they are registering alphabetically by class/talent, separating each card by pitch value (red / yellow / blue), and register every card from the card pool onto the card pool registration sheet.",
              modifiers: "list",
            },
            {
              text:
                "When all players have completed the card pool registration process, the Head Judge will instruct players to pass the sorted card pool and registration sheet back to the player they received the card pool from.",
              modifiers: "list",
            },
            {
              text:
                "It is recommended that the sort and register process take no longer than 20 minutes, being 10 minutes for sorting and 10 minutes to register the card pool.",
            },
            { text: "Validate", modifiers: "bold" },
            {
              text:
                "When players receive their card pool back, before they begin deck construction, they must check their card pool has been correctly registered, including that 90 cards in total have been registered. If there are mistakes on their card pool registration sheet, the player must call a judge to review and sign-off any corrections required.",
              modifiers: "list",
            },
            {
              text:
                "When the validate process is complete, the Head Judge will announce that players may begin deck construction.",
              modifiers: "list",
            },
            {
              text:
                "It is recommended that the validate process take no longer than 5 minutes.",
            },
          ],
        },
      ],
    },
    {
      number: "7",
      name: "Tournament floor rules",
      subsections: [
        {
          number: "7.1",
          name: "Buying, Selling, and Trading Cards",
          content: [
            {
              text:
                "Players are expected to follow the rules and policy of the Tournament Organizer.",
            },
            {
              text:
                "If a Flesh and Blood tournament is being held in a local game store, it’s recommended that players check the rules and policy of that store before engaging in any buy, sell, or trade activity.",
            },
            {
              text:
                "If a Flesh and Blood tournament is being held at a public venue, it’s recommended that players check the rules and policy of the Tournament Organizer before engaging in any buy, sell, or trade activity.",
            },
            {
              text:
                "At events run by Legend Story Studios, unless otherwise stated in the event information published on fabtcg.com, players are welcome to buy, sell, and trade Flesh and Blood single cards in the venue. Buying and/or selling goods or services other than Flesh and Blood single cards in the tournament venue without permission from a Legend Story Studios company representative is strictly prohibited. Any person caught buying or selling goods this way may be asked to leave the venue and could be subject to further penalties.",
            },
          ],
        },
        {
          number: "7.2",
          name: "Disruptive People",
          content: [
            {
              text:
                "People who create an unwelcoming or unpleasant atmosphere for others can damage the integrity of an event. People who abuse, insult, harass, or negatively impact another person's tournament experience, may be asked to leave the venue by the Tournament Organizer. ",
            },
            {
              text:
                "All people that attend a Flesh and Blood event are expected to have an acceptable level of hygiene. If a person does not meet the basic requirements of acceptable hygiene, they may be asked to resolve the issue, or asked to leave the venue.",
            },
          ],
        },
        {
          number: "7.3",
          name: "Tournament Eligibility",
          content: [
            {
              text:
                "The following people are not eligible to play in any Flesh and Blood tournaments:",
            },
            {
              text: "A player who is currently suspended or banned.",
              modifiers: "list",
            },
            {
              text:
                "A player that has been banned or asked to leave the tournament venue.",
              modifiers: "list",
            },
            { text: "Employees of Legend Story Studios", modifiers: "bold" },
            {
              text:
                "Employees and independent contractors of Legend Story Studios (LSS), and their spouses and legal dependents, are not eligible to participate in Professional tournaments unless a special dispensation has been granted in writing by Legend Story Studios.",
            },
            {
              text:
                "In addition to this, whenever an employee or independent contractor of LSS (but not extending to their spouse or legal dependents) attends a Casual tournament, they must introduce themselves and make their position known to the Tournament Organizer, who at their discretion, may deny them entry into the event.",
            },
          ],
        },
        {
          number: "7.4",
          name: "Suspended Players",
          content: [
            {
              text:
                "Suspended players are not allowed to attend, spectate, or judge Flesh and Blood events. If a suspended player attends a Flesh and Blood event, they will be asked to leave the venue and risk their suspension being extended.",
            },
          ],
        },
        {
          number: "7,5",
          name: "Prohibited Items",
          content: [
            {
              text:
                "Items and/or weapons that are offensive or dangerous to the safety of other people are strictly prohibited from all Flesh and Blood events. Such items include (but are not limited to): ",
            },
            { text: "Guns", modifiers: "list" },
            { text: "Knives", modifiers: "list" },
            { text: "Bats", modifiers: "list" },
            {
              text:
                "People attending Flesh and Blood events must not be under the influence of alcohol or recreational drugs. People found in violation of this may be asked to leave the venue and may face further penalties.",
            },
          ],
        },
        {
          number: "7.6",
          name: "Confiscation of Materials Infringing IP Rights",
          content: [
            {
              text:
                "If a player is seen in the possession of materials that are infringing the IP rights of Legend Story Studios, the Tournament Organizer may request the player to handover possession of the infringing items for destruction. If the player declines to do so, the player will be DQ'd without prizes from the tournament. A detailed policy regarding IP usage rights can be found here Terms of Use Licensed Assets.",
              href: "https://fabtcg.com/resources/terms-use-licensed-assets/",
            },
            {
              text:
                "An example of materials that infringe the IP rights of Legend Story Studios is unofficial play mats that include unauthorized use of artwork owned by Legend Story Studios and/or unauthorized use of the Flesh and Blood logo or Legend Story Studios logo.",
            },
          ],
        },
      ],
    },
    {
      number: "8",
      name: "Card Legality",
      subsections: [
        {
          number: "8.1",
          name: "Card Legality",
          content: [
            {
              text:
                "Players are responsible for knowing if their cards are tournament legal. If unsure, they should ask the Head Judge.",
            },
            {
              text:
                "Cards may only be included in a deck if they are legal in the format being played. Card legality is managed through the Card Legality Policy document available in the Rules and Policy Center.",
              href:
                "https://fabtcg.com/resources/rules-and-policy-center/tournament-rules-and-policy/",
            },
          ],
        },
        {
          number: "8.2",
          name: "Reprints",
          content: [
            {
              text:
                "Reprints are cards that have been printed at a previous time. Some cards may be reprinted with new art and/or updated card text. These cards are still classified as a reprints. Cards that are reprinted are legal to play with as soon as they are available.",
            },
          ],
        },
        {
          number: "8.3",
          name: "Errata’d Cards",
          content: [
            {
              text:
                "From time to time, cards may have their effects updated to reflect what the intended purpose and function of the card should be. A card’s text as shown in the official Flesh and Blood card database (coming soon), is considered to be the true and correct version of the card.",
            },
            {
              text:
                "If a card has received errata, players may continue playing with any printed version of the card, but in official play must play the card as though it was printed with the errata’d text.",
            },
            {
              text:
                "Whenever a card receives errata it will be announced via a card errata bulletin on fabtcg.com.",
            },
          ],
        },
        {
          number: "8.4",
          name: "Proxy Cards",
          content: [
            {
              text: "Proxy cards are not permitted in official play.",
            },
            {
              text:
                "The Head Judge may issue a proxy card to a player at their discretion. In this case, the proxy card will be used during the tournament to represent an official Flesh and Blood card. The card is only legal for the duration of the tournament it is issued. Examples of when a proxy card may be issued are (but not limited to):",
            },
            {
              text:
                "A player opens a damaged card in a booster pack during a limited format.",
              modifiers: "list",
            },
            {
              text: "A player’s card is damaged by their opponent.",
              modifiers: "list",
            },
            {
              text: "Printed tokens at a casual level limited event.",
              modifiers: "list",
            },
            {
              text: "Printed Ira Welcome decks at a Learn to Play event.",
              modifiers: "list",
            },
          ],
        },
        {
          number: "8.5",
          name: "Misprinted Cards",
          content: [
            {
              text:
                "On rare occasions misprinted cards will make their way into Flesh and Blood products. These cards are tournament legal as long as it’s clear what the card is, and it’s not distinguishable from any other cards while face down in your deck.",
            },
            {
              text:
                "If it’s clear what the misprinted card is, but it has card information missing such as card text, cost, pitch value, power, or defense, you will be required to have a printed copy available that your opponent can refer to.",
            },
          ],
        },
        {
          number: "8.6",
          name: "Altered Cards",
          content: [
            {
              text:
                "Altered art cards are legal in official tournament play so long as the modifications do not cause the card to be unrecognizable, contain offensive material, give strategic assistance, or cause the card to be distinguishable from other cards while face down in your deck.If you are unsure if your card is considered 'marked', check with the Head Judge before a tournament.",
            },
            {
              text:
                "Printed cards are not physical modifications of official Flesh and Blood cards, and thus are not legal for tournament play (See 8.4 Proxy Cards). This does not apply to cards with the token type (not to be confused with token rarity, see 4.5 Tokens).",
            },
          ],
        },
      ],
    },
  ],
};

export default tournamentRules;
