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
                        {
                            // fire poison calc
                            name: 'calc-fp',
                            description: 'Calculate the total fragments for a Fire Poison based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'infernal-venom',
                                    description: 'The level of the Infernal Venom skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-flamesweep',
                                    description: 'The level of the Hexa Flame Sweep mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'dot-punisher',
                                    description: 'The level of the DoT Punisher enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'poison-nova',
                                    description: 'The level of the Poison Nova enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'elemental-fury',
                                    description: 'The level of the Elemental Fury enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'poison-chain',
                                    description: 'The level of the Poison Chain enhancement core',
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
                            // aran calc
                            name: 'calc-aran',
                            description: 'Calculate the total fragments for a Fire Poison based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'adrenaline-surge',
                                    description: 'The level of the Adrenaline Surge skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-beyondblade',
                                    description: 'The level of the Hexa Beyond Blade mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'fury',
                                    description: 'The level of the Mahas Fury enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'carnage',
                                    description: 'The level of the Mahas Carnage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'fenrir-crash',
                                    description: 'The level of the Fenrir Crash enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'blizzard-tempest',
                                    description: 'The level of the Blizzard Tempest enhancement core',
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
                            // kinesis calc
                            name: 'calc-kinesis',
                            description: 'Calculate the total fragments for a Kinesis based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'another-realm',
                                    description: 'The level of the From Another Realm skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-metalpress',
                                    description: 'The level of the Hexa Metal Press mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'psychic-tornado',
                                    description: 'The level of the Psychic Tornado enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mom',
                                    description: 'The level of the Ultimate - Mind Over Matter enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'psychic-shockwave',
                                    description: 'The level of the Ultimate - Psychic Shockwave enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'log',
                                    description: 'The level of the Law of Gravity enhancement core',
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
                            // i/l calc
                            name: 'calc-il',
                            description: 'Calculate the total fragments for a Ice Lightning based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'frozen-lightning',
                                    description: 'The level of the Frozen Lightning skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-chainlightning',
                                    description: 'The level of the Hexa Chain Lightning mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'ice-age',
                                    description: 'The level of the Ice Age enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sos',
                                    description: 'The level of the Spirit of Snow enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'jupiter-thunder',
                                    description: 'The level of the Jupiter Thunder enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bolt-barrage',
                                    description: 'The level of the Bolt Barrage enhancement core',
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
                            // pally calc
                            name: 'calc-paladin',
                            description: 'Calculate the total fragments for a Paladin based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'sacred-bastion',
                                    description: 'The level of the Sacred Bastion skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-blast',
                                    description: 'The level of the Hexa Blast/Divine Judgment mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'divine-echo',
                                    description: 'The level of the Divine Echo enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hotr',
                                    description: 'The level of the Hammers of the Righteous enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'grand-guardian',
                                    description: 'The level of the Grand Guardian enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mighty-mjolnir',
                                    description: 'The level of the Mighty Mjolnir enhancement core',
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
                            // drk calc
                            name: 'calc-drk',
                            description: 'Calculate the total fragments for a Dark Knight based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'dead-space',
                                    description: 'The level of the Dead Space skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-gungnir',
                                    description: 'The level of the Hexa Gungnirs Descent mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sod',
                                    description: 'The level of the Spear of Darkness enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'radiant-evil',
                                    description: 'The level of the Radiant Evil enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'calamitous-cyclone',
                                    description: 'The level of the Calamitous Cyclone enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'darkness-aura',
                                    description: 'The level of the Darkness Aura enhancement core',
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
                            // db calc
                            name: 'calc-db',
                            description: 'Calculate the total fragments for a Dual Blade based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'karma-blade',
                                    description: 'The level of the Karma Blade skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-pb',
                                    description: 'The level of the Hexa Phantom Blow mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bod',
                                    description: 'The level of the Blades of Destiny enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'blade-tornado',
                                    description: 'The level of the Blade Tornado enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'haunted-edge',
                                    description: 'The level of the Haunted Edge enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'blade-storm',
                                    description: 'The level of the Blade Storm enhancement core',
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
                            // pf calc
                            name: 'calc-pf',
                            description: 'Calculate the total fragments for a Pathfinder based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'forsaken-relic',
                                    description: 'The level of the Forsaken Relic skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-cardinalburst',
                                    description: 'The level of the Hexa Cardinal/Bountiful Burst mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'nova-blast',
                                    description: 'The level of the Nova Blast enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'raven-tempest',
                                    description: 'The level of the Raven Tempest enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'obsidian-barrier',
                                    description: 'The level of the Obsidian Barrier enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'relic-unbound',
                                    description: 'The level of the Relic Unbound enhancement core',
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
                            // mm calc
                            name: 'calc-mm',
                            description: 'Calculate the total fragments for a Marksman based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'final-aim',
                                    description: 'The level of the Final Aim skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-snipe',
                                    description: 'The level of the Hexa Snipe mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'perfect-shot',
                                    description: 'The level of the Perfect Shot enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'split-shot',
                                    description: 'The level of the Split Shot enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'surge-bolt',
                                    description: 'The level of the Surge Bolt enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'cartridge',
                                    description: 'The level of the Repeating Crossbow Cartridge enhancement core',
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
                            // cannoneer calc
                            name: 'calc-cannoneer',
                            description: 'Calculate the total fragments for a Cannoneer based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'sce',
                                    description: 'The level of the Super Cannon Explosion skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-cannonbarrage',
                                    description: 'The level of the Hexa Cannon Barrage mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mass-destruction',
                                    description: 'The level of the Cannon of Mass Destruction enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'nuclear-option',
                                    description: 'The level of the The Nuclear Option enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'monkey-business',
                                    description: 'The level of the Monkey Business enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'poolmaker',
                                    description: 'The level of the Poolmaker enhancement core',
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
                            // corsair calc
                            name: 'calc-corsair',
                            description: 'Calculate the total fragments for a Corsair based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'dreadnought',
                                    description: 'The level of the The Dreadnought skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-rapidfire',
                                    description: 'The level of the Hexa Rapid Fire mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bullet-barrage',
                                    description: 'The level of the Bullet Barrage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'target-lock',
                                    description: 'The level of the Target Lock enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'nautilus-assault',
                                    description: 'The level of the Nautilus Assault enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'death-trigger',
                                    description: 'The level of the Death Trigger enhancement core',
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
                            // tb calc
                            name: 'calc-tb',
                            description: 'Calculate the total fragments for a Thunder Breaker based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'twsw',
                                    description: 'The level of the Thunder Wall Sea Wave skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-annihilate',
                                    description: 'The level of the Hexa Annihilate mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lightning-cascade',
                                    description: 'The level of the Lightning Cascade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shark-torpedo',
                                    description: 'The level of the Shark Torpedo enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lgss',
                                    description: 'The level of the Lightning God Spear Strike enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lsm',
                                    description: 'The level of the Lighting Spear Multistrike enhancement core',
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
                            // bw calc
                            name: 'calc-bw',
                            description: 'Calculate the total fragments for a Blaze Wizard based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'eternity',
                                    description: 'The level of the Eternity skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-orbitalflame',
                                    description: 'The level of the Hexa Orbital Flame mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'savage-flame',
                                    description: 'The level of the Savage Flame enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'inferno-sphere',
                                    description: 'The level of the Inferno Sphere enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'salamander-mischief',
                                    description: 'The level of the Salamander Mischief enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'orbital-inferno',
                                    description: 'The level of the Orbital Inferno enhancement core',
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
                            // mihile
                            name: 'calc-mihile',
                            description: 'Calculate the total fragments for a Mihile based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'durendal',
                                    description: 'The level of the Durendal skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-radiantcross',
                                    description: 'The level of the Hexa Radiant Cross mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shield-light',
                                    description: 'The level of the Shield of Light enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sword-light',
                                    description: 'The level of the Sword of Light enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'radiant-soul',
                                    description: 'The level of the Radiant Soul enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'light-courage',
                                    description: 'The level of the Light of Courage enhancement core',
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
                            // merc
                            name: 'calc-merc',
                            description: 'Calculate the total fragments for a Mercedes based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'unfading-glory',
                                    description: 'The level of the Unfading Glory skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-ishtarsring',
                                    description: 'The level of the Hexa Ishtars Ring mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'soe',
                                    description: 'The level of the Spirit of Elluel enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sylvidias-flight',
                                    description: 'The level of the Sylvidias Flight enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'irkallas-wrath',
                                    description: 'The level of the Irkallas Wrath enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'royal-knights',
                                    description: 'The level of the Royal Knights enhancement core',
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
                            // phantom
                            name: 'calc-phantom',
                            description: 'Calculate the total fragments for a Phantom based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'defying-fate',
                                    description: 'The level of the Defying Fate skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-tempest',
                                    description: 'The level of the Hexa Tempest mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lotd',
                                    description: 'The level of the Luck of the Draw enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'aith',
                                    description: 'The level of the Ace in the Hole enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mark',
                                    description: 'The level of the Phantoms Mark enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'rift-break',
                                    description: 'The level of the Rift Break enhancement core',
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
                            // lumi
                            name: 'calc-lumi',
                            description: 'Calculate the total fragments for a Luminous based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'harmonic-paradox',
                                    description: 'The level of the Harmonic Paradox skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-ender',
                                    description: 'The level of the Hexa Ender mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'gol',
                                    description: 'The level of the Gate of Light enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'aether-conduit',
                                    description: 'The level of the Aether Conduit enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'baptism',
                                    description: 'The level of the Baptism of Light and Darkness enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'liberation-orb',
                                    description: 'The level of the Liberation Orb enhancement core',
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
                            // evan
                            name: 'calc-evan',
                            description: 'Calculate the total fragments for a Evan based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'zodiac-burst',
                                    description: 'The level of the Zodiac Burst skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-manaburst',
                                    description: 'The level of the Hexa Mana Burst mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'elemental-barrage',
                                    description: 'The level of the Gate of Light enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'dragon-slam',
                                    description: 'The level of the Dragon Slam enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'spiral-mana',
                                    description: 'The level of the Spiral of Mana enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'elemental-radiance',
                                    description: 'The level of the Elemental Radiance enhancement core',
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
                            // mechanic
                            name: 'calc-mech',
                            description: 'Calculate the total fragments for a Mechanic based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'ground-zero',
                                    description: 'The level of the Ground Zero skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-salvo',
                                    description: 'The level of the Hexa Heavy/AP Salvo mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mecha-carrier',
                                    description: 'The level of the Mecha Carrier enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'doomsday-device',
                                    description: 'The level of the Doomsday Device enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mmb',
                                    description: 'The level of the Mobile Missile Battery enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'fmb',
                                    description: 'The level of the Full Metal Barrage enhancement core',
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
                            // blaster
                            name: 'calc-blaster',
                            description: 'Calculate the total fragments for a Blaster based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'final-destroyer',
                                    description: 'The level of the Final Destroyer skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-magnumpunch',
                                    description: 'The level of the Hexa Magnum Punch mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'rocket-punch',
                                    description: 'The level of the Rocket Punch enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'gatling-punch',
                                    description: 'The level of the Gatling Punch enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bullet-blast',
                                    description: 'The level of the Bullet Blast enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'afterimage-shock',
                                    description: 'The level of the Afterimage Shock enhancement core',
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
                            // wh
                            name: 'calc-wh',
                            description: 'Calculate the total fragments for a Wild Hunter based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'natures-truth',
                                    description: 'The level of the Natures Truth skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-wildarrow',
                                    description: 'The level of the Hexa Wild Arrow mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'jaguar-storm',
                                    description: 'The level of the Jaguar Storm enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'primal-fury',
                                    description: 'The level of the Primal Fury enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'primal-grenade',
                                    description: 'The level of the Primal Grenade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'wabtx',
                                    description: 'The level of the Wild Arrow Blast Type X enhancement core',
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
                            // xenon
                            name: 'calc-xenon',
                            description: 'Calculate the total fragments for a Xenon based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'artificial-evolution',
                                    description: 'The level of the Artificial Evolution skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-mechapurge',
                                    description: 'The level of the Hexa Mecha Purge mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'omega-blaster',
                                    description: 'The level of the Omega Blaster enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'core-overload',
                                    description: 'The level of the Core Overload enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hypogram',
                                    description: 'The level of the Hypogram Field: Fusion enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'photon-ray',
                                    description: 'The level of the Photon Ray enhancement core',
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
                            // da
                            name: 'calc-da',
                            description: 'Calculate the total fragments for a Demon Avenger based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'requiem',
                                    description: 'The level of the Requiem skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-nethershield',
                                    description: 'The level of the Hexa Nether Shield mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'demonic-frenzy',
                                    description: 'The level of the Demonic Frenzy enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'demonic-blast',
                                    description: 'The level of the Demonic Blast enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'dimensional-sword',
                                    description: 'The level of the Dimensional Sword enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'revenant',
                                    description: 'The level of the Revenant enhancement core',
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
                            // ab
                            name: 'calc-ab',
                            description: 'Calculate the total fragments for a Angelic Buster based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'grand-finale',
                                    description: 'The level of the Grand Finale skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-trinity',
                                    description: 'The level of the Hexa Trinity mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'sparkle-burst',
                                    description: 'The level of the Sparkle Burst enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'superstar-spotlight',
                                    description: 'The level of the Demonic Blast enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'mighty-mascot',
                                    description: 'The level of the Mighty Mascot enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'trinity-fusion',
                                    description: 'The level of the Trinity Fusion enhancement core',
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
                            // kaiser
                            name: 'calc-kaiser',
                            description: 'Calculate the total fragments for a Kaiser based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'nova-triumphant',
                                    description: 'The level of the Nova Triumphant skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-gigaswave',
                                    description: 'The level of the Hexa Gigas Wave mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'nova-guardians',
                                    description: 'The level of the Nova Guardians enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'bladefall',
                                    description: 'The level of the Bladefall enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'draco-surge',
                                    description: 'The level of the Draco Surge enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'dragonflare',
                                    description: 'The level of the Dragonflare Fusion enhancement core',
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
                            // cadena
                            name: 'calc-cadena',
                            description: 'Calculate the total fragments for a Cadena based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'grand-arsenal',
                                    description: 'The level of the Chain Arts: Grand Arsenal skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-thrash',
                                    description: 'The level of the Hexa Chain Arts: Thrash mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'nova-guardians',
                                    description: 'The level of the Nova Guardians enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'void-strike',
                                    description: 'The level of the Chain Arts: Void Strike enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'apocalypse-cannon',
                                    description: 'The level of the Apocalypse Cannon enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'maelstrom',
                                    description: 'The level of the Chain Arts: Maelstrom Fusion enhancement core',
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
                            // kain
                            name: 'calc-kain',
                            description: 'Calculate the total fragments for a Kain based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'total-annihilation',
                                    description: 'The level of the Total Annihilation skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-fallingdust',
                                    description: 'The level of the Hexa Falling Dust mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'dragon-burst',
                                    description: 'The level of the Dragon Burst enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'fatal-blitz',
                                    description: 'The level of the Fatal Blitz enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'thanatos-descent',
                                    description: 'The level of the Thanatos Descent enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'goa',
                                    description: 'The level of the Grip of Agony enhancement core',
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
                            // kanna
                            name: 'calc-kanna',
                            description: 'Calculate the total fragments for a Kanna based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'hakumenkonmou-juubi',
                                    description: 'The level of the Hakemenkonmou Juubi skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-shikigami',
                                    description: 'The level of the Hexa Shikigami Haunting mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'yuki',
                                    description: 'The level of the Summon Yuki-musume enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'domain',
                                    description: 'The level of the Spirits Domain enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lsc',
                                    description: 'The level of the Liberated Spirit Circle enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'ghost-yaksha',
                                    description: 'The level of the Ghost Yaksha: Great Oni Lords Legion enhancement core',
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
                            // hayato
                            name: 'calc-hayato',
                            description: 'Calculate the total fragments for a Hayato based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'quick-draw',
                                    description: 'The level of the Jin Quick Draw skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-raisanrenzan',
                                    description: 'The level of the Hexa Rai Sanrenzan mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'battoujutsu-zankou',
                                    description: 'The level of the Battoujutsu Zankou enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'phantom-blade',
                                    description: 'The level of the Iaijutsu Phantom Blade enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'buw',
                                    description: 'The level of the Battoujutsu Ultimate Will enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'instant-slice',
                                    description: 'The level of the Instance Slice enhancement core',
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
                            // ark
                            name: 'calc-ark',
                            description: 'Calculate the total fragments for a Ark based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'primordial-abyss',
                                    description: 'The level of the Primordial Abyss skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-chargedrive',
                                    description: 'The level of the Hexa Charge Drive mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'abyssal-recall',
                                    description: 'The level of the Abyssal Recall enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'infinity-spell',
                                    description: 'The level of the Infinity Spell enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'devious-nightmare',
                                    description: 'The level of the Devious Nightmare enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'devious-dream',
                                    description: 'The level of the Devious Dream enhancement core',
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
                            // illium
                            name: 'calc-illium',
                            description: 'Calculate the total fragments for a Illium based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'mytocrystal-expanse',
                                    description: 'The level of the Mytocrystal Expanse skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-javelin',
                                    description: 'The level of the Hexa Javelin mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'crystal-ignition',
                                    description: 'The level of the Crystal Ignition enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'templar-knight',
                                    description: 'The level of the Templar Knight enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'crystalline-spirit',
                                    description: 'The level of the Crystalline Spirit enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'crystal-gate',
                                    description: 'The level of the Crystal Gate enhancement core',
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
                            // khali
                            name: 'calc-khali',
                            description: 'Calculate the total fragments for a Khali based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'sandstorm',
                                    description: 'The level of the Sandstorm skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-flurry',
                                    description: 'The level of the Hexa Flurry mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'pandemonium',
                                    description: 'The level of the Pandemonium enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'void-burst',
                                    description: 'The level of the Void Burst enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'astra',
                                    description: 'The level of the Arts: Astra enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'resonate',
                                    description: 'The level of the Resonate: Ultimatum enhancement core',
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
                            // hoyoung
                            name: 'calc-hy',
                            description: 'Calculate the total fragments for a Hoyoung based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'apothesis',
                                    description: 'The level of the Apothesis skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-universalharmony',
                                    description: 'The level of the Hexa Universal Harmony mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'clone-rampage',
                                    description: 'The level of the Clone Rampage enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'tiger',
                                    description: 'The level of the Tiger of Songyu enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'wog',
                                    description: 'The level of the Wrath of Gods enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'tpa',
                                    description: 'The level of the Three Paths Apparition enhancement core',
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
                            // lara
                            name: 'calc-lara',
                            description: 'Calculate the total fragments for a Lara based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'universe-bloom',
                                    description: 'The level of the Universe in Bloom skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-sprinke',
                                    description: 'The level of the Hexa Essence Sprinkle mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'big-stretch',
                                    description: 'The level of the Big Stretch enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'lands-connection',
                                    description: 'The level of the Lands Connection enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'surging-essence',
                                    description: 'The level of the Surging Essence enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'wmr',
                                    description: 'The level of the Winding Mountain Ridge enhancement core',
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
                            // zero
                            name: 'calc-zero',
                            description: 'Calculate the total fragments for a Lara based on core levels',
                            options: [
                                {
                                    type: 4,
                                    name: 'end-time',
                                    description: 'The level of the End Time skill core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'hexa-timepiece',
                                    description: 'The level of the Hexa Time Piece mastery core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'chrono-break',
                                    description: 'The level of the Chrono Break enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'tbot',
                                    description: 'The level of the Twin Blades of Time enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'shadow-flash',
                                    description: 'The level of the Shadow Flash enhancement core',
                                    required: true,
                                },
                                {
                                    type: 4,
                                    name: 'ego-weapon',
                                    description: 'The level of the Ego Weapon enhancement core',
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
        const vortexSphereLevel = options.getInteger('vortex-sphere');
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


    // calc fp
    if (commandName === 'calc-fp') {
        await interaction.deferReply();

        const infernalVenomLevel = options.getInteger('infernal-venom');
        const hexaFlameSweepLevel = options.getInteger('hexa-flamesweep');
        const dotPunisherLevel = options.getInteger('dot-punisher');
        const poisonNovaLevel = options.getInteger('poison-nova');
        const elementalFuryLevel = options.getInteger('elemental-fury');
        const poisonChainLevel = options.getInteger('poison-chain');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [dotPunisherLevel, poisonNovaLevel, elementalFuryLevel, poisonChainLevel];
        const result = calculateFragments(infernalVenomLevel, hexaFlameSweepLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#750207')
            .setTitle('Fire Poison Mage Fragments Calculation')
            .setDescription('Here are the results of your Fire Poison Mage calculation:')
            .setThumbnail('https://i.imgur.com/weiLMa3.png') // Replace with a relevant thumbnail for Fire Poison Mage
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
                        `**Infernal Venom (Skill Core)**\nLvl: ${infernalVenomLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Flame Sweep (Mastery Core)**\nLvl: ${hexaFlameSweepLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**DoT Punisher (Enhancement Core)**\nLvl: ${dotPunisherLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Poison Nova (Enhancement Core)**\nLvl: ${poisonNovaLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Elemental Fury (Enhancement Core)**\nLvl: ${elementalFuryLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Poison Chain (Enhancement Core)**\nLvl: ${poisonChainLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    // aran calc
    if (commandName === 'calc-aran') {
        await interaction.deferReply();

        const adrenalineSurgeLevel = options.getInteger('adrenaline-surge');
        const hexaBeyondBladeLevel = options.getInteger('hexa-beyondblade');
        const furyLevel = options.getInteger('fury');
        const carnageLevel = options.getInteger('carnage');
        const fenrirCrashLevel = options.getInteger('fenrir-crash');
        const blizzardTempestLevel = options.getInteger('blizzard-tempest');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [furyLevel, carnageLevel, fenrirCrashLevel, blizzardTempestLevel];
        const result = calculateFragments(adrenalineSurgeLevel, hexaBeyondBladeLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#AAEAF7')
            .setTitle('Aran Fragments Calculation')
            .setDescription('Here are the results of your Aran calculation:')
            .setThumbnail('https://i.imgur.com/Y5P8Zxn.png') // Use a relevant thumbnail for Aran
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
                        `**Adrenaline Surge (Skill Core)**\nLvl: ${adrenalineSurgeLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Beyond Blade (Mastery Core)**\nLvl: ${hexaBeyondBladeLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Mahas Fury (Enhancement Core)**\nLvl: ${furyLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Mahas Carnage (Enhancement Core)**\nLvl: ${carnageLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Fenrir Crash (Enhancement Core)**\nLvl: ${fenrirCrashLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Blizzard Tempest (Enhancement Core)**\nLvl: ${blizzardTempestLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-kinesis') {
        await interaction.deferReply();

        const anotherRealmLevel = options.getInteger('another-realm');
        const hexaMetalPressLevel = options.getInteger('hexa-metalpress');
        const psychicTornadoLevel = options.getInteger('psychic-tornado');
        const momLevel = options.getInteger('mom');
        const psychicShockwaveLevel = options.getInteger('psychic-shockwave');
        const logLevel = options.getInteger('log');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        const enhancementLevels = [psychicTornadoLevel, momLevel, psychicShockwaveLevel, logLevel];
        const result = calculateFragments(anotherRealmLevel, hexaMetalPressLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#ACAEB2')
            .setTitle('Kinesis Fragments Calculation')
            .setDescription('Here are the results of your Kinesis calculation:')
            .setThumbnail('https://i.imgur.com/kJOqF2r.png') // Use an appropriate thumbnail for Kinesis
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
                        `**From Another Realm (Skill Core)**\nLvl: ${anotherRealmLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Metal Press (Mastery Core)**\nLvl: ${hexaMetalPressLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Psychic Tornado (Enhancement Core)**\nLvl: ${psychicTornadoLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Ultimate - Mind Over Matter (Enhancement Core)**\nLvl: ${momLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Ultimate - Psychic Shockwave (Enhancement Core)**\nLvl: ${psychicShockwaveLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Law of Gravity (Enhancement Core)**\nLvl: ${logLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-il') {
        await interaction.deferReply();

        // Retrieve option values from the interaction
        const frozenLightningLevel = options.getInteger('frozen-lightning');
        const hexaChainLightningLevel = options.getInteger('hexa-chainlightning');
        const iceAgeLevel = options.getInteger('ice-age');
        const sosLevel = options.getInteger('sos');
        const jupiterThunderLevel = options.getInteger('jupiter-thunder');
        const boltBarrageLevel = options.getInteger('bolt-barrage');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assume calculateFragments function exists and calculates the needed values
        const enhancementLevels = [iceAgeLevel, sosLevel, jupiterThunderLevel, boltBarrageLevel];
        const result = calculateFragments(frozenLightningLevel, hexaChainLightningLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#D6F2FD') // Choose an appropriate color
            .setTitle('Iced Lightning Fragments Calculation')
            .setDescription('Here are the results of your Iced Lightning calculation:')
            .setThumbnail('https://i.imgur.com/hYPirwP.png') // Use an appropriate thumbnail for Iced Lightning
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
                        `**Frozen Lightning (Skill Core)**\nLvl: ${frozenLightningLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Chain Lightning (Mastery Core)**\nLvl: ${hexaChainLightningLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Ice Age (Enhancement Core)**\nLvl: ${iceAgeLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Spirit of Snow (Enhancement Core)**\nLvl: ${sosLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Jupiter Thunder (Enhancement Core)**\nLvl: ${jupiterThunderLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Bolt Barrage (Enhancement Core)**\nLvl: ${boltBarrageLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    // calc paladin
    if (commandName === 'calc-paladin') {
        await interaction.deferReply();

        // Extract option values from the interaction
        const sacredBastionLevel = options.getInteger('sacred-bastion');
        const hexaBlastLevel = options.getInteger('hexa-blast');
        const divineEchoLevel = options.getInteger('divine-echo');
        const hotrLevel = options.getInteger('hotr'); // Hammers of the Righteous
        const grandGuardianLevel = options.getInteger('grand-guardian');
        const mightyMjolnirLevel = options.getInteger('mighty-mjolnir');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a function to calculate the fragments and progress exists
        const enhancementLevels = [divineEchoLevel, hotrLevel, grandGuardianLevel, mightyMjolnirLevel];
        const result = calculateFragments(sacredBastionLevel, hexaBlastLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#FFDE9E') // An appropriate color
            .setTitle('Paladin Fragments Calculation')
            .setDescription('Here are the results of your Paladin calculation:')
            .setThumbnail('https://i.imgur.com/oaGzYtj.png') // An appropriate thumbnail for Paladin
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
                        `**Sacred Bastion (Skill Core)**\nLvl: ${sacredBastionLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Blast/Divine Judgment (Mastery Core)**\nLvl: ${hexaBlastLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Divine Echo (Enhancement Core)**\nLvl: ${divineEchoLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Hammers of the Righteous (Enhancement Core)**\nLvl: ${hotrLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Grand Guardian (Enhancement Core)**\nLvl: ${grandGuardianLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Mighty Mjolnir (Enhancement Core)**\nLvl: ${mightyMjolnirLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    // calc drk
    if (commandName === 'calc-drk') {
        await interaction.deferReply();

        // Extracting the core levels from interaction options
        const deadSpaceLevel = options.getInteger('dead-space');
        const hexaGungnirLevel = options.getInteger('hexa-gungnir');
        const sodLevel = options.getInteger('sod'); // Spear of Darkness
        const radiantEvilLevel = options.getInteger('radiant-evil');
        const calamitousCycloneLevel = options.getInteger('calamitous-cyclone');
        const darknessAuraLevel = options.getInteger('darkness-aura');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the existence of a calculateFragments function for DRK
        const enhancementLevels = [sodLevel, radiantEvilLevel, calamitousCycloneLevel, darknessAuraLevel];
        const result = calculateFragments(deadSpaceLevel, hexaGungnirLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#730405') // Choose an appropriate color
            .setTitle('Dark Knight Fragments Calculation')
            .setDescription('Here are the results of your Dark Knight calculation:')
            .setThumbnail('https://i.imgur.com/aaAZ5Bz.png') // Use an appropriate thumbnail for Dark Knight
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
                        `**Dead Space (Skill Core)**\nLvl: ${deadSpaceLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Gungnir's Descent (Mastery Core)**\nLvl: ${hexaGungnirLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Spear of Darkness (Enhancement Core)**\nLvl: ${sodLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Radiant Evil (Enhancement Core)**\nLvl: ${radiantEvilLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Calamitous Cyclone (Enhancement Core)**\nLvl: ${calamitousCycloneLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Darkness Aura (Enhancement Core)**\nLvl: ${darknessAuraLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-db') {
        await interaction.deferReply();

        // Extracting the core levels from the interaction options
        const karmaBladeLevel = options.getInteger('karma-blade');
        const hexaPbLevel = options.getInteger('hexa-pb'); // Hexa Phantom Blow
        const bodLevel = options.getInteger('bod'); // Blades of Destiny
        const bladeTornadoLevel = options.getInteger('blade-tornado');
        const hauntedEdgeLevel = options.getInteger('haunted-edge');
        const bladeStormLevel = options.getInteger('blade-storm');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assume calculateFragments function exists to process the input levels and calculate the results
        const enhancementLevels = [bodLevel, bladeTornadoLevel, hauntedEdgeLevel, bladeStormLevel];
        const result = calculateFragments(karmaBladeLevel, hexaPbLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#E73A4B') // An appropriate color for Dual Blade theme
            .setTitle('Dual Blade Fragments Calculation')
            .setDescription('Here are the results of your Dual Blade calculation:')
            .setThumbnail('https://i.imgur.com/CJ3OPBr.png') // Use an appropriate thumbnail for Dual Blade
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
                        `**Karma Blade (Skill Core)**\nLvl: ${karmaBladeLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Phantom Blow (Mastery Core)**\nLvl: ${hexaPbLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Blades of Destiny (Enhancement Core)**\nLvl: ${bodLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Blade Tornado (Enhancement Core)**\nLvl: ${bladeTornadoLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Haunted Edge (Enhancement Core)**\nLvl: ${hauntedEdgeLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Blade Storm (Enhancement Core)**\nLvl: ${bladeStormLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    // calc pf
    if (commandName === 'calc-pf') {
        await interaction.deferReply();

        // Extract the core levels from the interaction options
        const forsakenRelicLevel = options.getInteger('forsaken-relic');
        const hexaCardinalBurstLevel = options.getInteger('hexa-cardinalburst');
        const novaBlastLevel = options.getInteger('nova-blast');
        const ravenTempestLevel = options.getInteger('raven-tempest');
        const obsidianBarrierLevel = options.getInteger('obsidian-barrier');
        const relicUnboundLevel = options.getInteger('relic-unbound');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assume calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [novaBlastLevel, ravenTempestLevel, obsidianBarrierLevel, relicUnboundLevel];
        const result = calculateFragments(forsakenRelicLevel, hexaCardinalBurstLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#430A51') // Choose a color that fits the Pathfinder theme
            .setTitle('Pathfinder Fragments Calculation')
            .setDescription('Here are the results of your Pathfinder calculation:')
            .setThumbnail('https://i.imgur.com/TuXzF0z.png') // Use an appropriate thumbnail for Pathfinder
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
                        `**Forsaken Relic (Skill Core)**\nLvl: ${forsakenRelicLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Cardinal/Bountiful Burst (Mastery Core)**\nLvl: ${hexaCardinalBurstLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Nova Blast (Enhancement Core)**\nLvl: ${novaBlastLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Raven Tempest (Enhancement Core)**\nLvl: ${ravenTempestLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Obsidian Barrier (Enhancement Core)**\nLvl: ${obsidianBarrierLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Relic Unbound (Enhancement Core)**\nLvl: ${relicUnboundLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    // calc mm
    if (commandName === 'calc-mm') {
        await interaction.deferReply();

        // Extract the core levels from the interaction options
        const finalAimLevel = options.getInteger('final-aim');
        const hexaSnipeLevel = options.getInteger('hexa-snipe');
        const perfectShotLevel = options.getInteger('perfect-shot');
        const splitShotLevel = options.getInteger('split-shot');
        const surgeBoltLevel = options.getInteger('surge-bolt');
        const cartridgeLevel = options.getInteger('cartridge');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming calculateFragments function exists to process input and calculate results
        const enhancementLevels = [perfectShotLevel, splitShotLevel, surgeBoltLevel, cartridgeLevel];
        const result = calculateFragments(finalAimLevel, hexaSnipeLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#F5C86E') // An appropriate color for Marksman theme
            .setTitle('Marksman Fragments Calculation')
            .setDescription('Here are the results of your Marksman calculation:')
            .setThumbnail('https://i.imgur.com/i9Bvjkm.png') // Use an appropriate thumbnail for Marksman
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
                        `**Final Aim (Skill Core)**\nLvl: ${finalAimLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Snipe (Mastery Core)**\nLvl: ${hexaSnipeLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Perfect Shot (Enhancement Core)**\nLvl: ${perfectShotLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Split Shot (Enhancement Core)**\nLvl: ${splitShotLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Surge Bolt (Enhancement Core)**\nLvl: ${surgeBoltLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Repeating Crossbow Cartridge (Enhancement Core)**\nLvl: ${cartridgeLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    // calc cannoneer
    if (commandName === 'calc-cannoneer') {
        await interaction.deferReply();

        // Extract the core levels from the interaction options
        const sceLevel = options.getInteger('sce'); // Super Cannon Explosion
        const hexaCannonBarrageLevel = options.getInteger('hexa-cannonbarrage');
        const massDestructionLevel = options.getInteger('mass-destruction');
        const nuclearOptionLevel = options.getInteger('nuclear-option');
        const monkeyBusinessLevel = options.getInteger('monkey-business');
        const poolmakerLevel = options.getInteger('poolmaker');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming calculateFragments function exists to process input and calculate results
        const enhancementLevels = [massDestructionLevel, nuclearOptionLevel, monkeyBusinessLevel, poolmakerLevel];
        const result = calculateFragments(sceLevel, hexaCannonBarrageLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#E07459') // Choose an appropriate color for Cannoneer theme
            .setTitle('Cannoneer Fragments Calculation')
            .setDescription('Here are the results of your Cannoneer calculation:')
            .setThumbnail('https://i.imgur.com/gVEMYOE.png') // Use an appropriate thumbnail for Cannoneer
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
                        `**Super Cannon Explosion (Skill Core)**\nLvl: ${sceLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Cannon Barrage (Mastery Core)**\nLvl: ${hexaCannonBarrageLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Cannon of Mass Destruction (Enhancement Core)**\nLvl: ${massDestructionLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**The Nuclear Option (Enhancement Core)**\nLvl: ${nuclearOptionLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Monkey Business (Enhancement Core)**\nLvl: ${monkeyBusinessLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Poolmaker (Enhancement Core)**\nLvl: ${poolmakerLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-corsair') {
        await interaction.deferReply();

        // Extract the core levels from the interaction options
        const dreadnoughtLevel = options.getInteger('dreadnought');
        const hexaRapidFireLevel = options.getInteger('hexa-rapidfire');
        const bulletBarrageLevel = options.getInteger('bullet-barrage');
        const targetLockLevel = options.getInteger('target-lock');
        const nautilusAssaultLevel = options.getInteger('nautilus-assault');
        const deathTriggerLevel = options.getInteger('death-trigger');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [bulletBarrageLevel, targetLockLevel, nautilusAssaultLevel, deathTriggerLevel];
        const result = calculateFragments(dreadnoughtLevel, hexaRapidFireLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#A10000') // Choose an appropriate color for Corsair theme
            .setTitle('Corsair Fragments Calculation')
            .setDescription('Here are the results of your Corsair calculation:')
            .setThumbnail('https://i.imgur.com/mSVEnRl.png') // Use an appropriate thumbnail for Corsair
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
                        `**The Dreadnought (Skill Core)**\nLvl: ${dreadnoughtLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Rapid Fire (Mastery Core)**\nLvl: ${hexaRapidFireLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Bullet Barrage (Enhancement Core)**\nLvl: ${bulletBarrageLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Target Lock (Enhancement Core)**\nLvl: ${targetLockLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Nautilus Assault (Enhancement Core)**\nLvl: ${nautilusAssaultLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Death Trigger (Enhancement Core)**\nLvl: ${deathTriggerLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-tb') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const twswLevel = options.getInteger('twsw'); // Thunder Wall Sea Wave
        const hexaAnnihilateLevel = options.getInteger('hexa-annihilate');
        const lightningCascadeLevel = options.getInteger('lightning-cascade');
        const sharkTorpedoLevel = options.getInteger('shark-torpedo');
        const lgssLevel = options.getInteger('lgss'); // Lightning God Spear Strike
        const lsmLevel = options.getInteger('lsm'); // Lighting Spear Multistrike
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [lightningCascadeLevel, sharkTorpedoLevel, lgssLevel, lsmLevel];
        const result = calculateFragments(twswLevel, hexaAnnihilateLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#5BB6FE') // An appropriate color for Thunder Breaker theme
            .setTitle('Thunder Breaker Fragments Calculation')
            .setDescription('Here are the results of your Thunder Breaker calculation:')
            .setThumbnail('https://i.imgur.com/6SMBQTN.png') // Use an appropriate thumbnail for Thunder Breaker
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
                        `**Thunder Wall Sea Wave (Skill Core)**\nLvl: ${twswLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Annihilate (Mastery Core)**\nLvl: ${hexaAnnihilateLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Lightning Cascade (Enhancement Core)**\nLvl: ${lightningCascadeLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Shark Torpedo (Enhancement Core)**\nLvl: ${sharkTorpedoLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Lightning God Spear Strike (Enhancement Core)**\nLvl: ${lgssLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Lighting Spear Multistrike (Enhancement Core)**\nLvl: ${lsmLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-bw') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const eternityLevel = options.getInteger('eternity');
        const hexaOrbitalFlameLevel = options.getInteger('hexa-orbitalflame');
        const savageFlameLevel = options.getInteger('savage-flame');
        const infernoSphereLevel = options.getInteger('inferno-sphere');
        const salamanderMischiefLevel = options.getInteger('salamander-mischief');
        const orbitalInfernoLevel = options.getInteger('orbital-inferno');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process input and calculate results
        const enhancementLevels = [savageFlameLevel, infernoSphereLevel, salamanderMischiefLevel, orbitalInfernoLevel];
        const result = calculateFragments(eternityLevel, hexaOrbitalFlameLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#F15740') // Choose an appropriate color for Blaze Wizard theme
            .setTitle('Blaze Wizard Fragments Calculation')
            .setDescription('Here are the results of your Blaze Wizard calculation:')
            .setThumbnail('https://i.imgur.com/3jLdxqd.png') // Use an appropriate thumbnail for Blaze Wizard
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
                        `**Eternity (Skill Core)**\nLvl: ${eternityLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Orbital Flame (Mastery Core)**\nLvl: ${hexaOrbitalFlameLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Savage Flame (Enhancement Core)**\nLvl: ${savageFlameLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Inferno Sphere (Enhancement Core)**\nLvl: ${infernoSphereLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Salamander Mischief (Enhancement Core)**\nLvl: ${salamanderMischiefLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Orbital Inferno (Enhancement Core)**\nLvl: ${orbitalInfernoLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-mihile') {
        await interaction.deferReply();

        // Extracting the core levels from the interaction options
        const durendalLevel = options.getInteger('durendal');
        const hexaRadiantCrossLevel = options.getInteger('hexa-radiantcross');
        const shieldLightLevel = options.getInteger('shield-light');
        const swordLightLevel = options.getInteger('sword-light');
        const radiantSoulLevel = options.getInteger('radiant-soul');
        const lightCourageLevel = options.getInteger('light-courage');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [shieldLightLevel, swordLightLevel, radiantSoulLevel, lightCourageLevel];
        const result = calculateFragments(durendalLevel, hexaRadiantCrossLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#FEFF86') // An appropriate color for Mihile theme
            .setTitle('Mihile Fragments Calculation')
            .setDescription('Here are the results of your Mihile calculation:')
            .setThumbnail('https://i.imgur.com/NzYcyc0.png') // Use an appropriate thumbnail for Mihile
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
                        `**Durendal (Skill Core)**\nLvl: ${durendalLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Radiant Cross (Mastery Core)**\nLvl: ${hexaRadiantCrossLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Shield of Light (Enhancement Core)**\nLvl: ${shieldLightLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Sword of Light (Enhancement Core)**\nLvl: ${swordLightLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Radiant Soul (Enhancement Core)**\nLvl: ${radiantSoulLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Light of Courage (Enhancement Core)**\nLvl: ${lightCourageLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-merc') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const unfadingGloryLevel = options.getInteger('unfading-glory');
        const hexaIshtarsRingLevel = options.getInteger('hexa-ishtarsring');
        const soeLevel = options.getInteger('soe'); // Spirit of Elluel
        const sylvidiasFlightLevel = options.getInteger('sylvidias-flight');
        const irkallasWrathLevel = options.getInteger('irkallas-wrath');
        const royalKnightsLevel = options.getInteger('royal-knights');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [soeLevel, sylvidiasFlightLevel, irkallasWrathLevel, royalKnightsLevel];
        const result = calculateFragments(unfadingGloryLevel, hexaIshtarsRingLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#CEFEFE') // An appropriate color for Mercedes theme
            .setTitle('Mercedes Fragments Calculation')
            .setDescription('Here are the results of your Mercedes calculation:')
            .setThumbnail('https://i.imgur.com/nRZiS79.png') // Use an appropriate thumbnail for Mercedes
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
                        `**Unfading Glory (Skill Core)**\nLvl: ${unfadingGloryLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Ishtar's Ring (Mastery Core)**\nLvl: ${hexaIshtarsRingLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Spirit of Elluel (Enhancement Core)**\nLvl: ${soeLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Sylvidia's Flight (Enhancement Core)**\nLvl: ${sylvidiasFlightLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Irkalla's Wrath (Enhancement Core)**\nLvl: ${irkallasWrathLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Royal Knights (Enhancement Core)**\nLvl: ${royalKnightsLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-phantom') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const defyingFateLevel = options.getInteger('defying-fate');
        const hexaTempestLevel = options.getInteger('hexa-tempest');
        const lotdLevel = options.getInteger('lotd'); // Luck of the Draw
        const aithLevel = options.getInteger('aith'); // Ace in the Hole
        const markLevel = options.getInteger('mark'); // Phantom's Mark
        const riftBreakLevel = options.getInteger('rift-break');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [lotdLevel, aithLevel, markLevel, riftBreakLevel];
        const result = calculateFragments(defyingFateLevel, hexaTempestLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#4872BF') // An appropriate color for Phantom theme
            .setTitle('Phantom Fragments Calculation')
            .setDescription('Here are the results of your Phantom calculation:')
            .setThumbnail('https://i.imgur.com/uONLodS.png') // Use an appropriate thumbnail for Phantom
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
                        `**Defying Fate (Skill Core)**\nLvl: ${defyingFateLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Tempest (Mastery Core)**\nLvl: ${hexaTempestLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Luck of the Draw (Enhancement Core)**\nLvl: ${lotdLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Ace in the Hole (Enhancement Core)**\nLvl: ${aithLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Phantom's Mark (Enhancement Core)**\nLvl: ${markLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Rift Break (Enhancement Core)**\nLvl: ${riftBreakLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-lumi') {
        await interaction.deferReply();

        // Extracting the core levels from the interaction options
        const harmonicParadoxLevel = options.getInteger('harmonic-paradox');
        const hexaEnderLevel = options.getInteger('hexa-ender');
        const golLevel = options.getInteger('gol'); // Gate of Light
        const aetherConduitLevel = options.getInteger('aether-conduit');
        const baptismLevel = options.getInteger('baptism'); // Baptism of Light and Darkness
        const liberationOrbLevel = options.getInteger('liberation-orb');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [golLevel, aetherConduitLevel, baptismLevel, liberationOrbLevel];
        const result = calculateFragments(harmonicParadoxLevel, hexaEnderLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#B9BCC9') // An appropriate color for Luminous theme
            .setTitle('Luminous Fragments Calculation')
            .setDescription('Here are the results of your Luminous calculation:')
            .setThumbnail('https://i.imgur.com/Nk6DvCP.png') // Use an appropriate thumbnail for Luminous
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
                        `**Harmonic Paradox (Skill Core)**\nLvl: ${harmonicParadoxLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Ender (Mastery Core)**\nLvl: ${hexaEnderLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Gate of Light (Enhancement Core)**\nLvl: ${golLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Aether Conduit (Enhancement Core)**\nLvl: ${aetherConduitLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Baptism of Light and Darkness (Enhancement Core)**\nLvl: ${baptismLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Liberation Orb (Enhancement Core)**\nLvl: ${liberationOrbLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-evan') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const zodiacBurstLevel = options.getInteger('zodiac-burst');
        const hexaManaBurstLevel = options.getInteger('hexa-manaburst');
        const elementalBarrageLevel = options.getInteger('elemental-barrage');
        const dragonSlamLevel = options.getInteger('dragon-slam');
        const spiralManaLevel = options.getInteger('spiral-mana');
        const elementalRadianceLevel = options.getInteger('elemental-radiance');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [elementalBarrageLevel, dragonSlamLevel, spiralManaLevel, elementalRadianceLevel];
        const result = calculateFragments(zodiacBurstLevel, hexaManaBurstLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#2FA3C9') // An appropriate color for Evan theme
            .setTitle('Evan Fragments Calculation')
            .setDescription('Here are the results of your Evan calculation:')
            .setThumbnail('https://i.imgur.com/nqhhp6W.png') // Use an appropriate thumbnail for Evan
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
                        `**Zodiac-Burst (Skill Core)**\nLvl: ${zodiacBurstLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Mana Burst (Mastery Core)**\nLvl: ${hexaManaBurstLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Elemental Barrage (Enhancement Core)**\nLvl: ${elementalBarrageLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Dragon Slam (Enhancement Core)**\nLvl: ${dragonSlamLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Spiral of Mana (Enhancement Core)**\nLvl: ${spiralManaLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Elemental Radiance (Enhancement Core)**\nLvl: ${elementalRadianceLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-mech') {
        await interaction.deferReply();

        // Extracting the core levels from the interaction options
        const groundZeroLevel = options.getInteger('ground-zero');
        const hexaSalvoLevel = options.getInteger('hexa-salvo');
        const mechaCarrierLevel = options.getInteger('mecha-carrier');
        const doomsdayDeviceLevel = options.getInteger('doomsday-device');
        const mmbLevel = options.getInteger('mmb'); // Mobile Missile Battery
        const fmbLevel = options.getInteger('fmb'); // Full Metal Barrage
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [mechaCarrierLevel, doomsdayDeviceLevel, mmbLevel, fmbLevel];
        const result = calculateFragments(groundZeroLevel, hexaSalvoLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#F47027') // An appropriate color for Mechanic theme
            .setTitle('Mechanic Fragments Calculation')
            .setDescription('Here are the results of your Mechanic calculation:')
            .setThumbnail('https://i.imgur.com/6ySMsYi.png') // Use an appropriate thumbnail for Mechanic
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
                        `**Ground Zero (Skill Core)**\nLvl: ${groundZeroLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Heavy/AP Salvo (Mastery Core)**\nLvl: ${hexaSalvoLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Mecha Carrier (Enhancement Core)**\nLvl: ${mechaCarrierLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Doomsday Device (Enhancement Core)**\nLvl: ${doomsdayDeviceLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Mobile Missile Battery (Enhancement Core)**\nLvl: ${mmbLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Full Metal Barrage (Enhancement Core)**\nLvl: ${fmbLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-blaster') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const finalDestroyerLevel = options.getInteger('final-destroyer');
        const hexaMagnumPunchLevel = options.getInteger('hexa-magnumpunch');
        const rocketPunchLevel = options.getInteger('rocket-punch');
        const gatlingPunchLevel = options.getInteger('gatling-punch');
        const bulletBlastLevel = options.getInteger('bullet-blast');
        const afterimageShockLevel = options.getInteger('afterimage-shock');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [rocketPunchLevel, gatlingPunchLevel, bulletBlastLevel, afterimageShockLevel];
        const result = calculateFragments(finalDestroyerLevel, hexaMagnumPunchLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#FBAB15') // An appropriate color for Blaster theme
            .setTitle('Blaster Fragments Calculation')
            .setDescription('Here are the results of your Blaster calculation:')
            .setThumbnail('https://i.imgur.com/U4UfbiK.png') // Use an appropriate thumbnail for Blaster
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
                        `**Final Destroyer (Skill Core)**\nLvl: ${finalDestroyerLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Magnum Punch (Mastery Core)**\nLvl: ${hexaMagnumPunchLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Rocket Punch (Enhancement Core)**\nLvl: ${rocketPunchLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Gatling Punch (Enhancement Core)**\nLvl: ${gatlingPunchLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Bullet Blast (Enhancement Core)**\nLvl: ${bulletBlastLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Afterimage Shock (Enhancement Core)**\nLvl: ${afterimageShockLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-wh') {
        await interaction.deferReply();

        // Extracting the core levels from the interaction options
        const naturesTruthLevel = options.getInteger('natures-truth');
        const hexaWildArrowLevel = options.getInteger('hexa-wildarrow');
        const jaguarStormLevel = options.getInteger('jaguar-storm');
        const primalFuryLevel = options.getInteger('primal-fury');
        const primalGrenadeLevel = options.getInteger('primal-grenade');
        const wabtxLevel = options.getInteger('wabtx'); // Wild Arrow Blast Type X
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [jaguarStormLevel, primalFuryLevel, primalGrenadeLevel, wabtxLevel];
        const result = calculateFragments(naturesTruthLevel, hexaWildArrowLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#C0F6FC') // An appropriate color for Wild Hunter theme
            .setTitle('Wild Hunter Fragments Calculation')
            .setDescription('Here are the results of your Wild Hunter calculation:')
            .setThumbnail('https://i.imgur.com/gdElvmF.png') // Use an appropriate thumbnail for Wild Hunter
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
                        `**Nature's Truth (Skill Core)**\nLvl: ${naturesTruthLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Wild Arrow (Mastery Core)**\nLvl: ${hexaWildArrowLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Jaguar Storm (Enhancement Core)**\nLvl: ${jaguarStormLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Primal Fury (Enhancement Core)**\nLvl: ${primalFuryLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Primal Grenade (Enhancement Core)**\nLvl: ${primalGrenadeLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Wild Arrow Blast Type X (Enhancement Core)**\nLvl: ${wabtxLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-xenon') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const artificialEvolutionLevel = options.getInteger('artificial-evolution');
        const hexaMechaPurgeLevel = options.getInteger('hexa-mechapurge');
        const omegaBlasterLevel = options.getInteger('omega-blaster');
        const coreOverloadLevel = options.getInteger('core-overload');
        const hypogramLevel = options.getInteger('hypogram'); // Hypogram Field: Fusion
        const photonRayLevel = options.getInteger('photon-ray');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [omegaBlasterLevel, coreOverloadLevel, hypogramLevel, photonRayLevel];
        const result = calculateFragments(artificialEvolutionLevel, hexaMechaPurgeLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#5CC8CF') // An appropriate color for Xenon theme
            .setTitle('Xenon Fragments Calculation')
            .setDescription('Here are the results of your Xenon calculation:')
            .setThumbnail('https://i.imgur.com/SMGHZUD.png') // Use an appropriate thumbnail for Xenon
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
                        `**Artificial Evolution (Skill Core)**\nLvl: ${artificialEvolutionLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Mecha Purge (Mastery Core)**\nLvl: ${hexaMechaPurgeLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Omega Blaster (Enhancement Core)**\nLvl: ${omegaBlasterLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Core Overload (Enhancement Core)**\nLvl: ${coreOverloadLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Hypogram Field: Fusion (Enhancement Core)**\nLvl: ${hypogramLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Photon Ray (Enhancement Core)**\nLvl: ${photonRayLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-da') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const requiemLevel = options.getInteger('requiem');
        const hexaNetherShieldLevel = options.getInteger('hexa-nethershield');
        const demonicFrenzyLevel = options.getInteger('demonic-frenzy');
        const demonicBlastLevel = options.getInteger('demonic-blast');
        const dimensionalSwordLevel = options.getInteger('dimensional-sword');
        const revenantLevel = options.getInteger('revenant');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [demonicFrenzyLevel, demonicBlastLevel, dimensionalSwordLevel, revenantLevel];
        const result = calculateFragments(requiemLevel, hexaNetherShieldLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#B2517E') // An appropriate color for Demon Avenger theme
            .setTitle('Demon Avenger Fragments Calculation')
            .setDescription('Here are the results of your Demon Avenger calculation:')
            .setThumbnail('https://i.imgur.com/uX5eWVf.png') // Use an appropriate thumbnail for Demon Avenger
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
                        `**Requiem (Skill Core)**\nLvl: ${requiemLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Nether Shield (Mastery Core)**\nLvl: ${hexaNetherShieldLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Demonic Frenzy (Enhancement Core)**\nLvl: ${demonicFrenzyLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Demonic Blast (Enhancement Core)**\nLvl: ${demonicBlastLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Dimensional Sword (Enhancement Core)**\nLvl: ${dimensionalSwordLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Revenant (Enhancement Core)**\nLvl: ${revenantLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-ab') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const grandFinaleLevel = options.getInteger('grand-finale');
        const hexaTrinityLevel = options.getInteger('hexa-trinity');
        const sparkleBurstLevel = options.getInteger('sparkle-burst');
        const superstarSpotlightLevel = options.getInteger('superstar-spotlight');
        const mightyMascotLevel = options.getInteger('mighty-mascot');
        const trinityFusionLevel = options.getInteger('trinity-fusion');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [sparkleBurstLevel, superstarSpotlightLevel, mightyMascotLevel, trinityFusionLevel];
        const result = calculateFragments(grandFinaleLevel, hexaTrinityLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#E28AB5') // An appropriate color for Angelic Buster theme
            .setTitle('Angelic Buster Fragments Calculation')
            .setDescription('Here are the results of your Angelic Buster calculation:')
            .setThumbnail('https://i.imgur.com/qjz7Syl.png') // Use an appropriate thumbnail for Angelic Buster
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
                        `**Grand Finale (Skill Core)**\nLvl: ${grandFinaleLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Trinity (Mastery Core)**\nLvl: ${hexaTrinityLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Sparkle Burst (Enhancement Core)**\nLvl: ${sparkleBurstLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Superstar Spotlight (Enhancement Core)**\nLvl: ${superstarSpotlightLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Mighty Mascot (Enhancement Core)**\nLvl: ${mightyMascotLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Trinity Fusion (Enhancement Core)**\nLvl: ${trinityFusionLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-kaiser') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const novaTriumphantLevel = options.getInteger('nova-triumphant');
        const hexaGigasWaveLevel = options.getInteger('hexa-gigaswave');
        const novaGuardiansLevel = options.getInteger('nova-guardians');
        const bladefallLevel = options.getInteger('bladefall');
        const dracoSurgeLevel = options.getInteger('draco-surge');
        const dragonflareLevel = options.getInteger('dragonflare');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [novaGuardiansLevel, bladefallLevel, dracoSurgeLevel, dragonflareLevel];
        const result = calculateFragments(novaTriumphantLevel, hexaGigasWaveLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#7C1D36') // An appropriate color for Kaiser theme
            .setTitle('Kaiser Fragments Calculation')
            .setDescription('Here are the results of your Kaiser calculation:')
            .setThumbnail('https://i.imgur.com/OxQYbh6.png') // Use an appropriate thumbnail for Kaiser
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
                        `**Nova Triumphant (Skill Core)**\nLvl: ${novaTriumphantLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Gigas Wave (Mastery Core)**\nLvl: ${hexaGigasWaveLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Nova Guardians (Enhancement Core)**\nLvl: ${novaGuardiansLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Bladefall (Enhancement Core)**\nLvl: ${bladefallLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Draco Surge (Enhancement Core)**\nLvl: ${dracoSurgeLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Dragonflare Fusion (Enhancement Core)**\nLvl: ${dragonflareLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }




    if (commandName === 'calc-cadena') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const grandArsenalLevel = options.getInteger('grand-arsenal');
        const hexaThrashLevel = options.getInteger('hexa-thrash');
        const novaGuardiansLevel = options.getInteger('nova-guardians');
        const voidStrikeLevel = options.getInteger('void-strike');
        const apocalypseCannonLevel = options.getInteger('apocalypse-cannon');
        const maelstromLevel = options.getInteger('maelstrom'); // Chain Arts: Maelstrom Fusion
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [novaGuardiansLevel, voidStrikeLevel, apocalypseCannonLevel, maelstromLevel];
        const result = calculateFragments(grandArsenalLevel, hexaThrashLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#C01A72') // An appropriate color for Cadena theme
            .setTitle('Cadena Fragments Calculation')
            .setDescription('Here are the results of your Cadena calculation:')
            .setThumbnail('https://i.imgur.com/XT16ppS.png') // Use an appropriate thumbnail for Cadena
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
                        `**Chain Arts: Grand Arsenal (Skill Core)**\nLvl: ${grandArsenalLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Chain Arts: Thrash (Mastery Core)**\nLvl: ${hexaThrashLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Nova Guardians (Enhancement Core)**\nLvl: ${novaGuardiansLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Chain Arts: Void Strike (Enhancement Core)**\nLvl: ${voidStrikeLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Apocalypse Cannon (Enhancement Core)**\nLvl: ${apocalypseCannonLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Chain Arts: Maelstrom Fusion (Enhancement Core)**\nLvl: ${maelstromLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-kain') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const totalAnnihilationLevel = options.getInteger('total-annihilation');
        const hexaFallingDustLevel = options.getInteger('hexa-fallingdust');
        const dragonBurstLevel = options.getInteger('dragon-burst');
        const fatalBlitzLevel = options.getInteger('fatal-blitz');
        const thanatosDescentLevel = options.getInteger('thanatos-descent');
        const goaLevel = options.getInteger('goa'); // Grip of Agony
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [dragonBurstLevel, fatalBlitzLevel, thanatosDescentLevel, goaLevel];
        const result = calculateFragments(totalAnnihilationLevel, hexaFallingDustLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#8E1513') // An appropriate color for Kain theme
            .setTitle('Kain Fragments Calculation')
            .setDescription('Here are the results of your Kain calculation:')
            .setThumbnail('https://i.imgur.com/kht7qxE.png') // Use an appropriate thumbnail for Kain
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
                        `**Total Annihilation (Skill Core)**\nLvl: ${totalAnnihilationLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Falling Dust (Mastery Core)**\nLvl: ${hexaFallingDustLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Dragon Burst (Enhancement Core)**\nLvl: ${dragonBurstLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Fatal Blitz (Enhancement Core)**\nLvl: ${fatalBlitzLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Thanatos Descent (Enhancement Core)**\nLvl: ${thanatosDescentLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Grip of Agony (Enhancement Core)**\nLvl: ${goaLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-kanna') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const hakumenkonmouJuubiLevel = options.getInteger('hakumenkonmou-juubi');
        const hexaShikigamiLevel = options.getInteger('hexa-shikigami');
        const yukiLevel = options.getInteger('yuki');
        const domainLevel = options.getInteger('domain');
        const lscLevel = options.getInteger('lsc'); // Liberated Spirit Circle
        const ghostYakshaLevel = options.getInteger('ghost-yaksha');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate the results
        const enhancementLevels = [yukiLevel, domainLevel, lscLevel, ghostYakshaLevel];
        const result = calculateFragments(hakumenkonmouJuubiLevel, hexaShikigamiLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#7864BF') // An appropriate color for Kanna theme
            .setTitle('Kanna Fragments Calculation')
            .setDescription('Here are the results of your Kanna calculation:')
            .setThumbnail('https://i.imgur.com/EeVsVmM.png') // Use an appropriate thumbnail for Kanna
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
                        `**Hakemenkonmou Juubi (Skill Core)**\nLvl: ${hakumenkonmouJuubiLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Shikigami Haunting (Mastery Core)**\nLvl: ${hexaShikigamiLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Summon Yuki-musume (Enhancement Core)**\nLvl: ${yukiLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Spirits Domain (Enhancement Core)**\nLvl: ${domainLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Liberated Spirit Circle (Enhancement Core)**\nLvl: ${lscLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Ghost Yaksha: Great Oni Lords Legion (Enhancement Core)**\nLvl: ${ghostYakshaLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-hayato') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const quickDrawLevel = options.getInteger('quick-draw');
        const hexaRaisanrenzanLevel = options.getInteger('hexa-raisanrenzan');
        const battoujutsuZankouLevel = options.getInteger('battoujutsu-zankou');
        const phantomBladeLevel = options.getInteger('phantom-blade');
        const buwLevel = options.getInteger('buw'); // Battoujutsu Ultimate Will
        const instantSliceLevel = options.getInteger('instant-slice');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [battoujutsuZankouLevel, phantomBladeLevel, buwLevel, instantSliceLevel];
        const result = calculateFragments(quickDrawLevel, hexaRaisanrenzanLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#884862') // An appropriate color for Hayato theme
            .setTitle('Hayato Fragments Calculation')
            .setDescription('Here are the results of your Hayato calculation:')
            .setThumbnail('https://i.imgur.com/HuyyDyf.png') // Use an appropriate thumbnail for Hayato
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
                        `**Jin Quick Draw (Skill Core)**\nLvl: ${quickDrawLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Rai Sanrenzan (Mastery Core)**\nLvl: ${hexaRaisanrenzanLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Battoujutsu Zankou (Enhancement Core)**\nLvl: ${battoujutsuZankouLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Iaijutsu Phantom Blade (Enhancement Core)**\nLvl: ${phantomBladeLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Battoujutsu Ultimate Will (Enhancement Core)**\nLvl: ${buwLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Instance Slice (Enhancement Core)**\nLvl: ${instantSliceLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-ark') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const primordialAbyssLevel = options.getInteger('primordial-abyss');
        const hexaChargeDriveLevel = options.getInteger('hexa-chargedrive');
        const abyssalRecallLevel = options.getInteger('abyssal-recall');
        const infinitySpellLevel = options.getInteger('infinity-spell');
        const deviousNightmareLevel = options.getInteger('devious-nightmare');
        const deviousDreamLevel = options.getInteger('devious-dream');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming the calculateFragments function exists to process the input and calculate results
        const enhancementLevels = [abyssalRecallLevel, infinitySpellLevel, deviousNightmareLevel, deviousDreamLevel];
        const result = calculateFragments(primordialAbyssLevel, hexaChargeDriveLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#B43523') // An appropriate color for Ark theme
            .setTitle('Ark Fragments Calculation')
            .setDescription('Here are the results of your Ark calculation:')
            .setThumbnail('https://i.imgur.com/eaUmo6h.png') // Use an appropriate thumbnail for Ark
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
                        `**Primordial Abyss (Skill Core)**\nLvl: ${primordialAbyssLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Charge Drive (Mastery Core)**\nLvl: ${hexaChargeDriveLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Abyssal Recall (Enhancement Core)**\nLvl: ${abyssalRecallLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Infinity Spell (Enhancement Core)**\nLvl: ${infinitySpellLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Devious Nightmare (Enhancement Core)**\nLvl: ${deviousNightmareLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Devious Dream (Enhancement Core)**\nLvl: ${deviousDreamLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Send the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-illium') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const mytocrystalExpanseLevel = options.getInteger('mytocrystal-expanse');
        const hexaJavelinLevel = options.getInteger('hexa-javelin');
        const crystalIgnitionLevel = options.getInteger('crystal-ignition');
        const templarKnightLevel = options.getInteger('templar-knight');
        const crystallineSpiritLevel = options.getInteger('crystalline-spirit');
        const crystalGateLevel = options.getInteger('crystal-gate');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a function exists to process the input and calculate the results
        const enhancementLevels = [crystalIgnitionLevel, templarKnightLevel, crystallineSpiritLevel, crystalGateLevel];
        const result = calculateFragments(mytocrystalExpanseLevel, hexaJavelinLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#E2FFFF') // Choose a color that represents Illium
            .setTitle('Illium Fragments Calculation')
            .setDescription('Here are the results of your Illium calculation:')
            .setThumbnail('https://i.imgur.com/TuP1sML.png') // Placeholder for an appropriate thumbnail
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
                        `**Mytocrystal Expanse (Skill Core)**\nLvl: ${mytocrystalExpanseLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Javelin (Mastery Core)**\nLvl: ${hexaJavelinLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Crystal Ignition (Enhancement Core)**\nLvl: ${crystalIgnitionLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Templar Knight (Enhancement Core)**\nLvl: ${templarKnightLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Crystalline Spirit (Enhancement Core)**\nLvl: ${crystallineSpiritLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Crystal Gate (Enhancement Core)**\nLvl: ${crystalGateLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-khali') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const sandstormLevel = options.getInteger('sandstorm');
        const hexaFlurryLevel = options.getInteger('hexa-flurry');
        const pandemoniumLevel = options.getInteger('pandemonium');
        const voidBurstLevel = options.getInteger('void-burst');
        const astraLevel = options.getInteger('astra');
        const resonateLevel = options.getInteger('resonate');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a calculateFragments function exists for processing input and calculating results
        const enhancementLevels = [pandemoniumLevel, voidBurstLevel, astraLevel, resonateLevel];
        const result = calculateFragments(sandstormLevel, hexaFlurryLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#E9B260') // Choose a fitting color theme
            .setTitle('Khali Fragments Calculation')
            .setDescription('Here are the results of your Khali calculation:')
            .setThumbnail('https://i.imgur.com/S3jVypN.png') // Placeholder for an appropriate thumbnail
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
                        `**Sandstorm (Skill Core)**\nLvl: ${sandstormLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Flurry (Mastery Core)**\nLvl: ${hexaFlurryLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Pandemonium (Enhancement Core)**\nLvl: ${pandemoniumLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Void Burst (Enhancement Core)**\nLvl: ${voidBurstLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Arts: Astra (Enhancement Core)**\nLvl: ${astraLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Resonate: Ultimatum (Enhancement Core)**\nLvl: ${resonateLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-hy') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const apothesisLevel = options.getInteger('apothesis');
        const hexaUniversalHarmonyLevel = options.getInteger('hexa-universalharmony');
        const cloneRampageLevel = options.getInteger('clone-rampage');
        const tigerLevel = options.getInteger('tiger');
        const wogLevel = options.getInteger('wog');
        const tpaLevel = options.getInteger('tpa');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a calculateFragments function exists for processing input and calculating results
        const enhancementLevels = [cloneRampageLevel, tigerLevel, wogLevel, tpaLevel];
        const result = calculateFragments(apothesisLevel, hexaUniversalHarmonyLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#76FFEE') // Choose a fitting color theme
            .setTitle('Hoyoung Fragments Calculation')
            .setDescription('Here are the results of your Hoyoung calculation:')
            .setThumbnail('https://i.imgur.com/ZN0x53M.png') // Placeholder for an appropriate thumbnail
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
                        `**Apothesis (Skill Core)**\nLvl: ${apothesisLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Universal Harmony (Mastery Core)**\nLvl: ${hexaUniversalHarmonyLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Clone Rampage (Enhancement Core)**\nLvl: ${cloneRampageLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Tiger of Songyu (Enhancement Core)**\nLvl: ${tigerLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Wrath of Gods (Enhancement Core)**\nLvl: ${wogLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Three Paths Apparition (Enhancement Core)**\nLvl: ${tpaLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-lara') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const universeBloomLevel = options.getInteger('universe-bloom');
        const hexaSprinkleLevel = options.getInteger('hexa-sprinke');
        const bigStretchLevel = options.getInteger('big-stretch');
        const landsConnectionLevel = options.getInteger('lands-connection');
        const surgingEssenceLevel = options.getInteger('surging-essence');
        const wmrLevel = options.getInteger('wmr');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a calculateFragments function exists for processing input and calculating results
        const enhancementLevels = [bigStretchLevel, landsConnectionLevel, surgingEssenceLevel, wmrLevel];
        const result = calculateFragments(universeBloomLevel, hexaSprinkleLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#FDDAC6') // Choose a fitting color theme
            .setTitle('Lara Fragments Calculation')
            .setDescription('Here are the results of your Lara calculation:')
            .setThumbnail('https://i.imgur.com/yLuQQzk.png') // Placeholder for an appropriate thumbnail
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
                        `**Universe in Bloom (Skill Core)**\nLvl: ${universeBloomLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Essence Sprinkle (Mastery Core)**\nLvl: ${hexaSprinkleLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Big Stretch (Enhancement Core)**\nLvl: ${bigStretchLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Lands Connection (Enhancement Core)**\nLvl: ${landsConnectionLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Surging Essence (Enhancement Core)**\nLvl: ${surgingEssenceLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Winding Mountain Ridge (Enhancement Core)**\nLvl: ${wmrLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
        await interaction.editReply({ embeds: [embed] });
    }

    if (commandName === 'calc-zero') {
        await interaction.deferReply();

        // Extracting core levels from the interaction options
        const endTimeLevel = options.getInteger('end-time');
        const hexaTimepieceLevel = options.getInteger('hexa-timepiece');
        const chronoBreakLevel = options.getInteger('chrono-break');
        const tbotLevel = options.getInteger('tbot');
        const shadowFlashLevel = options.getInteger('shadow-flash');
        const egoWeaponLevel = options.getInteger('ego-weapon');
        const hexastat = options.getInteger('hexastat') || 0;
        const unusedFrags = options.getInteger('unused-frags') || 0;

        // Assuming a calculateFragments function exists for processing input and calculating results
        const enhancementLevels = [chronoBreakLevel, tbotLevel, shadowFlashLevel, egoWeaponLevel];
        const result = calculateFragments(endTimeLevel, hexaTimepieceLevel, enhancementLevels, hexastat, unusedFrags);

        const embed = new EmbedBuilder()
            .setColor('#FFDE8F') // Choose a fitting color theme for Zero
            .setTitle('Zero Fragments Calculation')
            .setDescription('Here are the results of your Zero calculation:')
            .setThumbnail('https://i.imgur.com/WvbP3K6.png') // Placeholder for an appropriate thumbnail
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
                        `**End Time (Skill Core)**\nLvl: ${endTimeLevel} | Frags: ${result.skillFragments} | Progress: ${result.skillProgress.toFixed(2)}%\n\n` +
                        `**Hexa Time Piece (Mastery Core)**\nLvl: ${hexaTimepieceLevel} | Frags: ${result.masteryFragments} | Progress: ${result.masteryProgress.toFixed(2)}%\n\n` +
                        `**Chrono Break (Enhancement Core)**\nLvl: ${chronoBreakLevel} | Frags: ${result.enhancementFragmentsArray[0]} | Progress: ${result.enhancementProgressArray[0].toFixed(2)}%\n\n` +
                        `**Twin Blades of Time (Enhancement Core)**\nLvl: ${tbotLevel} | Frags: ${result.enhancementFragmentsArray[1]} | Progress: ${result.enhancementProgressArray[1].toFixed(2)}%\n\n` +
                        `**Shadow Flash (Enhancement Core)**\nLvl: ${shadowFlashLevel} | Frags: ${result.enhancementFragmentsArray[2]} | Progress: ${result.enhancementProgressArray[2].toFixed(2)}%\n\n` +
                        `**Ego Weapon (Enhancement Core)**\nLvl: ${egoWeaponLevel} | Frags: ${result.enhancementFragmentsArray[3]} | Progress: ${result.enhancementProgressArray[3].toFixed(2)}%`,
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: 'Calculation done by Frag Calc' });

        // Respond with the crafted embed as a reply to the interaction
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
