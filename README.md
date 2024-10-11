#  Cotizador de Criptomonedas en Tiempo Real con Zod y Zustand

![web app](https://github.com/sotoflore/Cotizador-de-Criptomonedas-con-ZOD-y-Zustand/blob/main/public/web-app.png)

Este es un proyecto de cotizador de criptomonedas que permite consultar los precios actuales de diferentes criptomonedas en tiempo real. El proyecto está construido utilizando [Zod](https://github.com/colinhacks/zod) para la validación de datos y [Zustand](https://zustand-demo.pmnd.rs/) para la gestión del estado global.

## Tecnologías utilizadas

- React y TypeScript: Biblioteca para la construcción de la interfaz de usuario.
- Zod: Utilizado para la validación de datos del API de criptomonedas.
- Zustand: Utilizado para la gestión del estado global de la aplicación.
- CSS: Para el diseño y el estilo responsivo.
- Axios
- API de Cryptocompare
- Vite.js

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/sotoflore/Cotizador-de-Criptomonedas-con-ZOD-y-Zustand.git
    ```
2. Entra en el directorio del proyecto:
    ```bash
    cd cotizador-criptomonedas
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

5. Abre la aplicación en tu navegador en la dirección [http://localhost:5173](http://localhost:5173) por vite.js.


## Validación de Datos

**`Zod`** se utiliza para asegurar que los datos recibidos desde el API de criptomonedas tengan el formato correcto antes de ser procesados por la aplicación. Esto ayuda a evitar errores y manejar los casos en que la API pueda devolver datos inesperados o incorrectos.

## Gestión de Estado

**`Zustand`** se encarga de la gestión del estado en la aplicación. Permite manejar el estado de las criptomonedas seleccionadas, los resultados de las cotizaciones, y otros datos relacionados de una manera eficiente y sencilla.

## API

Esta aplicación utiliza una API pública para obtener los precios de las criptomonedas [CrytoCompare](https://min-api.cryptocompare.com/documentation).

