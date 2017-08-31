import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Overlay } from '../../../base'
import SocialRegister from '../SocialRegister'
import Register from '../Register';

storiesOf('Modal de registro (Social)', module)
  .addDecorator((story, context) => withInfo('Social Signup')(story)(context))
  
  .add('Por defecto', () => 
    <div>
      <Overlay open={true} />
      <SocialRegister open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={250}
        toEmailRegister={e =>{e.preventDefault(); action('Ir al registro de Email')(e) }} 
        loginFacebook={e =>{e.preventDefault(); action('Login Facebook')(e) }}
        loginGoogle={e =>{e.preventDefault(); action('Login Google')(e) }}
      />
    </div>
  )

  .add('Cargando Facebook', () => 
    <div>
      <Overlay open={true} />
      <SocialRegister open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={250}
        isFbLoading={true}
      />
    </div>
  )

  .add('Cargando Google', () => 
    <div>
      <Overlay open={true} />
      <SocialRegister open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={250}
        isGLoading={true} 
      />
    </div>
  )

storiesOf('Modal de Registro', module)
  .addDecorator((story, context) => withInfo('Información del Modal de registro')(story)(context))
  // .addDecorator(story => (
  //     <BrowserRouter>{story()}</BrowserRouter>
  // ))
  
  .add('Modal por defecto', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Error en el nombre', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        invalidFirstName
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Error en el apellido', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        invalidLastName
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Email Invalido', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        invalidEmail
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Password Invalido', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        invalidPassword
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Fecha Invalida', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600}
        invalidDate
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
      />
    </div>
  )

  .add('Modal cargando', () => 
    <div>
      <Overlay open={true} />
      <Register open={true} closeBtn={action('Cerrar modal')} title="Registrar una cuenta" height={600} 
        submitForm={e => {e.preventDefault(); action('Click en Siguiente')(e)}}
        isLoading={true}
      />
    </div>
  )

