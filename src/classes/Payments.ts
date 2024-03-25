import { HasFormatter } from '../interfaces/HasFormatter';

export {HasFormatter} from '../interfaces/HasFormatter';

export class Payment implements HasFormatter{
    constructor(
        readonly recipient:string, 
          
        public details:string, 
        public  amount:number,
    ){

    }

    format(){
        return `${this.recipient} is owed ${this.amount} to ${this.details}`;
    }
}