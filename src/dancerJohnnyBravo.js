var DancerJohnnyBravo = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;

  this.$node.addClass("johnnyBravo");
}

DancerJohnnyBravo.prototype = Object.create(Dancer.prototype);
DancerJohnnyBravo.prototype.constructor = DancerJohnnyBravo;

DancerJohnnyBravo.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.left += 20;
  let styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
  
  this.$node.toggleClass("flipped");
}