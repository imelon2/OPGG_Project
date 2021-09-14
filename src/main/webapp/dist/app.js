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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nconst getGameData_1 = __webpack_require__(/*! ../../oop/getGameData */ \"../oop/getGameData.ts\");\r\nconst getCampNameFromId_1 = __webpack_require__(/*! ../../oop/getCampNameFromId */ \"../oop/getCampNameFromId.ts\");\r\nconst SectionCenter = () => {\r\n    const [champName, setChampName] = React.useState();\r\n    const [champUrl, setChampUrl] = React.useState();\r\n    // \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/\" + {champName} + \".png\"\r\n    const inputRef = React.useRef();\r\n    const idRef = React.useRef;\r\n    const _getGameData = (event) => {\r\n        event.preventDefault(event);\r\n        //  게임ID가져오기\r\n        const gameID = inputRef.current.value;\r\n        let DataApi = new getGameData_1.getGameData(gameID);\r\n        DataApi.dataAPI().then(function (data) {\r\n            console.log(data);\r\n            let champIdList = [];\r\n            for (let i = 0; i < 10; i++) {\r\n                let champId = data[i].championId;\r\n                champIdList.push(champId);\r\n            }\r\n            console.log(champIdList);\r\n            // champId로 영어이름 갖고오기\r\n            (0, getCampNameFromId_1.getCampNameFromId)(champIdList);\r\n            // for (let i = 0 ; i < 10; i++)  {\r\n            //     $(\"#participantId\"+ i).val()\r\n            // }\r\n        });\r\n    };\r\n    return (React.createElement(\"div\", null,\r\n        React.createElement(\"section\", { className: \"center\" },\r\n            React.createElement(\"div\", { className: \"background\" },\r\n                React.createElement(\"div\", { className: \"teamNav\" },\r\n                    React.createElement(\"div\", null, \"TEAM 1\"),\r\n                    React.createElement(\"div\", null, \"win\"),\r\n                    React.createElement(\"div\", null,\r\n                        React.createElement(\"form\", { className: \"gameID\", onSubmit: _getGameData },\r\n                            React.createElement(\"input\", { ref: inputRef, type: \"text\", placeholder: \"\\uAC8C\\uC784\\uC544\\uC774\\uB514\" }),\r\n                            React.createElement(\"button\", null, \"Search GameData\"))),\r\n                    React.createElement(\"div\", null, \"lose\"),\r\n                    React.createElement(\"div\", null, \"TEAM 2\")),\r\n                React.createElement(\"div\", { className: \"totalPlayers\" },\r\n                    React.createElement(\"div\", { className: \"_totalPlayers\" },\r\n                        React.createElement(\"div\", { className: \"players\" },\r\n                            React.createElement(\"table\", null,\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\", id: \"participantId0\" },\r\n                                        React.createElement(\"img\", { src: champUrl }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\", id: \"participantId5\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\", id: \"participantId1\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\", id: \"participantId6\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\", id: \"participantId2\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\", id: \"participantId7\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\", id: \"participantId3\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\", id: \"participantId8\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))),\r\n                                React.createElement(\"tr\", null,\r\n                                    React.createElement(\"div\", { className: \"team1\", id: \"participantId4\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", { style: { width: \"70%\" } }, \"75%\"))),\r\n                                    React.createElement(\"div\", { className: \"team2\", id: \"participantId9\" },\r\n                                        React.createElement(\"img\", { src: \"http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/Aatrox.png\" }),\r\n                                        React.createElement(\"div\", { className: \"con\" },\r\n                                            React.createElement(\"input\", { type: \"text\", placeholder: \"\\uC720\\uC800\\uBA85\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC5EC\" }),\r\n                                            React.createElement(\"p\", null, \"K/D/A\"),\r\n                                            React.createElement(\"span\", null, \"1995.10.01\")))))))),\r\n                React.createElement(\"div\", { className: \"gameStats\" },\r\n                    React.createElement(\"div\", { className: \"_gameStats\" }))))));\r\n};\r\nexports[\"default\"] = SectionCenter;\r\n\n\n//# sourceURL=webpack:///./components/SectionCenter.tsx?");

/***/ }),

