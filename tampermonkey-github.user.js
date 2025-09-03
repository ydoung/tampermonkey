// ==UserScript==
// @name         Multi-Request Payload Override
// @namespace    https://github.com/ydoung/tampermonkey
// @version      1.0.0
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
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 457,
                            y: 43,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 439,
                            y: 45,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 430,
                            y: 45,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 415,
                            y: 45,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 399,
                            y: 45,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 385,
                            y: 41,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 381,
                            y: 39,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 371,
                            y: 36,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 373,
                            y: 30,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 374,
                            y: 27,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 379,
                            y: 25,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 382,
                            y: 23,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 391,
                            y: 20,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 401,
                            y: 20,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 400,
                            y: 11,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 413,
                            y: 10,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 432,
                            y: 11,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 445,
                            y: 12,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 453,
                            y: 12,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 465,
                            y: 13,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 477,
                            y: 15,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 489,
                            y: 17,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 494,
                            y: 19,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 505,
                            y: 22,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 509,
                            y: 25,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 512,
                            y: 27,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 514,
                            y: 29,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 513,
                            y: 33,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 512,
                            y: 37,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 506,
                            y: 40,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 502,
                            y: 42,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 492,
                            y: 45,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 480,
                            y: 48,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 470,
                            y: 49,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 447,
                            y: 52,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 429,
                            y: 52,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 406,
                            y: 52,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 396,
                            y: 51,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 362,
                            y: 48,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 354,
                            y: 46,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 340,
                            y: 43,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 334,
                            y: 39,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 331,
                            y: 38,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 326,
                            y: 34,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 328,
                            y: 30,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 329,
                            y: 26,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 334,
                            y: 23,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 337,
                            y: 22,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 346,
                            y: 18,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 356,
                            y: 16,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 366,
                            y: 15,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 388,
                            y: 12,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 357,
                            y: 0,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 397,
                            y: 0,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 473,
                            y: 0,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 486,
                            y: 0,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 506,
                            y: 7,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 517,
                            y: 14,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 522,
                            y: 18,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 528,
                            y: 23,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 529,
                            y: 30,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 530,
                            y: 37,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 524,
                            y: 43,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 519,
                            y: 47,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 510,
                            y: 55,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 493,
                            y: 60,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 481,
                            y: 63,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 455,
                            y: 68,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 435,
                            y: 69,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 409,
                            y: 69,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 392,
                            y: 69,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 362,
                            y: 65,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 346,
                            y: 60,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 339,
                            y: 57,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 334,
                            y: 56,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 327,
                            y: 52,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 323,
                            y: 50,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 320,
                            y: 49,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 317,
                            y: 46,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 306,
                            y: 36,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 307,
                            y: 300,
                            count: 100,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 318,
                            y: 350,
                            count: 75,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 327,
                            y: 400,
                            count: 50,
                        },
                        {
                            elementId: "h1",
                            elementLabel: "Site Intercept",
                            x: 345,
                            y: 450,
                            count: 25,
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
