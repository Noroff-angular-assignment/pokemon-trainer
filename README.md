# Background
"Pokemon-Trainer" is an assignment from the Accelerated Learning course in Fullstack .Net developer (Noroff). The Pokemon Trainer is an application that utilize Angular, TailwindCSS and API's. In other words, the project is a Single Page Application focus on the front-end with Angular, how protect routes with authentication, Context API and working in team on Git.  

## Description
This project is an Pokémon Trainer application which contain three pages. If not already logged in, the first page is for the Trainer to enter name and login to the site. Without enter trainer name, the reset of the site will be inaccessible. the second page is an Pokémon catalogue page which utilizes the [Poké API](https://pokeapi.co/). In the catalogue, the trainer can search and filter through the pokémons and catch them. The third page is the trainer's Poké Index and inventory, where the trainer can inspect all the caught Pokémons. 

## Disclaimer
As the application have only focus on the front-end, the application doesn't have the back-end like database to manage API. Therefore, the application focus on the handle and check with username, where utilize the browser's storage from local to session. The same for any environment variables is not generated using any secure algorithm and the user is not given an authentication token.
## Components tree
To begin the implementation of the application, there have been developed a component tree to show the pages and feature components.The component tree can be found in the ComponentTree_PokeTrainer.pdf. As the component tree is created before any code is written and will not be updated, as it will be part of the overall grade, the application may vary some degree from the component tree.
## Status of the Project
The project is currently just begun development and should be completed the 6. February 2023.
# Running The Project locally
Here is a short guide to be able to run the project locally, after having cloned the project.
## Making the API Hosting
There is many services, but most of them use similar process. Here is how it is done in Glitch.
- Login on Glitch in a browser.
- Create new project by import from GitHub.
- Use the following source: [noroff assignment API](https://github.com/dewald-els/noroff-assignment-api.git).
- Enter the api key in the .env file.
    - The variable name set to API_KEY.
    - The value of the variable is up to you.

there is a limited amount of hours runtime of a application on Glitch. This is the reason our URL is not publicly accessible and the same should your project unless having paid for more uptime in Glitch.

## Commands
### `$npm install`
As most Node.js projects, the node_modules should not be included in git repositories. This command will create the node_module folder based on the dependencies in the package.json file.

if want to make similar project, following commands have been used to create a basic Angular project and installing those Angular packages used in this project.:
- `$ npm install -g @angular/cli`
- `$ ng new pokemon-trainer`
- `$ cd pokemon-trainer`
- `$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
- `$ npx tailwindcss init`
OBS!! Those commands should not be necessary in this project.
### `$npm start`
Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser. 

The page will reload when you make changes.\
You may also see any lint errors in the console.

OBS! the port 4200 is the default port, but may change depending on your environment.
### `ctrl+c`
While the app is running, the terminal will be busy running the process. Use the shortcut `ctrl+c` to terminate the process and thereby kill the application.
#  GIT Convention
This project use the [conventional commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and [branch naming](https://dev.to/couchcamote/git-branching-name-convention-cch).
## Naming Branches
There is the main branch which is static, while the other branches (feature branches) should be deleted when completed and merged into the main branch. 

The protocol of merging a feature branch into main branch should be:
- Update local repository of main branch.
- Merge main branch into feature branch.
- Verify the feature works correctly.
- Verify everything else works as previously.
- Merge feature branch into local repository of main branch.
- Push local repository of main branch to the GitHub repository.

### Feature branches
Feature branches is to be branched out from the master branch and to be working on some content for the application. Feature branches naming should be structured as \<category>/description-in-kebab-case>.

The categories:
- Features
- Docs
- Bugfix
- Hotfix
- Test

## Commits
This means the commit message should be structured as follows:

    <type>: <description>

where \<types> used can be:
 - fix (the correlates with PATCH in Semantic versioning)
 - feat (the correlates with MINOR in Semantic versioning)
 - docs
 - style
 - refactor
 - test

In addition, there is possible to apply the "!" as suffix of the type to indicate breaking API changes (the correlates with MAJOR in Semantic versioning).

The \<description> should be meaningful in such a way that it solely can explain the commit and the commit should only cover small additions.

# General Angular Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
