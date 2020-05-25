A game made with p5.js. You can play the game here: https://bubble-not-so-trouble.netlify.app/!

# How to play
This game is inspired by Bubble Trouble. 

- Press enter to start game, or use the down key to choose level.
- Move player with right and left keys.
- Shoot arrows with space.
- To level up you have to shoot all bubbles until there is no left.
- This game has only two levels so when the second level is done you have won the game. 
- When you start a new game you will se your highscore in the score table in the top left corner.

Have fun!

## Testers

#### 2 groups in the class:
1.
2.

#### 4 users who knows nothing about programming:
1. Isak Frindberg
2.
3.
4.


## Code review
By [Camilla Kylmänen Sjörén](https://github.com/camiwd) and [Maja Alin](https://github.com/majaalin).

1. player.js: naming of the file. the function preload() is used to preload all files/images in a project, maybe name the file preload.js instead, in case more images or files will be added later on.

2. game.js: 133, 140, 166, 216. add spaces to make the code more readable as the file is very long

3. how-to-play button - now you can only read the rules in the readme

4. Timer.js:28 - if the time runs out the following error appears in the console: “Uncaught TypeError: gameOver is not a function. Timer.js:28”. Maybe try to declare the function before you’re calling on it?

5. game.js:132 - The high score is not stored in local storage. We think this might have to do with the storeItem() function.

6. game:js - Great comments! It was easy to follow! Maybe you could have some more comments in the other files as well.

7. game.js:1, 18 - It might have been even easier to read the code if it was split into a few more files, maybe setup() and start() could be in their own file to make it more readable.

8. variables.js - Good that you put the variables in an own file.

9. Timer.js:16 - Maybe the score should be rounded two decimals, to make it more comparable with others.

10. All in all we think it’s a well written code and we cannot find any other lines to correct :slightly_smiling_face:


## Pull request log 

1. [First test](https://github.com/emeliepetersson/game-over/pull/1)
2. [Delete DS_Store](https://github.com/emeliepetersson/game-over/pull/2)
3. [Added bounce test for bubbles](https://github.com/emeliepetersson/game-over/pull/3)
4. [Changed file structure](https://github.com/emeliepetersson/game-over/pull/4)
5. [Added Arrow class](https://github.com/emeliepetersson/game-over/pull/5)
6. [Updated file structure and Arrow class](https://github.com/emeliepetersson/game-over/pull/6)
7. [Added collision for arrow and bubbles](https://github.com/emeliepetersson/game-over/pull/7)
8. [Added Timer class](https://github.com/emeliepetersson/game-over/pull/8)
9. [Updated player and background](https://github.com/emeliepetersson/game-over/pull/9)
10. [Added Menu class](https://github.com/emeliepetersson/game-over/pull/10)
11. [Added EditorConfig](https://github.com/emeliepetersson/game-over/pull/11)
12. [Update arrows and Count score Function](https://github.com/emeliepetersson/game-over/pull/12)
13. [Updated Collision check and bubble split](https://github.com/emeliepetersson/game-over/pull/13)
14. [Added win game](https://github.com/emeliepetersson/game-over/pull/14)
15. [Fix bubble bounce height and visibility](https://github.com/emeliepetersson/game-over/pull/15)
16. [Updated game over screen](https://github.com/emeliepetersson/game-over/pull/16)
17. [Updated Menu class and readme](https://github.com/emeliepetersson/game-over/pull/17)
18. [Added sound effects](https://github.com/emeliepetersson/game-over/pull/18)
19. [Small adjustments to Bubble size and collision](https://github.com/emeliepetersson/game-over/pull/19)
20. [Added highscore](https://github.com/emeliepetersson/game-over/pull/20)
21. [Cleaned up code](https://github.com/emeliepetersson/game-over/pull/21)
22. [Added text to menu and updated pull request log](https://github.com/emeliepetersson/game-over/pull/22)

## License
See [The MIT License](https://github.com/emeliepetersson/game-over/blob/master/LICENSE).
