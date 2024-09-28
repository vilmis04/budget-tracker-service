interface ApiError extends Error {
    statusCode: number;
    exceptions?: Record<string, string>;
    forward(prefix?: string): ApiError;
}

type ErrFirst<T> = [ApiError, null] | [null, T];

type UUID = string;
