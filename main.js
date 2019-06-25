$(document).ready(function() {
  // // TITLE PAGE
  // window.addEventListener("keyup", ev => {
  //   if (ev.keyCode === 38) {
  //     document.body.innerHTML = "*"
  //   }
  // });

  $(function() {
    $(".draggable").draggable();
    $(".droppable").droppable({
      drop: function(event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("p")
          .html("Dropped!");
      }
    });
  });
}); //end
