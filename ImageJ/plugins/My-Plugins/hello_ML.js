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

// Import nashorn polyfill and tip-gist.js
const IJ_PLUGINS = IJ.getDir('plugins'); //('user.dir');
load(`${IJ_PLUGINS}/javascript/nashorn_polyfill.js`);
load(`${IJ_PLUGINS}/javascript/tip-gist.js`);

// Test CSV data
let csv = `
ID,filename,width,height,type
1,blobs.gif,256,254,8-bit,
2,boats.gif,720,576,8-bit,
3,clown.jpg,320,200,RGB,
4,gel.gif,276,476,8-bit,
5,LineGraph.jpg,516,356,8-bit
`;

// Load CSV
let data = TDS.fromCSV(csv);
console.log(TDS.log(data));

// Extract columns
let cols = TDS.columns(['filename', 'width', 'height'])(data);
console.log(TDS.log(cols));

// Filter by features
console.log('clean...');
let clean = TDS.filter(TDS.byFeatures(['ID', 'width', 'height']))(data);
console.log(TDS.log(clean));
