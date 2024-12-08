/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Ball.js":
/*!*****************************!*\
  !*** ./src/scripts/Ball.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ \"./src/scripts/Mobile.js\");\n // default values for a Ball : image and shifts\n\nconst BALL_IMAGE_SRC = './images/balle24.png';\nconst SHIFT_X = 8;\nconst SHIFT_Y = 4;\n/**\r\n * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)\r\n */\n\nclass Ball extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  /**  build a ball\r\n   *\r\n   * @param  {number} x       the x coordinate\r\n   * @param  {number} y       the y coordinate\r\n   * @param  {Game} theGame   the Game this ball belongs to\r\n   */\n  constructor(x, y, theGame) {\n    super(x, y, BALL_IMAGE_SRC, SHIFT_X, SHIFT_Y);\n    this.theGame = theGame;\n  }\n  /**\r\n   * when moving a ball bounces inside the limit of its game's canvas\r\n   */\n\n\n  move() {\n    if (this.y <= 0 || this.y + this.height >= this.theGame.canvas.height) {\n      this.shiftY = -this.shiftY; // rebond en haut ou en bas\n    } else if (this.x <= 0 || this.x + this.width >= this.theGame.canvas.width) {\n      this.shiftX = -this.shiftX; // rebond en gauche ou à droite\n    }\n\n    super.move();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9CYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0NBR0E7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLHNCQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUdBO0FBQ0E7QUFDQTs7QUFDZSxNQUFNQyxJQUFOLFNBQW1CSixrREFBbkIsQ0FBMEI7QUFFdkM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VLLEVBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLE9BQVAsRUFBZ0I7QUFDekIsVUFBTUYsQ0FBTixFQUFTQyxDQUFULEVBQVlOLGNBQVosRUFBNkJDLE9BQTdCLEVBQXNDQyxPQUF0QztBQUNBLFNBQUtLLE9BQUwsR0FBZUEsT0FBZjtBQUNEO0FBR0Q7QUFDRjtBQUNBOzs7QUFDRUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0wsUUFBSSxLQUFLRixDQUFMLElBQVUsQ0FBVixJQUFnQixLQUFLQSxDQUFMLEdBQU8sS0FBS0csTUFBWixJQUFzQixLQUFLRixPQUFMLENBQWFHLE1BQWIsQ0FBb0JELE1BQTlELEVBQXVFO0FBQ3JFLFdBQUtFLE1BQUwsR0FBYyxDQUFFLEtBQUtBLE1BQXJCLENBRHFFLENBQ3JDO0FBQ2pDLEtBRkQsTUFHSyxJQUFJLEtBQUtOLENBQUwsSUFBVSxDQUFWLElBQWUsS0FBS0EsQ0FBTCxHQUFTLEtBQUtPLEtBQWQsSUFBdUIsS0FBS0wsT0FBTCxDQUFhRyxNQUFiLENBQW9CRSxLQUE5RCxFQUFzRTtBQUN6RSxXQUFLQyxNQUFMLEdBQWMsQ0FBRSxLQUFLQSxNQUFyQixDQUR5RSxDQUN6QztBQUNqQzs7QUFDRCxVQUFNTCxJQUFOO0FBQ0Q7O0FBekJzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zY3JpcHRzL0JhbGwuanM/M2E1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9iaWxlIGZyb20gJy4vTW9iaWxlLmpzJztcclxuXHJcblxyXG4vLyBkZWZhdWx0IHZhbHVlcyBmb3IgYSBCYWxsIDogaW1hZ2UgYW5kIHNoaWZ0c1xyXG5jb25zdCBCQUxMX0lNQUdFX1NSQyA9ICcuL2ltYWdlcy9iYWxsZTI0LnBuZyc7XHJcbmNvbnN0IFNISUZUX1ggPSA4O1xyXG5jb25zdCBTSElGVF9ZID0gNDtcclxuXHJcblxyXG4vKipcclxuICogYSBCYWxsIGlzIGEgbW9iaWxlIHdpdGggYSBiYWxsIGFzIGltYWdlIGFuZCB0aGF0IGJvdW5jZXMgaW4gYSBHYW1lIChpbnNpZGUgdGhlIGdhbWUncyBjYW52YXMpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIGV4dGVuZHMgTW9iaWxlIHtcclxuXHJcbiAgLyoqICBidWlsZCBhIGJhbGxcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geCAgICAgICB0aGUgeCBjb29yZGluYXRlXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5ICAgICAgIHRoZSB5IGNvb3JkaW5hdGVcclxuICAgKiBAcGFyYW0gIHtHYW1lfSB0aGVHYW1lICAgdGhlIEdhbWUgdGhpcyBiYWxsIGJlbG9uZ3MgdG9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0aGVHYW1lKSB7XHJcbiAgICBzdXBlcih4LCB5LCBCQUxMX0lNQUdFX1NSQyAsIFNISUZUX1gsIFNISUZUX1kpO1xyXG4gICAgdGhpcy50aGVHYW1lID0gdGhlR2FtZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiB3aGVuIG1vdmluZyBhIGJhbGwgYm91bmNlcyBpbnNpZGUgdGhlIGxpbWl0IG9mIGl0cyBnYW1lJ3MgY2FudmFzXHJcbiAgICovXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnkgPD0gMCB8fCAodGhpcy55K3RoaXMuaGVpZ2h0ID49IHRoaXMudGhlR2FtZS5jYW52YXMuaGVpZ2h0KSkge1xyXG4gICAgICB0aGlzLnNoaWZ0WSA9IC0gdGhpcy5zaGlmdFk7ICAgIC8vIHJlYm9uZCBlbiBoYXV0IG91IGVuIGJhc1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy54IDw9IDAgfHwgdGhpcy54ICsgdGhpcy53aWR0aCA+PSB0aGlzLnRoZUdhbWUuY2FudmFzLndpZHRoICkge1xyXG4gICAgICB0aGlzLnNoaWZ0WCA9IC0gdGhpcy5zaGlmdFg7ICAgIC8vIHJlYm9uZCBlbiBnYXVjaGUgb3Ugw6AgZHJvaXRlXHJcbiAgICB9XHJcbiAgICBzdXBlci5tb3ZlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiTW9iaWxlIiwiQkFMTF9JTUFHRV9TUkMiLCJTSElGVF9YIiwiU0hJRlRfWSIsIkJhbGwiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwidGhlR2FtZSIsIm1vdmUiLCJoZWlnaHQiLCJjYW52YXMiLCJzaGlmdFkiLCJ3aWR0aCIsInNoaWZ0WCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Ball.js\n");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./src/scripts/Ball.js\");\n\n/**\r\n * a Game animates a ball bouncing in a canvas\r\n */\n\nclass Game {\n  /**\r\n   * build a Game\r\n   *\r\n   * @param  {Canvas} canvas the canvas of the game\r\n   */\n  constructor(canvas) {\n    this.raf = null;\n    this.canvas = canvas;\n    this.ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width / 2, this.canvas.height / 2, this);\n  }\n  /** start this game animation */\n\n\n  start() {\n    this.animate();\n  }\n  /** stop this game animation */\n\n\n  stop() {\n    window.cancelAnimationFrame(this.raf);\n  }\n  /** animate the game : move and draw */\n\n\n  animate() {\n    this.moveAndDraw();\n    this.raf = window.requestAnimationFrame(this.animate.bind(this));\n  }\n  /** move then draw the bouncing ball */\n\n\n  moveAndDraw() {\n    const ctxt = this.canvas.getContext(\"2d\");\n    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height); // draw and move the ball\n\n    this.ball.move();\n    this.ball.draw(ctxt);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9HYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ2UsTUFBTUMsSUFBTixDQUFXO0FBRXhCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQVM7QUFDbEIsU0FBS0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxJQUFMLEdBQVksSUFBSUwsZ0RBQUosQ0FBUyxLQUFLRyxNQUFMLENBQVlHLEtBQVosR0FBa0IsQ0FBM0IsRUFBOEIsS0FBS0gsTUFBTCxDQUFZSSxNQUFaLEdBQW1CLENBQWpELEVBQW9ELElBQXBELENBQVo7QUFDRDtBQUVEOzs7QUFDQUMsRUFBQUEsS0FBSyxHQUFHO0FBQ04sU0FBS0MsT0FBTDtBQUNEO0FBQ0Q7OztBQUNBQyxFQUFBQSxJQUFJLEdBQUc7QUFDTEMsSUFBQUEsTUFBTSxDQUFDQyxvQkFBUCxDQUE0QixLQUFLUixHQUFqQztBQUNEO0FBRUQ7OztBQUNBSyxFQUFBQSxPQUFPLEdBQUc7QUFDUixTQUFLSSxXQUFMO0FBQ0EsU0FBS1QsR0FBTCxHQUFXTyxNQUFNLENBQUNHLHFCQUFQLENBQTZCLEtBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQixJQUFsQixDQUE3QixDQUFYO0FBQ0Q7QUFDRDs7O0FBQ0FGLEVBQUFBLFdBQVcsR0FBRztBQUNaLFVBQU1HLElBQUksR0FBRyxLQUFLYixNQUFMLENBQVljLFVBQVosQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEtBQUtmLE1BQUwsQ0FBWUcsS0FBakMsRUFBd0MsS0FBS0gsTUFBTCxDQUFZSSxNQUFwRCxFQUZZLENBR1o7O0FBQ0EsU0FBS0YsSUFBTCxDQUFVYyxJQUFWO0FBQ0EsU0FBS2QsSUFBTCxDQUFVZSxJQUFWLENBQWVKLElBQWY7QUFDRDs7QUFsQ3VCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvR2FtZS5qcz85Nzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsIGZyb20gJy4vQmFsbC5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGEgR2FtZSBhbmltYXRlcyBhIGJhbGwgYm91bmNpbmcgaW4gYSBjYW52YXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICAvKipcclxuICAgKiBidWlsZCBhIEdhbWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge0NhbnZhc30gY2FudmFzIHRoZSBjYW52YXMgb2YgdGhlIGdhbWVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMucmFmID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jYW52YXMud2lkdGgvMiwgdGhpcy5jYW52YXMuaGVpZ2h0LzIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHN0YXJ0IHRoaXMgZ2FtZSBhbmltYXRpb24gKi9cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gIH1cclxuICAvKiogc3RvcCB0aGlzIGdhbWUgYW5pbWF0aW9uICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XHJcbiAgfVxyXG5cclxuICAvKiogYW5pbWF0ZSB0aGUgZ2FtZSA6IG1vdmUgYW5kIGRyYXcgKi9cclxuICBhbmltYXRlKCkge1xyXG4gICAgdGhpcy5tb3ZlQW5kRHJhdygpO1xyXG4gICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgLyoqIG1vdmUgdGhlbiBkcmF3IHRoZSBib3VuY2luZyBiYWxsICovXHJcbiAgbW92ZUFuZERyYXcoKSB7XHJcbiAgICBjb25zdCBjdHh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgY3R4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAvLyBkcmF3IGFuZCBtb3ZlIHRoZSBiYWxsXHJcbiAgICB0aGlzLmJhbGwubW92ZSgpO1xyXG4gICAgdGhpcy5iYWxsLmRyYXcoY3R4dCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiQmFsbCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsInJhZiIsImJhbGwiLCJ3aWR0aCIsImhlaWdodCIsInN0YXJ0IiwiYW5pbWF0ZSIsInN0b3AiLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vdmVBbmREcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImN0eHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibW92ZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/Game.js\n");

/***/ }),

