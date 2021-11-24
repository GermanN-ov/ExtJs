/*Ext.define('App.main.files.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'main-files-view',

    viewModel: 'main-files-vm',
    // listeners: {
    //     itemclick: 'onItemSelected'
    // },

    // 1-й вариант универсальный
    bind: {
        store: '{files_from_all_dirs}',
        title: 'Файлы директории: {TreeAndGridCommonVars.treeSelectedRecord.text}'

    },

    columns: [
        {
            text: 'Имя',
            dataIndex: 'filename',
            flex: 1
        }, {
            text: 'Дата создания',
            xtype: 'datecolumn',
            format: 'd.m.Y',
            dataIndex: 'create_date',
            flex: 1
        }, {
            text: 'Владелец',
            dataIndex: 'owner',
            flex: 1
        },{
            text: 'А что же это за папка?',
            xtype: 'templatecolumn',
            tpl: '<b>{folder}</b>',
            flex: 2
        }

    ]
    //Конструктор компонета - чего-то визуально.
    // initComponent: function () {
    //     this.columns = [{
    //         text: 'Имя',
    //         dataIndex: 'filename',
    //         flex: 1
    //     }, {
    //         text: 'Дата создания',
    //         xtype: 'datecolumn',
    //         format: 'd.m.Y',
    //         dataIndex: 'create_date',
    //         flex: 1
    //     }, {
    //         text: 'Владелец',
    //         dataIndex: 'owner',
    //         flex: 1
    //     }];
    //
    //     this.callParent();
    // },


});*/