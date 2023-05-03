'use strict';
import actionContainer from "./instances";

const createActionHandler = (actionType) => {
  const [category, method] = actionType.split('_');
  const actionInstance = actionContainer.getAction(category);

  if (actionInstance && typeof actionInstance[method] === 'function') {
    return (state, action) => actionInstance[method](state, action, actionContainer);
  }

  return null;
}

const actionProxy = new Proxy(
  actionContainer,
  {
    get: (_, actionType) => createActionHandler(actionType),
  }
);

export default actionProxy;
