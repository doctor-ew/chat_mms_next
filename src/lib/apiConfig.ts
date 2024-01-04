// src/lib/apiConfig.ts

interface ApiConfigOptions {
    endpoint: string;
    defaultUri?: string;
}

const uriString : string = "https://mms-graph.doctorew.com";
//const uriString : string = "http://localhost:4000/dev";

export const getApiUri = ({ endpoint, defaultUri = uriString }: ApiConfigOptions): string => {
    const baseUri = process.env.API_URI || defaultUri;
    return `${baseUri}/${endpoint}`;
};
