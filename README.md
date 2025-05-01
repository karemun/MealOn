## MealOn
MealOn es una aplicación web de tienda en línea donde los usuarios deben crear una cuenta e iniciar sesión para realizar pedidos. Por otro lado, los administradores pueden ver y gestionar los pedidos realizados por los usuarios.

El proyecto fue desarrollado con Laravel en el backend y React en el frontend.

## Previews

- Iniciar sesión
![imagen](https://github.com/user-attachments/assets/46cfac1b-65f6-43d4-ab2e-5f23c2f27601)

- Panel de usuario cliente
![imagen](https://github.com/user-attachments/assets/f215dad2-e23a-4a03-b11b-98a5749d3383)

- Añadir elementos al pedido
![imagen](https://github.com/user-attachments/assets/608200a9-939d-4382-9a5d-0047ca8234e0)

- Panel Administrador: Ordenes
![imagen](https://github.com/user-attachments/assets/503346c0-e03a-4678-8632-bb535c3fe502)

- Panel Administrador: Productos
![imagen](https://github.com/user-attachments/assets/d991e271-b51d-42ad-a9be-178ba0fc6aca)

## Instalación
1. Clonar el repositorio: 
    ```
    git clone https://github.com/karemun/MealOn.git
    ```
2. Entrar al directorio del proyecto: 
    ```
    cd mealon
    ```
3. Instalar las dependencias de Laravel: 
    ```
    composer install
    ```
4. Crear el archivo .env y configurar las variables de entorno: 
    ```
    cp .example.env .env
    ```
5. Generar una llave de aplicación: 
    ```
    php artisan key:generate
    ```
6. Ejecutar las migraciones de la base de datos: 
    ```
    php artisan migrate
    ```
7. Ejecutar el servidor de Laravel:
   ```
   php artisan serve
   ```
7. Navegar al directorio de frontend:
   ```
   cd react-mealon
   ```
8. Instalar dependencias de React:
   ```
   npm install
   ```
7. Ejecutar el servidor de React:
    ```
    npm run dev
    ```
8. Acceder a la aplicación ingresando a la ruta `http://localhost:5173/auth/login`
