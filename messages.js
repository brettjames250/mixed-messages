
const firstPart = ['You are ', 'I am ', 'We are ', 'Boris Johnson is ', 'Pamela Anderson is ']
const secondPart = ['exceptionally ', 'slightly ', 'kind of ' , 'possibly ']
const thirdPart = ['strange', 'interesting', 'peculiar', 'great', 'tired', 'ripped']

const chooseWordPart = array => { 
 return array[Math.floor(Math.random() * array.length)]
}

const generateMessage = () => {
    return chooseWordPart(firstPart) + chooseWordPart(secondPart) + chooseWordPart(thirdPart) 
}

console.log(generateMessage())