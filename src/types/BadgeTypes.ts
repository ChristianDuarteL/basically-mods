export interface BadgeTypeObj {
    classes: string
    text: string
}

export interface BadgeTypeMap{
    MOD: BadgeTypeObj;
    CLIENT: BadgeTypeObj;
    SERVER: BadgeTypeObj;
    CLIENT_AND_SERVER: BadgeTypeObj;
}