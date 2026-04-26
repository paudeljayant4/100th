import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const mergeClassNames = (...classNames: string[]) => {
    return twMerge(clsx(classNames));
};