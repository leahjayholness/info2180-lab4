$(document).ready(function() {
    var button = $('#nameSubmitBtn');
    button.on('click', function(element){
        element.preventDefault();
        var name = $('#name').val();
  
        $.ajax('http://localhost:8888/info2180-lab4/superheroes.php', {
            method: 'POST',
            data: {
            query: name
            }
        }).done(function(response) {
            var resp = response;
            console.log(resp);
            $('#result').html(resp);
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});
