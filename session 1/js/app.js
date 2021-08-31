function createTodo(){
    console.log("Button Clicked");

    let text = $("#txtTodo").val(); //.val will read the text/val from the controls.
    
    let syntax = `
    <div class='todo-item'>
        <h5>${text}</h5>
        <button class='btn btn-sm btn-danger'>Remove</button>
    </div>`;

    $("#todoContainer").append(syntax);
    // clear input field
    $("#txtTodo").val('');
    $("#txtTodo").focus();//reset input field.
}

function deleteTodo() {
    console.log("delete press");
    $(this).parent().remove();
}
// init function is used to load previous data - hook events.
function init(){
   console.log("Todo app");

    // jquery
    $("#btnSave").click(createTodo);  

    $("#todoContainer").on('click', ".btn-danger", deleteTodo);

    $("#txtTodo").keypress(function(args) { //args is commonly used to refer to what key is pressed.
        if(args.key === "Enter"){
            createTodo();
        }
    });

}

// plain js
// document.getElementById("btnSave").click = save;

window.onload = init;