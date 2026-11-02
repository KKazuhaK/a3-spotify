# A3 Status and Open Issues

Last updated: 11/2

## Done

| Part | Files | Status |
|---|---|---|
| Part 1: service | `spotify.service.ts` | Done. All 8 endpoints checked against `dummy_webserver`. |
| Thermometer | `thermometer` | Done. |
| Part 3/4/5: pages | `artist-page`, `album-page`, `track-page` | Done. Verified in the browser with real data. |
| About | `about` | Works. |

## Blocking: the project does not compile

`search.component.ts` line 28:

```
error TS2339: Property 'search' does not exist on type 'SpotifyService'.
```

Until this is fixed, `ng serve` shows an error and no page loads.

## Issues in the components

Field names below come from the classes in `client/src/app/data/`. Check there when unsure what a field is called.

### 1. `search.component.ts`: wrong service call (blocks compiling)

The service function is `searchFor(category, resource)`. It takes the category first and returns a Promise, so use `.then`, not `.subscribe`.

```ts
// now
this.spotifyService.search(this.searchString, this.searchCategory).subscribe((data: any) => {
// fix
this.spotifyService.searchFor(this.searchCategory, this.searchString).then((data) => {
```

### 2. `search.component.html`: track results never show

The component has no `tracks` variable; search results are stored in `resources`.

```html
<!-- now -->
<app-track-list [tracks]="tracks"></app-track-list>
<!-- fix -->
<app-track-list [tracks]="resources"></app-track-list>
```

### 3. `track-list.component.html`: wrong field names

`TrackData` has no `duration` or `primaryArtist`. Accessing `track.primaryArtist.url` throws an error, so the table stops rendering after the first track name. You can see this on the Artist page's Top Tracks.

| Now | Fix |
|---|---|
| `track.duration` | `track.durationStr` |
| `track.primaryArtist` | `track.artists[0]` |

### 4. `track-list.component.html`: links should stay inside the app

The assignment says only the "Open … on Spotify" buttons go to Spotify.com. Every other link routes inside the app (see `app-routing.module.ts`). Use `routerLink` and drop `target="_blank"`.

```html
<a routerLink="/track/{{track.id}}">{{track.name}}</a>
<a routerLink="/artist/{{track.artists[0].id}}">{{track.artists[0].name}}</a>
<a routerLink="/album/{{track.album.id}}">{{track.album.name}}</a>
```

### 5. `carousel-card.component.html`: same link issue

The card should open the artist or album page in the app, not Spotify. `resource.category` is `'artist'` or `'album'`, which matches the route names:

```html
<a routerLink="/{{resource.category}}/{{resource.id}}">
```

### 6. `about.component.ts`: extra braces (cosmetic)

`aboutMe()` has an extra `{ }` wrapped around its body. It compiles fine, but it's worth removing.

## How to test

1. `cd dummy_webserver && npm start`
2. `cd client && npx ng serve`
3. Open http://localhost:4200, then check:
   - "Load info about me" shows CS Student
   - Searching artist / album shows a carousel, and clicking a card opens the artist or album page
   - Searching track shows the table, and the track, artist and album links open pages inside the app
   - Artist page Top Tracks shows all rows, with duration, artist and album filled in
     (e.g. http://localhost:4200/artist/06HL4z0CvFAxyc27GXpf02)

## Editor tip

If VS Code underlines `@Input()` fields with "has no initializer", it's using its bundled TypeScript 6 (which turns `strict` on by default). Run **Cmd+Shift+P → TypeScript: Select TypeScript Version → Use Workspace Version** (5.7.3) to match `ng build`.

## Before submitting

Delete this file and `A3-work-split.md` before zipping.
