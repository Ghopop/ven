(function(d,c,u){"use strict";const o=u.findByProps("sendMessage","receiveMessage"),y=u.findByProps("getLastSelectedChannelId"),h=u.findByProps("createBotMessage"),f=u.findByProps("BOT_AVATARS");function a(s,t,i){const n=s??y?.getChannelId?.(),e=h.createBotMessage({channelId:n,content:"",embeds:i});e.author.username="Astolfo",e.author.avatar="Astolfo",f.BOT_AVATARS.Astolfo="https://i.pinimg.com/736x/50/77/1f/50771f45b1c015cfbb8b0853ba7b8521.jpg",typeof t=="string"?e.content=t:Object.assign(e,t),o.receiveMessage(n,e)}let r=[];r.push(c.registerCommand({name:"solo",displayName:"solo",description:"Get a gif of a Solo Lewd ;)",displayDescription:"Get a gif of a Solo Lewd ;)",options:[{name:"nsfw",displayName:"nsfw",description:"Get the result from NSFW API",displayDescription:"Get the result from NSFW API",required:!1,type:5},{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(l){return l.name==="nsfw"})?.value,n=s.find(function(l){return l.name==="silent"})?.value,e,p;i?(e=await fetch("https://purrbot.site/api/img/nsfw/solo/gif").then(function(l){return l.json()}),p=e.link):(e=await fetch("https://api.waifu.pics/sfw/waifu").then(function(l){return l.json()}),p=e.url),p?n??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your image",image:{url:p,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:p}):(console.log("URL is undefined"),a(t.channel.id,"ERROR !!!!!!!!!!!! \u{1F62D}\u{1F62D}\u{1F62D} URL is undefined!! \u{1F97A}\u{1F97A}\u{1F97A}",[]))}catch(i){console.log(i),a(t.channel.id,"ERROR !!!!!!!!!!!! \u{1F62D}\u{1F62D}\u{1F62D} Check debug logs!! \u{1F97A}\u{1F97A}\u{1F97A}",[])}}})),r.push(c.registerCommand({name:"hug",displayName:"hug",description:"Get a SFW hug gif",displayDescription:"Get a SFW hug gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/hug").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your hug gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"bite",displayName:"bite",description:"Get a SFW bite gif",displayDescription:"Get a SFW bite gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/bite").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your bite gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"angry",displayName:"angry",description:"Get a SFW angry gif",displayDescription:"Get a SFW angry gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/angry").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your angry gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"blush",displayName:"blush",description:"Get a SFW blush gif",displayDescription:"Get a SFW blush gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/blush").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your blush gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"comfy",displayName:"comfy",description:"Get a SFW comfy gif",displayDescription:"Get a SFW comfy gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/comfy").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your comfy gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"cry",displayName:"cry",description:"Get a SFW cry gif",displayDescription:"Get a SFW cry gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/cry").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your cry gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"tail",displayName:"tail",description:"Get a SFW tail gif",displayDescription:"Get a SFW tail gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/tail").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your tail gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"cuddle",displayName:"cuddle",description:"Get a SFW cuddle gif",displayDescription:"Get a SFW cuddle gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/cuddle").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your cuddle gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"dance",displayName:"dance",description:"Get a SFW dance gif",displayDescription:"Get a SFW dance gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/dance").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your dance gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"fluff",displayName:"fluff",description:"Get a SFW fluff gif",displayDescription:"Get a SFW fluff gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/fluff").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your fluff gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"pat",displayName:"pat",description:"Get a SFW pat gif",displayDescription:"Get a SFW pat gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/pat").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your pat gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}})),r.push(c.registerCommand({name:"pout",displayName:"pout",description:"Get a SFW pout gif",displayDescription:"Get a SFW pout gif",options:[{name:"silent",displayName:"silent",description:"Makes it so only you can see the message.",displayDescription:"Makes it so only you can see the message.",required:!1,type:5}],applicationId:"-1",inputType:1,type:1,execute:async function(s,t){try{let i=s.find(function(e){return e.name==="silent"})?.value,n=(await fetch("https://purrbot.site/api/list/sfw/pout").then(function(e){return e.json()})).url;i??!0?a(t.channel.id,"",[{type:"rich",title:"Here's your pout gif",image:{url:n,width:500,height:500},color:"0xf4b8e4"}]):o.sendMessage(t.channel.id,{content:n})}catch(i){console.error(i),a(t.channel.id,"ERROR: Check debug logs!",[])}}}));const g=function(){for(const s of r)s()};return d.onUnload=g,d})({},vendetta.commands,vendetta.metro);
