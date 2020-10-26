import Api from '@/services/Api'

export default {
    getCurrentIssue(params) {
        return Api().get(`/current-issue/${params.language}`)
    },
}