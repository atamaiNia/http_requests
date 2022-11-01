import { Material } from '../Material/Material';
import { StyledList, StyledItem } from './MaterialList.styled';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <StyledList>
      {items.map(item => (
        <StyledItem key={item.id}>
          <Material item={item} {...otherProps} />
          <hr />
        </StyledItem>
      ))}
    </StyledList>
  );
};
