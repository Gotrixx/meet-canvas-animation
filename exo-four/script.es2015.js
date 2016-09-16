// hepl-mmi/meet-canvas-animation - exo-four - ES2015 version

( function( CanvApp, Bubble ) {

    let oApp,
        iBubbleCount = 50;

    class MyCanvApp extends CanvApp {
        prepare() {
            this.bubbles = [];
            while ( iBubbleCount-- ) {
                this.bubbles.push( new Bubble( this ) );
            }
            this.animate();

            this.canvas.addEventListener( "click", ( oEvent ) => {
                let iPositionX = oEvent.offsetX,
                    iPositionY = oEvent.offsetY;

                this.bubbles.push( new Bubble( this, iPositionX, iPositionY, true ) );
            } );
        }

        animate() {
            this.context.clearRect( 0, 0, this.width, this.height );
            this.bubbles.map( ( oBubble ) => oBubble.update() );
            window.requestAnimationFrame( this.animate.bind( this ) );
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.prepare();

} )( window.CanvApp, window.Bubble );
