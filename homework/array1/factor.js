var n=45,c=[];

for(i=2;i<=n;i++)
{
    while(n!=i)
    {
        if(n%i==0)
        {
            n=n/i;
            
            c.push(i);
            
            
            
        }
        else
        {
            break;
        }
         
    }
    
    
}
c.push(n)
console.log(c)







