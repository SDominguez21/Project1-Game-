$(document).ready(function() {
  console.log("cool");
  let score = 0;

  // drop and drag function with targets and what they accept

  $(function() {
    $(".draggable").draggable();
    $(".floating-castle").droppable({
      drop: function(event, ui) {
        if (ui.draggable.hasClass("sword")) {
          console.log(ui.draggable.hasClass("sword"));
          alert("Yes, sword!");
          score += 1;
          console.log(score);
          alert("score:" + score);
        }
      }
    });

    $(".well-target").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("cup"));
        if (ui.draggable.hasClass("cup")) {
          alert("A cup!");
          score += 1;
          console.log(score);
          alert("score:" + score);
        } else {
          alert("wrong!");
        }
      }
    });

    $(".treasure-target").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("coin"));
        if (ui.draggable.hasClass("coin")) {
          alert("hurray, a coin!");
          score += 1;
          console.log(score);
          alert("score:" + score);
        }
      }
    });

    $(".woods-target").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("wand"));
        if (ui.draggable.hasClass("wand")) {
          alert("clubbin!");
          score += 1;
          console.log(score);
          alert("score:" + score);
        }
      }
    });
  });

  function handleDropEvent(event, ui) {
    console.log("papooga");
    var draggable = ui.draggable;
    alert('The icon "' + draggable.attr("id") + '" was dropped onto me!');
  }
}); //end

// handleDropEvent();
