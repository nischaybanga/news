import axios from "axios";
const instance=axios.create({
    baseURL:"https://newsdata.io/api/1/news?apikey=pub_44075bf721084ec17debf415505d72bfd35d&country=in",
});
export default instance;