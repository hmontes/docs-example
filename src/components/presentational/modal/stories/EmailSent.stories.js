import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Overlay } from '../../../base'
import EmailSent from '../EmailSent'

const global = {
  open: true,
  closeBtn: action('Cerrar modal'),
  title: "Cuenta Creada",
  height: 230,
  submitForm: (e) => {e.preventDefault(); action('Clic en Siguiente')(e)}
}

storiesOf('Modal de Cuenta creada', module)
  .addDecorator((story, context) => withInfo('Email enviado')(story)(context))
  
  .add('Por defecto', () => 
    <div>
      <Overlay open={true} />
      <EmailSent {...global}
      />
    </div>
  )