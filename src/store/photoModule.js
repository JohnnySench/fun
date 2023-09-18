import axios from "axios";

export default {
    state: {
        photo: []
    },
    getters: {
        get_photo: (state) => {
            return state.photo
        }
    },
    mutations: {
        set_photo: (state, data) => {
            state.photo = data
        }
    },
    actions: {
        init_photo: ({commit}) => {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(response => {
                    commit('set_photo', response.data)
                })
        }
    },
}