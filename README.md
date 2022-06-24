At the company I work we use Drupal framework which has security updates on a regular bases.<br>
Our team leader ask me to create an app for tracking our clients security updates.<br>
At that point I had never touched React and decided to go through this crash course<br> https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d<br>
The course gave me the necessary knowledge to build the app.<br>
Unfortunately due to a security reasons I can't provide a login details to the app as it's a company policy.<br>
https://accessdigital.github.io/securitydashboardfrontend/<br>
Essentially how the app works is to talk to a REST API where gets the JSON data with all our Drupal projects and all the modules status and display them in a table. The app has also login service for which I used Firebase.<br>
It was nice experience learning the basics of React :)

# Getting Started with the Security Dashboard App

1 - Make sure you have Nodejs installed on your machine.

2 - Clone the repo.

3 - Navigate to the root of the project and run `npm install`.

4 - Create `.env.production` file out of the `.env` file with the following command `cp .env .env.production`.

5 - Get all variables values needed for the new `.env.production` file you just created from Bitwarden under the project name `security-dashboard`, and make sure you use them only in the `.env.production` file and not in the `.env` file due to security reasons.

# Available Scripts

1 - `npm run start` this command will start the project using the `.env.production` file.

2 - Press `ctrl + c` this command will stop the app.

3 - `npm run deploy` this command will build and deploy any code changes to the live project.

# Login details

You can find the app login details in Bitwarden under the name `security-dashboard`.
