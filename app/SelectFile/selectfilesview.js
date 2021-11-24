Ext.define('SelectFiles', {
    extend: 'Ext.form.Panel',
    xtype: 'selectfiles',
    viewmodel: 'select_files_vm',
    controller: 'selectfilectr',

    frame: true,
    width: 500,
    //bodyPadding: 1,

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Имя',
        dataIndex: 'filename',
        bind: {
            value: '{FileAndGridCommonVars.FileSelectedRecord.filename}'
        }

    }, {
        fieldLabel: 'Дата создания',
        dataIndex: 'create_date',
        bind: {
            value: '{FileAndGridCommonVars.FileSelectedRecord.create_date}'
        }
    }, {
        fieldLabel: 'Владелец',
        dataTbdex: 'owner',
        bind: {
            value: '{FileAndGridCommonVars.FileSelectedRecord.owner}'
        }
    }]
})