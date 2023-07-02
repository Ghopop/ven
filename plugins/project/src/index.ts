// Inspired by the ILoveFemboys Plugin
import { registerCommand } from "@vendetta/commands"
import { findByProps } from "@vendetta/metro"

const MessageActions = findByProps("sendMessage", "receiveMessage")
const Channels = findByProps('getLastSelectedChannelId')
const BotMessage = findByProps('createBotMessage')
const Avatars = findByProps("BOT_AVATARS")

function sendReply(channelID, content, embed) {
    const channel = channelID ?? Channels?.getChannelId?.();
    const msg = BotMessage.createBotMessage({ channelId: channel, content: '', embeds: embed });
    msg.author.username = 'Astolfo';
    msg.author.avatar = 'Astolfo';
    Avatars.BOT_AVATARS.Astolfo = 'https://i.pinimg.com/736x/50/77/1f/50771f45b1c015cfbb8b0853ba7b8521.jpg';

    if (typeof content === 'string') {
        msg.content = content;
    } else {
        Object.assign(msg, content);
    }

    MessageActions.receiveMessage(channel, msg);
}

let commands = []

commands.push(registerCommand({
    name: "solo",
    displayName: "solo",
    description: "Get a gif of a Solo Lewd ;)",
    displayDescription: "Get a gif of a Solo Lewd ;)",
    options: [{
        name: "nsfw",
        displayName: "nsfw",
        description: "Get the result from NSFW API",
        displayDescription: "Get the result from NSFW API",
        required: false,
        type: 5
    }, {
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
execute: async (args, ctx) => {
    try {
        let nsfw = args.find(arg => arg.name === "nsfw")?.value
        let silent = args.find(arg => arg.name === "silent")?.value

        let response;
        let url;
        if (nsfw) {
            response = await fetch(`https://purrbot.site/api/img/nsfw/solo/gif`).then(res => res.json());
            url = response.link;
        } else {
            response = await fetch(`https://api.waifu.pics/sfw/waifu`).then(res => res.json());
            url = response.url;
        }

        // Check if url is not undefined
        if (url) {
            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your image",
                    image: {
                        url: url,
                        width: 500, // You may need to adjust these values
                        height: 500
                    },
                    color: "0xf4b8e4"
                }])
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                })
            }
        } else {
            // Handle the case where url is undefined
            console.log('URL is undefined');
            sendReply(ctx.channel.id, "ERROR !!!!!!!!!!!! 😭😭😭 URL is undefined!! 🥺🥺🥺", [])
        }

    } catch (err) {
        console.log(err);
        sendReply(ctx.channel.id, "ERROR !!!!!!!!!!!! 😭😭😭 Check debug logs!! 🥺🥺🥺", [])
    }
}

}));

// For 'hug' action
commands.push(registerCommand({
    name: "hug",
    displayName: "hug",
    description: "Get a SFW hug gif or img",
    displayDescription: "Get a SFW hug gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/hug`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your hug gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'bite' action
commands.push(registerCommand({
    name: "bite",
    displayName: "bite",
    description: "Get a SFW bite gif or img",
    displayDescription: "Get a SFW bite gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/bite`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your bite gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'angry' action
commands.push(registerCommand({
    name: "angry",
    displayName: "angry",
    description: "Get a SFW angry gif or img",
    displayDescription: "Get a SFW angry gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/angry`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your angry gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'blush' action
commands.push(registerCommand({
    name: "blush",
    displayName: "blush",
    description: "Get a SFW blush gif or img",
    displayDescription: "Get a SFW blush gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/blush`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your blush gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'comfy' action
commands.push(registerCommand({
    name: "comfy",
    displayName: "comfy",
    description: "Get a SFW comfy gif or img",
    displayDescription: "Get a SFW comfy gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/comfy`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your comfy gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'cry' action
commands.push(registerCommand({
    name: "cry",
    displayName: "cry",
    description: "Get a SFW cry gif or img",
    displayDescription: "Get a SFW cry gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/cry`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your cry gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'tail' action
commands.push(registerCommand({
    name: "tail",
    displayName: "tail",
    description: "Get a SFW tail gif or img",
    displayDescription: "Get a SFW tail gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/tail`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your tail gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));
// For 'cuddle' action
commands.push(registerCommand({
    name: "cuddle",
    displayName: "cuddle",
    description: "Get a SFW cuddle gif or img",
    displayDescription: "Get a SFW cuddle gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/cuddle`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your cuddle gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'dance' action
commands.push(registerCommand({
    name: "dance",
    displayName: "dance",
    description: "Get a SFW dance gif or img",
    displayDescription: "Get a SFW dance gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/dance`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your dance gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'fluff' action
commands.push(registerCommand({
    name: "fluff",
    displayName: "fluff",
    description: "Get a SFW fluff gif or img",
    displayDescription: "Get a SFW fluff gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/fluff`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your fluff gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'pat' action
commands.push(registerCommand({
    name: "pat",
    displayName: "pat",
    description: "Get a SFW pat gif or img",
    displayDescription: "Get a SFW pat gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/pat`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your pat gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}));

// For 'pat' action
commands.push(registerCommand({
    name: "pat",
    displayName: "pat",
    description: "Get a SFW pat gif or img",
    displayDescription: "Get a SFW pat gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/pat`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your pat gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}))

// For 'pout' action
commands.push(registerCommand({
    name: "pout",
    displayName: "pout",
    description: "Get a SFW pat gif or img",
    displayDescription: "Get a SFW pat gif or img",
    options: [{
        name: "silent",
        displayName: "silent",
        description: "Makes it so only you can see the message.",
        displayDescription: "Makes it so only you can see the message.",
        required: false,
        type: 5
    }],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let silent = args.find(arg => arg.name === "silent")?.value;
            let response = await fetch(`https://purrbot.site/api/list/sfw/pout`).then(res => res.json());
            let url = response.url;

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your pout gif",
                    image: {
                        url: url,
                        width: 500,
                        height: 500
                    },
                    color: "0xf4b8e4"
                }]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: url
                });
            }
        } catch (err) {
            console.error(err);
            sendReply(ctx.channel.id, "ERROR: Check debug logs!", []);
        }
    }
}))

export const onUnload = () => {
    for (const unregisterCommands of commands) unregisterCommands()
}
