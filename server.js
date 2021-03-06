// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// our database is an array for now with some hardcoded values
var todos = [
  { _id: 1, task: 'Laundry', description: 'Wash clothes' },
  { _id: 2, task: 'Grocery Shopping', description: 'Buy dinner for this week' },
  { _id: 3, task: 'Homework', description: 'Make this app super awesome!' }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */

app.get('/api/todos/search', function search(req, res) {

  /* This endpoint responds with the search results from the
   * query in the request. COMPLETE THIS ENDPOINT LAST.
   */
});

app.get('/api/todos', function index(req, res) {
  res.json(200, { todos: todos});
  // var index= req.params.index;
  // res.send(todos[index]);
  /* This endpoint responds with all of the todos
   */
});

app.post('/api/todos', function create(req, res) {
  var newTask = req.body.task;
  var newDescription = req.body.description;
  var newId = todos.length+1;
  var newTaskObject = { _id: newId, task: newTask, description: newDescription};
  todos.push(newTaskObject);
  res.status(200).json(newTaskObject);
  // console.log('in the post', req);
  /* This endpoint will add a todo to our "database"
   * and respond with the newly created todo.
   */
});

app.get('/api/todos/:id', function show(req, res) {
    var todoId = parseInt(req.params.id);
    var theRightOne;
    todos.forEach(function getId(item){
      if(item._id === todoId){
        theRightOne = item;
      }
    });
      res.status(200).json(theRightOne);
});
  /* This endpoint will return a single todo with the
   * id specified in the route parameter (:id)
   */
   // parseInt turns string into integer
   // for loop::
   // var id = req.params.id;
   //     var theRightOne;
   //       for(var i= 0; i < todos.length; i++){
 //         if(todos[i]._id === id){
 //        theRightOne = todos[i];
 //      }
 // }


app.put('/api/todos/:id', function update(req, res) {
    var todoId = parseInt(req.params.id);
    // var todoUpdate = todos.(function(){
    //
    // });
    // res.status(200).json(todoUpdate);

  /* This endpoint will update a single todo with the
   * id specified in the route parameter (:id) and respond
   * with the newly updated todo.
   */

});

app.delete('/api/todos/:id', function destroy(req, res) {
  var todoId = parseInt(req.params.id);
  var todoDelete = todos.splice(function () {
    return todo._id == todoId;

  });
  res.status(200).json(todoDelete);
  /* This endpoint will delete a single todo with the
   * id specified in the route parameter (:id) and respond
   * with success.
   */
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});



// Todos API
//   GET /api/todos (index)
//     ✓ should respond with status 200 (74ms)
//     ✓ should respond with a JSON object
//     ✓ should respond with a JSON object containing a list of todos
//     ✓ todo objects should have properities: _id, description, task
//   GET /api/todos/:id (show)
//     ✓ should respond with status 200 - Success
//     ✓ should respond with JSON
//     ✓ should fetch one specific todo by _id
//   POST /api/todos (create)
//     ✓ should respond with status 200 - Success
//     ✓ should respond with JSON
//     ✓ should respond with the new todo object
//     ✓ should assign an _id to the new todo object
//     ✓ should increment the _id number by one each time a todo is created
//   DELETE /api/todos/:id (destroy)
//     ✓ should respond with 200 or 204 on success
//     1) should delete one specific todo from the list of todos
//   PUT /api/todos/:id (update)
//     2) "before all" hook
//   GET /api/todos/search (search)
//     3) "before all" hook
//
//
// 13 passing (297ms)
// 3 failing
