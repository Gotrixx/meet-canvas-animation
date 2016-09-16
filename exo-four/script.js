"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (CanvApp, Bubble) {

    var oApp = void 0,
        iBubbleCount = 50;

    var MyCanvApp = function (_CanvApp) {
        _inherits(MyCanvApp, _CanvApp);

        function MyCanvApp() {
            _classCallCheck(this, MyCanvApp);

            return _possibleConstructorReturn(this, (MyCanvApp.__proto__ || Object.getPrototypeOf(MyCanvApp)).apply(this, arguments));
        }

        _createClass(MyCanvApp, [{
            key: "prepare",
            value: function prepare() {
                var _this2 = this;

                this.bubbles = [];
                while (iBubbleCount--) {
                    this.bubbles.push(new Bubble(this));
                }
                this.animate();

                this.canvas.addEventListener("click", function (oEvent) {
                    var iPositionX = oEvent.offsetX,
                        iPositionY = oEvent.offsetY;

                    _this2.bubbles.push(new Bubble(_this2, iPositionX, iPositionY, true));
                });
            }
        }, {
            key: "animate",
            value: function animate() {
                this.context.clearRect(0, 0, this.width, this.height);
                this.bubbles.map(function (oBubble) {
                    return oBubble.update();
                });
                window.requestAnimationFrame(this.animate.bind(this));
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");

    oApp.prepare();
})(window.CanvApp, window.Bubble);
