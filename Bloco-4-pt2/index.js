let squadAst = (n) => {
    let asterix="";
    for(let i=0 ; i<n ; i++){
        asterix='';
        for(let j = 0 ; j < n; j++){
            asterix = asterix + "*"
        }
        console.log(asterix)
    }
}

squadAst(5)