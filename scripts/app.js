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
    yardsToTD: 80,
    lineToGain: 30,
    yardsToFirstDown: 10,
    down: 0,
    displayDown: ['1st', '2nd', '3rd', '4th'],
    quarter: 0,
    displayQuarter: ['1Q', '2Q', '3Q', '4Q'],
    time: 120000,
    team1Score: 0,
    team2Score: 0,
    possession: 0,
}

// setTimeout(function () {
//     gameData.quarter += 1;
//     $quarterTime.html(`${gameData.displayQuarter[gameData.quarter]}`)
// }, 120000)


const $quarterTime = $('#quarter-time')
const $downYardage = $('#down-yardage')
const $team1Score = $('#team1-score')
const $team2Score = $('#team2-score')
const $team1 = $('#team1')
const $team2 = $('#team2')
const $chooseOffensivePlay1 = $('#choose-offensive-play1')
const $chooseOffensivePlay2 = $('#choose-offensive-play2')
const $chooseOffensivePlay3 = $('#choose-offensive-play3')
const $chooseOffensivePlay4 = $('#choose-offensive-play4')
const $chooseDefensivePlay1 = $('#choose-defensive-play1')
const $chooseDefensivePlay2 = $('#choose-defensive-play2')
const $chooseDefensivePlay3 = $('#choose-defensive-play3')
const $chooseDefensivePlay4 = $('#choose-defensive-play4')
const $playScript = $('.play-script')
const $team1Name = $('#team1-name')
const $team1Player1 = $('#team1-player1')
const $team1Player2 = $('#team1-player2')
const $team1Player3 = $('#team1-player3')
const $team1Player4 = $('#team1-player4')
const $team1Player5 = $('#team1-player5')
const $team1Player6 = $('#team1-player6')
const $team1Player7 = $('#team1-player7')
const $team1Player8 = $('#team1-player8')
const $team2Name = $('#team2-name')
const $team2Player1 = $('#team2-player1')
const $team2Player2 = $('#team2-player2')
const $team2Player3 = $('#team2-player3')
const $team2Player4 = $('#team2-player4')
const $team2Player5 = $('#team2-player5')
const $team2Player6 = $('#team2-player6')
const $team2Player7 = $('#team2-player7')
const $team2Player8 = $('#team2-player8')
const $football = $('#football')

let randomNumForSuccess= 0
let randomNumForYards = 0
let yardageGained = 0
let computerRandomNum = 0


function computerDefense () {
    computerRandomNum = Math.floor(Math.random () * (4));
    if (computerRandomNum === 0) {
        console.log(`The defense selected to defend the long throw.`)
    }
    else if (computerRandomNum === 1) {
        console.log(`The defense selected to defend the medium throw.`)
    }
    else if (computerRandomNum === 2) {
        console.log(`The defense selected to defend the short throw.`)
    }
    else if (computerRandomNum === 3) {
        console.log(`The defense selected to defend the run.`)
    }
}

function computerOffense () {
    computerRandomNum = Math.floor(Math.random () * (4));
    if (computerRandomNum === 0) {
        console.log(`The offense selected to throw it deep.`)
    }
    else if (computerRandomNum === 1) {
        console.log(`The offense selected a medium throw.`)
    }
    else if (computerRandomNum === 2) {
        console.log(`The offense selected to throw it short.`)
    }
    else if (computerRandomNum === 3) {
        console.log(`The offense selected to run.`)
    }
}

function changePossession () {
    if (gameData.possession === 0) {
        $('.select-offensive-play').css('visibility', 'visible')
        $('.select-defensive-play').css('visibility', 'hidden')
    }
    else if (gameData.possession === 1) {
        $('.select-offensive-play').css('visibility', 'hidden')
        $('.select-defensive-play').css('visibility', 'visible')
    }
}

