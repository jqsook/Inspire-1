# Requirements:

<!-- Completed -->
<!-- A clock shows the accurate time in the middle of the screen and updates appropriately == I moved to nav bar for looks -->

# Quote:

Quote always displayed and Author reveals on hover
Image: The image is required, however the additional data is optional
Weather: The temp is displayed in Fahrenheit/Celsius with a click toggling between

<!-- There is a built in function to get the actual time it was in one of our projects -->

# Todo:

Todo's are shown on the page including a count of remaining tasks to complete
The image should be on large display with at least one other element positioned over the top of the image.
When adding a Todo the page does not reload
Completed Todo's checkbox remains checked on reload (hint: checked attribute)
Todo's can be added to a list (POST)
Todo's can be removed (DELETE)
Todo's can be marked complete (PUT)
The data in the Todos persists on reload

# Stretch Goals:

Allow the user to set their name and have it save to localStorage
Change the message from Good Morning to Good Afternoon, Evening as appropriate
Allow the user to toggle the clock from, 12hr to 24hr
Include an Icon to show what the weather is sunny/cloudy/rainy hint look at the weather data
Add a button to cycle to next quote/picture
Add a settings so user can change to a new 'theme' (font, background colors, etc.)
Clicking the weather should let the user toggle between Celsius, Fahrenheit, or even Kelvin display
If you think through some of the actions being performed you might find a way to optimize the list by only updating the one todo that changes at a time
Everytime you update a todo you shouldn't have to re-get the entire list you already know what changed about the one todo

# Goals

In this project students will demonstrate their ability to build a robust application requiring multiple asynchronous calls to retrieve several types of data. They will demonstrate a proficiency utilizing multiple services and controllers to handle different aspects of data all rendered to the same document. In addition they will be responsible for implementing the observer pattern and utilizing subscribers to handle the asynchronistic aspects of this challenge.

# The Setup

Step 1
Your goal will be to put all of the data gathered from the endpoints together in a visually pleasing format as well as ensuring the functionality of a todo list. As you build each of these controllers think about where you are going to put that data, and how you want to render to your screen.

Feel free to use the image above for inspiration.

The only service that requires more than a .get will be your TodoService.

Think about the subscriber functions that each controller will need, so the appropriate data can be rendered to the page at the appropriate time.

Step 2
The todolist is perhaps one of the most important features of this application. You will need to provide the user with a single todo list. The todo list must allow the user to add a task, remove a task, and toggle a task's status.

The TodoService & Controller will likely take most of your time.

Check out the API documentation below for more information on how your todo service will interact with the API.

Step 3
The positioning of elements on the page is not the absolute most crucial thing for this application however it does need to have few things to make the grade. Use the picture above as an idea for laying out your site.

# At least one of the features must overlay the image.

The Back-End (API)
In this project you will be expected to communicate with the following endpoints. With the exception of todos all of these endpoints will only respond to GET requests. It will be up to you to look at the data from these endpoints to determine your models for dealing with the data.

baseURL = https://bcw-sandbox.herokuapp.com/api/
weather
quotes
images
YOURNAME/todos
Todos (/YOURNAME/todos)
The todos portion of this project is the largest and will probably take the most amount of time to complete. Your todo list will communicate with the server using the following methods. The server will only respond to valid requests using the appropriate method.

HTTP methods
GET
POST
PUT
DELETE
Todo model
{
//the server will create these properties for you

# id: {type: String, required: true, unique: true }

completed: { type: Boolean, required: true, default: false},
user: { type: String, required: true },
//You will need to provide a description
description: { type: String, required: true},
}
Post Request Method
Create Todo
/YOURNAME/todos
new todo object as data for request
Get Request Method
Get One Todo not required to use
/YOURNAME/todos/:todoId
Get Entire Todo List
Get All Todos by User
/YOURNAME/todos
Put Request Method
Edit Todo at id
/YOURNAME/todos/:todoId
edited todo object as data for request
Delete Request Method
Delete Todo by id
/YOURNAME/todos/:todoId

 <div class="container-fluid ">
       <div class="row justify-content-end">
          <div class="col-4">
            <div class="list-group">
              <label class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="">
    Breakfast- Most important meal of the day
              </label>
      <label class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="">
    Replicant:
              </label>
    <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Replicant:
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Replicant:
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Replicant:
  </label>
</div>
</div>
</div>
</div>
