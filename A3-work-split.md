# A3 Spotify Browser: Work Split

- **Due**: Wed 11/11
- **Group sign-up**: by Mon 11/2, Canvas → People → "A3 Pairs". Both of us join **pair 5**.

## 1. Who does what

| | Kazuha | Wanke |
|---|---|---|
| service | `spotify.service.ts` (Part 1, every API function) | — |
| components | `thermometer` | `about`, `search`, `carousel`, `carousel-card`, `track-list` |
| pages | `track-page`, `album-page`, `artist-page` | — |
| Points covered | Part 1 (1) + Parts 3/4/5 (5) | Part 2 home page (4) |

Only edit `.component.html` / `.component.ts` / `.service.ts`. Don't touch `.css`, `.spec.ts`, or anything in `data/`.

**Why this split**

- Everything depends on the service, so one person finishes it on day one.
- Only the three pages use the thermometer, so it goes with the pages and the Track page doesn't have to wait on anyone.
- We never edit the same file, so git conflicts should be rare.

## 2. Order and schedule

| When | Kazuha | Wanke |
|---|---|---|
| 11/1–11/2 | **Finish and push the whole service**, then the thermometer | Download `dummy_webserver` from Canvas, `npm install`, get client and server running, sign up for the group |
| 11/3–11/4 | Track page (needs only the thermometer) | `about`, then **`track-list` (first priority, the Album page needs it)** |
| 11/5–11/6 | Album page (needs track-list) | `carousel` + `carousel-card` (the Artist page needs them) |
| 11/7–11/8 | Artist page (needs carousel and track-list) | `search` |
| 11/8–11/9 | Test every page and link together against the demo video, fix bugs | Same |
| 11/10 | Fill in the readme, delete `node_modules`, zip and submit | Fill in the work-distribution survey |

Push each component as soon as it's done and message the other person, so they can pull and keep going.

## 3. Interfaces (write to these and the two halves fit together)

### Service (Kazuha)

Use the endpoints in `dummy_webserver/routes/index.js`. Encode parameters with `encodeURIComponent()`.

| Function | Endpoint | Returns |
|---|---|---|
| `aboutMe()` | `/me` | `ProfileData` (already written) |
| `searchFor(category, resource)` | `/search/:category/:resource` | `ArtistData[]` / `AlbumData[]` / `TrackData[]` |
| `getArtist(id)` | `/artist/:id` | `ArtistData` |
| `getTopTracksForArtist(id)` | `/artist-top-tracks/:id` | `TrackData[]` |
| `getAlbumsForArtist(id)` | `/artist-albums/:id` | `AlbumData[]` |
| `getAlbum(id)` | `/album/:id` | `AlbumData` |
| `getTracksForAlbum(id)` | `/album-tracks/:id` | `TrackData[]` |
| `getTrack(id)` | `/track/:id` | `TrackData` |

### Components (Wanke writes them, Kazuha uses them in the pages like this)

```html
<app-thermometer [popularity]="artist.popularity"></app-thermometer>
<app-carousel carouselId="artist-albums" [resources]="albums"></app-carousel>
<app-track-list [tracks]="tracks" [hideArtist]="true" [hideAlbum]="true"></app-track-list>
```

- `thermometer`: `@Input() popularity: Popularity`. Background color from `popularity.color`, width and label from `popularity.percentageString`.
- `carousel-card`: link to `/artist/:id` or `/album/:id` based on `resource.category` (routes are in `app-routing.module.ts`).
- `track-list`: each row shows the index, track name (links to `/track/:id`), duration (`durationStr`), primary artist (links to `/artist/:id`), and album (links to `/album/:id`).

### Link rule

Each page has exactly one button linking out to Spotify.com (text "Open … on Spotify", using the `url` field). Every other link uses `routerLink` and stays inside the app.

## 4. Git

- One repo only (the one created through GitHub Classroom). The other person joins as a team member or collaborator.
- Before pushing, check that `git config user.email` is your own email.
- **Always `git pull` before you start working.** Commit and push after each file; don't let changes pile up.
- Only edit your own files. Ask first before changing the other person's.

## 5. Submission checklist

- [ ] readme: both names, UCI emails, student IDs, **group number**, hours spent, resources used, self-assessed points
- [ ] Delete `node_modules` from `client/` and `webserver/`
- [ ] Delete this file before zipping
- [ ] One person zips and submits on Canvas
- [ ] **Each of us** fills in the work-distribution survey
