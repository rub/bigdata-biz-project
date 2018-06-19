var slider1 = 0
           var slider2 = 0
           var co2 = 0
var T = 0
           d3.select('#one')
               .on('input', function(){
                   slider1 = +this.value
                 changeRect()
               })

           d3.select('#two')
               .on('input', function(){
                   slider2 = +this.value
                changeRect()
               })



 var target1 =0
 var target2=0
$('#one').on('input', function(e){
               if(e.target.value === 100) return
               target1= e.target.value
                 funzione()
                if(target1 > t2) $(e.target).val(t2)
                console.log(e.target.value)
                 
            })
$('#two').on('input', function(e){
            if(e.target.value === 100 || e.target.value === 0) return
	           target2= e.target.value
	           funzione()
                if(target2 > t1) $(e.target).val(t1)
                    console.log(e.target.value)


                  
            })
function funzione(){
       t1=100-target1
       t2=100-target2
    
     
}
     





           function changeRect(){
               co2 = slider1+slider2;
                 t1=100-target1
                 t2=100-target2
               T= t1+t2
               var hei = co2*8
               var tr = co2*7
               var fabr = [401536.5,216829710000,36,14];
                var alb =  [9034571250,108414855000,361382.8];
               var trans2 = 980-hei
                var trans1 = 920-hei
               console.log(trans1);

               console.log(co2);
        
         if(co2>100){
              d3.select("#co2")
                      .attr("x1",350)
                      .attr("y1",190)
                      .attr("x2",1550)
                      .attr("y2",190)
              d3.select("#tre")
                        .text(100*alb[0].toFixed(2))
               d3.select("#plan")
                        .text(100*fabr[0].toFixed(2))
              d3.select("#co3")
                  .text(co2+"%")
                   .attr("y", 120-180)
              d3.select("#co4")
                  .text("OF CO2 REDUCED")
                   .attr("y", 120-220)
               d3.select("#co5")
                  .text("FOR A TOTAL OF 2342355 TONS")
                   .attr("y", 120-250)
                  d3.select("#co3")
                  .text("100%")
         }
                      
                     
             else{
                   d3.select("#hidden-chart")
                      .attr("height",900)
               d3.select("#sliderect")
                    .attr("height",hei)
                    .attr("y",910-hei)     
                    .style("fill"," #D8AD39")         
               d3.select("#co2")
                      .attr("x1",350)
                      .attr("y1",990-hei)
                      .attr("x2",1550)
                      .attr("y2",990-hei)
                 d3.select("#tre")
                        .text(co2*alb[0].toFixed(2))
               d3.select("#plan")
                        .text(co2*fabr[0].toFixed(2))
                 d3.select("#co3")
                  .text(co2+"%")
                   .attr("y", trans1-180)
              d3.select("#co4")
                  .text("OF CO2 REDUCED")
                   .attr("y", trans1-220)
               d3.select("#co5")
                  .text("FOR A TOTAL OF 2342355 TONS")
                   .attr("y", trans1-250)
             }
                


}
