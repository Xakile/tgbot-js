import { getVacancies, getVacanciesByRegion } from "../api/vacancies.js";

export class SearchCommand {
    constructor(bot) {
        this.bot = bot;
    }
    
    exec() {
        this.bot.command("search", async (ctx) => {
            try {
                const { regionCode, ...query } = ctx.session.filter || {};

                const { vacancies } = regionCode 
                ? await getVacanciesByRegion(regionCode, query) 
                : await getVacancies(query);

                if (!vacancies) {
                    return ctx.reply("К сожелению не чего не найдено!");
                }

                for (const {vacancy} of vacancies) {
                    ctx.replyWithMarkdown(buildMessage(vacancy));
                }

            } catch (error) {
                ctx.reply(`Что пошло не так( Ошибка:${error}`);
            }
        });
    }
}

const buildMessage = (vacancy) => {
    return (
        `Должность->${vacancy["job-name"]}<\n` +
        `Зарплата-->${vacancy.salary || "Не указано"}<\n` + 
        `Компания-->${vacancy.company.name}<\n\n` + 
        `[Ссылка---->](${vacancy.vac_url})<\n`   
    );
};