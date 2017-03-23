var scene = d3.select('a-scene');

var up = false;

setInterval(function(){
  console.log("Hello");
  up ? moveUp() : moveDown();
  up = !up;
}, 1000);

function moveUp() {
  d3.select("a-sphere")
      .transition()
      .duration(1000)
      .attrTween("position", function() {
        return d3.interpolate("0 0 0", "2 4 0");
      });
}

function moveDown() {
  d3.select("a-sphere")
      .transition()
      .duration(1000)
      .attrTween("position", function() {
        return d3.interpolate("2 4 0", "0 0 0");
      });
}
