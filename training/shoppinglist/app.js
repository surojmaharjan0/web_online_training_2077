// UI Items
const UIlist = document.querySelector('.shopping-list');
const UIform = document.querySelector('form');


const shoppingList=[
	{title:'Coffee',quantity:2},
	{title:'Biscuits',quantity:3},
];
loadAllEventListners();

function loadAllEventListners(){
  	document.addEventListener('DOMContentLoaded',loadList);
  	UIform.addEventListener('submit',processForm);
  	UIlist.addEventListener('click',clearItem);
}

function loadList(){
	UIlist.innerHTML='';
	shoppingList.forEach(item=>{
		const li = document.createElement('li');
		li.innerHTML=`${item.title}:<span class="white"> ${item.quantity}</span>
					<a href="#">
						<i class="fa fa-trash" id="${item.title}"></i>
					</a>`
		UIlist.appendChild(li);
	});
}

function processForm(e){
	//validate data
	const UIname = document.querySelector('#name');
	const UIqty = document.querySelector('#qty');
	const alert = document.querySelector('#alert');


	if(UIname.value==='' || UIqty.value===''){
		alert.classList.remove('hidden');
		alert.classList.remove('alert-success');
		alert.classList.add('alert-danger');
		alert.innerHTML=`Please fill all the fields!`;
		dismiss();
	}else{
		const name = UIname.value;
		const qty = UIqty.value;
		//push to array
		const newItem={
			title:name,
			quantity:qty
		}
		shoppingList.push(newItem);
		alert.classList.remove('hidden');
		alert.classList.remove('alert-danger');
		alert.classList.add('alert-success');
		alert.innerHTML=`"${UIname.value}" added Successfully!`;

		UIname.value='';
		UIqty.value='';

		dismiss();
		loadList();
	}
	e.preventDefault();
}
function clearItem(e){
	if(e.target.classList.contains('fa-trash')){
		shoppingList.forEach((item,index)=>{
			if(item.title === e.target.id){
				shoppingList.splice(index,1);
			}
		})
		e.target.parentElement.parentElement.remove();

		const alert = document.querySelector('#alert');
		alert.classList.remove('hidden');
		alert.classList.remove('alert-danger');
		alert.classList.add('alert-success');
		alert.innerHTML=` "${e.target.id}" Removed!`;
		dismiss();
	}
}

function dismiss(){
	setTimeout(()=>{
	const alert = document.querySelector('#alert');
	alert.classList.add('hidden');
	},2000);
}
