# 🎬 React Native Movies App

![React Native](https://img.shields.io/badge/React%20Native-0.74-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

A React Native app that explores The Movie Database (TMDB) catalog with **now playing**, **popular**, **top rated**, and **upcoming** movie lists. Includes **detail screen**, **cast**, **infinite horizontal carousels**, and **clean architecture** (core/infrastructure/presentation).

## 🎥 Demo Video

👉 **[Watch the Demo](https://your-video-link.com)**

## 📸 Screenshots

<p align="center">
  <!-- Replace with your actual paths -->
  <img src="./public/screen1.jpg" alt="Home - Carousels" width="250"/>
  <img src="./public/screen2.jpg" alt="Details - Header" width="250"/>
  <img src="./public/screen3.jpg" alt="Details - Cast" width="250"/>
</p>

## 🛠️ Tech Stack

- ⚛️ **React Native (CLI)** – iOS/Android cross-platform
- 🟦 **TypeScript** – static typing and better DX
- 🧭 **React Navigation (Stack)** – screen transitions
- 🧩 **Clean-ish architecture** – `core` (entities/use cases), `infrastructure` (adapters/mappers), `presentation` (UI)
- 🔗 **Axios** via a **custom HttpAdapter**
- 🪝 **Custom Hooks** – `useMovies`, `useMovie`
- 🎛️ **Theming/Styling** – RN styles
- 🎞️ **TMDB API** – data source

## 🔐 Environment Variables (TMDB)

This project reads the API key from `@env`.

1. Install dotenv support (if not installed yet):

```bash
yarn add react-native-dotenv
```

2. Create a .env file in the project root:

```
   THE_MOVIE_DB_KEY=YOUR_TMDB_API_KEY
```

3. Ensure your Babel config includes the plugin (usually in babel.config.js):

```
plugins: [
  ["module:react-native-dotenv", { "moduleName": "@env", "path": ".env" }]
]
```

4. The key is consumed in movieDB.adapter.ts:

```
  import { THE_MOVIE_DB_KEY } from '@env';
```

By default the adapter requests Spanish content (language: 'es'). Change it if needed.

## 📂 Project Structure

```
src
├─ App.tsx
├─ config
│  ├─ adapers
│  │  ├─ http
│  │  │  ├─ axios.adapter.ts
│  │  │  └─ http.adapter.ts
│  │  └─ movieDB.adapter.ts
│  └─ helpers
│     └─ formatter.ts
├─ core
│  ├─ entities
│  │  ├─ cast.entity.ts
│  │  └─ movie.entity.ts
│  └─ use-cases
│     ├─ index.ts
│     ├─ movie
│     │  ├─ get-by-id.use-case.ts
│     │  └─ get-cast.use-case.ts
│     └─ movies
│        ├─ now-playing.use-case.ts
│        ├─ popular.use-case.ts
│        ├─ top-rated.use-case.ts
│        └─ upcoming.use-case.ts
├─ infrastructure
│  ├─ interfaces
│  │  └─ movie-db.responses.ts
│  └─ mappers
│     ├─ cast.mapper.ts
│     └─ movie.mapper.ts
└─ presentation
   ├─ navigation
   │  └─ Navigation.tsx
   ├─ hooks
   │  ├─ useMovie.tsx
   │  └─ useMovies.tsx
   ├─ components
   │  ├─ cast
   │  │  └─ CastActor.tsx
   │  ├─ loaders
   │  │  └─ FullScreenLoader.tsx
   │  ├─ movie
   │  │  ├─ MovieDetails.tsx
   │  │  └─ MovieHeader.tsx
   │  └─ movies
   │     ├─ HorizontalCarousel.tsx
   │     ├─ MoviePoster.tsx
   │     └─ PosterCarousel.tsx
   └─ screens
      ├─ home
      │  └─ HomeScreen.tsx
      └─ details
         └─ DetailsScreen.tsx

```

## 🚀 Installation & Run

1. Clone the repository:

```
git clone https://github.com/your-username/react-native-movies-app.git
cd react-native-movies-app

```

2. Install dependencies:

```
yarn install
# or
npm install
```

3. Set environment variables

```
cp .env.example .env   # if you provide one
# Then edit THE_MOVIE_DB_KEY in .env

```

4. Run on Android:

```
npx react-native run-android
```

5. Run on iOS (Mac + Xcode)

```
npx pod-install ios
npx react-native run-ios
```

## ✨ Features

- Home screen with multiple horizontal carousels: Now Playing, Popular (with infinite paging), Top Rated, Upcoming

- Movie details: rating, genres, overview, budget (formatted), hero header with poster/backdrop

- Cast list: horizontal list of actors with avatar and role

- Infinite scroll on Popular via popularNextPage and scroll detection

- Typed domain models (Movie, FullMovie, Cast) and response mappers

- Error handling and adapter abstraction for HTTP

## 🧠 Key Learnings

- Separation of concerns with Core / Infrastructure / Presentation

- Designing use cases to keep UI lean and testable

- Building HttpAdapter to swap transport/client without changing domain logic

- Creating custom hooks (useMovies, useMovie) for data loading and composition

- Implementing carousels & navigation patterns in RN apps

## 🔗 Useful Links

- 📹 Demo: https://your-video-link.com

- 💻 Repository: https://github.com/your-username/react-native-movies-app

- 🎬 TMDB: https://www.themoviedb.org/
  (remember to get your API key)

## 👨‍💻 Author

Guillermo Ignacio Varela Barros

- LinkedIn
- GitHub

## 📝 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project.
