// hepl-mmi/meet-canvas-animation - exo-one - ES2015 version

( function( CanvApp ) {

    let oApp,
        aColorSequences = [
            [ "#ffffaa", "#aaffff", "#ffaaaa", "#aaffaa" ],
            [ "#aaffaa", "#ffffaa", "#aaffff", "#ffaaaa" ],
            [ "#ffaaaa", "#aaffaa", "#ffffaa", "#aaffff" ],
            [ "#aaffff", "#ffaaaa", "#aaffaa", "#ffffaa" ],
        ];

    class MyCanvApp extends CanvApp {
        setup() {
            this.animate();
        }

        animate() {
            let iCurrentSecond = ( new Date() ).getSeconds();

            this.drawRectangles( ...aColorSequences[ iCurrentSecond % 4 ] );

            window.requestAnimationFrame( this.animate.bind( this ) );
        }

        drawRectangles( sColorOne, sColorTwo, sColorThree, sColorFour ) {
            let oContext = this.context,
                iHalfWidth = this.width / 2,
                iHalfHeight = this.height / 2;

            oContext.fillStyle = sColorOne;
            oContext.fillRect( 0, 0, iHalfWidth, iHalfHeight );
            oContext.fillStyle = sColorTwo;
            oContext.fillRect( iHalfWidth, 0, iHalfWidth, iHalfHeight );
            oContext.fillStyle = sColorFour;
            oContext.fillRect( 0, iHalfHeight, iHalfWidth, iHalfHeight );
            oContext.fillStyle = sColorThree;
            oContext.fillRect( iHalfWidth, iHalfHeight, iHalfWidth, iHalfHeight );
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.drawRectangles( ...aColorSequences[ 0 ] );

    oApp.setup();

} )( window.CanvApp );
