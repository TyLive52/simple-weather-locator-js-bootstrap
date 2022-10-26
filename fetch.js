class Fetch {
    async getCurrent(input) {
        const myKey = "a3d1b64cd8ddbe72cb9efc0cfc3330c5";

        //make request url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        return data;
    }
}