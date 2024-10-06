import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';


// Redux
import store from './redux'; // 이전에 설정했던, Redux의 store를 가져오는 구문
import { Provider } from 'react-redux'; // React Redux의 Provider 컴포넌트로, 스토어를 애플리케이션에 제공해줄 수 있다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* Provider에 store 값을 넘겨줌으로 인해 이 태그 안에 있는 컴포넌트들은 같은 store를 공유할 수 있다. */}
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
