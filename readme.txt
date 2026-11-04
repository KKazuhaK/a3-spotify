--Readme document for Kazuha Mo, kazuhak@uci.edu, 32722706 and Wanke Hou, wankeh@uci.edu, 56389780--
A3 Pairs group number: 5 (A3 Pair 5)

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Communicating with the webserver
- 1/1 Populating information about the user
- 3/3 Populating the search component
- 3/3 Artist page
- 1.5/1.5 Album page
- 0.5/0.5 Track page


2. How long, in hours, did it take you to complete this assignment?

In total about 7 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)

- Assignment page and starter code: https://github.com/travislindenreid/a3-spotify
- Spotify Web API reference, to check the JSON returned by each endpoint:
  https://developer.spotify.com/documentation/web-api/reference/
- Bootstrap carousel and progress bar:
  https://getbootstrap.com/docs/5.3/components/carousel/
  https://getbootstrap.com/docs/5.3/components/progress/
- Angular docs for @if/@for, routerLink, ngModel and HttpClient:
  https://angular.dev/guide/templates/control-flow
  https://angular.dev/api/router/RouterLink
  https://angular.dev/api/forms/NgModel
  https://angular.dev/guide/http
- MDN for encodeURIComponent, Array.map and Promise.then:
  https://developer.mozilla.org/
- Generative AI tools: we used them to help worksplit and debugging.


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

No classmates outside our pair. The two of us discussed how to split the work
(Kazuha: the Spotify service, thermometer and the artist/album/track pages;
Wanke: about, search, carousel, carousel-card and track-list), agreed on the
inputs between components, and reviewed and fixed each other's bugs.


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?

No bonus features were added.


6. Is there anything special we need to know in order to run your code?

The app uses the dummy webserver from Canvas, which is not included in the
submission. Put the dummy_webserver folder in the repository root, then:

    cd dummy_webserver && npm install && npm start
    cd client && npm install && ng serve

and open http://localhost:4200. Searching, then switching the dropdown to a
different category without pressing Search again can log an error in the
console; pressing Search fixes it (the assignment lists this as optional).

