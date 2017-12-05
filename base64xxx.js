var xxx = {
  encode : function(str, key = '') {
    var result = '';
    for(var i = 0; i < str.length; i++) {
      result += str[i]+btoa(key);
    }
    result = btoa(result);
    return result;
  },
  
  decode : function(str, key = '') {
    var result = '';
    var separator = btoa(key);
    var array = atob(str).split(separator);
    return array.join('');
  }
};