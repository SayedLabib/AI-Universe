


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
              <button onclick ="showDetails('${item.id}')" class="btn btn-circle border-none shadow-none bg-[#FEF7F7]">
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

 
const showDetails = async(ai_Id) => 
  {
     const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${ai_Id}`);
     const data = await res.json();
   
     const tools = data.data
    //  console.log(data.data);

    showDetailsModal(tools);
     
  };

 
    
const showDetailsModal = (ai_hub) =>
  {
     const details = document.getElementById('show-details');

     details.innerHTML = 
     
    //  Show details modal information
     `
              <dialog id="my_modal_4" class="modal">
           
            <div class="modal-box w-11/12 max-w-5xl rounded-lg">
              
                <div class="flex justify-around gap-5 mx-20 my-20">

                   
                  <!-- left section -->
                  
                   <div class="w-[400px] h-auto rounded-lg ring-1 ring-[#EB5757] bg-[#EB57570D] ">
                      
                      <div class="w-auto mx-5 mt-10 text-xl font-semibold font-sans">
                        <h3>${ai_hub?.description || "No data found"}</h3>

                      </div>        

                      <!-- subscription section  -->
                      <div class="flex justify-around gap-4 mt-8 mx-5">
                         
                        <div class="w-[132px] h-[100px] mt-5 bg-white shadow-sm text-center rounded-md">
                           
<div class="my-8 font-inter font-semibold text-[#03A30A]">
        <p >${ai_hub?.pricing?.[0]?.price && ai_hub.pricing[0].price !== "null" ? ai_hub.pricing[0].price : "Free"}</p>
        <p>${ai_hub?.pricing?.[0]?.plan && ai_hub.pricing[0].plan !== "null" ? ai_hub.pricing[0].plan : "Basic Plan"}</p>
    </div>
                        </div>

                        <div class="mt-5 w-[132px] h-[100px] bg-white shadow-sm text-center rounded-md">
                            
                           <div class="my-8 font-inter font-semibold text-[#F28927]">
        <p>${ai_hub?.pricing?.[1]?.price && ai_hub.pricing[1].price !== "null" ? ai_hub.pricing[0].price : "Free"}</p>
        <p>${ai_hub?.pricing?.[1]?.plan && ai_hub.pricing[0].plan !== "null" ? ai_hub.pricing[0].plan : "Basic Plan"}</p>
    </div>

                        </div>

                        <div class="mt-5 w-[132px] h-[100px] bg-white shadow-sm text-center rounded-md">
                                
                            <div class="my-5 font-inter text-[14px] text-[#EB5757] font-semibold ">
        <p>${ai_hub?.pricing?.[2]?.price && ai_hub.pricing[2].price !== "null" ? ai_hub.pricing[2].price : "Free"}</p>
        <p>${ai_hub?.pricing?.[2]?.plan && ai_hub.pricing[2].plan !== "null" ? ai_hub.pricing[2].plan : "Basic Plan"}</p>
                            </div>
                        </div>

                      </div>


                    <!-- Features and Integrations Sections -->

                    <div class="mt-8 mb-8">

                       <div class="flex justify-between mx-6 gap-2">
                         
                          <div class="font-sans">
                              
                           <h3 class="text-xl font-semibold">Features</h3>
                            
                            <ul class="text-[14px] list-inside list-disc">
                              <li>${ai_hub?.features?.["1"]?.feature_name && ai_hub?.features?.["1"]?.feature_name !=="null" ? ai_hub?.features?.["1"]?.feature_name:"No data found"}</li>
                              <li>${ai_hub?.features?.["2"]?.feature_name && ai_hub?.features?.["2"]?.feature_name !=="null" ? ai_hub?.features?.["2"]?.feature_name:"No data found"}</li>
                              <li>${ai_hub?.features?.["3"]?.feature_name && ai_hub?.features?.["3"]?.feature_name !=="null" ? ai_hub?.features?.["3"]?.feature_name:"No data found"}</li>
                            </ul>
                          
                           </div>

                          <div class="font-sans ">
                            <h3 class="text-xl font-semibold">Integrations</h3>  
                           
                            <ul class="text-[14px] list-inside list-disc">
                              <li>${ai_hub?.integrations[0] && ai_hub?.integrations[0]!== "null" ? ai_hub?.integrations[0]: "No data found"}</li>
                              <li>${ai_hub?.integrations[1] && ai_hub?.integrations[1]!== "null" ? ai_hub?.integrations[1]: "No data found"}</li>
                              <li>${ai_hub?.integrations[2] && ai_hub?.integrations[2]!== "null" ? ai_hub?.integrations[2]: "No data found"}</li>
                           </ul> 

                          </div>

                       </div>



                    </div>

                   </div>
                    

                  <!-- right section -->

                   <div class="w-[487px] h-auto ring-1 ring-slate-300 rounded-lg">
                        
                       <div class="mx-4 mt-5 font-sans">

                         <img class ="rounded-md" src="${ai_hub?.image_link[0] || "No data found"}" alt="">

                         <h3 class="mt-5 text-center font-semibold">${ai_hub?.input_output_examples[0]?.input?.slice(0,100) || "No data found"}</h3>
                         <p class=" mt-5 text-[14px] text-center text-[#585858]">${ai_hub?.input_output_examples[0]?.output?.slice(0,100) || "No data found"}</p>
                       </div>
                   </div>

                </div>

               

             <!-- close button -->

                
             <div class="modal-action">
               <form method="dialog">
                 <!-- if there is a button, it will close the modal -->
                 <button class="btn">Close</button>
               </form>
             </div>

            </div>
         
         </dialog>
     
     
     
     `
    
     my_modal_4.showModal();
  };
    
const seeMoreButton = () =>
  {
     loadData(true);
  }


loadData();    
 
