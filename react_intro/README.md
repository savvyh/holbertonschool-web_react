## Resources

**Read or watch**:

*   [React Official Website](/rltoken/ng1aulL-v_eM2SrXqdt5Ew "React Official Website")
*   [Getting started with React](/rltoken/vf5E63P5_eWDdH4RoJ_EGA "Getting started with React")
*   [React overview](/rltoken/0BH1LeFWPgxgUM_rHr2ZHw "React overview")
*   [Vite | docs](/rltoken/Es91l_LZph3CPGKUkyLg6w "Vite | docs")
*   [React Developer Tools](/rltoken/UBA8wF56BAJ_Iq62pEcnRw "React Developer Tools")
*   [React Testing Library](/rltoken/uLz30N2zhKRkf1RgJgbUlQ "React Testing Library")
*   [Jest Matchers](/rltoken/jGaoSGNpAeMFkhJZbrQBWw "Jest Matchers")
*   [Queries In Testing Library](/rltoken/EHot1FV9AFUA3cI62RDljQ "Queries In Testing Library")
*   [mocking functions in testing](/rltoken/bRUWA6nIqTLmrnmXtjPFEQ "mocking functions in testing")
*   [Handling user events in RTL](/rltoken/cKIZtsDOpBol0RXZOavIPQ "Handling user events in RTL")
*   [dangerouslySetInnerHTML in React](/rltoken/g9giDQBlw2Y4Fjy2zY2JyA "dangerouslySetInnerHTML in React")
*   [Deploying React App to github pages](/rltoken/qXtYAbO36vfL8BsFGtEI1Q "Deploying React App to github pages")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/eQsQZtRGiSEdtfMHUjg-1A "explain to anyone"), **without the help of Google**:

*   How to create a basic Javascript application with React
*   How to use the build tool `vite` to start developing quickly with React
*   What JSX is and how it works.
*   How to add inline styles in React.
*   How to implement simple forms in React.
*   How to implement unit tests using React Testing Library
*   How to use the React Developer Tools to debug your code
*   How to deploy a react application to GitHub pages.

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` or greater and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

**Create a basic app named `dashboard` using the build tool `vite` in your `task_0` directory**

You will need a **_favicon_**, the **_Holberton logo_**, and a **_close button image_**. Download these files and place the logo and button images in the `src/assets` folder, and put the favicon in the `public` folder.

**holberton-logo.jpg**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f2b083bc7c9e27b3163a038112f1b7f4b5b43deada92ce353161d5329ecef96c)

**favicon.ico**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2019/11/e240f8157634d33a9757.ico?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cbce57e9e6440c39d029f6c4f9cf1e4b6522737cabfde6cbf70e9727a4016fa0)

**close-button.png**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/2d96723b038e2e92001b59f72c0418a8595802aa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=30133060837671e29699c77ad8c6adaf90928dbf5df38d8763791d97186823c1)

**Remove the following unused files:**

*   `index.css`
*   `public/vite.svg` and `src/assets/react.svg`

**Update index.html file:**

*   Change the title of the document to be `Holberton - School dashboard`
*   Change the icon to be Holberton’s logo

Set up the following files in the project root folder:

*   `setupTests.js`:
    
    **Click to expand/hide:**
    import '@testing-library/jest-dom';
    
*   `.babelrc` file:
    
    **Click to expand/hide:**
    {
        "presets": [
            "@babel/preset-env",
            ["@babel/preset-react", { "runtime": "automatic" }]
        ]
    }
    
*   `fileTransformer.js` file:
    
    **Click to expand/hide:**
    `import path from 'path';`
    
    ``export default {     process(sourceText, sourcePath, options) {         return {             code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,         };     }, };``
    
*   Configure Jest at the end of your `package.json`:
    
    **Click to expand/hide:**
    "jest": {
        "testEnvironment": "jsdom",
        "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": [
      "./setupTests.js"
    ]
    }
    
*   Make sure to install the following packages:
    
    *   `@babel/preset-env`
    *   `@babel/preset-react`
    *   `identity-obj-proxy`
    *   `@testing-library/jest-dom`
    *   `@testing-library/react`
    *   `jest-environment-jsdom`
    *   `@testing-library/user-event`

**in `task_0/dashboard/src/App.jsx`, create a function `App` that returns:**

*   A `div` with a class `App-header` containing the Holberton logo with `alt` text: `holberton logo`, and a `h1` with the text `School dashboard` (color: `#e1003c`)
*   A `div` with a class `App-body` containing a paragraph with the text `Login to access the full dashboard`
*   A `div` with a class `App-footer` containing a paragraph with the text `Copyright {the current year e.g: 2025} - holberton School`

