# Chalk-# chalkChalk Example
This repository demonstrates the usage of the Chalk library for styling terminal output in Node.js. Chalk allows you to add color, background, and other styles to your console logs, enhancing readability and visual appeal.

# Installation
Before running the code, ensure you have Node.js installed. Then, install the Chalk library using npm:

1. # npm install chalk

# Example Code
When you run the above code, you should see the following styled output in your terminal:

1. "Hello world!" (default style)
2. "This is Blue part" (blue text)
3. "This is Red part" (red text)
4. "This is Green part" (green text)
5. "This is Yellow part" (yellow text)
6. "Black text on a yellow background" (black text on a yellow background)
7. "Black text on a red background" (black text on a red background)
8. "Black text on a bluebright background" (black text on a bluebright background)
9. "This is bold text." (bold text)
10. "This is underlined text." (underlined text)
11. "This is italic text." (italic text)
12. "This is a bold red part" (bold and red text)
13. "I am a blue line with a blue substring that becomes blue again!" (blue text with a bold, underlined, and yellow substring)
14. true and fale
15. 

# Chalk Styles and Colors
# Modifiers
1. reset - Reset the current style.
2. bold - Make the text bold.
3. dim - Make the text have lower opacity.
4. italic - Make the text italic. (Not widely supported)
5. underline - Put a horizontal line below the text. (Not widely supported)
6. overline - Put a horizontal line above the text. (Not widely supported)
7. inverse - Invert background and foreground colors.
8. hidden - Print the text but make it invisible.
9. strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
10. visible - Print the text only when Chalk has a color level above zero. Can be useful for things that are purely cosmetic.


# Colors
1. black
2. red
3. green
4. yellow
5. blue
6. magenta
7. cyan
8. white
9. blackBright (alias: gray, grey)
10. redBright
11. greenBright
12. yellowBright
13. blueBright
14. magentaBright
15. cyanBright
16. whiteBright

# Background Colors
1. bgBlack
2. bgRed
3. bgGreen
4. bgYellow
5. bgBlue
6. bgMagenta
7. bgCyan
8. bgWhite
9. bgBlackBright (alias: bgGray, bgGrey)
10. bgRedBright
11. bgGreenBright
12. bgYellowBright
13. bgBlueBright
14. bgMagentaBright
15. bgCyanBright
16. bgWhiteBright


# 256 and Truecolor Color Support

Chalk supports 256 colors and Truecolor (16 million colors).
