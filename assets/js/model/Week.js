'use strict';

import Day from './Day.js'

class Week{

    constructor(date){
        this._days = [];

        for (let i = 0; i < 7; i++){

        }



    }

    static containMonth(date, month){


        return Week.getMonday(date).getMonth() === month || Week.getSunday(date).getMonth() === month



    }

    static getMonday(date){
        const monday = new Date(date.toString());
        if(monday.getDay() === 1){
            return monday;
        }

        monday.setDate( monday.getDate() - (7 - monday.getDay()) );
        debugger;
        return monday;
    }

    static getSunday(date){
        const sunday = new Date(date.toString());
        if(sunday.getDay() === 0){
            return sunday;
        }
        sunday.setDate( sunday.getDate() + (7 - sunday.getDay()));//1 2 3 4 5 6 0
        debugger
        return sunday;



    }

}


console.log( Week.containMonth(new Date(2019,11,1), 10));



export default Week;
