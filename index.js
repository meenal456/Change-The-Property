

function set()
{
    let elements= document.getElementsByName('cssproperty');


    for(let index=0;index<elements.length;index++)
    {
        let cssproperty=elements[index].getAttribute('id');
        
        let cssvalue=elements[index].value;
        
        let div=document.getElementById('modify');
        
        div.style[cssproperty]=cssvalue;
        
     document.getElementById('set').addEventListener('click',set);   
    }
}
