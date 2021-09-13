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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nconst Navbar_1 = __webpack_require__(/*! ./components/Navbar */ \"./components/Navbar.tsx\");\r\nconst SectionCenter_1 = __webpack_require__(/*! ./components/SectionCenter */ \"./components/SectionCenter.tsx\");\r\nclass MainPage extends React.Component {\r\n    render() {\r\n        return (React.createElement(React.Fragment, null,\r\n            React.createElement(Navbar_1.default, null),\r\n            React.createElement(SectionCenter_1.default, null)));\r\n    }\r\n}\r\nReactDOM.render(React.createElement(MainPage, { compiler: \"TypeScript\", framework: \"React\" }), document.getElementById('root'));\r\n// 다른 jsx 불러올때\r\n// module.exports = MainPage;\r\n\n\n//# sourceURL=webpack:///./MainPage.tsx?");

/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass Navbar extends React.Component {\r\n    render() {\r\n        return (React.createElement(\"nav\", null,\r\n            React.createElement(\"div\", { className: \"nav1\" }),\r\n            React.createElement(\"div\", { className: \"nav2\" }),\r\n            React.createElement(\"div\", { className: \"nav3\" })));\r\n    }\r\n}\r\nexports[\"default\"] = Navbar;\r\n\n\n//# sourceURL=webpack:///./components/Navbar.tsx?");

/***/ }),

/***/ "./components/SectionCenter.tsx":
/*!**************************************!*\
  !*** ./components/SectionCenter.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst getCampNameId_1 = __webpack_require__(/*! ../../oop/getCampNameId */ \"../oop/getCampNameId.ts\");\r\nconst SectionCenter = () => {\r\n    const inputRef = React.createRef();\r\n    const gettest = (event) => {\r\n        event.preventDefault(event);\r\n        // const name = inputRef.current.value;\r\n        // let b =  new getGameData(name);\r\n        // b.dataAPI().then(function(data : number) {\r\n        //     console.log(data);\r\n        // });  \r\n        let test = new getCampNameId_1.getCampNameId();\r\n        let testLog = test.test();\r\n        console.log(testLog);\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"section\", { className: \"center\" },\r\n            React.createElement(\"div\", { className: \"background\" },\r\n                React.createElement(\"h2\", null, \"Search Data\"),\r\n                React.createElement(\"form\", { className: \"gameID\", onSubmit: gettest },\r\n                    React.createElement(\"input\", { ref: inputRef, type: \"text\", placeholder: \"\\uAC8C\\uC784\\uC544\\uC774\\uB514\" }),\r\n                    React.createElement(\"button\", { className: \"add-button\" }, \"add\")),\r\n                React.createElement(\"div\", { className: \"team1\" },\r\n                    React.createElement(\"div\", { className: \"_team1\" },\r\n                        React.createElement(\"h1\", null, \"1\\uD300\"),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID1\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID2\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID3\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID4\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID5\" }))),\r\n                React.createElement(\"div\", { className: \"team2\" },\r\n                    React.createElement(\"div\", { className: \"_team2\" },\r\n                        React.createElement(\"h1\", null, \"2\\uD300\"),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID6\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID7\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID8\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID9\" }),\r\n                        React.createElement(\"div\", { className: \"participant\", id: \"ID10\" })))))));\r\n};\r\nexports[\"default\"] = SectionCenter;\r\n\n\n//# sourceURL=webpack:///./components/SectionCenter.tsx?");

/***/ }),

/***/ "../oop/getCampNameId.ts":
/*!*******************************!*\
  !*** ../oop/getCampNameId.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCampNameId = void 0;\r\nclass getCampNameId {\r\n    test() {\r\n        var settings = {\r\n            \"url\": \"http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json?data\",\r\n            \"method\": \"GET\",\r\n            \"timeout\": 0,\r\n        };\r\n        $.ajax(settings).done(function (response) {\r\n            let _champName = [];\r\n            let _champId = [];\r\n            for (let key in response.data) {\r\n                _champName.push(response.data[key].name);\r\n                _champId.push(response.data[key].key);\r\n            }\r\n            console.log(_champName[0]);\r\n            console.log(_champId[0]);\r\n            const arr = [];\r\n            for (let i = 0; i < _champName.length; i++) {\r\n                let item = { champName: String, champId: Number };\r\n                item.champName = _champName[i];\r\n                item.champId = _champId[i];\r\n                arr.push(item);\r\n            }\r\n            $.ajax({\r\n                type: \"post\",\r\n                url: \"update/champList\",\r\n                data: JSON.stringify(arr),\r\n                contentType: \"application/json\",\r\n                success: function () {\r\n                    console.log(\"성공\");\r\n                },\r\n                error: function () {\r\n                    console.log(\"실패\");\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.getCampNameId = getCampNameId;\r\n\n\n//# sourceURL=webpack:///../oop/getCampNameId.ts?");

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