/***/ "./src/scripts/Mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/Mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mobile)\n/* harmony export */ });\n/**\r\n  A mobile is defined by its coordinates, an image and a \"speed\" defined by horizontal and vertical shift values\r\n*/\nclass Mobile {\n  /**\r\n   * buils a Mobile\r\n   *\r\n   * @param  {number} x          the x coordinate of this mobile\r\n   * @param  {number} y          the y coordinate of this mobile\r\n   * @param  {string} imgSrc     this mobile's image src\r\n   * @param  {number} shiftX = 0 the horizontal shift \"speed\"\r\n   * @param  {number} shiftY = 0 the vertical shift \"speed\"\r\n   */\n  constructor(x, y, imgSrc, shiftX = 0, shiftY = 0) {\n    this.y = y;\n    this.x = x;\n    this.img = new Image();\n    this.img.src = imgSrc;\n    this.shiftX = shiftX;\n    this.shiftY = shiftY;\n  }\n  /** @return {number} the width of the mobile, ie. its images's width */\n\n\n  get width() {\n    return this.img.width;\n  }\n  /** @return {number} the width of the mobile, ie. its images's height */\n\n\n  get height() {\n    return this.img.height;\n  }\n  /** this mobile moves : horizontal and vertical shifts are added to coordinates */\n\n\n  move() {\n    this.x = this.x + this.shiftX;\n    this.y = this.y + this.shiftY;\n  }\n  /** draw this mobile's image at its coordinates in the given context\r\n  * @param {CanvasRenderingContext2D} ctxt - the drawing context\r\n  */\n\n\n  draw(ctxt) {\n    ctxt.drawImage(this.img, this.x, this.y);\n  }\n  /** this mobile stops moving : speed becomes 0 */\n\n\n  stopMoving() {\n    this.shiftX = 0;\n    this.shiftY = 0;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9Nb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLE1BQU1BLE1BQU4sQ0FBYTtBQUMxQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsTUFBUCxFQUFlQyxNQUFNLEdBQUcsQ0FBeEIsRUFBMkJDLE1BQU0sR0FBRyxDQUFwQyxFQUF1QztBQUNoRCxTQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDRCxTQUFLSyxHQUFMLEdBQVcsSUFBSUMsS0FBSixFQUFYO0FBQ0MsU0FBS0QsR0FBTCxDQUFTRSxHQUFULEdBQWVMLE1BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDtBQUVEOzs7QUFDUyxNQUFMSSxLQUFLLEdBQUc7QUFDVixXQUFPLEtBQUtILEdBQUwsQ0FBU0csS0FBaEI7QUFDRDtBQUNEOzs7QUFDVSxNQUFOQyxNQUFNLEdBQUc7QUFDWCxXQUFPLEtBQUtKLEdBQUwsQ0FBU0ksTUFBaEI7QUFDRDtBQUNEOzs7QUFDQUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0wsU0FBS1YsQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLRyxNQUF2QjtBQUNBLFNBQUtGLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS0csTUFBdkI7QUFDRDtBQUNEO0FBQ0Y7QUFDQTs7O0FBQ0VPLEVBQUFBLElBQUksQ0FBQ0MsSUFBRCxFQUFPO0FBQ1RBLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtSLEdBQXBCLEVBQXdCLEtBQUtMLENBQTdCLEVBQStCLEtBQUtDLENBQXBDO0FBQ0Q7QUFDRDs7O0FBQ0FhLEVBQUFBLFVBQVUsR0FBRztBQUNYLFNBQUtYLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDRDs7QUExQ3lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL3NjcmlwdHMvTW9iaWxlLmpzP2ZlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAgQSBtb2JpbGUgaXMgZGVmaW5lZCBieSBpdHMgY29vcmRpbmF0ZXMsIGFuIGltYWdlIGFuZCBhIFwic3BlZWRcIiBkZWZpbmVkIGJ5IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNoaWZ0IHZhbHVlc1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUge1xyXG4gIC8qKlxyXG4gICAqIGJ1aWxzIGEgTW9iaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggICAgICAgICAgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGlzIG1vYmlsZVxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geSAgICAgICAgICB0aGUgeSBjb29yZGluYXRlIG9mIHRoaXMgbW9iaWxlXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpbWdTcmMgICAgIHRoaXMgbW9iaWxlJ3MgaW1hZ2Ugc3JjXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSBzaGlmdFggPSAwIHRoZSBob3Jpem9udGFsIHNoaWZ0IFwic3BlZWRcIlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0gc2hpZnRZID0gMCB0aGUgdmVydGljYWwgc2hpZnQgXCJzcGVlZFwiXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nU3JjLCBzaGlmdFggPSAwLCBzaGlmdFkgPSAwKSB7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy54ID0geDtcclxuXHQgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBpbWdTcmM7XHJcbiAgICB0aGlzLnNoaWZ0WCA9IHNoaWZ0WDtcclxuICAgIHRoaXMuc2hpZnRZID0gc2hpZnRZO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm4ge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBtb2JpbGUsIGllLiBpdHMgaW1hZ2VzJ3Mgd2lkdGggKi9cclxuICBnZXQgd2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWcud2lkdGg7XHJcbiAgfVxyXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgbW9iaWxlLCBpZS4gaXRzIGltYWdlcydzIGhlaWdodCAqL1xyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWcuaGVpZ2h0O1xyXG4gIH1cclxuICAvKiogdGhpcyBtb2JpbGUgbW92ZXMgOiBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBzaGlmdHMgYXJlIGFkZGVkIHRvIGNvb3JkaW5hdGVzICovXHJcbiAgbW92ZSgpIHtcclxuICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuc2hpZnRYO1xyXG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5zaGlmdFk7XHJcbiAgfVxyXG4gIC8qKiBkcmF3IHRoaXMgbW9iaWxlJ3MgaW1hZ2UgYXQgaXRzIGNvb3JkaW5hdGVzIGluIHRoZSBnaXZlbiBjb250ZXh0XHJcbiAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4dCAtIHRoZSBkcmF3aW5nIGNvbnRleHRcclxuICAqL1xyXG4gIGRyYXcoY3R4dCkge1xyXG4gICAgY3R4dC5kcmF3SW1hZ2UodGhpcy5pbWcsdGhpcy54LHRoaXMueSk7XHJcbiAgfVxyXG4gIC8qKiB0aGlzIG1vYmlsZSBzdG9wcyBtb3ZpbmcgOiBzcGVlZCBiZWNvbWVzIDAgKi9cclxuICBzdG9wTW92aW5nKCkge1xyXG4gICAgdGhpcy5zaGlmdFggPSAwO1xyXG4gICAgdGhpcy5zaGlmdFkgPSAwO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9iaWxlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImltZ1NyYyIsInNoaWZ0WCIsInNoaWZ0WSIsImltZyIsIkltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtb3ZlIiwiZHJhdyIsImN0eHQiLCJkcmF3SW1hZ2UiLCJzdG9wTW92aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/Mobile.js\n");

