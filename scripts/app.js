// Objects with player data from each team
const team1 = {
    name: 'Bucs',
    quarterback: [
        {
        name: 'Tom Brady',
        shortThrowAccuracy: 0.9,
        mediumThrowAccuracy: 0.7,
        longThrowAccuracy: 0.35,
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
    name: 'Chiefs',
    quarterback: [
        {
        name: 'Patrick Mahomes',
        shortThrowAccuracy: 0.9,
        mediumThrowAccuracy: 0.8,
        longThrowAccuracy: 0.4,
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


// Object with data from the game
const gameData = {
    yardLine: 20,
    yardsToTD: 80,
    lineToGain: 30,
    yardsToFirstDown: 10,
    down: 0,
    displayDown: ['1st', '2nd', '3rd', '4th'],
    quarter: 0,
    displayQuarter: ['1Q', '2Q', '3Q', '4Q'],
    time: 15,
    intervalTime: null,
    decrement: () => {
        gameData.time--;
        if (gameData.time === 0) {
            clearInterval(gameData.intervalTime);
            gameData.quarter++;
            gameData.time = 15;
            gameData.intervalTime = setInterval(gameData.decrement, 1000 * 3)
        }
        if (gameData.quarter > 3) {
            clearInterval(gameData.intervalTime)
            gameData.quarter = 3
            gameData.time = 0;
            gameOver ();
        }
        $quarterTime.html(`${gameData.displayQuarter[gameData.quarter]}, ${gameData.time}`)
    },
    team1Score: 0,
    team2Score: 0,
    possession: 0,
    team1ThrowingYards: 0,
    team1RushingYards: 0,
    team1FD: 0,
    team1Turnovers: 0,
    team1TotalPlays: 0,
    team1ThrowingPlays: 0,
    team1RushingPlays: 0,
    team2ThrowingYards: 0,
    team2RushingYards: 0,
    team2FD: 0,
    team2Turnovers: 0,
    team2TotalPlays: 0,
    team2ThrowingPlays: 0,
    team2RushingPlays: 0,
}

function changeQ () {
    gameData.intervalTime = setInterval(gameData.decrement, 1000 * 3)
}


function blink () {
    $('body').toggleClass('blink');
    setTimeout( function () {
        $('body').toggleClass('blink');
    }, 4000)
}

function gameOver () {
    $chooseOffensivePlay1.prop('disabled', true);
    $chooseOffensivePlay2.prop('disabled', true);
    $chooseOffensivePlay3.prop('disabled', true);
    $chooseOffensivePlay4.prop('disabled', true);
    $chooseDefensivePlay1.prop('disabled', true);
    $chooseDefensivePlay2.prop('disabled', true);
    $chooseDefensivePlay3.prop('disabled', true);
    $chooseDefensivePlay4.prop('disabled', true);
    if (gameData.team1Score > gameData.team2Score) {
        $playScript.html(`GAMEOVER! The ${team1.name} defeat the ${team2.name} ${gameData.team1Score} - ${gameData.team2Score}.`)
    }
    else if (gameData.team1Score < gameData.team2Score) {
        $playScript.html(`GAMEOVER! The ${team2.name} defeat the ${team1.name} ${gameData.team2Score} - ${gameData.team1Score}.`)
    }
    else {
        $playScript.html(`The game ended in a ${gameData.team1Score} - ${gameData.team2Score} tie.`)
    }
    $('.game-data').append(`<button class="play-again">Play Again</button>`)
    $('.play-again').click (function () {
        location.reload();
    })
}

$(window).ready(function () {
    changeQ();
    $team1Name.html(`${team1.name}`)
    $team2Name.html(`${team2.name}`)
    $team1.html(`${team1.name}`)
    $team2.html(`${team2.name}`)
})

// jQuery variables used to store DOM elements to be used for DOM manipulation
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
const $team2Name = $('#team2-name')
const $football = $('.game-ball')
const $team1ThrowingYards = $('#team1-throwing-yards')
const $team1RushingYards = $('#team1-rushing-yards')
const $team1FD = $('#team1-firstdowns')
const $team1Turnovers = $('#team1-turnovers')
const $team1TotalPlays = $('#team1-total-plays')
const $team1TotalThrowingPlays = $('#team1-total-throwing-plays')
const $team1TotalRushingPlays = $('#team1-total-rushing-plays')
const $team2ThrowingYards = $('#team2-throwing-yards')
const $team2RushingYards = $('#team2-rushing-yards')
const $team2FD = $('#team2-firstdowns')
const $team2Turnovers = $('#team2-turnovers')
const $team2TotalPlays = $('#team2-total-plays')
const $team2TotalThrowingPlays = $('#team2-total-throwing-plays')
const $team2TotalRushingPlays = $('#team2-total-rushing-plays')

// Global variables to be used in multiple functions
let randomNumForSuccess= 0
let randomNumForYards = 0
let yardageGained = 0
let computerRandomNum = 0
let userDefensivePlay = 0
let footballLocation = 0


// Global functions that are executed at various points in the application
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


function changePossession () {
    if (gameData.possession === 0) {
        $('.select-offensive-play').css('visibility', 'visible');
        $('.select-defensive-play').css('visibility', 'hidden');
    }
    else if (gameData.possession === 1) {
        $('.select-offensive-play').css('visibility', 'hidden');
        $('.select-defensive-play').css('visibility', 'visible');
    }
}

function firstDown () {
    if (gameData.possession === 0) {
        gameData.team1FD += 1;
        $team1FD.html(`${gameData.team1FD}`)
    }
    else if (gameData.possession === 1) {
        gameData.team2FD += 1;
        $team2FD.html(`${gameData.team2FD}`)
    }
    gameData.down = 0;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function completedFirstDownThrow () {
    if (gameData.possession === 0) {
        $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-right', footballLocation + 'px');
        gameData.team1FD += 1;
        $team1FD.html(`${gameData.team1FD}`);
        gameData.team1ThrowingYards += yardageGained;
        $team1ThrowingYards.html (`${gameData.team1ThrowingYards}`);
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.quarterback[0].name} threw it to ${team2.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-left', footballLocation + 'px');
        gameData.team2FD += 1;
        $team2FD.html(`${gameData.team2FD}`);
        gameData.team2ThrowingYards += yardageGained;
        $team2ThrowingYards.html (`${gameData.team2ThrowingYards}`);
    }
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function completedThrow () {
    if (gameData.possession === 0) {
        $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-right', footballLocation + 'px');
        gameData.team1ThrowingYards += yardageGained;
        $team1ThrowingYards.html (`${gameData.team1ThrowingYards}`);
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.quarterback[0].name} threw it to ${team2.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-left', footballLocation + 'px');
        gameData.team2ThrowingYards += yardageGained;
        $team2ThrowingYards.html (`${gameData.team2ThrowingYards}`);
    }
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down += 1;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`);
}

function successfulRun () {
    if (gameData.possession === 0) {
        $playScript.html(`${team1.runningback[0].name} ran for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-right', footballLocation + 'px');
        gameData.team1RushingYards += yardageGained;
        $team1RushingYards.html (`${gameData.team1RushingYards}`);
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.runningback[0].name} ran for a ${yardageGained} yard gain.`);
        footballLocation = gameData.yardLine * 9.5;
        $football.css('margin-left', footballLocation + 'px');
        gameData.team2RushingYards += yardageGained;
        $team2RushingYards.html (`${gameData.team2RushingYards}`);
    }
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down += 1;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function unsuccessfulRun () {
    gameData.down += 1
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`);
    if (gameData.possession === 0) {
        $playScript.html(`${team1.runningback[0].name} ran for no gain.`);
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.runningback[0].name} ran for no gain.`);
    }
}

function incompleteThrow () {
    $playScript.html(`The pass was incomplete.`);
    gameData.down += 1
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
}

function touchdownPass () {
    if (gameData.possession === 0) {
        $playScript.html(`${team1.quarterback[0].name} threw it to ${team1.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`);
        gameData.team1ThrowingYards += gameData.yardsToTD;
        $team1ThrowingYards.html (`${gameData.team1ThrowingYards}`);
        footballLocation = 105 * 9.5;
        $football.css('margin-right', footballLocation + 'px');
        $football.css('margin-right', 'auto');
        $football.css('margin-left', '225px');
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.quarterback[0].name} threw it to ${team2.widereceivers[Math.floor(Math.random() * (2 - 0 +1) + 0)].name} for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`);
        gameData.team2ThrowingYards += gameData.yardsToTD;
        $team2ThrowingYards.html (`${gameData.team2ThrowingYards}`);
        footballLocation = 105 * 9.5;
        $football.css('margin-left', footballLocation + 'px');
        $football.css('margin-left', 'auto');
        $football.css('margin-right', '225px');
    }
    blink ();
    gameData.yardLine = 20;
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
    if (gameData.possession === 0) {
        gameData.team1Score += 7
        $team1Score.html(`${gameData.team1Score}`);
        gameData.possession = 1;
    }
    else if (gameData.possession === 1) {
        gameData.team2Score += 7
        $team2Score.html(`${gameData.team2Score}`);
        gameData.possession = 0
    }
    changePossession ();
}

function touchdownRun () {
    if (gameData.possession === 0) {
        $playScript.html(`${team1.runningback[0].name} ran it for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`)
        footballLocation = 105 * 9.5;
        $football.css('margin-right', footballLocation + 'px');
        $football.css('margin-right', 'auto');
        $football.css('margin-left', '225px');
        gameData.team1RushingYards += gameData.yardsToTD;
        $team1RushingYards.html (`${gameData.team1RushingYards}`);
    }
    else if (gameData.possession === 1) {
        $playScript.html(`${team2.runningback[0].name} ran it for a ${gameData.yardsToTD} yard TOUCHDOWN!!!!!!!`)
        footballLocation = 105 * 9.5;
        $football.css('margin-left', footballLocation + 'px');
        $football.css('margin-left', 'auto');
        $football.css('margin-right', '235px');
        gameData.team2RushingYards += gameData.yardsToTD;
        $team2RushingYards.html (`${gameData.team2RushingYards}`);
    }
    blink();
    gameData.yardLine = 20;
    gameData.yardsToTD = 100 - gameData.yardLine;
    gameData.lineToGain = gameData.yardLine + 10;
    gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
    gameData.down = 0;
    $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`)
    if (gameData.possession === 0) {
        gameData.team1Score += 7
        $team1Score.html(`${gameData.team1Score}`);
        gameData.possession = 1;
    }
    else if (gameData.possession === 1) {
        gameData.team2Score += 7
        $team2Score.html(`${gameData.team2Score}`);
        gameData.possession = 0
    }
    changePossession ();
}

function turnoverOnDowns () {
    if (gameData.down > 3) {
        gameData.down = 0;
        gameData.yardLine = 100 - gameData.yardLine;
        gameData.yardsToTD = 100 - gameData.yardLine
        gameData.lineToGain = gameData.yardLine + 10;
        gameData.yardsToFirstDown = gameData.lineToGain - gameData.yardLine;
        $downYardage.html(`${gameData.displayDown[gameData.down]} and ${gameData.yardsToFirstDown}`);
        footballLocation = gameData.yardLine * 9.5
        if (gameData.possession === 0) {
            gameData.possession = 1;
            $football.css('margin-left', footballLocation + 'px');
            $football.css('margin-right', 'auto');
            gameData.team1Turnovers += 1;
            $team1Turnovers.html(`${gameData.team1Turnovers}`);
        }
        else if (gameData.possession === 1) {
            gameData.possession = 0;
            $football.css('margin-right', footballLocation + 'px');
            $football.css('margin-left', 'auto');
            gameData.team2Turnovers += 1;
            $team2Turnovers.html(`${gameData.team2Turnovers}`);
        }
        changePossession ();
    }
}


function computerOffense () {
    computerRandomNum = Math.floor(Math.random () * (4));
    if (computerRandomNum === 0) {
        gameData.team2TotalPlays += 1;
        gameData.team2ThrowingPlays +=1;
        $team2TotalPlays.html(`${gameData.team2TotalPlays}`);
        $team2TotalThrowingPlays.html(`${gameData.team2ThrowingPlays}`);
        console.log(`The offense selected to throw it deep.`)
        if (userDefensivePlay === 0) {
            if (randomNumForSuccess < team2.quarterback[0].longThrowAccuracy / 2) {
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
                turnoverOnDowns ();
            }
        }
        else if (randomNumForSuccess < team2.quarterback[0].longThrowAccuracy) {
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
            incompleteThrow ();
            turnoverOnDowns ();
        }
    }

    if (computerRandomNum === 1) {
        gameData.team2TotalPlays += 1;
        gameData.team2ThrowingPlays +=1;
        $team2TotalPlays.html(`${gameData.team2TotalPlays}`);
        $team2TotalThrowingPlays.html(`${gameData.team2ThrowingPlays}`);
        console.log(`The offense selected a medium throw.`)
        if (userDefensivePlay === 1) {
            if (randomNumForSuccess < team2.quarterback[0].mediumThrowAccuracy / 2) {
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
                turnoverOnDowns ();
                }
            }
        else if (randomNumForSuccess < team2.quarterback[0].mediumThrowAccuracy) {
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
            turnoverOnDowns ();
        }
    }   

    if (computerRandomNum === 2) {
        gameData.team2TotalPlays += 1;
        gameData.team2ThrowingPlays +=1;
        $team2TotalPlays.html(`${gameData.team2TotalPlays}`);
        $team2TotalThrowingPlays.html(`${gameData.team2ThrowingPlays}`);
        console.log(`The offense selected to throw it short.`)
        if (userDefensivePlay === 2) {
            if (randomNumForSuccess < team2.quarterback[0].shortThrowAccuracy / 2) {
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
                        turnoverOnDowns ();
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
                        turnoverOnDowns ();
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
                        turnoverOnDowns ();
                    }
                }
            }
            else {
                incompleteThrow ();
                turnoverOnDowns ();
            }
        }
        else if (randomNumForSuccess < team2.quarterback[0].shortThrowAccuracy) {
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
                }
            }
        }
        else {
            incompleteThrow ();
            turnoverOnDowns ();
        }
        if (gameData.yardsToFirstDown <= 0) {
            firstDown ();
        }
    }  
    if (computerRandomNum === 3) {
        gameData.team2TotalPlays += 1;
        gameData.team2RushingPlays +=1;
        $team2TotalPlays.html(`${gameData.team2TotalPlays}`);
        $team2TotalRushingPlays.html(`${gameData.team2RushingPlays}`);
        console.log(`The offense selected to run.`)
        if (userDefensivePlay === 3) {
            if (randomNumForSuccess < team2.runningback[0].runAbility / 2) {
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
                        turnoverOnDowns ();
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
                        turnoverOnDowns ();
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
                        turnoverOnDowns ();
                    }
                }
            }
            else {
                unsuccessfulRun ();
                turnoverOnDowns ();
            }
        }
        else if (randomNumForSuccess < team2.runningback[0].runAbility) {
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
                }
            }
        }
        else {
            unsuccessfulRun ();
            turnoverOnDowns ();
        }
        if (gameData.yardsToFirstDown <= 0) {
            firstDown ();
        }
    }
}



// Button functionality for when the user is playing offense against the computer generated defense
$chooseOffensivePlay1.click(function () {
    computerDefense ();
    gameData.team1TotalPlays += 1;
    gameData.team1ThrowingPlays +=1;
    $team1TotalPlays.html(`${gameData.team1TotalPlays}`);
    $team1TotalThrowingPlays.html(`${gameData.team1ThrowingPlays}`);
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
                    completedFirstDownThrow ();
                }
            }
            else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
                yardageGained = Math.floor(Math.random() * (80 - 50 + 1) + 50);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass();
                }
                else {
                    completedFirstDownThrow ();
                }
            }
        }
        else {
            incompleteThrow ();
            turnoverOnDowns ();
        }
    }
    else if (randomNumForSuccess < team1.quarterback[0].longThrowAccuracy ) {
        console.log('Completed throw.');
        randomNumForYards = (Math.random() * (1.001 - 0) + 0);
        if (randomNumForYards <= 0.8) {
            yardageGained = Math.floor(Math.random() * (40 - 30 + 1) + 30);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ();
            }
        }
        else if (randomNumForYards > .8 && randomNumForYards <= .9) {
            yardageGained = Math.floor(Math.random() * (50 - 40 + 1) + 40);
            gameData.yardLine += yardageGained;
            if (gameData.yardLine >= 100) {
                touchdownPass ();
            }
            else {
                completedFirstDownThrow ();
            }
        }
        else if (randomNumForYards > 0.9 && randomNumForYards <= 1) {
            yardageGained = Math.floor(Math.random() * (80 - 50 + 1) + 50);
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
        turnoverOnDowns ();
        }
})


$chooseOffensivePlay2.click(function () {
    computerDefense ();
    gameData.team1TotalPlays += 1;
    gameData.team1ThrowingPlays +=1;
    $team1TotalPlays.html(`${gameData.team1TotalPlays}`);
    $team1TotalThrowingPlays.html(`${gameData.team1ThrowingPlays}`)
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
            turnoverOnDowns ();
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
        turnoverOnDowns ();
    }
})

$chooseOffensivePlay3.click(function () {
    computerDefense ();
    gameData.team1TotalPlays += 1;
    gameData.team1ThrowingPlays +=1;
    $team1TotalPlays.html(`${gameData.team1TotalPlays}`);
    $team1TotalThrowingPlays.html(`${gameData.team1ThrowingPlays}`)
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
                    turnoverOnDowns ();      
                }
            }
            else if(randomNumForYards > .8 && randomNumForYards <= .9) {
                yardageGained = Math.floor(Math.random() * (6 - 3 + 1) + 3);
                gameData.yardLine += yardageGained;
                if (gameData.yardLine >= 100) {
                    touchdownPass ();
                }
                else {
                    completedThrow ();
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
                }
            }
        }
        else {
            incompleteThrow ();
            turnoverOnDowns ();
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
                turnoverOnDowns ();
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
                turnoverOnDowns ();
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
                turnoverOnDowns ();
            }
        }
    }
    else {
        incompleteThrow ();
        turnoverOnDowns ();
    }
    if (gameData.yardsToFirstDown <= 0) {
        firstDown ();
    }
})


$chooseOffensivePlay4.click(function () {
    computerDefense ();
    gameData.team1TotalPlays += 1;
    gameData.team1RushingPlays +=1;
    $team1TotalPlays.html(`${gameData.team1TotalPlays}`);
    $team1TotalRushingPlays.html(`${gameData.team1RushingPlays}`)
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
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
                    turnoverOnDowns ();
            }
        }
    }
    else {
        unsuccessfulRun ();
        turnoverOnDowns ();
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
                turnoverOnDowns ();
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
                turnoverOnDowns ();
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
                turnoverOnDowns ();
            }
        }
    }
    else {
        unsuccessfulRun ();
        turnoverOnDowns ();
    }
    if (gameData.yardsToFirstDown <= 0) {
        firstDown ();
    }
});



// Button funcitonality for when the user is playing defense against the computer generated offense.
$chooseDefensivePlay1.click(function () {
    userDefensivePlay === 0;
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess);
    computerOffense ();
});

$chooseDefensivePlay2.click(function () {
    userDefensivePlay === 1;
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess);
    computerOffense ();
});

$chooseDefensivePlay3.click(function () {
    userDefensivePlay === 2;
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess);
    computerOffense ();
});


$chooseDefensivePlay4.click(function () {
    userDefensivePlay === 3;
    randomNumForSuccess = (Math.random() * (1.001 - 0) + 0);
    console.log(randomNumForSuccess);
    computerOffense ();
});