function firstDown () {
    gameData.down = 0;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function completedFirstDownThrow () {
    $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function completedThrow () {
    $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down += 1;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`);
}

function successfulRun () {
    $playScript.html(`${team1.runningback[0].name} ran for a ${yardageGained} yard gain.`);
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down += 1;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function unsuccessfulRun () {
    $playScript.html(`${team1.runningback[0].name} ran for no gain.`);
        gameData.down += 1
        $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`);
}

function incompleteThrow () {
    $playScript.html(`The pass was incomplete.`);
    gameData.down += 1
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function touchdownPass () {
    $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`)
    gameData.yardLine = 20;
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.team1Score += 7
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
    $team1Score.html(`${gameData.team1Score}`);
    gameData.possession = 1;
    changePossession ();
}

function touchdownRun () {
    $playScript.html(`${team1.runningback[0].name} ran it for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`)
    gameData.yardLine = 20;
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.team1Score += 7
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
    $team1Score.html(`${gameData.team1Score}`);
    gameData.possession = 1;
    changePossession ();
}


$chooseOffensivePlay1.click(function () {
    computerDefense ();
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess)
    if (computerRandomNum === 0) {
        if (randomNumForSuccess < team1.quarterback[0].longThrowAccuracy / 2) {
            console.log('Completed throw.');
            randomNumForYards = (Math.random() * (1.001 - 0) + 0);
            if (randomNumForYards <= 0.8) {
                yardageGained = Math.floor(Math.random() * (40 - 30 + 1) + 30);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedFirstDownThrow ()
                }
            }
            else if (randomNumForYards > .8 && randomNumForYards <= .9) {
                yardageGained = Math.floor(Math.random() * (50 - 40 + 1) + 40);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedFirstDownThrow ()
                }
            }
            else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
                yardageGained = Math.floor(Math.random() * (80 - 50 + 1) + 50);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass();
                }
                else {
                    completedFirstDownThrow ()
                }
            }
        }
        else {
            incompleteThrow ();
        }
    }
    else if (randomNumForSuccess < team1.quarterback[0].longThrowAccuracy) {
        console.log('Completed throw.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.8) {
            yardageGained = Math.floor(Math.random() * (40 - 30 + 1) + 30);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ()
            }
        }
        else if (randomNumForYards > .8 && randomNumForYards <= .9) {
            yardageGained = Math.floor(Math.random() * (50 - 40 + 1) + 40);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ()
            }
        }
        else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
            yardageGained = Math.floor(Math.random() * (80 - 50 + 1) + 50);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ()
            }
        }
    }
    else {
        incompleteThrow ()
    }
})


$chooseOffensivePlay2.click(function () {
    computerDefense ();
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess)
    if (computerRandomNum === 1) {
        if (randomNumForSuccess < team1.quarterback[0].mediumThrowAccuracy / 2) {
            console.log('Completed throw.');
            randomNumForYards = (Math.random() * (1.001 - 0) + 0);
            if (randomNumForYards <= 0.8) {
                yardageGained = Math.floor(Math.random() * (18 - 10 + 1) + 10);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedFirstDownThrow ();
                }
            }
            else if (randomNumForYards > .8 && randomNumForYards <= .9) {
                yardageGained = Math.floor(Math.random() * (25 - 18 + 1) + 18);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedFirstDownThrow ();
                }
            }
            else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
                yardageGained = Math.floor(Math.random() * (30 - 25 + 1) + 25);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedFirstDownThrow ();
                }
            }
        }
        else {
            incompleteThrow ();
        }
    }
    else if (randomNumForSuccess < team1.quarterback[0].mediumThrowAccuracy) {
        console.log('Completed throw.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.8) {
            yardageGained = Math.floor(Math.random() * (18 - 10 + 1) + 10);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ();
            }
        }
        else if (randomNumForYards > .8 && randomNumForYards <= .9) {
            yardageGained = Math.floor(Math.random() * (25 - 18 + 1) + 18);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ();
            }
        }
        else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
            yardageGained = Math.floor(Math.random() * (30 - 25 + 1) + 25);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ();
            }
        }
    }
    else {
        incompleteThrow ();
    }
})

$chooseOffensivePlay3.click(function () {
    computerDefense ();
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess)
    if (computerRandomNum === 2) {
        if (randomNumForSuccess < team1.quarterback[0].shortThrowAccuracy / 2) {
            console.log('Completed throw.');
            randomNumForYards = (Math.random() * (1.001 - 0) + 0);
            if (randomNumForYards <= 0.8) {
                yardageGained = Math.floor(Math.random() * (3 - 1 + 1) + 1);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedThrow ();
                }
            }
            else if (randomNumForYards > .8 && randomNumForYards <= .9) {
                yardageGained = Math.floor(Math.random() * (6 - 3 + 1) + 3);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedThrow ();
                }
            }
            else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
                yardageGained = Math.floor(Math.random() * (9 - 6 + 1) + 6);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedThrow ();
                }
            }
        }
        else {
            incompleteThrow ();
        }
    }
    else if (randomNumForSuccess < team1.quarterback[0].shortThrowAccuracy) {
        console.log('Completed throw.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.8) {
            yardageGained = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedThrow ();
            }
        }
        else if (randomNumForYards > .8 && randomNumForYards <= .9) {
            yardageGained = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedThrow ();
            }
        }
        else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
            yardageGained = Math.floor(Math.random() * (9 - 6 + 1) + 6);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedThrow ();
            }
        }
    }
    else {
        incompleteThrow ();
    }
    if (gameData.yardsToFirstDown <= 0) {
        firstDown ();
    }
})


$chooseOffensivePlay4.click(function () {
    computerDefense ();
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess)
    if (computerRandomNum === 3) {
        if (randomNumForSuccess < team1.runningback[0].runAbility / 2) {
            console.log('Run for positive yards.');
            randomNumForYards = (Math.random() * (1.001 - 0) + 0);
            if (randomNumForYards <= 0.75) {
                yardageGained = Math.floor(Math.random() * (4 - 1 + 1) + 1);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownRun ();
                }
                else {
                    successfulRun ();
                }
            }
            else if (randomNumForYards > 0.75 && randomNumForYards <= 0.90) {
                yardageGained = Math.floor(Math.random() * (9 - 4 + 1) + 4);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownRun ();
                }
                else {
                    successfulRun ();
                }
            }
            else if (randomNumForYards > .9 && randomNumForYards <= 1 ) {
                yardageGained = Math.floor(Math.random() * (80 - 10 + 1) + 10);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownRun ();
                }
                else {
                    successfulRun ();
                }
            }
        }
        else {
            unsuccessfulRun ();
        }
    }
    else if (randomNumForSuccess < team1.runningback[0].runAbility) {
        console.log('Run for positive yards.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.75) {
            yardageGained = Math.floor(Math.random() * (4 - 1 + 1) + 1);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownRun ();
            }
            else {
                successfulRun ();
            }
        }
        else if (randomNumForYards > 0.75 && randomNumForYards <= 0.90) {
            yardageGained = Math.floor(Math.random() * (9 - 4 + 1) + 4);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownRun ();
            }
            else {
                successfulRun ();
            }
        }
        else if (randomNumForYards > .9 && randomNumForYards <= 1 ) {
            yardageGained = Math.floor(Math.random() * (80 - 10 + 1) + 10);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownRun ();
            }
            else {
                successfulRun ();
            }
        }
    }
    else {
        unsuccessfulRun ();
    }
    if (gameData.yardsToFirstDown <= 0) {
        firstDown ();
    }
})