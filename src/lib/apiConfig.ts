// src/lib/apiConfig.ts

interface ApiConfigOptions {
    endpoint: string;
    defaultUri?: string;
}

export const getApiUri = ({ endpoint, defaultUri = 'http://localhost:4000/dev' }: ApiConfigOptions): string => {
    const baseUri = process.env.API_URI || defaultUri;
    return `${baseUri}/${endpoint}`;
};
