# Nur Mohammed Rajin — portfolio

A responsive, dependency-free static portfolio for GitHub Pages. The current design uses local assets and system fonts; it makes no third-party font, icon, analytics, or data requests.

## Develop

Use the existing checkout. Serve from its root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

`index.html` contains the content, `styles/styles.scss` is the stylesheet source, and `app.js` adds the current year, active navigation, and optional project filtering. Navigation and project content work with JavaScript disabled. Email is revealed on request with JavaScript; LinkedIn remains available without it.

Compile styles with the cloud environment's pinned Sass:

```sh
/workspace/.portfolio-tools/node_modules/.bin/sass styles/styles.scss styles/styles.css --no-source-map
```

For another machine, install Dart Sass 1.93.2 using your preferred package manager. Commit both SCSS and compiled CSS after style changes. No application build is needed for GitHub Pages.

## Validate

- Run `node --check app.js` and compile Sass.
- Check desktop, tablet, and narrow mobile layouts; confirm no horizontal overflow.
- Test navigation with and without JavaScript, keyboard focus, and reduced motion.
- Check each project filter: All work (8), Commerce & web (3), Enterprise (2), IoT & data (3). Confirm the count and pressed button update together.
- Open technical details by mouse and keyboard; all eight projects and disclosures must remain usable without JavaScript.
- Confirm the initial HTML and script contain no plaintext email address or mailto target. Activate Reveal email address by keyboard; verify the link is populated and focused, and contact alternatives remain available without JavaScript.
- Confirm local resources load, and social links point to the intended destinations.

## Content

See [the content audit](docs/content-sources.md) for the public sources, repository classification, and professional project evidence. Academic projects are no longer featured. The work section features eight repository-backed projects, category filters, expandable technical details, and five related dashboards/prototypes. The source repositories are private; public summaries contain no operational data or source links.

## Résumé

The About section links to [the current PDF](resume/Resume%20of%20Nur%20Mohammed%20Rajin.pdf). Its existing URL is preserved. An [editable Word copy](resume/Nur_Mohammed_Rajin_Resume.docx) is included; see [résumé notes](resume/README.md) for updating and validation.
