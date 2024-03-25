import {HasFormatter} from '../interfaces/HasFormatter.js'


//classes and modules
export class Invoice implements HasFormatter{
    //client: string;
    //details: string;
    //private amount: number;

    constructor(
        readonly client: string, 
        public details: string, 
        public amount:number
    ){}
    

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}