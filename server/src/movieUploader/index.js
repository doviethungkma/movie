var XLSX = require("xlsx");
var axios = require("axios");

var workbook = XLSX.readFile("movieList.xlsx");
var sheet_name_list = workbook.SheetNames;
var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(data);

data.forEach(async (item) => {
  const uploadData = {
    name: item.name,
    year: item.year,
    country: item.country,
    description: item.description,
    actor: item.actor,
    type: item.type,
    totalEp: item.totalEp,
    thumb: item.thumb,
    trailer: item.trailer,
    acceptable: item.acceptable,
    tags: item.tags,
    episodes: [
      {
        id: item.episode_id,
        thumb: item.episode_thumb,
        title: item.episode_title,
        description: item.episode_description,
        time: item.episode_time,
        url: item.episode_url,
      },
    ],
  };

  const res = await axios.post(
    "http://localhost:8000/api/v1/movie",
    uploadData
  );
  console.log(res.data);
});
