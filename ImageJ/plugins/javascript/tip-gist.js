/*
 *  TIPJS: Tools for Image(J) Processing JavaScript
 *  Copyright (C) 2018  Jean-Christophe Taveau.
 *
 *  This file is part of TIPJS, module TDS
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIPJS.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

'use strict';


/*
 * Tiny DataSet Helper Functions
 * 2018/10/01
 * Jean-Christophe Taveau
 */
const TDS = (function () {
    return {
        // Convert a CSV file into a dataset (Array of data objects)
        fromCSV : (data_csv,sep=',') => {
            let rows = data_csv.split('\n').filter( r => r.indexOf(sep) !== -1);
            let headers = rows[0].split(sep);
            let table = rows.slice(1).map(row => {
                let words = row.split(sep);
                return headers.reduce( (obj,h,i) => {
                        obj[h] = words[i];
                        return obj;
                    },
                    {});
            });
            table._order = 'row';
            return table;
        },

        toCSV: (data,sep=',') => {
            // Headers
            let str = Object.keys(data[0]).reduce( (accu,key,i) => `${accu}${(i===0) ? '' : sep}${key}`,'') + '\n';
            // Values
            return str + data.map( d => Object.keys(d).reduce( (accu,h,i) => `${accu}${ (i===0) ? '' : sep }${d[h]}`,'') + '\n').join('');
        },

        // Convert IJ Table in a dataset (Array of data objects)
        fromTableIJ : (tableij) => {
            let headings = Java.from(tableij.getHeadings());
            let numcolumns = tableij.getRowAsString(0).split(/[\t,]/).length;
            if (headings.length !== numcolumns) {
                headings.unshift('ID');
            }
            return Array.from(
                {length: tableij.size()},
                (v,i) => {
                    let values = tableij.getRowAsString(i).split(/[\t,]/);
                    return headings.reduce ( (accu,h,j) => {
                        accu[h] = +values[j];
                        return accu;
                    },{})
                }
            );
        },

        // Helper function
        slice : (start,end) => (data) =>  data.slice(start,end),

        // Clean data by filtering only specific features.
        filter : (func) => (data) => {
            let table = data.map(func);
            table._order = data._order;
            return table;
        },

        // Helper function
        byFeatures : (features) => (datum,index) => {
            return features.reduce( (accu,f) => {
                accu[f] = datum[f];
                return accu;
            },{});
        },

        // Extract column(s) as an object of arrays
        columns: (headers) => {
            return (data) => {
                let table = headers.reduce( (accu,h) => {
                    accu[h] = data.map( (d) => d[h]);
                    return accu;
                },{});
                table._order = 'column';
                return table;
            }
        },

        // Display
        log: (data) => Object.keys(data).reduce( (accu,k) => `${accu}  ${k}: ${JSON.stringify(data[k])}\n`,'{\n') + '}'

    }
})();