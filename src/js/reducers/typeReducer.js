const typeReducer = ( state = null, { type, payload } ) => {
  switch ( type ) {
    case 'handleOrigin':
      // return {
      //   ...state,
      //   origin: payload.originSearch
      // }
      return payload.originSearch
    default:
      return state;
  }
};

export default typeReducer;