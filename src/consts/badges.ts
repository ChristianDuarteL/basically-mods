import type { BadgeTypeMap } from "../types/BadgeTypes";

export const BADGE_TYPES: BadgeTypeMap = {
    MOD: {
        classes: 'bg-purple-200 dark:bg-purple-900 text-black/70 dark:text-white/80 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'MOD'
    },
    CLIENT: {
        classes: 'bg-red-200 dark:bg-red-900 text-black/70 dark:text-white/80 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'CLIENT'
    },
    SERVER: {
        classes: 'bg-yellow-200 dark:bg-yellow-900 text-black/70 dark:text-white/80 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'SERVER'
    },
    CLIENT_AND_SERVER: {
        classes: 'bg-blue-200 dark:bg-blue-900 text-black/70 dark:text-white/80 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'CLIENT/SERVER'
    }
}

export type BadgeType = keyof BadgeTypeMap;