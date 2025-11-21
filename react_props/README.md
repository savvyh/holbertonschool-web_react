# React Props

## Resources

**Read or watch**:

*   [React Official Website](/rltoken/NnEOzFmxs6rCi8TP85Alzw "React Official Website")
*   [Getting started with React](/rltoken/3G7LSXOhmUgUvjVzoYUYWg "Getting started with React")
*   [React overview](/rltoken/vlAy2fYJgLfsZ41tU8jf6A "React overview")
*   [React Developer Tools](/rltoken/bvm7dcsO_-_w2eIWLtEdVA "React Developer Tools")
*   [React Fragments](/rltoken/vGG_vxEqApdVkXttehS9lQ "React Fragments")
*   [Conditional Rendering](/rltoken/pE3YTGLczGcnd_jWmgJ3ew "Conditional Rendering")
*   [Typechecking with PropTypes](/rltoken/1kuKKtKw765oq48N1dtgqw "Typechecking with PropTypes")
*   [React Testing Library](/rltoken/wpIWXCBQUaLexk1L-fUSnQ "React Testing Library")
*   [Query within an element](/rltoken/g7Pqn6Hw28ZMj69cbybZIg "Query within an element")
*   [Jest Matchers](/rltoken/ckFroRGNsZD0nMYfKmdLLQ "Jest Matchers")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/9a804vuJud9hGYpq9ujIQg "explain to anyone"), **without the help of Google**:

