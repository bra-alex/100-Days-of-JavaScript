const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '1', size: '1', tags: 'under_30_minutes'},
  headers: {
    'X-RapidAPI-Key': 'cab57b110fmsh146b20ab2bc7874p1e980djsn5b348993337c',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    const results = response.data.results
    for (const obj of results) {
        // console.log(obj.instructions)
        // console.log(obj.yields)
        // console.log(obj.name)
        // console.log(obj.sections)

        // for (const instruction of obj.instructions) {
        //     console.log(instruction.display_text)
        // }

        for (const section of obj.sections) {
            console.log(section.name)
            console.log(section.components.length)

            for (const component of section.components) {
                console.log(component.raw_text)
            }
        }

    }
	// console.log(response.data.results[0]['sections'][0]['components'][0]['measurements']);
}).catch(function (error) {
	console.error(error);
});