





$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "Tired"){
         tiredMood();
        
    } else if(input==="Sad"){
        sadMood();
        
    }else if(input==="Fear"){
        fearMood();
        
    }else if(input==="Hungry"){
        hungryMood();
        
    }else{
     alert("Please enter Tired, Sad, Fear, or Hungry!");   
}
});
    function tiredMood(){
    changeBackground("https://www.lifeplanlabs.com/wp-content/uploads/AdobeStock_166152994.jpeg");
    changeTextColor("red");
    displayImage("http://www.industrialpersonnel.co.uk/wp-content/uploads/2017/10/tired.jpg");
    }
    

    function sadMood(){
    changeBackground("https://i.ytimg.com/vi/pgN-vvVVxMA/maxresdefault.jpg");
    changeTextColor("blue");
    displayImage("https://i.pinimg.com/736x/32/09/71/32097198cc74074d5676c75c7fa32368.jpg");
    }
    
    
    function fearMood(){
    changeBackground("https://www.cpomagazine.com/wp-content/uploads/2018/10/more-to-fear-than-fear-itself-online-threats-and-what-you-can-do-about-them_1500.jpg");
    changeTextColor("green");
    displayImage("https://cdn.mindful.org/fear_Large-HP.jpg?q=80&fm=jpg&fit=crop&w=1400&h=875");
    }
    
    function hungryMood(){
    changeBackground("https://i.dietdoctor.com/wp-content/uploads/2017/01/GettyImages-108203450.jpg?auto=compress%2Cformat&w=800&h=557&fit=crop");
    changeTextColor("purple");
    displayImage("https://assets3.thrillist.com/v1/image/2767816/size/sk-2017_04_article_main_mobile.jpg");
    }
    
    
    
    function changeBackground(BackgroundImage){
        $('body').css('background-image', "url("+BackgroundImage+")");
}
    
    function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}


    
    
    
    
