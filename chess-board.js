
let grid="";
for(let space=0; space<8; space++){
  for(let hash=0; hash<8; hash++){
    if((space+hash)%2===0){
      grid+=" ";
    }else {
      grid+="#"
    };
  }
    grid+="\n";
}
console.log(grid);
