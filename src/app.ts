import {Invoice} from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payments.js'
import {HasFormatter} from './interfaces/HasFormatter.js'
//basically making sure that whatever is stored in 
// docOne and docTwo should implement  the HasFormatter interface
let docOne:HasFormatter;
let docTwo:HasFormatter;


// ! is used to tell TypeScript that we are sure the element exists, so it won'// Output: "https://www.google.// Output: "https://developer.mozilla.// Output: "https://www.w3// Output: "https://developer.mozilla.// Output: "https://www.example.

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector( '#details' ) as HTMLInputElement;
const amount = document.querySelector( '#amount' ) as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e:Event)=>{
    e.preventDefault(); //prevents refresh

    let doc:HasFormatter;
    if(type.value === 'invoice'){
        doc = new  Invoice(tofrom.value, details.value , (amount.valueAsNumber));
    }else{
        doc = new Payment(tofrom.value, details.value ,amount.valueAsNumber)    
    }

    list.render(doc, type.value, 'end');
})




/*
docOne = new Invoice("heelo", 'web', 345);
docTwo = new Payment("sdkjn", "app", 3000);

let docs:HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);*/
/*
interface person{
    name: string;
    age: number;
    speak(a:string): void;
    spend(b:number):number;
}

const me: person={
    name:'hello', 
    age:45, 
    speak(text:string):void{
        console.log(text);
    },
    spend(c:number):number{
        console.log('amoiunt spent', c);
        return c;
    }
}
const greet = (p:person)=>{
    console.log('hello', p.spend);
}
greet(me);
*/





/*

const inv1 = new Invoice('hello', 'hi', 300);
const inv2 = new Invoice('sdjn', 'hey', 4000);


let inv: Invoice[] = [];
inv.push(inv1);
inv.push(inv2);

inv.forEach(inv =>{
    console.log(inv.amount, inv.client, inv.details, inv.format());
}) 
*/


//const form = document.querySelector('form')!;

