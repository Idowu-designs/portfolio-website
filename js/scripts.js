// Function for Alert box
alert("Welcome to my World of Design!");
console.log("Welcome to my World of Design!");

// Hover Function for Project
$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
    });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
    });
});
