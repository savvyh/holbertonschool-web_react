# React Styling

## Resources

**Read or watch**:

*   [Tailwindcss](/rltoken/OMVfd46TTawn9P9QomTaAQ "Tailwindcss")
*   [Integrate Tailwindcss to an existing React project](/rltoken/0gfH3pJHug6K906PDqF7Iw "Integrate Tailwindcss to an existing React project")
*   [Tailwindcss configuration](/rltoken/QLwpTC3kYPobgoDdXa82IA "Tailwindcss configuration")
*   [Tailwindcss v4 upgrade guide](/rltoken/i8c_GQMShf2b_8mzBdjzCQ "Tailwindcss v4 upgrade guide")
*   [Tailwind Layer Directive](/rltoken/juvaSRuU7jmMfynY-NTkBg "Tailwind Layer Directive")
*   [Tailwind Border color](/rltoken/YhcjTqyQ4jGDYSYA1eA9yw "Tailwind Border color")
*   [Default spacing scale in Tailwind](/rltoken/F_l8lU3DE793cayjuXXGxA "Default spacing scale in Tailwind")
*   [Tailwind responsive design](/rltoken/BcPpW1KDOx_ZOUNDgAFj8w "Tailwind responsive design")
*   [Tailwind animation](/rltoken/5LSbtz5wfGBZ8gFhZn7uGA "Tailwind animation")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/DLa37LAaskepP3X9R50YAg "explain to anyone"), **without the help of Google**:

*   How to integrate and utilize TailwindCSS v4 within an existing React application without configuration files
*   How to declare and use CSS custom properties for consistent theming and color management
*   How to apply conditional styling based on component props
*   How to implement responsive design using Tailwind’s breakpoint syntax for adapting UI across different screen sizes
*   How to create and apply animations using Tailwind’s utility classes

## Requirements

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
*   Install Jest globally: `npm install -g jest`
*   Install TailwindCSS version 4._._
*   All your tasks will be tested on a headless chrome browser

## Tasks

### 1.

Copy over the `task_5` directory from the `React components` project and rename it `task_0`

**In order to add `TailwindCSS` to the project, you have to install the following npm package:**

*   `@tailwindcss/vite` and follow the docs to integrate successfully `TailwindCSS v4`

**In the src/main.css file:**

*   Add a theme configuration that defines the `Roboto font family`
*   Use Tailwind’s layer system to set Roboto as the default font for the entire application
*   You’ll need to install this package `@fontsource/roboto`

**In the src/main.jsx file:**

*   add appropriate import statements to include three different weights of the Roboto font:
    *   Regular weight (`400`) for normal body text
    *   Medium weight (`500`) for semi-emphasized text
    *   Bold weight (`700`) for headings and strong emphasis

  

**Requirement:**

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

  

### 2.

Create a new folder `task_1` and paste the `task_0/dashboard` folder into it

Create a new file `main.css` and make sure:

*   Add 2 background color variables:
    
    *   `--color-table-header`: `#deb5b5`
    *   `--color-table-rows`: `#CDCDCD`

**In the `CourseListRow.jsx`:**

*   Add the bg colors declared above conditionally whenever the table row is a header or a simple one
*   Add the opacity of `66%` for the header rows and `45%` otherwise
*   Add a border around the table’s cells with with the `gray` color and shade of `400`
*   Add a padding left of `8px` for the `td` elements (you should use the appropriate tailwindcss class)

**In the `CourseList.jsx`:**

*   The responsive container that wrapped your table should occupies `80%` of the page width
*   The table should expand to fill its container completely
*   Center the container on the page with appropriate spacing

The courses table should look consistent whether it contains data or is empty

  

**Requirement:**

Your final UI must match provided screenshots

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in both components

No `src/CourseList/*.css` files allowed

  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/01d458cb9206d20ff0a662867a70e73c2b944be2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5f4eef4c922459adcc1693e64abb490c156fed7f3c31be15c942f1b9fb1361b4) ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/5fc94c127e110633fbc9c9f3c89b3cd3ca1a2d86.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c53e6f58620cf934bdf4026f31c6709a061e5ea07279efa463376ad41b311e0e)

  

### 3.

In this task\_2 you’ll continue converting the CSS rules into Tailwind classes:

In the `main.css`:

*   Add 3 color variables:
    *   `--main-color`: `#e1003c`
    *   `--default-notification-item`: `blue`
    *   `--urgent-notification-item`: `red`

In the `NotificationItem.jsx`:

*   Use the notification colors defined above where you:
    *   Apply notification colors based on the item type e.i: default = blue or urgent = red
    *   Consider how to reference the new color variables within Tailwind class names for text colors

In the `Notifications.jsx`:

*   Make sure to set the title `Your Notifications` at right and on top of the notification panel
*   Ensure that surround the notification panel with a `dashed` border with the color variable `--main-color`
*   The notification panel should occupy approximately `25%` of the page width on desktop screens
*   Adding a padding from all sides around the notification items of `6px` using the appropriate tailwindcss class

  

**Requirements:**

Remove the styles tests from the `NotificationItem.spec.js` file

Your final UI should be the same as shown in the screenshots below

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in both components

