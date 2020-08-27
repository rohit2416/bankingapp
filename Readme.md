# _Table of Contents_
File Structure
Getting Started
Installing
Run the application

#_File Structure_
We use the component approach in our project. This is the standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class.

#_Getting Started_
Dependencies:
To run this app:

node and npm (brew install node)
Ensure you're running the latest versions Node and NPM
Once you have those, you should install these globals with` npm install --global`:

#_Installing_
npm install to install all dependencies
Install the Angular CLI

`npm install -g @angular/cli`

To create a new workspace and initial starter app:
Run the CLI command ng new and provide the name my-app

`ng new my-app`

The ng new command prompts you for information about features to include in the app. Accept the defaults. The Angular CLI installs the necessary Angular npm packages and other dependencies.

#_Run the application_
Navigate to the workspace folder

`cd my-app
ng serve --open`

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files. The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

Angular material for Input boxes and transaction

ng2-search filter for search
