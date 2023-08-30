
async function getConnection() {
    let hostname = "";
    try {
        hostname = "http://localhost:8080"
        await fetch(hostname + "/dev/getEndpoints");
        return hostname;
    } catch (error) {
        try {
            hostname = "https://lavanderia-backend.onrender.com"
            await fetch(hostname + "/dev/getEndpoints");
            return hostname;
        } catch (error) {
            return "https://lavanderia-backend.onrender.com";
        }
    }
}


export { getConnection }