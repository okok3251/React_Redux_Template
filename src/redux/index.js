import { counter } from "./module"; // 아까 모듈을 통합하던 파일에서 counter를 가져온다.
import { createStore, combineReducers } from "redux";




const root_reducer = combineReducers({
    counter,
})
/*
이 함수로 인해서 여러개의 리듀서를 하나로 통합하여 root_reducer라는 이름으로 만들어 주는 것이다.
결국 root_reducer를 store라는 상수에 저장함으로써, 모든 reducer들의 상태를 관리할 수 있는 것이다.
*/



const store = createStore(root_reducer); //root_reducer를 인자로 전달하여, 결합된 리듀서를 사용하는 스토어를 만드는것



export default store; // 생성된 Redux 스토어를 store라는 상수에 저장하고, 이 store 를 통해 액션을 dispatch 할 수 있다.
