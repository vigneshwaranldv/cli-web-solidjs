import inquirer from 'inquirer';
import { Command } from 'commander';
import { table } from 'table';
import chalk from 'chalk';
// import { processInput } from '../shared/processor';
import { processInput } from '../shared/processor.js';

const program = new Command();
program
  .name('cli-app')
  .description('CLI + Web SolidJS app')
  .version('1.0.0');

program.action(async () => {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'userInput', message: 'Enter some input:' },
    { type: 'list', name: 'choice', message: 'Select an action:', choices: ['Process', 'Exit'] }
  ]);

  if (answers.choice === 'Process') {
    const result = processInput(answers.userInput);
    console.log(chalk.green('Result:'));
    console.log(result);

    const data = [
      ['Input', 'Output'],
      [answers.userInput, result],
    ];

    console.log(table(data));
  } else {
    console.log(chalk.blue('Goodbye!'));
  }
});

program.parse();