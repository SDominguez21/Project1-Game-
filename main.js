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
          $("span#counter").html((score += 1));
          console.log(score);
          alert("score:" + score);
          $(ui.draggable).hide();
        } else {
          alert("wrong!");
        }
      }
    });

    $(".well-target").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("cup"));
        if (ui.draggable.hasClass("cup")) {
          alert("A cup!");
          $("span#counter").html((score += 1));
          console.log(score);
          alert("score:" + score);
          $(ui.draggable).hide();
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
          $("span#counter").html((score += 1));
          console.log(score);
          alert("score:" + score);
          $(ui.draggable).hide();
        } else {
          alert("wrong!");
        }
      }
    });

    $(".woods-target").droppable({
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("wand"));
        if (ui.draggable.hasClass("wand")) {
          alert("clubbin!");
          $("span#counter").html((score += 1));
          console.log(score);
          alert("score:" + score);
          $(ui.draggable).hide();
        } else {
          alert("wrong!");
        }
      }
    });
  });
});

function handleDropEvent(event, ui) {
  console.log("papooga");
  var draggable = ui.draggable;
  alert('The icon "' + draggable.attr("id") + '" was dropped onto me!');
}
