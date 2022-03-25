// Created by: Evgeny Vovk
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked() {
  
  document.getElementById('area').innerHTML = '<p>The area is: ' + (5 * 3) + ' cm².</p>'
  document.getElementById('perimeter').innerHTML = '<p>The perimeter is: ' + (2 * (5 + 3)) + ' cm.</p>'
}
