import type { Mod } from "../types/Mod";

enum ModsMap {
    Arrows = 'arrows',
    Signs = 'signs'
}

export const MODS: Record<ModsMap, Mod> = {
    arrows: {
        modId: "arrows",
        abstract: "From seeking arrows to pacify arrows, this mod adds a lot of new arrows for you to be the best archer of all Minecraft.",
        modName: "Basically Arrows",
        badges: ['MOD', 'CLIENT_AND_SERVER'],
        coming_soon: true,
    },
    signs: {
        modId: "signs",
        abstract: "If you've ever felt like the vanilla minecraft signs are too vanilla. This mod contains well, signs, lots of signs.",
        modName: "Basically Signs",
        badges: ['MOD', 'CLIENT_AND_SERVER'],
        links: [
            {
                type: "curseforge",
                url: "https://www.curseforge.com/minecraft/mc-mods/basically-signs"
            },
            {
                type: 'github',
                url: "https://github.com/ChristianDuarteL/basically-signs"
            }
        ]
    }
}
