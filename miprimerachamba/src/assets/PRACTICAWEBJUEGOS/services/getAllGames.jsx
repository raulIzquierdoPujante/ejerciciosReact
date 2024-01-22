/*This service file will encapsulate the logic for making API requests to the freeToGameAPI.
 It can export functions like fetchGames, which your GameListContainer component will use to get the game data. */


export async function getAllGames() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f8a694ebeamsh0cd83c15de1784ep193077jsne13db54fb4e4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}