/***/ }),

/***/ "./src/scripts/pong.js":
/*!*****************************!*\
  !*** ./src/scripts/pong.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/scripts/Game.js\");\n\n\n\n\nconst init = () => {\n  const theField = document.getElementById(\"field\");\n  const theGame = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](theField);\n  document.getElementById('start').addEventListener(\"click\", () => startGame(theGame));\n};\n\nwindow.addEventListener(\"load\", init); // true iff game is started\n\nlet started = false;\n/** start and stop a game\r\n * @param {Game} theGame - the game to start and stop\r\n */\n\nconst startGame = theGame => {\n  if (!started) {\n    theGame.start();\n    document.getElementById('start').value = 'stop';\n  } else {\n    document.getElementById('start').value = 'jouer';\n    theGame.stop();\n  }\n\n  started = !started;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb25nLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWE7O0FBRWI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBakI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsSUFBSUwsZ0RBQUosQ0FBU0UsUUFBVCxDQUFoQjtBQUVBQyxFQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNFLGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyRCxNQUFNQyxTQUFTLENBQUNGLE9BQUQsQ0FBMUU7QUFDRCxDQUxEOztBQU9BRyxNQUFNLENBQUNGLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCTCxJQUEvQixHQUVBOztBQUNBLElBQUlRLE9BQU8sR0FBRyxLQUFkO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1GLFNBQVMsR0FBR0YsT0FBTyxJQUFJO0FBQzNCLE1BQUksQ0FBQ0ksT0FBTCxFQUFjO0FBQ1pKLElBQUFBLE9BQU8sQ0FBQ0ssS0FBUjtBQUNBUCxJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNPLEtBQWpDLEdBQXlDLE1BQXpDO0FBQ0QsR0FIRCxNQUlLO0FBQ0hSLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ08sS0FBakMsR0FBeUMsT0FBekM7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxJQUFSO0FBQ0Q7O0FBQ0RILEVBQUFBLE9BQU8sR0FBRyxDQUFFQSxPQUFaO0FBQ0QsQ0FWRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9zY3JpcHRzL3BvbmcuanM/NTNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUuanMnO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBjb25zdCB0aGVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRcIik7XHJcbiAgY29uc3QgdGhlR2FtZSA9IG5ldyBHYW1lKHRoZUZpZWxkKTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0R2FtZSh0aGVHYW1lKSApO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixpbml0KTtcclxuXHJcbi8vIHRydWUgaWZmIGdhbWUgaXMgc3RhcnRlZFxyXG5sZXQgc3RhcnRlZCA9IGZhbHNlO1xyXG4vKiogc3RhcnQgYW5kIHN0b3AgYSBnYW1lXHJcbiAqIEBwYXJhbSB7R2FtZX0gdGhlR2FtZSAtIHRoZSBnYW1lIHRvIHN0YXJ0IGFuZCBzdG9wXHJcbiAqL1xyXG5jb25zdCBzdGFydEdhbWUgPSB0aGVHYW1lID0+IHtcclxuICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgIHRoZUdhbWUuc3RhcnQoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLnZhbHVlID0gJ3N0b3AnO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLnZhbHVlID0gJ2pvdWVyJztcclxuICAgIHRoZUdhbWUuc3RvcCgpO1xyXG4gIH1cclxuICBzdGFydGVkID0gISBzdGFydGVkO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJHYW1lIiwiaW5pdCIsInRoZUZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRoZUdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwid2luZG93Iiwic3RhcnRlZCIsInN0YXJ0IiwidmFsdWUiLCJzdG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pong.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pong.js");
/******/ 	
/******/ })()
;