/*Ext.define('App.view.main.FolderTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.foldertree',
    title: 'Папки',
    rootVisible: false,
    lines: true,
    useArrows: true,
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
        select_OFF: function(sender, b, c, d, e){
            console.log(sender, b, c, d, e);
            console.log(sender.test_atribute);
            console.log(this.test_atribute);
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
    }

});*/