import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form as FormFormik } from 'formik';
import * as Yup from 'yup';
import FormElement from './FormElement';

import { Wrapper, Button } from './Form.css';

const Form = () => {
  const { t } = useTranslation();

  const contactSchema = Yup.object({
    email: Yup.string()
      .required(t('Form.mailRequired'))
      .email(t('Form.mailWrong')),
    text: Yup.string()
      .required(t('Form.textRequired'))
      .max(1000, t('Form.textLength')),
  });

  const handleSubmit = (values, actions) => {
    // eslint-disable-next-line no-console
    console.log(values, actions);
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ name: '', email: '', text: '' }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <FormFormik>
            <FormElement
              name='name'
              label={t('Form.name')}
              autoFocus
              type='text'
            />
            <FormElement name='email' label={t('Form.email')} type='email' />
            <FormElement
              name='text'
              label={t('Form.text')}
              type='text'
              multiline
              rows={3}
            />
            <Button disabled={isSubmitting} onClick={submitForm}>
              {t('Form.submit')}
            </Button>
          </FormFormik>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Form;
