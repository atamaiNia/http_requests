import { Formik } from 'formik';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
} from './MaterialEditorForm.styled';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledLabel>
            Опис
            <StyledInput name="title" type="text" />
          </StyledLabel>
          <StyledLabel>
            Ссилка
            <StyledInput name="link" type="text" />
          </StyledLabel>
          <button type="submit" disabled={isSubmitting}>
            Додати матеріал
          </button>
        </StyledForm>
      )}
    </Formik>
  );
};
