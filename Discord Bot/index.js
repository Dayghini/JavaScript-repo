const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NDc0MzExMDg4NzY3NTAwMzA4.XRD1Gw.HJdyxQkXL2LADhN3uv5i2x7UQe8';
const PREFIX = `!`;

bot.on('ready', () =>{
    console.log('Bot loaded successfully!');
})    


bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'jojo':
            const attachment = new Attachment('https://wallpapercave.com/wp/wp3635024.png')
            msg.channel.send(msg.author, attachment);
            break;

        case 'ino':
            const attachmentTwo = new Attachment('./ino.png');
            msg.channel.send(msg.author, attachmentTwo);
            break;

        case 'sasuke':
            const attachmentThree = new Attachment('./sasuke.png');
            msg.channel.send(msg.author, attachmentThree);
            break;
        
        case 'naruto':
            const attachmentFour = new Attachment('./naruto.png');
            msg.channel.send(msg.author, attachmentFour);
            break;

        case 'jiraya':
            const attachmentFive = new Attachment('./jiraya.png');
            msg.channel.send(msg.author, attachmentFive);
            break;

        case 'eve':
            const attachmentSix = new Attachment ('https://i.imgur.com/2NEovMy.jpg');
            msg.channel.send(msg.author, attachmentSix);
            break;
    }
})


bot.on('message', msg=>{
    if (msg.content === "Evelynn")
    msg.reply('What would you like to use me for, Master?')
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case `kick`:
            
           const member = message.mentions.users.first();
            
            if(user){
            
                const member = message.guild.member(user);

                if (member) {
                    member.kick("You have been kicked!").then(() => {
                        message.reply(`Sucessfully kicked ${user.tag}`)
                    }).catch(err => {
                       message.reply("I was ubable to kick the user");
                       console.log(err);
                    });
                } else {
                   message.reply("That user isn\`t in the guild")
                }
            } else {
                message.reply("You need to specify a person!")
            }

            break;

    }
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    
        switch (args[0]) {
            case 'ban':
                
               const member = message.mentions.users.first();
                
                if(user){
                
                    const member = message.guild.member(user);
    
                    if (member) {
                        
                    } else {
                       message.reply("That user isn\`t in the guild")
                    }
                } else {
                    message.reply("You need to specify a person!")
                }
    
                break;
    
        }

})
bot.login(token);