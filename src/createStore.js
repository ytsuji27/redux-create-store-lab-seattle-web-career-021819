export default function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  dispatch({ type: '@@Init' });
  function getState() {
    return state;
  };

  return {
    dispatch,
    getState
  };

};

function render() {
  const container = document.getElementById('container');
}
