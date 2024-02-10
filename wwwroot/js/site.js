// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateButton').click(function () {
        // Get the value entered by the user
        var hours = parseFloat($('#hours').val());

        // Check if the entered value is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number for the hours.');
            return;
        }

        // Get the hourly rate
        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));

        // Calculate the total
        var total = hours * hourlyRate;

        // Display the total
        $('#total').val('$' + total.toFixed(2));
    });
});
