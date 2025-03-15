
# Zara web challenge

React app that shows Marvel characters.



## Requirements
- node.js ^22.14

## Installation
Clone the repo

`git clone https://github.com/intellimat/zara-web-challenge.git`

Go to _zara-web-challenge_ folder 

`cd zara-web-challenge`

and run

`npm install`
## Configure API keys in _.env_
You need your personal Marvel API keys to run the project. 
You can get them from _https://developer.marvel.com_

In your _.env_ file set your private key, public key and timestamp

`VITE_MARVEL_API_PRIVATE_KEY`

`VITE_MARVEL_API_PUBLIC_KEY`

`VITE_MARVEL_API_TIMESTAMP`

## Run the project
In __develop__ mode

`npm run dev`

In __production__ mode

`npm run build`

`npm run preview`
## Test
The app has been tested using _vitest_ and _React Testing Library_.

You can run the test by entering:

`npm test`
## Tech stack
- vite
- react 19
- react-router
- tanstack query (former react query)
- zustand
## Data and State Management
Tanstack Query helps us cache results from the Marvel API so that we don't make repetitive calls.

Zustand helps manage global state by synchronizing state changes across all the UI components.
