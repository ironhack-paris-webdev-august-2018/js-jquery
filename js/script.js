$("h1").click(function () {
  $("h1:even").css({
    backgroundColor: "deeppink",
    border: "2px solid",
    borderRadius: "2px"
  });

  $("h1:odd").css({
    backgroundColor: "black",
    color: "orange"
  });
});


$(".guess-button").click(function () {
  // generate random number 0-9
  var randomNumber = Math.floor(Math.random() * 10);

  // get the user's guess (convert into number)
  // ".val()" is the jQuery version of ".value"
  var userGuess = Number($("input").val());

  if (userGuess === randomNumber) {
    // change to winning image
    $("img").attr("src", "https://i.giphy.com/media/l0HUnQR733uhm48UM/giphy.webp");
  }
  else {
    // change to losing image
    $("img").attr("src", "https://i.giphy.com/media/YqRtUzefAA4Qo/giphy.webp");
  }
});


// -----------------------------------------------------------------------------


$(".song-list > li").click(function () {
  // "this" is the DOM element of the tag that was just clicked
  // (doesn't have jQuery methods)
  var clickedLi = this;

  // apply the styling to ONLY the DOM element that was just clicked
  // (use $ to convert the DOM object to a jQuery object to use ".addClass()")
  if ($(clickedLi).hasClass("playing")) {
    $(clickedLi).removeClass("playing");
  }
  else {
    // remove the styling from all the previously playing songs
    $(".song-list > li").removeClass("playing");

    $(clickedLi).addClass("playing");
  }
});

$(".add-song").click(function () {
  // get the user's song info from the input tags
  var title = $(".title-input").val();
  var artist = $(".artist-input").val();

  // create the new <li> tag with its contents
  var newLi =
    $("<li><b>" + title + "</b> by " + artist + " <button>Delete</button></li>");

  // find the descendant <button> tag we just created and add the click
  newLi.find("button").click(function () {
    var deleteBtn = this;

    // find the closest ancestor <li> and remove it
    // (works in more situations than ".parent()")
    $(deleteBtn).closest("li").remove();
  });

  // add the new <li> to the existing DOM
  $(".song-list").append(newLi);

  // clear the user text (set to empty string)
  $(".title-input").val("");
  $(".artist-input").val("");
});

$(".song-list button").click(function () {
  var deleteBtn = this;

  // find the closest ancestor <li> and remove it
  // (works in more situations than ".parent()")
  $(deleteBtn).closest("li").remove();
});


// -----------------------------------------------------------------------------


$(".heart").click(function () {
  // "this" is the DOM element of the tag that was just clicked
  // (doesn't have jQuery methods)
  var clickedHeart = this;

  // use $ to convert the DOM object to a jQuery object to use ".addClass()"

  // Make the clicked heart red
  $(clickedHeart).addClass("red");
  // Make the hearts to the left red
  $(clickedHeart).prevAll().addClass("red");
  // Make the hearts to the right grey again
  $(clickedHeart).nextAll().removeClass("red");
});


// -----------------------------------------------------------------------------


$(".waits-title").click(function () {
  // intelligently does a fade in or a fade out
  $("section").fadeToggle(2000);
  // .slideToggle() and .toggle() are also options
});

$(document).keyup(function (event) {
  switch (event.keyCode) {
    case 37:  // left arrow
      $(".tom-img").css({ transform: "rotateY(180deg)" });
      break;

    case 38: // up arrow
      $(".tom-img").css({ transform: "rotateZ(-90deg)" });
      break;

    case 39: // right arrow
      $(".tom-img").css({ transform: "rotateY(0deg)" });
      break;

    case 40: // down arrow
      $(".tom-img").css({ transform: "rotateZ(90deg)" });
      break;
  }
});
