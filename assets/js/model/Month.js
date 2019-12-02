'use strict';

import Week from './Week.js'

class Month{
    constructor(date){

        this._weeks = [];
        const from = new Date( date.getFullYear(), date.getMonth(), 1 );


    }

    get weeks(){
        return this._weeks;
    }

}

const test = new Month(new Date(2019,11, 8));


export default Month;




//2019.12.01 Sun
//25 26 27 28 29 30 1

//2019.12.08 Sun
//2 3 4 5 6 7 8



//2020.01.08 Sun