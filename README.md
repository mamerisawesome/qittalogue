# Qittalogue

Qittalogue, which is a wordplay for Qitta (Cat in Arabic) and Catalogue, is a cat viewer application. This application utilizes the [thecatapi.com](https://thecatapi.com/) API providing various endpoints and data.

## Features

* Search by cat breeds
* Select a cat breed and show all cats in that breed
* Select a cat and see more information about that cat

## Tech Stack

* React
* Typescript
* React Bootstrap
* Axios
* React Query
## Development

### Environment

The application requires a defined `REACT_APP_API_KEY` taken from the `thecatapi` website upon sign-up. Define this config for maximum usage of information available in `thecatapi`.

### Scripts

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run lint`

Identify lint warnings defined in the project's [eslint rules](./.eslintrc).

#### `npm run lint:fix`

Automatically update fixable `eslint` warnings.
