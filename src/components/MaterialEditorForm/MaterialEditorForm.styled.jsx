import styled from 'styled-components';
import { Field } from 'formik';

export const StyledForm = styled.form`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const StyledInput = styled(Field)`
  margin-left: 10px;
`;
