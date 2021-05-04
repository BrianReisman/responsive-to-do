# Include any documentation as you would in a production-level codebase. For example, you might want to explain things that are not immediately clear or you might include links to similar solutions where you took inspiration for your work.

React

Please do not add any additional NPM packages that are outside of the dev dependencies, (e.g., do not use Moment or Lodash, but feel free to implement linting standards or Styled Components, if that is part of your comfortable workflow).

If you have any questions, please reach out to Britta Rodenbeck at brodenbeck@xenith.com. When completed, please email Britta a link to your GitHub repository and a cute animal gif.

# The Project:

This project was built using create-react-app and the only package added was styled-components.

## MVP - This project satisfies the following:

- Responsive design to view on multiple device screen sizes.
- Allows for adding, marking complete, and removing individual tasks.
- Allows for bulk deletion of all completed todo items.
- Allows filtering through tasks by all, active, and completed todo items.

## Bonuses:

- This project has been deployed to Vercel and can be found live at https://responsive-to-do.vercel.app/.
- A dozen test cases have been written using React Testing Library and all are passing.
- Persistance was added by using the browser's localStorage.

## How to pull down and run this project

[] In a directory of choice on your local machine run:
`git clone https://github.com/BrianReisman/responsive-to-do.git`
[] Navigate into the root of this project and to install all dependencies run:
`npm i`
[] After installation is complete, to run the project locally run:
`npm start`

## How to run the test

[] In the terminal of your code editor from the root of the project directory run
`npm run test`

## Lessons learned from this project

- When I originally structured this project I did not have a dedicated component and file for what is now Task.js. This was no issue, the app worked exactly as it does in its current state. However, when I went to write some tests for this portion of the app, it was nearly impossible and I knew there must be an easier way. I remembered having hear that one of the benefits of modularity is the ease of testing it offers. I thought I'd try, so I refactored the code into its own component, and wrote so new tests. The functionality of the app stayed the same, but the testing was significantly easier and ultimately the Display.js file was much smaller and therefore more readable.
- Another lesson I leared was how helpful having a wireframe is!

## Features I could see enhancing this project in the future:

- Allow tasks when they are created to take a due date and add another filter to show only tasks due today.
- Have an archive setting which also persists in local storage that removes tasks from views, but stores them for a seprate view.
- Light and dark mode. I set up the skeleton of this taking advantage of Styled-Components' ThemeProvider. This color theme preference could also be saved to local storage so when the user returns, the options would be applied.
- Make tasks editable. Perhaps with a doubleclick event listener which would allow the user the option to edit existing tasks in place, instead of deleting and creating a new one if their desire was to update text.
- I added a check to prevent a task with no text from being submitted. However, perhaps we could have a message telling the user explicityly that a task with no text is not valid so they wouldn't wonder if it wasn't working or why.
- Just like there is a text message when there are no to-dos. perhaps adding a message for views 'active' and 'completed' so users don't think it's empty by accident since of their tasks, that particular view does not have any tasks that meet the criteria.

---

- Last but not least a cute animal gif; https://giphy.com/gifs/cute-aww-eyebleach-fxgTGtqZyV2ZqdJBWI.
