'use strict';

export function createProxyHandler() {
  return {
    get: (target, propName, receiver) => {
      if (typeof propName === 'string') {
        const operation = propName.slice(0, 3);
        const propertyName = propName.slice(3).charAt(0).toLowerCase() + propName.slice(4);
        const [get, set] = ['get', 'set'];

        if (operation === get || operation === set) {
          if (propName in target) {
            return Reflect.get(target, propName, receiver);
          } else if (propertyName in target) {
            switch (operation) {
              case get:
                return () => target[propertyName];
              case set:
                return (value) => {
                  target[propertyName] = value;
                  return receiver;
                };
            }
          } else {
            console.warn(
              `Neither method "${propName}" nor property "${propertyName}" exists in the target object.`
            );
            return () => undefined;
          }
        }
      }
      return Reflect.get(target, propName, receiver);
    },
  };
}


