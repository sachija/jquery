// que 1 create a button on clcik of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible
$("#but").click(function(){
    $("p").hide;

});
    $("#button1").click(function(){
        $("p").show;
    
    });
    


// que 2 Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page
$("#but").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type:"GET",
        success:function(data){
            console.log(data);
            document.getElementsByTagName("h2")[0].innerText=data.title;
        }

    })
})