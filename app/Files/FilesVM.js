//Наша вьюмодель для файлов (грида) App.main.files.View'
/*Ext.define('App.main.files.Vm', {
    //От кого мы наследуем наш класс. Это получает ViewModel
    extend: 'Ext.app.ViewModel',
    // Это ее никнейм
    alias: 'viewmodel.main-files-vm',
    /*
     vm: alias: viewmodel.bla-bla
     ctl: alias: controller.bla-bla

     widget:  alias: widget.bla-bla
              xtype: bla-bla
    */

    // Тут у нас любые наши переменные вьюмодели, к которым мы можем байдится
   /* data: {
        test_value:{
            my_value_one: 'hello nigga!'
            // my_second_value: {
            //     child: 134,
            //     bool: true,
            //     child_with_son: {
            //         test: 3
            //     },
            //     button: new Ext.button.Button()
            // }
        }
    },

    // Список всех хранилищ этой вьюмодели. когда мы используем ее мы обычно байдим отсюда
    stores: {

        //Наше хранилище файлов
        files_from_all_dirs: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'files.json',
                reader: {
                    type: 'json'
                }
            },

            //тут мы подключим фильтры, чтобы наше Хранилище отображало только файлы нужно папки
            filters: [
                {
                    //Название атрибута в данных, по которому мы будем фильтровать
                    property: 'folder',
                    // Это значение, которые будет меняться.
                    // Это наша переменная величина из ViewModel main.Main
                    value: '{TreeAndGridCommonVars.treeSelectedRecord.text}'
                    // Это мы не определяем, т.к. по умолчанию условие property === value
                    //operator
                }
            ]
        }
    }
});*/