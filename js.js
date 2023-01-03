document.querySelector('.vali').style.display='none';

function myFunction(){
    var d1 = document.querySelector('.userDate').value;
    var m1 = document.querySelector('.userMonth').value;
    var y1 = document.querySelector('.userYear').value ;
    var d2= new Date().getDate();
    var m2= new Date().getMonth()+1;
    var y2= new Date().getFullYear();
    var month= [31,28,31,30,31,30,31,31,31,30,30,31];


    

    //validation
    if (m1==null || m1>=13 || m1<=0 || m1=='' || d1==null || d1>=31 || d1<=0 || d1=='' || y1==null || y1=='' || y1<=0 || y1>y2){
        document.querySelector('.vali').style.display='inline';
        document.querySelector('.h22').innerHTML='';

        
    }else{
        document.querySelector('.vali').style.display='none';
        //caculatiom start....
        if (d2<d1){
            d2= d2+ month[m2-1];
            m2= m2-1;
        }
    
        if (m2<m1){
            m2= m2+12;
            y2=y2-1;
        }
    
        d3=d2-d1;
        m3=m2-m1;
        y3=y2-y1;
        //caculation end...
        

        //result start
        if (d3==0 && m3==0 && y3==0){
            result= 'congratulations!!!';
            
        }else if(d3>0 && m3==0 && y3==0){
            result= d3+ 'days';
            
        }else if(d3>0 && m3==0 && y3>0){
            result= y3+ 'years and '+ d3+ 'days' ;
            
        }else if(d3>0 && m3>0 && y3==0){
            result=  m3+ 'months and ' +d3+ 'days';
            
        }
        
        else if(d3==0 && m3==0 && y3>0){
            result= 'Happy anniversary!!';
        }else if(d3==0 && m3>0 && y3>0){
            result=  y3+'years and ' +m3+ 'months';
        }else if(d3==0 && m3>0 && y3==0){
            result= m3+ 'months';
        }else if(y3<0){
            document.querySelector('.vali').style.display='inline';
        }
        else{
            result=y3+'years '+m3+'months and '+d3+'days ';
        }
        document.querySelector('.h22').innerHTML=result;
    }
};
    
    

    
