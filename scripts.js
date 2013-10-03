function run() {
        
    var ground = document.getElementById('ground').getContext('2d'),
        turna = document.getElementById('turna'),
        turn = Math.round(Math.random()),
        marked = [],
        reload = document.getElementById('reload');
    
    // DRAWING STROKE AND LINE ( STROKE = WHITE, LINE = PURPLE )
    
    
    // FIRST LINE ( VERTICAL )
    
        ground.clearRect(0, 0, 320, 320)
        ground.beginPath();
        ground.moveTo(95,20);
        ground.lineWidth=32;
        ground.lineTo(95,300);
        ground.strokeStyle='white';
        ground.lineCap='round';
        ground.stroke();
        ground.beginPath();
        ground.moveTo(95,20);
        ground.lineWidth=26;
        ground.lineTo(95,300);
        ground.strokeStyle='rgba(128,23,83,255)';
        ground.stroke();
    
    
    // SECOND LINE ( VERTICAL )
        
        ground.beginPath();
        ground.moveTo(234,20);
        ground.lineWidth=32;
        ground.lineTo(234,300);
        ground.strokeStyle='white';
        ground.lineCap='round';
        ground.stroke();
        ground.beginPath();
        ground.moveTo(234,20);
        ground.lineWidth=26;
        ground.lineTo(234,300);
        ground.strokeStyle='rgba(128,23,83,255)';
        ground.stroke();
        
    // THIRD LINE ( HORIZONAL )
    
        ground.beginPath();
        ground.moveTo(20,102);
        ground.lineWidth=32;
        ground.lineTo(300,102);
        ground.strokeStyle='white';
        ground.lineCap='round';
        ground.stroke();
        ground.beginPath();
        ground.moveTo(20,102);
        ground.lineWidth=26;
        ground.lineTo(300,102);
        ground.strokeStyle='rgba(128,23,83,255)';
        ground.stroke();
    
    // FOURTH LINE ( HORIZONAL )
    
        ground.beginPath();
        ground.moveTo(20,222);
        ground.lineWidth=32;
        ground.lineTo(300,222);
        ground.strokeStyle='white';
        ground.lineCap='round';
        ground.stroke();
        ground.beginPath();
        ground.moveTo(20,222);
        ground.lineWidth=26;
        ground.lineTo(300,222);
        ground.strokeStyle='rgba(128,23,83,255)';
        ground.stroke();
        
        
        
    // DRAW 'X' SHAPE
    
    function drawX(x) {
        
        
        if(x == 1) {
            
            ground.beginPath();
            ground.moveTo(20,20);
            ground.lineWidth=5;
            ground.lineTo(75,80);
            ground.moveTo(20,80);
            ground.lineTo(75,20);
            ground.stroke();
            
        }
        
        if(x == 2) {
            
            ground.beginPath();
            ground.moveTo(140,20);
            ground.lineWidth=5;
            ground.lineTo(195,80);
            ground.moveTo(140,80);
            ground.lineTo(195,20);
            ground.stroke();
            
        }
    
        if(x == 3) {
            
            ground.beginPath();
            ground.moveTo(260,20);
            ground.lineWidth=5;
            ground.lineTo(315,80);
            ground.moveTo(260,80);
            ground.lineTo(315,20);
            ground.stroke();
            
        }
        
        if(x == 4) {
            
            ground.beginPath();
            ground.moveTo(20,130);
            ground.lineWidth=5;
            ground.lineTo(75,190);
            ground.moveTo(20,190);
            ground.lineTo(75,130);
            ground.stroke();
            
        }
        
        if(x == 5) {
            
            ground.beginPath();
            ground.moveTo(140,130);
            ground.lineWidth=5;
            ground.lineTo(195,190);
            ground.moveTo(140,190);
            ground.lineTo(195,130);
            ground.stroke();
            
        }
        
        if(x == 6) {
            
            ground.beginPath();
            ground.moveTo(260,130);
            ground.lineWidth=5;
            ground.lineTo(315,190);
            ground.moveTo(260,190);
            ground.lineTo(315,130);
            ground.stroke();
            
        }
        
        if(x == 7) {
            
            ground.beginPath();
            ground.moveTo(20,250);
            ground.lineWidth=5;
            ground.lineTo(75,310);
            ground.moveTo(20,310);
            ground.lineTo(75,250);
            ground.stroke();
            
        }
        
        if(x == 8) {
            
            ground.beginPath();
            ground.moveTo(140,250);
            ground.lineWidth=5;
            ground.lineTo(195,310);
            ground.moveTo(140,310);
            ground.lineTo(195,250);
            ground.stroke();
            
        }
        
        if(x == 9) {
            
            ground.beginPath();
            ground.moveTo(260,250);
            ground.lineWidth=5;
            ground.lineTo(315,310);
            ground.moveTo(260,310);
            ground.lineTo(315,250);
            ground.stroke();
            
        }
        
        
        
    }
    
    
    // DRAW 'O' SHAPE
    
    function drawO(o) {
        
        if(o == 1) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(45,45,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 2) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(165,45,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 3) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(285,45,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 4) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(45,165,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 5) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(165,165,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 6) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(285,165,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 7) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(45,285,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 8) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(165,285,25,0,2*Math.PI);
            ground.stroke();
            
        }
        
        if(o == 9) {
            
            ground.beginPath();
            ground.lineWidth=5;
            ground.arc(285,285,25,0,2*Math.PI);
            ground.stroke();
            
        }
    
        
        
        
    }
    
    
    
    
    function setPosition(id,x,y) {
        
        var canvasPos = document.getElementById('ground').getBoundingClientRect();
        var topPos = y + canvasPos.top - 40  + 'px';
        var leftPos = x + canvasPos.left - 40  + 'px';
        document.getElementById(id).style.top=topPos;
        document.getElementById(id).style.left=leftPos;
        
    }
    
    
    setPosition('p1',45,45);
    setPosition('p2',165,45);
    setPosition('p3',290,45);
    setPosition('p4',45,165);
    setPosition('p5',165,165);
    setPosition('p6',290,165);
    setPosition('p7',45,280);
    setPosition('p8',165,280);
    setPosition('p9',290,280);
    
    if(turn == 0) {
        turna.innerHTML='X\'s turn';
    }
    else {
        turna.innerHTML='O\'s turn';
    }
    
    
    
    function set(element) {
    
        var done = false;
        
        var n = element.charAt(1);
        
        
        if( turn == 0 && !done && marked.indexOf(n) == -1 ) {
            
            
            
            drawX(n);
    
            turna.innerHTML='O\'s turn';
            
            turn = 1;
            
            var done = true;
            
            // THIS IS USED TO CHECK IF A SLOT IS TAKEN BY X
            // OR BY O, SO PLAYERS CAN'T MARK AN ALREADY MARKED SLOT
            marked.push(n);
            
            // THIS IS USED TO CHECK IF A SLOT IS TAKEN BY X OR
            // IS IT TAKEN BY O, TO DECIDE WINNER
            marked.push("x" + n);
            
            
        
            
    
        }
        
        if( turn == 1 && !done && marked.indexOf(n) == -1 ) {
            
            
            drawO(n);
    
            turna.innerHTML='X\'s turn';
            
            turn = 0;
            
            var done = true;
            
            // THIS IS USED TO CHECK IF A SLOT IS TAKEN BY X
            // OR BY O, SO PLAYERS  CAN'T MARK AN ALREADY MARKED SLOT
            marked.push(n);
            
            // THIS IS USED TO CHECK IF A SLOT IS TAKEN BY X OR
            // IS IT TAKEN BY O, TO DECIDE WINNER
            marked.push("o" + n);
            
    
            
        }
        
        
        
    }
    
    var s = {
    
        p1 : function() { set('p1') },
        p2 : function() { set('p2') },
        p3 : function() { set('p3') },
        p4 : function() { set('p4') },
        p5 : function() { set('p5') },
        p6 : function() { set('p6') },
        p7 : function() { set('p7') },
        p8 : function() { set('p8') },
        p9 : function() { set('p9') }
        
    }
    /*for( var i = 1; i < 10; i++ ) {
        s['p'+i] = function() { set('p'+i) }
    }*/
    
    for( var i = 1; i < 10; i++ ) {
        document.getElementById('p'+i).addEventListener('touchstart', s['p'+i]);
    }
        
    function disable() {
        for( var i = 1; i < 10; i++ ) {
            document.getElementById('p'+i).removeEventListener('touchstart', s['p'+i]);
        }
    }
    
    
    
    function winner(player) {
    
        
        
        if(   marked.indexOf(player + '1') !== -1 && marked.indexOf(player + '2') !== -1 && marked.indexOf(player + '3') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '1') !== -1 && marked.indexOf(player + '5') !== -1 && marked.indexOf(player + '9') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '1') !== -1 && marked.indexOf(player + '4') !== -1 && marked.indexOf(player + '7') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '2') !== -1 && marked.indexOf(player + '5') !== -1 && marked.indexOf(player + '8') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '3') !== -1 && marked.indexOf(player + '5') !== -1 && marked.indexOf(player + '7') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '3') !== -1 && marked.indexOf(player + '6') !== -1 && marked.indexOf(player + '9') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '4') !== -1 && marked.indexOf(player + '5') !== -1 && marked.indexOf(player + '6') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        
        else if(   marked.indexOf(player + '7') !== -1 && marked.indexOf(player + '8') !== -1 && marked.indexOf(player + '9') !== -1    )
        {
            turna.innerHTML=player.toUpperCase() +" won the game!";
            return true;
        }
        else {
            return false;
        }
        
    }
    
    
    document.addEventListener('touchstart', function(){
    
        if( winner('x') || winner('o') ) {
            turna.style.fontSize='40px';
            disable();
            reload.className = 'fade';
        }
            
        marked = [];
    
    });
    
    window.s = s;
    window.marked = marked;
    
};

document.body.onload = function() {
    run();
}


