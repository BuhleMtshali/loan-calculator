# Loan Calculator - README

## Overview

This project is a simple **Loan Calculator** web application. It allows users to calculate the monthly payment for a loan based on the loan amount, interest rate, and the repayment period in months. The application uses basic HTML, CSS, and JavaScript for its structure, styling, and functionality.

## Features

- **Loan Amount Input**: Users can input the total amount of the loan.
- **Interest Rate Input**: Allows input for the annual interest rate.
- **Months to Pay Input**: Users specify the number of months to pay off the loan.
- **Monthly Payment Calculation**: Displays the calculated monthly payment.
- **Clear All Feature**: Users can clear all input fields and reset the calculator.

## Files

- **index.html**: Contains the structure of the Loan Calculator interface.
- **style.css**: Defines the styling of the Loan Calculator, including fonts, colors, and layout.
- **index.js**: Contains the JavaScript logic for calculating the monthly payment and clearing the inputs.

## How It Works

1. **User Input**: The user enters the loan amount, interest rate, and repayment period in months.
2. **Calculation**: When the "Calculate" button is clicked, the JavaScript function:
   - Calculates the interest amount by multiplying the loan amount by the interest rate.
   - Adds the interest to the loan amount and divides it by the number of months to determine the monthly payment.
   - Displays the result on the page.
3. **Clear All**: The "Clear All" button clears all the inputs and resets the displayed result.

## Installation

1. **Download the project files** or clone the repository.
2. Open `index.html` in a browser.

## Usage

1. Open the Loan Calculator in your browser.
2. Input the loan amount (in Rands), the interest rate (as a percentage), and the number of months to pay off the loan.
3. Click on the **Calculate** button to view the monthly payment.
4. To reset all fields, click on the **Clear All** button.

## Customization

- **Styling**: You can customize the appearance by modifying the variables in the `:root` selector in `style.css`. This will change the background colors, text colors, button colors, and other styles.
  
## Dependencies

- **Google Fonts**: The application uses the **Roboto** font family, imported from Google Fonts.
- **FontAwesome**: The piggy bank icon used in the header is provided by FontAwesome.

## Author

Developed by Zanobuhle Mtshali.
