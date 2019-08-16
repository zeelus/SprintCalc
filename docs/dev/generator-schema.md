# Developers auto generate schema
***Generator: https://www.json-generator.com***

## Schema
In order to generate matching JSON object please use the schema below:

### Developer:
```
[
  '{{repeat(25)}}',
  {
    _id: '{{guid()}}',
    index: '{{index()}}',
    name: '{{firstName()}}',
    lastName: '{{surname()}}',
    backendPower: '{{integer(0, 1000)}}',
    frontendPower: '{{integer(0, 1000)}}',
    cost: '{{floating(1000.0, 8000.0)}}',
    image: '{{integer(1, 9)}}.png'
  }
]
```
_Note: JSON object contains the image path._

### Project:
```
[
  '{{repeat(20)}}',
  {
    _id: '{{guid()}}',
    index: '{{index()}}',
    name: '{{company()}}',
    backendPowerRequired: '{{integer(1000, 5000)}}',
    frontendPowerRequired: '{{integer(1000, 5000)}}',
    backendProgress: 0,
    frontendProgress: 0,
    duration: '{{integer(3, 12)}}',
    income: '{{integer(10000, 250000)}}'
  }
]
```
_Note: The projects are not balanced yet._

### Event:
```
[
  '{{repeat(10)}}',
  {
    _id: '{{guid()}}',
    index: '{{index()}}',
    name: 'Event ...',
    about: '{{lorem(1, "paragraphs")}}',
    moneyInfluence: '{{integer(-5000, 5000)}}',
    timeInfluence: '{{integer(-1, 3)}}'
  }
]
```
_Note: The events are not balanced yet and have no human readable description._

### Image Cache:
Since React-Native does not support dynamic image loading the image cache had to be implemented. 
It keeps the images organized in map inside the Redux store. When the app is loading the cache is initialized and the image can be accessed via it's name.
The data is organized in `key: value` structure. 

```
[
  '{{repeat(9)}}',
  {
    index: '{{index()}}',
    key: "",
    value: ""
  }
]
```
The image data has been encoded in base64.

***url: https://onlinepngtools.com/convert-png-to-base64***
