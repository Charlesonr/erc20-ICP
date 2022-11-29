import { Query, Update, nat64, nat16 } from 'azle';

type Account = {
    address: string;
    balance: nat64;
};

type State = {
    accounts: {
        [key: string] : Account;
    };
    totalSupply: nat64;
    ticker: string; //abbreviation for token name
    name: string;
};

let state: State = {
    accounts: {},
    totalSupply: 0n,
    ticker: '',
    name: ''
}




