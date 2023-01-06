//Task1

/*const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
]

var newArr = []

arr.map((rep) => {
    newArr[rep] = newArr[rep] + 1 || 1 
})*/

//Task2

let InvoiceList=[
    "InvoiceList 008",
    "InvoiceList 007",
    "InvoiceList 006",
    "InvoiceList 005"
];

    function insertToBottom(){
        if(InvoiceList.lenght){
            InvoiceList.reverse()
        }
        else
            reverseList()
    }
    function reverseList(){
         if(InvoiceList.lenght){
            InvoiceList.reverse()
        }
        else
            reverseList()
    }

    InvoiceList.push("Invoice 004");
    InvoiceList.push("Invoice 003");
    InvoiceList.push("Invoice 002");
    InvoiceList.push("Invoice 001");

    insertToBottom();
    console.log(InvoiceList.join(""))
    reverseList();
    console.log(InvoiceList.join(""))