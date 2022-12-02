class Question {
    constructor() {}

    setQuestionText(text) {
        this.questionText = text
    }

    setY() {
        if (!this.Y) {
            this.Y = 0
        }
        this.Y = ++this.Y
    }

    createQuestion() {
        const questionCard = document.createElement('div')
        const questionText = document.createElement('p')
        const btnYes = document.createElement('button')
        const btnNo = document.createElement('button')
        const btnNoSure = document.createElement('button')

        questionText.innerText = this.questionText
        btnYes.innerText = 'YES'
        btnNo.innerText = 'NO'
        btnNoSure.innerText = 'NO SURE'

        questionCard.append(questionText, btnYes, btnNo, btnNoSure)
        document.body.append(questionCard)

        questionCard.addEventListener('click', (event) => {
            this.buttonHandler(event)
        })
    }

    buttonHandler(event) {
        const btn = event.target.innerText

        switch(btn) {
            case 'YES': {
                this.setY()
            }
            case 'NO': {
                
            }
            case 'NO SURE': {
                
            }
        }
    }
}

const q = new Question()
q.setQuestionText('Some text...')
q.createQuestion()