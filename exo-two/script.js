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
            key: "setup",
            value: function setup() {
                var _this2 = this;

                var oImage = new Image(),
                    $RangeInput = void 0;

                oImage.addEventListener("load", function () {
                    _this2.image = oImage;
                    _this2.time.start = Date.now();
                    _this2.animate();
                });
                oImage.src = this.sprite.src;

                ($RangeInput = document.getElementById("animation-speed")).addEventListener("change", function () {
                    _this2.currentSpeed = $RangeInput.value;
                    $RangeInput.parentNode.querySelector("strong").innerHTML = ~~(1000 / $RangeInput.value) + " i/s";
                });
            }
        }, {
            key: "animate",
            value: function animate() {
                this.time.current = Date.now();
                this.context.clearRect(0, 0, this.width, this.height);
                this.context.drawImage(this.image, this.sprite.steps[oApp.currentStep].x, this.sprite.steps[oApp.currentStep].y, this.sprite.width, this.sprite.height, (this.width - this.sprite.width) / 2, (this.height - this.sprite.height) / 2, this.sprite.width, this.sprite.height);
                if (this.time.current - this.time.start > oApp.currentSpeed) {
                    this.time.start = Date.now();
                    ++this.currentStep < this.sprite.steps.length || (this.currentStep = 0);
                }
                window.requestAnimationFrame(this.animate.bind(this));
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");
    oApp.time = {
        "start": null,
        "current": null
    };
    oApp.sprite = {
        "src": "../_shared/ramonaflowers.png",
        "width": 125,
        "height": 157,
        "steps": [{ "x": 0, "y": 0 }, { "x": 125, "y": 0 }, { "x": 250, "y": 0 }, { "x": 375, "y": 0 }, { "x": 500, "y": 0 }, { "x": 625, "y": 0 }, { "x": 750, "y": 0 }, { "x": 875, "y": 0 }]
    };
    oApp.currentStep = 0;
    oApp.currentSpeed = 50;

    oApp.setup();
})(window.CanvApp);
