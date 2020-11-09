import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom'
import gfm from 'remark-gfm'

import { coursesList } from "./../../data/coursesList";


const Blog = () => {
    const location = useLocation();

    const path = location.pathname.split('/')[2];


    const course = coursesList.filter(course => {
        return course.path.toString() === path
    });

    const markdown = `
# Requerimientos


- Crear cuenta en Cloudflare.
    - Será nuestro proveedor de DNS.
- Crear cuenta en Heroku.
    - Será la plataforma donde haremos el build de nuestro proyecto.
- Dominio propio el cual queremos utilizar.
    - En este caso utilizaré la configuración de NIC
- Tarjeta de crédito 
    - si bien, no se aplicará ningún cobro, es necesario registrar una tarjeta de crédito para poder hacer uso del servicio de Heroku. Si bien Heroku no tiene opción de pago con PayPal, tener una cuenta con Mach debiese también servir.
- (Opcional) Crear cuenta en GitHub.



# Paso 0: Registro de dominio en NIC.

# Paso 1: Registro de aplicación en Heroku.

# Paso 2: Registro de DNS.
Ya teniendo registrada nuestra cuenta en Cloudflare, es necesario añadir un nuevo sitio web, para esto agregaremos el dominio que queremos utilizar. 

Ya teniendo registrado nuestro dominio, es necesario configurar nuestro registro de DNS, en este caso registraremos 2 de tipo CNAME:

~~~
- CNAME | miproyecto.cl | miproyecto.herokuapp.com
- CNAME | www | miproyecto.herokuapp.com
~~~

Tras completar ambos registros de DNS nos solicitará ingresar el tipo de plan que queremos utilizar, en este caso utilizaremos el plan gratis.

Al finalizar el procedimiento, cloudflare nos indicará cuales son los DNS que debemos agregar a nuestro dominio.

# Paso 3: Configuración del proyecto en Heroku.
En este paso ya será necesario que vayas a por tu tarjeta de crédito, ya que será necesario poner los datos de esta en el siguiente enlace: https://dashboard.heroku.com/account/billing

Ya teniendo la tarjeta de crédito registrada ingresamos al Dashboard y seleccionamos la aplicación previamente creada. Seleccionamos la opción de "Settings" y buscamos el apartado de "Domains". En este lugar podremos registrar nuestro dominio.

- miproyecto.cl
- www.miproyecto.cl


# Paso 4: Configuración de dominio en NIC.

El paso final será actualizar los DNS que nos otorgó cloudflare como nombres de servidor, en el apartado de DNS.
    `;
  
    return (
        <div className='p-3'>
            {
                course.map(course => {
                    return <div>
                        <h1>{course?.titulo}</h1>
                        <hr/>
                        <div className="card">
                            <div className='card-body'>
                                <ReactMarkdown
                                    plugins={[gfm]}
                                    source={markdown}
                                    allowDangerousHtml
                                />
                            </div>
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default Blog;
