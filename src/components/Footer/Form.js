import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form as FormFormik } from 'formik';
import * as Yup from 'yup';

import FormElement from './FormElement';
import { Wrapper } from './Form.css';
import Button from '../Shared/Button';

import notification from '../Shared/notification';

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

  const handleSubmit = async (values, resetForm) => {
    const { name, email, text } = values;
    try {
      const response = await fetch('https://formspree.io/xpzyjlpj', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          text,
        }),
      });
      if (response.status === 200) {
        notification(t('Form.success'), t('Form.successText'), 'success');
        resetForm.resetForm();
      }
    } catch (e) {
      notification(t('Form.fail'), t('Form.failText'), 'darnger');

      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ name: '', email: '', text: '' }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, resetForm }) => (
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
            <Button
              disabled={isSubmitting}
              onClick={() => submitForm(resetForm)}
            >
              {t('Form.submit')}
            </Button>
          </FormFormik>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Form;
