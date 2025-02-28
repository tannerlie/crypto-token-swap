# Crypto Token Swap Exchange (Frontend)

This project is a frontend-only application for a crypto token swap exchange. It allows users to simulate swapping between different cryptocurrencies using mock values. The application is built using React and focuses on providing a user-friendly interface for token exchange operations.

## Features

- **Token Swap Interface**: Users can select two tokens to swap.
- **Mock Token Values**: The application uses mock values for token prices and balances.
- **Swap Functionality**: Users can choose a certain amount of one token to swap for another.
- **Simulated Loading Time**: The "Confirm Swap" button simulates a loading time before completing the swap.

## Technologies Used

- **React**: For building the user interface.
- **Typescript/TSX**: For rendering components and managing state.
- **CSS**: For styling the components and ensuring a responsive layout.

## Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the repository

First, clone the project to your local machine:

```bash
git clone https://github.com/tannerlie/crypto-token-swap.git
```

### 2. Navigate to the project directory

Change into the project folder:

```
cd crypto-token-swap
```

### 3. Install dependencies

Install the required dependencies using `npm`:

```
npm install
```

### 4. Run the application

Start the React development server:

```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

This application simulates the process of swapping tokens. The user can:

1. **Select Tokens**: Choose a token to swap from and a token to swap to.
2. **Enter Amount**: Input the amount of the source token to swap.
3. **Simulate Swap**: The application will display the amount of the target token you would receive, based on mock prices.
4. **Simulate Loading**: When the user clicks the "Confirm Swap" button, a loading time is simulated before the swap is completed.

Note that no real transactions occur as this is just a mock frontend with static values.