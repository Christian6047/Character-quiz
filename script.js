$(".age-button").click(function() {
    let age = Number($(".age").val());
    
    if(age <= 0) {
        $(".character-result").text("you don't even exist yet");
    }
    else if(age <= 17) {
        $(".character-result").text("You are a baby");
    }
    else if(age <=29 ) {
        $(".character-result").text("You are young and healthy");
    }
    else if(age <= 69) {
        $(".Character result").text("You are a grandparent, you're old");
    }
    else if(age <= 100) {
        $(".character-result").text("Oh my, you are very old, Ancient");
    }
    
    else{
        $(".character-result").text("You are... prehistoric, you should be fossilized by now.");
    }


   
});