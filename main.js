$(document).ready(function() {
  console.log("cool");
  // // TITLE PAGE
  // window.addEventListener("keyup", ev => {
  //   if (ev.keyCode === 38) {
  //     document.body.innerHTML = "*"
  //   }
  // });
  let score = 0;
  let audio = $("audio")[0];
  audio.play();

  $(function() {
    $(".draggable").draggable();
    $(".floating-castle").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("sword"));
        if (ui.draggable.hasClass("sword")) {
          alert("Yes, sword!");
          score += 1;
          console.log(score);
        }
        // if (ui.draggable.hasClass("")) {
      }
    });

    // $(".well-target").droppable({
    //   drop: function(event, ui) {
    //     console.log(ui.draggable.hasClass("well"));
    //     if (ui.draggable.hasClass("well")) {
    //       alert("Yes, sword!");
    //       score += 1;
    //       console.log(score);
    //     }
    //     // if (ui.draggable.hasClass("")) {

    //   }
    // });
  });

  function handleDropEvent(event, ui) {
    console.log("papooga");
    var draggable = ui.draggable;
    alert('The icon "' + draggable.attr("id") + '" was dropped onto me!');

    // if(draggable is )
  }

  // $(function dropEvent() {
  //   $(".d");
  // });
}); //end

// handleDropEvent();
