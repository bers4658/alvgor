export default {
    state: {
        prods: [
            {
                title: '1 prod',
                description: 'Информация о товаре',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '1'
            },
            {
                title: '2 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '2'
            },
            {
                title: '3 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '3'
            },
            {
                title: '4 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '4'
            },
            {
                title: '5 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '5'
            },
            {
                title: '6 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '6'
            },
            {
                title: '7 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '7'
            },
            {
                title: '8 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '8'
            },
            {
                title: '9 prod',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://via.placeholder.com/300.png/10',
                id: '9'
            },
        ],
    },
    mutations: {
        createProd(state, payload) {
            state.prods.push(payload)
        }
    },
    actions: {
        createProd ({commit}, payload) {
            payload.id = 'qweqwe'
            commit('createProd', payload)
        }
    },
    getters: {
        prods (state) {
            return state.prods
        },
        // promoProds (state) {
        //     return state.prods.filter(prod => {
        //         return prod.promo
        //     })
        // },
        myProds (state) {
            return state.prods
        },
        prodById (state) {
            return prodId => {
                return state.prods.find(prods => prods.id === prodId)
            }
        }
    }
}