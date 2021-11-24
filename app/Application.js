Ext.define('App.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'App.view.login.Login',
        'App.view.main.Main'
    ],

    name: 'App',

    launch: function () {

        var logged = localStorage.getItem("logged");

        Ext.create({
            xtype: logged ? 'app-main' : 'login'
        });
    }
});
