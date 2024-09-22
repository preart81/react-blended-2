
import gridCss from './Grid.module.css';

export const Grid = ({ children }) => {
  return <ul className={gridCss.list}>{children}</ul>;
};
