


const loadData = async(isShowAll =  false) =>
    {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();

        const tools = data.data?.tools;
          
        displayTools(tools, isShowAll);
        
    }   
        
    
    const displayTools = (tool, isShowAll)=>{

                    
      const toolsContainer = document.getElementById('tools-container');
      const seeMore = document.getElementById('see-more'); 


      toolsContainer.innerHTML = '';

      
      
    if(!isShowAll)
      {
          tool = tool.slice(0,6);
      }


    tool.forEach((item) => 
      {
        
          //  console.log(item);

          const div = document.createElement('div');
          
          

          div.innerHTML =
          `
          <div class="card bg-base-100 w-[487px] shadow-xl">
        
                  <img
                  src="${item?.image}"
                  alt="Not loading"
                  class="rounded-xl mx-5" />
        
                  <div class="card-body h-auto">
          
                  <h2 class="card-title font-sans font-bold text-xl">Features</h2>
           
                  <div class="mt-4 font-sans font-normal text-[14px] text-[#585858]">
                      <ol class="list-decimal list-inside">
                          <li>${item?.features[0] || "N/A"}</li>
                          <li>${item?.features[1] || "N/A"}</li>
                          <li>${item?.features[2] || "N/A"}</li>
                      </ol>
                  </div>

          <hr class="mt-4">
          
          
          <div class=" flex items-center justify-between mt-4">
              
             <div class="">

                <h3 class="font-sans font-semibold text-xl">${item?.name}</h3>
                       
                 <div class="flex justify-around mt-5 gap-2">
                   <img src="images/Calendar.png" alt="">
                   <p>${item?.published_in}</p>
      
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


      if (tool.length >= 6 && !isShowAll) {
        seeMore.classList.remove('hidden');
      } 
    
      else {
        seeMore.classList.add('hidden');
      }
   
    };

        
const seeMoreButton = () =>
  {
     loadData(true);
  }


loadData();    
 
