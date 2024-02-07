import {ApiServices} from "../../../services";

export default class QuizServices extends ApiServices {
    getAll() {
        this.fetchData(this.axiosInstance.get('/quiz'))
    }

    getById(id) {
        this.fetchData(this.axiosInstance.get(`/quiz/${id}`))
    }
    
    getQuestion(id, offset) {
        this.fetchData(this.axiosInstance.get(`/quiz/${id}/question/${offset}`))
    }

    shuffleOptions() {
        let questions = this.responseBody.data

        return questions.map(question => {
            question.question_options.sort(() => Math.random() - 0.5)
            return question
        })
    }
}