window.extension = {
    goalsAlerts: function(disableClicks) {
        window.optimizely = window.optimizely || [];
        window.optimizely.push(['log']);
        var alertifyQueue = window.alertifyQueue = [];

        var oldLog = window.console.log;
        window.console.log = function(message) {
            alertifyQueue.push(message);
            oldLog.apply(window.console, arguments);
        };

        window.redTag.load.css('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.css');
        window.redTag.load.css('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.default.css');


        window.redTag.load.script('https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js', function() {
            /*global alertify, optimizely*/
            alertify.set({
                delay: 10000
            });
            optimizely.$.each(optimizely.variationNamesMap, function(k, v) {
                alertifyQueue.shift([optimizely.allExperiments[k], v].join(': '));
            });
            optimizely.$('head').append([
                '<style>',
                '#alertify-logs{top:0px;left:auto;height:auto;width:90%; max-width:500px;text-align:left}',
                '.alertify-log-success{background: rgb(219, 57, 57); color: rgb(255, 255, 255); font-size: 14px; text-align: left; box-shadow: 10px 10px 28px -12px rgba(0,0,0,0.75); border: 1px solid rgb(255, 170, 170); text-shadow: -1px -1px 0 rgb(173, 65, 65);}',
                '.alertify-log-error{background:#fc7e23;color:#fff;font-size:14px;text-align:left}',
                '.alertify-logs{z-index: 9999999999999999;}',
                '</style>'
            ].join(''));
            // alertifyQueue.forEach(log);
            alertifyQueue.push = log;
        }, function() {
            alert('Events for this test are only available on console');
            optimizely.$.each(optimizely.variationNamesMap, function(k, v) {
                console.log('---->' + [optimizely.allExperiments[k], v].join(': '))
            });
            alertifyQueue.forEach(extralog);
            alertifyQueue.push = extralog;
        });



        if (disableClicks) {
            window.extension.disableClicks(true);
        }

        function log() {
            var arg = arguments[0];
            if (!arg || arg.indexOf('Optimizely') !== 0) return;
            arg = arg.substr('Optimizely / '.length);
            if ((/API \/ Tracking/).test(arg)) {
                window.alertify.success(arg);
            }
            if ((/Tracker \/ Tracking/).test(arg)) {
                window.alertify.success(arg);
            }
            if ((/Evaluator \/ Bound event/).test(arg)) {
                window.alertify.error(arg);
            }
            if ((/API \/ Called/).test(arg)) {
                window.alertify.error(arg);
            }
        }

        function extralog() {
            var arg = arguments[0];
            if (!arg || arg.indexOf('Optimizely') !== 0) return;
            arg = arg.substr('Optimizely / '.length);
            if ((/API \/ Tracking/).test(arg)) {
                console.info('succ --> ' + arg);
            }
            if ((/Tracker \/ Tracking/).test(arg)) {
                console.info('succ --> ' + arg);
            }
            if ((/Evaluator \/ Bound event/).test(arg)) {
                console.error('Error --> ' + arg);
            }
            if ((/API \/ Called/).test(arg)) {
                console.error('Error --> ' + arg);
            }
        }
    },

    disableClicks: function() {
        jQuery('a').attr('href', '#');
        jQuery('a, button').click(function() { 
            return false; 
        });
    }
};