import chalk from 'chalk';

console.log('Hello world!');

console.log(chalk.blue("This is Blue part"))
console.log(chalk.red("This is Red part"))
console.log(chalk.green("This is Green part"))
console.log(chalk.yellow("This is Yellow part"))
console.log(chalk.bgYellow.black('Black text on a yellow background'));
console.log(chalk.bgRed.black('Black text on a red background'));
console.log(chalk.bgBlueBright.black('Black text on a bluebright background'));

console.log(chalk.bold('This is bold text.'));
console.log(chalk.underline('This is underlined text.'));
console.log(chalk.italic('This is italic text.'));

console.log(chalk.bold.red('This is a bold red part'));

console.log(chalk.blue('I am a blue line ' + chalk.yellow.underline.bold('with a blue substring') + ' that becomes blue again!'));


const arr = [1, 2, 3];
console.log(chalk.green('Array includes 2: ' + arr.includes(2))); 
console.log(chalk.red('Array includes 5: ' + arr.includes(5))); 

console.log(chalk.ansi256(200)('This is text with a 256 color'));
console.log(chalk.rgb(123, 45, 67)('This is text with an RGB color'));
