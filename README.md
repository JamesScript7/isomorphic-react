# Isomorphic React

Skills: React, Express, and Node.

An exploration into isomorphism for faster load times and
SEO. (Server Side Rendering and Client Side Rendering/Mounting.)

Home route (with EJS):

Entire component (html string) is injected into the EJS framework.

About route (without EJS):

Uses response.send to skip over EJS render and sends the
string html from .renderToString() method.

Contact route (with EJS, partials):

Uses EJS partials and injects a React component that follow
more closely to Reacts modularity.

To get started:

```
npm i
```

then checkout to server-routing branch

```
git checkout server-routing
```

then start it!

```
node server.js
```
