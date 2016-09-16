"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (CanvApp) {
    var _oApp;

    var oApp = void 0,
        aColorSequences = [["#ffffaa", "#aaffff", "#ffaaaa", "#aaffaa"], ["#aaffaa", "#ffffaa", "#aaffff", "#ffaaaa"], ["#ffaaaa", "#aaffaa", "#ffffaa", "#aaffff"], ["#aaffff", "#ffaaaa", "#aaffaa", "#ffffaa"]];

    var MyCanvApp = function (_CanvApp) {
        _inherits(MyCanvApp, _CanvApp);

        function MyCanvApp() {
            _classCallCheck(this, MyCanvApp);

            return _possibleConstructorReturn(this, (MyCanvApp.__proto__ || Object.getPrototypeOf(MyCanvApp)).apply(this, arguments));
        }

        _createClass(MyCanvApp, [{
            key: "setup",
            value: function setup() {
                this.animate();
            }
        }, {
            key: "animate",
            value: function animate() {
                var iCurrentSecond = new Date().getSeconds();

                this.drawRectangles.apply(this, _toConsumableArray(aColorSequences[iCurrentSecond % 4]));

                window.requestAnimationFrame(this.animate.bind(this));
            }
        }, {
            key: "drawRectangles",
            value: function drawRectangles(sColorOne, sColorTwo, sColorThree, sColorFour) {
                var oContext = this.context,
                    iHalfWidth = this.width / 2,
                    iHalfHeight = this.height / 2;

                oContext.fillStyle = sColorOne;
                oContext.fillRect(0, 0, iHalfWidth, iHalfHeight);
                oContext.fillStyle = sColorTwo;
                oContext.fillRect(iHalfWidth, 0, iHalfWidth, iHalfHeight);
                oContext.fillStyle = sColorFour;
                oContext.fillRect(0, iHalfHeight, iHalfWidth, iHalfHeight);
                oContext.fillStyle = sColorThree;
                oContext.fillRect(iHalfWidth, iHalfHeight, iHalfWidth, iHalfHeight);
            }
        }]);

        return MyCanvApp;
    }(CanvApp);

    oApp = new MyCanvApp("#my-canvas");

    (_oApp = oApp).drawRectangles.apply(_oApp, _toConsumableArray(aColorSequences[0]));

    oApp.setup();
})(window.CanvApp);
