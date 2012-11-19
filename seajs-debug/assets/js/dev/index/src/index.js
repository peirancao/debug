define(function(require, exports, module) {
    var Widget = require('widget');
    
    var Templatable = require('templatable');
    
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
            'click .bd': 'clickBody'
        },
        
        focusTitle: function() {
            this.$('.hd').css('backgroundColor', 'red');
        },
        
        blurTitle: function() {
            this.$('.hd').css('backgroundColor', 'white');
        },
        
        clickBody: function() {
            this.$('.bd').css('backgroundColor', '#CCC');
        }
    });
    
    module.exports = Index;
});
