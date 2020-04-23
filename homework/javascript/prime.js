a=1,b=11,c=0,isprime=1;

   
    for(i=a;i<=b;i++)
    {
       for(j=2;j<i;j++)
       {
           if(i%j==0)
           {
               isprime=0;
               break;
           }
       }
       if(isprime!=0&&i==j)
       {
           c=c+1;
           
       }
      isprime =1;
     
    }

console.log("(%d,%d)=%d",a,b,c);