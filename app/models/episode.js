export default class Episode {
    constructor(title, description, runtime) {
        this.title = title
        this.description = description
        this.runtime = runtime
        this.characters = []
        this.likes = 0
    }

    like() {
        this.likes++
    }

    addCharacter(char) {
        this.characters.push(char)
    }

    getHtml() {
        let template = `
        <li>${this.title} - ${this.description} (${this.runtime})</li>
        <ul>
        `
        this.characters.forEach(char => {
            template += `<li>${char.name}</li>`
        })
        template += '</ul>'
        return template
    }

}