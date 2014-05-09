/*
 * File: app/store/MyJsonStore.js
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

Ext.define('MyApp.store.MyJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        data: [
            {
                label: 'Great',
                value: 5
            },
            {
                label: 'Above Average',
                value: 4
            },
            {
                label: 'Average',
                value: 3
            },
            {
                label: 'Below Average',
                value: 2
            },
            {
                label: 'Poor',
                value: 1
            },
            
        ],
        storeId: 'MyJsonStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        },
        fields: [
            {
                name: 'label'
            },
            {
                name: 'value',
                type: 'int'
            }
        ]
    }
});