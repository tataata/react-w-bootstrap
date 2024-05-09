# What is inside 

This is the dummy project setup: React on Vite, Bootstrap w/ sass.

The goal: demonstrate the folder structure.


## How tos of the setup

1. Setup the React project w/ Vite in the same folder: `npm create vite@latest ./`

2. Add Bootstrap to the project `npm install bootstrap`

### If want to use Bootstrap w/o overriding it w/ `sass`

3. add a link in the `main.jsx` file to the whole library: `import 'bootstrap/dist/css/bootstrap.css'`; This link must appear before any own css styling.

### If want to edit Bootstrap styles w/ overriding it w/ `sass`:

3. Install `sass` in version 1.64.2: `npm install sass@1.64.2`

4. Create a folder and a file for styles with sass in `src` folder of the project: `./src/styles/styles.scss`

5. In `styles.scss` file import the Bootstrap:
```
@import "bootstrap/scss/bootstrap.scss";
``` 
Check documentation for extended instructions: (https://getbootstrap.com/docs/5.3/getting-started/vite/#import-bootstrap)[https://getbootstrap.com/docs/5.3/getting-started/vite/#import-bootstrap]

6. Import the style file in `main.jsx`: `import "./styles/styles.scss"`

No extra watch processes is needed for `.scss` files.