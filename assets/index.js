const { Telegraf } = require("telegraf");
const axios = require("axios");
require("dotenv").config();
const botApiKey = process.env.BOT_API_KEY;
const weatherApiKey = process.env.WEATHER_API_KEY;
const bot = new Telegraf(botApiKey);

function apiUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;
}

bot.start((ctx) => {
    ctx.reply(
        "Welcome to Weather Wizard Bot! Send me a city to get the weather."
    );
});

bot.command("owner", (ctx) => ctx.reply("Anupam: @anupam_9582"));

bot.help((ctx) => ctx.reply("Send me a city to get the weather"));

async function getWeather(city) {
    try {
        const response = await axios.get(apiUrl(city));
        const weatherData = response.data;
        // console.log(message);
        const message =
            `🌤 *The weather in ${weatherData.name} is ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C.\*\n\n` +
            `🌡️ *Temperature:* ${weatherData.main.temp}°C\n` +
            `🤔 *Feels like:* ${weatherData.main.feels_like}°C\n` +
            `🔻 *Minimum temperature:* ${weatherData.main.temp_min}°C\n` +
            `🔺 *Maximum temperature:* ${weatherData.main.temp_max}°C\n` +
            `🌬️ *Pressure:* ${weatherData.main.pressure} hPa\n` +
            `💧 *Humidity:* ${weatherData.main.humidity}%\n` +
            `👁️ *Visibility:* ${weatherData.visibility} meters\n` +
            `🌬️ *Wind speed:* ${weatherData.wind.speed} m/s\n` +
            `🧭 *Wind direction:* ${weatherData.wind.deg}°\n` +
            `📍 *Coordinates:* lon ${weatherData.coord.lon}, lat ${weatherData.coord.lat}\n`;

        return message;
    } catch (error) {
        console.error(error);
        return "Sorry, I could not fetch the weather for that location.";
    }
}

bot.on("text", async (ctx) => {
    const city = ctx.message.text;
    const weatherMessage = await getWeather(city);
    ctx.replyWithMarkdown(weatherMessage);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
