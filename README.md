# Show Commerce
Show Commerce is an innovative e-commerce platform that empowers users to create and order customized printed products. Whether you're looking for personalized apparel, unique accessories, or customized promotional items, our platform provides you with a seamless experience to bring your creative ideas to life.

## Features

- Customized product printing: Users can browse and customize products based on their preferences.
- Shipping info storage: Users can save their shipping information in local storage for convenience.
- Shopping cart: Users can add products to their cart, which is also stored in local storage.
- API Integration: Products are fetched from an API.
- Clearing Local Storage: Local storage is cleared after checkout.

## Folder Structure

```sh
.
├── .env.example        # Example environment variable configuration file.
├── .eslintrc.json      # ESLint configuration for code linting rules.
├── .git                # Git configuration and version control data.
├── .gitignore          # Specifies files and directories to be ignored by Git.
├── .next               # Automatically generated directory by Next.js for build files.
├── .prettierrc         # Prettier code formatter configuration.
├── README.md           # Project's README file for documentation.
├── app                 # App-specific code and logic.
├── assets              # Static assets such as images, fonts, etc.
├── components          # Reusable React components.
├── hooks               # Custom React hooks.
├── interfaces          # TypeScript interface definitions.
├── lib                 # Libraries or utilities used in the project.
├── next-env.d.ts       # TypeScript declarations for Next.js environment.
├── next.config.js      # Next.js configuration file.
├── node_modules        # Node.js dependencies installed via package.json.
├── package.json        # Package configuration and dependencies.
├── postcss.config.js   # Configuration for PostCSS, a CSS preprocessor.
├── tailwind.config.js  # Configuration for the Tailwind CSS framework.
├── tsconfig.json       # TypeScript configuration file.
├── utils               # Utility functions or helper modules.
├── yarn.lock           # Yarn lockfile, used for package version control.
```

## Technologies Used
My platform is built using cutting-edge technologies to provide you with a fast, responsive, and user-friendly experience:

- [Next.js](https://nextjs.org/): A React framework for building high-performance web applications.
- [React Hook Form](https://react-hook-form.com/): A library for handling forms in React applications.
- [SWR (Stale-While-Revalidate)](https://swr.vercel.app/): A data fetching library for efficient and fast API requests.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for designing sleek and responsive user interfaces.
- [class-variance-authority](https://github.com/link-to-class-variance-authority)
- [clsx](https://github.com/jeanregisser/classnames)

### Code Formatting and Linting
I prioritize code quality and maintainability to ensure a smooth development process and a robust product. My project follows industry best practices for code formatting and linting, thanks to:

- [ESLint](https://eslint.org/): A tool for identifying and fixing problems in JavaScript code.
- [Prettier](https://prettier.io/): An opinionated code formatter that ensures code consistency.
- [prettier-plugin-tailwindcss](https://github.com/muhajirframe/prettier-plugin-tailwindcss): A plugin to format Tailwind CSS classes.

## Getting Started

Provide instructions on how to get the project up and running locally. Include any prerequisites, installation steps, and commands to start the development server.

```bash
# Clone the repository
git clone https://github.com/a4arpon/show-commerce-client.git

# Change directory to your project folder
cd show-commerce-client

# Install dependencies
yarn install

# Start the development server
yarn dev
```
