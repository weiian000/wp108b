const vector=require('./vector')

var v1=new vector(2,3,4)
var v2=new vector(5,6,7)
console.log("v1 = %s",[v1.x,v1.y,v1.z])
console.log("v2 = %s",[v2.x,v2.y,v2.z])
console.log("v1+v2= %s",v1.add(v2))
console.log("v1-v2= %s",v1.sub(v2))
console.log("v1*v2 = %s",v1.dot(v2))
console.log("neg()= %s",v1.neg())
