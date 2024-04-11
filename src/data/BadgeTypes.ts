interface BadgeTypeObj {
    classes: string
    text: string
}

interface BadgeTypeMap{
    MOD: BadgeTypeObj;
    CLIENT: BadgeTypeObj;
    SERVER: BadgeTypeObj;
    CLIENT_AND_SERVER: BadgeTypeObj;
}

export const BADGE_TYPES: BadgeTypeMap = {
    MOD: {
        classes: 'bg-purple-200 text-black/70 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'MOD'
    },
    CLIENT: {
        classes: 'bg-red-200 text-black/70 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'CLIENT'
    },
    SERVER: {
        classes: 'bg-yellow-200 text-black/70 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'SERVER'
    },
    CLIENT_AND_SERVER: {
        classes: 'bg-blue-200 text-black/70 font-semibold py-1 px-2 rounded-full inline text-sm',
        text: 'CLIENT/SERVER'
    }
}

export type BadgeType = keyof BadgeTypeMap;