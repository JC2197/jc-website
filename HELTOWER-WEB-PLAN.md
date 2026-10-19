# Hosting Heltower on this website

## Goal

Host a playable browser build of Heltower directly on this website.
First get the game working at its own URL; consider embedding and styling only
after that milestone is verified.

## Current context

- The site uses React and Vite.
- Vite's deployment base is `/jc-website/`.
- The existing deployment script uses `gh-pages`; confirm the live GitHub Pages
  configuration before publishing.
- The [Projects component](src/components/LandingPage/Projects.jsx) currently
  links to Heltower on itch.io. Keep that link available until the hosted game
  works.
- This plan assumes Heltower is a Unity project. Confirm the engine, Unity
  version, and Web build support before applying Unity-specific steps.

## Implementation steps

### 1. Prepare a browser build

- Confirm the game's Unity version and install the matching Web build support
  module if needed.
- Check browser compatibility of input, plugins, graphics, and save behavior.
- Export a Web build with Unity's generated player page and supporting files.
- Choose compression settings compatible with the actual host. GitHub Pages
  does not offer arbitrary response-header configuration; evaluate Unity's
  Decompression Fallback or disabled compression rather than assuming compressed
  files will be served with the required `Content-Encoding` headers.
- Check whether the build requires cross-origin isolation, especially if using
  threads. Do not assume GitHub Pages can provide the necessary headers.
- Test the export through a local HTTP server, not by opening a `file:` URL.

### 2. Add the build as static assets

- Place the exported player page and its supporting folders under
  `public/games/heltower/`, preserving their relative paths.
- Vite copies public assets into the deployment output without processing them
  as React source.
- Check build size against current repository and hosting limits before adding
  large artifacts.
- Verify that the build's asset requests work beneath
  `/jc-website/games/heltower/`, not just at the domain root.

### 3. Add a project link

- Link from the Projects component to the exported player page.
- Construct the local game URL using `import.meta.env.BASE_URL`, for example:
  `${import.meta.env.BASE_URL}games/heltower/index.html`.
- Initially navigate to the standalone player instead of embedding it.
- Retain the itch.io link as an alternative while validating the new hosting.

### 4. Validate and deploy

- Run the existing production build and serve its output with Vite preview.
- Verify that the game loads, accepts input, and remains playable.
- Check browser console and network requests for missing files, incorrect MIME
  types, compression errors, or base-path problems.
- Deploy using the existing publishing workflow once local validation passes.
- Repeat the checks against the live GitHub Pages URL, including direct
  navigation and refresh on the game page.
- Check loading time and test at least the browsers/devices intended for support.

### 5. Optional embedding and polish

- Once the standalone player works, consider an iframe inside a React game page.
- Address responsive sizing, keyboard focus, fullscreen permissions, and a
  clear way to return to the site.
- Avoid unnecessary simultaneous rendering of background particles while the
  game is running if it harms performance.

## First milestone acceptance criteria

- Heltower is playable at its own URL on this website.
- The Projects link opens that URL correctly under `/jc-website/`.
- Direct navigation and refresh work on the deployed game page.
- Required game assets load without blocking console or network errors.
- Compression and any required browser security headers are compatible with
  the live host.

## Scope for now

Planning only. No Unity export, game assets, React changes, or deployment are
included in this step. Continue implementation incrementally, explaining each
step before adding the next.
