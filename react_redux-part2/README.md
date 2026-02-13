## Resources

****Read or watch:****

*   [understanding re-renders in React](/rltoken/J6BNtXJR1_L8fI7JCSnInQ)
*   [Memoized Selectors](/rltoken/VSwjigrcaBM8Ihzb6Kw0hQ)
*   [usestate Vs useref](/rltoken/O2emaIa9PPFN7M6sgieeJA)

## Learning Objectives

At the end of this project, you should be able to [explain to anyone](/rltoken/fVm4QhOu3iH5NhYKF2E3Cg), **without the help of Google**:

*   Understanding React performance issues
*   Memoized Redux selectors

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest` version `29.7.0`

## Tasks

### 1.

"In this task you'll manage to fix an issue that affects your React Application performance.\\r\\n\\r\\nThis issue is unnecessary re renders in the \`Notifications\` component\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo visualize this performance issue:\\r\\n\\r\\n- Go to the Notifications component and place a console log with any text of your choice and try to toggle the notifications items on our browser and you'll see the number of logs increases with the number of clicks\\r\\n\\r\\nThe issue that \`displayDrawer\` state in Redux triggers re-renders of the Notifications component even when the underlying \`notifications data\` hasn’t changed. This happens because (the short story):\\r\\n\\r\\n- UI visibility toggles (show/hide) are mixed with API data in the same \`state slice\` which forcing a full re-render with every drawer toggle action dispatched\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo address the issue (there are plenty ways to achieve that but we'll stick to the following):\\r\\n\\r\\nIn the \`notificationsSlice\`:\\r\\n\\r\\n- Starting by removing the \`displayDrawer\` from the initial state\\r\\n- Remove the \`showDrawer\` \\u0026 \`hideDrawer\` reducers\\r\\n- Update exports to exclude visibility-related actions\\r\\n\\r\\nIn the \`Notifications\` component:\\r\\n\\r\\n- Remove any logic related to the displayDrawer state (state access, handlers, etc)\\r\\n- Create a reference to the notification items' container using \`useRef\` hook and store it in a new variable \`DrawerRef\`\\r\\n- Implement \`handleToggleDrawer\` handler that adds/removes the \`visible\` Aphrodite style object on the DOM element to control display/hide\\r\\n- Make sure to attach ref to drawer element\\r\\n- Wire up the new handler that was handled previously with \`handleHideDrawer\` and \`handleDisplayDrawer\`\\r\\n\\r\\nFor styles:\\r\\n\\r\\n- Find the style object for the notification drawer container and \*\*add\*\* these properties:\\r\\n - \`opacity: 0\`\\r\\n - \`visibility: \\"hidden\\"\`\\r\\n \\r\\n- Add a new style object with the exact name \`visible\`:\\r\\n - \`opacity: 1\`\\r\\n - \`visibility: \\"visible\\"\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nClean up your unit tests relies on the actions \`hideDrawer\` \\u0026 \`showDrawer\`\\r\\nUpdate your unit tests to rely on Aphrodite \`visible\` object to toggle the notification items\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nThe \`Notifications\` component should not be rendered when the show/hide events are triggered\\r\\n\\r\\nALL your new unit tests PASS\\r\\n\\r\\nNo console warns or errors\\r\\n\\r\\nNo lint errors\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[task-0.gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/e5474dbcd821ad8639a77524ddd8706fc9b69e79.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260213T123717Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=36bdaa7c954d2cb8e310d0222f36d442526fefc27bdbbdc8520a60b59c9ccc7b)"

In this task you'll manage to fix an issue that affects your React Application performance.

This issue is unnecessary re renders in the `Notifications` component

  

To visualize this performance issue:

*   Go to the Notifications component and place a console log with any text of your choice and try to toggle the notifications items on our browser and you'll see the number of logs increases with the number of clicks

The issue that `displayDrawer` state in Redux triggers re-renders of the Notifications component even when the underlying `notifications data` hasn’t changed. This happens because (the short story):

*   UI visibility toggles (show/hide) are mixed with API data in the same `state slice` which forcing a full re-render with every drawer toggle action dispatched

  

To address the issue (there are plenty ways to achieve that but we'll stick to the following):

In the `notificationsSlice`:

*   Starting by removing the `displayDrawer` from the initial state
*   Remove the `showDrawer` & `hideDrawer` reducers
*   Update exports to exclude visibility-related actions

In the `Notifications` component:

*   Remove any logic related to the displayDrawer state (state access, handlers, etc)
*   Create a reference to the notification items' container using `useRef` hook and store it in a new variable `DrawerRef`
*   Implement `handleToggleDrawer` handler that adds/removes the `visible` Aphrodite style object on the DOM element to control display/hide
*   Make sure to attach ref to drawer element
*   Wire up the new handler that was handled previously with `handleHideDrawer` and `handleDisplayDrawer`

For styles:

*   Find the style object for the notification drawer container and **add** these properties:
    
*   `opacity: 0`
    
*   `visibility: "hidden"`
    
*   Add a new style object with the exact name `visible`:
    
*   `opacity: 1`
    
*   `visibility: "visible"`
    

  

**Tests:**

Clean up your unit tests relies on the actions `hideDrawer` & `showDrawer` Update your unit tests to rely on Aphrodite `visible` object to toggle the notification items

  

**Requirements:**

The `Notifications` component should not be rendered when the show/hide events are triggered

ALL your new unit tests PASS

No console warns or errors

No lint errors

  

![task-0.gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/e5474dbcd821ad8639a77524ddd8706fc9b69e79.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260213T123717Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=36bdaa7c954d2cb8e310d0222f36d442526fefc27bdbbdc8520a60b59c9ccc7b)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   **Directory:** ``react_redux-part2``
*   **File:** ``task_0/dashboard/src/components/Notifications, task_0/dashboard/src/components/Notifications.spec.js, task_0/dashboard/src/features/notifications/notificationsSlice.js``

  

### 2.

"Implement a loading state in the \`Notifications\` component to provide feedback during data fetching\\r\\n\\r\\nThis improvement will result in a better user experience and will display a loading indicator when notifications are fetched\\r\\n\\r\\nIn the \`notificationsSlice\`:\\r\\n\\r\\n- Add a new state property \`loading\` and set it default value to \`false\`\\r\\n- Modify the \`extraReducers\` to handle the pending, fulfilled, and rejected states of the \`fetchNotifications\` thunk:\\r\\n\\t- Set \`loading\` to true when the request is \`pending\`\\r\\n\\t- Set \`loading\` to false when the request is \`fulfilled\` or \`rejected\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nIn the \`Notifications\`:\\r\\n\\r\\nRender Conditionally the notifications UI based on the loading state:\\r\\n\\r\\n- display a loading indicator (\`Loading...\`) while data is being fetched, and render the notifications list only after the data has been successfully fetched\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nALL your new unit tests PASS\\r\\n\\r\\nNo console warns or errors\\r\\n\\r\\nNo lint errors\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[vokoscreenNG-2025-01-23\_11-16-29 (1).gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/77fd94ddba51bce5c92d3aa793001be700cf0830.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260213T123717Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=08d29eaee719833a5e07067416da4820d8faab2bc046977efe59cf63bdc58680)"

Implement a loading state in the `Notifications` component to provide feedback during data fetching

This improvement will result in a better user experience and will display a loading indicator when notifications are fetched

In the `notificationsSlice`:

*   Add a new state property `loading` and set it default value to `false`
*   Modify the `extraReducers` to handle the pending, fulfilled, and rejected states of the `fetchNotifications` thunk:
    *   Set `loading` to true when the request is `pending`
    *   Set `loading` to false when the request is `fulfilled` or `rejected`

  

In the `Notifications`:

Render Conditionally the notifications UI based on the loading state:

*   display a loading indicator (`Loading...`) while data is being fetched, and render the notifications list only after the data has been successfully fetched

  

**Requirements:**

ALL your new unit tests PASS

No console warns or errors

No lint errors

  

![vokoscreenNG-2025-01-23_11-16-29 (1).gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/77fd94ddba51bce5c92d3aa793001be700cf0830.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260213T123717Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=08d29eaee719833a5e07067416da4820d8faab2bc046977efe59cf63bdc58680)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   **Directory:** ``react_redux-part2``
*   **File:** ``task_1/dashboard/src/components/Notifications, task_1/dashboard/src/components/Notifications.spec.js, task_1/dashboard/src/features/notifications/notificationsSlice.js``

  

### 3.

"In this task you'll improve the user experience by enable the user to select/deselect a course(s) among the courses displayed on the courses table once logged in\\r\\n\\r\\nIn the \`coursesSlice\`:\\r\\n\\r\\n- Add a new state \`isSelected\` defaulting to \`false\` to the courses state once the API call is \`fulfilled\`\\r\\n- Create 2 new actions \`selectCourse\`, and \`unSelectCourse\`:\\r\\n\\t- \`selectCourse\`: Takes a course id and sets \`isSelected\` to \`true\` for the corresponding course\\r\\n\\t- \`unSelectCourse\`: Takes a course id and sets \`isSelected\` to \`false\` for the corresponding course\\r\\n\\r\\n\\r\\nIn the \`CourseList\`:\\r\\n\\r\\n- Create a new function \`onChangeRow\`:\\r\\n\\t- It takes 2 arguments \`id\` (string), and \`checked\` (boolean)\\r\\n\\t- When \`checked\` is \`true\` dispatch the \`selectCourse\`, otherwise \`unSelectCourse\`\\r\\n\\r\\nIn the \`courseListRow\`:\\r\\n\\r\\n- Each course row should include a new \`input\` element of type \`checkbox\`\\r\\n- Call the \`changeRow\` prop function with course \`id\` and the new \`checked\` state whenever the checkbox is \`checked\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tips:\*\*\\r\\n\\r\\nUse the Redux DevTools to verify that the state updates correctly when checkboxes are clicked\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nEnsure the courses state in the Redux store is updated correctly when a course is selected or unselected\\r\\n\\r\\nALL your new unit tests PASS\\r\\n\\r\\nNo console warns or errors\\r\\n\\r\\nNo lint errors"

In this task you'll improve the user experience by enable the user to select/deselect a course(s) among the courses displayed on the courses table once logged in

In the `coursesSlice`:

*   Add a new state `isSelected` defaulting to `false` to the courses state once the API call is `fulfilled`
*   Create 2 new actions `selectCourse`, and `unSelectCourse`:
    *   `selectCourse`: Takes a course id and sets `isSelected` to `true` for the corresponding course
    *   `unSelectCourse`: Takes a course id and sets `isSelected` to `false` for the corresponding course

In the `CourseList`:

*   Create a new function `onChangeRow`:
    *   It takes 2 arguments `id` (string), and `checked` (boolean)
    *   When `checked` is `true` dispatch the `selectCourse`, otherwise `unSelectCourse`

In the `courseListRow`:

*   Each course row should include a new `input` element of type `checkbox`
*   Call the `changeRow` prop function with course `id` and the new `checked` state whenever the checkbox is `checked`

  

**Tips:**

Use the Redux DevTools to verify that the state updates correctly when checkboxes are clicked

  

**Requirements:**

Ensure the courses state in the Redux store is updated correctly when a course is selected or unselected

ALL your new unit tests PASS

No console warns or errors

No lint errors

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   **Directory:** ``react_redux-part2``
*   **File:** ``task_2/src/dashboard/pages/CourseList.jsx, task_2/src/dashboard/pages/CourseListRow/CourseListRow.jsx, task_2/src/dashboard/features/courses/courseSlice.js, task_2/src/dashboard/pages/CourseList.spec.js, task_2/src/dashboard/pages/CourseListRow/CourseListRow.spec.js``

  

### 4.

"In this task you'll enhance the notifications system by allowing users to filter notifications by type (urgent/default) while optimizing performance using Redux memoized selectors and React component state management\\r\\n\\r\\nFor this you'll the following new notifications JSON data:\\r\\n\\r\\n\\u003cdetails\\u003e\\r\\n\\u003csummary style='color: red';\\u003eClick to show/hide JSON contents\\u003c/summary\\u003e\\r\\n\\u003cpre\\u003e\\u003ccode\\u003e\\r\\n\[\\r\\n {\\r\\n \\"id\\": \\"5debd76480edafc8af244228\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764a7c57c7839d722e9\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Poole\\",\\r\\n \\"last\\": \\"Sanders\\"\\r\\n },\\r\\n \\"email\\": \\"poole.sanders@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 25\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"2d8e40be-1c78-4de0-afc9-fcc147afd4d2\\",\\r\\n \\"isRead\\": true,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd764507712e7a1307303\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd7648ba8641ce0a34ea4\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Norton\\",\\r\\n \\"last\\": \\"Grimes\\"\\r\\n },\\r\\n \\"email\\": \\"norton.grimes@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 37\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"cec84b7a-7be4-4af0-b833-f1485433f66e\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. \\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd76444dd4dafea89d53b\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764a7c57c7839d722e9\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Poole\\",\\r\\n \\"last\\": \\"Sanders\\"\\r\\n },\\r\\n \\"email\\": \\"poole.sanders@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 25\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"280913fe-38dd-4abd-8ab6-acdb4105f922\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd76485ee4dfd1284f97b\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764f07f50822352e252\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Roach\\",\\r\\n \\"last\\": \\"Cameron\\"\\r\\n },\\r\\n \\"email\\": \\"roach.cameron@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 26\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"89906f88-a02d-41ee-b214-daa0c54633e3\\",\\r\\n \\"isRead\\": true,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"Odio pellentesque diam volutpat commodo sed egestas egestas\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd7644e561e022d66e61a\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764e66586653a8a33f3\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Christy\\",\\r\\n \\"last\\": \\"Collier\\"\\r\\n },\\r\\n \\"email\\": \\"christy.collier@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 27\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"f8d66cca-63ec-4f19-a422-a3e1c8f05a36\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd7644aaed86c97bf9d5e\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764f5017139ce541857\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Mason\\",\\r\\n \\"last\\": \\"Douglas\\"\\r\\n },\\r\\n \\"email\\": \\"mason.douglas@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 31\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"de55f849-8fca-4ac7-afbb-41751f09d0c6\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Cursus metus aliquam eleifend mi in nulla posuere. \\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd76413f0d5e5429c28a0\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd76456a6a030695e6a70\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Marshall\\",\\r\\n \\"last\\": \\"Wynn\\"\\r\\n },\\r\\n \\"email\\": \\"marshall.wynn@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 26\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"8094c267-ab84-47e1-8801-58ddd23f3b2a\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Quam viverra orci sagittis eu volutpat odio facilisis mauris sit\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd7642e815cd350407777\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764f8452ef92346c772\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Cherry\\",\\r\\n \\"last\\": \\"Miles\\"\\r\\n },\\r\\n \\"email\\": \\"cherry.miles@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 25\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"3068c575-d619-40af-bf12-dece1ee18dd3\\",\\r\\n \\"isRead\\": true,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd764c1127bc5a490a4d0\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd76470dcced4a244fe7f\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Sykes\\",\\r\\n \\"last\\": \\"Fulton\\"\\r\\n },\\r\\n \\"email\\": \\"sykes.fulton@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 36\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"efb6c485-00f7-4fdf-97cc-5e12d14d6c41\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Cursus risus at ultrices mi.\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd7646ef31e0861ec1cab\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd7645c8d811b8c6a235d\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Valentine\\",\\r\\n \\"last\\": \\"Juarez\\"\\r\\n },\\r\\n \\"email\\": \\"valentine.juarez@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 25\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"1d3918d0-67e6-44a4-9031-72d7750234de\\",\\r\\n \\"isRead\\": true,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd764a4f11eabef05a81d\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764d0b0e7ed3e45ee6d\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Maryann\\",\\r\\n \\"last\\": \\"Larson\\"\\r\\n },\\r\\n \\"email\\": \\"maryann.larson@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 32\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"98fe7af4-8300-461f-a376-c147b2987616\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd764af0fdd1fc815ad9b\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764fb6db3a5c21ce617\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Naomi\\",\\r\\n \\"last\\": \\"Hayes\\"\\r\\n },\\r\\n \\"email\\": \\"naomi.hayes@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 30\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"cd1a09cf-ad6e-4478-9662-18a292807e2e\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"Nulla malesuada pellentesque elit eget gravida cum sociis\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd76468cb5b277fd125f4\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764f7234e1d44828515\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Knowles\\",\\r\\n \\"last\\": \\"Vazquez\\"\\r\\n },\\r\\n \\"email\\": \\"knowles.vazquez@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 28\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"0f446b01-37c3-4884-9dc6-316f23b7711b\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"urgent\\",\\r\\n \\"value\\": \\"Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel\\"\\r\\n }\\r\\n },\\r\\n {\\r\\n \\"id\\": \\"5debd764de9fa684468cdc0b\\",\\r\\n \\"author\\": {\\r\\n \\"id\\": \\"5debd764ec7c8d21449be7d7\\",\\r\\n \\"name\\": {\\r\\n \\"first\\": \\"Greta\\",\\r\\n \\"last\\": \\"Benjamin\\"\\r\\n },\\r\\n \\"email\\": \\"greta.benjamin@holberton.nz\\",\\r\\n \\"picture\\": \\"http://placehold.it/32x32\\",\\r\\n \\"age\\": 23\\r\\n },\\r\\n \\"context\\": {\\r\\n \\"guid\\": \\"4cc5bc3a-98fe-4392-b97d-6a41da1d944b\\",\\r\\n \\"isRead\\": false,\\r\\n \\"type\\": \\"default\\",\\r\\n \\"value\\": \\"Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue\\"\\r\\n }\\r\\n }\\r\\n\]\\r\\n\\u003c/code\\u003e\\u003c/pre\\u003e\\r\\n\\u003c/details\\u003e\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nUpdate the \`fetchNotifications\` Thunk from the \`notificationsSlice\`:\\r\\n\\r\\n- Map the API response data to extract the unread notification items (e.i conetxt.isRead === false) with the required fields (\`id\`, \`type\`, \`isRead\`, \`value\`), and return the transformed notifications array\\r\\n\\r\\n\\r\\nCreate a new file \`features/selectors/notificationSelector.js\`:\\r\\n\\r\\n- Retrieve the notifications array from the Redux state\\r\\n- Use \[createSelector\](/rltoken/2Y1SCuNeAmmo7Dnn4dMm3w) to create and export a memoized selector \`getFilteredNotifications\` that filters notifications based on the filter argument:\\r\\n\\r\\n\\t- The selector should accept two inputs:\\r\\n\\t\\t- The notifications array retrieved from the Redux state\\r\\n\\t\\t- A filter argument (e.g., urgent, default, or all)\\r\\n\\r\\n\\t- Filter logic:\\r\\n\\t\\t- If the filter is \`all\`, return all notifications (no type check needed already handled within the \`fetchNotifications\` Thunk)\\r\\n\\t\\t- For \`urgent\`/ \`default\` filters, return notifications matching the specified type\\r\\n\\r\\n\\r\\nUpdate the \`Notifications\` component:\\r\\n\\r\\n- Initialize a state variable \`currentFilter\` and its setter \`setCurrentFilter\` with an initial value of \`'all'\`\\r\\n- Replace direct \`access\`/ \`usage\` of notifications with a filtered array retrieved using the \`getFilteredNotifications\` memoized selector store the result in a new variable \`filteredNotifications\`\\r\\n- Added functions \`handleSetFilterUrgent\` and \`handleSetFilterDefault\` to toggle the current filter\\r\\n- Added buttons (‼️ for urgent and \`??\` for default) to toggle between filters\\r\\n- The buttons should dynamically set the \`currentFilter\` state, updating the displayed notifications accordingly\\r\\n- Adjusted to work with \`filteredNotifications\` rather than the full \`notifications\` array\\r\\n- Simplified rendering based on the filtered state\\r\\n\\r\\n\\r\\nUpdate the \`NotificationItem\` component:\\r\\n\\r\\n- Drop the use of html prop entirely, reducing complexity and improving safety\\r\\n- Receive notification data through explicit props: type, value, id\\r\\n- Used inline conditional styling for color based on the type (urgent = red, default = blue)\\r\\n- Maintain \`data-notification-type\` for testing/identification\\r\\n- Eliminate unnecessary conditionals for type and html\\r\\n- Implement click handler that calls \`markAsRead(id)\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nAdapt your unit test cases to the new updates\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour notifications drawer must correctly toggle between urgent and default states\\r\\n\\r\\nALL your new unit tests PASS\\r\\n\\r\\nNo console warns or errors\\r\\n\\r\\nNo lint errors\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[Final-ReduxTask(2).gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/b0bc4f376e771d7f4eccf7b5a68a1bdbddbe9945.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260213T123717Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=698abaa17120ce9900966d3c8571f83a49e4208ed810a125a86a6da6538461ea)"

In this task you'll enhance the notifications system by allowing users to filter notifications by type (urgent/default) while optimizing performance using Redux memoized selectors and React component state management

For this you'll the following new notifications JSON data:

Click to show/hide JSON contents

[
  {
    "id": "5debd76480edafc8af244228",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      "isRead": true,
      "type": "urgent",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  {
    "id": "5debd764507712e7a1307303",
    "author": {
      "id": "5debd7648ba8641ce0a34ea4",
      "name": {
        "first": "Norton",
        "last": "Grimes"
      },
      "email": "norton.grimes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 37
    },
    "context": {
      "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
      "isRead": false,
      "type": "urgent",
      "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
    }
  },
  {
    "id": "5debd76444dd4dafea89d53b",
    "author": {
      "id": "5debd764a7c57c7839d722e9",
      "name": {
        "first": "Poole",
        "last": "Sanders"
      },
      "email": "poole.sanders@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
      "isRead": false,
      "type": "urgent",
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  },
  {
    "id": "5debd76485ee4dfd1284f97b",
    "author": {
      "id": "5debd764f07f50822352e252",
      "name": {
        "first": "Roach",
        "last": "Cameron"
      },
      "email": "roach.cameron@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
      "isRead": true,
      "type": "urgent",
      "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
    }
  },
  {
    "id": "5debd7644e561e022d66e61a",
    "author": {
      "id": "5debd764e66586653a8a33f3",
      "name": {
        "first": "Christy",
        "last": "Collier"
      },
      "email": "christy.collier@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 27
    },
    "context": {
      "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
      "isRead": false,
      "type": "urgent",
      "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
    }
  },
  {
    "id": "5debd7644aaed86c97bf9d5e",
    "author": {
      "id": "5debd764f5017139ce541857",
      "name": {
        "first": "Mason",
        "last": "Douglas"
      },
      "email": "mason.douglas@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 31
    },
    "context": {
      "guid": "de55f849-8fca-4ac7-afbb-41751f09d0c6",
      "isRead": false,
      "type": "default",
      "value": "Cursus metus aliquam eleifend mi in nulla posuere. "
    }
  },
  {
    "id": "5debd76413f0d5e5429c28a0",
    "author": {
      "id": "5debd76456a6a030695e6a70",
      "name": {
        "first": "Marshall",
        "last": "Wynn"
      },
      "email": "marshall.wynn@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 26
    },
    "context": {
      "guid": "8094c267-ab84-47e1-8801-58ddd23f3b2a",
      "isRead": false,
      "type": "default",
      "value": "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit"
    }
  },
  {
    "id": "5debd7642e815cd350407777",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": {
        "first": "Cherry",
        "last": "Miles"
      },
      "email": "cherry.miles@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "3068c575-d619-40af-bf12-dece1ee18dd3",
      "isRead": true,
      "type": "default",
      "value": "Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim"
    }
  },
  {
    "id": "5debd764c1127bc5a490a4d0",
    "author": {
      "id": "5debd76470dcced4a244fe7f",
      "name": {
        "first": "Sykes",
        "last": "Fulton"
      },
      "email": "sykes.fulton@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 36
    },
    "context": {
      "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      "isRead": false,
      "type": "default",
      "value": "Cursus risus at ultrices mi."
    }
  },
  {
    "id": "5debd7646ef31e0861ec1cab",
    "author": {
      "id": "5debd7645c8d811b8c6a235d",
      "name": {
        "first": "Valentine",
        "last": "Juarez"
      },
      "email": "valentine.juarez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 25
    },
    "context": {
      "guid": "1d3918d0-67e6-44a4-9031-72d7750234de",
      "isRead": true,
      "type": "default",
      "value": "Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing"
    }
  },
  {
    "id": "5debd764a4f11eabef05a81d",
    "author": {
      "id": "5debd764d0b0e7ed3e45ee6d",
      "name": {
        "first": "Maryann",
        "last": "Larson"
      },
      "email": "maryann.larson@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 32
    },
    "context": {
      "guid": "98fe7af4-8300-461f-a376-c147b2987616",
      "isRead": false,
      "type": "default",
      "value": "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac"
    }
  },
  {
    "id": "5debd764af0fdd1fc815ad9b",
    "author": {
      "id": "5debd764fb6db3a5c21ce617",
      "name": {
        "first": "Naomi",
        "last": "Hayes"
      },
      "email": "naomi.hayes@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 30
    },
    "context": {
      "guid": "cd1a09cf-ad6e-4478-9662-18a292807e2e",
      "isRead": false,
      "type": "urgent",
      "value": "Nulla malesuada pellentesque elit eget gravida cum sociis"
    }
  },
  {
    "id": "5debd76468cb5b277fd125f4",
    "author": {
      "id": "5debd764f7234e1d44828515",
      "name": {
        "first": "Knowles",
        "last": "Vazquez"
      },
      "email": "knowles.vazquez@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 28
    },
    "context": {
      "guid": "0f446b01-37c3-4884-9dc6-316f23b7711b",
      "isRead": false,
      "type": "urgent",
      "value": "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel"
    }
  },
  {
    "id": "5debd764de9fa684468cdc0b",
    "author": {
      "id": "5debd764ec7c8d21449be7d7",
      "name": {
        "first": "Greta",
        "last": "Benjamin"
      },
      "email": "greta.benjamin@holberton.nz",
      "picture": "http://placehold.it/32x32",
      "age": 23
    },
    "context": {
      "guid": "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
      "isRead": false,
      "type": "default",
      "value": "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue"
    }
  }
]

  

Update the `fetchNotifications` Thunk from the `notificationsSlice`:

*   Map the API response data to extract the unread notification items (e.i conetxt.isRead === false) with the required fields (`id`, `type`, `isRead`, `value`), and return the transformed notifications array

Create a new file `features/selectors/notificationSelector.js`:

*   Retrieve the notifications array from the Redux state
    
*   Use [createSelector](/rltoken/2Y1SCuNeAmmo7Dnn4dMm3w) to create and export a memoized selector `getFilteredNotifications` that filters notifications based on the filter argument:
    
    *   The selector should accept two inputs:
        
        *   The notifications array retrieved from the Redux state
        *   A filter argument (e.g., urgent, default, or all)
    *   Filter logic:
        
        *   If the filter is `all`, return all notifications (no type check needed already handled within the `fetchNotifications` Thunk)
        *   For `urgent`/ `default` filters, return notifications matching the specified type

Update the `Notifications` component:

*   Initialize a state variable `currentFilter` and its setter `setCurrentFilter` with an initial value of `'all'`
*   Replace direct `access`/ `usage` of notifications with a filtered array retrieved using the `getFilteredNotifications` memoized selector store the result in a new variable `filteredNotifications`
*   Added functions `handleSetFilterUrgent` and `handleSetFilterDefault` to toggle the current filter
*   Added buttons (‼️ for urgent and `??` for default) to toggle between filters
*   The buttons should dynamically set the `currentFilter` state, updating the displayed notifications accordingly
*   Adjusted to work with `filteredNotifications` rather than the full `notifications` array
*   Simplified rendering based on the filtered state

Update the `NotificationItem` component:

*   Drop the use of html prop entirely, reducing complexity and improving safety
*   Receive notification data through explicit props: type, value, id
*   Used inline conditional styling for color based on the type (urgent = red, default = blue)
*   Maintain `data-notification-type` for testing/identification
*   Eliminate unnecessary conditionals for type and html
*   Implement click handler that calls `markAsRead(id)`

  

**Tests:**

Adapt your unit test cases to the new updates

  

**Requirements:**

Your notifications drawer must correctly toggle between urgent and default states

ALL your new unit tests PASS

No console warns or errors

No lint errors

  

![Final-ReduxTask(2).gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/b0bc4f376e771d7f4eccf7b5a68a1bdbddbe9945.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260213%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260213T123717Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=698abaa17120ce9900966d3c8571f83a49e4208ed810a125a86a6da6538461ea)

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   **Directory:** ``react_redux-part2``
*   **File:** ``task_3/src/dashboard/features/notifications/notificationsSlice.js, task_3/src/dashboard/features/selectors/notificationsSelector.js, task_3/src/dashboard/components/Notifications/Notifications.jsx, task_3/src/dashboard/components/Notifications/Notifications.spec.js, task_3/src/dashboard/components/NotificationItem/NotificationItem.jsx, task_3/src/dashboard/components/NotificationItem/NotificationItem.spec.js``