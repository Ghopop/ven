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
            if (nsfw) {
                response = await fetch(`https://api.waifu.pics/nsfw/blowjob`).then(res => res.json());
            } else {
                response = await fetch(`https://api.waifu.pics/sfw/waifu`).then(res => res.json());
            }

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [{
                    type: "rich",
                    title: "Here's your image",
                    image: {
                        url: response?.url,
                        width: 500, // You may need to adjust these values
                        height: 500
                    },
                    color: "0xf4b8e4"
                }])
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: response?.link
                })
            }

        } catch (err) {
            logger.log(err);
            sendReply(ctx.channel.id, "ERROR !!!!!!!!!!!! 😭😭😭 Check debug logs!! 🥺🥺🥺", [])
        }
    }
}))

export const onUnload = () => {
    for (const unregisterCommands of commands) unregisterCommands()
}
