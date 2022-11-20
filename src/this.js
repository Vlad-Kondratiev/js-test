//Контекст (this)
// - Де та як була об'явлена функція НЕ МАЄ ЖОДНОГО ЗНАЧЕННЯ!
// - Контекст визначається В МОМЕНТ ВИЗОВУ ФУНКЦІЇ, якщо він не прив'язан явно

const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
    },
};

user.showTag();

//========================================

const showTag = function () {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
};