 /* With this, we can write arrow functions lower in the code, 
    and not have sequence of execution problems. 
    The arrow function is called when the page has loaded. */
window.onload = () => {
    renderTodoItems()
    renderCompletedItems()
  }
  
  /* Add some items to the list. This array is the database for todo items 
We can use a forEach loop to create HTML content the todo list*/

  const todoItems = [
    {
      name: 'complete tutorial',
      dueDate: '2024-3-1'
    },
    {
      name: 'work out',
      dueDate: '2024-3-2'
    }
  ]

  /*  Add some completed items- When an item is completed, it should be moved 
  from todoItems array to completedItems array */
  const completedItems = [
    {
      name: 'start tutorial',
      dueDate: '2024-2-28'
    }
  ]
  
/* Show the todo List on the page. This function shows the todo items on the page
We we use todoItems.forEach, iterating with each element in todoItems array, 
so every element is shown on the page. */
  const renderTodoItems = () => {

/*  We build the HTML in JavaScript*/
/* This is for the final HTML */ 
    let todoListHTML = ''
  
    todoItems.forEach((item, index) => {
/* We make a template for each item, and add the HTML (to the page) */
      const itemHTML = `
        <div>${item.name}</div>
        <div>${item.dueDate}</div>
        <button class="delete-button">&times;</button>
        <button class="complete-button">&check;</button>
      `
/* We add the content to todoListHTML */
      todoListHTML += itemHTML
    })
/* We add to class .todo-items (dot needed for class) */  
    document.querySelector('.todo-items').innerHTML = todoListHTML

/* Delete Todos. We add an event listener to the delete button.
When the delete button is clicked, we remove the item from the todoItems array.
We then call renderTodoItems() to show the updated list of todo items on the page. */
    document.querySelectorAll('.delete-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoItems.splice(index, 1)
        renderTodoItems()
      })
    })
/* Show todos are complete */
    document.querySelectorAll('.complete-button').forEach((completeButton, index) => {
      completeButton.addEventListener('click', () => {
        // Fetch todo
        const item = todoItems[index]
  
        // Remove from todoItems
        todoItems.splice(index, 1)
  
        // Add to Completed Items
        completedItems.push({
          name: item.name,
          dueDate: item.dueDate
        })
  
        renderTodoItems()
        renderCompletedItems()
      })
    })
  }
  
  // Show completed items on the page
  const renderCompletedItems = () => {
    let completedHTML = ''
  
    completedItems.forEach((item, index) => {
      const itemHTML = `
        <strike>${item.name}</strike>
        <strike>${item.dueDate}</strike>
      `
  
      completedHTML += itemHTML
    })
  
    document.querySelector('.completed-items').innerHTML = completedHTML
  }
  
  document.querySelector('.create-button').addEventListener('click', () => {
    createTodo()
  })
  
  // Create a Todo item
  const createTodo = () => {
    const todoInput = document.querySelector('.todo-input')
    const dueDateInput = document.querySelector('.due-date-input')
  
    todoItems.push({
      name: todoInput.value,
      dueDate: dueDateInput.value
    })
  
    todoInput.value = ''
    dueDateInput.value = ''
  
    renderTodoItems()
  }
  