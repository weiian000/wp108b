class vector{
    constructor(x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }
        add(v2)
        {
            return [this.x+v2.x,this.y+v2.y,this.z+v2.z]
        }
        sub(v2)
        {
            return [this.x-v2.x,this.y-v2.y,this.z-v2.z]
        }
        dot(v2)
        {
            return[this.x*v2.x,this.y*v2.y,this.z*v2.z]
        }
        neg()
        {
            return[this.x*-1,this.y*-1,this.z*-1]
        }
   
}
var  v1= new vector(1,2,3)
var  v2= new vector(4,5,6)
console.log("v1=%s",[v1.x,v1.y,v1.z])
console.log("v2=%s",[v2.x,v2.y,v2.z])
console.log("v1+v2=%s",v1.add(v2))
console.log("v1-v2=%s",v1.sub(v2))
console.log("v1*v2=%s",v1.dot(v2))
console.log("neg=%s\n",v1.neg(v2))

module.exports=vector