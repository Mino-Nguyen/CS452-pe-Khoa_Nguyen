# Input
Users interact with the app by typing a task into the input field and clicking the "Add" button. The app captures this text input, trims whitespace, and validates that the entry is not empty. If valid, the text is passed to the reducer to be added to the todo list. Users can also delete items by clicking the "Delete" button next to each task.

# Process
The app uses React's useReducer hook to manage state. When a user adds a todo, a dispatch with type 'added' triggers the todosReducer, appending the new item to the todo array. When a delete action occurs, the reducer filters out the matching todo by ID. The reducer ensures all updates follow predictable rules.

# Output
The result is a dynamically rendered list of todos. Each todo displays its text and a delete button. When actions are dispatched, the UI updates in real time to reflect the new state.