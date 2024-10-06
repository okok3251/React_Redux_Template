const GET_COUNT = 'COUNTER/GET_COUNT';
const INCREASE_COUNT = 'COUNTER/INCREASE_COUNT';

/* 
위는 액션 타입을 정의한 것
액션 타입을 상수로 정의하는 이유
1. 이름짓기가 편리함. 그냥 구분되게만 지으면 된다.
2. 기존에 생성된 타입의 목록은 PR을 통해 팀원과 공유 가능
3. 이름 변경 시 선언부만 바꿔주면 되기 때문에 효율적임
4. type에 문자열을 직접 쓰고 오타를 내어도 아무런 문제가 발생하지 않음.
    -> 에러찾기가 어려움
*/



const initialState = {
    count: 0,
};
/*
초기 상태값을 객체로 관리하는 이유
1. 상태 구조를 객체로 정의하면 새로운 속성을 추가할때, 기본 구조를 크게 변경하지 않을 수 있다.
2. 상태의 모든 속성을 한번에 관리할 수 있기 때문에, 접근할때 일관성을 유지할 수 있다.
*/ 


export const actions = {
    getCount: () => ({
        type: GET_COUNT
    }),
    increaseCount: (count) => ({
        type: INCREASE_COUNT,
        count,
    })
};
/*
reducer는 전달된 action을 통해 지금 저장된 저장소의 state를 변경할 수 있다.
그렇기에 지금 state를 변경할 수 있는 함수들을 정의하여 action이라는 객체에 담는 것이다.
굳이 객체에다 담는 이유는 다음과 같다.
1. 결국 이 action 객체를 불러다가 컴포넌트 또는 Container 구조에 쓸 수 있는데 따로 정의하면, 해당 메서드들을 모두 불러와서
    중복 코드가 발생하게 됨 -> 객체에 담아서 중복 코드를 줄여보자
    원래는 const getCount = () => {
        return type : GET_COUNT(위에서 정의한 그냥 이름이다 별다른 의미부여 안해도 됨)
        }
        의 형태로 써야됨 불러올때도 일일히 불러와야한다.
2. action의 로직이 변하거나 새로운 action이 추가될 때 action 객체 안에만 다시 정의해주면 되서 유지보수에 용이하다.
3. -->> GET_COUNT(위에서 정의한 그냥 이름이다 별다른 의미부여 안해도 됨)
*/

// 👍 이부분이 Redux의 핵심부분 👍
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNT:
            return {
                ...state,
            };
        case INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
};
/*
reducer는 현재 state와 어떠한 행동을 할것인지를 입력값으로 받고, 위의 코드에서는 별다른 state에 대한 명시가 없다면,
기본 state는 initalState로 설정하고, action은 리듀서가 받는 액션 객체로, 어떤 변화가 필요한지 설명하는 정보가 담긴다
--> 위에 actions 객체에 있는 한개로 올것이다. 만약 없다면 그냥 지금 상태를 리턴하는 구문이다.
--> 결국 actions 객체에 정의되어 있는 행동의 type을 보고 어떤 값을 리턴을 할 것인지 결정하는 것이다.
그렇게 switch case 문을 통해 type 별로의 action을 한 결과값을 return 해줄 수 있는 것이다.

위의 return { ...state, } 이러한 구문의 역할은 간략하게, 상태를 Immutable하게 유지하면서도, 새로운 상태의 객체를 생성할 수 있다.
참조 타입의 변수들은 내부의 값이 바뀐다고 해서 다른 주소를 가리키는 것이 아니기 때문에 변수가 다른 주소를 가리켜야 비로소
상태가 변화됐다 라고 보기 때문이다. >> 추후에 Immer이라는 개념을 추가해서 설명하겠다.
*/
export default reducer;
