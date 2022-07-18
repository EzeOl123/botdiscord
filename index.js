// const { Client, Intents, Message } = require('discord.js');
const { Client, Collection, Intents, Message } = require('discord.js');
const { token } = require('./config.json');
const Discord = require('discord.js');
// const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('node:fs');
const path = require('node:path');
client.commands = new Collection();
const { MessageEmbed } = require('discord.js');
const config = require('discord.js');
tests = '997022752299032577';
nolevanta = '997383216673607771';


const CARGA1 = [{
    id: 1,
    metros: 300,
    elev: 1485,
    elev100m: 4,
    timeflight: 23.3,
          }, {
    id: 2,
    metros: 400,
    elev: 1446,
    elev100m: 6,
    timeflight: 23.1,
          }, {
       id: 3,
       metros: 500 ,
    elev: 1406,
    elev100m: 7,
    timeflight: 23.0
     }, {
    id: 4,
    metros: 600,
    elev: 1364,
    elev100m: 9,
    timeflight: 22.8
     }, {
    id: 5,
    metros: 700,
    elev: 1321,
    elev100m: 11,
    timeflight: 22.5
    }, {
    id: 6,
    metros: 800,
    elev: 1275,
    elev100m: 14,
    timeflight: 22.2,
    }, {
    id: 7,
    metros : 900,
    elev : 1226,
    elev100m : 18,
    timeflight : 21.8
        }, {
    id : 8,
    metros : 1000,
    elev : 1172,
    elev100m : 22,
    timeflight : 21.4,
    }, { 
    id : 9,
    metros : 1100,
    elev : 1111,
    elev100m : 29,
    timeflight : 20.8 
    },{
    id : 10,
    metros : 1200,
    elev : 1037,
    elev100m : 42,
    timeflight : 19.9
    },{
       //ultimo de carga 0
    id : 11,
    metros : 1299.99 ,
    elev : 929,
    elev100m : 75,
    timeflight : 18.5
    },{
       id : 12,
       metros : 1300 ,
       elev : 1165,
       elev100m : 18,
       timeflight : 24.1
   },{
       id : 13,
       metros : 1400 ,
       elev : 1118,
       elev100m : 23,
       timeflight : 23.6
   },{
       id : 14,
       metros : 1500 ,
       elev : 1063,
       elev100m : 30,
       timeflight : 22.9
   },{
       id : 15,
       metros : 1600 ,
       elev : 995,
       elev100m : 43,
       timeflight : 24.1
   },{
       //ultimo de carga1
       id : 16,
       metros : 1699.99 ,
       elev : 886,
       elev100m : 82,
       timeflight : 20.3
   },{
       id : 17,
       metros : 1700 ,
       elev : 1165,
       elev100m : 14,
       timeflight : 27.6
 
   },{
       id : 18,
       metros : 1800 ,
       elev : 1130,
       elev100m : 17,
       timeflight : 27.2
 
   },{
       id : 19,
       metros : 1900 ,
       elev : 1090,
       elev100m : 21,
       timeflight : 26.6
   },{
       id : 20,
       metros : 2000 ,
       elev : 1045,
       elev100m : 26,
       timeflight : 25.9
   },{
       id : 21,
       metros : 2100 ,
       elev : 991,
       elev100m : 35,
       timeflight : 25.1
   },{
       //ultimo de carga 2
       id : 22,
       metros : 2199.99 ,
       elev : 914,
       elev100m : 56,
       timeflight : 23.7
   },{
       id : 23,
       metros : 2200 ,
       elev : 1171,
       elev100m : 11,
       timeflight : 31.6
   },{
       id : 24,
       metros : 2300 ,
       elev : 1144,
       elev100m : 12,
       timeflight : 31.3
   },{
       id : 25,
       metros : 2400 ,
       elev : 1115,
       elev100m : 14,
       timeflight : 30.8
   },{
       id : 26,
       metros : 2500 ,
       elev : 1084,
       elev100m : 17,
       timeflight : 30.3
   },{
       id : 27,
       metros : 2600 ,
       elev : 1050,
       elev100m : 20,
       timeflight : 29.71
   },{
       id : 28,
       metros : 2700 ,
       elev : 1010,
       elev100m : 25,
       timeflight : 29
   },{
       id : 29,
       metros : 2800 ,
       elev : 962,
       elev100m : 33,
       timeflight : 28.1
   },{
       //ultimo carga 3
       id : 30,
       metros : 2899.99 ,
       elev : 891,
       elev100m : 55,
       timeflight : 26.6
   },{
       id : 31,
       metros : 2900 ,
       elev : 1163,
       elev100m : 9,
       timeflight : 35.9
   },{
       id : 32,
       metros : 3000 ,
       elev : 1142,
       elev100m : 10,
       timeflight : 35.6
   },{
       id : 33,
       metros : 3100 ,
       elev : 1120,
       elev100m : 11,
       timeflight : 35.2
   },{
       id : 34,
       metros : 3200 ,
       elev : 1096,
       elev100m : 12,
       timeflight : 34.8
   },{
       id : 35,
       metros : 3300 ,
       elev : 1071,
       elev100m : 14,
       timeflight : 34.3
   },{
       id : 36,
       metros : 3400 ,
       elev : 1044,
       elev100m : 16,
       timeflight : 33.8
   },{
       id : 37,
       metros : 3500 ,
       elev : 1013,
       elev100m : 19,
       timeflight : 33.1
   },{
       id : 38,
       metros : 3600 ,
       elev : 977,
       elev100m : 24,
       timeflight : 32.4
   },{
       id : 39,
       metros : 3700 ,
       elev : 933,
       elev100m : 32,
       timeflight : 31.3
   },{
       //ultimo de carga 4
       id : 40,
       metros : 3799.99 ,
       elev : 864,
       elev100m : 57,
       timeflight : 29.6
   },{
       id : 41,
       metros : 3800 ,
       elev : 1163,
       elev100m : 7,
       timeflight : 41.1
   },{
       id : 42,
       metros : 3900 ,
       elev : 1147,
       elev100m : 7,
       timeflight : 40.8
   },{
       id : 43,
       metros : 4000 ,
       elev : 1130,
       elev100m : 8,
       timeflight : 40.5
   },{
       id : 44,
       metros : 4100 ,
       elev : 1113,
       elev100m : 9,
       timeflight : 40.2
   },{
       id : 45,
       metros : 4200 ,
       elev : 1095,
       elev100m : 10,
       timeflight : 39.8
   },{
       id : 46,
       metros : 4300 ,
       elev : 1076,
       elev100m : 11,
       timeflight : 39.4
   },{
       id : 47,
       metros : 4400 ,
       elev : 1056,
       elev100m : 12,
       timeflight : 38.9
   },{
       id : 48,
       metros : 4500 ,
       elev : 1034,
       elev100m : 13,
       timeflight : 38.4
   },{
       id : 49,
       metros : 4600 ,
       elev : 1010,
       elev100m : 15,
       timeflight : 37.9
   },{
       id : 50,
       metros : 4700 ,
       elev : 983,
       elev100m : 18,
       timeflight : 37.2
   },{
       id : 51,
       metros : 4800 ,
       elev : 951,
       elev100m : 23,
       timeflight : 36.4
   },{
       id : 52,
       metros : 4900 ,
       elev : 911,
       elev100m : 31,
       timeflight : 35.3
   },{
       //ultimo de carga 5
       id : 53,
       metros : 4999.99 ,
       elev : 844,
       elev100m : 57,
       timeflight : 33.3
   },{
       id : 54,
       metros : 5000 ,
       elev : 1165,
       elev100m : 5,
       timeflight : 47.3
   },{
       id : 55,
       metros : 5100 ,
       elev : 1153,
       elev100m : 5,
       timeflight : 47.1
   },{
       id : 56,
       metros : 5200 ,
       elev : 1141,
       elev100m : 6,
       timeflight : 46.8
   },{
       id : 57,
       metros : 5300 ,
       elev : 1128,
       elev100m : 6,
       timeflight : 46.5
   },{
       id : 58,
       metros : 5400 ,
       elev : 1115,
       elev100m : 7,
       timeflight : 46.2
   },{
       id : 59,
       metros : 5500 ,
       elev : 1102,
       elev100m : 7,
       timeflight : 45.9
   },{
       id : 60,
       metros : 5600 ,
       elev : 1088,
       elev100m : 8,
       timeflight : 45.6
   },{
       id : 61,
       metros : 5700 ,
       elev : 1073,
       elev100m : 8,
       timeflight : 45.2
   },{
       id : 62,
       metros : 5800 ,
       elev : 1058,
       elev100m : 9,
       timeflight : 44.8
   },{
       id : 63,
       metros : 5900 ,
       elev : 1041,
       elev100m : 10,
       timeflight : 44.4
   },{
       id : 64,
       metros : 6000 ,
       elev : 1024,
       elev100m : 11,
       timeflight : 43.9
   },{
       id : 65,
       metros : 6100 ,
       elev : 1005,
       elev100m : 12,
       timeflight : 43.4
   },{
       id : 66,
       metros : 6200 ,
       elev : 985,
       elev100m : 14,
       timeflight : 42.8
   },{
       id : 67,
       metros : 6300 ,
       elev : 962,
       elev100m : 16,
       timeflight : 42.1
   },{
       id : 68,
       metros : 6400 ,
       elev : 935,
       elev100m : 20,
       timeflight : 41.3
   },{
       id : 69,
       metros : 6500 ,
       elev : 901,
       elev100m : 26,
       timeflight : 40.2
   },{
       //ultimo carga 6
       id : 70,
       metros : 6599.99 ,
       elev : 849,
       elev100m : 45,
       timeflight : 38.5
   },{
       id : 71,
       metros : 6600 ,
       elev : 1152,
       elev100m : 4,
       timeflight : 53.5
   },{
       id : 72,
       metros : 6700 ,
       elev : 1143,
       elev100m : 4,
       timeflight : 53.5
   },{
       id : 73,
       metros : 6800 ,
       elev : 1133,
       elev100m : 5,
       timeflight : 53.0
   },{
       id : 74,
       metros : 6900 ,
       elev : 1123,
       elev100m : 5,
       timeflight : 52.8
   },{
       id : 75,
       metros : 7000 ,
       elev : 1113,
       elev100m : 5,
       timeflight : 52.5
   },{
       id : 76,
       metros : 7100 ,
       elev : 1102,
       elev100m : 5,
       timeflight : 52.2
   },{
       id : 77,
       metros : 7200 ,
       elev : 1092,
       elev100m : 6,
       timeflight : 51.9
   },{
       id : 78,
       metros : 7300,
       elev : 1081,
       elev100m : 6,
       timeflight : 51.6
   },{
       id : 79,
       metros : 7400 ,
       elev : 1069,
       elev100m : 7,
       timeflight : 51.3
   },{
       id : 80,
       metros : 7500 ,
       elev : 1057,
       elev100m : 7,
       timeflight : 50.9
   },{
       id : 81,
       metros : 7600 ,
       elev : 1044,
       elev100m : 8,
       timeflight : 50.5
   },{
       id : 82,
       metros : 7700 ,
       elev : 1031,
       elev100m : 8,
       timeflight : 50.1
   },{
       id : 83,
       metros : 7800 ,
       elev : 1017,
       elev100m : 9,
       timeflight : 49.7
   },{
       id : 84,
       metros : 7900 ,
       elev : 1002,
       elev100m : 10,
       timeflight : 49.2
   },{
       id : 85,
       metros : 8000 ,
       elev : 986,
       elev100m : 11,
       timeflight : 48.7
   },{
       id : 86,
       metros : 8100 ,
       elev : 969,
       elev100m : 12,
       timeflight : 48.1
   },{
       id : 87,
       metros : 8200 ,
       elev : 950,
       elev100m : 14,
       timeflight : 47.5
   },{
       id : 88,
       metros : 8300 ,
       elev : 927,
       elev100m : 17,
       timeflight : 46.7
   },{
       id : 89,
       metros : 8400 ,
       elev : 901,
       elev100m : 21,
       timeflight : 45.7
   },{
       //ultima de carga 7
       id : 90,
       metros : 8499.99 ,
       elev : 864,
       elev100m : 31,
       timeflight : 44.3
   },{
       id : 91,
       metros : 8500 ,
       elev : 1155,
       elev100m : 3,
       timeflight : 61.0
   },{
       id : 92,
       metros : 8600 ,
       elev : 1148,
       elev100m : 3,
       timeflight : 60.7
   },{
       id : 93,
       metros : 8700 ,
       elev : 1141,
       elev100m : 4,
       timeflight : 60.5
   },{
       id : 94,
       metros : 8800 ,
       elev : 1133,
       elev100m : 4,
       timeflight : 60.3
   },{
       id : 95,
       metros : 8900 ,
       elev : 1126,
       elev100m : 4,
       timeflight : 60.1
   },{
       id : 96,
       metros : 9000 ,
       elev : 1118,
       elev100m : 4,
       timeflight : 59.9
   },{
       id : 97,
       metros : 9100 ,
       elev : 1110,
       elev100m : 4,
       timeflight : 59.6
   },{
       id : 98,
       metros : 9200 ,
       elev : 1102,
       elev100m : 4,
       timeflight : 59.4
   },{
       id : 99,
       metros : 9300 ,
       elev : 1093,
       elev100m : 4,
       timeflight : 59.1
   },{
       id : 100,
       metros : 9400 ,
       elev : 1085,
       elev100m : 5,
       timeflight : 58.8
   },{
       id : 101,
       metros : 9500 ,
       elev : 1076,
       elev100m : 5,
       timeflight : 58.6
   },{
       id : 102,
       metros : 9600 ,
       elev : 1067,
       elev100m : 5,
       timeflight : 58.3
   },{
       id : 103,
       metros : 9700 ,
       elev : 1058,
       elev100m : 5,
       timeflight : 58.0
   },{
       id : 104,
       metros : 9800 ,
       elev : 1048,
       elev100m : 6,
       timeflight : 57.6
   },{
       id : 105,
       metros : 9900 ,
       elev : 1038,
       elev100m : 6,
       timeflight : 57.3
   },{
       id : 106,
       metros : 10000 ,
       elev : 1028,
       elev100m : 6,
       timeflight : 56.9
   },{
       id : 107,
       metros : 10100 ,
       elev : 1017,
       elev100m : 7,
       timeflight : 56.5
   },{
       id : 108,
       metros : 10200 ,
       elev : 1006,
       elev100m : 7,
       timeflight : 56.1
   },{
       id : 109,
       metros : 10300 ,
       elev : 994,
       elev100m : 8,
       timeflight : 55.7
   },{
       id : 110,
       metros : 10400 ,
       elev : 981,
       elev100m : 9,
       timeflight : 55.2
   },{
       id : 111,
       metros : 10500 ,
       elev : 967,
       elev100m : 10,
       timeflight : 54.7
   },{
       id : 112,
       metros : 10600 ,
       elev : 952,
       elev100m : 11,
       timeflight : 54.1
   },{
       id : 113,
       metros : 10700 ,
       elev : 936,
       elev100m : 12,
       timeflight : 53.5
   },{
       id : 114,
       metros : 10800 ,
       elev : 917,
       elev100m : 15,
       timeflight : 52.7
   },{
       id : 115,
       metros : 10900 ,
       elev : 895,
       elev100m : 18,
       timeflight : 51.8
   },{
       id : 116,
       metros : 11000 ,
       elev : 865,
       elev100m : 25,
       timeflight : 50.5
         }];

