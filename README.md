# Getting Started with the Security Dashboard App

1 - Make sure you have Nodejs installed on your machine.

2 - Clone the repo.

3 - Navigate to the root of the project and run `npm install`.

4 - Create `.env.development.local` file out of the `.env.production` file with the following command `cp .env.production .env.development.local`.

5 - Get all variables values needed for the new `.env.development.local` file you just created from Bitwarden under the project name `security-dashboard`, and make sure you use them only in the `.env.development.local` file and not in the `.env.production` file due to security reasons.

# Available Scripts

1 - `npm run start-dev` this command will start a dev environment using the `.env.development.local` file.

2 - Press `ctrl + c` this command will stop the app.

3 - `npm run deploy` this command will build and deploy any code changes to the live project.

# Login details

You can find the app login details in Bitwarden under the name `security-dashboard`.