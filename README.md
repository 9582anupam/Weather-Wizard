# Weather Wizard Bot

This Telegram bot provides real-time weather updates for any city you request. Simply send the bot a city name, and it will respond with the current weather details.

## Project Details

- **Module Format**: CommonJS (CJS)
- **Language**: JavaScript (Node.js)
- **Dependencies**: Telegraf, Axios, dotenv

## Features

1. **Current weather description**
2. **Temperature, feels like, minimum and maximum temperatures**
3. **Atmospheric pressure and wind speed/direction**
4. **Humidity levels**
5. **Visibility**
6. **Geographical coordinates**

## Commands

- `/start`: Welcome message
- `/help`: Provides instructions on how to use the bot
- `/owner`: Displays the bot owner's contact information

## Getting Started

### Prerequisites

- Node.js
- Telegram account

### Installation

Before running the bot, you'll need to obtain API keys from Telegram and OpenWeatherMap.

1. Create a `.env` file in the root directory and add your API keys:

    ```sh
    BOT_API_KEY=your-telegram-bot-api-key
    WEATHER_API_KEY=your-openweathermap-api-key
    ```

2. **Telegram Bot API Key:**
   - Create a Telegram bot by following the [BotFather](https://core.telegram.org/bots#6-botfather) instructions.
   - Once you've created the bot, BotFather will provide you with a bot API token.
   - Copy the bot API token and set it as `BOT_API_KEY` in the `.env` file.

3. **OpenWeatherMap API Key:**
   - Sign up for an account on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
   - After logging in, navigate to the [API keys](https://home.openweathermap.org/api_keys) section.
   - Generate a new API key and copy it.
   - Set the API key as `WEATHER_API_KEY` in the `.env` file.

4. Run the bot:

    ```sh
    node index.js
    ```

## Usage

To use the bot, open Telegram and search for your bot using its name or username. Start a chat and send the name of any city to receive the current weather information.

## Example

Send a message with the name of a city:

    New York

The bot will respond with:

```
🌤 The weather in New York is clear sky with a temperature of 22°C.

🌡️ Temperature: 22°C
🤔 Feels like: 21°C
🔻 Minimum temperature: 20°C
🔺 Maximum temperature: 24°C
🌬️ Pressure: 1012 hPa
💧 Humidity: 60%
👁️ Visibility: 10000 meters
🌬️ Wind speed: 5 m/s
🧭 Wind direction: 200°
📍 Coordinates: lon -74.006, lat 40.7143
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/9582anupam/Weather-Wizard/blob/main/LICENSE) file for details.

## Contact

Author: 9582anupamk@gmail.com

---

Enjoy using Weather Wizard Bot for all your weather updates! 🌦️