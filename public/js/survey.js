
$(document).ready(function(){
    $('select').formSelect();
  
       
    (function($){
        $(function(){
    
        $('.sidenav').sidenav();
        $('.parallax').parallax();
    
        }); // end of document ready
    })(jQuery); // end of jQuery name space

    $("#submit_survey").on("click",function(){

        $("#survey_section").hide();
        
        var test_data=[
            {"name":"Mary Martin","workouts":["Yoga"],"times":["morning"]},
            {"name":"Mike Michaels","workouts":["Yoga","Strength"],"times":["morning","evening"]},
            {"name":"Brett Cordes","workouts":["Strength"],"times":["evening"]}        
        ]
        build_friend_list(test_data)
        
        // var postdata={
        //     workoutTypes : $("#workout").val(),
        //     workoutTime:$("#workoutTime").val()
        // }
        // $.ajax({
        //     url:"api/findmybuddy",
        //     method:"POST",
        //     data:postdata
        // }).then(function(results){
        //     //buddy name, workoutTypes, workoutTimes
               // build_friend_list(results)
        // });

        
    });

    function build_friend_list(friends){
        var newdiv, divdata, parentDiv=document.getElementById("survey_results");
        friends.forEach(function(ele){
            divdata="";
            var newdiv = document.createElement("div");
            divdata+="<h2>"+ele.name+"</h2>"
            divdata+="<div style='margin:5px;font-size:20px;'>Workout Types: "+ele.workouts.join(", ")+"</div>";
            divdata+="<div style='margin:5px;font-size:20px;'>Workout Times: "+ele.times.join(", ")+"</div>";
            newdiv.innerHTML=divdata
            parentDiv.appendChild(newdiv);
        });
    }
});