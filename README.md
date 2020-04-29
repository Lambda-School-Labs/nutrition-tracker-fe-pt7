
# Nutrivurv

You can find the deployed project at [Nutrivurv](https://www.nutrivurv.com/).

## 4️⃣ Contributors

|                                       [Dave Kane](https://github.com/DoubleBridges)                                        |                                       [Patrick Shushereba](https://github.com/pshushereba)                                        |                                       [Dominick Bruno](https://github.com/DomBruno)                                        |                                       [Benjamin T. Wilson](https://github.com/benjamin-t-wilson)                                        |                                       [Student 5](https://github.com/)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/honda0306)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mister-Corn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/Xix9XSlj/labspt7-nutrition-tracker)

[Product Canvas](https://www.notion.so/Nutrition-Tracker-c05986bd547e429f97d2e3a75e97b32d)

[UX Design files](https://www.figma.com/file/yqpTM7IYO90dVNPBsxaQrG/NutriJournal%2C-Ashes-%26-Tricia?node-id=122%3A2)

Learning how to eat healthy and making a lifestyle change is overwhelming and difficult. There is a lack of education and many new habits that need to be developed which deter people from meeting their health goals. Reading food labels to track calories and other nutritional factors is tedious and time-consuming.  

Nutrivurv is an application that helps users take control of a healthier lifestyle. The application makes it easy to track critical health information; whether that is macros, calories, or any other food data that you use in working towards a healthier life.

### Key Features

- Utilizes world renowned Edamam Food databases
- Daiy Journal Logs food and generates complete nutritional data for each item
- Dynamic donut graph charts progress towards multiple goals at once
- Community forum leverages the power of GraphQL subscriptions to render seamless user interaction

## Tech Stack

### Front end built using:

#### ![_NextJS_](https://camo.githubusercontent.com/1f8dec51cb01842d7bb7a7cd50ade17c75c5e3bd/68747470733a2f2f6173736574732e7a6569742e636f2f696d6167652f75706c6f61642f76313533383336313039312f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6a732e706e67)

- Server Side Rendering
- Dynamic Routing
- React-based

#### ![Apollo Server](https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png)

- Simplified integration of GraphQL with React
- Well documented
- Widely used solution

#### ![Tailwind.css](https://camo.githubusercontent.com/97517e40f9727cc4637bea2d0e1b813d4639f8b2/68747470733a2f2f7461696c77696e646373732e636f6d2f696d672f7461696c77696e642e737667)

- Reduce time spent styling
- Lightweight yet robust
- Simple to implement

#### Front end deployed to Heroku.

#### [Back end](https://github.com/Lambda-School-Labs/nutrition-tracker-be-pt7) built using:

#### ![GraphQL](https://graphql.org/img/logo.svg)

- Efficient
- Customizable
- Widely used alternative to traditional REST architecture

#### <img src="https://camo.githubusercontent.com/c7f49c483a3c5a145ff55c7331520a65e12abff2/68747470733a2f2f692e696d6775722e636f6d2f774434725674342e706e67" alt="Prisma" width="144" height="144")

- Simplified schema and query builder
- Well documented
- Widely used alternative to ORM service

# APIs

## Auth0

Auth0 is one of the most widely respected identity providers currently operating, despite some recent shifts towards Okta.  Auth0 is much better supported by Next.js which is otherwise incompatible with Okta due to technical conflicts caused by the way Next.js handles routes.

## Edamam Food Database API

At it's core, Nutrivurv is based around the globally recognized, industry-leading Edamam Food Database collection.  Data from two of these comprehensive databases is then used to generate a wide variety of custom user-requested calculations.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_apiKey - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_authDomain - when you set up your Firebase project, this information will be in the dashboard
    *  REACT_APP_databaseURL - in the Firebase dashboard
    *  REACT_APP_projectID - in the Firebase dashboard
    *  REACT_APP_storageBucket - in the Firebase dashboard
    *  REACT_APP_messagingSenderId - in the Firebase dashboard
    *  REACT_APP_stripe_API - this is your public Stripe API key, generated in the Stripe dashboard
    *  REACT_APP_backendURL - optional for your local development server
    *  REACT_APP_clientid - this is the Stripe_connect clientID, generated in Stripe_connect settings
    *  REACT_APP_stripe_plan - this is the ID for a second Stripe subscription plan, generated under Stripe products

# 5️⃣ Content Licenses

All images and icons [Copyright 2020 Katerina Limpitsouni](https://undraw.co/license), used with permission.

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

 0 Fork and Clone this Repository
 1 CD to your local copy of the repo
 2 In terminal type EITHER `npm install` or `yarn install`
 3 Reference "Other Scripts" below for instructions for your desired environment

## Other Scripts

    dev: `next dev` : starts the development environment
    build: `next build` : creates a build of the application
    start: `next start -p $PORT` : starts the production server after a build is created
    test: `jest --watch` : runs tests in _tests_ directory
    heroku-postbuild: `npm run build` : runs Heroku postbuild scripts

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/nutrition-tracker-be-pt7/blob/master/README.md) for details on the backend of our project.
