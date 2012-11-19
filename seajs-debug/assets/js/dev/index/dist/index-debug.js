define("app/index/1.0.0/alert-debug", [], function(require, exports) {
    exports.init = function(msg) {
        window.alert(msg);
    }
});
define("app/index/1.0.0/index-debug", ["./alert-debug", "arale/widget/1.0.2/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug", "$-debug", "arale/widget/1.0.2/templatable-debug", "gallery/handlebars/1.0.0/handlebars-debug"], function(require, exports, module) {
    var Widget = require('arale/widget/1.0.2/widget-debug');
    
    var Templatable = require('arale/widget/1.0.2/templatable-debug');
    
    var Alert = require('./alert-debug');
    
    var Index = Widget.extend({
        Implements: Templatable,
        
        template: '<div class="mod"><div class="hd">{{title}}</div><div class="bd">{{content}}<button type="button" id="open">open</button></div></div>',
        
        model: {
            title: '标题',
            content: '内容'
        },
        
        events: {
            'mouseenter .hd': 'focusTitle',
            'mouseleave .hd': 'blurTitle',
            'click .bd': 'clickBody',
            'click #open': 'openAlert'
        },
        
        focusTitle: function() {
            this.$('.hd').css('backgroundColor', 'red');
        },
        
        blurTitle: function() {
            this.$('.hd').css('backgroundColor', 'white');
        },
        
        clickBody: function() {
            this.$('.bd').css('backgroundColor', '#CCC');
        },
        
        openAlert: function() {
            Alert.init('hello seajs');
        }
    });
    
    module.exports = Index;
});
