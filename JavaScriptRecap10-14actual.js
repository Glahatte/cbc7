var games=[
   {id: 1, cost: 100, name: 'WoW', genre:'MMORPG',},
   {id: 2, cost: 60, name: 'COD', genre:'FPS'},
   {id: 3, cost: 0, name: 'Apex', genre: 'FPS'},
   {id: 4, cost: 30, name: 'MetalGear', genre:'FPS'},
   {id: 5, cost: 25, name: 'Civilization', genre: 'TBS'}
];

var gameIds=games.map(function(game) {
  console.log (game.name)
});

var TotalCost= games.reduce(function(accumulator, game){
return accumulator + game.cost;
}, 0);

console.log (TotalCost);

var fps=games.filter(function(game){return game.genre==="FPS";
});

var MMORPG=games.filter(function(game){return game.genre==="MMORPG";
});

var tbs=games.filter(function(game){return game.genre==="TBS";
});

console.log(fps);
console.log(MMORPG);
console.log(tbs);

if (TotalCost>200) {console.log("BUY BUY BUY")
    
} else { console.log("DONT BUY YA SCHMUCK")
    
}