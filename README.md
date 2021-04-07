# Gotta Win Em All!

## Description

Gotta Win Em All! is a Pokemon-themed game, side scroller type, where the player has to make the character jump or duck over/under the obstacles that will be coming at it. If the character collides with the obstacle then is Game Over.
If you manage to evade the obstacles you win Badges. Win 8 badges + the Pokemon Cup to win the game.

## MVP (DOM - CANVAS)

- game has a pokemon that jumps(arrow up key) and ducks(arrow down key)
- obstacles appear randomly from the right side of the screen
- if character and obstacle have contact, the game is over

## Backlog

- add 9 levels, increase level every 200points, except the final level will be 400 points
- increase obstacle speed
- Ability to start the game with different characters
- add different obstacles

## Data Structure

# index.js

- buildStartScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}
- drawCanvas () {}

# game.js

- collisions () {}
- animate() {}
- clearCanvas () {}
- updateCanvas () {}
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
[Link Repo](https://github.com/sil-sin/Gotta-Win-Em-All.git)
[Link Deploy](https://sil-sin.github.io/Gotta-Win-Em-All/)

### Slides

URLs for the project presentation (slides)
[Link Slides.com](https://docs.google.com)
