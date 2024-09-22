import gridItemCss from './GridItem.module.css';

export const GridItem = ({ children }) => {
  return <li className={gridItemCss.item}>{children}</li>;
};
