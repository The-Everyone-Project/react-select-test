# Info

This repo is for testing the [PR](https://github.com/JedWatson/react-select/pull/4322#issuecomment-749134033) created by Progyan1997 which implements some Aria fixes.

The PR has been downloaded in to the lib folder to allow easy testing of changes. The package has been built and the resulting files packed so they can be referenced from this projects package.json file (see below).

To use the PR, update the "react-select"... line in this projects package.json file to:

"react-select": "file:lib/react-select/packages/react-select/react-select-3.2.0.tgz"

Once this change has been made, run npm install.

To switch back to the live version we are using, the "react-select" line should be replaced with:

"react-select": "^2.4.2"

Remember to re-run npm install.

If you make changes to the react-select code (in the lib folder), you need to run:

`npm run build` from the `lib/react-select` folder
followed by `npm pack` from the `lib/react-select/packages/react-select` folder

The above will create a new tar file that can be used by this app.

## Starting

To start the app run `npm run start`
