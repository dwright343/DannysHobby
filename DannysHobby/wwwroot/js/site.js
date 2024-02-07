// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#calcbtn").click(function ()
    {
    var hours = $("#hoursInput").val();
    var hourlyRate = parseFloat($("#hourlyRate").val().replace("$", ""));

    var total = hours * hourlyRate;
    $("#totalOutput").html("$" + total.toFixed(2));
    }
)