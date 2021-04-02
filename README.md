# Gotta Win Em All!


## Description

Gotta Win Em All! is a Pokemon-themed game, infinite scroll/ run type, where the player has to make the character jump over the obstacles that will be coming at it. If the character collides with the obstacle then is Game Over.
The goal is to make the highest score possible.

## MVP (DOM - CANVAS)

- game has a pokemon that jumps.
- obstacles appear randomly from the right side of the screen
- if character and obstacle have contact, the game is over
- Increasing speed every 1000 points

## Backlog

- add 10 levels, increase level  after 1000\* level number points
- increase difficulty
- Ability to start the game with different characters
- add obstacle
- add player movement (duck/)

## Data Structure

# main.js

- buildStartScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- collisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# pokemon.js

- pokemon () {
  this.x;
  this.y;
  this.direction;
  this.size
  }
- draw () {}
- jump () {}
- checkScreenCollision () {}

# obstacle.js

- obstacle () {
  this.x;
  this.y;
  this.direction;
  this.size
  }
- draw () {}
- move () {}
- checkCollisionBotton () {}

## States & States Transitions

Definition of the different states and their transition (transition functions)

- startScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildStartScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- pokemon - draw
- pokemon - move
- obstacle - draw
- obstacle - move
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello

[Link url](https://trello.com/b/wsFCS9g2/pokemon-game)

### Git

URLs for the project repo and deploy
[Link Repo](https://github.com/sil-sin/Gotta-Win-Em-All-provisory-.git)
[Link Deploy](https://github.com/sil-sin/Gotta-Win-Em-All-provisory-.git)

### Slides

URLs for the project presentation (slides)
[Link Slides.com](https://docs.google.com)

