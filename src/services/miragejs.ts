import { Factory, Model, createServer } from "miragejs"

type Article = {
    slug: string;
    title: string;
    subtitle: string;
    text: string;
    category: string;
    author: string;
    image: string;
    created_at: string;
    state: string;
}

type Category = {
    id: string;
    category: string;
}



export function makeServer(){
    const server = createServer({
        models: {
            article: Model.extend<Partial<Article>>({}),
            category: Model.extend<Partial<Category>>({}),
        },
        factories: {
            article: Factory.extend({
                slug(i: number){
                    const categories = ['front-end', 'back-end', 'mobile', 'ux & ui', 'inteligencia artificial', 'data science']
                    
                    return `titulo-do-artigo-sobre-${ categories[Math.floor(Math.random() * 5)] }-e-suas-tecnologias-${i + 1}`
                },
                title(i: number) {
                    const categories = ['front-end', 'back-end', 'mobile', 'ux & ui', 'inteligencia artificial', 'data science']
                    
                    return `Titulo do artigo sobre ${ categories[Math.floor(Math.random() * 5)] } e suas tecnologias ${i + 1}`
                },
                subtitle(i: number) {
                    const categories = ['front-end', 'back-end', 'mobile', 'ux & ui', 'inteligencia artificial', 'data science']

                    return `subtitulo sobre ${ categories[Math.floor(Math.random() * 5)] } ${i + 1}`
                },
                text() {
                    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Praesent accumsan, nisi tempor varius lacinia, 
                    ligula libero convallis nunc, quis suscipit leo 
                    turpis quis metus. Sed bibendum sed magna sed eleifend. 
                    Etiam fringilla mauris sit amet massa vehicula, 
                    at placerat magna efficitur. Phasellus ornare magna 
                    sed ante faucibus blandit. Donec cursus cursus elit, a 
                    vulputate mauris scelerisque elementum. Morbi a interdum quam. 
                    Maecenas nibh libero, semper fermentum accumsan at, pellentesque at mauris. 
                    Quisque egestas risus ut feugiat convallis.`
                },
                category() {
                    const categories = ['front-end', 'back-end', 'mobile', 'ux & ui', 'inteligencia artificial', 'data science']
                    return categories[Math.floor(Math.random() * 5)]
                },
                author(i: number) {
                    const authors = [ "Yan Gabriel Ferreira", 'Pedro Car']
                    return i % 3 === 0 ? authors[1] : authors[0] 
                },
                image(){
                    return "image.jpg"
                },
                state(i: number) {
                    return i % 2 === 0 ? "active" : "inactive"
                },
                created_at() {
                    const dataIni = new Date(2023, 0, 1);
                    const dataAtual = new Date();
                    const data = new Date(dataIni.getTime() + Math.random() * (dataAtual.getTime() - dataIni.getTime()))
                    //data.toDateString()
                    return data;                
                },
            }),
            category: Factory.extend({
                id(i: number) {
                    return `category-${i + 1}`
                },
                category(i: number) {
                    const categories = ['front-end', 'back-end', 'mobile', 'ux & ui', 'inteligencia artificial', 'data science']
                    return categories[i]
                },
            }),
        },
        seeds(server){
            server.createList('article', 200)
            server.createList('category', 6)
        },
        routes() {
            this.namespace = 'api'
            this.timing = 750;

            this.get('/articles', (schema) => {
                return schema.db._collections[0]._records
            })

            this.get('/categories', (schema) => {
                return schema.db._collections[1]._records
            })
            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}