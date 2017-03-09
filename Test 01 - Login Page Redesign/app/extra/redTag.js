window.redTag = {
    cookie: {
        set: function(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        read: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        delete: function(name) {
            window.redTag.setCookie(name, "", -1);
        }
    },
    load: {
        css: function(url) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = url;
            link.media = 'all';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(link, s);
        },
        script: function(url, callback, extraCallback) {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = url;

            ga.onload = ga.onreadystatechange = function() {
                var rs = this.readyState;
                if (rs && rs != 'complete' && rs != 'loaded') return;
                try {
                    callback();
                } catch (e) {
                    // console.log('ups');
                    try {
                        extraCallback();
                    } catch (e) {
                        // console.log('ups again')
                    }
                }
            };

            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        }
    },
    localStorage: {
        set: function(name, value) {
            localStorage.setItem(name, JSON.stringify(value));
        },
        read: function(name) {
            var value = localStorage.getItem(name);
            return value && JSON.parse(value);
        }
    }

};

