// hepl-mmi/meet-canvas-animation - exo-three - ES2015 version

( function( CanvApp ) {

    let oApp;

    class MyCanvApp extends CanvApp {
        prepare() {
            this.bubble = {
                "x": ~~( this.width / 2 ),
                "y": ~~( this.height / 5 ),
                "radius": 25,
                "speed": 5,
            };
            this.draw();
            this.animate();
        }

        draw() {
            let oContext = this.context,
                oBubble = this.bubble;

            oContext.clearRect( 0, 0, this.width, this.height );

            oContext.beginPath();
            oContext.fillStyle = "#c30";
            oContext.arc( oBubble.x, oBubble.y, oBubble.radius, 0, Math.PI * 2, true );
            oContext.closePath();
            oContext.fill();
        }

        animate() {
            let oBubble = this.bubble;

            if ( oBubble.y < ( oBubble.radius * -1 ) ) {
                oBubble.y = this.height + oBubble.radius;
                oBubble.x = ~~( Math.random() * this.width );
            }
            oBubble.y -= oBubble.speed;
            this.draw();
            window.requestAnimationFrame( this.animate.bind( this ) );
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.prepare();

} )( window.CanvApp );
