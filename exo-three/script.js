"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (CanvApp) {

    var oApp = void 0;

    var MyCanvApp = function (_CanvApp) {
        _inherits(MyCanvApp, _CanvApp);

        function MyCanvApp() {
            _classCallCheck(this, MyCanvApp);

            return _possibleConstructorReturn(this, (MyCanvApp.__proto__ || Object.getPrototypeOf(MyCanvApp)).apply(this, arguments));
        }

        _createClass(MyCanvApp, [{
            key: "prepare",
            value: function prepare() {
                this.bubble = {
                    "x": ~~(this.width / 2),
                    "y": ~~(this.height / 5),
                    "radius": 25,
                    "speed": 5
                };
                this.draw();
                this.animate();
            }
        }, {
            key: "draw",
            value: function draw() {
                var oContext = this.context,
                    oBubble = this.bubble;

                oContext.clearRect(0, 0, this.width, this.height);

                oContext.beginPath();
                oContext.fillStyle = "#c30";
                oContext.arc(oBubble.x, oBubble.y, oBubble.radius, 0, Math.PI * 2, true);
                oContext.closePath();
                oContext.fill();
            }
        }, {
            key: "animate",
            value: function animate() {
                var oBubble = this.bubble;

                if (oBubble.y < oBubble.radius * -1) {
                    oBubble.y = this.height + oBubble.radius;
                    oBubble.x = ~~(Math.random() * this.width);
                }
                oBubble.y -= oBubble.speed;
                this.draw();
                window.requestAnimationFrame(this.animate.bind(this));
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");

    oApp.prepare();
})(window.CanvApp);
