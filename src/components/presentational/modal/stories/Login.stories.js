import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Overlay } from '../../../base'
import Login from '../Login';

const global = {
  open: true,
  title: "Ingrese a su Cuenta",
  height: 450,
  closeBtn: action('Cerrar modal'),
  submitForm: (e) => {e.preventDefault(); action('Clic formulario')(e)},
  handlePassword: action('Cambiar password'),
  loginFacebook: (e) => {e.preventDefault(); action('Botón Facebook')(e)},
  loginGoogle: (e) => {e.preventDefault(); action('Botón Google')(e)}
}

storiesOf('Modal de Login', module)
  .addDecorator((story, context) => withInfo('Login')(story)(context))
  
  .add('Por defecto', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
          
      />
    </div>
  )

  .add('Facebook cargando', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
        isFbLoading
      />
    </div>
  )

  .add('Google cargando', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
        isGLoading
      />
    </div>
  )

  .add('Clic en Siguiente (Cargando)', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
        isEmailLoading
      />
    </div>
  )

  .add('Error en el email', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
        invalidEmail
      />
    </div>
  )

  .add('Error en el password', () => 
    <div>
      <Overlay open={true} />
      <Login {...global}
        invalidPassword
      />
    </div>
  )