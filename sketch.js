//flapjacks,if dividable by 3, then flap,by 5, jack, both, flapjack

var flapperjacks = function (aNumber){
 for(var i = 1; i<51; i=i+1){
   //divided by 3
     if (i % 3=== 0 && i % 5 === 0){
     console.log("flapjack")
   }
   else if(i % 3 === 0){
     console.log("flap")
   }
   else if (i % 5 ===0){
     console.log("jacks")
   }

   else { console.log(i)
   // divided by 5
   //divided by 3 and 5
   //none
  }
 }
}
flapperjacks(3);



