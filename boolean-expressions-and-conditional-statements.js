/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

let fightOrFlight;
let restingPlace;
let weaponSelection;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?   ");

if (choice === "mountains" && hasTorch) {
  console.log(`You safely navigate through the dark mountains.

    But at the end of the trail you encounter a pack of wolves!

    There are three of them.

    They all seem very angry...
    and your torch will be out soon.  
    `);
    fightOrFlight = readline.question(`You can either run or fight. What will you choose?   `);

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log(`You find your way to the village.
     Once you reach the village you decide that you need to rest.
    
    You can either set up camp outside the village or stay at an inn...`);
    restingPlace = readline.question(`What do you do?   `);

} else {
  console.log("You get lost and wander aimlessly.");
}






if (restingPlace === "camp outside" && choice === "village"){

  console.log(`
    You find a good spot outside the village and set up camp...

    Your eyes close and you drift into deep slumber. zzzzzzz....`)

} else if (restingPlace === "inn" && choice === "village"){

  console.log(`
    You enter the inn and find that the Inn is run by a pack of wolves!!!
    
    Quickly you run out of the Inn but the wolves follow you out...
    
    `)
fightOrFlight = readline.question(`You can either run or fight. What will you choose?   `);

}







if (fightOrFlight === "run"){
  console.log(`
    You run but you are not fast enough...

    The pack of wolves rip you to pieces!

    RIP
    `)} else if (fightOrFlight === "fight")
    {
  console.log(`
    You use last bit of flame left in your tourch to deter the pack of wolves...
    As you continue to fight for your life a wolf jumps and throws you to the ground.
    
    You fall and roll down a steep hill and land on something hard...
    It's a crate.. Inside is a sword and a single shot musket 
    `
    )

weaponSelection = readline.question(`Choose one item...`);
}







if (weaponSelection === "sword" && fightOrFlight === "fight" ){
  console.log(`
    You quickly grab the sword and defeat the first wolf to attack!
    
    The pack of wolves decide to leave you alone.
    `)
}
else if (weaponSelection === "musket" && fightOrFlight === "fight"){
  console.log(`
    You quickly grab the musket and point it at the wolf behind you...
    
    You pull the trigger but the gun is not loaded.
    
    The pack of wolves eat you alive!!!
    
    RIP`)
}





/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/