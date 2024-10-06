import { useSelector, useDispatch } from "react-redux";
import {actions as counterAction} from '../redux/module/counter';
// 이 경로에 지정해놓았던 actions라는 객체를 counterAction이라는 이름으로 사용하겠다.



function App() {


  const dispatch = useDispatch();
  // action을 dispatch 하기 위한 훅으로 action을 보내주기 위해 사용한다.
  const count = useSelector((state) => state.counter.count);
/* 
Redux의 store 상태를 선택하기 위한 훅으로써 현재 store의 상태를 컴포넌트에서 쉽게 접근할 수 있도록 도와주는 Hook이다.
count useSelector를 이용하여 Redux store에서 count라는 값을 가져오는데, 결국 root_reducer에 정의되었던 counter 속성 안에
있는 state는 기본적으로 initialState으로 설정되었을 것이고, 결국 그 initalState의 count값을 가져오는 것이다.
*/
  const increase = () => {
    dispatch(counterAction.increaseCount());
  }
/*
이 함수가 실행되면, dispatch를 통해 위에서 counter속성에 정의하였던 actions 중 하나의 action을 전달하여,
결과적으로 해당 상태를 변경할 수 있는 것이다. 아까 increaseCount는 count의 값을 1 증가 시키는 함수였기 때문에
자연스럽게 count가 1 증가할 것이다. 그 count는 useSelector를 통해서 counter 속성에 있는 count를 가져와서 할당하였기 때문에
밑의 return 구문 안에서 {count} 로 표현되며, 1 증가될 것이다.
*/
  return (
    <div className="App">
      {count}개
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
