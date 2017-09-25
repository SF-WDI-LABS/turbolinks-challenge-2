// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require_tree .

var page_view_count = {
  "home": 0,
  "goldenrod": 0,
  "lightcoral": 0,
  "lightseagreen": 0
};
document.addEventListener("turbolinks:load", function(e){
  var current_path = window.location.pathname.split('/')[1];
  if (current_path.length > 1) {
    $("body").css("background-color", current_path);
    page_view_count[current_path] += 1;
  } else {
    page_view_count["home"] += 1;
  }
    $("#home .view_count.badge").text(page_view_count["home"]);
    $("#lightcoral .view_count.badge").text(page_view_count["lightcoral"]);
    $("#lightseagreen .view_count.badge").text(page_view_count["lightseagreen"]);
    $("#goldenrod .view_count.badge").text(page_view_count["goldenrod"]);
});
