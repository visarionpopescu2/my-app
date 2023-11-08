# Visarion Popescu - Demo App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project is using Ant Design components.

## Available Scripts

After the project has been cloned, in the project directory, you should run first:

### `yarn install` 

followed by

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## The app

Here you can find a static sidebar menu containing the user profile and two static routes and a content section.\
Its content varies based on the accessed route.\
On Dashboard, you can find the current user details and his/her company.\
On Articles, you can find all the user's articles.

Every article has 3 possible actions: Edit, Delete and Open.\
Edit will open a modal containing a form already populated with the article's title and body.\
Delete will delete the article.\
Open will navigate to the article's page where you can see it expanded.
