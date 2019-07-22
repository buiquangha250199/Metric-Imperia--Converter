/*
*
*
*       Complete the handler logic below
*       
*       
*/

function calc(fn) {
  			return new Function('return ' + fn)();
		}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let index = -1;
    for(let i = input.length-1; i>=0; i--) {
      if(48<= input.charCodeAt(i) && input.charCodeAt(i) <=57) {index = i; break;}
    }   
    if(index == -1) return "1";

    let res = input.slice(0,index+1);
    res = res.replace(" ", "+");
    res = res.replace(/[^-()\d/*+.]/g, '');
    
    try {
      calc(res);
    }
    catch(err) {
   return "invalid number";
}
    
    return calc(res);
  };
  
  this.getUnit = function(input) {
    let index = -1;
    for(let i = input.length-1; i>=0; i--) {
      if(48<= input.charCodeAt(i) && input.charCodeAt(i) <=57) {index = i; break;}
    }
     
    let res;
    
    if(index == -1) res = input;
    else res = input.slice(++index);
    
    if(res != "gal" && res != "L" && res != "lbs" && res != "kg" && res != "mi" && res != "km") res = "invalid unit";
    
    return res;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit=="gal") return "L";
    else if(initUnit=="L") return "gal";
    else if(initUnit=="lbs") return "kg";
    else if(initUnit=="kg") return "lbs";
    else if(initUnit=="mi") return "km";
    else if(initUnit=="km") return "mi";
    
    return initUnit;
  };

  this.spellOutUnit = function(unit) {
    if(unit == "gal") return "galileoes";
    else if(unit == "L") return "litres";
    else if(unit == "lbs") return "pounds";
    else if(unit == "kg") return "kilograms";
    else if(unit == "mi") return "miles";
    else if(unit == "km") return "kilometers";
    
    return unit;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    if(initUnit=="gal") return initNum*galToL.toFixed(5);
    else if(initUnit=="L") return initNum/galToL.toFixed(5);
    else if(initUnit=="lbs") return initNum*lbsToKg.toFixed(5);
    else if(initUnit=="kg") return initNum/lbsToKg.toFixed(5);
    else if(initUnit=="mi") return initNum*miToKm.toFixed(5);
    else if(initUnit=="km") return initNum/miToKm.toFixed(5);
    
    return initNum;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    //initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'
    var result;
    if(initNum == "invalid number" && initUnit != "invalid unit") result = "invalid number";
    else if(initNum != "invalid number" && initUnit == "invalid unit") result = "invalid unit";
    else if(initNum == "invalid number" && initUnit == "invalid unit") result = "invalid number and unit";
    else
    result = {initNum: initNum , initUnit: initUnit , returnNum: returnNum,
        string: initNum +" "+this.spellOutUnit(initUnit)+ " converts to "+ returnNum +" "+this.spellOutUnit(returnUnit)};
    
    return result;
  };
  
}

module.exports = ConvertHandler;
