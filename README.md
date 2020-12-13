# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The App
You can find the working app on https://spacex-launch-prod.herokuapp.com/

## How to run it?

In the project directory, you can follow these steps:

### 1. git clone https://github.com/vaibhavvats85/spacex-launch.git
### 2. npm install

## Server Side Rendering

### `npm start`

Runs the app in the production mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will not reload if you make edits.\


### `npm ssr:dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\

## Client Side rendering

### `npm start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Tech Stack
- React.js v17
- Node.js
- Express.js
- jest
- enzyme
- Heroku
- Travis CI

## Continous Integration(CI)/Continous Deployment(CD)

### CI

Travis CI Tool is used to create CI pipeline to build project on every push, pull request and merge.
`.travis.yml` in the project have all the scripts needed for a CI to pass.
![Screenshot (60)](https://user-images.githubusercontent.com/25878689/102013458-510a5900-3d76-11eb-8ee5-d6bf4f1270f9.png)

### CD

Heroku pipeline is used to create pull-request/staging/production app and deploy it automatically.
![Screenshot (61)](https://user-images.githubusercontent.com/25878689/102013433-2e784000-3d76-11eb-9a98-4c49a90c1954.png)

## LightHouse Report

![lighthouse score](https://user-images.githubusercontent.com/25878689/102007918-f57aa400-3d52-11eb-87f1-529e8600ee67.PNG)

You can see the full report under the lighthouse-report folder of the repository.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
