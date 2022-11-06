$( document ).ready(function(){
    let search = $("#srchbtn");

    search.click(function() {
        $.get("http://localhost:8080/superheroes.php", function(srchresult){
            alert(srchresult);
        });
        console.log("You clicked search");
    })
});