No `src/Notifications/*.css` files allowed

  
  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/91b79206053672337181d29d6d6f579b08036904.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=673741161341decb91caf0b13d0a0b52a93bd4ba46f349c5f83b8cbb83bd2b03)

  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b8dd7233b0c20d023baa5a45fc158211d7f7f872.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d4b91b4f6f9dc36d8d75ecc41fbf22093358313f7be6ac1c78f766b0f3b5a5df)

  

### 4.

In this task you will convert the rest of the components styles to use Tailwind instead

In the `Header.jsx`:

*   Convert existing CSS rules to Tailwind classes
*   Use the `--main-color` for the heading text color
*   Consider the layout structure and alignment of logo and title (think about using flexbox)

In the `Login.jsx`:

*   Ensure the top border uses the `--main-color` variable
*   Convert the form layout to use Tailwind classes (think about using flexbox)
*   The Login UI should match the provided screenshot

In the `BodySectionWithMarginBottom.jsx` & `BodySection.jsx`:

*   Convert existing CSS rules to Tailwind classes
*   Adjust spacing and typography using Tailwind’s design system, e.i: margins, padding, and text styling

In the `Footer.jsx`:

*   Ensure the top border color uses the `--main-color` variable
*   Convert existing styling to Tailwind classes
*   Consider text styling and layout alignment
*   Position the Footer at the bottom of the layout container, ensuring it stays fixed to the bottom edge across all viewport sizes and content lengths

  

**Requirements:**

Your final UI should be the same as shown in the screenshots below

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that’s already provided)

  

**`layout_1:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/42f5fe47284a928f1c8b606c97ed6b54b90e5ed9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cb1ec84752e80e6979ae88838a098986b4f29fd7139800f08b21ad2b514b8daa)

* * *

  

**`layout_2:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/c5b4650a23c7e50d3f0f7bdf560a6bde321c1881.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=cea6b39b84d181515c373f7b1c2909d5006eaad3159b3dc0992c3c6c60518ad9)

* * *

  

**`layout_3:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/af91a8008e6a154f8581f03771642458e1b41a5d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=647637190bfd612cf515bc51deaa12842d0f6c0d2d395679b0eaa9577d7660b5)

  

### 5.

In this task you’ll be asked to work on the responsiveness of your `Holberton Dashboard` application

In the `Notifications.jsx`:

*   Make the notifications panel responsive, particularly for screen sizes below `912px`
*   Consider how notification items should occupy the viewport on smaller screens e.i: full width/height of the screen
*   Adjust list styling of the notification items for mobile devices (think about bullet points and spacing)
*   Add appropriate padding and border styling for notification items
*   Consider positioning and layering when notification items are full-screen
*   Adding a padding from all sides around the notification items of `12px` on mobile/tablet screens using the appropriate tailwindcss class

In the `NotificationItem.jsx`:

*   Implement responsive text sizing for different screen widths
*   Add proper border and padding for list items on smaller screens

In the `App.jsx`:

*   Create a responsive container structure for the entire application
*   Adjust padding for different screen sizes
*   Use flexbox layout to ensure proper content distribution across viewport heights

In the `Header.jsx`:

*   Implement responsive layout that adapts to smaller screens (consider stacking vs horizontal layout)
*   Adjust text sizes for breakpoints below `520px`
*   Maintain proper alignment and spacing across all device sizes

In the `Login.jsx`:

*   Make form inputs appropriately sized on mobile screens
*   Consider vertical vs horizontal layout for form elements on different screen sizes

In the `CourseList.jsx`:

*   Ensure the course table remains responsive and properly sized

In the `Footer.jsx`:

*   Implement responsive text sizing for various screen widths
*   Consider footer positioning in the overall layout e.i: stick to the bottom

  

Note:

*   The long text used under the `News from the school` is intentionally to test responsive behavior in this section, and you’ll use it only for this task
*   text: `ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?`

  

**Requirements:**

Your final UI should be the same as shown in the screenshots

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that’s already provided)

  
  

**`layout_1:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b7b0ae914cd307dacf244960916372b2271efb15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8d12ee5c16035880abaa6efb3f00c3f19d1e4b7f0878765b3f9d8a35b5b2a763)

  

**`layout_2:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/212ec96117061f54ab8ad625673f6050f34b7d2a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c72dd511fcc9aaa752141fc9dcf2de440dfcf3e0391c7cd117505e471c02b710)

  

**`layout_3:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/e22f993d7f73e0c6c0a4e6c37ea6c2480fcc6e1e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c293426ccbd9ade1f9461e8665c108480ab4741c86847036dc14d196820351df)

  

**`layout_4:`**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/30c8e14f8737987d5c40f241d881634aabc48577.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=fe6f83fa45b1931e249f12df18b353435a95e8d5b1c1a9ad25a8afb284b0135e)

  

### 6.

In this you’ll apply a `tailwind bounce animation` in the notifications title `Your notifications`

The condition is simple, in the `Notifications.jsx`:

*   Whenever the `notifications` prop array length is > 0 AND the `displayDrawer` prop is set to`false` then add the bounce animation
*   otherwise no bounce animation applied
*   Consider how to conditionally apply CSS classes in React based on prop values

  

**Requirements:**

Your final UI should be the same as shown in the screenshots

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that’s already provided)

  
  
  
  

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/4f187731e53d90d8ad66ee3e81a14c8849879a94.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20251126%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20251126T091530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=eebf4678cceac31e858f330c94ff000805c26c344724f8f57bf1848a933ed952)