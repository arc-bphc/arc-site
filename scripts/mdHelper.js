const fs = require('fs')

let commands = process.argv.slice(2)

switch (commands[0]) {
  case 'date':
    console.log('Checking if files have any missing dates')
    fs.readdir('../data/blog', (err, data) => {
      data
        .toString()
        .split(',')
        .forEach((file) => {
          fs.readFile('../data/blog/' + file, (err, data) => {
            let d = data.toString().split('\n')

            //Doesn't Include Date
            if (!data.toString().split('---')[1].includes('date')) {
              let date = file.split('-blog')[0]
              d.splice(4, 0, 'date: ' + date)
            }
            let updatedText = d.join('\n')
            fs.writeFile('../data/blog/' + file, updatedText, (err) => {
              if (err) console.error(err)
            })
          })
        })
    })
    break

  // case "layout":
  //   console.log("WARNING: Removing layouts")
  //   //For removing layout (This is a very specific script and needs
  //   //to be checked before executing or might lead to loss of data)
  //   fs.readdir('../data/blog', (err, data) => {
  //     data
  //       .toString()
  //       .split(',')
  //       .forEach((file) => {
  //         fs.readFile('../data/blog/' + file, (err, data) => {
  //           let d = data.toString().split('\n');
  //           if(data.toString().split("---")[1].includes("layout: ")){
  //               d.splice(3, 1);
  //           }
  //           let updatedText = d.join("\n")
  //           // console.log(updatedText)
  //           fs.writeFile("../data/blog/" + file, updatedText, (err) => {
  //               if(err) console.error(err);
  //           })
  //         })
  //       })
  //   })
  //   break;

  case 'swiper':
    console.log('Replacing Swiper component')
    fs.readdir('../data/blog', (err, data) => {
      data
        .toString()
        .split(',')
        .forEach((file) => {
          fs.readFile('../data/blog/' + file, (err, file) => {
            if (err) return console.error(err)
            let checkIfHasSwiper = file.toString().split('<div class="swiper swiper-demo">').length
            if (checkIfHasSwiper > 1) {
              //It has swiper
              let swiperData = file
                .toString()
                .split('<div class="swiper swiper-demo">')[1]
                .split(
                  '<div class="swiper__button swiper__button--prev fas fa-chevron-left"></div>'
                )[0]

              let hrefs = []
              swiperData.match(/src\s*=\s*"([^"]+)"/g).forEach((href) => {
                hrefs.push(href.split('src=')[1])
              })

              let swiperD = file.toString().split('<div class="swiper swiper-demo">')
              swiperD.splice(1, 1, `<ImageSwiper imageArray={[${hrefs}]} />`)

              fs.writeFile('../data/blog/' + file, swiperD.join('\n'), (err) => {
                if (err) console.error(err)
              })
            }
          })
        })
    })
    break

  case 'help':
    console.log(
      'layout: For removing layout (This is a very specific script and needs to be checked before executing or might lead to loss of data)'
    )
    console.log('date: adds date based on file name')
    break

  default:
    console.log('Please use the help command to know more')
}
