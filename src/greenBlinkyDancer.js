var greenBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer"></span>');
    
}

greenBlinkyDancer.prototype = Object.create(Dancer.prototype);
greenBlinkyDancer.prototype.constructor = greenBlinkyDancer;

greenBlinkyDancer.prototype.step = function() {
  this.$node.css("border", "10px solid green");
  Dancer.prototype.step.call(this);

  this.$node.toggle();
}