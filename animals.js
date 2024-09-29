
const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    const petNum = parseInt(document.getElementById("petNum").value, 10);
    const petInfo = document.querySelector(".selectedPetInfo");

    const selectedPet = petsData[petNum - 1];
    petInfo.textContent = `${selectedPet.petName} is ${selectedPet.age} years old. This ${selectedPet.breed} weighs ${selectedPet.weightInKilos} kilos.`;
}
