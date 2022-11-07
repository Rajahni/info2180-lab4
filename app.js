$( document ).ready(function(){
    let search = $("#srchbtn");
    let searchResult = $("#srchresults");

    search.click(function() {
        let srchQuery = $("#srchbox").val().trim();
        $.get(`http://localhost:8080/superheroes.php?query=${srchQuery}`, function(srchresult){
            searchResult.html(srchresult);
        });
        console.log(srchQuery);
    })
});

