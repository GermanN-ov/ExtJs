//Наша вьюмодель для файлов (грида) App.main.files.View'
Ext.define('App.main.files.Vm', {
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
    data: {
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
            pageSize: 5,
            remoteFilter: true,
            proxy: {
                type: 'memory',
                enablePaging: true,
                //url: 'files.json',
                reader: {
                    type: 'json'
                }
            },
            data:[{
                "id": 1,
                "filename": "VestibulumAnteIpsum.doc",
                "owner": "cipgrave0",
                "create_date": "2019-07-15T12:53:11Z",
                "folder": null
            }, {
                "id": 2,
                "filename": "Eget.xls",
                "owner": "rgerrard1",
                "create_date": "2019-06-11T00:07:36Z",
                "folder": "folder_3"
            }, {
                "id": 3,
                "filename": "Curae.xls",
                "owner": "nhabbershon2",
                "create_date": "2019-02-18T12:42:19Z",
                "folder": "folder_1"
            }, {
                "id": 4,
                "filename": "ScelerisqueMauris.avi",
                "owner": "lbohlje3",
                "create_date": "2019-05-13T17:17:41Z",
                "folder": "folder_7"
            }, {
                "id": 5,
                "filename": "LigulaIn.tiff",
                "owner": "jramsbotham4",
                "create_date": "2019-02-06T10:13:21Z",
                "folder": "folder_7"
            }, {
                "id": 6,
                "filename": "Aliquam.xls",
                "owner": "apaulton5",
                "create_date": "2018-12-14T22:50:56Z",
                "folder": "folder_6"
            }, {
                "id": 7,
                "filename": "FelisDonec.xls",
                "owner": "etorbet6",
                "create_date": "2019-03-28T07:48:11Z",
                "folder": "folder_7"
            }, {
                "id": 8,
                "filename": "Odio.ppt",
                "owner": "nbarrus7",
                "create_date": "2019-04-05T02:56:11Z",
                "folder": "folder_7"
            }, {
                "id": 9,
                "filename": "LigulaPellentesque.ppt",
                "owner": "lgaspard8",
                "create_date": "2019-01-17T08:10:28Z",
                "folder": "folder_5"
            }, {
                "id": 10,
                "filename": "TinciduntLacus.xls",
                "owner": "aducarne9",
                "create_date": "2019-05-21T10:15:03Z",
                "folder": "folder_2"
            }, {
                "id": 11,
                "filename": "LiberoNam.doc",
                "owner": "bwillisa",
                "create_date": "2018-09-24T19:18:45Z",
                "folder": null
            }, {
                "id": 12,
                "filename": "ProinInterdum.avi",
                "owner": "nkilbournb",
                "create_date": "2018-12-22T09:45:02Z",
                "folder": "folder_3"
            }, {
                "id": 13,
                "filename": "Pede.mov",
                "owner": "amacknessc",
                "create_date": "2019-03-27T17:33:18Z",
                "folder": "folder_5"
            }, {
                "id": 14,
                "filename": "PrimisInFaucibus.tiff",
                "owner": "mkeyzmand",
                "create_date": "2019-01-15T05:23:13Z",
                "folder": "folder_6"
            }, {
                "id": 15,
                "filename": "Sollicitudin.mp3",
                "owner": "melldrede",
                "create_date": "2019-02-17T21:22:36Z",
                "folder": "folder_4"
            }, {
                "id": 16,
                "filename": "AmetJustoMorbi.tiff",
                "owner": "bgalesf",
                "create_date": "2018-09-01T03:32:27Z",
                "folder": "folder_2"
            }, {
                "id": 17,
                "filename": "EuOrci.xls",
                "owner": "nfrohockg",
                "create_date": "2019-03-24T17:27:22Z",
                "folder": "folder_7"
            }, {
                "id": 18,
                "filename": "Pretium.pdf",
                "owner": "gfeldhammerh",
                "create_date": "2019-05-21T16:12:40Z",
                "folder": "folder_6"
            }, {
                "id": 19,
                "filename": "PellentesqueEget.tiff",
                "owner": "awoolleri",
                "create_date": "2019-06-13T17:55:46Z",
                "folder": "folder_6"
            }, {
                "id": 20,
                "filename": "ConsectetuerAdipiscingElit.doc",
                "owner": "gmccreathj",
                "create_date": "2018-10-24T05:37:46Z",
                "folder": "folder_7"
            }, {
                "id": 21,
                "filename": "EnimIn.mp3",
                "owner": "lloutheanek",
                "create_date": "2019-01-22T19:05:22Z",
                "folder": "folder_6"
            }, {
                "id": 22,
                "filename": "ConvallisEget.mp3",
                "owner": "kleaveyl",
                "create_date": "2019-06-08T08:45:18Z",
                "folder": "folder_3"
            }, {
                "id": 23,
                "filename": "VulputateLuctus.ppt",
                "owner": "japperleym",
                "create_date": "2019-02-14T01:38:47Z",
                "folder": "folder_1"
            }, {
                "id": 24,
                "filename": "UltricesPosuere.avi",
                "owner": "bflecknessn",
                "create_date": "2019-03-16T11:29:28Z",
                "folder": "folder_4"
            }, {
                "id": 25,
                "filename": "Sapien.mov",
                "owner": "agrogero",
                "create_date": "2019-04-14T00:41:40Z",
                "folder": "folder_1"
            }, {
                "id": 26,
                "filename": "AugueLuctus.ppt",
                "owner": "dgallandp",
                "create_date": "2019-05-27T16:56:54Z",
                "folder": "folder_7"
            }, {
                "id": 27,
                "filename": "NecDui.avi",
                "owner": "rrisbieq",
                "create_date": "2018-10-21T16:53:18Z",
                "folder": null
            }, {
                "id": 28,
                "filename": "Nisi.tiff",
                "owner": "lsawterr",
                "create_date": "2018-08-25T11:54:21Z",
                "folder": "folder_1"
            }, {
                "id": 29,
                "filename": "Consectetuer.mov",
                "owner": "amacadams",
                "create_date": "2019-01-12T15:58:02Z",
                "folder": "folder_2"
            }, {
                "id": 30,
                "filename": "AtLorem.gif",
                "owner": "brobinettt",
                "create_date": "2018-11-01T04:16:53Z",
                "folder": "folder_3"
            }, {
                "id": 31,
                "filename": "AnteVestibulum.avi",
                "owner": "felpheyu",
                "create_date": "2018-10-17T22:23:29Z",
                "folder": "folder_5"
            }, {
                "id": 32,
                "filename": "IntegerAcLeo.avi",
                "owner": "cmarconev",
                "create_date": "2019-07-09T16:15:56Z",
                "folder": "folder_2"
            }, {
                "id": 33,
                "filename": "Semper.ppt",
                "owner": "aloxleyw",
                "create_date": "2019-05-20T04:49:32Z",
                "folder": "folder_7"
            }, {
                "id": 34,
                "filename": "NecCondimentumNeque.ppt",
                "owner": "bdunbobinx",
                "create_date": "2019-01-21T01:26:28Z",
                "folder": "folder_1"
            }, {
                "id": 35,
                "filename": "QuisTurpis.mp3",
                "owner": "bkikey",
                "create_date": "2019-02-01T09:16:09Z",
                "folder": "folder_3"
            }, {
                "id": 36,
                "filename": "EgetTempus.png",
                "owner": "abernuzziz",
                "create_date": "2018-09-28T11:01:07Z",
                "folder": "folder_3"
            }, {
                "id": 37,
                "filename": "SedJusto.xls",
                "owner": "wdarrow10",
                "create_date": "2019-05-17T09:25:58Z",
                "folder": "folder_6"
            }, {
                "id": 38,
                "filename": "InLacusCurabitur.mp3",
                "owner": "dcrapper11",
                "create_date": "2019-06-07T13:12:34Z",
                "folder": "folder_7"
            }, {
                "id": 39,
                "filename": "VelAccumsan.avi",
                "owner": "glifton12",
                "create_date": "2019-07-14T04:39:05Z",
                "folder": "folder_3"
            }, {
                "id": 40,
                "filename": "Eget.mp3",
                "owner": "rthorius13",
                "create_date": "2019-07-20T11:59:26Z",
                "folder": "folder_3"
            }, {
                "id": 41,
                "filename": "Fermentum.jpeg",
                "owner": "tcalbrathe14",
                "create_date": "2019-02-12T19:28:13Z",
                "folder": "folder_6"
            }, {
                "id": 42,
                "filename": "RidiculusMus.ppt",
                "owner": "dfriese15",
                "create_date": "2018-08-02T14:00:10Z",
                "folder": "folder_3"
            }, {
                "id": 43,
                "filename": "Lacus.png",
                "owner": "dsturr16",
                "create_date": "2019-05-22T14:41:45Z",
                "folder": "folder_1"
            }, {
                "id": 44,
                "filename": "LaciniaSapienQuis.gif",
                "owner": "vpinsent17",
                "create_date": "2018-11-07T17:06:00Z",
                "folder": "folder_1"
            }, {
                "id": 45,
                "filename": "JustoMaecenasRhoncus.mp3",
                "owner": "nbathow18",
                "create_date": "2019-05-11T13:45:51Z",
                "folder": "folder_5"
            }, {
                "id": 46,
                "filename": "Mauris.txt",
                "owner": "amacias19",
                "create_date": "2019-02-04T01:15:45Z",
                "folder": "folder_7"
            }, {
                "id": 47,
                "filename": "EnimBlandit.pdf",
                "owner": "lkarolczyk1a",
                "create_date": "2019-03-03T08:50:46Z",
                "folder": "folder_1"
            }, {
                "id": 48,
                "filename": "JustoSollicitudinUt.jpeg",
                "owner": "cstagg1b",
                "create_date": "2018-10-24T13:46:32Z",
                "folder": "folder_7"
            }, {
                "id": 49,
                "filename": "Etiam.mp3",
                "owner": "nmanuel1c",
                "create_date": "2019-05-20T13:03:41Z",
                "folder": "folder_3"
            }, {
                "id": 50,
                "filename": "VestibulumAliquetUltrices.png",
                "owner": "ssyversen1d",
                "create_date": "2019-06-11T23:04:56Z",
                "folder": "folder_7"
            }, {
                "id": 51,
                "filename": "Condimentum.ppt",
                "owner": "mbeed1e",
                "create_date": "2018-08-11T18:07:46Z",
                "folder": "folder_7"
            }, {
                "id": 52,
                "filename": "TurpisEgetElit.mp3",
                "owner": "aspeddin1f",
                "create_date": "2019-04-15T18:06:22Z",
                "folder": "folder_7"
            }, {
                "id": 53,
                "filename": "A.ppt",
                "owner": "mazema1g",
                "create_date": "2018-12-02T03:54:41Z",
                "folder": "folder_5"
            }, {
                "id": 54,
                "filename": "EgetTincidunt.avi",
                "owner": "fframmingham1h",
                "create_date": "2018-10-06T02:20:02Z",
                "folder": "folder_5"
            }, {
                "id": 55,
                "filename": "Quisque.mpeg",
                "owner": "bmessitt1i",
                "create_date": "2019-03-04T10:18:09Z",
                "folder": "folder_4"
            }, {
                "id": 56,
                "filename": "Integer.ppt",
                "owner": "fclamp1j",
                "create_date": "2019-02-12T22:19:35Z",
                "folder": "folder_5"
            }, {
                "id": 57,
                "filename": "AtTurpis.mp3",
                "owner": "uboutflour1k",
                "create_date": "2019-03-03T00:23:52Z",
                "folder": "folder_4"
            }, {
                "id": 58,
                "filename": "VestibulumAnteIpsum.xls",
                "owner": "ccattell1l",
                "create_date": "2019-03-09T10:46:14Z",
                "folder": "folder_3"
            }, {
                "id": 59,
                "filename": "Nulla.png",
                "owner": "mreveland1m",
                "create_date": "2019-01-29T22:02:36Z",
                "folder": null
            }, {
                "id": 60,
                "filename": "Mauris.txt",
                "owner": "abirkenhead1n",
                "create_date": "2019-06-14T23:26:15Z",
                "folder": "folder_3"
            }, {
                "id": 61,
                "filename": "SitAmet.mp3",
                "owner": "rcabrales1o",
                "create_date": "2019-04-15T02:30:01Z",
                "folder": "folder_6"
            }, {
                "id": 62,
                "filename": "Semper.mov",
                "owner": "sdurrand1p",
                "create_date": "2019-02-09T12:29:52Z",
                "folder": "folder_5"
            }, {
                "id": 63,
                "filename": "Ac.tiff",
                "owner": "bszwandt1q",
                "create_date": "2019-03-13T13:21:59Z",
                "folder": "folder_4"
            }, {
                "id": 64,
                "filename": "EnimBlanditMi.avi",
                "owner": "camy1r",
                "create_date": "2018-09-25T10:13:31Z",
                "folder": "folder_1"
            }, {
                "id": 65,
                "filename": "UtOdioCras.png",
                "owner": "mhollyard1s",
                "create_date": "2018-08-30T00:06:36Z",
                "folder": null
            }, {
                "id": 66,
                "filename": "Erat.pdf",
                "owner": "lganforth1t",
                "create_date": "2018-10-19T11:51:31Z",
                "folder": "folder_6"
            }, {
                "id": 67,
                "filename": "NonMattis.tiff",
                "owner": "sjenny1u",
                "create_date": "2018-11-13T06:44:52Z",
                "folder": "folder_6"
            }, {
                "id": 68,
                "filename": "NullaTempusVivamus.mp3",
                "owner": "dbullus1v",
                "create_date": "2019-03-06T06:49:50Z",
                "folder": "folder_6"
            }, {
                "id": 69,
                "filename": "SagittisSapien.jpeg",
                "owner": "vcalverd1w",
                "create_date": "2019-01-13T04:03:44Z",
                "folder": "folder_6"
            }, {
                "id": 70,
                "filename": "Maecenas.doc",
                "owner": "hszymczyk1x",
                "create_date": "2019-04-16T15:28:13Z",
                "folder": "folder_7"
            }, {
                "id": 71,
                "filename": "Vel.avi",
                "owner": "rlandall1y",
                "create_date": "2019-07-10T00:06:22Z",
                "folder": "folder_5"
            }, {
                "id": 72,
                "filename": "Ligula.xls",
                "owner": "hjowitt1z",
                "create_date": "2018-10-06T08:03:11Z",
                "folder": "folder_6"
            }, {
                "id": 73,
                "filename": "UltricesPhasellusId.png",
                "owner": "abrowncey20",
                "create_date": "2019-05-23T23:36:19Z",
                "folder": "folder_3"
            }, {
                "id": 74,
                "filename": "Pretium.gif",
                "owner": "sbrikner21",
                "create_date": "2019-05-31T20:04:35Z",
                "folder": "folder_1"
            }, {
                "id": 75,
                "filename": "DuisAt.avi",
                "owner": "bdeares22",
                "create_date": "2019-06-26T10:20:57Z",
                "folder": "folder_5"
            }, {
                "id": 76,
                "filename": "NullaSed.doc",
                "owner": "efeldmann23",
                "create_date": "2018-09-28T03:37:38Z",
                "folder": "folder_5"
            }, {
                "id": 77,
                "filename": "Non.pdf",
                "owner": "rnovotne24",
                "create_date": "2019-07-27T01:13:56Z",
                "folder": "folder_4"
            }, {
                "id": 78,
                "filename": "Pellentesque.jpeg",
                "owner": "jsonger25",
                "create_date": "2018-12-15T19:40:41Z",
                "folder": "folder_3"
            }, {
                "id": 79,
                "filename": "SapienCumSociis.jpeg",
                "owner": "bhummerston26",
                "create_date": "2018-11-16T02:50:41Z",
                "folder": "folder_6"
            }, {
                "id": 80,
                "filename": "LobortisSapien.mov",
                "owner": "ddaldry27",
                "create_date": "2019-01-02T16:21:43Z",
                "folder": "folder_1"
            }, {
                "id": 81,
                "filename": "In.xls",
                "owner": "rweavers28",
                "create_date": "2018-12-24T17:26:44Z",
                "folder": "folder_4"
            }, {
                "id": 82,
                "filename": "PotentiNullamPorttitor.png",
                "owner": "mmcindoe29",
                "create_date": "2018-09-25T13:08:31Z",
                "folder": "folder_4"
            }, {
                "id": 83,
                "filename": "AliquamLacusMorbi.xls",
                "owner": "jmagowan2a",
                "create_date": "2019-02-26T03:57:35Z",
                "folder": "folder_5"
            }, {
                "id": 84,
                "filename": "Consequat.ppt",
                "owner": "gpyzer2b",
                "create_date": "2019-03-06T08:34:38Z",
                "folder": "folder_3"
            }, {
                "id": 85,
                "filename": "PurusEuMagna.txt",
                "owner": "tchalcroft2c",
                "create_date": "2018-09-29T18:50:21Z",
                "folder": "folder_7"
            }, {
                "id": 86,
                "filename": "ViverraDiam.ppt",
                "owner": "dbadman2d",
                "create_date": "2018-11-12T05:46:47Z",
                "folder": "folder_5"
            }, {
                "id": 87,
                "filename": "MorbiSemMauris.txt",
                "owner": "shampshire2e",
                "create_date": "2019-05-15T02:32:07Z",
                "folder": "folder_7"
            }, {
                "id": 88,
                "filename": "InFaucibus.jpeg",
                "owner": "nionesco2f",
                "create_date": "2018-08-09T05:22:25Z",
                "folder": "folder_1"
            }, {
                "id": 89,
                "filename": "Tortor.jpeg",
                "owner": "ealloway2g",
                "create_date": "2018-09-16T23:49:40Z",
                "folder": "folder_3"
            }, {
                "id": 90,
                "filename": "Amet.mpeg",
                "owner": "khawker2h",
                "create_date": "2019-02-05T23:22:38Z",
                "folder": "folder_3"
            }, {
                "id": 91,
                "filename": "VivamusVel.pdf",
                "owner": "cfrowde2i",
                "create_date": "2018-08-30T19:17:59Z",
                "folder": "folder_2"
            }, {
                "id": 92,
                "filename": "Quis.avi",
                "owner": "lbussell2j",
                "create_date": "2019-05-11T21:44:00Z",
                "folder": "folder_1"
            }, {
                "id": 93,
                "filename": "CongueElementumIn.ppt",
                "owner": "rjaqueme2k",
                "create_date": "2018-12-09T14:36:44Z",
                "folder": "folder_2"
            }, {
                "id": 94,
                "filename": "Duis.mp3",
                "owner": "cquennell2l",
                "create_date": "2018-12-05T17:31:21Z",
                "folder": "folder_5"
            }, {
                "id": 95,
                "filename": "UltricesPosuere.xls",
                "owner": "mmanners2m",
                "create_date": "2019-05-08T05:18:16Z",
                "folder": null
            }, {
                "id": 96,
                "filename": "VulputateNonummy.png",
                "owner": "srushbrook2n",
                "create_date": "2018-11-11T12:11:34Z",
                "folder": "folder_6"
            }, {
                "id": 97,
                "filename": "Et.mp3",
                "owner": "ewoollons2o",
                "create_date": "2019-01-29T20:16:12Z",
                "folder": "folder_3"
            }, {
                "id": 98,
                "filename": "Nisl.mp3",
                "owner": "eraffan2p",
                "create_date": "2019-03-23T20:45:47Z",
                "folder": "folder_2"
            }, {
                "id": 99,
                "filename": "MaurisEnimLeo.jpeg",
                "owner": "wwontner2q",
                "create_date": "2019-02-02T06:32:00Z",
                "folder": "folder_2"
            }, {
                "id": 100,
                "filename": "Venenatis.pdf",
                "owner": "mgreed2r",
                "create_date": "2019-01-25T22:38:22Z",
                "folder": "folder_2"
            }],

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
    },

});