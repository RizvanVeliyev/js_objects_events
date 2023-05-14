function addLi()
{

    var txtVal = document.getElementById('txtVal').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

     liNode.appendChild(txtNode);
     listNode.appendChild(liNode);

}
let display=document.getElementById('display');
let list=document.getElementById('list');
function displayList(){
    list.classList.add('remove');
        
}

display.addEventListener("click",displayList);