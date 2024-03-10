(self.webpackChunk = self.webpackChunk || []).push([
    [179], {
        2182: function() {
            0
        },
        9409: function(e, t, s) {
            "use strict";
            var i = s(4512),
                a = s(2735);
            var n = ({
                rules: e,
                getText: t,
                showRules: s = !0,
                setShowRules: n = (() => {})
            }) => ((0, a.useEffect)((() => {
                s && document.getElementById("about__text").focus()
            }), [s]), (0, i.jsxs)("div", Object.assign({
                className: "about"
            }, {
                children: [(0, i.jsxs)("button", Object.assign({
                    id: "about__title",
                    "aria-expanded": s,
                    onClick: () => n(!s)
                }, {
                    children: [(0, i.jsxs)("svg", Object.assign({
                        "aria-hidden": "true",
                        className: "about__icon",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, {
                        children: [(0, i.jsx)("rect", {
                            width: "20",
                            height: "20",
                            rx: "10",
                            fill: "white"
                        }, void 0), (0, i.jsx)("path", {
                            d: "M8.46045 15.8214H11.9795V15.4251C11.821 15.3406 11.6572 15.2719 11.4881 15.219C11.319 15.1556 11.1341 15.0975 10.9333 15.0447V8.81501L11.9795 8.6882V8.27606C11.673 8.14925 11.3401 8.03829 10.9808 7.94318C10.6215 7.84807 10.2622 7.76881 9.90294 7.70541H9.50665V15.0447C9.2953 15.0975 9.10508 15.1556 8.936 15.219C8.76692 15.2719 8.6084 15.3406 8.46045 15.4251V15.8214ZM11.2345 5.20087C11.2345 4.91554 11.1446 4.68833 10.965 4.51925C10.7748 4.35017 10.5264 4.26562 10.22 4.26562C9.91351 4.26562 9.67045 4.35017 9.4908 4.51925C9.31115 4.68833 9.22133 4.91554 9.22133 5.20087C9.22133 5.48619 9.31115 5.7134 9.4908 5.88248C9.67045 6.041 9.91351 6.12025 10.22 6.12025C10.5264 6.12025 10.7748 6.041 10.965 5.88248C11.1446 5.7134 11.2345 5.48619 11.2345 5.20087Z",
                            fill: "#202128"
                        }, void 0)]
                    }), void 0), (0, i.jsx)("h2", Object.assign({
                        className: "about__title"
                    }, {
                        children: t("about.title", "Разъяснение о порядке голосования")
                    }), void 0)]
                }), void 0), s && (0, i.jsx)("p", Object.assign({
                    tabIndex: 0,
                    id: "about__text",
                    className: "about__text"
                }, {
                    children: e
                }), void 0)]
            }), void 0));
            const d = e => `${e.lastName} ${e.firstName} ${e.midName}`;
            var o = s(3653),
                c = s.n(o);

            function l(e = 991) {
                const [t, s] = (0, a.useState)(window.innerWidth < e);
                return (0, a.useEffect)((() => {
                    function t() {
                        s(window.innerWidth < e)
                    }
                    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
                }), []), t
            }
            var r = s(8744);
            var h = ({
                deputy: e,
                isSelected: t,
                handlerSelectedCandidate: s,
                disabled: a,
                getText: n
            }) => {
                const o = d(e),
                    c = n("helpers.deleteCandidate", "Уже выбрано максимальное количество кандидатов. Чтобы выбрать этот вариант, пожалуйста, удалите из списка выбранных одного человека"),
                    l = String(e.deputyId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.u, {
                        id: "input-tooltip"
                    }, void 0), (0, i.jsxs)("label", Object.assign({
                        htmlFor: l,
                        "data-tooltip-id": "input-tooltip",
                        "data-tooltip-content": a ? c : "",
                        className: "candidate-checkbox__wrap"
                    }, {
                        children: [(0, i.jsx)("input", {
                            "aria-disabled": a,
                            "aria-label": a ? c : o,
                            type: "checkbox",
                            className: "candidate-checkbox__selected",
                            value: o,
                            checked: t,
                            id: l,
                            onChange: t => s(t, e)
                        }, void 0), (0, i.jsx)("span", {
                            "aria-hidden": "true",
                            className: "candidate-checkbox__custom " + (t ? "active" : a ? "disabled" : "")
                        }, void 0)]
                    }), void 0)]
                }, void 0)
            };
            var u = ({
                showDescription: e = !1,
                deputy: t,
                selectedDeputy: s = [],
                setSelectedDeputy: n = (() => {}),
                maxChoices: o = 5,
                getText: c
            }) => {
                const [l, r] = (0, a.useState)(e), [u, v] = (0, a.useState)(!1), {
                    desc: g,
                    shortDesc: m
                } = t;
                (0, a.useEffect)((() => {
                    v(_())
                }), [s]), (0, a.useEffect)((() => {
                    l && document.getElementById(`desc-${t.deputyId}`).focus()
                }), [l]);
                const p = s.length === o && !u,
                    x = l ? "Свернуть" : "Подробнее...",
                    j = c("candidates.detailed", ""),
                    b = c("" + (l ? "candidates.detailedHide" : "candidates.detailed"), `${x}`),
                    _ = () => -1 !== s.findIndex((e => e.deputyId === t.deputyId));
                return (0, i.jsxs)("div", Object.assign({
                    className: "candidate_card"
                }, {
                    children: [(0, i.jsx)("h2", Object.assign({
                        className: "candidate_card__name"
                    }, {
                        children: d(t)
                    }), void 0), g && (0, i.jsx)("button", Object.assign({
                        "aria-expanded": l,
                        "aria-label": j,
                        className: "candidate_card__btn",
                        onClick: () => r(!l)
                    }, {
                        children: b
                    }), void 0), (0, i.jsx)("p", Object.assign({
                        tabIndex: 0,
                        id: `desc-${t.deputyId}`,
                        className: "candidate_card__description"
                    }, {
                        children: l && g || m
                    }), void 0), (0, i.jsx)(h, {
                        getText: c,
                        disabled: p,
                        deputy: t,
                        isSelected: u,
                        handlerSelectedCandidate: function(e, t) {
                            const i = e.target.checked,
                                a = Object.assign({}, t);
                            p || (v(i), n(i ? [...s, a] : s.filter((({
                                deputyId: t
                            }) => t !== +e.target.id))))
                        }
                    }, void 0)]
                }), void 0)
            };
            var v = ({
                deputies: e,
                showDescription: t = !1,
                maxChoices: s,
                selectedDeputy: a,
                setSelectedDeputy: n,
                getText: d
            }) => (0, i.jsx)("section", Object.assign({
                className: "ballot-list"
            }, {
                children: e.map((e => (0, i.jsx)(u, {
                    showDescription: t,
                    getText: d,
                    deputy: e,
                    maxChoices: s,
                    selectedDeputy: a,
                    setSelectedDeputy: n
                }, e.deputyId)))
            }), void 0);
            var g = ({
                getText: e,
                onClick: t = (() => {})
            }) => {
                (0, a.useEffect)((() => {
                    document.getElementById("end-page__title").focus()
                }), []);
                const s = () => e("toTheMain", "На главную");
                return (0, i.jsx)("main", Object.assign({
                    className: "error-page"
                }, {
                    children: (0, i.jsxs)("div", Object.assign({
                        className: "error-page__wrap"
                    }, {
                        children: [(0, i.jsx)("h1", Object.assign({
                            className: "error-page__main-title"
                        }, {
                            children: e("errorPage.title", "404")
                        }), void 0), (0, i.jsx)("h2", Object.assign({
                            tabIndex: 0,
                            id: "end-page__title",
                            className: "error-page__secondary-title"
                        }, {
                            children: e("errorPage.description", "К сожалению, страница не найдена")
                        }), void 0), (0, i.jsx)("button", Object.assign({
                            "aria-label": s(),
                            onClick: t,
                            className: "red-btn"
                        }, {
                            children: s()
                        }), void 0)]
                    }), void 0)
                }), void 0)
            };
            var m = e => {
                    const {
                        electName: t,
                        electDate: s,
                        districtName: n
                    } = e;
                    return (0, a.useEffect)((() => {
                        document.getElementById("header__title").focus()
                    }), []), (0, i.jsxs)("header", Object.assign({
                        className: "header"
                    }, {
                        children: [(0, i.jsx)("h1", Object.assign({
                            id: "header__title",
                            tabIndex: 1,
                            className: "header__title"
                        }, {
                            children: t
                        }), void 0), (0, i.jsx)("span", Object.assign({
                            className: "header__data"
                        }, {
                            children: s
                        }), void 0), (0, i.jsx)("span", Object.assign({
                            className: "header__region"
                        }, {
                            children: n
                        }), void 0)]
                    }), void 0)
                },
                p = s(2148);
            const x = "#99261F",
                j = "#EEE0DA";
            var b = ({
                completed: e
            }) => (0, i.jsx)("section", Object.assign({
                className: "loader",
                "aria-label": `Загрузка ${e} процентов`
            }, {
                children: (0, i.jsx)(p.Z, {
                    height: "8px",
                    className: "loader__progress-bar",
                    labelClassName: "loader__progress-bar__label",
                    bgColor: x,
                    baseBgColor: j,
                    completed: e
                }, void 0)
            }), void 0);
            var _ = () => (0, i.jsxs)("svg", Object.assign({
                className: "end-page__sids__success",
                "aria-hidden": "true",
                width: "112",
                height: "112",
                viewBox: "0 0 112 112",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                children: [(0, i.jsx)("path", {
                    d: "M0 56C0 25.0721 25.0721 0 56 0C86.9279 0 112 25.0721 112 56C112 86.9279 86.9279 112 56 112C25.0721 112 0 86.9279 0 56Z",
                    fill: "#F7F5EF"
                }, void 0), (0, i.jsx)("path", {
                    d: "M36 59.1818L48.7273 71.9091L76 41",
                    stroke: "#028C4C",
                    strokeWidth: "5",
                    strokeLinecap: "square"
                }, void 0)]
            }), void 0);
            var O = ({
                label: e
            }) => (0, i.jsx)("section", Object.assign({
                className: "end-time-page"
            }, {
                children: (0, i.jsx)("h1", Object.assign({
                    tabIndex: 0,
                    id: "end-page__title",
                    className: "end-time-page__title"
                }, {
                    children: e
                }), void 0)
            }), void 0);
            const C = "/api/elect-ballot-service/guid/decrypt",
                f = "/api/elect-ballot-service/guid/get_sids",
                w = "/api/elect-ballot-service/guid/vote",
                y = "/api/elect-ballot-service/guid/skip";
            var T = function(e, t) {
                    return window.config && window.config.hasOwnProperty(e) ? window.config[e] : t
                },
                E = s(7299);
            (0, E.ZP)(c(), {
                retries: 4,
                retryDelay: (...e) => E.ZP.exponentialDelay(...e, 300),
                retryCondition(e) {
                    if ("ECONNABORTED" === e.code) return !1;
                    if (!e.response) return !0;
                    switch (e.response.status) {
                        case 502:
                        case 503:
                            return !0;
                        default:
                            return !1
                    }
                }
            });
            const S = (e, t) => {
                const s = T("APP_TOKEN", void 0);
                return c().post(e, t, {
                    headers: {
                        "X-APPLICATION-TOKEN": s
                    },
                    timeout: 15e3
                })
            };
            var N;
            ! function(e) {
                e.SET_BALLOT_DATA = "SET_BALLOT_DATA", e.SET_ERROR = "SET_ERROR", e.SET_LOADING = "SET_LOADING", e.SET_BLOCKING = "SET_BLOCKING", e.SET_SIDS = "SET_SIDS", e.SET_SHOW_SIDS = "SET_SHOW_SIDS", e.SET_NEW_BALLOT = "SET_NEW_BALLOT", e.REMOVE_ELECTION = "REMOVE_ELECTION"
            }(N || (N = {}));
            const L = {
                    isError: !1,
                    isLoading: !1,
                    isBlocking: !1,
                    showSids: !1,
                    ballot: {
                        guid: "",
                        expirationTimestamp: 0,
                        elections: [],
                        firstDecryptedAt: 0,
                        now: 0,
                        districtName: ""
                    },
                    sids: {
                        sids: []
                    }
                },
                k = (e, t) => {
                    switch (t.type) {
                        case N.SET_BALLOT_DATA:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: !1,
                                ballot: t.payload
                            });
                        case N.SET_SIDS:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: !1,
                                sids: t.payload || {
                                    sids: []
                                }
                            });
                        case N.SET_ERROR:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: !1,
                                isBlocking: !1,
                                isError: !0
                            });
                        case N.SET_LOADING:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: t.payload
                            });
                        case N.SET_BLOCKING:
                            return Object.assign(Object.assign({}, e), {
                                isBlocking: t.payload
                            });
                        case N.REMOVE_ELECTION:
                            return e.ballot.elections.shift(), Object.assign({}, e);
                        case N.SET_SHOW_SIDS:
                            return Object.assign(Object.assign({}, e), {
                                showSids: t.payload
                            });
                        case N.SET_NEW_BALLOT:
                            return e.ballot.elections.shift(), Object.assign(Object.assign({}, e), {
                                showSids: !1,
                                isBlocking: !1
                            });
                        default:
                            return e
                    }
                },
                D = (0, a.createContext)({
                    store: L,
                    dispatch: () => {}
                }),
                I = e => {
                    const t = window.location.pathname.split("/").pop(),
                        s = !!(i = t) && /^[0-9A-Fa-f]+$/.test(i);
                    var i;
                    if (t && s) return e({
                        type: N.SET_LOADING,
                        payload: !0
                    }), S(C, {
                        encryptedGuid: t
                    }).then((t => {
                        e({
                            type: N.SET_BALLOT_DATA,
                            payload: t.data
                        })
                    })).catch((t => {
                        t.response, e({
                            type: N.SET_ERROR,
                            payload: []
                        })
                    }));
                    e({
                        type: N.SET_ERROR,
                        payload: []
                    })
                },
                A = () => {
                    let e = T("START_VOTING_URL", "");
                    "show.kak-to-tak.ru" === window.location.host && (e = "https://show.kak-to-tak.ru/scam"), window.open(e, "_self")
                };
            var B = s(3346);
            var R = () => (0, i.jsxs)("svg", Object.assign({
                "aria-hidden": "true",
                className: "end-page__sids__attention",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                children: [(0, i.jsx)("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "10",
                    fill: "white"
                }, void 0), (0, i.jsx)("path", {
                    d: "M10.4601 17.8214H13.9792V17.4251C13.8207 17.3406 13.6569 17.2719 13.4878 17.219C13.3187 17.1556 13.1338 17.0975 12.933 17.0447V10.815L13.9792 10.6882V10.2761C13.6727 10.1492 13.3398 10.0383 12.9805 9.94318C12.6212 9.84807 12.2619 9.76881 11.9026 9.70541H11.5063V17.0447C11.295 17.0975 11.1048 17.1556 10.9357 17.219C10.7666 17.2719 10.6081 17.3406 10.4601 17.4251V17.8214ZM13.2342 7.20087C13.2342 6.91554 13.1443 6.68833 12.9647 6.51925C12.7745 6.35017 12.5261 6.26562 12.2197 6.26562C11.9132 6.26562 11.6701 6.35017 11.4905 6.51925C11.3108 6.68833 11.221 6.91554 11.221 7.20087C11.221 7.48619 11.3108 7.7134 11.4905 7.88248C11.6701 8.041 11.9132 8.12025 12.2197 8.12025C12.5261 8.12025 12.7745 8.041 12.9647 7.88248C13.1443 7.7134 13.2342 7.48619 13.2342 7.20087Z",
                    fill: "#202128"
                }, void 0)]
            }), void 0);
            var M = ({
                getText: e
            }) => {
                const {
                    state: t
                } = (0, B.TH)(), {
                    store: {
                        isError: s,
                        sids: {
                            sids: n
                        }
                    },
                    dispatch: d
                } = (0, a.useContext)(D);
                if ((0, a.useEffect)((() => {
                        (null == t ? void 0 : t.guid) && ((e, t) => {
                            t ? (e({
                                type: N.SET_LOADING,
                                payload: !0
                            }), S(f, {
                                guid: t
                            }).then((t => {
                                e({
                                    type: N.SET_SIDS,
                                    payload: t.data
                                })
                            })).catch((t => {
                                t.response, e({
                                    type: N.SET_ERROR,
                                    payload: {}
                                })
                            }))) : e({
                                type: N.SET_ERROR,
                                payload: {}
                            })
                        })(d, null == t ? void 0 : t.guid), document.getElementById("end-page__title").focus()
                    }), []), s || !(null == t ? void 0 : t.fromApp)) return (0, i.jsx)(g, {
                    getText: e,
                    onClick: A
                }, void 0);
                const o = () => e("toTheMain", "На главную");
                return (0, i.jsx)("main", Object.assign({
                    className: "end-page"
                }, {
                    children: (0, i.jsxs)("div", Object.assign({
                        className: (null == t ? void 0 : t.endTime) ? "end-page__wrap center-btn" : "end-page__wrap"
                    }, {
                        children: [(0, i.jsxs)("div", Object.assign({
                            className: "end-page__title"
                        }, {
                            children: [" ", (null == t ? void 0 : t.endTime) ? (0, i.jsx)(O, {
                                label: e("endPage.timesUp", "Время для голосования истекло")
                            }, void 0) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(_, {}, void 0), (0, i.jsx)("h1", Object.assign({
                                    tabIndex: 0,
                                    id: "end-page__title",
                                    className: "end-page__title"
                                }, {
                                    children: e("endPage.title", " Спасибо, ваш голос учтен!")
                                }), void 0), (0, i.jsx)("p", Object.assign({
                                    className: "end-page__text"
                                }, {
                                    children: e("endPage.description", "Спасибо за участие в тестовом дистанционном электронном голосовании! Ваш голос будет передан в систему в зашифрованном виде.")
                                }), void 0)]
                            }, void 0)]
                        }), void 0), 0 !== n.length && (0, i.jsxs)("div", Object.assign({
                            className: "end-page__sids"
                        }, {
                            children: [(0, i.jsxs)("h2", Object.assign({
                                className: "end-page__sids__title"
                            }, {
                                children: [(0, i.jsx)(R, {}, void 0), e("endPage.transactions", "Адрес зашифрованной транзакции в блокчейне:")]
                            }), void 0), (e => 1 === e.length ? (0, i.jsx)("div", Object.assign({
                                className: "end-page__sids__list"
                            }, {
                                children: e.map(((e, t) => (0, i.jsx)("span", Object.assign({
                                    className: "end-page__sids__list__sid"
                                }, {
                                    children: e
                                }), t)))
                            }), void 0) : (0, i.jsx)("ul", Object.assign({
                                className: "end-page__sids__list"
                            }, {
                                children: e.map(((e, t) => (0, i.jsx)("li", Object.assign({
                                    className: "end-page__sids__list__sid many"
                                }, {
                                    children: e
                                }), t)))
                            }), void 0))(n)]
                        }), void 0), (0, i.jsx)("button", Object.assign({
                            "aria-label": o(),
                            onClick: A,
                            className: "red-btn"
                        }, {
                            children: o()
                        }), void 0)]
                    }), void 0)
                }), void 0)
            };
            const F = (0, a.createContext)({});
            var P, V = F;
            ! function(e) {
                e.SET_TEXTS = "SET_TEXTS", e.SET_ERROR = "SET_ERROR", e.SET_LOADING = "SET_LOADING"
            }(P || (P = {}));
            const G = {
                    isError: !1,
                    isLoading: !1,
                    texts: {}
                },
                $ = (e, t) => {
                    switch (t.type) {
                        case P.SET_TEXTS:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: !1,
                                texts: t.payload
                            });
                        case P.SET_ERROR:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: !1,
                                isBlocking: !1,
                                isError: !0
                            });
                        case P.SET_LOADING:
                            return Object.assign(Object.assign({}, e), {
                                isLoading: t.payload
                            });
                        default:
                            return e
                    }
                },
                H = (0, a.createContext)({
                    store: G,
                    textsDispatch: () => {},
                    getText: () => ""
                }),
                W = e => {
                    e({
                        type: P.SET_LOADING,
                        payload: !0
                    });
                    return c().get("/texts.json").then((t => {
                        e({
                            type: P.SET_TEXTS,
                            payload: t.data
                        })
                    })).catch((t => {
                        t.response, e({
                            type: P.SET_ERROR,
                            payload: []
                        })
                    }))
                };
            var Z = s(2788),
                K = s(530);
            var X = ({
                onClick: e,
                name: t
            }) => (0, i.jsx)("svg", Object.assign({
                "aria-hidden": "true",
                "aria-label": `Удалить ${t}`,
                onClick: e,
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                children: (0, i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.58992 0.529405L1.05967 -0.000854492L-0.000854492 1.05965L0.529402 1.58991L4.93944 5.99998L0.529402 10.41L-0.000854492 10.9403L1.05967 12.0008L1.58992 11.4706L5.99995 7.0605L10.41 11.4706L10.9402 12.0008L12.0008 10.9403L11.4705 10.41L7.06046 5.99998L11.4705 1.58991L12.0008 1.05965L10.9402 -0.000854492L10.41 0.529405L5.99995 4.93946L1.58992 0.529405Z",
                    fill: "#1C1C1E"
                }, void 0)
            }), void 0);
            var q = ({
                deputy: e,
                selectedDeputy: t,
                setSelectedDeputy: s
            }) => {
                const a = d(e),
                    n = e.partyShort || e.party;
                return (0, i.jsxs)("li", Object.assign({
                    className: "candidates-cart__item"
                }, {
                    children: [(0, i.jsxs)("div", Object.assign({
                        className: "candidates-cart__item__info"
                    }, {
                        children: [(0, i.jsx)("span", Object.assign({
                            className: "candidates-cart__item__info__candidate-name"
                        }, {
                            children: a
                        }), void 0), (0, i.jsx)("span", Object.assign({
                            className: "candidates-cart__item__info__party-name"
                        }, {
                            children: n
                        }), void 0)]
                    }), void 0), (0, i.jsx)(X, {
                        name: a,
                        onClick: () => {
                            const i = t.filter((t => t.deputyId !== e.deputyId));
                            s(i)
                        }
                    }, void 0)]
                }), void 0)
            };
            var z = ({
                getText: e
            }) => (0, i.jsx)("li", Object.assign({
                className: "candidates-cart__item-empty"
            }, {
                children: (0, i.jsx)("span", {
                    children: e("candidates.empty", "Выберите кандидата из списка")
                }, void 0)
            }), void 0);
            var U = ({
                getText: e,
                maxChoices: t
            }) => {
                const {
                    selectedDeputy: s,
                    setSelectedDeputy: n
                } = (0, a.useContext)(V);
                return (0, i.jsx)("div", Object.assign({
                    className: "candidates-cart"
                }, {
                    children: t > 1 && (0, i.jsxs)("ul", Object.assign({
                        className: "candidates-cart__list"
                    }, {
                        children: [null == s ? void 0 : s.map((e => (0, i.jsx)(q, {
                            deputy: e,
                            selectedDeputy: s,
                            setSelectedDeputy: n
                        }, e.deputyId))), (() => {
                            const a = t - s.length;
                            return Array.from({
                                length: a
                            }, ((t, s) => (0, i.jsx)(z, {
                                getText: e
                            }, s)))
                        })()]
                    }), void 0)
                }), void 0)
            };
            var Y = ({
                maxChoices: e,
                getText: t
            }) => {
                const s = e > 1 ? "aside" : "aside no-basket";
                return (0, i.jsx)("aside", Object.assign({
                    className: s
                }, {
                    children: (0, i.jsx)(U, {
                        getText: t,
                        maxChoices: e
                    }, void 0)
                }), void 0)
            };
            var J = ({
                candidateAmount: e,
                getText: t
            }) => (0, i.jsx)(i.Fragment, {
                children: e && (0, i.jsx)("div", Object.assign({
                    className: "candidate-amount"
                }, {
                    children: (() => {
                        let s = Math.abs(e);
                        return s %= 100, s >= 5 && s <= 20 ? t("candidates.nameFive", "{{candidateAmount}} кандидатов", {
                            candidateAmount: e
                        }) : (s %= 10, 1 === s ? t("candidates.nameOne", "{{candidateAmount}} кандидат", {
                            candidateAmount: e
                        }) : s >= 2 && s <= 4 ? t("candidates.nameTwo", "{{candidateAmount}} кандидата", {
                            candidateAmount: e
                        }) : t("candidates.nameFive", "{{candidateAmount}} кандидатов", {
                            candidateAmount: e
                        }))
                    })()
                }), void 0)
            }, void 0);
            const Q = (e, t, s, i) => {
                e([]), 0 === s ? t("/ballot/done", {
                    state: {
                        guid: i,
                        fromApp: !0
                    },
                    replace: !0
                }) : window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            };
            var ee = function({
                className: e
            }) {
                return (0, i.jsxs)("svg", Object.assign({
                    "aria-hidden": "true",
                    className: e,
                    width: "56",
                    height: "56",
                    viewBox: "0 0 56 56",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, {
                    children: [(0, i.jsx)("circle", {
                        cx: "28",
                        cy: "28",
                        r: "28",
                        fill: "#F27F0C"
                    }, void 0), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M30.5456 12.7275H25.4547L26.2184 30.5457H29.782L30.5456 12.7275ZM28.0002 35.0003C26.2429 35.0003 24.8184 36.4248 24.8184 38.1821C24.8184 39.9394 26.2429 41.3639 28.0002 41.3639C29.7574 41.3639 31.182 39.9394 31.182 38.1821C31.182 36.4248 29.7574 35.0003 28.0002 35.0003Z",
                        fill: "white"
                    }, void 0)]
                }), void 0)
            };
            var te = function() {
                return (0, i.jsx)("svg", Object.assign({
                    "aria-hidden": "true",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, {
                    children: (0, i.jsx)("path", {
                        d: "M9.9999 11.1195L16.1068 17.2264L17.2264 16.1068L11.1195 9.9999L17.2264 3.89302L16.1068 2.77344L9.9999 8.88031L3.89302 2.77344L2.77344 3.89302L8.88031 9.9999L2.77344 16.1068L3.89302 17.2264L9.9999 11.1195Z",
                        fill: "#13151A"
                    }, void 0)
                }), void 0)
            };
            var se = ({
                show: e,
                setShowConfirmModal: t,
                dispatch: s,
                ballot: n,
                setSelectedDeputy: d,
                setShowConfirmEnd: o,
                getText: c
            }) => {
                const l = (0, B.s0)(),
                    [r, h] = (0, a.useState)(!1),
                    u = (0, a.useRef)(null),
                    v = (0, a.useRef)(null),
                    g = (0, a.useRef)(null),
                    m = e => {
                        var t, s;
                        "Tab" === e.key && (e.shiftKey ? document.activeElement === v.current && (e.preventDefault(), null === (t = g.current) || void 0 === t || t.focus()) : document.activeElement === g.current && (e.preventDefault(), null === (s = v.current) || void 0 === s || s.focus()))
                    };
                (0, a.useEffect)((() => {
                    var t, s;
                    if (e) {
                        const e = null === (t = u.current) || void 0 === t ? void 0 : t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                        return e && e.length > 0 && (v.current = e[0], g.current = e[e.length - 1], null === (s = u.current) || void 0 === s || s.focus()), document.addEventListener("keydown", m), () => {
                            document.removeEventListener("keydown", m)
                        }
                    }
                }), [e]);
                const p = {
                    guid: n.guid,
                    votingId: n.elections[0].votingId
                };
                return (0, i.jsx)("section", Object.assign({
                    className: "confirm-modal",
                    onClick: () => t(!1)
                }, {
                    children: (0, i.jsxs)("div", Object.assign({
                        ref: u,
                        tabIndex: -1,
                        role: "dialog",
                        "aria-modal": "true",
                        className: "confirm-modal__wrap"
                    }, {
                        children: [(0, i.jsxs)("div", Object.assign({
                            className: "confirm-modal__header"
                        }, {
                            children: [(0, i.jsx)(ee, {
                                className: "confirm-modal__header__attetion-icon"
                            }, void 0), (0, i.jsx)("button", Object.assign({
                                "aria-label": "Закрыть модальное окно",
                                onClick: function(e) {
                                    "confirm-modal" === e.target.className && t(!1)
                                },
                                className: "confirm-modal__header__close-btn"
                            }, {
                                children: (0, i.jsx)(te, {}, void 0)
                            }), void 0)]
                        }), void 0), (0, i.jsx)("h2", Object.assign({
                            className: "confirm-modal__title"
                        }, {
                            children: c("confirmModal.title", "Вы действительно хотите пропустить этот бюллетень?")
                        }), void 0), (0, i.jsx)("p", Object.assign({
                            className: "confirm-modal__description"
                        }, {
                            children: c("confirmModal.description", "Вернуться к нему будет невозможно")
                        }), void 0), (0, i.jsxs)("div", Object.assign({
                            className: "confirm-modal__control"
                        }, {
                            children: [(0, i.jsx)("button", Object.assign({
                                "aria-disabled": r,
                                disabled: r,
                                className: "transparent-btn " + (r ? "disabled" : ""),
                                onClick: function() {
                                    h(!0), ((e, t) => (e({
                                        type: N.SET_BLOCKING,
                                        payload: !0
                                    }), S(y, t).then((t => (e({
                                        type: N.SET_NEW_BALLOT,
                                        payload: []
                                    }), t))).catch((e => {
                                        throw e.response
                                    }))))(s, p).then((() => {
                                        Q(d, l, n.elections.length, n.guid), n.elections.length > 0 && o(!0)
                                    })).catch((() => {
                                        console.error("Не удалось пропустить бюллетень"), t(!1), s({
                                            type: N.SET_BLOCKING,
                                            payload: !1
                                        })
                                    })).finally((() => h(!1)))
                                }
                            }, {
                                children: c("confirmModal.confirmBtn", "Пропустить бюллетень")
                            }), void 0), (0, i.jsx)("button", Object.assign({
                                className: "red-btn " + (r ? "disabled" : ""),
                                disabled: r,
                                onClick: () => t(!1)
                            }, {
                                children: c("confirmModal.cancelBtn", "Вернуться к бюллетеню")
                            }), void 0)]
                        }), void 0)]
                    }), void 0)
                }), void 0)
            };
            var ie = ({
                open: e
            }) => (0, i.jsx)("svg", Object.assign({
                "aria-hidden": "true",
                className: "arrow-icon " + (e ? "open" : ""),
                width: "16",
                height: "10",
                viewBox: "0 0 16 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                children: (0, i.jsx)("path", {
                    d: "M14 9.49989L15.5 7.99991L8.00003 0.5L0.500001 8.00002L1.99999 9.5L8.00003 3.49997L14 9.49989Z",
                    fill: "#0A48C0",
                    fillOpacity: "0.5"
                }, void 0)
            }), void 0);
            var ae = ({
                getText: e,
                selectedDeputy: t,
                maxChoices: s,
                showSteps: a = !0
            }) => {
                const n = t.length;
                return (0, i.jsx)("section", Object.assign({
                    className: "progress"
                }, {
                    children: s > 1 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("div", Object.assign({
                            className: "progress__text"
                        }, {
                            children: [e("aside.selectedCount", "Выбрано {{minChoices}} из {{maxChoices}}", {
                                minChoices: n,
                                maxChoices: s
                            }), (0, i.jsx)("br", {}, void 0)]
                        }), void 0), (0, i.jsx)("div", Object.assign({
                            className: "progress__steps"
                        }, {
                            children: a && (() => {
                                const e = [];
                                for (let t = 0; t < s; t++) e.push((0, i.jsx)("span", {
                                    className: "" + (n > t ? "progress__block check" : "progress__block")
                                }, t));
                                return e
                            })()
                        }), void 0)]
                    }, void 0)
                }), void 0)
            };
            var ne = ({
                maxChoices: e,
                selectedDeputy: t = [],
                getText: s
            }) => {
                const [n, d] = (0, a.useState)(!1), o = s("" + (n ? "aside.collapsedBtn" : "aside.expandedBtn"), "" + (n ? "Свернуть" : "Развернуть"));
                return (0, i.jsxs)("div", Object.assign({
                    className: "mobile-aside " + (n ? "open" : "")
                }, {
                    children: [(0, i.jsxs)("div", Object.assign({
                        className: "mobile-aside__wrap"
                    }, {
                        children: [(0, i.jsx)(ae, {
                            getText: s,
                            maxChoices: e,
                            selectedDeputy: t,
                            showSteps: !1
                        }, void 0), (0, i.jsxs)("div", Object.assign({
                            className: "mobile-aside__btn",
                            onClick: () => d(!n)
                        }, {
                            children: [o, (0, i.jsx)(ie, {
                                open: n
                            }, void 0)]
                        }), void 0)]
                    }), void 0), (0, i.jsx)(U, {
                        maxChoices: e,
                        getText: s
                    }, void 0)]
                }), void 0)
            };
            var de = () => {
                const {
                    store: {
                        showSids: e
                    },
                    dispatch: t
                } = (0, a.useContext)(D), {
                    getText: s
                } = (0, a.useContext)(H), n = s("getTransactionAddress", "Хочу получить адрес зашифрованной транзакции в блокчейн");
                return (0, i.jsx)("div", Object.assign({
                    className: "sids-btn"
                }, {
                    children: (0, i.jsx)("div", Object.assign({
                        className: "sids-btn__wrap"
                    }, {
                        children: (0, i.jsxs)("label", Object.assign({
                            className: "sids-btn__label " + (e ? "active" : ""),
                            htmlFor: "sids-btn"
                        }, {
                            children: [(0, i.jsx)("input", {
                                type: "checkbox",
                                "aria-label": n,
                                checked: e,
                                className: "sids-btn__input",
                                id: "sids-btn",
                                name: "sids-btn",
                                onChange: e => {
                                    ((e, t) => {
                                        e({
                                            type: N.SET_SHOW_SIDS,
                                            payload: t
                                        })
                                    })(t, e.target.checked)
                                }
                            }, void 0), (0, i.jsx)("span", Object.assign({
                                "aria-hidden": !0,
                                className: "sids-btn__text"
                            }, {
                                children: n
                            }), void 0)]
                        }), void 0)
                    }), void 0)
                }), void 0)
            };
            var oe = () => {
                    const [e, t] = (0, a.useState)(!1);
                    return (0, a.useEffect)((() => {
                        const t = e => {
                                const t = "Вы уверены, что хотите покинуть сайт?";
                                return e.returnValue = t, t
                            },
                            s = t => {
                                if (e) {
                                    const e = "Вы уверены, что хотите покинуть сайт?";
                                    window.confirm(e) || t.preventDefault()
                                }
                            };
                        return window.addEventListener("beforeunload", t), window.addEventListener("popstate", s), window.addEventListener("navigate", s), () => {
                            window.removeEventListener("beforeunload", t), window.removeEventListener("popstate", s), window.removeEventListener("navigate", s)
                        }
                    }), [e]), (0, i.jsx)(i.Fragment, {}, void 0)
                },
                ce = s(7972);
            const le = (0, a.createContext)({
                    currentTime: 0
                }),
                re = ({
                    children: e
                }) => {
                    const {
                        store: {
                            ballot: t
                        }
                    } = (0, a.useContext)(D), s = (0, B.s0)(), {
                        elapsedTime: n
                    } = (0, ce.W)({
                        duration: t.expirationTimestamp,
                        startAt: t.now,
                        isPlaying: !0,
                        updateInterval: 1,
                        onComplete: () => {
                            s("/ballot/done", {
                                state: {
                                    fromApp: !0,
                                    endTime: !0
                                }
                            })
                        }
                    }), d = (0, a.useMemo)((() => Math.ceil(t.expirationTimestamp - n)), [n]);
                    return (0, i.jsx)(le.Provider, Object.assign({
                        value: {
                            currentTime: d
                        }
                    }, {
                        children: e
                    }), void 0)
                };
            var he = le;
            var ue = (0, a.memo)((() => {
                const {
                    currentTime: e
                } = (0, a.useContext)(he);
                return (0, i.jsx)("div", Object.assign({
                    className: "timer"
                }, {
                    children: (e => {
                        const t = Math.floor(e / 3600),
                            s = Math.floor(e / 60),
                            i = e % 60;
                        return e < 10 ? `00:00:0${i}` : 0 === e ? "00:00" : `${60===s?0:t<10?`0${t}`:t}:${s<10?`0${s}`:s}:${i<10?`0${i}`:i}\n                `
                    })(e)
                }), void 0)
            }));
            var ve = ({
                maxChoices: e
            }) => {
                const [t, s] = (0, a.useState)(!1), n = e > 1 ? "up-button" : "up-button no-basket";
                const d = () => {
                    !t && window.scrollY > 400 ? s(!0) : t && window.scrollY <= 400 && s(!1)
                };
                return (0, a.useEffect)((() => (addEventListener("scroll", d), () => removeEventListener("scroll", d))), [t]), (0, i.jsx)(i.Fragment, {
                    children: t && (0, i.jsx)("button", {
                        "aria-label": "Вверх",
                        className: n,
                        onClick: function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }), document.getElementById("header__title").focus()
                        }
                    }, void 0)
                }, void 0)
            };
            var ge = ({
                maxChoices: e
            }) => {
                const t = e > 1 ? "mobile-timer" : "mobile-timer no-basket";
                return (0, i.jsxs)("header", Object.assign({
                    className: t
                }, {
                    children: [(0, i.jsx)("h2", Object.assign({
                        className: "mobile-timer__title"
                    }, {
                        children: "Время голосования:"
                    }), void 0), (0, i.jsx)(ue, {}, void 0)]
                }), void 0)
            };
            var me;
            ! function(e) {
                e.success = "success", e.error = "error"
            }(me || (me = {}));
            var pe = e => {
                const {
                    isBlocking: t,
                    showSids: s,
                    minChoices: n,
                    ballot: d,
                    selectedDeputy: o,
                    setSelectedDeputy: c,
                    dispatch: l,
                    maxChoices: h,
                    getText: u
                } = e, v = (0, B.s0)(), [g, m] = (0, a.useState)(!1), p = n > o.length || t || g, x = d.elections[0], j = u(1 === h ? "helpers.sendBtnBlocking" : "helpers.sendBtnBlockingMany", ""), b = window.ditVoting.createBallot;
                const _ = () => u("votingControl.sendBtn", "Проголосовать");
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.u, {
                        id: "button-tooltip",
                        openOnClick: !0
                    }, void 0), (0, i.jsx)("button", Object.assign({
                        "data-tooltip-id": "button-tooltip",
                        "data-tooltip-content": p ? j : "",
                        "data-tooltip-place": "top",
                        "aria-disabled": p,
                        "aria-label": p ? j : _(),
                        onClick: p ? () => {} : function e() {
                            const t = null == o ? void 0 : o.map((e => e.deputyId));
                            try {
                                const i = b({
                                        votingId: x.votingId,
                                        encryptionKey: x.publicKey,
                                        districtId: x.districtId,
                                        minChoices: x.minChoices,
                                        maxChoices: x.maxChoices,
                                        voterChoices: t
                                    }),
                                    a = {
                                        accountAddressBlock: i.voterAddress,
                                        guid: d.guid,
                                        keyVerificationHash: i.keyVerificationHash,
                                        rawStoreBallotTx: i.tx,
                                        rawTxHash: i.txHash,
                                        showSid: s,
                                        votingId: x.votingId
                                    };
                                m(!0), ((e, t) => (e({
                                    type: N.SET_BLOCKING,
                                    payload: !0
                                }), S(w, t).then((t => (e({
                                    type: N.SET_NEW_BALLOT,
                                    payload: []
                                }), t))).catch((e => {
                                    throw e.response
                                }))))(l, a).then((() => {
                                    Q(c, v, d.elections.length, d.guid), document.getElementById("header__title").focus()
                                })).catch((t => {
                                    400 === t.status && 1206 === t.data.errorCode && e(), console.error("Не удалось отправить данные"), l({
                                        type: N.SET_BLOCKING,
                                        payload: !1
                                    })
                                })).finally((() => m(!1)))
                            } catch (e) {
                                console.error(u("notification.fail", "Не получилось зашифровать данные"))
                            }
                        },
                        type: "submit",
                        className: "red-btn " + (p ? "disabled" : "")
                    }, {
                        children: _()
                    }), void 0)]
                }, void 0)
            };
            var xe = ({
                isBlocking: e,
                ballot: t,
                setShowConfirmModal: s,
                getText: a
            }) => {
                const n = t.elections[0].canSkip,
                    d = () => a("votingControl.skipBtn", "Пропустить");
                return (0, i.jsx)(i.Fragment, {
                    children: n && t.elections.length > 0 && (0, i.jsx)("button", Object.assign({
                        "aria-disabled": e,
                        "aria-label": d(),
                        className: "transparent-btn " + (e ? "disabled" : ""),
                        onClick: e ? () => {} : () => {
                            document.getElementById("header__title").focus(), s(!0)
                        }
                    }, {
                        children: d()
                    }), void 0)
                }, void 0)
            };
            var je = ({
                setShowConfirmModal: e
            }) => {
                const {
                    store: {
                        ballot: t,
                        isBlocking: s,
                        showSids: n
                    },
                    dispatch: d
                } = (0, a.useContext)(D), {
                    selectedDeputy: o,
                    setSelectedDeputy: c
                } = (0, a.useContext)(V), r = l(769), {
                    getText: h
                } = (0, a.useContext)(H), u = t.elections[0], v = u.maxChoices > 1 ? "voting-control" : "voting-control no-basket";
                return (0, i.jsxs)("section", Object.assign({
                    className: `${v} --mobile`
                }, {
                    children: [r && (0, i.jsx)(ge, {
                        maxChoices: u.maxChoices
                    }, void 0), (0, i.jsx)(pe, {
                        getText: h,
                        isBlocking: s,
                        showSids: n,
                        minChoices: u.minChoices,
                        maxChoices: u.maxChoices,
                        ballot: t,
                        selectedDeputy: o,
                        setSelectedDeputy: c,
                        dispatch: d
                    }, void 0), (0, i.jsx)(xe, {
                        getText: h,
                        setShowConfirmModal: e,
                        isBlocking: s,
                        ballot: t
                    }, void 0)]
                }), void 0)
            };
            var be = function() {
                const e = l(769),
                    {
                        store: {
                            ballot: t,
                            isError: s
                        },
                        dispatch: d
                    } = (0, a.useContext)(D),
                    {
                        selectedDeputy: o,
                        setSelectedDeputy: c
                    } = (0, a.useContext)(V),
                    {
                        textsDispatch: r,
                        getText: h
                    } = (0, a.useContext)(H),
                    [u, p] = (0, a.useState)(!1),
                    [x, j] = (0, a.useState)(!1),
                    [_, O] = (0, a.useState)(!0),
                    [C, f] = (0, a.useState)(0),
                    [w, y] = (0, a.useState)(!1),
                    {
                        elections: T
                    } = t,
                    E = T[0];
                if ((0, a.useEffect)((() => {
                        y(!1)
                    }), [E]), (0, a.useLayoutEffect)((() => {
                        const e = setInterval((() => f((e => e + 25))), 1e3);
                        setTimeout((() => {
                            clearInterval(e), Promise.all([I(d), W(r)]).finally((() => {
                                f(100), setTimeout((() => {
                                    O(!1)
                                }), 1e3)
                            }))
                        }), 3e3)
                    }), []), _) return (0, i.jsx)(b, {
                    completed: C
                }, void 0);
                if (s || 0 === T.length) return (0, i.jsx)(g, {
                    getText: h,
                    onClick: A
                }, void 0);
                const S = E.maxChoices > 1 ? "app" : "app no-basket",
                    N = 1 !== E.maxChoices;
                return (0, i.jsxs)(re, {
                    children: [(0, i.jsx)(oe, {}, void 0), (0, i.jsxs)("div", Object.assign({
                        "aria-hidden": u,
                        className: S
                    }, {
                        children: [u && (0, i.jsx)(se, {
                            show: u,
                            getText: h,
                            setShowConfirmModal: p,
                            ballot: t,
                            dispatch: d,
                            setSelectedDeputy: c,
                            setShowConfirmEnd: j
                        }, void 0), (0, i.jsxs)("main", Object.assign({
                            className: "main"
                        }, {
                            children: [(0, i.jsx)(m, {
                                ballotName: E.ballotName,
                                electDate: E.electDate,
                                electName: E.electName,
                                districtName: N ? E.districtName : ""
                            }, void 0), !e && (0, i.jsxs)("div", Object.assign({
                                className: "voting-metric"
                            }, {
                                children: [(0, i.jsx)("h2", Object.assign({
                                    className: "aside__title"
                                }, {
                                    children: h("aside.votingTime", "Время голосования")
                                }), void 0), (0, i.jsx)(ue, {}, void 0), (0, i.jsx)(ae, {
                                    getText: h,
                                    maxChoices: E.maxChoices,
                                    selectedDeputy: o
                                }, void 0)]
                            }), void 0), (0, i.jsx)(n, {
                                getText: h,
                                rules: E.electRules,
                                showRules: w,
                                setShowRules: y
                            }, void 0), (0, i.jsx)(J, {
                                getText: h,
                                candidateAmount: E.deputies.length
                            }, void 0), (0, i.jsx)(v, {
                                getText: h,
                                deputies: E.deputies,
                                maxChoices: E.maxChoices,
                                selectedDeputy: o,
                                setSelectedDeputy: c
                            }, void 0), (0, i.jsx)(de, {}, void 0), !e && (0, i.jsx)(je, {
                                setShowConfirmModal: p
                            }, void 0), (0, i.jsx)(ve, {
                                maxChoices: E.maxChoices
                            }, void 0)]
                        }), void 0), e && E.maxChoices > 1 ? (0, i.jsx)(ne, {
                            getText: h,
                            maxChoices: E.maxChoices,
                            selectedDeputy: o
                        }, void 0) : (0, i.jsx)(Y, {
                            getText: h,
                            maxChoices: E.maxChoices
                        }, void 0), e && (0, i.jsx)(je, {
                            setShowConfirmModal: p
                        }, void 0)]
                    }), void 0)]
                }, void 0)
            };
            Z.render((0, i.jsx)(K.VK, {
                children: (0, i.jsx)((({
                    children: e
                }) => {
                    const [t, s] = (0, a.useReducer)($, G), n = {
                        store: t,
                        textsDispatch: s,
                        getText: (e, s, i) => {
                            const {
                                texts: a
                            } = t;
                            let n = a[e] || s;
                            if (i && 0 !== Object.keys(i).length)
                                for (const e in i) {
                                    const t = new RegExp(`{{${e}}}`, "g");
                                    n = n.replace(t, i[e])
                                }
                            return n
                        }
                    };
                    return (0, i.jsx)(H.Provider, Object.assign({
                        value: n
                    }, {
                        children: e
                    }), void 0)
                }), {
                    children: (0, i.jsx)((({
                        children: e
                    }) => {
                        const [t, s] = (0, a.useReducer)(k, L), n = {
                            store: t,
                            dispatch: s
                        };
                        return (0, i.jsx)(D.Provider, Object.assign({
                            value: n
                        }, {
                            children: e
                        }), void 0)
                    }), {
                        children: (0, i.jsx)((({
                            children: e
                        }) => {
                            const [t, s] = (0, a.useState)([]);
                            return (0, i.jsx)(F.Provider, Object.assign({
                                value: {
                                    selectedDeputy: t,
                                    setSelectedDeputy: s
                                }
                            }, {
                                children: e
                            }), void 0)
                        }), {
                            children: (0, i.jsx)((() => {
                                const e = (0, B.TH)(),
                                    {
                                        getText: t
                                    } = (0, a.useContext)(H);
                                return (0, i.jsxs)(B.Z5, Object.assign({
                                    location: e
                                }, {
                                    children: [(0, i.jsx)(B.AW, {
                                        path: "/ballot/check/*",
                                        element: (0, i.jsx)(be, {}, void 0)
                                    }, void 0), (0, i.jsx)(B.AW, {
                                        path: "/ballot/done",
                                        element: (0, i.jsx)(M, {
                                            getText: t
                                        }, void 0)
                                    }, void 0), (0, i.jsx)(B.AW, {
                                        path: "*",
                                        element: (0, i.jsx)(B.Fg, {
                                            to: "ballot/check/",
                                            replace: !0
                                        }, void 0)
                                    }, void 0)]
                                }), void 0)
                            }), {}, void 0)
                        }, void 0)
                    }, void 0)
                }, void 0)
            }, void 0), document.getElementById("root"))
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [736], (function() {
            return t(9409), t(2182)
        }));
        e.O()
    }
]);