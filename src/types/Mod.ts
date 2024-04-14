import type { BadgeType } from "../consts/badges";
import type { Link } from "./Links";

export interface Mod {
    modId: string;
    modName: string;
    abstract: string;
    links?: Link[];
    badges?: BadgeType[];
}