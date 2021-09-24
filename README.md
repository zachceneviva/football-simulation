# football-simulation

## Introduction
Football is back! This browser game is a simulation football game of a user calling offensive and defensive plays against the computerized opponent. Each game will last about 4 minutes, with the objective of the game being to out-strategize the computer and score more touchdowns. The gamepage shows the score, quarter, down, time, yards needed for a first down, a variety of team data, and a game field visualization of each play. 

I am a big football fan, so I wanted to find a way to incorporate a major passion of mine into a fun project. Additionally, I love data and tried to incorporate a lot of data into this game. I think data is extremely powerful and can be leveraged to make high impact decisions. This is why I tried to show some live data about each team's performance. I hope to continue to improve this game by making better use of these data points.

The probabilities of success in this game do somewhat mirror the actual success rates of the particular players in real life. Even then, there is a lot of chance in this game, but the right strategy will improve your odds of winning. Good luck and have fun!

## Technologies
List of technologies used for this game:
- JavaScript - ES6
- jQuery - 3.6.0
- HTML5
- CSS

## How to Play
When the page loads, the upper right hand corner will have a large "Start Game" button. Clicking this button will start the game timer and enable the buttons for play selection. 

The user is presented with 4 play call options on offense and 4 play call options on defense. For offensive play call, the user can select the 'Throw Long', 'Throw Medium', 'Throw Short', or 'Run' button. Each button will result in the possibility of gaining different yardage values. A long throw will randomly gain between 30 and 80 yards, with the highest probability being between 30-40 yards. A medium throw will randomly gain 10-30 yards, with the highest probability being between 10-18 yards. A short throw will randomly gain between 1-9 yards, with the highest probabulity being 1-3 yards. Lastly, a run will gain 1-80 yards, with the highest probability being 1-4 yards. The success of each play call is determined by a random number between 0-1. The random number needed to be successful in a play call is based on the statistics of the quarterback for a throw, or the statistics of the runningback for a run. Additionally, if the defense correctly defends against whatever play call the user selects, the probability of success for that play is dramatically decreased based on the defensive stats of the opposing team to defend against that specific play type. 

Playing defense is similar to playing offense. The above offensive gameplay is executed randomly by the computer while the user selects defensive plays to counter the offensive plays the computer is picking. Again, if the user selects to defend the correct play, the chance of success for that computer is dramatically decreased.

Turnover on downs can occur. The down and yardage is displayed above the scoreboard. If the user or computer fails to convert, the ball will be turned over at the current spot. The other way to change possession is through scoring touchdowns. When a touchdown is scored, the ball is automatically placed at the 20 yard line for the offensive team to start their drive. 

The game is broken into 4 quarters, each being 60 seconds long. The timer will restart at the beginning of each quarter, but there is currently no pause in the game when this occurs.

The team to score the highest points wins the game. The game displays most of the game data. There is a play script below the scoreboard that will show the outcome of the previous play. Additionally, the banners to the left and right of the game field will display a variety of data about the performance of each team. 

## Currently Working to Improve
- Add a timeout function
- Add a halftime break that pauses the game 
- Fix the on field visual bug with the football when a turnover occurs
- Add special teams play (field goals, punts, and kickoffs)
- Add turnovers (fumble, interception, safety)
- Restrict play type when in the Redzone (i.e within 20 yards of the endzone the long throw button is disabled)
- Add a first down line
- Add a Redzone visualizaiton or animation
- Add the option to pick the teams
- Add the option to run a data backed computerized simulation of two teams
- Allow the computer to track how often a certain play is called and adjust its random play selections based on the tracking of these user plays (Macine Learning)
- Allow the computer to adjust its play call based on field position, time, distance to a firstdown, and distance to a touchdown (Machine Learning)