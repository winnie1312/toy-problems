function MinhoBu () {
  return 'my name is ' + this.bu + ' and ' + this.minho;
}
let name = {bu: 'uri', minho: 'sarang'};
console.log(MinhoBu.bind(name)());
