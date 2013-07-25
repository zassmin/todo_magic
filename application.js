$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    console.log("before on click");
    // add todo
    $(".add").on('click', function(e) {
      e.preventDefault();
      $('.todo_list').append(buildTodo($('.todo').val()));
    });
     
    // delete item
    $(document).on('click', ".delete", function(e) {
      e.preventDefault();  
      $(this).closest('.todo').remove();
    }); 
    
    // complete a task!
    $(document).on('click', '.complete', function(e) {
      e.preventDefault();
      $(this).replaceWith("done");
    });
  };  
  
  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  
  bindEvents();
});
