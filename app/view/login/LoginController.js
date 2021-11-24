Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {
        let view = this.getView();
        var form = view.down('form').getForm(),
            values = form.getFieldValues();
        MyApp.global.Vars.GlobalValue = values.login ;

        let vm2 =this.getViewModel();
        vm2.set('LoginCommonVars.LoginSelectRecord', values.login);


        Ext.log({
            msg: "values: " + Ext.encode(values)
        });

        Ext.log({
            msg: "Логин: " + MyApp.global.Vars.GlobalValue
        });

        Ext.log({
            msg: "Пароль: " + values.password
        });
        localStorage.setItem("logged", true);
        this.getView().destroy();

        Ext.create({
            xtype: 'app-main',
            login : MyApp.global.Vars.GlobalValue

        });

        /*var taskText = '<h3> Приложение "проводник" </h3><br/>' +
            'При выборе в дереве папки в центральной области должны отображаться файлы. '
            + '<br/> При выборе файла в правой части должна отображаться форма с его данными'
            +    '<br/> <i style="color:gray;">(Тестовые данные с описанием файлов уже подготовлены -  Data\\files.json)</i>.' +
            '<br><br><i><b>PS:</b> Дата создания в колонке должна быть в формате d.m.Y ' +
            ' и хорошо бы сделать в центральном гриде пагинацию ... </i>';

        Ext.create({
            xtype: 'window',
            autoShow: true,

            modal: true,

            title: 'Задание',
            height: 300,
            width: 300,
            bodyPadding: 15,
            html: taskText
        });*/
    }
});