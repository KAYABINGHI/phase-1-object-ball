function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// ...existing code...

function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return Object.values(team.players).map(player => player.number);
    }
  }
}

function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;
  for (let teamKey in game) {
    const team = game[teamKey];
    for (let player in team.players) {
      if (team.players[player].shoe > biggestShoe) {
        biggestShoe = team.players[player].shoe;
        rebounds = team.players[player].rebounds;
      }
    }
  }
  return rebounds;
}
// ...existing code...
console.log(numPointsScored("Ben Gordon")); // 33
console.log(shoeSize("Mason Plumlee")); // 19
console.log(teamColors("Charlotte Hornets")); // ["Turquoise", "Purple"]
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds());