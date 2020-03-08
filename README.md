This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Notes

This was created with

```bash
npx create-react-app orange-ninja --scripts-version @captor/react-scripts
```

reason for using @captor/react-scripts , was to get TypeScript support out of the box

### Handle git login on Windows with wincred

```bash
git config --global credential.helper wincred
```

### Fix awful Windows PowerShell colors

```bash
git config --global color.status.header "black normal bold"
git config --global color.status.added "green normal bold"
git config --global color.status.updated "green normal bold"
git config --global color.status.changed "yellow normal bold"
git config --global color.status.untracked "cyan normal bold"
git config --global color.status.branch "magenta normal bold"
git config --global color.status.nobranch "normal normal bold"
git config --global color.status.unmerged "red normal bold"
```

### Node

Download Node.js from https://nodejs.org/en/download/releases/ . Select LTS (Long Term Support)

(Windows users) For compatibily reasons, do

```bash
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```

### Visual Code

1. Download and install Visual Code https://code.visualstudio.com/download
2. Goto Code->Preferences->Extensions and search for and install
   - Prettier
   - Eslint
   - Jest
   - Markdownlint
   - npm
   - PowerShell
   - Debugger for Chrome
   - GraphQL for VSCode

In VS Code User's settings/preferences as UI, search for "Format On Save" and make sure to activate it. Afterward, the file should format automatically once you save it.
