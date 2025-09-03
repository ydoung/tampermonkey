// ==UserScript==
// @name         Multi-Request Payload Override (updated)
// @namespace    https://github.com/ydoung/tampermonkey
// @version      1.0.1
// @description  Override multiple HTTP request responses with custom payloads (updated)
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
                        }
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
