//TODO: Надо тоже отдельным файлом
//Обрабатывать действия во view
Ext.define('App.view.main.FolderTreeCtl', {
    extend : 'Ext.app.ViewController',
    alias: 'controller.view-main-folder_tree_ctl',

    //select ( this, record, index, eOpts )
    onFolderTreeSelected: function (sender, rec, index){
        console.log('выбрали узел в дереве: ' +  rec.data.text + ' == (' + rec.get('text') + ')');

        let vm = this.getViewModel();
        let view = this.getView();

        vm.set('TreeAndGridCommonVars.treeSelectedRecord', rec);
        vm.set('test', rec.get('text'));
    },

});


Ext.define('App.view.main.FolderTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.foldertree',
    title: 'Папки',
    rootVisible: false,
    lines: true,
    useArrows: true,
    //controller: 'selectfilectr',
    controller: 'view-main-folder_tree_ctl',
    //TODO: Надо тоже отдельным файлом
    viewModel: {

    },
    //select ( this, record, index, eOpts )
    //Просто для теста
    test_atribute: this,

    //События к которым мы подключились.
    listeners: {
        select: 'onFolderTreeSelected',
        //ТЕсты с this.
        /*select_OFF: function(sender, b, c, d, e){
            console.log(sender, b, c, d, e);
            console.log(sender.test_atribute);
            console.log(this.test_atribute);
        },*/

        itemclick: function test (sender, record, item, index, e, eOpts) {
            console.log('Шурик, привет! Я работаю!') ;
        }

    },

    initComponent: function () {
        this.store = new Ext.data.TreeStore({
            proxy: {
                type: 'ajax',
                url: 'folders.json'
            },
            root: {
                expanded: true
            }
        });
        this.callParent(arguments);
    },


});