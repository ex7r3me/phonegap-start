/*
 * File: app/view/MainView.js
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

Ext.define('MyApp.view.MainView', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',

    requires: [
        'Ext.Button',
        'Ext.Panel',
        'Ext.XTemplate',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate'
    ],

    config: {
        itemId: 'mainView',
        padding: 10,
        items: [
            {
                xtype: 'button',
                itemId: 'runButton',
                text: 'Refresh Result'
            },
            {
                xtype: 'panel',
                itemId: 'detailPanel',
                padding: 10,
                tpl: [
                    '',
                    '<div>ID: {id}</div>',
                    '<div>Text: {text}</div>'
                ]
            },
            {
                xtype: 'polar',
                height: 237,
                itemId: 'primary-chart',
                colors: [
                    '#115fa6',
                    '#94ae0a',
                    '#a61120',
                    '#ff8809',
                    '#ffd13e',
                    '#a61187',
                    '#24ad9a',
                    '#7c7474',
                    '#a66111'
                ],
                store: 'MyJsonStore',
                series: [
                    {
                        type: 'pie',
                        labelField: 'value',
                        xField: 'value'
                    }
                ],
                interactions: [
                    {
                        type: 'rotate'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'mybutton3',
                text: 'Yes'
            },
            {
                xtype: 'button',
                itemId: 'mybutton4',
                text: 'No'
            }
        ]
    }

});