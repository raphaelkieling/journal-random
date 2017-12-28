const CrawlerModule = require("crawler");
const crawler = new CrawlerModule();

module.exports = ()=>{
    const ultimasNoticias =(res, categoria)=>{
        let categoriaList = [{
            title:'politica',
            url:'http://g1.globo.com/politica'
        },
        {
            title:'economia',
            url:'http://g1.globo.com/economia'
        },{
            title:'mundo',
            url:'http://g1.globo.com/mundo'
        },{
            title:'esporte',
            url:'http://globoesporte.globo.com/'
        }];

        let categoriaUsada = categoriaList.filter((el)=>(el.title === categoria))[0];

        
        
        crawler.direct({
            uri: categoriaUsada.url,
            skipEventRequest: false,
            callback: (error, response) => {
                if(error) {
                    res.status(500).send(error)
                } else {
                    let dataArray = [];
                    let legthOfPosts = response.$('.post-item').length;
                    let random = Math.floor(Math.random()* legthOfPosts);

                    response.$('.post-item').each(function(post){
                        let postFeed = response.$(this).children('.feed-post');
                        let data = {
                            title: response.$(postFeed).find('.feed-post-body-title ').text(),
                            abstract: response.$(postFeed).find('.feed-post-body-resumo').text(),
                            imageUrl: response.$(postFeed).find('.bstn-fd-picture-image').attr('src')
                        }

                        dataArray.push(data);
                    });
                    
                    res.status(200).send(dataArray[random]);
                }
            }
        });
    } 

    return {ultimasNoticias}
}