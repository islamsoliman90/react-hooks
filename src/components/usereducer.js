function reducer() {
  let reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return { ...state, count: state.count + 1 };
      }
      case "showtext": {
        return { ...state, showtext: !state.showtext };
      }
      default:
        return state;
    }
  };
  let [state, depatch] = useReducer(reducer, { count: 0, showtext: true });
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          depatch({ type: "increment" });
          depatch({ type: "showtext" });
        }}
      >
        click
      </button>
      {state.showtext && <h2> "hi islam ahmed"</h2>}
    </>
  );
}

export default reducer;
