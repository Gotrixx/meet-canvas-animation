// hepl-mmi/meet-canvas-animation - utils - ES2015 version

( function() {

    window.isCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

} )();
