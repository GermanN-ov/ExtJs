Ext.define('App.main.files.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'main-files-view',

    viewModel: 'main-files-vm',
    // listeners: {
    //     itemclick: 'onItemSelected'
    // },

    listeners: {
        itemclick: function test1 (sender, record, item, index, e, eOpts) {
            console.log(sender, record, item, index, e, eOpts) ;

            let vm1 = this.getViewModel();

            vm1.set('FileAndGridCommonVars.FileSelectedRecord', record);
            //vm1.set('test', record.get('filename'));

        },
        /*containerclick: function test2(sender,  e, eOpts ){
            console.log('sender, record, item, index, e, eOpts') ;
        },
        click: function test3 (sender, record, item, index, e, eOpts) {
            console.log('sender, record, item, index, e, eOpts') ;
        },

        select: function test4 (sender, rec, index){
            console.log('sender, record, item, index, e, eOpts');
        },
        selectionchange: function (sender, selected, eOpts) {
            console.log('sender, record, item, index, e, eOpts') ;
        }*/

    },

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

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    }

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


});