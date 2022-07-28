const fs = require('fs')

fs.readdir("../data/blog", (err, data) => {
    data.toString().split(",").forEach(file => {
        fs.readFile("../data/blog/" + file, (err, data) => {
            let d = (data.toString().split("\n"));

            //Doesn't Include Date
            if(!data.toString().split("---")[1].includes("date")){
                let date = file.split("-blog")[0];
                d.splice(4, 0, "date: " + date);
            }
            let updatedText = d.join("\n")
            fs.writeFile("../data/blog/" + file, updatedText, (err) => {
                if(err) console.error(err);
            })

            //For removing layout
            // if(data.toString().split("---")[1].includes("layout: ")){
            //     d.splice(3, 1);
            // }
            // updatedText = d.join("\n")
            // fs.writeFile("../data/blog/" + file, updatedText, (err) => {
            //     if(err) console.error(err);
            // })
            
        })
    })

})