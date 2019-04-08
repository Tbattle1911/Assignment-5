$(document).ready(function() {
//   var xhr = $.get(
//     "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=CDZiYc0d5PBee4RaiaMofOQVd2bIC4ZK&limit=10"
//   );
//   xhr.done(function(response) {
//     console.log("success got data", response);
//   });

//   var gifs = response.data;

  const ballers = [
    "Michael Jordan",
    "Lebron James",
    "Kobe Bryant",
    "Shaquille Oneal",
    "Steph Curry",
    "Allen Iverson",
    "Kyrie Irving",
    "Kevin Durant",
    "Larry Bird",
    "Chris Paul"
  ];

  const buttonCreator = function(myArray) {
      
    for (let i = 0; i < myArray.length; i++) {
        $("#buttons").append(`<button id="btn-ballers">${myArray[i]}
        </button>`);
        };
    };

    buttonCreator(ballers);

    $("body").on("click","#btn-ballers", function(){
    $('#images').empty()
    const ballersName = this.innerText;
    const request = 
    `http://api.giphy.com/v1/gifs/search?q=${ballersName}&api_key=CDZiYc0d5PBee4RaiaMofOQVd2bIC4ZK&limit=10`;
    console.log(ballersName);
    
    $.get(request)
        .done(function(response) {
            console.log(response.data)
            response.data.forEach(item => {
                $('#images').append(`<div><img src =${item.images.fixed_height_small.url} data-still= ${item.images}/></div>`)
    });
    });
});
});
