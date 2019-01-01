// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import rooteReducer from './store/reducers/rooteReducer';
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

// const store = createStore(rooteReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//         reduxFirestore(fbConfig),
//         reactReduxFirebase(fbConfig)
//         )
//     );

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// serviceWorker.unregister();





import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rooteReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(fbConfig, {attachAuthIsReady: true}, {userProfile: 'users', useFirestoreForProfile: true}), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
      // reduxFirestore(fbConfig, {attachAuthIsReady: true})
    )
  );

  // ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  //   serviceWorker.unregister()

  store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister()
  })

  