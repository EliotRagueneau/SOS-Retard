/*
 *  TIPJS: Tools for Image(J) Processing JavaScript
 *  Copyright (C) 2018  Jean-Christophe Taveau.
 *
 *  This file is part of TIPJS, module TML
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
 
 
/* 
 * Tiny Machine Learning Helper Functions 
 * 2018/10/01
 * Jean-Christophe Taveau
 */
const TML = (function () {
  return {
    // Accuracy
    accuracy: (test,predict) => {
      return test.reduce( (sum,d,i) => (d === predict[i]) ? sum+1:sum,0.0) / test.length;
    },
   
    // N-Features Distance
    distance : (u,v) => {
      return Math.sqrt(
        Object.keys(u).reduce( (d,f) => d + (u[f]-v[f])*(u[f]-v[f]),0.0)
      );
    }
  }
})();

