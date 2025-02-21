# TypeScript Learning Guide

## Introduction

This guide provides a structured approach to learning TypeScript, divided into lessons. Each lesson covers fundamental concepts, gradually building up to more advanced topics.

---

## **Setup and Requirements**

### **1. Installing Node.js and TypeScript**

To run TypeScript files, you need to have **Node.js** installed. Download and install it from [Node.js official website](https://nodejs.org/).

After installing Node.js, install TypeScript globally by running:

```sh
npm install -g typescript
```

Verify the installation:

```sh
tsc --version
```

### **2. Setting Up a TypeScript Project**

To create a new TypeScript project, run:

```sh
mkdir my-typescript-project && cd my-typescript-project
npm init -y
npm install typescript --save-dev
```

Initialize a TypeScript configuration file:

```sh
tsc --init
```

This creates a `tsconfig.json` file, allowing you to customize TypeScript settings.

### **3. Running TypeScript Files**

Create a sample TypeScript file (`index.ts`):

```typescript
const message: string = 'Hello, TypeScript!';
console.log(message);
```

#### **Option 1: Using TypeScript Compiler (tsc)**

Compile the file to JavaScript:

```sh
tsc index.ts
```

This generates an `index.js` file. Run it using Node.js:

```sh
node index.js
```

#### **Option 2: Using ts-node (Alternative Method)**

You can also use `ts-node` to run TypeScript files without compiling manually:

```sh
npm install -g ts-node
```

Run the TypeScript file directly:

```sh
ts-node index.ts
```

This method is useful for quick testing and development.

### **4. Recommended Code Editor: VS Code**

We recommend using **Visual Studio Code (VS Code)** for TypeScript development. Download it from [VS Code official website](https://code.visualstudio.com/).

#### **Extensions to Install in VS Code:**

- **ESLint** – Ensures code quality
- **Prettier** – Formats code automatically
- **TypeScript Language Support** – Improves TypeScript development experience
