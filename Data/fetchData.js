import { SPECIES } from "../Constants/constants";
import { STATUS } from "../Constants/constants";

export function getVillagers(villagerData, gender, species){
    return villagerData.filter(villager => {
        return (villager.gender === gender && villager.species === species)
    });
}

export function getVillagerStatus(level){
    if(level===1 || level===2) return STATUS.friends;
    else if (level===3 || level===4) return STATUS.goodFriends;
    else return STATUS.bestFriends;
}

export function getPronoun1(gender) {
    if(gender === 'Male') return 'his';
    else return 'her'
}

export function getPronoun2(gender) {
    if (gender === 'Male') return 'him';
    else return 'her'
}

export function getDate(date) {
    const year = date.getFullYear();
    const day = date.getDate();
    const options = { month: "short" };
    const month = new Intl.DateTimeFormat("en-US", options).format(date);
    return month + ' ' + day + ', ' + year;
}

export function getSpeciesList() {
    return Object.values(SPECIES);
}
