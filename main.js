$(document).ready(function() {
  // console.log("cool");
  let score = 0;
  let pointpic = "";
  let timer = 41;
  let coindrop = new Audio("./audio/coin.mp3");
  let branchsnap = new Audio("./audio/branch.mp3");
  let swordswoosh = new Audio("./audio/sword.mp3");
  let waterdrop = new Audio("./audio/water.mp3");
  let moonlightsonata = new Audio("./audio/beethoven.mp3");

  $(".draggable").hide();
  $("#speech-bubble").hide();

  // START BUTTON
  $("#start-btn").click(function() {
    // alert("yay!");
    $("#start-btn").hide();
    $(".draggable").show();
    $("#speech-bubble").show();
    moonlightsonata.play();
    timer--;
    $("#speech-bubble span").html(":" + timer);
    var interval = setInterval(function() {
      timer--;
      $("#speech-bubble span").html(":" + timer);
      if (timer == -1) {
        $(".draggable").draggable("destroy");
        clearInterval(interval);
        $("#speech-bubble span").html("GAME <br> OVER");
        $("#speech-bubble span").addClass("gameover");
      }
      if (score == 24) {
        $("#speech-bubble span").html("YOU <br> WIN!");
        $("#speech-bubble span").addClass("youwin");
        clearInterval(interval);
      }
    }, 1000);
  });

  $(function() {
    $(".draggable").draggable();

    $(".floating-castle").droppable({
      hoverClass: "highlight",
      drop: function(event, ui) {
        if (ui.draggable.hasClass("sword")) {
          swordswoosh.currentTime = 0;
          swordswoosh.play();
          // console.log(ui.draggable.hasClass("sword"));
          // alert("Yes, sword!");
          $("span#counter").html((score += 1));
          // console.log(score);
          // alert("score:" + score);
          $(ui.draggable).hide();
          pointpic += '<img src="./PNG/sword.png" class="pointpics"/>';
          $("#scorepics").html(pointpic);
        } else {
          // alert("wrong!");
        }
      }
    });

    $(".well-target").droppable({
      hoverClass: "highlight",
      drop: function(event, ui) {
        if (ui.draggable.hasClass("cup")) {
          waterdrop.currentTime = 0;
          waterdrop.play();
          // console.log(ui.draggable.hasClass("cup"));
          // alert("A cup!");
          $("span#counter").html((score += 1));
          // console.log(score);
          // alert("score:" + score);
          $(ui.draggable).hide();
          pointpic += '<img src="./PNG/cup.png" class="pointpics"/>';
          $("#scorepics").html(pointpic);
        } else {
          // alert("wrong!");
        }
      }
    });

    $(".treasure-target").droppable({
      hoverClass: "highlight",
      drop: function(event, ui) {
        // console.log(ui.draggable.hasClass("coin"));
        if (ui.draggable.hasClass("coin")) {
          coindrop.currentTime = 0;
          coindrop.play();
          // alert("hurray, a coin!");
          $("span#counter").html((score += 1));
          console.log(score);
          // alert("score:" + score);
          $(ui.draggable).hide();
          pointpic += '<img src="./PNG/coin.png" class="pointpics"/>';
          $("#scorepics").html(pointpic);
        } else {
          // alert("wrong!");
        }
      }
    });

    $(".woods-target").droppable({
      hoverClass: "highlight",
      drop: function(event, ui) {
        console.log(ui.draggable.hasClass("wand"));
        if (ui.draggable.hasClass("wand")) {
          branchsnap.currentTime = 0;
          branchsnap.play();
          // alert("clubbin!");
          $("span#counter").html((score += 1));
          console.log(score);
          // alert("score:" + score);
          $(ui.draggable).hide();
          pointpic += '<img src="./PNG/wand.png" class="pointpics"/>';
          $("#scorepics").html(pointpic);
        } else {
          // alert("wrong!");
        }
      }
    });
  });
});

function handleDropEvent(event, ui) {
  // console.log("hi!");
  var draggable = ui.draggable;
  alert('The icon "' + draggable.attr("id") + '" was dropped onto me!');
}
