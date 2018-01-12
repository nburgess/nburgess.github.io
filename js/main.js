var sd = Snap.select('#scroll_down');
// sd.attr('fill', 'red');
function moveDown (){
  sd.animate(
    {transform: 't0,20' },1800, function(){
      sd.animate({transform: '20,0' },2000);
    }
  );
}
moveDown();
setInterval(moveDown, 3800);

//eye
var s = Snap('#eye');
s.attr({viewBox: "0 0 500 500"});
var circle_1 = s.circle(300, 200, 140);
var circle_2 = s.circle(250, 200, 140);
var circle_3 = s.circle(280, 200, 50);
//var circle_1 = s.circle(250,200,90);
//var circle_2 = s.circle(250,200,90);

// Group circles together

var circles = s.group(circle_1, circle_2, circle_3);

var ellipse = s.ellipse(275, 220, 170, 90);

// Add fill color and opacity to circle and apply
// the mask
circles.attr({
  fill: 'black',
  fillOpacity: .4,
  mask: ellipse
});

ellipse.attr({
  fill: '#fff',
  opacity: .8,
  stroke: '#000',
  strokeWidth: 7,
});

// Create a blink effect by modifying the rx value
// for ellipse from 90px to 1px and backwards

function blink(){
  ellipse.animate({ry:1}, 220, function(){
    ellipse.animate({ry: 90}, 300);
  });
};

function roll(){
  circle_3.animate(
    {transform: 't0,20' },5000, function(){
      circle_3.animate({transform: '20,0' },1800);
      //mina.easin
    }
  );
};
// Recall blink method once every 3 seconds
setInterval(roll, 8000);
setInterval(blink, 3000);





//computer
  var scroll = Snap('#scroll');
    //var myPath = scroll.path("M111.932,114.015h-96c-1.104,0-2-0.896-2-2s0.896-2,2-2h96c1.104,0,2,0.896,2,2S113.036,114.015,111.932,114.015z")
  //<path stroke="#000" fill="none" stroke-width="3" stroke-opacity="null" fill-opacity="null" d="m98.3815,25.84056l-69.61261,0.15944" id="svg_6" stroke-linejoin="undefined" stroke-linecap="undefined"/>
    var myPath = scroll.select("#line1");
    var myPath2 = scroll.select("#line2");
    var myPath3 = scroll.select("#line3");

    /*var myPath2 = scroll.path("m25,35+40,0").attr({
      id: "squiggle2",
      fill: "none",
      strokeWidth: "4",
      stroke: "#ffffff",
      strokeMiterLimit: "10",
      strokeDasharray: "9 9",
      strokeDashOffset: "988.01"
    });*/
    var paths = [myPath,myPath2,myPath3];
    var counter = 0;
    var lineOut = function (path){
      if(counter<3){
        console.log(path);
        counter+=1;
        var pathLength = path.getTotalLength();
        path.attr({
      	  stroke: '#000',
      	  strokeWidth: 4,
          fill: 'none',
          // Draw Path
          "stroke-dasharray": pathLength + " " + pathLength,
          "stroke-dashoffset": pathLength
        }).stop().animate({"stroke-dashoffset": 10}, 2500,mina.easeinout, lineOut(paths[counter]));
      }
    };
    lineOut(myPath);
