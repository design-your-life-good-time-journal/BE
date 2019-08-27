const server = require('./api/server.js');

var randomMessage = [
    "Welcome Developer",
    "Reminder: Tip Your Server",
    "Sounded like an angel singing about a pain hin her chest"
  ];
  //this prints out on the console, feel free to add whatever messages you want
  var message = randomMessage[Math.floor(Math.random() * randomMessage.length)];

  let now = new Date().getTime();

const port = process.env.PORT || 4200;
server.listen(port, () => console.log(`|--DYL Database--\n| ${message} \n| Server running on http://localhost:${port} \n| Time is: ${now} \n| ----------------
                                        `));