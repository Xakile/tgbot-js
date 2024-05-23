import { Markup, Scenes } from "telegraf";

export const pickFilterScene = new Scenes.BaseScene("pickFilter");

pickFilterScene.enter((ctx) => {
    ctx.session.newFilters = ctx.session.newFilters || {};

    ctx.reply(
        "Доступные фильтры",
        Markup.inlineKeyboard([
            [
                Markup.button.callback("Ключевое слово", "text"),

                Markup.button.callback("Код региона", "regionCode"),
            ],
            [ Markup.button.callback("Готово", "done")],

        ])
    );
});

pickFilterScene.action("text", (ctx) => {
    ctx.deleteMessage();

    ctx.scene.enter("setText");
});
pickFilterScene.action("regionCode", (ctx) =>{
    ctx.deleteMessage();

    ctx.scene.enter("setRegionCode");
});
pickFilterScene.action("done", (ctx) =>{
    if (Object.keys(ctx.session.newFilters).length) {
        ctx.session.filter = {
            ...ctx.session.filter,
            ...ctx.session.newFilters,
        };

        ctx.session.newFilter = {};

        return ctx.editMessageText("Фильтр успешно обновлены!");
    } else {
        ctx.deleteMessage();
    }

    return ctx.scene.leave();
});