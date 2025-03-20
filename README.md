# Zara web challenge

React app that shows Marvel characters.

## Requirements

- node.js >= 22.14
- npm >= 10.9.2
- latest Google Chrome Browser

## Installation

Clone the repo

`git clone https://github.com/intellimat/zara-web-challenge.git`

Go to _zara-web-challenge_ folder

`cd zara-web-challenge`

and run

`npm install`

## Configure API keys in _.env_

You need your personal Marvel API keys to run the project.
You can get them from [Marvel Developer Portal](https://developer.marvel.com)
Also, make sure _localhost_ is listed in the allowed domains to make calls to the Marvel API in your Marvel account.

In your _.env_ file set your private key, public key and timestamp

```
VITE_MARVEL_API_PRIVATE_KEY=your_private_key
VITE_MARVEL_API_PUBLIC_KEY=your_public_key
VITE_MARVEL_API_TIMESTAMP=your_statically_generated_timestamp
```

## Run the project

In **develop** mode

`npm run dev`

In **production** mode

`npm run build`

`npm run preview`

Images are optimized during the _build_ process with [vite-plugin-image-optimizer](https://www.npmjs.com/package/vite-plugin-image-optimizer) only on the production environment. Down below you can check the plugin configuration (default).

_vite.config.ts_

```
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";

const isProduction = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), isProduction && ViteImageOptimizer()].filter(
    Boolean
  ),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});


```

## Test

The app has been tested using _vitest_ and _React Testing Library_.

You can run the tests by entering:

`npm test`

You can run the test coverage by entering:

`npm run coverage`

Current implemented tests:

✓ src/test/character.test.tsx (3 tests)  
✓ Character > should show the character banner  
✓ Character > should show character comics  
✓ Character > should show as many comic cards as the comics returned from the mocked getCharacterComics function  
✓ src/test/home.test.tsx (6 tests)  
✓ Home page > should show the navbar  
✓ Home page > should render a list of characters  
✓ Home page > should filter by query text on searchbar  
✓ Home page > should increase the number of favourites when clicking on a card heart  
✓ Home page > should show character page when clicking on a character thumbnail  
✓ Home page > should show favourite characters when clicking on the heart button in the navbar  

## Tech stack

- vite
- react 19
- react-router
- tanstack query (former react query)
- zustand
- vitest
- React Testing Library

## Project structure

```

├── App.css
├── App.tsx
├── components
│   ├── Banner
│   │   ├── banner.module.css
│   │   └── Banner.tsx
│   ├── CharacterCard
│   │   ├── characterCard.module.css
│   │   └── CharacterCard.tsx
│   ├── ComicCard
│   │   ├── comicCard.module.css
│   │   └── ComicCard.tsx
│   ├── HeartButton
│   │   ├── heartButton.module.css
│   │   └── HeartButton.tsx
│   ├── Navbar
│   │   ├── navbar.module.css
│   │   └── Navbar.tsx
│   ├── ProgressBar
│   │   ├── progressBar.module.css
│   │   └── ProgressBar.tsx
│   ├── Searchbar
│   │   ├── searchbar.module.css
│   │   └── Searchbar.tsx
│   └── Slider
│       ├── slider.module.css
│       └── Slider.tsx
├── customHooks
│   ├── useCharacterComics.ts
│   └── useCharacters.ts
├── icons
│   ├── empty_heart.svg
│   ├── full_heart.svg
│   └── lens.svg
├── index.css
├── main.tsx
├── pages
│   ├── Character
│   │   ├── character.module.css
│   │   └── Character.tsx
│   └── Home
│       ├── home.module.css
│       ├── Home.tsx
│       └── homeViewEnum.ts
├── query-client.ts
├── routing
│   ├── RootLayout.tsx
│   └── RoutesWrapper.tsx
├── services
│   ├── characterService.ts
│   ├── endpoints.ts
│   ├── types.ts
│   └── utils
│       ├── auth.ts
│       ├── buildUrlWithAuth.ts
│       ├── generateMarvelAPIhash.ts
│       └── http.ts
├── store
│   └── useStore.ts
├── test
│   ├── character.test.tsx
│   ├── home.test.tsx
│   ├── mock
│   │   ├── characterComics.json
│   │   └── characters.json
│   └── utils
│       ├── TestQueryClientProvider.tsx
│       └── TestRouter.tsx
├── tree.txt
├── types
│   ├── CharacterComic.ts
│   └── Character.ts
├── utils
│   ├── imgUrlBuilder.ts
│   └── sortComics.ts
└── vite-env.d.ts

```

### Routing

React Router was used to manage the SPA routing.

There are two pages:

- /
- /character/:id

Check routing folder to see the details.

### Services (API)

Tanstack Query (former React Query) was used to manage data fetching and caching. Two services are executed at the current state of the project:

- getAllCharacters()
- getCharacterComics()

Custom hooks were implemented to separate concerns between components and services, check Custom Hooks section.

### Custom Hooks
- useCharacters.ts => retrieve the characters (limit by 50)
- useCharacterComics.ts => retrieve the character comics (limit by 20)

Notice useCharacter() takes _select_ parameter to process the API reponse

As you can see in Character.tsx, the _characterSelector_ function is passed to _useCharacters_ hook as the select function so that we can filter by characterId and display the current character. In Home.tsx the select function is _filterByQuery_ instead, so that we can reactively display the characters based on what the user types into the search bar The useCallback React hook has been used to avoid unnecessary re-rendering of the above functions.

## More on data and State Management

Tanstack Query helps us cache results from the Marvel API so we don't have to make repeated calls. You can see in _query-client.ts_ that we are caching the data from the API in local storage for 24 hours.

Zustand helps manage global state by synchronizing state changes across all the UI components. The structure of the store is quite simple:

```
type Store = {
  query: string;
  setQuery: (query: string) => void;
  favouriteCharactersIds: number[];
  addFavouriteCharacterId: (characterId: number) => void;
  removeFavouriteCharacterId: (characterId: number) => void;
}
```

Check _useStore.ts_ to see the store implementation.

Note: the store is saved into local storage, so that if you close and open the browser you still see the favourite characters.

## Components

Pure components (do not handle any logic, they just display information):

- Banner
- Slider
- Searchbar
- Progressbar
- HeartButton
- ComicCard

Other components have a little bit of logic to simplify functionality implementation:

- CharacterCard
- Navbar

## Styling

Not much emphasis has been put on styling and maintaining a clean styling pattern due to the limited implementation time.

No design system is implemented.

CSS Modules were used to scope the style to just one component and avoid unexpected results.
