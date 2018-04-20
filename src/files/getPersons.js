function getPersons() {

    let request = new Request(`https://raw.githubusercontent.com/fempire/women-tech-speakers-organizers/master/README.md`);
    return fetch(request)
        .then((response) => {
            return response.text()
        }).then((text) => {
            console.log(text);
            let regex = new RegExp('^####');
            console.log(text.indexOf('Fempire'));
            console.log(text[1], text[2], text[8], text[9]);
            let newtext = text.split(text[9]);
            console.log(newtext, typeof text[9]);
            let indices = [];
            newtext.map((line, index) => {
               if (line.startsWith('####')) {
                    indices.push(index);
               }
            });
            console.log(indices);
            let names = [];
            for (let i=0; i<indices.length; i++) {
                if (i!==indices.length) {
                    let person = {
                        name: newtext[indices[i]].slice(5,),
                        info: []
                    };
                    let count = indices[i+1]-indices[i];
                    for (let j=2; j<(count-1); j++){
                        person.info.push(newtext[indices[i]+j])
                    }
                    names.push(person);
                }
            }
            console.log(names);
            return text;
        });
}

export default getPersons;