const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
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
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//store
//1. Holds application store
const store = createStore(rootReducer)
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