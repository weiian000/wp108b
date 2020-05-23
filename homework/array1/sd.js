var a =[1,2,3,4,5];

var b=0;
for(i=0;i<a.length;i++)
{
    b=b+a[i];
}
var average = (b/a.length);


var sum=0;
for(i=0;i<a.length;i++)
{
    sum=sum+Math.pow(average-a[i],2);
}

var sd= Math.sqrt(sum*(1/a.length));

console.log("sd = %d",sd);







