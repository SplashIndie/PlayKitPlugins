// EnemyIA version 1.0

/*

Esse plugin define um sistema de inimigo em um objeto para seguir o objeto PLAYER

Quando encostado, ele verifica se há uma função dentro do objeto PLAYER para ser executada!

Caso não exista ele dará um aviso para instalar o plugin RPGManager.js para melhor funcionamento.



Utilize [Object].activeIA();

Para ativar o sistema do plugin!!

*/

this['activeIA'] = () => {
    setInterval(() => {
        if (!colliding(this, PLAYER)) {
            if (-this.positionX > (camX / 50)) {
                this.positionX += 1;
            } else if (-this.positionX < (camX / 50)) {
                this.positionX -= 1;
            } else if (-this.positionY > (camY / 50)) {
                this.positionY += 1
            } else if (-this.positionY < (camY / 50)) {
                this.positionY -= 1;
            }
        } else {
            if (PLAYER['getDamage']) {
                PLAYER.getDamage(3);
            } else {
                console.warn(`
                    Não estamos conseguindo acessar uma função do objeto PLAYER!!

                    Para isso, o sistema precisa do plugin RPGManager.js para melhor funcionamento!



                    Caso você tenha o plugin RPGManager.js instalado e mesmo assim os problemas continuam acontecendo,
                    tente usar uma versão mais recente!!
                `);
            }
        }
    }, 500);
}
