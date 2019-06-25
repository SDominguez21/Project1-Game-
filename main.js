$(document).ready(function() {
  // // TITLE PAGE
  // window.addEventListener("keyup", ev => {
  //   if (ev.keyCode === 38) {
  //     document.body.innerHTML = "*"
  //   }
  // });

  // var audio = $("audio")[0];
  //     audio.play();

  $(function() {
    $(".draggable").draggable();
    $(".droppable").droppable({
      function(event, ui) {
        $(this).addClass("ui-state-highlight");
      }
    });
  });

  // function handleDropEvent( event, ui ) {
  //   var draggable = ui.draggable;
  //   alert( 'The icon "' + draggable.attr('id') + '" was dropped onto me!' );
  // }

  $(function dropEvent() {
    $(".d");
  });
}); //end
