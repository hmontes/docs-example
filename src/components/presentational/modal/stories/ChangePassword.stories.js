import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Overlay } from '../../../base'
import ChangePassword from '../ChangePassword'

const global = {
  open: true,
  closeBtn: action('Cerrar modal'),
  title: "Cambio de Contraseña",
  height: 330,
  submitForm: (e) => {e.preventDefault(); action('Clic en Siguiente')(e)}
}

storiesOf('Modal de cambio de password (Cambio)', module)
  .addDecorator((story, context) => withInfo('Cambio de password')(story)(context))
  
  .add('Por defecto', () => 
    <div>
      <Overlay open={true} />
      <ChangePassword {...global}
        
      />
    </div>
  )

  .add('Password invalido', () => 
    <div>
      <Overlay open={true} />
      <ChangePassword {...global}
        invalidPassword
      />
    </div>
  )

  .add('Cargando', () => 
    <div>
      <Overlay open={true} />
      <ChangePassword {...global}
        isLoading
      />
    </div>
  )