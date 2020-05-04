export const formatDate = (d) => {
        let date = new Date(d);
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        let yyyy = date.getFullYear();

        if(dd<10) 
        {
            dd='0' + dd;
        } 

        if(mm<10) 
        {
            mm ='0'+ mm;
        }    
    return yyyy+'-'+mm+'-'+dd;
}

export const addMonths = (value) => {
    var date = new Date(); 
    var n = date.getDate();
    date.setDate(1);
    date.setMonth(date.getMonth() + value);
    var res = date.setDate(Math.min(n, getDaysInMonth(date.getFullYear(), date.getMonth())));
    return res;
}
//used for addMonths
const isLeapYear = (year) => {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};
//used for addMonths
const getDaysInMonth = (year, month) => {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}
