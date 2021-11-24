/*Ext.define("MyApp.global.Vars", {
    singleton: true,
    GlobalValue: undefined,
});*/


Ext.define("App.view.login.Login", {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'App.view.login.LoginController',
        'Ext.form.Panel',
        'MyApp.global.Vars'
    ],

    controller: 'login',
    viewModel: {

    },
    title: 'Авторизация - любые данные',
    closable: false,
    autoShow: true,

    items: [{
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'login',
            fieldLabel: 'Пользователь',
            allowBlank: false,
            padding: 5
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false,
            padding: 5
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            /*handler: function (button, e) {

                var form = this.up('form').getForm(),
                    values = form.getFieldValues();
                MyApp.global.Vars.GlobalValue = values.login ;

                //let vm2 =this.getViewModel();
                //vm2.set('LoginCommonVars.LoginSelectRecord', values);


                Ext.log({
                    msg: "values: " + Ext.encode(values)
                });

                Ext.log({
                    msg: "Логин: " + MyApp.global.Vars.GlobalValue
                });

                Ext.log({
                    msg: "Пароль: " + values.password
                });
            },*/
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }]
});