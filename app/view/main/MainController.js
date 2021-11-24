Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {
        localStorage.removeItem('logged');
        this.getView().destroy();
        Ext.widget('login');
    }
});

