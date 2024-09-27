## Challenge - Frontend para Mercado Libre
Descripción del Proyecto

Este proyecto es una aplicación web sencilla que permite a los usuarios buscar productos en Mercado Libre, visualizar los resultados de búsqueda y acceder a los detalles de cada producto. Está construida utilizando Next.js 14 para el frontend, y Node.js con Express y TypeScript para el backend.
Stack Tecnológico

    Frontend:
        Next.js 14: Framework de React para la construcción de aplicaciones web.
        Sass: Preprocesador CSS para estilos avanzados.
    Backend:
        Node.js: Entorno de ejecución para JavaScript en el servidor.
        Express: Framework web para Node.js.
        TypeScript: Superset de JavaScript que añade tipos estáticos.

Funcionalidades

    Caja de búsqueda: Permite ingresar un término de búsqueda y navegar a la vista de resultados.
    Resultados de búsqueda: Muestra hasta 4 productos relacionados con la búsqueda realizada. Cada producto es clickeable y lleva a la vista de detalles del producto.
    Detalle del producto: Muestra información detallada del producto seleccionado, incluyendo descripción, precio y condición.

Estructura de Rutas

    Caja de Búsqueda: GET /
    Resultados de la Búsqueda: GET /items?search={query}
    Detalle del Producto: GET /items/:id

Endpoints de la API
https://documenter.getpostman.com/view/12085840/2sAXqy4Kth

Búsqueda de Productos

    Endpoint: /api/items?q=:query
    Descripción: Consulta la API de Mercado Libre para obtener productos relacionados con la consulta.
    Ejemplo de Respuesta:

    json

    {
      "author": {
        "name": "Nombre",
        "lastname": "Apellido"
      },
      "categories": ["Categoría 1", "Categoría 2"],
      "items": [
        {
          "id": "12345",
          "title": "Nombre del producto",
          "price": {
            "currency": "ARS",
            "amount": 1000,
            "decimals": 0
          },
          "picture": "url_imagen",
          "condition": "new",
          "free_shipping": true
        }
      ]
    }

Detalle del Producto

    Endpoint: /api/items/:id
    Descripción: Consulta la API de Mercado Libre para obtener detalles de un producto específico.
    Ejemplo de Respuesta:

    json

    {
      "author": {
        "name": "Nombre",
        "lastname": "Apellido"
      },
      "item": {
        "id": "12345",
        "title": "Nombre del producto",
        "price": {
          "currency": "ARS",
          "amount": 1000,
          "decimals": 0
        },
        "picture": "url_imagen",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 10,
        "description": "Descripción del producto"
      }
    }

Usabilidad, SEO, Performance y Escalabilidad

    Usabilidad: La interfaz es intuitiva y permite a los usuarios navegar fácilmente entre las diferentes vistas.
    SEO: Se utilizan prácticas recomendadas para la optimización de motores de búsqueda, incluyendo metadatos adecuados y rutas amigables.
    Performance: La aplicación está optimizada para tiempos de carga rápidos y eficiente manejo de estado.
    Escalabilidad: La estructura del proyecto permite añadir nuevas funcionalidades y componentes en el futuro sin afectar la base existente.

Instalación

### !Requerido:
- **Environment necesarias:**
  - API_URL=https://api.mercadolibre.com
  - NEXT_PUBLIC_SERVER_URL=http://localhost:8080/api

Para ejecutar la aplicación en tu entorno local, sigue estos pasos:

    Clonar el repositorio: 
    git clone https://github.com/JonathanAGonzalez/challenge-ml/tree/main/back
    git clone https://github.com/JonathanAGonzalez/challenge-ml/tree/main/front

    bash

cd folder name

Instalar dependencias del backend:

bash

cd back
npm install



bash
npm run dev

Instalar dependencias del frontend:
bash
cd front
npm install
Iniciar la aplicación:
bash

    npm run dev

    Abrir el navegador y navegar a http://localhost:3000 para acceder a la aplicación.



## Home:
![image](https://github.com/user-attachments/assets/7a9bb097-448e-426d-bb21-5929459c1e11)
![image](https://github.com/user-attachments/assets/d2fa9b45-0eb9-4d89-a6cc-e5852dee5b59)


## Detalle:
![image](https://github.com/user-attachments/assets/ebc9130f-4e1c-4903-958c-e221a2fb2344)
![image](https://github.com/user-attachments/assets/9f7ad1d0-7719-4982-873b-1612152d2fe4)
![image](https://github.com/user-attachments/assets/5f94ff62-3ab8-4e5c-b8b6-ba4a01c4e27c)


## Listado de productos
![image](https://github.com/user-attachments/assets/96738109-5950-40a3-bf59-8ab5e40e9926)
![image](https://github.com/user-attachments/assets/4132673a-0f28-4d26-a040-4acd8b0897eb)



