// hepl-mmi/meet-canvas-animation - exo-two - ES2015 version

( function( CanvApp ) {

    let oApp;

    class MyCanvApp extends CanvApp {
        setup() {
            let oImage = new Image(),
                $RangeInput;

            oImage.addEventListener( "load", () => {
                this.image = oImage;
                this.time.start = Date.now();
                this.animate();
            } );
            oImage.src = this.sprite.src;

            ( $RangeInput = document.getElementById( "animation-speed" ) ).addEventListener( "change", () => {
                this.currentSpeed = $RangeInput.value;
                $RangeInput.parentNode.querySelector( "strong" ).innerHTML = `${ ~~( 1000 / $RangeInput.value ) } i/s`;
            } );
        }

        animate() {
            this.time.current = Date.now();
            this.context.clearRect( 0, 0, this.width, this.height );
            this.context.drawImage( this.image, this.sprite.steps[ oApp.currentStep ].x, this.sprite.steps[ oApp.currentStep ].y, this.sprite.width, this.sprite.height, ( this.width - this.sprite.width ) / 2, ( this.height - this.sprite.height ) / 2, this.sprite.width, this.sprite.height );
            if ( this.time.current - this.time.start > oApp.currentSpeed ) {
                this.time.start = Date.now();
                ( ++this.currentStep < this.sprite.steps.length ) || ( this.currentStep = 0 );
            }
            window.requestAnimationFrame( this.animate.bind( this ) );
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );
    oApp.time = {
        "start": null,
        "current": null,
    };
    oApp.sprite = {
        "src": "../_shared/ramonaflowers.png",
        "width": 125,
        "height": 157,
        "steps": [
            { "x": 0, "y": 0 },
            { "x": 125, "y": 0 },
            { "x": 250, "y": 0 },
            { "x": 375, "y": 0 },
            { "x": 500, "y": 0 },
            { "x": 625, "y": 0 },
            { "x": 750, "y": 0 },
            { "x": 875, "y": 0 },
        ],
    };
    oApp.currentStep = 0;
    oApp.currentSpeed = 50;

    oApp.setup();

} )( window.CanvApp );
