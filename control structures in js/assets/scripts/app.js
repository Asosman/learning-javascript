const PLAYER_ATTACK_VALUE = 10;
const STRONG_PLAYER_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;

const ATTACK_MONSTER = "PLAYER_ATTACK_MONSTER";
const STRONG_ATTACK_MONSTER = "PLAYER_STRONG_ATTACK_MONSTER";

const PLAYER_ATTACK_EVENT_LOG = "PLAYER_ATTACK";
const PLAYER_STRONG_ATTACK_EVENT_LOG = "PLAYER_STRONG_ATTACK";
const PLAYER_HEAL_EVENT_LOG = "PLAYER_HEALED";
const MONSTER_ATTACK_EVENT_LOG = "MONSTER_ATTACK";
const GAME_OVER_EVENT_LOG = "GAME_OVER";

let battleLog = [];

const enterValue = prompt("enter a number ,", "100");
if (isNaN(enterValue) || enterValue <= 0) {
  chosenMaxLife = 100;
}
chosenMaxLife = parseInt(enterValue);
let hasBonusLife = true;

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, value, playerHealth, monsterHealth) {
  let logEntry;

  if (ev === PLAYER_ATTACK_EVENT_LOG) {
    logEntry = {
      event: ev,
      target: "MONSTER",
      activityValue: value,
      playerHealth: playerHealth,
      monsterHeath: monsterHealth,
    };
  } else if (ev === PLAYER_STRONG_ATTACK_EVENT_LOG) {
    logEntry = {
      event: ev,
      target: "MONSTER",
      activityValue: value,
      playerHealth: playerHealth,
      monsterHeath: monsterHealth,
    };
  } else if (ev === MONSTER_ATTACK_EVENT_LOG) {
    logEntry = {
      event: ev,
      target: "PLAYER",
      activityValue: value,
      playerHealth: playerHealth,
      monsterHeath: monsterHealth,
    };
  } else if (ev === PLAYER_HEAL_EVENT_LOG) {
    logEntry = {
      event: ev,
      target: "PLAYER",
      activityValue: value,
      playerHealth: playerHealth,
      monsterHeath: monsterHealth,
    };
  } else if (ev === GAME_OVER_EVENT_LOG) {
    logEntry = {
      event: ev,
      activityValue: value,
      playerHealth: playerHealth,
      monsterHeath: monsterHealth,
    };
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;
  // addBonusLife();
  resetGame(chosenMaxLife);
}

function endRound() {
  let initialPlayerHealth = currentPlayerHealth;
  let damage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= damage;
  writeToLog(
    MONSTER_ATTACK_EVENT_LOG,
    damage,
    currentPlayerHealth,
    currentMonsterHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert("Your Bonus life saved you!!!");
    setPlayerHealth(initialPlayerHealth);
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth >= 0) {
    writeToLog(
       GAME_OVER_EVENT_LOG,
        'PLAYER WON',
        currentPlayerHealth,
        currentMonsterHealth
      );
    console.log("player won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
    writeToLog(
        GAME_OVER_EVENT_LOG,
         'MONSTER WON',
         currentPlayerHealth,
         currentMonsterHealth
       );
    console.log("monster win");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    writeToLog(
        GAME_OVER_EVENT_LOG,
         "IT'S A DRAW",
         currentPlayerHealth,
         currentMonsterHealth
       );
    console.log("its a draw");
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonter(mode) {
  if (mode === ATTACK_MONSTER) {
    let damage = dealMonsterDamage(PLAYER_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    writeToLog(
        PLAYER_ATTACK_EVENT_LOG,
         damage,
         currentPlayerHealth,
         currentMonsterHealth
       );
  } else if (mode === STRONG_ATTACK_MONSTER) {
    let damage = dealMonsterDamage(STRONG_PLAYER_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    writeToLog(
        PLAYER_STRONG_ATTACK_EVENT_LOG,
         damage,
         currentPlayerHealth,
         currentMonsterHealth
       );
  }
  endRound();
}

function attackHandler() {
  attackMonter(ATTACK_MONSTER);
}

function strongAttackHandler() {
  attackMonter(STRONG_ATTACK_MONSTER);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can not heal beyond you maximum health");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
     PLAYER_HEAL_EVENT_LOG,
     healValue,
     currentPlayerHealth,
     currentMonsterHealth
   );
  endRound();
}
function writeToLogHandler() {
  console.log(battleLog);
}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
he alBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", writeToLogHandler);
  