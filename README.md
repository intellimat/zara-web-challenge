# Zara web challenge

React app that shows Marvel characters.

## Requirements

- node.js >= 22.14
- npm >= 10.9.2

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

const isProduction = process.env.NODE_ENV === "production";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), isProduction && ViteImageOptimizer()].filter(Boolean),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});

```

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
├── index.css
├── main.tsx
├── pages
│   ├── Character
│   │   ├── character.module.css
│   │   └── Character.tsx
│   ├── FavouriteCharacter
│   │   ├── favouriteCharacter.module.css
│   │   └── FavouriteCharacter.tsx
│   └── Home
│       ├── home.module.css
│       └── Home.tsx
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
│   │   └── characters.json
│   └── utils
│       ├── TestQueryClientProvider.tsx
│       └── TestRouter.tsx
├── types
│   ├── CharacterComic.ts
│   └── Character.ts
├── utils
│   └── imgUrlBuilder.ts
└── vite-env.d.ts
```

### Routing

React Router was used to manage the SPA routing.

There are three pages:

- /
- /character/:id
- /favouriteCharacters

Check routing folder to see the details.

### Services (API)

Tanstack Query (former React Query) was used to manage data fetching and caching. Two services are executed at the current state of the project:

- getAllCharacters()
- getCharacterComics()

Custom hooks were implemented to separate concerns between components and services, check Custom Hooks section.

### Custom Hooks

- useCharacterComics.ts => retrieve the character comics (limit by 20)
- useCharacters.ts => retrieve the characters (limit by 50) and take _select_ parameter to process the API reponse

As you can see in Character.tsx, the _characterSelector_ function is passed to _useCharacters_ hook as the select function so that we can filter by characterId and display the current character. In Home.tsx the select function is _filterByQuery_ instead, so that we can reactively display the characters based on what the user types into the search bar The useCallback React hook has been used to avoid unnecessary re-rendering of the above functions.

## More on data and State Management

Tanstack Query helps us cache results from the Marvel API so we don't have to make repeated calls. You can see in _query-client.ts_ that we are caching the data from the API in local storage for 24 hours.

Zustand helps manage global state by synchronizing state changes across all the UI components. The structure of the store is quite simple:

```
type Store = {
  query: string;
  setQuery: (query: string) => void;
  favouriteCharacters: Character[];
  addFavouriteCharacter: (newCharacter: Character) => void;
  removeFavouriteCharacter: (characterId: number) => void;
}
```

Check _useStore.ts_ to see the store implementation.

Side note: the store is saved into local storage, so that if you close and open the browser you still see the favourite characters.

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

## Why did I convert a list into a _Set_ in **Home.tsx**?

When rendering every character card, we need to check whether the character is a favourite or not. Without using a _Set_, the lookup time for each card would be O(n).
Since a _Set_ is implemented with a hash table, the lookup time is on average O(1). So by using a Set we improve the overall performance.

- O(n) to render each character card
- O(1) to check if a character is a favourite
