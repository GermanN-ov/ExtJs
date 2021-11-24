Ext.define("MyApp.global.Vars", {
    singleton: true,
    GlobalValue: undefined,
});

Ext.define('App.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    requires: [
        'App.view.main.MainController',
        'App.view.main.FolderTree',
        'MyApp.global.Vars'
    ],

    layout: 'border',
    controller: 'main',

    // TODO: Надо будет создать отдельный файл
    viewModel: {
        data: {
            //Общие данные для дерева и грида - чтобы они черрез нее могли получить данные друг друга
            TreeAndGridCommonVars: {
                //Выбранная запись (именно record)
                treeSelectedRecord: null
            },

            FileAndGridCommonVars:{
                FileSelectedRecord: null
            },
            LoginCommonVars: {
                LoginSelectRecord: null
            }

        }
    },

    config: {
        login: null
    },

    updateLogin: function(value){
        let vm = this.getViewModel();
        vm.set('LoginCommonVars.LoginSelectRecord', value);
        console.log('LOGIN ==', value)
    },

    items: [{
        title: 'Панель управления',
        region: 'north',
        xtype: 'panel',
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'panel',
            bind: {
                html: '{LoginCommonVars.LoginSelectRecord}'
            }
            //value: '{MyApp.global.Vars.GlobalValue.login}'
            //html: MyApp.global.Vars.GlobalValue
        }],
        height: 80,
        collapsible: true,
        split: true
    }, {
        title: 'Выход из приложения',
        region: 'south',
        xtype: 'panel',
        height: 80,
        collapsible: false,
        split: true,
        items: [{
            xtype: 'button',
            html: '<h3>Выйти</h3>',
            handler: 'onClickButton'
        }]
    }, {
        xtype: 'panel',
        title: 'Дерево папок',
        region: 'west',
        xtype: 'panel',
        layout: {
            type: 'fit'
        },
        items:[{
            xtype: 'foldertree'
        }],
        width: 160,
        collapsible: true,
        split: true
    }, {
        xtype: 'panel',
        title: 'Выбранная запись',
        region: 'east',
        items: [{
            xtype: 'selectfiles'
        }] ,
        width: 150,
        //html: 'Тут должны  быть свойства выбранной в гриде записи (дожна быть форма, подобно окну авторизации) и кнопка <b>Изменить</b>',
        collapsible: true,
        split: true
    }, {
        region: 'center',
        xtype: 'panel',
        layout: 'fit',
        items: [{
            xtype: 'label',
            //html: 'Тут в таблице должно быть представленно содержимое выбранной в дереве папки'
        }, {
            xtype: 'main-files-view'
        }
        ]
    }],

});
