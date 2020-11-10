export function getGenderVillagers(villagerData, gender) {
    return villagerData.filter(villager => {
        return villager.gender === gender
    });
}

export function getSpeciesVillagers(villagerData, species) {
    return villagerData.filter(villager => {
        return villager.species === species
    })
}
