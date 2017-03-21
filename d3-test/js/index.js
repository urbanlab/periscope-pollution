var scene = d3.select('a-scene');

scene.on("mouseover", moveUp);
scene.on("mouseout", moveDown);

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
        return d3.interpolate("0 0 0", "0 4 0");
      });
}

function moveDown() {
  d3.select("a-sphere")
      .transition()
      .duration(1000)
      .attrTween("position", function() {
        return d3.interpolate("0 4 0", "0 0 0");
      });
}
