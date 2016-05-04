# etPhone

A library of helper utilities to validate, parse and format Ethiopian phone numbers.

## Getting started

### Validate

Checks whether given input is a valid Ethiopian phone number.

```js
validate('0911885672')  // True
validate('+251115150126') // True
validate('09 11 42 39 13') // True

validate('09201172') // False
validate('+4607221343') // False
```

### Parse

Cleans up | normalizes phone number.

```js
parse('09-21-31-43-32') // 0921314332
parse('+(251)116625697') // 251116625697
```

### Format

Converts phone number into a readable format.

```js
format('0911885672')  // 09 11 88 56 72
format('+251116625697') // 251 112 70 56 97
```

### Find Area

Retrieves location data of given a phone number based on area code.

```js
findArea('0113215476') // Mekanisa, South West Addis Ababa
findArea('0112702784') // Asko, Western Addis Ababa

findArea('0223319750') // Asela, South East Ethiopia
findArea('0587764412') // Dejen, North West Ethiopia
findArea('0916771836') // South Ethiopia
```

### toLocal

Converts phone number to local / Ethiopian format.

```js
toLocal('251911885672')  // 0911885672
toLocal('+251116625697') // 0116625697
```

### toInternational

Converts phone number to International format.

```js
toInternational('0911885672') // +251911885672
toInternational('0116625697') // +251116625697
```

### isMobile

Checks whether given number is a mobile sim.

```js
isMobile('0911885672') // True
isMobile('0116625697') // False
```

### isLandline

Checks whether given number is a landline.

```js
isLandline('0911885672') // False
isLandline('0116625697') // True
```

### isLocal

Checks whether given number is in local | Ethiopian format.

```js
isLocal('0911885672')    // True
isLocal('+251116625697') // False
```

### isInternational

Checks whether given number is in international format.

```js
isInternational('0911885672')    // False
isInternational('+251116625697') // True
```

### Test

```sh
$ npm run test
```

## License

[MIT](LICENSE) © Michael Tsegaye
