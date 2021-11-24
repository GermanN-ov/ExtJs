Ext.define('App.view.main.MainGridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    requires: [
        'App.model.File'
    ],

    stores: {
        files: {
            model: 'App.model.File',
            pageSize: 4,
            proxy: {
                type: 'ajax',
                url: 'files.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});