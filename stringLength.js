const stringLength = (str) => {
    // console.log(str.length);
   if(str.length > 1 && str.length < 10) {
      return str.length;
   }else if(str.length > 10) {
       return 'Error'
   }else {
        return 'Count > 1'
   }
}

// stringLength('hello')
module.exports = stringLength;
