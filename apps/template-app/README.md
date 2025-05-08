# Template App for Admin Panels

## Overview

This **Template App** is a starter kit for building admin panels using React and the **ileaf-ui** component library. It provides a basic structure and essential components to help developers quickly set up and customize their admin dashboards.

## Features

- Built with React and TypeScript
- Utilizes the **ileaf-ui** component library for reusable UI components
- Responsive design suitable for various devices
- Easy to configure and customize

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/template-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd template-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

The project is organized as follows:

template-app/
├── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Application pages
│ ├── store/ # State management (e.g., user store)
│ ├── assets/ # Static assets (images, etc.)
│ ├── App.tsx # Main application component
│ ├── index.css # Global styles
│ └── main.tsx # Entry point
└── README.md # Project documentation

## Configuration

### Changing Primary Colors

You can customize the primary colors and other theme settings in the `src/index.css` file. The following CSS variables can be modified:

```css
@theme {
  --color-primary: #5046e5; /* Change this to your desired primary color */
  --color-secondary: #717171; /* Change this to your desired secondary color */
  --font-primary:
    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; /* Change the font if needed */
}
```

### Adding New Pages

To add a new page to your admin panel:

1. Create a new file in the `src/pages/` directory (e.g., `NewPage.tsx`).
2. Import the new page in `src/App.tsx` and add a corresponding route:

   ```tsx
   import NewPage from "./pages/NewPage";

   <Route path="new-page" element={<NewPage />} />;
   ```

### Using ileaf-ui Components

The app utilizes components from the **ileaf-ui** library. You can import and use these components in your pages or other components as follows:

```tsx
import { Button, Avatar } from "ileaf-ui";

const MyComponent = () => {
  return (
    <div>
      <Avatar imageUrl="path/to/image.jpg" handleUpload={handleUpload} />
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};
```

## Deployment

To deploy your application, you can build it using:

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with the production-ready files. You can then host these files on any static file server or cloud service.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [ileaf-ui](https://github.com/yourusername/ileaf-ui) for the component library.
- [React](https://reactjs.org/) for the framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling.

## Conclusion

This **Template App** provides a solid foundation for building admin panels with React. You can easily customize it to fit your needs and extend it with additional features. Happy coding!
