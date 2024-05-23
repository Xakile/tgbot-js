import { Scenes } from "telegraf";

export const setRegionCodeScene = new Scenes.BaseScene("setRegionCode");

setRegionCodeScene.enter((ctx) => {
    ctx.reply("Укажите код региона, например -- 22, 54");
});

setRegionCodeScene.on("message", (ctx) =>{
    ctx.session.newFilters.regionCode = ctx.message.text;
    ctx.reply(`Окей ищем в регионе -- ${ctx.message.text}`);

    return ctx.scene.enter("pickFilter");
});