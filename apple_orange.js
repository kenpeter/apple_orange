var s = 7, t = 11, a = 5, b = 15;
var apples = [ -2, 2, 1 ];
var oranges = [ 5, -6 ];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	var start = s;
	var end = t;
	var appleDis = a;
	var orgDis = b;

	var appleRealDis;
	var orgRealDis;
	var appleArr = [];
	var orgArr = [];

	appleArr = apples.filter(function(item, index){
		appleRealDis = item + appleDis;
		if(appleRealDis >= start && appleRealDis <= end) {
			return true;	
		} else {
			return false;
		}
	});


	orgArr = oranges.filter(function(item, index){
    orgRealDis = item + orgDis;
    if(orgRealDis >= start && orgRealDis <= end) {
      return true;  
    } else {
      return false;
    }
  });

	console.log(appleArr.length);
	console.log(orgArr.length);
}


countApplesAndOranges(s, t, a, b, apples, oranges);
