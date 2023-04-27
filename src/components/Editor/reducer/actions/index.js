'use strict';
import actions from './instances';

const createActionHandler = (actionType) => {
  const [category, method] = actionType.split('_');
  const actionInstance = actions[category];

  if (actionInstance && typeof actionInstance[method] === 'function') {
    return (state, action) => actionInstance[method](state, action, actions);
  }

  return null;
}

const actionProxy = new Proxy(
  actions,
  {
    get: (_, actionType) => createActionHandler(actionType),
  }
);

export default actionProxy;
