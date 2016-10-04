# etPhone
> Set of  helper utilities to validate, parse and format Ethiopian phone numbers.

## Features

* Ethiopian phone number validation and formatting.
* Find location data of phone numbers.
* Check whether number is mobile or landline.
* Works in the browser and Node.JS
* <4 KB minified and gzipped.

**Demo** : [https://etphone.herokuapp.com](https://etphone.herokuapp.com)

## Install

```sh
npm install etphone
```

## Import

**ES6 module**

```js
import { validate, findArea } from 'etphone'
```

**Node.JS**

```js
const etPhone = require('etphone')
```

**Import to the browser from a CDN**

```html
<script src="https://unpkg.com/etphone.js"></script>
```

## Usage

```js
const etPhone = require('etphone');

let phone = '0911346652';

etPhone.validate(phone) // True
etPhone.format(phone)   // 09 11 34 66 52
```

### Validate

Checks whether given input is a valid Ethiopian phone number.

```js
etPhone.validate('0911885641')     // True
etPhone.validate('+251115150126')  // True
etPhone.validate('09 11 52 39 17') // True

etPhone.validate('09135692')    // False
etPhone.validate('+4604121343') // False
```

### Parse

Cleans up | normalizes phone number.

```js
etPhone.parse('09-21-31-43-32')  // 0921314332
etPhone.parse('+(251)116625697') // 251116625697

// Raises detailed error when input is invalid
etPhone.parse('09135692')    // TypeError: Phone number too short
etPhone.parse('+460721343') // TypeError: Not Ethiopian phone number
```

### Format

Converts phone number into an easily readable format.

```js
etPhone.format('+251116625697') // 251 112 70 56 97
etPhone.format('0112702784')    // 011 270 27 84
etPhone.format('0911885641')    // 09 11 88 56 41
```

### Find Area

Retrieves location data of given phone number based on area code.

```js
etPhone.findArea('0113215476') // Mekanisa, South West Addis Ababa
etPhone.findArea('0112702784') // Asko, Western Addis Ababa

etPhone.findArea('0223319750') // Asela, South East Ethiopia
etPhone.findArea('0587764412') // Dejen, North West Ethiopia
etPhone.findArea('0916771836') // South Ethiopia
```

* Location data is based on <https://www.itu.int/oth/T0202000044/en>
* Some of the data might be outdated due to naming changes.
* Detailed location is **only available for Landline numbers**, you can get some regional info for mobile phones.
* The location data for mobile phones only indicates where the simcard was bought from and does not necessarily reflect the current location of the phone.

### toLocal

Converts phone number to local | Ethiopian format.

```js
etPhone.toLocal('251911885641')  // 0911885641
etPhone.toLocal('+251116625697') // 0116625697
```

### toInternational

Converts phone number to International format.

```js
etPhone.toInternational('0911885641') // +251911885641
etPhone.toInternational('0116625697') // +251116625697
```

### isMobile

Checks whether given number is a mobile sim.

```js
etPhone.isMobile('0911885641') // True
etPhone.isMobile('0116625697') // False
```

### isLandline

Checks whether given number is a landline.

```js
etPhone.isLandline('0116625697') // True
etPhone.isLandline('0911885641') // False
```

### isLocal

Checks whether given number is in local | Ethiopian format.

```js
etPhone.isLocal('0911885641')    // True
etPhone.isLocal('+251116625697') // False
```

### isInternational

Checks whether given number is in international format.

```js
etPhone.isInternational('+251116625697') // True
etPhone.isInternational('0911885641')    // False
```

### Test

```sh
$ npm run test
```

## License

[MIT](LICENSE) © Michael Tsegaye