client.on('messageCreate', (message) => {
         console.log(message.content);
         const channel = client.channels.cache.get(nolevanta);
         let aux0 = (message.content);
         let aux10 = aux0.split(' ')[0];
         let aux1 = aux0.split(' ');
         let aux2 = aux1[1];
         let aux3 = aux1[2];
         let aux4 = parseInt(aux2, 0);
         let aux5 = parseInt(aux3, 0);      
           if (typeof aux5 === 'number'&&aux10==='!mlrs'&&aux4<11000&&aux4>300) {
            const channel = client.channels.cache.get(nolevanta);

              let aux12 = aux4
              let msgcontent = aux12;
              let altura = aux5;
              let cargamayor1 = CARGA1.find(cargamayor1 => ((cargamayor1.metros) > ((msgcontent)-100)));
              let cargamayor2 = CARGA1.find(cargamayor => cargamayor.metros > msgcontent);
              let aux8 = parseInt(cargamayor1.elev, 0);
              let aux9 = parseInt(cargamayor2.elev, 0);
              let elevacion = aux8 - aux9;
                   let separador = aux2.toString().split([]);
                   let ultimo = (separador.length)-1;
                   let penultimo = (separador.length)-2;
              let palabra = [separador[penultimo], separador[ultimo]];
              let ultimas2 = palabra.join('');
              let ultimas2entero = parseInt(ultimas2, 0);
              let ultimas2decimal = ultimas2entero/100;
              let elevacion2 = elevacion*ultimas2decimal;
              let elevacion3 = cargamayor1.elev - elevacion2;
              let altura1 = cargamayor1.elev100m/100;
              let altura2 = altura* altura1;
              let altura3 = elevacion3 - altura2;
              auxelev = elevacion3.toString();
              auxaltura = altura3.toString();
              auxtimeflight = cargamayor1.timeflight.toString();
                 if (cargamayor1.id>=1&&cargamayor1.id<=11)  {
                         auxcarga = 0
                  } else if (cargamayor1.id>=12&&cargamayor1.id<=16){
                         auxcarga = 1
                  } else if (cargamayor1.id>=17&&cargamayor1.id<=22){
                         auxcarga = 2
                  } else if (cargamayor1.id>=23&&cargamayor1.id<=30){
                         auxcarga = 3
                  } else if (cargamayor1.id>=31&&cargamayor1.id<=40){
                         auxcarga = 4
                  } else if (cargamayor1.id>=41&&cargamayor1.id<=53){
                         auxcarga = 5
                  } else if (cargamayor1.id>=54&&cargamayor1.id<=70){
                         auxcarga = 6
                  } else if (cargamayor1.id>=71&&cargamayor1.id<=90){
                         auxcarga = 7
                  } else if (cargamayor1.id>=91&&cargamayor1.id<=116){
                         auxcarga = 8
                  } else { 
                   msg.reply('false');
                 } 
                 auxcarga1 = auxcarga.toString();

                 const exampleEmbed = new MessageEmbed()
                 .setColor('#FF0000')
                 .setTitle('MLRS')
                 .setURL('https://tenor.com/view/monkiflip-monki-flip-monkey-monkeyflip-gif-18149687')
                 .setAuthor({ name: 'ARTILLERIA', iconURL: 'https://i.imgur.com/Ia3Ncak.png', url: 'https://i.imgur.com/Ia3Ncak.png' })
                //  .setThumbnail('https://i.imgur.com/sJfcKKs.png')
                 .addFields(
                     { name: 'ELEVACION  ', value: (auxelev), inline: true },
                     { name: 'ETA  ', value: (auxtimeflight+'s'), inline: true },
                     { name: 'CARGA', value: (auxcarga1), inline: true },
                     )
                 .setTimestamp();
                 // .setFooter({ text: 'NOLEVANTA BOT', iconURL: 'https://i.imgur.com/Ia3Ncak.png' });
             channel.send({ embeds: [exampleEmbed] });
         } else if (message.content=='!help'){
        const channel = client.channels.cache.get(nolevanta);
        const exampleEmbed = new MessageEmbed()
            .setColor('#04FF00')   
            .setTitle('Para usar el bot usa !(vehiculo) (distancia) (altura)')
            .setAuthor({ name: 'NOLEVANTA ', iconURL: 'https://i.imgur.com/Ia3Ncak.png', url: 'https://i.imgur.com/Ia3Ncak.png' })
        channel.send({ embeds: [exampleEmbed]});
         } else if (message.content=='!bot'){
        const channel = client.channels.cache.get(nolevanta);
        const exampleEmbed = new MessageEmbed()
        .setColor('#04FF00')   
        .setTitle('BOT FUNCIONANDO NORMALMENTE :white_check_mark:')
        .setAuthor({ name: 'NOLEVANTA ', iconURL: 'https://i.imgur.com/Ia3Ncak.png', url: 'https://i.imgur.com/Ia3Ncak.png' })
    channel.send({ embeds: [exampleEmbed]});
         } else if (message.content=='!commands'){
            const channel = client.channels.cache.get(nolevanta);
            const exampleEmbed = new MessageEmbed()
            .setColor('#04FF00')
            .setTitle('COMANDOS')
            .setURL('https://tenor.com/view/monkiflip-monki-flip-monkey-monkeyflip-gif-18149687')
            .setAuthor({ name: 'ARTILLERIA', iconURL: 'https://i.imgur.com/Ia3Ncak.png', url: 'https://i.imgur.com/Ia3Ncak.png' })
           //  .setThumbnail('https://i.imgur.com/sJfcKKs.png')
            .addFields(
                { name: '!help', value: 'Para saber como usar el comando !mlrs' },
                { name: '!bot', value: 'Para ver el estado del bot' },
                { name: '!mlrs', value: 'Para saber la ELEVACION, ETA y CARGA' }
                )
            .setTimestamp();
            // .setFooter({ text: 'NOLEVANTA BOT', iconURL: 'https://i.imgur.com/Ia3Ncak.png' });
        channel.send({ embeds: [exampleEmbed] });
         } 
    
 
});

client.once('ready', () => {
    console.log('Ready')
    const channel = client.channels.cache.get(tests);
    const exampleEmbed = new MessageEmbed()
        .setColor('#04FF00')   
        .setTitle('BOT FUNCIONANDO')
        .setAuthor({ name: 'NOLEVANTA ', iconURL: 'https://i.imgur.com/Ia3Ncak.png', url: 'https://i.imgur.com/Ia3Ncak.png' })
    channel.send({ embeds: [exampleEmbed]});
});

client.login(token);