/***/ "../oop/getCampNameFromId.ts":
/*!***********************************!*\
  !*** ../oop/getCampNameFromId.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getCampNameFromId = void 0;\r\nfunction getCampNameFromId(champIdList) {\r\n    return new Promise(function (resolve, reject) {\r\n        $.ajax({\r\n            type: \"post\",\r\n            url: \"getdata/champNameList\",\r\n            data: JSON.stringify(champIdList),\r\n            contentType: \"application/json\"\r\n        }).done(function (data) {\r\n            resolve(data);\r\n        });\r\n    });\r\n}\r\nexports.getCampNameFromId = getCampNameFromId;\r\n\n\n//# sourceURL=webpack:///../oop/getCampNameFromId.ts?");

/***/ }),

/***/ "../oop/getGameData.ts":
/*!*****************************!*\
  !*** ../oop/getGameData.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getGameData = void 0;\r\nclass getGameData {\r\n    constructor(gameID) {\r\n        this.gameID = gameID;\r\n    }\r\n    dataAPI() {\r\n        var settings = {\r\n            \"url\": \"https://kr.api.riotgames.com/lol/match/v4/matches/\" + this.gameID + \"?api_key=RGAPI-3bd9d7d3-bcd5-4441-9496-368a6e323b5f\",\r\n            \"method\": \"GET\",\r\n            \"timeout\": 0,\r\n        };\r\n        return new Promise(function (resolve, reject) {\r\n            $.ajax(settings).done(function (response) {\r\n                let forData = [];\r\n                for (let i = 0; i < 10; i++) {\r\n                    // 플레이어 정보\r\n                    let playInfo = { participantId: Number,\r\n                        teamId: Number,\r\n                        championId: Number,\r\n                        win: String,\r\n                        kills: Number,\r\n                        deaths: Number,\r\n                        assists: Number,\r\n                        totalDamageDealtToChampions: Number,\r\n                        goldEarned: Number,\r\n                        totalSC: Number\r\n                    };\r\n                    playInfo.participantId = response.participants[i].participantId;\r\n                    playInfo.teamId = response.participants[i].teamId;\r\n                    playInfo.championId = response.participants[i].championId;\r\n                    playInfo.win = response.participants[i].stats.win;\r\n                    playInfo.kills = response.participants[i].stats.kills;\r\n                    playInfo.deaths = response.participants[i].stats.deaths;\r\n                    playInfo.assists = response.participants[i].stats.assists;\r\n                    playInfo.totalDamageDealtToChampions = response.participants[i].stats.totalDamageDealtToChampions;\r\n                    playInfo.goldEarned = response.participants[i].stats.goldEarned;\r\n                    let scMinions = response.participants[i].stats.totalMinionsKilled;\r\n                    let scNeutralMinios = response.participants[i].stats.neutralMinionsKilled;\r\n                    playInfo.totalSC = scMinions + scNeutralMinios;\r\n                    forData.push(playInfo);\r\n                }\r\n                // 게임 정보\r\n                let matchInfo = {\r\n                    gameId: Number,\r\n                    gameCreation: Number,\r\n                    gameDuration: Number,\r\n                };\r\n                matchInfo.gameId = response.gameId;\r\n                matchInfo.gameCreation = response.gameCreation;\r\n                matchInfo.gameDuration = response.gameDuration;\r\n                forData.push(matchInfo);\r\n                // 팀 정보\r\n                for (let i = 0; i < 2; i++) {\r\n                    let matchTeamInfo = {\r\n                        teamId: Number,\r\n                        win: String,\r\n                        bans: [{\r\n                                championId: Number || String\r\n                            }]\r\n                    };\r\n                    matchTeamInfo.teamId = response.teams[i].teamId;\r\n                    matchTeamInfo.win = response.teams[i].win;\r\n                    for (let j = 0; j < response.teams[i].bans.length; j++) {\r\n                        let _bans = {\r\n                            championId: Number || String\r\n                        };\r\n                        _bans.championId = response.teams[i].bans[j].championId !== undefined ? response.teams[i].bans[j].championId : \"none\";\r\n                        matchTeamInfo.bans.push(_bans);\r\n                    }\r\n                    forData.push(matchTeamInfo);\r\n                }\r\n                // let date = new Date(1631372859651);\r\n                // console.log(date);\r\n                //   let test = response.teams[0].bans[4].championId === false ? \"123\" : \"none\";\r\n                // console.log(response.teams[0].bans[0].championId);\r\n                resolve(forData);\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.getGameData = getGameData;\r\n\n\n//# sourceURL=webpack:///../oop/getGameData.ts?");

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