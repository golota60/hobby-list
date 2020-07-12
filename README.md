# Installation 

`yarn` - install all the dependencies

then 

`yarn mock-server` - run mocked API

`yarn start` - run the application

or

`yarn all` - run mocked API and application concurrently

# Mock data

Mocked data was generated from https://next.json-generator.com/ with the following code
```
[
  {
    'repeat(25)': {
      id: '{{objectId()}}',
      name: '{{firstName()}}',
      hobbies: [
        {
        'repeat(10)': {
        	id: '{{objectId()}}',
          passion: '{{random("High", "Very High", "Medium", "Low")}}',
          name: '{{random("Playing football","Binge Drinking","Bashing Head against the wall","Playing basketball")}}',
          date: '{{integer(1970, 2020)}}'
        }
        }
        ]
    }
  }
]
```