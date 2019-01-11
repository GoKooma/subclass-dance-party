var Ryan = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("ryan");
}

Ryan.prototype = Object.create(Dancer.prototype);
Ryan.prototype.constructor = Ryan;

Ryan.prototype.step = function() {
  Dancer.prototype.step.call(this);
}