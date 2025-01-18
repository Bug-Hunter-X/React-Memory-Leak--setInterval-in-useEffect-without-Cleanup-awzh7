# React Memory Leak: setInterval in useEffect without Cleanup

This repository demonstrates a common React memory leak caused by the improper use of `setInterval` within the `useEffect` hook. The provided `bug.js` file showcases the faulty code that creates this leak, while `bugSolution.js` offers a corrected version that addresses the issue.

## Problem

When using `setInterval` within a React component, it's crucial to clear the interval when the component unmounts to prevent memory leaks.  Failing to do so results in the interval continuing to run even after the component has been removed from the DOM, leading to an increase in resource consumption and potential performance issues. 

## Solution

The solution involves using the cleanup function provided by the `useEffect` hook's return statement. This function is executed when the component unmounts or when the dependencies array changes.  Within the cleanup function, `clearInterval` is called with the interval ID to stop the interval.

## How to Run

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies (if necessary).
4. Run `npm start` to start the development server (if necessary).
5. Observe the memory usage in your browser's developer tools.