var c2e = { 狗: 'dog', 貓: 'cat', 一隻: 'a', 這隻: 'the', 追: 'chase', 吃: 'eat' }

function translator(c)
{
  e=[]
  for(let i in c)
  {
    var cword = c[i]
    var eword = c2e[cword]
    e.push(eword)
  }
  return e;
}


var c = translator(process.argv.slice(2))
console.log(c)