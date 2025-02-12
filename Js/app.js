
console.log('Connected');


const loadData = async() =>
    {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await res.json();

        // console.log(data.data);
        
          
        const toolsContainer = document.getElementById('tools-container');
        
        data.data.tools.forEach((item) => 
        {
           
             console.log(item);

            const div = document.createElement('div');
            
            div.classList.add("grid","grid-cols-1","lg:grid-cols-3","gap-2","mt-10");

            div.innerHTML =
            `
            <div class="card bg-base-100 w-[487px] shadow-xl">
          
                    <img
                    src="images/Rectangle 23.png"
                    alt="Shoes"
                    class="rounded-xl mx-5" />
          
                    <div class="card-body h-auto">
            
                    <h2 class="card-title font-sans font-bold text-xl">Features</h2>
             
                    <div class="mt-4 font-sans font-normal text-[14px] text-[#585858]">
                        <ol class="list-decimal list-inside">
                            <li>Natural language processing</li>
                            <li>Contextual understanding</li>
                            <li>Text generation</li>
                        </ol>
                    </div>

            <hr class="mt-4">
            
            
            <div class=" flex items-center justify-between mt-4">
                
               <div class="">

                  <h3 class="font-sans font-semibold text-xl">ChatGPT</h3>
                         
                   <div class="flex justify-around mt-5 gap-2">
                     <img src="images/Calendar.png" alt="">
                     <p>11/01/2022</p>
        
                   </div>

               </div>        

              <div class="card-actions ">
                <button class="btn btn-circle border-none shadow-none bg-[#FEF7F7]">
                  <img src="images/arrow.png" alt="">
                </button>
              </div>   

            </div>
            

          </div>
        </div>
                    
            
            `
        
            toolsContainer.appendChild(div); 
        });
        
   
    }; 

 loadData();   