// import { Command } from 'commander';
// import { select } from '@inquirer/prompts';
// import simpleGit from 'simple-git';
// import * as fs from 'node:fs';
// import { execSync } from 'child_process';

// const program = new Command();
// const git = simpleGit();

// program
//   .command('deploy')
//   .description('Deploy the project')
//   .action(async () => {
//     try {
//       // Check if git is installed
//       try {
//         execSync('git --version', { stdio: 'ignore' });
//       } catch (error) {
//         console.log('Git is not installed. Please install Git and try again.');
//         return;
//       }

//       // Check if gh is installed
//       try {
//         execSync('gh --version', { stdio: 'ignore' });
//       } catch (error) {
//         console.log('GitHub CLI (gh) is not installed. Please install gh and try again.');
//         return;
//       }

//       // Check if user is logged in to gh
//       try {
//         execSync('gh auth status', { stdio: 'ignore' });
//       } catch (error) {
//         console.log('You are not logged in to GitHub CLI. Please log in using `gh auth login` and try again.');
//         return;
//       }

//       // Check if you are in the main branch
//       const statusSummary = await git.status();
//       if (statusSummary.current !== 'main') {
//         console.log('You are not on the main branch. Please switch to the main branch and try again.');
//         return;
//       }

//       // Check if there are any uncommitted changes
//       if (!statusSummary.isClean()) {
//         console.log('You have uncommitted changes. Please commit or stash your changes and try again.');
//         return;
//       }

//       // Upgrade version
      
   

//       const newVersionType = await select({
//         message: 'Select version bump type:',
//         choices: [
//           {
//             name: 'patch',
//             value: 'patch',
//             description: 'Increment the patch version (e.g., 1.0.0 to 1.0.1)',
//           },
//           {
//             name: 'minor',
//             value: 'minor',
//             description: 'Increment the minor version (e.g., 1.0.0 to 1.1.0)',
//           },
//           {
//             name: 'major',
//             value: 'major',
//             description: 'Increment the major version (e.g., 1.0.0 to 2.0.0)',
//           },
//         ],
//       });

//       // Read package.json
//       const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
//       const versionParts = packageJson.version.split('.').map((num: string) => parseInt(num, 10));

//       switch (newVersionType) {
//         case 'major':
//           versionParts[0]++;
//           versionParts[1] = 0;
//           versionParts[2] = 0;
//           break;
//         case 'minor':
//           versionParts[1]++;
//           versionParts[2] = 0;
//           break;
//         case 'patch':
//           versionParts[2]++;
//           break;
//       }

//       packageJson.version = versionParts.join('.');
//       fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

//       // Commit and push changes
//       await git.add('package.json');
//       await git.commit(`chore: bump version to ${packageJson.version}`);
//       await git.push('origin', 'main');

//       // Create PR from main to stable using gh CLI
//       try {
//         execSync('gh pr create --base stable --head main --title "Merge main to stable" --body "This PR merges changes from main to stable."', { stdio: 'inherit' });
//       } catch (error) {
//         console.log('Failed to create pull request using gh CLI. Please create the pull request manually.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   });

// program.parse(process.argv);
