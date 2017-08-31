import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Overlay } from '../../../base'
import Password from '../Password'

const global = {
  open: true,
  closeBtn: action('Cerrar modal'),
  title: "Cambio de Contraseña",
  height: 370,
  submitForm: (e) => {e.preventDefault(); action('Clic en Siguiente')(e)}
}

storiesOf('Modal de cambio de password (Index)', module)
  .addDecorator((story, context) => withInfo('Cambio de password')(story)(context))
  
  .add('Por defecto', () => 
    <div>
      <Overlay open={true} />
      <Password {...global}
        
      />
    </div>
  )

  .add('Correo invalido', () => 
    <div>
      <Overlay open={true} />
      <Password {...global}
        invalidEmail
      />
    </div>
  )

  .add('Cargando', () => 
    <div>
      <Overlay open={true} />
      <Password {...global}
        isLoading
      />
    </div>
  )