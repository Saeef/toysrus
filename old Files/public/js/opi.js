//tealium universal tag - utag.93 ut4.0.201702062204, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;
        if (utag === undefined) {
            utag = {};
        }
        if (utag.ut === undefined) {
            utag.ut = {};
        }
        if (utag.ut.loader === undefined) {
            u.loader = function(o) {
                var a, b, c, l;
                a = document;
                if (o.type === "iframe") {
                    b = a.createElement("iframe");
                    b.setAttribute("height", "1");
                    b.setAttribute("width", "1");
                    b.setAttribute("style", "display:none");
                    b.setAttribute("src", o.src);
                } else if (o.type === "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                    b.src = o.src;
                    return;
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                    b.src = o.src;
                }
                if (o.id) {
                    b.id = o.id;
                }
                if (typeof o.cb === "function") {
                    if (b.addEventListener) {
                        b.addEventListener("load", function() {
                            o.cb();
                        }, false);
                    } else {
                        b.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                this.onreadystatechange = null;
                                o.cb();
                            }
                        }
                        ;
                    }
                }
                l = o.loc || "head";
                c = a.getElementsByTagName(l)[0];
                if (c) {
                    utag.DB("Attach to " + l + ": " + o.src);
                    if (l === "script") {
                        c.parentNode.insertBefore(b, c);
                    } else {
                        c.appendChild(b);
                    }
                }
            }
            ;
        } else {
            u.loader = utag.ut.loader;
        }
        u.ev = {
            'view': 1
        };
        u.initialized = false;
        u.map = {
            "page_type": "pageType"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || u.ev.all !== undefined) {
                var c, d, e, f, i;
                u.data = {};
                for (d in utag.loader.GV(u.map)) {
                    if (b[d] !== undefined && b[d] !== "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            u.data[e[f]] = b[d];
                        }
                    }
                }
                (function(w, d) {
                    'use strict';
                    var lhost = location.protocol + '//' + location.host + '/';
                    var assetDirectory = lhost + 'assets/onlineopinionV599/';
                    var loadOpinionLab = function(url, callback) {
                        var script = d.createElement('script');
                        if (script.readyState) {
                            script.onreadystatechange = function() {
                                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                                    script.onreadystatechange = null;
                                    callback();
                                }
                            }
                            ;
                        } else {
                            script.onload = function() {
                                callback();
                            }
                            ;
                        }
                        script.src = url;
                        d.getElementsByTagName('head')[0].appendChild(script);
                        var link = d.createElement('link');
                        link.rel = 'stylesheet';
                        link.type = 'text/css';
                        link.href = '../builds/css/oo_style.css';
                        d.getElementsByTagName('head')[0].appendChild(link);
                    };
                    loadOpinionLab('oo_engine.min.js', function() {
                        var pid = '01'
                          , uid = OOo.readCookie('UrCapture')
                          , custId = typeof UrCapture !== 'undefined' ? UrCapture.id : '9f2961500b7247231f27cb7fdc8fbc4e'
                          , targetPath = typeof UrCapture !== 'undefined' ? UrCapture.server : '//eu1-00000025.userreplay.net';
                        OOo.oo_tab = new OOo.Ocode({
                            tab: {
                                position: 'right',
                                title: 'Feedback',
                                tabType: 0,
                                verbiage: 'Feedback',
                                iconPath: assetDirectory
                            },
                            mobileTouches: 1,
                            legacyVariables: {
                                vars: 'pid%3D' + pid + '%26info%3D' + uid,
                                override: true
                            },
                            customVariables: {
                                urPid: pid,
                                urUid: uid,
                                urCustId: custId,
                                urTargetPath: targetPath
                            }
                        });
                    });
                })(window, document);
            }
        }
        ;
        utag.o[loader].loader.LOAD(id);
    })("93", "toysrus.uk");
} catch (error) {
    utag.DB(error);
}
