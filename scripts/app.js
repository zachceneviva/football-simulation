const team1 = {
    quarterback: [
        {
        name: 'Tom Brady',
        shortThrowAccuracy: 0.9,
        mediumThrowAccuracy: 0.7,
        longThrowAccuracy: 0.5,
        }
    ],
    runningback: [
        {
        name: 'Ronald Jones',
        runAbility: 0.75,
        catchAbility: 0.5,
        },
    ],
    widereceivers: [
        {
        name: 'Chris Godwin',
        catchAbility: 0.9,
        },
        {
        name: 'Mike Evans',
        catchAbility: 0.85,
        },
        {
        name: 'Antonio Brown',
        catchAbility: 0.80,
        }
    ],
    tightends: [
        {
        name: 'Rob Gronkowski',
        catchAbility: 0.85,
        }
    ],
    defense: {
        defendRun: 0.80,
        defendShortThrow: 0.85,
        defendMediumThrow: 0.60,
        defendLongThrow: 0.60,
    }
}

const team2 = {
    quarterback: [
        {
        name: 'Patrick Mahomes',
        shortThrowAccuracy: 0.9,
        mediumThrowAccuracy: 0.8,
        longThrowAccuracy: 0.7,
        }
    ],
    runningback: [
        {
        name: 'Clyde Edwards-Helaire',
        runAbility: 0.65,
        catchAbility: 0.5,
        },
    ],
    widereceivers: [
        {
        name: 'Tyreek Hill',
        catchAbility: 0.9,
        },
        {
        name: 'Mecole Hardman',
        catchAbility: 0.65,
        },
        {
        name: 'Demarcus Robinson',
        catchAbility: 0.80,
        }
    ],
    tightends: [
        {
        name: 'Travis Kelce',
        catchAbility: 0.95,
        }
    ],
    defense: {
        defendRun: 0.70,
        defendShortThrow: 0.75,
        defendMediumThrow: 0.70,
        defendLongThrow: 0.60,
    }
}


const gameData = {
    yardLine: 20,
    yardsToTD: 0,
    lineToGain: 0,
    yardsToFirstDown: 0,
    down: ['1st', '2nd', '3rd', '4th'],
    quarter: ['1st', '2nd', '3rd', '4th'],
    time: '15:00',
    team1Score: 0,
    team2Score: 0,
}

const $choosePlay1 = $('#choose-play1')
const $playScript = $('.play-script')
const $team1Player1 = $('#team1-player1')
const $team1Player2 = $('#team1-player1')
const $team1Score = $('#team1-score')

let randomNumForSuccess= 0
let randomNumForYards = 0
let yardageGained = 0
$choosePlay1.click(function () {
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess)
    if (randomNumForSuccess < 0.5) {
        console.log('Completed throw.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.8) {
            yardageGained = Math.floor(Math.random() * (40 - 30 + 1) + 30);
            gameData.yardLine += yardageGained;
            gameData.yardsToTD = 100 - gameData.yardLine;
            gameData.lineToGain = gameData.yardLine + 10;
            gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
            if (gameData.yardLine >= 100) {
                $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard TOUCHDOWN!!!!!!!`)
                gameData.yardLine = 20;
                gameData.yardsToTD = 100 - gameData.yardLine;
                gameData.lineToGain = gameData.yardLine + 10;
                gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
                gameData.team1Score += 7
                $team1Score.html(`${gameData.team1Score}`)
            }
            else {
                $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`)
            }
        }
        else if (randomNumForYards > .8 && randomNumForYards <= .9) {
            yardageGained = Math.floor(Math.random() * (50 - 40 + 1) + 40);
            gameData.yardLine += yardageGained;
            gameData.yardsToTD = 100 - gameData.yardLine;
            gameData.lineToGain = gameData.yardLine + 10;
            gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
            if (gameData.yardLine >= 100) {
                $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard TOUCHDOWN!!!!!!!`)
                gameData.yardLine = 20;
                gameData.yardsToTD = 100 - gameData.yardLine;
                gameData.lineToGain = gameData.yardLine + 10;
                gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
                gameData.team1Score += 7
                $team1Score.html(`${gameData.team1Score}`)
            }
            else {
                $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`)
            }
        }
        else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
            yardageGained = Math.floor(Math.random() * (80 - 50 + 1) + 50);
            gameData.yardLine += yardageGained;
            gameData.yardsToTD = 100 - gameData.yardLine;
            gameData.lineToGain = gameData.yardLine + 10;
            gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
            if (gameData.yardLine >= 100) {
                $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard TOUCHDOWN!!!!!!!`)
                gameData.yardLine = 20;
                gameData.yardsToTD = 100 - gameData.yardLine;
                gameData.lineToGain = gameData.yardLine + 10;
                gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
                gameData.team1Score += 7
                $team1Score.html(`${gameData.team1Score}`)
            }
            else {
            $playScript.html(`${team1.quarterback[0].name} threw it deep to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`)
            }
        }
    }
    else {
        $playScript.html(`The pass was incomplete.`)
    }
})