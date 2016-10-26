$().ready(function () {
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?",
    success: function (data){
      var post = data.shift();
      $("#output").html(post.content + "&mdash; " + post.title);
    },
    cache: false
  });
  
  $("#another-quote-button").on("click", function (e){
    e.preventDefault();
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?",
      success: function (data){
        var post = data.shift();
        $("#output").html(post.content + "&mdash; " + post.title);
      },
      cache: false
    });
  });
  
  twttr.widgets.load(
    document.getElementById("tweet-me-button")
  );
  
  $("#tweet-me-button").on("click", function () {
    var qText = $("#output").text();
    var href = "https://twitter.com/intent/tweet";
    href += "?hashtags=FreeCodeCamp&text=" + qText;
    $("#tweet-me-button").attr("href", href);
  });
  
});