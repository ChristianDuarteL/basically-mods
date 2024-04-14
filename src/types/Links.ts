interface Path {
    path: string,
    clipRule?: string,
    fillRule?: 'nonzero' | 'evenodd' | 'inherit' | undefined | null;
}

export type LinkType = 'curseforge' | 'modthrint' | 'github';

interface Icon {
    viewbox: string,
    paths: Path[]
}

export interface LinkTypeObj {
    icon?: Icon,
    website_name: string,
    color: string
}

export interface Link {
    type: LinkType,
    url: string
}
