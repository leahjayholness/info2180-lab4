let button = document.getElementById("search-button");
button.addEventListener('click', function(){
    fetch ('http://localhost:8888/info2180-lab4/superheroes.php')
    .then (response => response.text())
    .then(data => {
        console.log(data)
        alert(data);
    })
    .catch(error => {
        console.log(error);
        alert('There was a problem with the request.');
    });
});