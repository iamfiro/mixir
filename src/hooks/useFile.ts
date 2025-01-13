import { useState, useCallback } from 'react';

export type FileType = {
    groupId: string;
    name: string;
};

const useFile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [files, setFiles] = useState<FileType[]>([]);

    const updateIsLoading = useCallback((loading: boolean) => {
        setIsLoading(loading);
    }, []);

    const updateFiles = useCallback((newFiles: FileType[]) => {
        setFiles(newFiles);
    }, []);

    return {
        isLoading,
        setIsLoading: updateIsLoading,
        files,
        setFiles: updateFiles,
    };
};

export default useFile;