$("#boxContainer").append(
    `<div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>
    <div class= "box"></div>`
    );
    $('.box').on('click', function(){
        $(this).toggleClass('darkMode')
    })