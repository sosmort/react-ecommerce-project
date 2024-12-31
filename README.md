# React E-commerce Website

This is a static e-commerce website built with **React** and **TypeScript**, designed for scalability and ease of use. The project features a dynamic product display and reusable components, providing a foundation for building fully functional e-commerce platforms.

## Project Overview

I used **Vite** to create this project, as it provides faster builds and a modern development environment. The project was built manually using **npm** commands, ensuring complete control over the build process. Finally, the website was deployed to **Netlify**, making it accessible as a live static site.

## Project Structure

The project is organized into reusable components, making it easy to extend and maintain.

## Folder structure

```
public/
├── (images and other static files)
src/
├── Components/
│   ├── Header.tsx
│   ├── Carousel.tsx
│   ├── Category.tsx
│   ├── AllProducts.tsx
│   ├── PubVideo.tsx
│   ├── Banner.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
├── index.css
```

## Features

- **Dynamic Product Rendering**: Products are dynamically displayed using an array of objects.
- **Reusable Components**: Includes modular components like `Header`, `Carousel`, `Category`, `AllProducts`, `PubVideo`, and `Footer`.
- **Responsive Design**: Ensures compatibility across devices.
- **Modern UI**: Integrated with FontAwesome icons and styled buttons.

## Project Structure

The project is organized into reusable components, making it easy to extend and maintain.

### Components

#### 1. Header

- Displays the navigation menu.
- Props:
  - `navlist`: Array of navigation links (e.g., `["Accueil", "Magasin", "À propos", "Contact", "Commandes"]`).
  - `onChangePage`: Callback function to handle navigation changes.

#### 2. Carousel

- Renders a responsive image carousel for promotional banners.
- Props:
  - `imgList`: Array of image paths for the carousel (e.g., `["carou-1.webp", "carou-2.webp"]`).

#### 3. Category

- Displays product categories dynamically using the `products` array passed as props.
- Props:
  - `products`: Array of product objects with `id`, `name`, `price`, and `image`.

#### 4. AllProducts

- Dynamically renders all products.
- Props:
  - `products`: Array of product objects.

Example usage:

```tsx
<div className="product_container">
  {props.products.map((item) => (
    <div className="prodimg" key={item.id}>
      <img src={item.image} alt={item.name} />
      <div className="prod_info">
        <h3>{item.name}</h3>
        <span>{item.price}</span>
        <button>Ajouter au panier</button>
      </div>
    </div>
  ))}
</div>
```

#### 5. PubVideo

```
    Displays a promotional video.
    Example:
<iframe
  width="100%"
  height="400"
  src="your-video-link"
  title="Promotional Video"
  allowFullScreen
></iframe>

```

#### 6. Banner

- Renders promotional banners dynamically.
- Props:
  - `bannerListe`: Array of banner image paths.

#### 7. Footer

-Displays the website footer with contact information and links.

#### APP.tsx

-The root component of the application. Combines all other components and manages the `products` array.
-Example `products` array:

```
const products = [
  { id: 1, name: "blouza", price: "2,000 DZD", image: "cat1.jpeg" },
  { id: 2, name: "BONK DE BAIN", price: "350 DZD", image: "cat2.jpeg" },
  { id: 3, name: "Caftan", price: "23,000 DZD", image: "cat3.jpeg" },
  { id: 4, name: "ENSEMBLE HAMMAM TOUNSI", price: "22,500 DZD", image: "cat4.jpeg" },
  { id: 5, name: "KARAKOU ENFANTS 3ps", price: "32,000 DZD", image: "cat5.jpeg" },
  { id: 6, name: "POINT DE BAIN ", price: "62,000 DZD", image: "cat6.jpeg" },
  { id: 7, name: "SABO HAMMAM", price: "850 DZD", image: "cat7.jpeg" },
  { id: 8, name: "Sac", price: "2,450 DZD", image: "cat8.jpeg" },
  { id: 9, name: "Tej", price: "2,200 DZD", image: "cat9.jpeg" },
];
```

#### Dependencies

- React: Core library for building UI components.
- TypeScript: For type safety.
- Vite: For fast build times and modern development tooling.
- react-slick: For carousel functionality.
- slick-carousel: Carousel styling.
- FontAwesome: For icons in buttons and navigation.

#### How to Run the Project and Build it Manually

1. **Clone the repository**

   ```bash
   git clone git@github.com:sosmort/react-ecommerce-project.git

   ```

2. **Install dependencies**  
   Navigate into the project directory and install the required dependencies using npm

3. **Start the development server**  
   Once the dependencies are installed, you can start the development server with:

```
   npm run dev

```

4. **Build the project**  
   To build the project for production manually, use the following command:

```
npm run build
```

This will create a `dist/` folder with the production-ready build.

5. ## Deployment

This project has been deployed on [Netlify](https://neon-caramel-b6bf2a.netlify.app/). You can access the live website through the following link:

- [Live Website](https://neon-caramel-b6bf2a.netlify.app/)

#### Acknowledgements

I would like to extend my gratitude to the following:

- **Vite**: For providing an excellent development experience with fast build times and modern tooling.
- **React**: For building the most powerful and flexible UI components.
- **TypeScript**: For type safety and improving the development process.
- **FontAwesome**: For providing a wide range of beautiful icons to enhance the user interface.
- **Slick Carousel**: For easy-to-implement, responsive carousels.

#### Contributing

If you're a developer interested in contributing or reusing this project, feel free to fork this repository and make it your own! Please follow these guidelines:

1. Fork the repository and create your own branch.
2. Work on your changes and commit them with clear, concise messages.
3. Open a pull request for review.

By reusing this project, you're welcome to make modifications or improvements and share them with the community!
