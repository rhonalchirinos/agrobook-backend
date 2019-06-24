# agrobook-backend
 
Desarrollar en react native y postgres para el siguiente problema:
Se necesita una aplicación “agrobook” el que permita generar contratos de visitas a campos y asocie los contratos a determinados usuarios (agricultores). Una vez que se asocie el contrato al agricultor, este puede realizar una visita y completar la siguiente información: 

Potencial de suelo (valor de 0 - 100)
Fecha de siembra

Una vez que se haya hecho una visita, no se podrá ingresar una nueva, si no se cierra la misma previamente. Solo el administrador puede cerrar la visita, y al realizarlo debe completar un campo de observación (hasta 256 caracteres)

La aplicación debe considerar que el acceso por usuarios es el rut:

Requisitos tc.
React-native. Uso de dependencias con npm (exigible react navigator) 
Backend en nodejs. Enviar api
DBMS Postgresql. Enviar el archivo .sql 
Enviar apk y código fuente react-native

En caso de dudas o falta de información, poner supuestos y remitirlos en el resultado.
Fecha tope de entrega: Martes 18, 12:00pm.

## Installation

1. clonar este repositrio
2. realizar los siguientes pasos
  - cd agrobook-backend
  - npm i
  - npm start # recomiendo utilizar http://pm2.keymetrics.io/

## Usage

1. rutas

    - login 
        ```
        method: post
        url: '/login'  
        body { rut: '', password }
        ```

    - logout
        ```
        method: delete
        url: '/logout'
        headers: { Authorization: 'Bearer token' }
        ```

    - listado de usuarios con rol de agricultor
        ```
        method: get
        url: '/farmers'
        headers: { Authorization: 'Bearer token' }
        ```

    - listado de contratos, si el usuario es administrador obtendra todo los contratos en caso contrario retornara los contratos asociados a usuario.
        ```
        method: get
        url: '/contracts'
        headers: { Authorization: 'Bearer token' }
        ```

    - crear contrato
        ```
        method: post
        url: '/contracts'
        body: { address: sring(255), seed: sring(255), farmer_id: integer } # famer id asociado al agricultor
        headers: { Authorization: 'Bearer token' }
        ```

    - informacion del contrato
        ```
        method: get
        url: '/contracts/:id' # id del contrato
        headers: { Authorization: 'Bearer token' }
        ```

    - eliminar contrato
        ```
        method: delete
        url: '/contracts/:id' # id del contrato 
        headers: { Authorization: 'Bearer token' }
        ```

    - generar una vista para acompletar los datos del contrato
        ```
        method: post
        url: '/contracts/:id/view' # id del contrato
        body: { planting_date: 'mm/dd/yyy', floor_power: [0-100] }
        headers: { Authorization: 'Bearer token' }
        ```

    - finalizar contrato
        ```
        method: post
        body: { observation: string(255)}
        url: '/contracts/:id/close' # id del contrato
        headers: { Authorization: 'Bearer token' }
        ```

2. Data
    - administrador 
        ```
        RUT: 12.123.456-K
        CONTRASEÑA: 123456  
        ```
    - agricultores 
        ```
        RUT: 12.123.111-K
        CONTRASEÑA: 123456
        RUT: 12.123.222-K
        CONTRASEÑA: 123456
        ```

## License

[MIT](https://choosealicense.com/licenses/mit/)