**Ad the CSS styles to the `App.css` to match the design in the screenshot below:**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/d3aca29c0fa33276ffa9de0d8611cd331511997b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=946bc632139c8209e21d49e7a619899aad79e4e2a044a697c4b3ea1a8c6af9bc)

**Requirements:**

*   Push your`package.json`and Make sure the `jest` package is included.
*   Use the same names for the downloadable images (`holberton-logo.jpg` , `close-button.png`, `favicon.ico`).
*   Ensure the lint check passes without errors (hint: add `Jest` as the test runner in the ESLint configuration file).
*   Make sure the app’s style matches the screenshot.
*   No lint errors

  

### 2.

Testing is a crucial part in the web development. in React projects, you’ll use the `React Testing Library` and `Jest` as a test runner.

Create a new file named `App.spec.js` inside the src folder, and add the following imports:

*   `render` and `screen` from `@testing-library/react`
*   The `App` component

Now that all dependencies are imported, let’s write the first tests:

*   Write a test to check if the `h1` element with the text `School Dashboard` is rendered.
*   Write a test to check that the text content within the 2 `p` elements in the app-body and app-footer divs matches the text shown in the previous task screenshot.
*   Write a test to check if an `img` element is rendered.

**_Tips:_**

*   Use a single query to check for the `<h1>` element and its text content.
*   Match the `<img>` element using its `alt` attribute’s text content to ensure your test is robust.
*   Ignore case sensitivity in your assertions to improve the coverage and reliability of your tests.

  

### 3.

**Using your code from the previous task, create a new file `task_1/dashboard/src/utils.js`:**

*   Create a function `getCurrentYear` that will return the current year.
*   Create a function `getFooterCopy`:
    *   It accepts one argument `isIndex`(boolean).
    *   When true, the function should return `Holberton School`, otherwise it’ll return `Holberton School main dashboard`
*   Update the `<div>` App-footer in `App.jsx` to use these two functions.

  

**Add a new file `task_1/dashboard/src/Notifications.jsx`, and create a Notifications function:**

*   The function should return a `<div>` with the class `notification-items`
*   The div should contain a paragraph with the text `Here is the list of notifications`

**Create a new file `task_1/dashboard/src/Notifications.css` where you add the necessary styles to match the design shown in the provided screenshot.**

  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4fb11d71985c3e9053301f38f4da71ff5de34649.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5dd78e434e8fb1acba9f4045121586ce8636b9016ba238f8a01a8c6880c8409b)

  

**Render the Notifications component:**

*   Update `App.jsx` :
    
    *   Render the new `Notifications` component and wrap it inside a `div` with class `root-notifications`
*   Use the React browser extension to check if the `Notifications` component is nested correctly as a child of the `App` component.
    

**Requirements:**

*   The new `Notifications` component should be implemented as a child within `App` in `App.jsx`.
*   Ensure the lint check passes with no errors.

  

### 4.

**Using your code from the previous task, in `task_2/dashboard/src/App.jsx` under the paragraph with text `Login to access the full dashboard`:**

*   Add a `label` and an `input`element for email.
*   Add a `label` and an `input` element for password.
*   Add a `button` element with the text “OK”

**Requirements:**

*   When the user clicks on a label element, the corresponding input field should be focused
*   No lint errors should appear

  

### 5.

Let’s test the new form.

Update the `App.spec.js` file to add the following tests:

