const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT'

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const incrementByAmount = (amount) => ({ type: INCREMENT_BY_AMOUNT, payload: amount })

export const INITIAL_STATE = {
  value: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 }
    case DECREMENT:
      return { ...state, value: state.value - 1 }
    case INCREMENT_BY_AMOUNT:
      return { ...state, value: state.value + payload }
    default:
      return state
  }
}

export const incrementAsync = amount => dispatch => {
  console.log(amount)
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = state => state.counter.value;