var img;
function upload() {
    var input=document.getElementById("filein");
 
    img=new SimpleImage(input);
    var canvas=document.getElementById("can");

    img.drawTo(canvas);
    

    
}
function makegrey() {
    var input=document.getElementById("filein");

    for(var pix of img.values()){
      var avg =  (pix.getRed() + pix.getGreen() + pix.getBlue())/3;

      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);

      var imgcanvas=document.getElementById("can2");
      img.drawTo(imgcanvas);


    }
      
      
    }
    function makered() {
      var input=document.getElementById("filein");
  
      for(var pix of img.values()){
        var avg =  (pix.getRed() + pix.getGreen() + pix.getBlue())/3;
        if(avg<180){
          pix.setRed(2*avg);
          pix.setGreen(0);
          pix.setBlue(0);

        }
        else{
          pix.setRed(255);
          pix.setGreen((2*avg)-255);
          pix.setBlue((2*avg)-255);

        }
        var imgcanvas=document.getElementById("can2");
        img.drawTo(imgcanvas);
  
  
      
        
        
      }
    }
    
