// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (value){
    return function (number){
        return number*value;
    }
}
function fareDoubler (number){
    return number*2;
}
function fareTripler (number){
    return number*3;
}
function selectDifferentDrivers(drivers,anotherDrivers){
    return anotherDrivers(drivers);
}