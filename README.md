# QR-Generator
Just a simple __QR Code Generator__ web page.

## Usage
Simply type in a text or URL into the input box and click on the ___'Generate QR Code'___ button.

## How It Works
The implementation of this project is very simple. Consisting of a single page, the user simply enters an input and clicks on the ___'Generate QR Code'___ button. At this point, the script simply fetched the QR code for the input using the ___goqr.me___ API
```
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
```
and displays it to the user.

## Languages Used
This was a very simple project made a very basic stack consisting of:
- HTML
- CSS
- JavaScript (JQuery)
