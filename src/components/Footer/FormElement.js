import React from 'react';
import { TextField } from 'formik-material-ui';

import { Input } from './Form.css';

const FormElement = ({ name, label, multiline, rows }) => (
  <Input
    component={TextField}
    name={name}
    label={label}
    type='text'
    fullWidth
    multiline={multiline}
    rows={rows}
  />
);

export default FormElement;
