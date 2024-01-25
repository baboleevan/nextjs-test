declare global {
    interface Window {
        webkit?: webkit;
    }

    namespace NodeJS {
        interface ProcessEnv {
            TITLE: string;
        }
    }
}
