var xrange;
var yrange;
xrange= 6 ;
yrange= 7 ;
var objectives;
objectives= [[0, 0, 7], [1, 2, 7], [2, 4, 7], [3, 6, 7], [4, 0, 0], [5, 2, 0], [6, 4, 0], [7, 6, 0], [8, 6, 3], [9, 6, 4], [10, 0, 3], [11, 0, 4]]
var obstacles;
obstacles= [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6]]
var pos=[];
pos[0]= [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 6], [2, 7], [1, 7], [0, 7], [0, 6], [0, 7]] ;
pos[1]= [[2, 0], [3, 0], [3, 0], [2, 0], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 6], [2, 7], [3, 7], [2, 7]] ;
pos[2]= [[4, 0], [5, 0], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [4, 7], [4, 6], [4, 6], [4, 7]] ;
pos[3]= [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [4, 7], [4, 7], [3, 7], [4, 7], [5, 7], [6, 7]] ;
pos[4]= [[0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0], [3, 0], [2, 0], [1, 0], [0, 0]] ;
pos[5]= [[2, 7], [1, 7], [0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [2, 1], [2, 1], [2, 0]] ;
pos[6]= [[4, 7], [4, 6], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [4, 0], [4, 1], [4, 1], [4, 0], [4, 0], [3, 0], [4, 0], [4, 0]] ;
pos[7]= [[6, 7], [5, 7], [4, 7], [4, 6], [4, 5], [4, 5], [4, 4], [4, 3], [4, 2], [4, 2], [4, 2], [4, 1], [4, 0], [5, 0], [6, 0]] ;
pos[8]= [[0, 3], [0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [2, 1], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, 1], [6, 2], [6, 3]] ;
pos[9]= [[0, 4], [0, 3], [0, 2], [0, 1], [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4]] ;
pos[10]= [[6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [4, 7], [3, 7], [2, 7], [1, 7], [0, 7], [0, 6], [0, 5], [0, 4], [0, 3]] ;
pos[11]= [[6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [4, 7], [4, 6], [4, 7], [3, 7], [2, 7], [1, 7], [0, 7], [0, 6], [0, 5], [0, 4]] ;
var events=[]
events[0]= [[0, 0, 0], [1, 2, 0], [2, 4, 0], [3, 6, 0], [4, 0, 7], [5, 2, 7], [6, 4, 7], [7, 6, 7], [8, 0, 3], [9, 0, 4], [10, 6, 3], [11, 6, 4]]
events[1]= [[0, 1, 0], [1, 3, 0], [2, 5, 0], [3, 6, 1], [4, 0, 6], [5, 1, 7], [6, 4, 6], [7, 5, 7], [8, 0, 2], [9, 0, 3], [10, 6, 4], [11, 6, 5]]
events[2]= [[0, 2, 0], [1, 3, 0], [2, 6, 0], [3, 6, 2], [4, 0, 5], [5, 0, 7], [6, 4, 5], [7, 4, 7], [8, 0, 1], [9, 0, 2], [10, 6, 5], [11, 6, 6]]
events[3]= [[0, 2, 1], [1, 2, 0], [2, 6, 1], [3, 6, 3], [4, 0, 4], [5, 0, 6], [6, 4, 4], [7, 4, 6], [8, 0, 0], [9, 0, 1], [10, 6, 6], [11, 6, 7]]
events[4]= [[0, 2, 2], [1, 2, 0], [2, 6, 2], [3, 6, 4], [4, 0, 3], [5, 0, 5], [6, 4, 3], [7, 4, 5], [8, 1, 0], [9, 0, 0], [10, 6, 7], [11, 5, 7]]
events[5]= [[0, 2, 3], [1, 2, 1], [2, 6, 3], [3, 6, 5], [4, 0, 2], [5, 0, 4], [6, 4, 2], [7, 4, 5], [8, 2, 0], [9, 1, 0], [10, 5, 7], [11, 4, 7]]
events[6]= [[0, 2, 4], [1, 2, 2], [2, 6, 4], [3, 6, 6], [4, 0, 1], [5, 0, 3], [6, 4, 1], [7, 4, 4], [8, 2, 1], [9, 2, 0], [10, 4, 7], [11, 4, 6]]
events[7]= [[0, 2, 5], [1, 2, 3], [2, 6, 5], [3, 6, 7], [4, 0, 0], [5, 0, 2], [6, 4, 0], [7, 4, 3], [8, 2, 0], [9, 3, 0], [10, 3, 7], [11, 4, 7]]
events[8]= [[0, 2, 6], [1, 2, 4], [2, 6, 6], [3, 5, 7], [4, 1, 0], [5, 0, 1], [6, 4, 1], [7, 4, 2], [8, 3, 0], [9, 4, 0], [10, 2, 7], [11, 3, 7]]
events[9]= [[0, 2, 6], [1, 2, 5], [2, 6, 7], [3, 4, 7], [4, 2, 0], [5, 0, 0], [6, 4, 1], [7, 4, 2], [8, 4, 0], [9, 5, 0], [10, 1, 7], [11, 2, 7]]
events[10]= [[0, 2, 7], [1, 2, 6], [2, 5, 7], [3, 4, 7], [4, 3, 0], [5, 1, 0], [6, 4, 0], [7, 4, 2], [8, 5, 0], [9, 6, 0], [10, 0, 7], [11, 1, 7]]
events[11]= [[0, 1, 7], [1, 2, 6], [2, 4, 7], [3, 3, 7], [4, 3, 0], [5, 2, 0], [6, 4, 0], [7, 4, 1], [8, 6, 0], [9, 6, 1], [10, 0, 6], [11, 0, 7]]
events[12]= [[0, 0, 7], [1, 2, 7], [2, 4, 6], [3, 4, 7], [4, 2, 0], [5, 2, 1], [6, 3, 0], [7, 4, 0], [8, 6, 1], [9, 6, 2], [10, 0, 5], [11, 0, 6]]
events[13]= [[0, 0, 6], [1, 3, 7], [2, 4, 6], [3, 5, 7], [4, 1, 0], [5, 2, 1], [6, 4, 0], [7, 5, 0], [8, 6, 2], [9, 6, 3], [10, 0, 4], [11, 0, 5]]
events[14]= [[0, 0, 7], [1, 2, 7], [2, 4, 7], [3, 6, 7], [4, 0, 0], [5, 2, 0], [6, 4, 0], [7, 6, 0], [8, 6, 3], [9, 6, 4], [10, 0, 3], [11, 0, 4]]
