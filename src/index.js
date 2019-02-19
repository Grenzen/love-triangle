/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var len = preferences.length;
  var counter = 0;

  if (len < 2) {
    return 0;
    
    } else {
      for (var i = 0; i < len;i++) {
        if (preferences[preferences[preferences[i]-1]-1] === i+1) {
          counter += 1;
        }
      }
      return ~~(counter / 3);
  }
};
