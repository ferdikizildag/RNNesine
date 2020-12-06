import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext({});

const ContextProvider = (props) => {
  const {children} = props;
  const [basket, setBasketData] = useState([]);

  const updateBasket = (match) => {
    const currentBasketData = [...basket];
    const isExistMatch = currentBasketData.find((item) => item.id === match.id);
    if (isExistMatch) {
      if (isExistMatch.ratio === match.ratio) {
        const removeIndex = currentBasketData
          .map((item) => item.id)
          .indexOf(match.id);
        if (removeIndex > -1) {
          currentBasketData.splice(removeIndex, 1);
        }
      } else {
        const removeIndex = currentBasketData
          .map((item) => item.id)
          .indexOf(match.id);
        if (removeIndex > -1) {
          currentBasketData.splice(removeIndex, 1);
        }
        currentBasketData.push(match);
      }
    } else {
      currentBasketData.push(match);
    }
    setBasketData(currentBasketData);
  };
  const store = {
    basket: {get: basket, update: updateBasket},
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
export {AppContext};
