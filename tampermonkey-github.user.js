// ==UserScript==
// @name         Payload Override (DXA in-product trial demo)
// @namespace    https://github.com/ydoung/tampermonkey
// @version      1.0.2
// @description  Override multiple HTTP request responses with custom payloads
// @author       ydoung
// @match        *://*.qualtrics.com/*
// @match        *://qualtrics.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://github.com/ydoung/tampermonkey/raw/main/tampermonkey-github.user.js
// @downloadURL  https://github.com/ydoung/tampermonkey/raw/main/tampermonkey-github.user.js
// ==/UserScript==

(function () {
    "use strict";

    // ========================================
    // CONFIGURATION SECTION - Add your request overrides here
    // ========================================

    const REQUEST_OVERRIDES = [
        // Add more overrides here by following this template:
        /*
        {
            name: 'Another API Override',
            apiRequestPattern: 'api/endpoint/path',  // Pattern to match API request URLs
            currentPagePattern: 'https://example.com/specific/page', // Optional: Only apply when on this specific page
            enabled: true,                    // Set to false to temporarily disable
            response: {
                status: 200,
                statusText: 'OK',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    // Your custom response data here
                    "key": "value"
                }
            }
        },
        */
        {
            name: "DXA in-product trial demo",
            apiRequestPattern:
                "/sr-data-pb-service/v1/projects/ZN_1Ny80OFeCrzH3ls/heatmaps/getClickmapData",
            currentPagePattern:
                "https://qdemo.yul1.qualtrics.com/app/dx-portal#/ZN_1Ny80OFeCrzH3ls/heatmaps/c772f3a2-2141-477b-bbfc-68bced510b39",
            enabled: true,
            response: {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    clicks: [
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 140,
                            y: 47,
                            count: 231,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 151,
                            y: 30,
                            count: 297,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 140,
                            y: 5,
                            count: 325,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: -7,
                            y: -1,
                            count: 327,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: -23,
                            y: 56,
                            count: 335,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 67,
                            y: 66,
                            count: 180,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 165,
                            y: 47,
                            count: 191,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: -22,
                            y: 27,
                            count: 257,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 68,
                            count: 228,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 75,
                            y: 44,
                            count: 416,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 73,
                            y: 22,
                            count: 476,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 72,
                            y: 22,
                            count: 442,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 71,
                            y: 22,
                            count: 469,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 44,
                            y: 22,
                            count: 436,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 42,
                            y: 22,
                            count: 559,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 40,
                            y: 22,
                            count: 551,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 52,
                            y: 46,
                            count: 498,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 61,
                            y: 39,
                            count: 464,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 88,
                            y: 59,
                            count: 476,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 95,
                            y: 48,
                            count: 431,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 94,
                            y: 45,
                            count: 460,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 93,
                            y: 43,
                            count: 476,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 100,
                            y: 33,
                            count: 422,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 93,
                            y: 18,
                            count: 455,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 76,
                            y: 4,
                            count: 504,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 66,
                            y: 5,
                            count: 402,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 56,
                            y: 4,
                            count: 524,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 39,
                            y: 1,
                            count: 519,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 27,
                            y: 7,
                            count: 417,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 42,
                            y: 53,
                            count: 574,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 42,
                            y: 52,
                            count: 459,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 76,
                            y: 60,
                            count: 511,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 31,
                            y: 32,
                            count: 409,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 31,
                            y: 31,
                            count: 579,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 31,
                            y: 30,
                            count: 436,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 14,
                            y: 46,
                            count: 437,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 10,
                            y: 35,
                            count: 591,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 36,
                            y: 43,
                            count: 425,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 56,
                            y: 18,
                            count: 505,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 35,
                            y: 14,
                            count: 495,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 100,
                            y: 62,
                            count: 494,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 45,
                            count: 492,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 44,
                            count: 506,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 43,
                            count: 435,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 24,
                            count: 445,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 23,
                            count: 492,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 22,
                            count: 588,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 105,
                            y: 13,
                            count: 408,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 26,
                            y: 59,
                            count: 569,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 61,
                            y: 63,
                            count: 552,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 28,
                            count: 528,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 17,
                            y: 15,
                            count: 546,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 21,
                            count: 556,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 125,
                            y: 55,
                            count: 402,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 127,
                            y: 30,
                            count: 560,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 126,
                            y: 29,
                            count: 503,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 125,
                            y: 28,
                            count: 410,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 120,
                            y: 13,
                            count: 482,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 89,
                            y: 2,
                            count: 449,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: -1,
                            y: 56,
                            count: 475,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 135,
                            y: 56,
                            count: 493,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 138,
                            y: 45,
                            count: 585,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 139,
                            y: 38,
                            count: 551,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 138,
                            y: 33,
                            count: 414,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 137,
                            y: 29,
                            count: 542,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 135,
                            y: 19,
                            count: 521,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 3,
                            y: 41,
                            count: 511,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 8,
                            count: 496,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 130,
                            y: 10,
                            count: 480,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Eligibility Check",
                            x: 114,
                            y: 1,
                            count: 499,
                        },
                        {
                            elementId: ".btn-maincolor3 > span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 99,
                            y: 39,
                            count: 436,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 105,
                            y: 28,
                            count: 562,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 140,
                            y: 38,
                            count: 437,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 158,
                            y: 12,
                            count: 407,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 133,
                            y: 1,
                            count: 466,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 134,
                            y: 1,
                            count: 437,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 219,
                            y: 3,
                            count: 409,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 224,
                            y: 36,
                            count: 402,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 110,
                            y: 4,
                            count: 416,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 0,
                            y: 49,
                            count: 597,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 215,
                            y: 46,
                            count: 496,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 99,
                            y: 19,
                            count: 511,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 115,
                            y: 44,
                            count: 441,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 13,
                            y: 60,
                            count: 1093,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 56,
                            y: 46,
                            count: 901,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 38,
                            y: 56,
                            count: 1070,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 30,
                            y: 57,
                            count: 927,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 21,
                            y: 50,
                            count: 1053,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 6,
                            y: 46,
                            count: 1052,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 8,
                            y: 33,
                            count: 1014,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 6,
                            y: 25,
                            count: 1053,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 1,
                            y: 36,
                            count: 1042,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 33,
                            y: 46,
                            count: 1068,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 13,
                            y: 42,
                            count: 1063,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 49,
                            y: 39,
                            count: 1002,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 14,
                            y: 29,
                            count: 926,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 50,
                            y: 7,
                            count: 929,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 15,
                            y: 19,
                            count: 1085,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 42,
                            y: 45,
                            count: 1036,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 20,
                            y: 35,
                            count: 976,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 28,
                            y: 4,
                            count: 1016,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 23,
                            y: 44,
                            count: 936,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 52,
                            y: 31,
                            count: 969,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 19,
                            y: 6,
                            count: 1023,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 19,
                            y: 25,
                            count: 913,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 36,
                            y: 6,
                            count: 1030,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 35,
                            y: 37,
                            count: 922,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 51,
                            y: 18,
                            count: 1036,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 32,
                            y: 24,
                            count: 1095,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 43,
                            y: 32,
                            count: 1040,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 31,
                            y: 18,
                            count: 969,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 46,
                            y: 18,
                            count: 917,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 51,
                            y: 27,
                            count: 1033,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 31,
                            y: 30,
                            count: 1064,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 43,
                            y: 12,
                            count: 981,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 178,
                            y: 39,
                            count: 1015,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 177,
                            y: 39,
                            count: 1001,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 174,
                            y: 20,
                            count: 1037,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 170,
                            y: 44,
                            count: 951,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 170,
                            y: 43,
                            count: 1064,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 182,
                            y: 29,
                            count: 981,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 181,
                            y: 30,
                            count: 916,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 164,
                            y: 29,
                            count: 908,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 186,
                            y: 36,
                            count: 1017,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 158,
                            y: 17,
                            count: 1034,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 157,
                            y: 18,
                            count: 1078,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 157,
                            y: 38,
                            count: 1028,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 184,
                            y: 20,
                            count: 1021,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 180,
                            y: 44,
                            count: 926,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 187,
                            y: 44,
                            count: 1071,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 165,
                            y: 50,
                            count: 985,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 153,
                            y: 29,
                            count: 1015,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 164,
                            y: 23,
                            count: 1097,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 14,
                            y: 55,
                            count: 1094,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 52,
                            y: 55,
                            count: 911,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 60,
                            y: 41,
                            count: 908,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 44,
                            y: 1,
                            count: 1092,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 27,
                            y: 0,
                            count: 920,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 15,
                            y: 10,
                            count: 1038,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 4,
                            y: 15,
                            count: 980,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 14,
                            y: 2,
                            count: 1002,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 9,
                            y: 21,
                            count: 1001,
                        },
                        {
                            elementId: ".btn-apple",
                            elementLabel: "Apple button",
                            x: 0,
                            y: 26,
                            count: 1002,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 84,
                            y: 39,
                            count: 155,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 90,
                            y: 28,
                            count: 82,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 125,
                            y: 38,
                            count: 6,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 143,
                            y: 12,
                            count: 96,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 118,
                            y: 1,
                            count: 98,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 119,
                            y: 1,
                            count: 176,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 204,
                            y: 3,
                            count: 65,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 209,
                            y: 36,
                            count: 45,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 95,
                            y: 4,
                            count: 143,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -15,
                            y: 49,
                            count: 104,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 200,
                            y: 46,
                            count: 184,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 84,
                            y: 19,
                            count: 113,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 100,
                            y: 44,
                            count: 52,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -2,
                            y: 60,
                            count: 181,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 41,
                            y: 46,
                            count: 209,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 23,
                            y: 56,
                            count: 237,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 15,
                            y: 57,
                            count: 340,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 6,
                            y: 50,
                            count: 293,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -9,
                            y: 46,
                            count: 193,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -7,
                            y: 33,
                            count: 150,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -9,
                            y: 25,
                            count: 289,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -14,
                            y: 36,
                            count: 268,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 18,
                            y: 46,
                            count: 301,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -2,
                            y: 42,
                            count: 330,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 34,
                            y: 39,
                            count: 276,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -1,
                            y: 29,
                            count: 283,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 35,
                            y: 7,
                            count: 187,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 0,
                            y: 19,
                            count: 321,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 27,
                            y: 45,
                            count: 223,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 35,
                            count: 350,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 13,
                            y: 4,
                            count: 159,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 8,
                            y: 44,
                            count: 196,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 31,
                            count: 290,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 6,
                            count: 217,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 25,
                            count: 191,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 21,
                            y: 6,
                            count: 287,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 20,
                            y: 37,
                            count: 241,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 36,
                            y: 18,
                            count: 201,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 17,
                            y: 24,
                            count: 226,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 28,
                            y: 32,
                            count: 330,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 18,
                            count: 187,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 31,
                            y: 18,
                            count: 242,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 36,
                            y: 27,
                            count: 32,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 30,
                            count: 27,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 28,
                            y: 12,
                            count: 35,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 163,
                            y: 39,
                            count: 15,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 162,
                            y: 39,
                            count: 26,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 159,
                            y: 20,
                            count: 12,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 155,
                            y: 44,
                            count: 93,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 155,
                            y: 43,
                            count: 56,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 167,
                            y: 29,
                            count: 65,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 166,
                            y: 30,
                            count: 68,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 149,
                            y: 29,
                            count: 348,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 171,
                            y: 36,
                            count: 3,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 143,
                            y: 17,
                            count: 7,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 142,
                            y: 18,
                            count: 4,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 142,
                            y: 38,
                            count: 1,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 169,
                            y: 20,
                            count: 7,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 165,
                            y: 44,
                            count: 7,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 172,
                            y: 44,
                            count: 7,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 150,
                            y: 50,
                            count: 8,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 138,
                            y: 29,
                            count: 1,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 149,
                            y: 23,
                            count: 97,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -1,
                            y: 55,
                            count: 8,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 55,
                            count: 194,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 45,
                            y: 41,
                            count: 76,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 29,
                            y: 1,
                            count: 126,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 12,
                            y: 0,
                            count: 127,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: 0,
                            y: 10,
                            count: 190,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -11,
                            y: 15,
                            count: 123,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -1,
                            y: 2,
                            count: 107,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -6,
                            y: 21,
                            count: 141,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Eligibility Check",
                            x: -15,
                            y: 26,
                            count: 152,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(3) span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 102,
                            y: 35,
                            count: -9,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 104,
                            y: 24,
                            count: 6,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 143,
                            y: 35,
                            count: 67,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 158,
                            y: 11,
                            count: 58,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 132,
                            y: 0,
                            count: 0,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 138,
                            y: -3,
                            count: 64,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 214,
                            y: 2,
                            count: 84,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 228,
                            y: 38,
                            count: -43,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 114,
                            y: 5,
                            count: 95,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: -2,
                            y: 54,
                            count: 104,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 215,
                            y: 48,
                            count: -39,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 94,
                            y: 19,
                            count: 41,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 46,
                            count: 127,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 15,
                            y: 55,
                            count: 137,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 54,
                            y: 44,
                            count: 293,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 42,
                            y: 61,
                            count: 279,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 34,
                            y: 53,
                            count: 199,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 49,
                            count: 244,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 3,
                            y: 50,
                            count: 154,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 8,
                            y: 35,
                            count: 153,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 20,
                            count: 257,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: -3,
                            y: 32,
                            count: 299,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 41,
                            count: 126,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 11,
                            y: 38,
                            count: 149,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 50,
                            y: 41,
                            count: 103,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 26,
                            count: 164,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 49,
                            y: 9,
                            count: 141,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 18,
                            y: 20,
                            count: 140,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 42,
                            y: 41,
                            count: 255,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 32,
                            count: 163,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 26,
                            y: 1,
                            count: 103,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 22,
                            y: 44,
                            count: 116,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 53,
                            y: 29,
                            count: 174,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 22,
                            y: 5,
                            count: 155,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 15,
                            y: 30,
                            count: 187,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 8,
                            count: 265,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 32,
                            y: 42,
                            count: 200,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 55,
                            y: 15,
                            count: 292,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 30,
                            y: 25,
                            count: 265,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 41,
                            y: 36,
                            count: 226,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 27,
                            y: 19,
                            count: 160,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 49,
                            y: 18,
                            count: 163,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 50,
                            y: 30,
                            count: 160,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 33,
                            y: 29,
                            count: 136,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 45,
                            y: 8,
                            count: 104,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 182,
                            y: 42,
                            count: 206,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 179,
                            y: 35,
                            count: 130,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 179,
                            y: 21,
                            count: 266,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 169,
                            y: 42,
                            count: 235,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 166,
                            y: 42,
                            count: 177,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 185,
                            y: 25,
                            count: 164,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 180,
                            y: 31,
                            count: 222,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 166,
                            y: 27,
                            count: 200,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 188,
                            y: 41,
                            count: 249,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 163,
                            y: 14,
                            count: 184,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 157,
                            y: 14,
                            count: 136,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 158,
                            y: 37,
                            count: 256,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 186,
                            y: 15,
                            count: 218,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 183,
                            y: 44,
                            count: 260,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 185,
                            y: 49,
                            count: 109,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 160,
                            y: 47,
                            count: 250,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 150,
                            y: 28,
                            count: 121,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 166,
                            y: 18,
                            count: 270,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 9,
                            y: 53,
                            count: 193,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 52,
                            y: 59,
                            count: 183,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 62,
                            y: 44,
                            count: 164,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 47,
                            y: 6,
                            count: 289,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 23,
                            y: -4,
                            count: 195,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 15,
                            y: 9,
                            count: 114,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 2,
                            y: 12,
                            count: 196,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 13,
                            y: 3,
                            count: 188,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: 12,
                            y: 18,
                            count: 138,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Eligibility Check",
                            x: -3,
                            y: 26,
                            count: 161,
                        },
                        {
                            elementId: ".breadcrumb-item:nth-child(2) span",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 231,
                            y: 12,
                            count: 159,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 207,
                            y: -11,
                            count: 296,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 246,
                            y: 7,
                            count: 339,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 207,
                            y: 27,
                            count: 331,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 228,
                            y: -18,
                            count: 180,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 239,
                            y: 38,
                            count: 245,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 235,
                            y: 29,
                            count: 283,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 241,
                            y: 35,
                            count: 171,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 207,
                            y: 9,
                            count: 261,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 252,
                            y: -1,
                            count: 269,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 247,
                            y: 31,
                            count: 210,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 295,
                            y: 27,
                            count: 165,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 264,
                            y: -2,
                            count: 176,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 298,
                            y: 5,
                            count: 314,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 262,
                            y: 27,
                            count: 250,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 260,
                            y: 29,
                            count: 160,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 262,
                            y: 32,
                            count: 201,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 274,
                            y: -10,
                            count: 176,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Eligibility Check",
                            x: 285,
                            y: 21,
                            count: 250,
                        },
                        {
                            elementId:
                                ".QSI__EmbeddedFeedbackContainer_QuestionText",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 100,
                            y: 35,
                            count: 88,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 109,
                            y: 28,
                            count: 183,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 136,
                            y: 35,
                            count: 58,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 155,
                            y: 16,
                            count: 129,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 137,
                            y: 1,
                            count: 121,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 134,
                            y: -1,
                            count: 163,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 218,
                            y: 6,
                            count: 96,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 220,
                            y: 39,
                            count: 97,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 113,
                            y: 3,
                            count: 184,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 3,
                            y: 44,
                            count: 61,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 214,
                            y: 45,
                            count: 188,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 99,
                            y: 18,
                            count: 178,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 116,
                            y: 43,
                            count: 89,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 58,
                            count: 31,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 59,
                            y: 45,
                            count: 33,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 36,
                            y: 57,
                            count: 142,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 29,
                            y: 61,
                            count: 52,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 55,
                            count: 14,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 11,
                            y: 49,
                            count: 151,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 10,
                            y: 33,
                            count: 40,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 6,
                            y: 20,
                            count: 116,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 32,
                            count: 14,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 38,
                            y: 50,
                            count: 15,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 10,
                            y: 46,
                            count: 125,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 47,
                            y: 43,
                            count: 20,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 17,
                            y: 30,
                            count: 176,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 53,
                            y: 5,
                            count: 176,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 17,
                            y: 15,
                            count: 180,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 45,
                            y: 41,
                            count: 136,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 15,
                            y: 35,
                            count: 95,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 26,
                            y: 5,
                            count: 131,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 24,
                            y: 43,
                            count: 176,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 52,
                            y: 27,
                            count: 102,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 14,
                            y: 4,
                            count: 114,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 16,
                            y: 24,
                            count: 129,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 2,
                            count: 67,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 33,
                            y: 36,
                            count: 176,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 55,
                            y: 20,
                            count: 181,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 37,
                            y: 21,
                            count: 87,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 46,
                            y: 33,
                            count: 154,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 28,
                            y: 16,
                            count: 56,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 44,
                            y: 20,
                            count: 172,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 55,
                            y: 25,
                            count: 191,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 32,
                            y: 26,
                            count: 89,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 38,
                            y: 16,
                            count: 127,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 177,
                            y: 36,
                            count: 38,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 179,
                            y: 41,
                            count: 41,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 177,
                            y: 16,
                            count: 82,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 170,
                            y: 49,
                            count: 143,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 170,
                            y: 47,
                            count: 117,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 179,
                            y: 28,
                            count: 128,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 177,
                            y: 29,
                            count: 142,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 159,
                            y: 28,
                            count: 61,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 184,
                            y: 37,
                            count: 162,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 161,
                            y: 15,
                            count: 147,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 161,
                            y: 20,
                            count: 40,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 159,
                            y: 38,
                            count: 177,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 183,
                            y: 18,
                            count: 179,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 185,
                            y: 47,
                            count: 22,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 187,
                            y: 39,
                            count: 15,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 161,
                            y: 48,
                            count: 182,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 156,
                            y: 31,
                            count: 197,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 160,
                            y: 25,
                            count: 160,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 9,
                            y: 60,
                            count: 182,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 55,
                            y: 55,
                            count: 103,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 56,
                            y: 39,
                            count: 180,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 40,
                            y: -3,
                            count: 19,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 30,
                            y: 0,
                            count: 56,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 13,
                            y: 7,
                            count: 68,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 8,
                            y: 18,
                            count: 105,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 4,
                            count: 132,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 23,
                            count: 9,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 26,
                            count: 120,
                        },
                        {
                            elementId: ".btn-google",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 2,
                            y: 14,
                            count: 284,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 18,
                            y: 22,
                            count: 309,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 22,
                            y: 1,
                            count: 330,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 22,
                            y: 4,
                            count: 193,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 7,
                            y: 0,
                            count: 315,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 7,
                            y: 62,
                            count: 228,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 18,
                            y: 44,
                            count: 326,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 19,
                            y: 74,
                            count: 234,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 40,
                            count: 350,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 21,
                            y: 26,
                            count: 162,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 25,
                            y: 105,
                            count: 318,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 29,
                            y: 104,
                            count: 269,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 7,
                            y: 84,
                            count: 273,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 7,
                            y: 112,
                            count: 207,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 18,
                            y: 111,
                            count: 275,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Eligibility Check",
                            x: 4,
                            y: 100,
                            count: 319,
                        },
                        {
                            elementId: "#QSIFeedbackButton-btn",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 39,
                            y: 4,
                            count: 60,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 100,
                            y: -15,
                            count: 546,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 108,
                            y: 45,
                            count: 76,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 291,
                            y: -16,
                            count: 23,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 293,
                            y: 51,
                            count: 666,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 353,
                            y: 53,
                            count: 214,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 191,
                            y: 68,
                            count: 396,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 178,
                            y: -31,
                            count: 242,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 5,
                            y: 50,
                            count: 242,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: -2,
                            y: 51,
                            count: 323,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 1,
                            y: 51,
                            count: 707,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 70,
                            y: 48,
                            count: 512,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: -5,
                            y: -26,
                            count: 666,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 372,
                            y: -15,
                            count: 126,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 471,
                            y: -17,
                            count: 349,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 592,
                            y: -16,
                            count: 419,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 514,
                            y: 14,
                            count: 172,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 508,
                            y: 11,
                            count: 728,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 508,
                            y: 14,
                            count: 74,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 385,
                            y: 20,
                            count: 691,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 612,
                            y: 18,
                            count: 199,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 456,
                            y: 57,
                            count: 334,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 444,
                            y: -23,
                            count: 781,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 419,
                            y: 25,
                            count: 320,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 313,
                            y: -53,
                            count: 14,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 338,
                            y: 38,
                            count: 675,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 230,
                            y: -26,
                            count: 568,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 229,
                            y: 46,
                            count: 86,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 265,
                            y: 83,
                            count: 536,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 80,
                            y: -52,
                            count: 686,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 29,
                            y: -37,
                            count: 147,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 17,
                            y: 85,
                            count: 679,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 366,
                            y: 68,
                            count: 117,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 531,
                            y: 68,
                            count: 483,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 551,
                            y: 49,
                            count: 482,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 371,
                            y: 45,
                            count: 526,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 452,
                            y: 83,
                            count: 361,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 288,
                            y: -39,
                            count: 655,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: -23,
                            y: -47,
                            count: 125,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: -42,
                            y: 63,
                            count: 649,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 649,
                            y: 88,
                            count: 115,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 647,
                            y: 60,
                            count: 169,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 779,
                            y: 34,
                            count: 233,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Eligibility Check",
                            x: 644,
                            y: 12,
                            count: 287,
                        },
                        {
                            elementId: "#collapse05_header",
                            elementLabel: "Normalization Click",
                            x: -1000,
                            y: 0,
                            count: 1000,
                        },
                    ],
                },
            },
        },
        {
            // Override 1: Qualtrics Heatmap Data
            name: "Qualtrics Heatmap",
            apiRequestPattern:
                "/sr-data-pb-service/v3/projects/ZN_110CJ6DkjdBAr1c/heatmaps/getClickmapData",
            // Only apply this override when on the specific heatmap page
            currentPagePattern:
                "https://dxpba0b1.b1-prv.qualtrics.com/app/dx-portal#/ZN_110CJ6DkjdBAr1c/heatmaps/f9048ee2-3acb-415a-87b8-c9d1625d264f",
            enabled: true,
            response: {
                status: 200,
                statusText: "OK",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    clicks: [
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 410,
                            y: 18,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 423,
                            y: 17,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 448,
                            y: 19,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 461,
                            y: 22,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 466,
                            y: 23,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 477,
                            y: 26,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 475,
                            y: 33,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 474,
                            y: 37,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 468,
                            y: 39,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 465,
                            y: 40,
                            count: 100,
                        },
                    ],
                },
            },
        },
    ];

    // ========================================
    // CORE FUNCTIONALITY - No need to edit below unless adding features
    // ========================================

    class RequestInterceptor {
        constructor(overrides) {
            this.overrides = overrides.filter((o) => o.enabled);
            this.setupFetchInterceptor();
            this.setupXHRInterceptor();
            this.logStatus();
        }

        logStatus() {
            console.log("🚀 Request Interceptor Initialized");
            console.log(`📋 Active overrides: ${this.overrides.length}`);
            this.overrides.forEach((o) => {
                console.log(`  ✓ ${o.name}: ${o.urlPattern}`);
            });
        }

        findMatchingOverride(url) {
            // Log every URL that is inspected against the override rules
            console.log("🔍 Inspecting URL:", url);

            return this.overrides.find((override) => {
                // Check if the API request URL matches the pattern
                const apiMatches = url.includes(override.apiRequestPattern);

                // Check if current page URL matches (if currentPagePattern is specified)
                const pageMatches = override.currentPagePattern
                    ? window.location.href.includes(override.currentPagePattern)
                    : true; // If no currentPagePattern specified, always match

                const matches = apiMatches && pageMatches;

                if (apiMatches && !pageMatches) {
                    console.log(
                        "⚠️ API request pattern matched but current page doesn't match:",
                        {
                            apiRequest: url,
                            currentPage: window.location.href,
                            requiredPage: override.currentPagePattern,
                        }
                    );
                }

                if (matches) {
                    console.log("✅ Both API request and current page match:", {
                        apiRequest: url,
                        currentPage: window.location.href,
                    });
                }

                return matches;
            });
        }

        setupFetchInterceptor() {
            const originalFetch = window.fetch;
            const self = this;

            window.fetch = function (...args) {
                const [resource] = args;
                const url =
                    typeof resource === "string" ? resource : resource.url;

                const override = self.findMatchingOverride(url);

                if (override) {
                    console.log(
                        `🎯 Intercepted fetch [${override.name}]:`,
                        url
                    );

                    return Promise.resolve(
                        new Response(JSON.stringify(override.response.data), {
                            status: override.response.status,
                            statusText: override.response.statusText,
                            headers: override.response.headers,
                        })
                    );
                }

                return originalFetch.apply(this, args);
            };
        }

        setupXHRInterceptor() {
            const originalOpen = XMLHttpRequest.prototype.open;
            const originalSend = XMLHttpRequest.prototype.send;
            const self = this;

            XMLHttpRequest.prototype.open = function (method, url, ...args) {
                this._interceptorUrl = url;
                this._interceptorMethod = method;
                return originalOpen.apply(this, [method, url, ...args]);
            };

            XMLHttpRequest.prototype.send = function (...args) {
                const override = self.findMatchingOverride(
                    this._interceptorUrl
                );

                if (override) {
                    console.log(
                        `🎯 Intercepted XHR [${override.name}]:`,
                        this._interceptorUrl
                    );
                    self.simulateXHRResponse(this, override);
                    return;
                }

                return originalSend.apply(this, args);
            };
        }

        simulateXHRResponse(xhr, override) {
            const responseText = JSON.stringify(override.response.data);

            // Setup XHR properties
            Object.defineProperties(xhr, {
                status: { writable: true, value: 0 },
                statusText: { writable: true, value: "" },
                readyState: { writable: true, value: 0 },
                responseText: { writable: true, value: "" },
                response: { writable: true, value: "" },
                responseType: { writable: true, value: xhr.responseType || "" },
                responseURL: { writable: true, value: xhr._interceptorUrl },
            });

            // Simulate async response
            setTimeout(() => {
                // Simulate the complete XHR lifecycle
                const states = [
                    {
                        readyState: 2,
                        status: override.response.status,
                        statusText: override.response.statusText,
                    },
                    { readyState: 3 },
                    {
                        readyState: 4,
                        responseText: responseText,
                        response:
                            xhr.responseType === "json"
                                ? override.response.data
                                : responseText,
                    },
                ];

                states.forEach((state, index) => {
                    setTimeout(() => {
                        Object.assign(xhr, state);

                        // Fire readystatechange event
                        if (xhr.onreadystatechange) {
                            xhr.onreadystatechange(
                                new Event("readystatechange")
                            );
                        }
                        xhr.dispatchEvent(new Event("readystatechange"));

                        // Fire load events when complete
                        if (state.readyState === 4) {
                            const progressEventData = {
                                lengthComputable: true,
                                loaded: responseText.length,
                                total: responseText.length,
                            };

                            // Fire load event
                            if (xhr.onload) {
                                xhr.onload(
                                    new ProgressEvent("load", progressEventData)
                                );
                            }
                            xhr.dispatchEvent(
                                new ProgressEvent("load", progressEventData)
                            );

                            // Fire loadend event
                            if (xhr.onloadend) {
                                xhr.onloadend(
                                    new ProgressEvent(
                                        "loadend",
                                        progressEventData
                                    )
                                );
                            }
                            xhr.dispatchEvent(
                                new ProgressEvent("loadend", progressEventData)
                            );
                        }
                    }, index * 10);
                });
            }, 50);
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    // Create the interceptor with our configured overrides
    const interceptor = new RequestInterceptor(REQUEST_OVERRIDES);

    // Make it available in console for debugging
    window.requestInterceptor = interceptor;
})();
