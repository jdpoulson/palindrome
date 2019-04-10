$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val()
    var word = input.split(" ").join("").split("")
    var arrayone = word
    var arraytwo = input.split(" ").join("").split("").reverse()
    var wordlength = input.length;
    var counter = 0
    for (var x = 0; x < input.length; x++) {
      if (arrayone[x] === arraytwo[x]) {
        counter++;
      };
    };
    if (wordlength === counter) {
      $("#mypalindrome").show();
      $("#not").hide();
    } else {
      $("#not").show();
      $("#mypalindrome").hide();
    };
  });
});
