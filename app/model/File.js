Ext.define('App.model.File', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'file_name',
        type: 'string'
    },{
        name: 'create_date',
        type: 'date',
        dateFormat: 'm.d.Y'
    },{
        name: 'owner',
        type: 'string'
    }]
});
