"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

    var aColors = ["yellow", "hotpink", "red", "black", "orange", "lime", "blue"];

    var Bubble = function () {
        function Bubble(oApp, iStartX, iStartY, bForceColor) {
            _classCallCheck(this, Bubble);

            this.app = oApp;
            this.x = iStartX || ~~(Math.random() * oApp.width);
            this.y = iStartY || ~~(Math.random() * oApp.height);
            this.radius = ~~(Math.random() * 20) + 10;
            this.speed = ~~(this.radius / 3);

            if (bForceColor) {
                this.color = aColors[Math.floor(Math.random() * aColors.length)];
            } else {
                var iRed = ~~(Math.random() * 50),
                    iGreen = ~~(Math.random() * 50) + 128,
                    iBlue = ~~(Math.random() * 127) + 128,
                    iAlpha = this.radius / 30;

                this.color = "rgba( " + iRed + ", " + iGreen + ", " + iBlue + ", " + iAlpha + " )";
            }
        }

        _createClass(Bubble, [{
            key: "update",
            value: function update() {
                if (this.y < this.radius * -1) {
                    this.y = this.app.height + this.radius;
                    this.x = ~~(Math.random() * this.app.width);
                }
                this.y -= this.speed;
                this.draw();
            }
        }, {
            key: "draw",
            value: function draw() {
                var oContext = this.app.context;

                oContext.beginPath();
                oContext.fillStyle = this.color;
                oContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                oContext.closePath();
                oContext.fill();
            }
        }]);

        return Bubble;
    }();

    window.Bubble = Bubble;
})();
