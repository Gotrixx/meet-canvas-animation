// hepl-mmi/meet-canvas-animation - Bubble

( function() {

    "use strict";

    var Bubble;

    Bubble = function( oApp ) {
        var iRed, iGreen, iBlue, iAlpha;

        this.app = oApp;
        this.x = ~~( Math.random() * oApp.width );
        this.y = ~~( Math.random() * oApp.height );
        this.radius = ~~( Math.random() * 20 ) + 10;
        this.speed = ~~( this.radius / 3 );

        iRed = ~~( Math.random() * 50 );
        iGreen = ~~( Math.random() * 50 ) + 128;
        iBlue = ~~( Math.random() * 127 ) + 128;
        iAlpha = this.radius / 30;
        this.color = "rgba( " + iRed + ", " + iGreen + ", " + iBlue + ", " + iAlpha + " )";
    };

    Bubble.prototype.update = function() {
        if ( this.y < ( this.radius * -1 ) ) {
            this.y = this.app.height + this.radius;
            this.x = ~~( Math.random() * this.app.width );
        }
        this.y -= this.speed;
        this.draw();
    };

    Bubble.prototype.draw = function() {
        var oContext = this.app.context;

        oContext.beginPath();
        oContext.fillStyle = this.color;
        oContext.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
        oContext.closePath();
        oContext.fill();
    };

    window.Bubble = Bubble;

} )();
