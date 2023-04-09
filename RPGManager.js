// version 1.0
// esse plugin define algumas configurações de RPG para o objeto escolhido.

// TUTORIAL //
/*

Após importar o plugin no objeto desejado, para acessar os dados do RPGManager, basta usar [Object].rpg_configs.[atributo]

Exemplo:

PLAYER.rpg_configs.health = 50;

*/


console.warn('[ RPGManager 1.0 ] Melhor plugin de RPG para seus jogos.');
console.log(this)

let RPGManager = {
    max_health: 50,
    health: 50,
    mana: 200,
    power: 5,
    kills: 0,
    deaths: 0
};

this['rpgmanager_load'] = () => {
    console.warn('[ RPGManager 1.0 ] Melhor plugin de RPG para seus jogos.');
    this['rpg_configs'] = RPGManager;
    let health = new ui_text(`Health: ${this.rpg_configs.health}`, 16, 32, 22, '#f00');
    setInterval(() => {
        health.text = `Health: ${this.rpg_configs.health}`;
        health.draw();
    }, 10);
};
this['getDamage'] = (hit) => {
    this.rpg_configs.health -= hit;
    if (this.rpg_configs.health <= 0) this.rpg_configs.health = 0;
}
