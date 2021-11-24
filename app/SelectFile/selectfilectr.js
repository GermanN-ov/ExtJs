Ext.define('SelectFilesCtr', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.selectfilectr',

   /* onFolderTreeSelected: function (sender, rec, index){
        console.log('выбрали узел в дереве: ' +  rec.data.text + ' == (' + rec.get('text') + ')');

        let vm = this.getViewModel();
        let view = this.getView();

        vm.set('TreeAndGridCommonVars.treeSelectedRecord', rec);
        vm.set('test', rec.get('text'));
    },*/


    init: function() {
        console.log('Initialized Users! This happens before ' +
            'the Application launch() function is called');
    },

    listerens: {
        itemclick: function test (sender, record, item, index, e, eOpts) {
            console.log(sender, record, item, index, e, eOpts) ;
        }
    }

});