*   How to create basic React components using functions
*   How to reuse components
*   How to pass properties to components
*   How to use Fragments
*   When to use a key to improve a loop’s performance

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`

## Tasks

### 1.

Start with your files from the last task of the `React intro` project

Instead of creating new elements, we’re going to create components to split the project. The `App.jsx` is going to become the main entry point, the shell, for every component in the app.

#### Create a Header component

Create a new folder `Header`:

*   Create a functional component `Header` inside the `Header.jsx` where you move the code of the header from the `App.jsx`.
*   Move the CSS code, related to the header, from the `App.css` to a new file named `Header.css`.
*   Create an empty test file `Header.spec.js`.

#### Create a Footer component

Create a new folder `Footer`:

*   Create a functional component `Footer` inside the `Footer.jsx` where you move the code of the footer from the `App.jsx`.
*   Move the CSS code, related to the footer, from the `App.css` to a new file named `Footer.css`
*   Create an empty test file `Footer.spec.js`.

#### Create a Login component

Create a new folder `Login`:

*   Create a functional component `Login` inside the `Login.jsx` where you move the code of the login form from the `App.jsx`.
*   Move the CSS code, related to the login, from the `App.css` to a new file named `Login.css`
*   Create an empty test file `Login.spec.js`.

#### Modify the shell

In the `App.jsx`:

*   Along with the Notifications component, import the Header, the Login, and the Footer components
*   Pass the components in the above order respectively
*   Wrap the above elements inside a react `<Fragment>`

**Tests:**

In the `Header.spec.js`, `Login.spec.js`, and `Footer.spec.js`:

*   Ensure that these components are rendered without crashing

Requirements:

*   At this point, reloading the react app should display the exact same page layout
*   The console tab from your browser shouldn’t show any errors or warnings

  

### 2.

Let’s start improving the tests:

#### Header.spec.js

Import your new Header component within the test, and write two checks:

*   Check whether the `Header` component contains the Holberton logo.
*   Check whether the `Header` component contains the heading `h1` element with the correct text

  

#### Login.spec.js

Import your new `Login` component within the test, and check:

*   Add a test to verify whether the `Login` includes 2 `label`, 2 `inputs`, and 1 `button` elements
*   Add a test to verify whether the `inputs` elements get focused whenever the related `label` is clicked

  

#### Footer.spec.js

Import your new `Footer` component within the test, and check:

*   Check whether the `p` element renders the string `Copyright {the current year} - Holberton School`, whenever the `getFooterCopy()` “isIndex” argument is set to `true`

  
  
**Note:**

*   The `Notifications.spec.js` unit tests will be evaluated, so make sure they work as expected

  

### 3.

#### Update the App component:

Inside the `App` component add a new empty array called `notificationsList` and fill it in with the notification items from the `Notifications` component, make sure each item has the following 3 keys `id`, `type`, and `value`:

*   `id`: a random unique number (1, 2, 3 required for checker validation)
*   `type`: whether it is default or urgent
*   `value`: notification text (the 3rd item should be `html`)

The new array should be passed as a prop (prop name `notifications`) to the `Notifications` component

#### Create a NotificationItem.jsx

Inside the `Notifications` component, Since the `li` element is repeated more than once, create a new component that will be responsible for rendering these elements.

Within a new file `NotificationItem.jsx` create a new component named `NotificationItem`:

*   This component should render a `li` tag
*   The component should accept three properties (`type`, `html`, and `value`)
*   The `data-notification-type` attribute should take the `type` prop as its value
*   The `dangerouslySetInnerHTML` attribute should take the `html` prop as its value
*   The `li` tag should render the text from the prop’s `value` .
*   Your JSX code should conditionally render the notification items based on the value of the `type` prop
*   Apply inline styling to add a text color to notification items (default notifications should appear in `blue`, urgent notifications in `red`) and remove these styles from `Notifications.css`

  

#### Create a NotificationItem.spec.js

Every component should be tested. Create a new file named `NotificationItem.spec.js` , and add the following tests:

*   Check whether the `li` element has the color `blue`, and the the attribute `data-notification-type` set to `default` whenever the component receives the prop’s type as “default”.
*   Check whether the `li` element has the color `red`, and the the attribute `data-notification-type` set to `urgent` whenever the component receives the props’s type as “urgent”.

  

#### Update Notifications.jsx

*   The `Notifications` component should accept the prop `notifications` which will be set to the value of `notificationsList` (By default it should be an empty array)
*   Import the new `NotificationItem` component and replace the `<li>` tags with `NotificationItem` components. (this is a common case where the `map` array method comes in handy)

  

#### The Notifications.spec.js

*   Ensure that the Notifications component still displays the 3 notification items, with the appropriate text through the `notifications` prop

  
**Requirements:**

*   At this point, reloading the `Holberton dashboard` React application should still render the same design.
*   The console in your browser should not show any errors or warnings
*   There should be no lint errors

  

**Remember: A well-designed component provides default prop values to gracefully handle cases where props aren’t passed, rather than crashing**

  

### 4.

Using the React extension in Chrome:

*   Modify the type of the first NotificationItem to change from “default” to “urgent”. The first notification should change color to red and vice versa, take a screenshot
*   Profile the load of the application and note which component is the longest to render after `App` component, take a screenshot

**Requirements:**

*   You have to push all your code boilerplate with the screenshots from your browser react devtools result

  

### 5.

#### Create a CourseListRow component

Create a new folder `CourseList` and a new component with the name `CourseListRow`. The component accepts 3 props:

*   `isHeader` (default value: `false`)
*   `textFirstCell` (default value: empty string)
*   `textSecondCell` (default value: null)

The component returns a `tr` element, and within that element:

*   If `isHeader` is `true`:
    *   If `textSecondCell` is `null`, it returns a `th` element containing `textFirstCell` with a `colSpan = 2`
    *   If `textSecondCell` is not null, it returns two `th` elements containing `textFirstCell` and `textSecondCell`
*   If `isHeader` is `false`
    *   It returns two `td` elements containing `textFirstCell` and `textSecondCell`

**Create a `CourseListRow.spec.js` file, and add the following tests:**

*   When `isHeader` is `true`:
    *   When `textSecondCell` is null, check whether the component renders one `columnheader` that has the attribute`colspan = 2`
    *   When `textSecondCell` is not null, check whether the component renders 2 `<th>` cells .
*   When `isHeader` is `false`:
    *   Add a check to test the component renders correctly two `td` elements within a `tr` element

  

#### Create a CourseList component

In the folder `CourseList`, create a new component named `CourseList` where it’s:

*   A child of the `App` component
*   Receive `courses` prop (by default it’s an empty array)
    
*   It returns a `table` element with an id `CourseList`
    
*   It contains a `thead` element
    
*   It includes a `CourseListRow` with the props `textFirstCell="Available courses"` and `isHeader=true`
    
*   It includes a `CourseListRow` with the props `textFirstCell="Course name"`, `textSecondCell="Credit"`, and `isHeader=true`
    
*   It contains a `tbody` element:
    
    *   It includes a `CourseListRow` component that will take course data with every iteration
    *   When the `courses` prop is empty the `CourseListRow` component should render a `thead` row with text `No course available yet`

  

**Create a `CourseList.spec.js` with two checks:**

*   Check that it renders 5 different rows when it receive an array of courses objects
*   Check that it renders 1 row whenever it receive an empty array

  

**Create a CourseList.css:**

*   Create and import a file `CourseList.css` where you will be able to add the below styling for the component

  

#### Modify the App component

*   Add an array of courses objects `coursesList`, where each object has the following key-value pairs
    
    *   `id`: unique number
    *   `name`: ES6, Webpack, React
    *   `credit`: 60, 20, 40
*   Modify the `App` component to display either the `Login`, or the `CourseList` component:
    
*   Create a property `isLoggedIn`. It should be `false` by default
    
*   When `isLoggedIn` is `false`, display the `Login` component
    
*   Otherwise display the `CourseList` component
    

  

**Modify the `App.spec.js` test files and add the following tests:**

*   When the `isLoggedIn` is set to `false`:
    
    *   Check that the `App` component should render the `Login` form
*   When the `isLoggedIn` is set to `true`:
    
    *   Check that the `App` component should render a `CourseList` table

  

#### Update the UI:

`App`:

*   Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `false`

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/1c9259a842b824ce6f749b6db12ae1807742bae0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ca5f66ca9d91ae706a9f8e22c2eeb5dfe531acb12aa9cd2375362c9eab385043)

*   Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `true`

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/898b52472179db2a357a1da83dcac7f7e58522e8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=80d13cafab4992adb95bf975e58c7b0db9651422568d85f3478eda19921371c8)

*   Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `true` and the courses prop is an empty array

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/ab09dbfdee0eacfef0782cdd0ed57cb6f56d8958.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8f1e083423320ccd53357962ece600e41f89e86f093a52420b6d55495bab3d41)

Requirements:

*   The console in your browser should not show any error or warning
*   All unit tests PASS
*   No lint errors

  

### 6.

#### Modify the Notifications component

Add a new `div` element with the class `notification-title`:

*   It contains a text `Your notifications`
*   It should be displayed right before `div.notification-items` container element

Add a prop to the `Notifications` component named `displayDrawer`:

*   By default it should be `false`
    
    *   In this case the notification items, the text “Here is the list of notifications”, and the button should not be displayed
*   Otherwise:
    
    *   the notification items, the text “Here is the list of notifications”, and the button should be displayed
*   When the `notifications` prop receives an empty array the `Notifications` component should display the text `No new notification for now`
    
*   In All cases, the text “Your Notifications” should always be displayed.
    

  

#### Update the `Notifications.spec.js`:

*   Add new tests to check the behavior of the UI whenever the prop `displayDrawer` set to `false`:
    
    *   Check that the `Notifications` component doesn’t displays the close button, the `p` element (Here’s the list…), or the notification items
*   Add new tests to check the behavior of the UI whenever the the prop `displayDrawer` set to `true`:
    
    *   Check that the `Notifications` component displays the close button, the `p` element (Here’s the list…), and the notification items
*   Add new tests to check the behavior of the UI whenever the prop `displayDrawer` set to `true` and `notifications` prop is empty:
    
    *   Check that the `Notifications` component displays the text `No new notification for now`
*   In all cases, the “Your Notifications” text check should PASS.
    

  

**Requirements:**

*   All tests should PASS

  

`Notifications` rendering cases:

*   Modify the CSS to make the UI looks like the image below when `displayDrawer` is `true`

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/180c2987bffff1e96178dcdfd939ff1ea70938e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c2a458c4f2861f81ce51284bec8178b5e58fa5d19f165b1172cd4cd49c5011b3)

*   Modify the CSS to make the UI looks like the image below when `displayDrawer` is `true` & `notifications` prop empty:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/c4399c726941b491d3cfede0ad6ace9d5275a539.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=61158c1cd32ab3dd9730a971f1d4591bf867b6eddb78f217526a58fafb7bed6f)

*   Modify the CSS to make the UI looks like the image below when `displayDrawer` is `false`

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4c208e54072410a89c7a5da30bb4da50cc131b40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251121%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251121T172116Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dc4e379ec8615f86b78d6c0fac297de814c08b2ab2277d8ffe588d1232d2e6a8)