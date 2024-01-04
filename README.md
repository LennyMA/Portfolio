# Portafolio Web

¡Bienvenido a mi portafolio web! Este proyecto está construido utilizando Vite, React, JavaScript, y Node.js. En el código fuente, encontrarás una estructura organizada que incluye componentes en JSX, estilos gestionados con JSX, el uso de variables de entorno con dotenv, y más. Es un portafolio con tema de terminal.

## Estructura del Proyecto

- `src/`: Contiene el código fuente de la aplicación.
  - `components/`: Directorio principal para componentes
    - `commands`: Directorio de otros componentes
    - `styles`: Directorio de estilos
  - `hooks/`: Directorio de hooks para los temas de la aplicación
  - `images/`: Directorio de imagenes
  - `utils/`: Directorio de funciones adicionales para el funcionamiento de ciertos componentes y almacenamiento de memoria del navegador
- `public/`: Contiene un archivo .svg para el icono de la aplicación

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, sigue estos pasos:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/LennyMA/Portfolio.git
2. Ingresa al repositorio:

   ```bash
   cd portfolio

3. Elimina el origen rmeoto:
   
   ```bash
   git remote remove origin
4. Instala las dependencias:
   
   ```bash
   npm install

5. Si no tienes el modulo dotenv para las variables de entorno ejecuta:
   
   ```bash
   npm install dotenv
6. Crea un archivo .env en la raíz del proyecto y configura tus variables de entorno según sea necesario, en este caso, para este proyecto se usaron para las credenciales para el envio de emails.
## Uso
1. Inicia la aplicación"

   ```bash
   npm run dev
2. Abre tu navegador y ve al enlace que te proporciona vite para ver el proyecto en tu navegador
## Personalización
Siéntete libre de personalizar los componentes, estilos y agregar nuevas secciones según tus necesidades.
Para que puedan enviarte correos a tu email debes seguir los siguientes pasos:

1. Create una cuenta en https://www.emailjs.com/
2. Inicia sesión
3. Selecciona la opción **Add New Service** en **Email Services**
4. Selecciona el servicio que necesites, en este caso se usa **Gmail**
5. En **Email Templates** crea un nuevo template
6. Modifica las variables y mensajes según sea necesario
   - Las variables se encuentran adentro de llaves: {{variable}}
   - Asegurate de configurar las variables tal como estarán en tu código del formulario
7. Una vez que hayas guardado los cambios ve a **Settings** en donde encontraras tu **Template ID**
8. Luego ve a **Email Services**, selecciona el servicio que create y encontraras el **Service ID**
9. Después debes ir a **Account** y encontrarás tu **Public Key**
10. Ahora puedes ir a tu archivo .env para crear las variables de entorno con esos IDs
    - Recuerda que en VITE las variables de entorno se crean así: **VITE_NOMBRE_VARIABLE**. Siempre inicia con **VITE**
## Licencia
Este proyecto académico no tiene asignada una licencia específica.
## Inspiración y Créditos
He aquí algunas fuentes en las que se basa el proyecto
- [Satnaing](https://github.com/satnaing/terminal-portfolio)
- [Forrest](https://fkcodes.com/)
## Contacto
Si tienes alguna pregunta o comentario, puedes contactarme en morenolenin1a@gmail.com.
