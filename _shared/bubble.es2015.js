// hepl-mmi/meet-canvas-animation - Bubble - ES2015 version

( function() {

    let aColors = [ "yellow", "hotpink", "red", "black", "orange", "lime", "blue" ];

    class Bubble {
        constructor( oApp, iStartX, iStartY, bForceColor ) {
            this.app = oApp;
            this.x = iStartX || ~~( Math.random() * oApp.width );
            this.y = iStartY || ~~( Math.random() * oApp.height );
            this.radius = ~~( Math.random() * 20 ) + 10;
            this.speed = ~~( this.radius / 3 );

            if ( bForceColor ) {
                this.color = aColors[ Math.floor( Math.random() * aColors.length ) ];
            } else {
                let iRed = ~~( Math.random() * 50 ),
                    iGreen = ~~( Math.random() * 50 ) + 128,
                    iBlue = ~~( Math.random() * 127 ) + 128,
                    iAlpha = this.radius / 30;

                this.color = `rgba( ${ iRed }, ${ iGreen }, ${ iBlue }, ${ iAlpha } )`;
            }
        }

        update() {
            if ( this.y < ( this.radius * -1 ) ) {
                this.y = this.app.height + this.radius;
                this.x = ~~( Math.random() * this.app.width );
            }
            this.y -= this.speed;
            this.draw();
        }

        draw() {
            let oContext = this.app.context;

            oContext.beginPath();
            oContext.fillStyle = this.color;
            oContext.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
            oContext.closePath();
            oContext.fill();
        }
    }

    window.Bubble = Bubble;

} )();
