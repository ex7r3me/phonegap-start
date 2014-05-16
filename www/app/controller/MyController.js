/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            detailPanel: 'mainview #detailPanel',
            primarychart: 'polar#primary-chart',
            requestdelay: 'label#request-delay',
            runButton: 'button#runButton',
            requestdelay2: 'label#request-delay',
            title: 'label#title',
            questiontext: 'textareafield#question-text'
        },

        control: {
            "mainview #runButton": {
                tap: 'runAction'
            },
            "button#mybutton3": {
                tap: 'onButtonTap'
            },
            "button#mybutton4": {
                tap: 'onButtonTap1'
            },
            "button#submit-question": {
                tap: 'onSubmitQuestion'
            }
        }
    },

    runAction: function(target) {
        navigator.app.exitApp();

        // Bind model to view
        //this.getDetailPanel().setRecord(model);


    },

    onButtonTap: function(button, e, eOpts) {
        var me = this;
        me.start = new Date().getTime();
        websocket.send('1');
    },

    onButtonTap1: function(button, e, eOpts) {
        var me = this;
        me.start = new Date().getTime();
        websocket.send('0');
    },

    onSubmitQuestion: function(button, e, eOpts) {
        var qText = this.getQuestiontext().getValue();
        websocket.send(qText);
        websocket.send("101");
    },

    loadPStore: function() {

        pchart = this.getPrimarychart();
        var mstore = pchart.getStore();
        mstore.load();
    },

    init: function(application) {
        var me = this;
        websocket = Ext.create ('Ext.ux.WebSocket', {
            url: 'ws://captain-zero.tk:8080' ,
            listeners: {
                open: function (ws) {
                    console.log ('The websocket is ready to use');
                    me.getRequestdelay().setHtml('Connected!');
                      ws.send ('101');
                      ws.send ('102');
                } ,
                close: function (ws) {
                     me.getRequestdelay().setHtml('Disconnected :(');
                } ,
                error: function (ws, error) {
                    Ext.Error.raise (error);
                } ,
                message: function (ws, message) {
                    if (message.question === undefined){
                    var end = new Date().getTime();
                    var time = end - me.start;
                    console.log(time);
                    me.getRequestdelay().setHtml('Time (send,receive & chart update) :'+time+'ms');
                    me.getPrimarychart().getStore().setData(message);
                    }
                     else if (message.question){
                       me.getTitle().setHtml(message.question);
                    }
                }
            }

        });

    }

});