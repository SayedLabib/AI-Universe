
console.log('Connected');


const loadData = async() =>
    {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await res.json();

        // console.log(data.data);
        

        data.data.tools.forEach((item) => 
        {
           
             console.log(item);
             
        });
            
   
    }; 

 loadData();   