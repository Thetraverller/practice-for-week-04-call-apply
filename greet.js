// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");  // call binds the arguments (separated by commas)
say.call(heyThereMessage, "Michael");
