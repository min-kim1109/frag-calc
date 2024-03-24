const { Client, GatewayIntentBits, REST, Routes, EmbedBuilder } = require('discord.js');
const { token, clientId, guildIds } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const rest = new REST({ version: '10' }).setToken(token);

    for (const guildId of guildIds) {
        try {
            console.log(`Started refreshing application (/) commands for guild ${guildId}.`);

            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                {
                    body: [
                        {
                            // GENERAL CALCULATE COMMAND
                            name: 'calculate',
                            description: 'Calculate the total fragments based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'origin',
                                    description: 'The level of the skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mastery_hexa',
                                    description: 'The level of the mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'enhance-1',
                                    description: 'The level of the first enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'enhance-2',
                                    description: 'The level of the second enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'enhance-3',
                                    description: 'The level of the third enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'enhance-4',
                                    description: 'The level of the fourth enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },
                            ],

                        },
                        {
                            // DEMON SLAYER CALCULATOR
                            name: 'calc-ds',
                            description: 'Calculate the total fragments for a Demon Slayer based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'nightmare',
                                    description: 'The level of the Nightmare skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-impact',
                                    description: 'The level of the Hexa Impact mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'awakening',
                                    description: 'The level of the Demon Awakening enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'snake',
                                    description: 'The level of the Spirit of Rage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'orthrus',
                                    description: 'The level of the Orthrus enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bane',
                                    description: 'The level of the Demon Bane enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // DAWN WARRIOR CALCULATOR
                            name: 'calc-dw',
                            description: 'Calculate the total fragments for a Dawn Warrior based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'astral-blitz',
                                    description: 'The level of the Astral Blitz skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-slash',
                                    description: 'The level of the Hexa Solar Slash/Lunar Divide mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'rift',
                                    description: 'The level of the Rift of Damnation enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'cosmos',
                                    description: 'The level of the Cosmos enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'flare-slash',
                                    description: 'The level of the Flare Slash enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'soul-eclipse',
                                    description: 'The level of the Soul Eclipse enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // ADELE CALCULATOR
                            name: 'calc-adele',
                            description: 'Calculate the total fragments for a Adele based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'maestro',
                                    description: 'The level of the Maestro skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-cleave',
                                    description: 'The level of the Hexa Cleave mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'infinity',
                                    description: 'The level of the Infinity Blade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'legacy-restoration',
                                    description: 'The level of the Legacy Restoration enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'storm',
                                    description: 'The level of the Storm enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'ruin',
                                    description: 'The level of the Ruin enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // SHADOWER CALCULATOR
                            name: 'calc-shadower',
                            description: 'Calculate the total fragments for a Shadower based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'halve-cut',
                                    description: 'The level of the Halve Cut skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-assassinate',
                                    description: 'The level of the Hexa Assassinate mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sonic-blow',
                                    description: 'The level of the Sonic Blow enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'ssf',
                                    description: 'The level of the Slash Shadow Formation enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'trickblade',
                                    description: 'The level of the Trickblade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shadow-assault',
                                    description: 'The level of the Shadow Assault enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // NW Calc
                            name: 'calc-nw',
                            description: 'Calculate the total fragments for a Nightwalker based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'silence',
                                    description: 'The level of the Halve Cut skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-quint',
                                    description: 'The level of the Hexa Assassinate mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shadow-spear',
                                    description: 'The level of the Shadow Spear enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'gds',
                                    description: 'The level of the Greater Dark Servant enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bite',
                                    description: 'The level of the Shadow Bite enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'rapid-throw',
                                    description: 'The level of the Rapid Throw enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // Bishop Calc
                            name: 'calc-bishop',
                            description: 'Calculate the total fragments for a Bishop based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'holy-advent',
                                    description: 'The level of the Holy Advent skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-angelray',
                                    description: 'The level of the Hexa Angel Ray mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'divine-punishment',
                                    description: 'The level of the Divine Punishment enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'benediction',
                                    description: 'The level of the Benediction enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'angel-balance',
                                    description: 'The level of the Angel of Balance enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'peacemaker',
                                    description: 'The level of the Peacemaker enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },

                        {
                            // Hero Calc
                            name: 'calc-hero',
                            description: 'Calculate the total fragments for a Bishop based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'spirit-calibur',
                                    description: 'The level of the Spirit Calibur skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-ragingblow',
                                    description: 'The level of the Hexa Raging Blow mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bsb',
                                    description: 'The level of the Burning Soul Blade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'worldreaver',
                                    description: 'The level of the World Reaver enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'instinctual-combo',
                                    description: 'The level of the Instinctual Combo enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sword-illusion',
                                    description: 'The level of the Sword Illusion enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // NL Calc
                            name: 'calc-nl',
                            description: 'Calculate the total fragments for a Night Lord based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'life-death',
                                    description: 'The level of the Life and Death skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-quad',
                                    description: 'The level of the Hexa Quad Star mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'throw-blasting',
                                    description: 'The level of the Throw Blasting enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'omen',
                                    description: 'The level of the Dark Lords Omen enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shurrikane',
                                    description: 'The level of the Shurrikane enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'barrage',
                                    description: 'The level of the Throwing Star Barrage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // Bowmaster Calc
                            name: 'calc-bowmaster',
                            description: 'Calculate the total fragments for a Bowmaster based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'ascendant-shadow',
                                    description: 'The level of the Ascendant Shadow skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-hurricane',
                                    description: 'The level of the Hexa Hurricane mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'storm-arrows',
                                    description: 'The level of the Storm of Arrows enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'inhuman-speed',
                                    description: 'The level of the Inhuman Speed enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'quiver-barrage',
                                    description: 'The level of the Quiver Barrage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mirage',
                                    description: 'The level of the Silhouette Mirage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // Shade calc
                            name: 'calc-shade',
                            description: 'Calculate the total fragments for a Shade based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'advent-fox',
                                    description: 'The level of the Advent of the Fox skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-spiritclaw',
                                    description: 'The level of the Hexa Spirit Claw mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'spirit-flow',
                                    description: 'The level of the Spirit Flow enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'spiritgate',
                                    description: 'The level of the Spiritgate enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'tsc',
                                    description: 'The level of the True Spirit Claw enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'multipunch',
                                    description: 'The level of the Smashing Multipunch enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // bucc calc
                            name: 'calc-bucc',
                            description: 'Calculate the total fragments for a Buccaneer based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'unleash-neptunus',
                                    description: 'The level of the Unleash Neptunus skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-octopunch',
                                    description: 'The level of the Hexa Octopunch mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lightning-form',
                                    description: 'The level of the Lightning Form enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lotd',
                                    description: 'The level of the Lord of the Deep enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'serpent-vortex',
                                    description: 'The level of the Serpent Vortex enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'howling-fist',
                                    description: 'The level of the Howling Fist enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },
                        {
                            // bucc calc
                            name: 'calc-wa',
                            description: 'Calculate the total fragments for a Wind Archer based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'mistral-spring',
                                    description: 'The level of the Mistral Spring skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-soh',
                                    description: 'The level of the Hexa Song of Heaven mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'howling-gale',
                                    description: 'The level of the Howling Gale enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'merciless-winds',
                                    description: 'The level of the Merciless Winds enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'gale-barrier',
                                    description: 'The level of the Gale Barrier enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'vortex-sphere',
                                    description: 'The level of the Vortex Sphere enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexastat',
                                    description: 'Amount of fragments farmed for hexastat',
                                    required: false,
                                },
                                {
                                    type: 4,
                                    name: 'unused-frags',
                                    description: 'Unused fragments in inventory',
                                    required: false,
                                },

                            ],
                        },

                    ],
                }
            );

            console.log(`Successfully reloaded application (/) commands for guild ${guildId}.`);
        } catch (error) {
            console.error(`Failed to reload application (/) commands for guild ${guildId}:`, error);
        }
    }
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    // GENERAL CALCULATE COMMAND
    if (commandName === 'calculate') {
        await interaction.deferReply();

        const skillLevel = options.getInteger('origin');
        const masteryLevel = options.getInteger('mastery_hexa');
        const enhancementLevels = [
            options.getInteger('enhance-1'),
            options.getInteger('enhance-2'),
            options.getInteger('enhance-3'),
            options.getInteger('enhance-4')
        ];
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;
        const result = calculateFragments(skillLevel, masteryLevel, enhancementLevels, hexastat, unusedFrags);


        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Fragments Calculation')
            .setDescription('Here are the results of your calculation:')
            .setThumbnail('https://i.imgur.com/Fl0Uwfe.gif')
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },

                {
                    name: 'Details', value:
                        `**Origin (Skill Core)**\nLvl: ${skillLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa (Mastery Core)**\nLvl: ${masteryLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        enhancementLevels.map((level, index) =>
                            `**Enhance-${index + 1} (Enhancement Core)**\nLvl: ${level} | Frags: ${result.enhancementFragmentsArray[index]} | Progress: ${result.enhancementProgressArray[index].toFixed(2)}%`
                        ).join('\n\n')
                    , inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // DS CALC COMMAND
    if (commandName === 'calc-ds') {
        await interaction.deferReply();

        const nightmareLevel = options.getInteger('nightmare');
        const hexaImpactLevel = options.getInteger('hexa-impact');
        const awakeningLevel = options.getInteger('awakening');
        const snakeLevel = options.getInteger('snake');
        const orthrusLevel = options.getInteger('orthrus');
        const baneLevel = options.getInteger('bane');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;


        const enhancementLevels = [awakeningLevel, snakeLevel, orthrusLevel, baneLevel];
        const result = calculateFragments(nightmareLevel, hexaImpactLevel, enhancementLevels, hexastat, unusedFrags);


        const embed = new EmbedBuilder()
            .setColor('#730B90')
            .setTitle('Demon Slayer Fragments Calculation')
            .setDescription('Here are the results of your Demon Slayer calculation:')
            .setThumbnail('https://i.imgur.com/c7dFpo8.png')
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Nightmare (Skill Core)**\nLvl: ${nightmareLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa-Impact (Mastery Core)**\nLvl: ${hexaImpactLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Awakening (Enhancement Core)**\nLvl: ${awakeningLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Spirit of Rage (Enhancement Core)**\nLvl: ${snakeLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Orthrus (Enhancement Core)**\nLvl: ${orthrusLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Demon Bane (Enhancement Core)**\nLvl: ${baneLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // DW CALC COMMAND
    if (commandName === 'calc-dw') {
        await interaction.deferReply();

        const astralBlitzLevel = options.getInteger('astral-blitz');
        const hexaSlashLevel = options.getInteger('hexa-slash');
        const riftLevel = options.getInteger('rift');
        const cosmosLevel = options.getInteger('cosmos');
        const flareSlashLevel = options.getInteger('flare-slash');
        const soulEclipseLevel = options.getInteger('soul-eclipse');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [riftLevel, cosmosLevel, flareSlashLevel, soulEclipseLevel];
        const result = calculateFragments(astralBlitzLevel, hexaSlashLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#EECC8F')
            .setTitle('Dawn Warrior Fragments Calculation')
            .setDescription('Here are the results of your Dawn Warrior calculation:')
            .setThumbnail('https://i.imgur.com/NacjCBA.png')
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Astral Blitz (Skill Core)**\nLvl: ${astralBlitzLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Slash (Mastery Core)**\nLvl: ${hexaSlashLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Rift of Damnation (Enhancement Core)**\nLvl: ${riftLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Cosmos (Enhancement Core)**\nLvl: ${cosmosLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Flare Slash (Enhancement Core)**\nLvl: ${flareSlashLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Soul Eclipse (Enhancement Core)**\nLvl: ${soulEclipseLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // ADELE CALC COMMAND
    if (commandName === 'calc-adele') {
        await interaction.deferReply();

        const maestroLevel = options.getInteger('maestro');
        const hexaCleaveLevel = options.getInteger('hexa-cleave');
        const infinityLevel = options.getInteger('infinity');
        const legacyRestorationLevel = options.getInteger('legacy-restoration');
        const stormLevel = options.getInteger('storm');
        const ruinLevel = options.getInteger('ruin');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [infinityLevel, legacyRestorationLevel, stormLevel, ruinLevel];
        const result = calculateFragments(maestroLevel, hexaCleaveLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#9ADAF0')
            .setTitle('Adele Fragments Calculation')
            .setDescription('Here are the results of your Adele calculation:')
            .setThumbnail('https://i.imgur.com/9WUi9P5.png')
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Maestro (Skill Core)**\nLvl: ${maestroLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Cleave (Mastery Core)**\nLvl: ${hexaCleaveLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Infinity Blade (Enhancement Core)**\nLvl: ${infinityLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Legacy Restoration (Enhancement Core)**\nLvl: ${legacyRestorationLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Storm (Enhancement Core)**\nLvl: ${stormLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Ruin (Enhancement Core)**\nLvl: ${ruinLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // SHADOWER CALC COMMAND
    if (commandName === 'calc-shadower') {
        await interaction.deferReply();

        const halveCutLevel = options.getInteger('halve-cut');
        const hexaAssassinateLevel = options.getInteger('hexa-assassinate');
        const sonicBlowLevel = options.getInteger('sonic-blow');
        const ssfLevel = options.getInteger('ssf');
        const trickbladeLevel = options.getInteger('trickblade');
        const shadowAssaultLevel = options.getInteger('shadow-assault');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [sonicBlowLevel, ssfLevel, trickbladeLevel, shadowAssaultLevel];
        const result = calculateFragments(halveCutLevel, hexaAssassinateLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#863022')
            .setTitle('Shadower Fragments Calculation')
            .setDescription('Here are the results of your Shadower calculation:')
            .setThumbnail('https://i.imgur.com/4tKb6F4.png') // Assuming a generic thumbnail for now
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Halve Cut (Skill Core)**\nLvl: ${halveCutLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Assassinate (Mastery Core)**\nLvl: ${hexaAssassinateLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Sonic Blow (Enhancement Core)**\nLvl: ${sonicBlowLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Slash Shadow Formation (Enhancement Core)**\nLvl: ${ssfLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Trickblade (Enhancement Core)**\nLvl: ${trickbladeLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Shadow Assault (Enhancement Core)**\nLvl: ${shadowAssaultLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // NW CALC COMMAND
    if (commandName === 'calc-nw') {
        await interaction.deferReply();

        const silenceLevel = options.getInteger('silence');
        const hexaQuintLevel = options.getInteger('hexa-quint');
        const shadowSpearLevel = options.getInteger('shadow-spear');
        const gdsLevel = options.getInteger('gds');
        const biteLevel = options.getInteger('bite');
        const rapidThrowLevel = options.getInteger('rapid-throw');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [shadowSpearLevel, gdsLevel, biteLevel, rapidThrowLevel];
        const result = calculateFragments(silenceLevel, hexaQuintLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#485069')
            .setTitle('Nightwalker Fragments Calculation')
            .setDescription('Here are the results of your Nightwalker calculation:')
            .setThumbnail('https://i.imgur.com/zO5ntfv.png') // Assuming you use a generic thumbnail for now
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Silence (Skill Core)**\nLvl: ${silenceLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa-Quint (Mastery Core)**\nLvl: ${hexaQuintLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Shadow Spear (Enhancement Core)**\nLvl: ${shadowSpearLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Greater Dark Servant (Enhancement Core)**\nLvl: ${gdsLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Shadow Bite (Enhancement Core)**\nLvl: ${biteLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Rapid Throw (Enhancement Core)**\nLvl: ${rapidThrowLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // CALC BISHOP
    if (commandName === 'calc-bishop') {
        await interaction.deferReply();

        const holyAdventLevel = options.getInteger('holy-advent');
        const hexaAngelRayLevel = options.getInteger('hexa-angelray');
        const divinePunishmentLevel = options.getInteger('divine-punishment');
        const benedictionLevel = options.getInteger('benediction');
        const angelBalanceLevel = options.getInteger('angel-balance');
        const peacemakerLevel = options.getInteger('peacemaker');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [divinePunishmentLevel, benedictionLevel, angelBalanceLevel, peacemakerLevel];
        const result = calculateFragments(holyAdventLevel, hexaAngelRayLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#F7D482')
            .setTitle('Bishop Fragments Calculation')
            .setDescription('Here are the results of your Bishop calculation:')
            .setThumbnail('https://i.imgur.com/2DirFfh.png') // Use a relevant thumbnail
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Holy Advent (Skill Core)**\nLvl: ${holyAdventLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Angel Ray (Mastery Core)**\nLvl: ${hexaAngelRayLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Divine Punishment (Enhancement Core)**\nLvl: ${divinePunishmentLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Benediction (Enhancement Core)**\nLvl: ${benedictionLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Angel of Balance (Enhancement Core)**\nLvl: ${angelBalanceLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Peacemaker (Enhancement Core)**\nLvl: ${peacemakerLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }
    // calc hero
    if (commandName === 'calc-hero') {
        await interaction.deferReply();

        const spiritCaliburLevel = options.getInteger('spirit-calibur');
        const hexaRagingBlowLevel = options.getInteger('hexa-ragingblow');
        const bsbLevel = options.getInteger('bsb');
        const worldreaverLevel = options.getInteger('worldreaver');
        const instinctualComboLevel = options.getInteger('instinctual-combo');
        const swordIllusionLevel = options.getInteger('sword-illusion');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [bsbLevel, worldreaverLevel, instinctualComboLevel, swordIllusionLevel];
        const result = calculateFragments(spiritCaliburLevel, hexaRagingBlowLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#C09B83')
            .setTitle('Hero Fragments Calculation')
            .setDescription('Here are the results of your Hero calculation:')
            .setThumbnail('https://i.imgur.com/rzBENa3.png') // Use a relevant thumbnail for Hero
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Spirit Calibur (Skill Core)**\nLvl: ${spiritCaliburLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Raging Blow (Mastery Core)**\nLvl: ${hexaRagingBlowLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Burning Soul Blade (Enhancement Core)**\nLvl: ${bsbLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**World Reaver (Enhancement Core)**\nLvl: ${worldreaverLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Instinctual Combo (Enhancement Core)**\nLvl: ${instinctualComboLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Sword Illusion (Enhancement Core)**\nLvl: ${swordIllusionLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // calc nl
    if (commandName === 'calc-nl') {
        await interaction.deferReply();

        const lifeDeathLevel = options.getInteger('life-death');
        const hexaQuadLevel = options.getInteger('hexa-quad');
        const throwBlastingLevel = options.getInteger('throw-blasting');
        const omenLevel = options.getInteger('omen');
        const shurrikaneLevel = options.getInteger('shurrikane');
        const barrageLevel = options.getInteger('barrage');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [throwBlastingLevel, omenLevel, shurrikaneLevel, barrageLevel];
        const result = calculateFragments(lifeDeathLevel, hexaQuadLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#4E3A70')
            .setTitle('Night Lord Fragments Calculation')
            .setDescription('Here are the results of your Night Lord calculation:')
            .setThumbnail('https://i.imgur.com/184Z3oa.png') // Consider using a relevant thumbnail for Night Lord
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Life and Death (Skill Core)**\nLvl: ${lifeDeathLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Quad Star (Mastery Core)**\nLvl: ${hexaQuadLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Throw Blasting (Enhancement Core)**\nLvl: ${throwBlastingLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Dark Lords Omen (Enhancement Core)**\nLvl: ${omenLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Shurrikane (Enhancement Core)**\nLvl: ${shurrikaneLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Throwing Star Barrage (Enhancement Core)**\nLvl: ${barrageLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-bowmaster') {
        await interaction.deferReply();

        const ascendantShadowLevel = options.getInteger('ascendant-shadow');
        const hexaHurricaneLevel = options.getInteger('hexa-hurricane');
        const stormArrowsLevel = options.getInteger('storm-arrows');
        const inhumanSpeedLevel = options.getInteger('inhuman-speed');
        const quiverBarrageLevel = options.getInteger('quiver-barrage');
        const mirageLevel = options.getInteger('mirage');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [stormArrowsLevel, inhumanSpeedLevel, quiverBarrageLevel, mirageLevel];
        const result = calculateFragments(ascendantShadowLevel, hexaHurricaneLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#4FEAEA')
            .setTitle('Bowmaster Fragments Calculation')
            .setDescription('Here are the results of your Bowmaster calculation:')
            .setThumbnail('https://i.imgur.com/9EpHZCZ.png') // Consider using a relevant thumbnail for Bowmaster
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Ascendant Shadow (Skill Core)**\nLvl: ${ascendantShadowLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Hurricane (Mastery Core)**\nLvl: ${hexaHurricaneLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Storm of Arrows (Enhancement Core)**\nLvl: ${stormArrowsLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Inhuman Speed (Enhancement Core)**\nLvl: ${inhumanSpeedLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Quiver Barrage (Enhancement Core)**\nLvl: ${quiverBarrageLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Silhouette Mirage (Enhancement Core)**\nLvl: ${mirageLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // calc shade
    if (commandName === 'calc-shade') {
        await interaction.deferReply();

        const adventFoxLevel = options.getInteger('advent-fox');
        const hexaSpiritClawLevel = options.getInteger('hexa-spiritclaw');
        const spiritFlowLevel = options.getInteger('spirit-flow');
        const spiritgateLevel = options.getInteger('spiritgate');
        const tscLevel = options.getInteger('tsc');
        const multipunchLevel = options.getInteger('multipunch');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [spiritFlowLevel, spiritgateLevel, tscLevel, multipunchLevel];
        const result = calculateFragments(adventFoxLevel, hexaSpiritClawLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#88FFD3')
            .setTitle('Shade Fragments Calculation')
            .setDescription('Here are the results of your Shade calculation:')
            .setThumbnail('https://i.imgur.com/5gf4OBK.png') // Consider using a relevant thumbnail for Shade
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Advent of the Fox (Skill Core)**\nLvl: ${adventFoxLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Spirit Claw (Mastery Core)**\nLvl: ${hexaSpiritClawLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Spirit Flow (Enhancement Core)**\nLvl: ${spiritFlowLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Spiritgate (Enhancement Core)**\nLvl: ${spiritgateLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**True Spirit Claw (Enhancement Core)**\nLvl: ${tscLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Smashing Multipunch (Enhancement Core)**\nLvl: ${multipunchLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // calc shade
    if (commandName === 'calc-shade') {
        await interaction.deferReply();

        const adventFoxLevel = options.getInteger('advent-fox');
        const hexaSpiritClawLevel = options.getInteger('hexa-spiritclaw');
        const spiritFlowLevel = options.getInteger('spirit-flow');
        const spiritgateLevel = options.getInteger('spiritgate');
        const tscLevel = options.getInteger('tsc');
        const multipunchLevel = options.getInteger('multipunch');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [spiritFlowLevel, spiritgateLevel, tscLevel, multipunchLevel];
        const result = calculateFragments(adventFoxLevel, hexaSpiritClawLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#88FFD3')
            .setTitle('Shade Fragments Calculation')
            .setDescription('Here are the results of your Shade calculation:')
            .setThumbnail('https://i.imgur.com/5gf4OBK.png') // Consider using a relevant thumbnail for Shade
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Advent of the Fox (Skill Core)**\nLvl: ${adventFoxLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Spirit Claw (Mastery Core)**\nLvl: ${hexaSpiritClawLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Spirit Flow (Enhancement Core)**\nLvl: ${spiritFlowLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Spiritgate (Enhancement Core)**\nLvl: ${spiritgateLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**True Spirit Claw (Enhancement Core)**\nLvl: ${tscLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Smashing Multipunch (Enhancement Core)**\nLvl: ${multipunchLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // bucc calc
    if (commandName === 'calc-bucc') {
        await interaction.deferReply();

        const unleashNeptunusLevel = options.getInteger('unleash-neptunus');
        const hexaOctopunchLevel = options.getInteger('hexa-octopunch');
        const lightningFormLevel = options.getInteger('lightning-form');
        const lotdLevel = options.getInteger('lotd');
        const serpentVortexLevel = options.getInteger('serpent-vortex');
        const howlingFistLevel = options.getInteger('howling-fist');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [lightningFormLevel, lotdLevel, serpentVortexLevel, howlingFistLevel];
        const result = calculateFragments(unleashNeptunusLevel, hexaOctopunchLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#0662FC')
            .setTitle('Buccaneer Fragments Calculation')
            .setDescription('Here are the results of your Buccaneer calculation:')
            .setThumbnail('https://i.imgur.com/5FdxRcT.png') // Use a relevant thumbnail for Buccaneer
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Unleash Neptunus (Skill Core)**\nLvl: ${unleashNeptunusLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Octopunch (Mastery Core)**\nLvl: ${hexaOctopunchLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Lightning Form (Enhancement Core)**\nLvl: ${lightningFormLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Lord of the Deep (Enhancement Core)**\nLvl: ${lotdLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Serpent Vortex (Enhancement Core)**\nLvl: ${serpentVortexLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Howling Fist (Enhancement Core)**\nLvl: ${howlingFistLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // calc wa
    if (commandName === 'calc-wa') {
        await interaction.deferReply();

        const mistralSpringLevel = options.getInteger('mistral-spring');
        const hexaSohLevel = options.getInteger('hexa-soh');
        const howlingGaleLevel = options.getInteger('howling-gale');
        const mercilessWindsLevel = options.getInteger('merciless-winds');
        const galeBarrierLevel = options.getInteger('gale-barrier');
        const vortexSphereLevel = options.getInteger('vortex sphere');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [howlingGaleLevel, mercilessWindsLevel, galeBarrierLevel, vortexSphereLevel];
        const result = calculateFragments(mistralSpringLevel, hexaSohLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#CEFF94')
            .setTitle('Wind Archer Fragments Calculation')
            .setDescription('Here are the results of your Wind Archer calculation:')
            .setThumbnail('https://i.imgur.com/keDyarT.png') // Consider using a relevant thumbnail for Wind Archer
            .addFields(
                {
                    name: 'Summary',
                    value: `**Total Fragments**: ${result.totalFragments}\n` +
                        `**Overall Progress**: ${result.overallProgress.toFixed(2)}%\n` +
                        `**Unused Frags**: ${unusedFrags}\n` +
                        `**Hexastat Frags**: ${hexastat}`,
                    inline: false
                },
                {
                    name: '\u200B',
                    value: '_ _',
                    inline: false
                },
                {
                    name: 'Details', value:
                        `**Mistral Spring (Skill Core)**\nLvl: ${mistralSpringLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Song of Heaven (Mastery Core)**\nLvl: ${hexaSohLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Howling Gale (Enhancement Core)**\nLvl: ${howlingGaleLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Merciless Winds (Enhancement Core)**\nLvl: ${mercilessWindsLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Gale Barrier (Enhancement Core)**\nLvl: ${galeBarrierLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Vortex Sphere (Enhancement Core)**\nLvl: ${vortexSphereLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }


});

function calculateFragments(skillLevel, masteryLevel, enhancementLevels, hexastat = 0, unusedFrags = 0) {
    const coreData = {
        'Skill Core': [0, 30, 35, 40, 45, 50, 55, 60, 65, 200, 80, 90, 100, 110, 120, 130, 140, 150, 160, 350, 170, 180, 190, 200, 210, 220, 230, 240, 250, 500],
        'Mastery Core': [50, 15, 18, 20, 23, 25, 28, 30, 33, 100, 40, 45, 50, 55, 60, 65, 70, 75, 80, 175, 85, 90, 95, 100, 105, 110, 115, 120, 125, 250],
        'Enhancement Core': [75, 23, 27, 30, 34, 38, 42, 45, 49, 150, 60, 68, 75, 83, 90, 98, 105, 113, 120, 263, 128, 135, 143, 150, 158, 165, 173, 180, 188, 375]
    };


    const sumUpTo = (array, index) => array.slice(0, index).reduce((acc, val) => acc + val, 0);


    const totalSum = (array) => sumUpTo(array, array.length);

    const skillFragments = sumUpTo(coreData['Skill Core'], skillLevel);
    const masteryFragments = sumUpTo(coreData['Mastery Core'], masteryLevel);
    const enhancementFragmentsArray = enhancementLevels.map(level => sumUpTo(coreData['Enhancement Core'], level));

    const skillProgress = (skillFragments / totalSum(coreData['Skill Core'])) * 100;
    const masteryProgress = (masteryFragments / totalSum(coreData['Mastery Core'])) * 100;
    const enhancementProgressArray = enhancementFragmentsArray.map(frag => (frag / totalSum(coreData['Enhancement Core'])) * 100);

    const totalFragments = skillFragments + masteryFragments + enhancementFragmentsArray.reduce((acc, val) => acc + val, 0) + unusedFrags + hexastat;


    const totalMaxFragments = totalSum(coreData['Skill Core']) + totalSum(coreData['Mastery Core']) + totalSum(coreData['Enhancement Core']) * 4;
    const overallProgress = (totalFragments / totalMaxFragments) * 100;

    return {
        overallProgress,
        totalFragments,
        skillFragments,
        masteryFragments,
        enhancementFragmentsArray,
        skillProgress,
        masteryProgress,
        enhancementProgressArray
    };
}
