# getting started with Planner app

This is a simple To-Do List app built using ReactJS and TypeScript.
The app allows you to add, edit, and delete tasks.
The app also uses local storage to persist data between browser sessions.

## Prerequisites

    Node.js (version 10.0.0 or later)
    npm (version 6.0.0 or later)

## Installing

    Clone the repository
    Install dependencies using npm:

### `npm install`

## Running the App

To start the app, run the following command in the project directory:

### `npm start`

This will start the app in development mode. You can view the app in the browser at http://localhost:3000.

## Building the App

To build the app, run the following command in the project directory:

### `npm run build`

This will create a production build of the app in the build directory.

## Testing the App

To test the app, run the following command in the project directory:

### `npm test`

However, prior to a Jest configuration patch - commit 'chore: Fix Jest configurations.', run the following command in the project directory:

### `node node_modules/react-scripts/scripts/test.js`

## App Structure

The app is organized into the following directories:

    src/components - React components
    src/hooks - React Hooks
    src/types - TypeScript types/interfaces
    src/utils - Utility functions