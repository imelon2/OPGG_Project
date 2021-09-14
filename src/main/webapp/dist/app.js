/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./MainPage.tsx":
/*!**********************!*\
  !*** ./MainPage.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nconst SectionCenter_1 = __webpack_require__(/*! ./components/SectionCenter */ \"./components/SectionCenter.tsx\");\r\nclass MainPage extends React.Component {\r\n    render() {\r\n        return (React.createElement(React.Fragment, null,\r\n            React.createElement(SectionCenter_1.default, null)));\r\n    }\r\n}\r\nReactDOM.render(React.createElement(MainPage, { compiler: \"TypeScript\", framework: \"React\" }), document.getElementById('root'));\r\n// 다른 jsx 불러올때\r\n// module.exports = MainPage;\r\n\n\n//# sourceURL=webpack:///./MainPage.tsx?");

/***/ }),

/***/ "./components/SectionCenter.tsx":
/*!**************************************!*\
  !*** ./components/SectionCenter.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst getGameData_1 = __webpack_require__(/*! ../../oop/getGameData */ \"../oop/getGameData.ts\");\r\nconst SectionCenter = () => {\r\n    const [champName, setChampName] = React.useState();\r\n    const inputRef = React.useRef();\r\n    const gettest = (event) => {\r\n        event.preventDefault(event);\r\n        const name = inputRef.current.value;\r\n        let DataApi = new getGameData_1.getGameData(name);\r\n        DataApi.dataAPI().then(function (data) {\r\n            console.log(data);\r\n        });\r\n        // let test = new getCampNameId();\r\n        // let testLog = test.updateChampList();\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"section\", { className: \"center\" },\r\n            React.createElement(\"div\", { className: \"background\" },\r\n                React.createElement(\"div\", { className: \"teamNav\" },\r\n                    React.createElement(\"div\", null, \"TEAM 1\"),\r\n                    React.createElement(\"div\", null, \"win\"),\r\n                    React.createElement(\"div\", null,\r\n                        React.createElement(\"form\", { className: \"gameID\", onSubmit: gettest },\r\n                            React.createElement(\"input\", { ref: inputRef, type: \"text\", placeholder: \"\\uAC8C\\uC784\\uC544\\uC774\\uB514\" }),\r\n                            React.createElement(\"button\", null, \"Search GameData\"))),\r\n                    React.createElement(\"div\", null, \"lose\"),\r\n                    React.createElement(\"div\", null, \"TEAM 2\")),\r\n                React.createElement(\"div\", { className: \"totalPlayers\" },\r\n                    React.createElement(\"div\", { className: \"_totalPlayers\" },\r\n                        React.createElement(\"div\", { className: \"players\" },\r\n                            React.createElement(\"table\", null,\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))))))),\r\n                React.createElement(\"div\", { className: \"gameStats\" },\r\n                    React.createElement(\"div\", { className: \"_gameStats\" }))))));\r\n};\r\nexports[\"default\"] = SectionCenter;\r\n\n\n//# sourceURL=webpack:///./components/SectionCenter.tsx?");

/***/ }),

/***/ "../oop/getGameData.ts":
/*!*****************************!*\
  !*** ../oop/getGameData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getGameData = void 0;\r\nclass getGameData {\r\n    constructor(gameID) {\r\n        this.gameID = gameID;\r\n    }\r\n    dataAPI() {\r\n        var settings = {\r\n            \"url\": \"https://kr.api.riotgames.com/lol/match/v4/matches/\" + this.gameID + \"?api_key=RGAPI-3bd9d7d3-bcd5-4441-9496-368a6e323b5f\",\r\n            \"method\": \"GET\",\r\n            \"timeout\": 0,\r\n        };\r\n        return new Promise(function (resolve, reject) {\r\n            $.ajax(settings).done(function (response) {\r\n                let forData = { champ: response.participants[0].championId };\r\n                resolve(forData);\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.getGameData = getGameData;\r\n\n\n//# sourceURL=webpack:///../oop/getGameData.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./MainPage.tsx");
/******/ 	
/******/ })()
;