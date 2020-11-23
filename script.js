var submitBtn = document.getElementById('submitBtn');
var table = document.getElementById('table');
var list = []

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var myform = document.getElementById('myform');

    var expenses = {
        name: myform.name.value,
        desc: myform.desc.value,
        price: parseInt(myform.price.value)
    }

    list.push(expenses);


    table.innerHTML += `<tr>
            <td>${myform.name.value}</td> 
             <td>${myform.desc.value}</td>
             <td>${myform.price.value}</td>
             </tr> `
    myform.reset()
    totalPrice()
})

function searchElement() {
    var search = document.getElementById('search').value
    var filtered = list.filter((e) => e.name.includes(search))
    var out = `<tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    </tr>`
    filtered.forEach(el => {
        out += `<tr>
            <td>${el.name}</td> 
             <td>${el.desc}</td>
             <td>${el.price}</td>
             </tr> `

    });
    table.innerHTML = out
}

var mylist = []
function totalPrice() {
    var sum = 0;
    var myform = document.getElementById('myform');
    var h2 = document.getElementById('h2')
    var myints = []
    list.forEach(element => {
        myints.push(element.price)
    });

    var sum = myints.reduce((prev, curr) => prev + curr)
    h2.innerHTML += `${sum}`


}