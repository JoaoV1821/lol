
async function getConnection() {
    let hostname = "";
    try {
        hostname = "http://localhost:80d80"
        await fetch(hostname);
        return hostname;
    } catch (error) {
        try {
            hostname = "https://lavanderia-backend.onrender.com"
            await fetch(hostname);
            return hostname;
        } catch (error) {
            return "https://lavanderia-backend.onrender.com";
        }
    }
}


export { getConnection }