// This is a slight modified version of the femboy plugin created by sdh.
import { registerCommand } from "@vendetta/commands";
import { logger } from "@vendetta";
import Settings from "./settings";
import { storage } from "@vendetta/plugin";

const MessageActions = findByProps("sendMessage", "receiveMessage");
const Channels = findByProps('getLastSelectedChannelId');
const BotMessage = findByProps('createBotMessage');
const Avatars = findByProps("BOT_AVATARS");

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

let commands = [];

commands.push(registerCommand({
    name: "kitsune",
    displayName: "kitsune",
    description: "Get an image of a kitsune or of a solo (NSFW)",
    displayDescription: "Get an image of a kitsune or of a solo (NSFW)",
    options: [
        {
            name: "nsfw",
            displayName: "nsfw",
            description: "Get NSFW image",
            displayDescription: "Get NSFW image",
            required: false,
            type: 5
        },
        {
            name: "silent",
            displayName: "silent",
            description: "Makes it so only you can see the message.",
            displayDescription: "Makes it so only you can see the message.",
            required: false,
            type: 5
        }
    ],
    applicationId: "-1",
    inputType: 1,
    type: 1,
    execute: async (args, ctx) => {
        try {
            let nsfw = args.find(arg => arg.name === "nsfw")?.value;
            let silent = args.find(arg => arg.name === "silent")?.value;
            let imageUrl = "";

            if (!nsfw) {
                imageUrl = "https://purrbot.site/api/img/sfw/kitsune/img";
            } else {
                imageUrl = "https://purrbot.site/api/img/nsfw/solo/gif";
            }

            if (silent ?? true) {
                sendReply(ctx.channel.id, "", [
                    {
                        type: "rich",
                        image: {
                            url: imageUrl
                        },
                        color: "0xf4b8e4"
                    }
                ]);
            } else {
                MessageActions.sendMessage(ctx.channel.id, {
                    content: imageUrl
                });
            }
        } catch (err) {
            logger.log(err);
            sendReply(ctx.channel.id, "ERROR !!!!!!!!!!!! 😭😭😭 Check debug logs!! 🥺🥺🥺", []);
        }
    }
}));

export const settings = Settings;

export const onLoad = () => {
    // Add any necessary initialization logic
};

export const onUnload = () => {
    for (const unregisterCommands of commands) unregisterCommands();
};