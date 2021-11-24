Ext.define('App.main.files.Vm', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.select_files_vm',
    stores: {
        files_from_all_dirs: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'files.json',
                reader: {
                    type: 'json'
                }
            },
            /*filters: [
                {
                    //Название атрибута в данных, по которому мы будем фильтровать
                    property: 'id',
                    // Это значение, которые будет меняться.
                    // Это наша переменная величина из ViewModel main.Main
                    value: '{TreeAndGridCommonVars.treeSelectedRecord.text}'
                    // Это мы не определяем, т.к. по умолчанию условие property === value
                    //operator
                }
            ]*/
        }
    }
});