# Dictionary

Kindly set below env if not available.
REACT_APP_BASE_URL = http://localhost:9900

and run the node js server.

- You can add a new word in dictionary
- You can search a word from dictionary

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### How Pagination works

The words can be fetched by pagination. When a page is fetched it is stored in memory so that redundant calls to server may be minimized.
