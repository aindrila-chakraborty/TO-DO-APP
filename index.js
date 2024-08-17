let todoList=[
  {
    item : 'Buy milk',
    dueDate :'4/10/2024'
  },
  {
    item:'Go to College',
    dueDate :'4/10/2024'
  }
];
//when the page is loading need to call display method
displayItems();

// to add element
function addTodo(){
  let inputElement =document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date')
  let todoItem = inputElement.value;
  let todoDate= dateElement.value;
  console.log(todoItem);
  //item will be added at last sequentially
  todoList.push({item :todoItem ,dueDtae :todoDate});
  //aftr addition of the item the value of the input element must be empty
  inputElement.value ='';
  dateElement.value='';

  //call the function when new element is added
  displayItems();
}


//display item
function displayItems(){
let containerElement =document.querySelector('.todo-container');

let newHtml='';

for(let i=0;i<todoList.length;i++ ){
  let item=todoList[i].item;
  let dueDate=todoList[i].dueDate;
newHtml += `

<span>${item}</span>
<span>${dueDate}</span>

<button class ="btn-dlt" onclick ="todoList.splice(${i},1);displayItems();">Delete</button>

`;
}
containerElement.innerHTML=newHtml;
}


