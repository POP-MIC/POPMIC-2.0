window.onload = function(){
    var img = document.getElementById("mouthclose");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio('um.mp3');

    // mouse click
    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'mouthopen.png';
        audio.play();
    });
    
    img.addEventListener('mouseup', function(){
        img.src = 'mouthclose.png';
        audio.play();
    });

    // finger click
    img.addEventListener('touchstart', function(){
    increaseScore();
        img.src = 'mouthopen.png';
        audio.play();
    });

    img.addEventListener('touchmove', function(){
        img.src = 'mouthclose.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score
    }
}