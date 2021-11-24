/*Ext.define('App.view.main.FolderTreeCtl', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.view-main-folder_tree_ctl',

    //select ( this, record, index, eOpts )
    onFolderTreeSelected: function (sender, rec, index){
        console.log('выбрали узел в дереве: ' +  rec.data.text + ' == (' + rec.get('text') + ')');

        let vm = this.getViewModel();
        let view = this.getView();

        vm.set('TreeAndGridCommonVars.treeSelectedRecord', rec);
        vm.set('test', rec.get('text'));
    }
});*/