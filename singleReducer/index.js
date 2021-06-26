const redux = require('redux')
const createStore = redux.createStore
//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action Creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

//reducers
//(previousState, action) => newState
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

//store
//1. Holds application store
const store = createStore(reducer)
//2. Allows access to state via getState()
console.log('Initial State', store.getState())
//3. Registers listeners via subscribe(listener)
//Anytime state updates, the function passed in subscribe i.e. listener will run
const usnsubscibe = store.subscribe(() => console.log('Updated state', store.getState()))
//4. Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
//5. Handle unregistering of listeners via the function returned by subscribe(listener)
usnsubscibe()