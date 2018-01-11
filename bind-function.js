function minhobu () {
  return 'my name is ' + this.bu + ' and ' + this.minho;
}
let name = {bu: 'uri', minho: 'sarang'};
console.log(minhobu.bind(name)());
