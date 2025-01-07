type ModuleContent = {
    module: number;
    title: string | "No Title Available";
    image: string;
    content: string | "No Content Available";
}

interface PageTrackerProp {
    onMainPage: boolean;
}

export type { ModuleContent, PageTrackerProp };