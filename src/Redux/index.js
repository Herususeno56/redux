import React from 'react'
import store from '../App/store'
import Counter from './pembahasan/Counter'
import {Provider} from "react-redux";

function Redux() {
  return (
    <div>
        <Provider store={store}>
        <Counter />
        </Provider>
    </div>
  )
}

export default Redux