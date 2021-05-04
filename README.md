# Project

This project was built using create-react-app and the only package added was styled-components.

## MVP - This project satisfies the following:

- Responsive design to view on multiple device screen sizes.
- Allows for adding, marking complete, and removing individual tasks.
- Allows for bulk deletion of all completed todo items.
- Allows filtering through tasks by all, active, and completed todo items.

## Bonuses:

- This project has been deployed to Vercel and can be found live at [https://responsive-to-do.vercel.app/](https://responsive-to-do.vercel.app/).
- Persistence was added by using the browser's local storage.
- A dozen test cases have been written using React Testing Library and all are passing.

## How to pull down and run this project

[] In a directory on your local machine run: `git clone <https://github.com/BrianReisman/responsive-to-do.git>`

[] Navigate into the root of this project and install all dependencies run: `npm i`

[] After installation is complete, to run the project locally run: `npm start`

## How to run the test

[] In the terminal of your code editor from the root of the project directory run
`npm run test`

- To see passing tests you may need to scroll above warning text.

- *Please note: while all tests pass there are two warnings. The first reads: Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`. There is in fact an onChange handler present on all inputs with a checked property.*
-*Warning two reads: Warning: Each child in a list should have a unique "key" prop. Check the render method of `Display`. I am similarly unsure why this is present since all elements that have been mapped have a key={} prop passed with a unique ID. __Despite these warnings, all tests still pass.__*

## Lessons learned from this project

- When I originally structured this project I did not have a dedicated component and file for what is now Task.js. This was no issue, the app worked exactly as it does in its current state. However, when I went to write some tests for this portion of the app, it was nearly impossible without rending the entire application within the test case and I knew there must be an better way. I remembered having heard that one of the benefits of modularity is the ease of testing it offers. I thought I'd try, so I refactored the code into its own component, and wrote a new tests. The functionality of the app stayed the same, but the testing was significantly easier and ultimately the Display.js file was much smaller and therefore more readable as a positive side effect.
- On the styling front, I learned both about adding gradient filters on top of images and also how to style checkboxes using the label element's ::before and ::after.
- While writing tests I discovered the benefit of using `screen.debug(<element>)` to help me see visually what was being tested in a virtual DOM. A wonderful help!

## Features I could see enhancing this project in the future:

- Allow tasks when they are created to take a due date and add another filter to show only tasks due today.
- Have an archive setting that also persists in local storage but that removes tasks from all other views. Then add a new view specifically and only for these tasks.
- Light and dark mode. I would set this up taking advantage of Styled-Components' ThemeProvider. This color theme preference could also be saved to local storage so when the user returns, the options would be applied.
- Make tasks editable. Perhaps with a double click event listener which would allow the user the option to edit existing tasks in place, instead of deleting and creating a new one if their desire was to update text.
- I added a check to prevent a task with no text from being submitted. However, perhaps we could have a message telling the user explicitly that a task with no text is not valid so they wouldn't wonder if it wasn't working or why.
- A message could be displayed when a user clicked to delete or clear completed tasks asking for them to confirm to avoid accidental clicks.
- Just like there is a text message when there are no to-dos, perhaps adding a message for views 'active' and 'completed' like "You have no completed tasks", or in 'active, "All of your tasks are completed!".
---
- Last but not least a cute animal gif; [https://giphy.com/gifs/cute-aww-eyebleach-fxgTGtqZyV2ZqdJBWI](https://giphy.com/gifs/cute-aww-eyebleach-fxgTGtqZyV2ZqdJBWI).
