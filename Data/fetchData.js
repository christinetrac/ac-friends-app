import { SPECIES } from "../Constants/constants";

export function getVillagers(villagerData, gender, species){
    return villagerData.filter(villager => {
        return (villager.gender === gender && villager.species === species)
    });
}

export function getSpeciesList() {
    return Object.values(SPECIES);
}
