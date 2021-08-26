export class ConversaoResponse {

	constructor(
		public base: string,
		public date: string,
		public rates: any) {}
}

//{"base":"USD","date":"2017-03-08","rates":{"BRL":3.1405}}

/*
 aqui se define a estrutura de do Json
{
    "base":"USD",
    "date":"2021-03-08",
    "rates":{
       "BRL":3.1405 
    }
}
*/