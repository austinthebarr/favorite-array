$(function(){
  $("form#favorite").submit(function(event){
    var favoriteThing1 = $("#favorite-thing1").val()
    var favoriteThing2 = $("#favorite-thing2").val()
    var favoriteThing3 = $("#favorite-thing3").val()
    var favoriteThing4 = $("#favorite-thing4").val()

  var arr = [favoriteThing1, favoriteThing2, favoriteThing3, favoriteThing4];

  var newArr = [];
  newArr.push(arr[1], arr[0], arr[2]);

 //  $(".results1").text(newArr[0]);
 // $(".results2").text(newArr[1]);
 //  $(".results3").text(newArr[2]);
    $("ul").prepend("<li>" + arr + "</li>");
  //  $("li").first().text(arr);

  event.preventDefault();

    });

});
