var DancerJohnnyBravo = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="johnnyBravo"></span>');
}

starDancer.prototype = Object.create(Dancer.prototype);
starDancer.prototype.constructor = starDancer;

DancerJohnnyBravo.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // this.$node.click(function() {
    //     this.$node.animate({
    //         rotateY: "+=" + (Math.PI) / 2
    //     }, 500, function() {
    //         this.$node.toggleClass('flipped');
    //     }).animate({
    //         rotateY: "+=" + (Math.PI) / 2
    //     }, 500);
    // });
    this.$node.toggle();
}