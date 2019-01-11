var Apeach = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img src="/Users/kooma/Desktop/HackReactor/hrla27-subclass-dance-party/img/johnny.jpg">');
  // this.$node.css('border', '30px');
  this.$node.addClass("apeach");
}

Apeach.prototype = Object.create(Dancer.prototype);
Apeach.prototype.constructor = Apeach;

Apeach.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  this.$node.toggle();
}