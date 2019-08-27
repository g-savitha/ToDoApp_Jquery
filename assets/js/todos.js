// Check off specific todos by clicking
//when an li is clicked inside of ul, this code runs.
$('ul').on("click", "li", function () {
    $(this).toggleClass("completed");
});
//click on x to delete todo
$('ul').on("click", "span", function (event) {
    // $(this).remove(); only span goes away if you do this, to remove li(parent of span), use parent()
    $(this /*this refers to span here*/ ).parent().fadeOut(1000, function () {
        $(this /*this refers to li here*/ ).remove();
    })
    event.stopPropogation();
});
//create a todo when user hits enter and at the end of list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grab todo text from input
        var todoTxt = $(this).val();
        $(this).val(""); // gives an empty input when new todo is added
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTxt + "</li>")

    }
})

$("#plus").click(function () {
    $("input[type='text']").fadeToggle();
})