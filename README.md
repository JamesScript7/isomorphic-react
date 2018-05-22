# Isomorphic React

Skills: React, Express, and Node.

An exploration into isomorphism for faster load times and
SEO. (Server Side Rendering and Client Side Mounting.)

Home route:

Uses EJS to render the entire html string into the framework.

About route:

Uses response.send to skip over EJS render and sends result
of .renderToString().

Contact route:

Uses EJS to render but with partials so you can create components that follow more closely to Reacts modularity.

To get started:

`npm i`

and then

`node server.js`