*   Check whether the `App` component renders 2 input elements (one for email and the other for password)
*   Check whether the `App` component renders 2 label elements with the text `Email` and `Password`.
*   Check whether the `App` component renders a button with the text ‘OK’

**Tips:**

*   Use `regex` to ensure case-insensitive matching.

  

### 6.

**Update `task_2/dashboard/src/utils.js`:**

*   Create a function `getLatestNotification`:
    *   This function should return the following string : `<strong>Urgent requirement</strong> - complete by EOD`

**Update `task_2/dashboard/src/Notifications.jsx` in the Notifications div:**

*   Add a button element:
    *   Style the button inline so it appears on the right side of the notifications box. (without using the CSS file):
    *   Add the attribute `aria-label` with the value `Close`.
    *   When the user clicks the button, it should log `Close button has been clicked` to the console..
*   Add an `<img>` tag inside the button:
    *   The `<img>` should import the close-icon.png image.
*   Add an unordered list `<ul>` after the paragraph:
    *   The list should contain the following items:
        *   First item: Default priority with the text `New course available`
        *   Second item: Urgent priority with the text `New resume available`
        *   Last item: Display the text returned by `getLatestNotification` using `dangerouslySetInnerHTML`.
*   Add a data attribute for priority:
    *   Assign a priority level to the first and second list items using a `data-priority` attribute.

**In `task_2/dashboard/src/Notifications.css`:**

*   Add CSS styles to match the screenshot below.

**Requirements:**

*   No lint errors should show up
*   Your app should look like the following screenshot:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/676bb04908adbf59c1f5269243eac55aa4841ee1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ecf8549da43f43db99fed755016d6db3d59f0d78878f723b0c996d6be5746e89)

  

### 7.

**Update `task_3/dashboard/src/utils.spec.js`:**

Use Jest to test the following functions to ensure they return the desired outputs:

*   Write a test to check that the function `getCurrentYear` returns the correct year (be careful to not create a time bomb).
*   Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false.
*   Write a test to check the returned string form `getLatestNotification`

  

### 8.

**In `task_3/dashboard/src/Notifications.spec.js`** create the following tests:

*   Add a test to check the existence of the notifications title `Here is the list of notifications` .
*   Add a test to check the existence of the `button` element in the notifications.
*   Verify that there are 3 `li` elements as notifications rendered, as shown in the shared screenshot .
*   Check whether clicking the close button logs `Close button has been clicked` to the console.

**Tips:**

\-Take a look at how RTL (React Testing Library) handles user events. - Use the `fireEvent` API to simulate a click event for the button.

**Requirements:**

*   Make sure your tests ignore case to ensure better test coverage.

  

### 9.

Deploy your application to GitHub Pages using the `gh-pages` branch.

Add the link to your deployed web page within a new file in the `task_4/dashboard` folder and name it `holberton-dashboard.txt`

**Requirement:**

*   Your web page `Holberton dashboard` must match the design shown in the provided screenshot.  
      
    

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/e9eda297e77bfc0bde1f5252f2e778df55fef2c8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fda212c9330511b9f5dad537c87d3699fc1743edee5df298eb169d9220abade5)

  

### 10.

Let’s restructure the project:

*   Create folder structure:
    *   Move every file related to the `App` into an `App` folder.
    *   Move every file related to the `Notifications` into a `Notifications` folder.
    *   Move every file related to the utility functions into a `utils` folder.
    *   Move every asset file (like images, logos) into an `assets` folder.
*   Set up the favicon.ico:
    *   Place the favicon.ico in the `public` folder.

**Requirements:**

*   Make sure to fix the import statements in your files, so all tests run successfully.
*   The `favicon.ico` should be displayed on the React application browser tab.
*   Your React application should look similar to the one shown in the screenshot below.
*   No lint errors.

  

**Screenshot at this level:**  
  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/b03d7cb2ddc658c92838f7bfe1b9982ba4976032.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T081607Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=7dcb9fd8fab9465d2e87d999525e28169a17ba6aa65cd79bf22b41c95c1c0784)