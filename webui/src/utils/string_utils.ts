export function toCamelCase(str: string) {
    return str.replace(/(_[a-z])/g, $1 => $1.toUpperCase().replace('_', ''));
}

export function toSnakeCase(str: string) {
    return str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
}

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
// used to join uniq keys
export const uniqSep = '@$%;';

// Appends copy suffix to a name
// E.g. "Origin Name" --> "Origin Name (copy 1)"
export function makeCopyName(name: string, existingNames: Set<string>, copySuffixStart: string) {
    let originName = name;
    let index = 0;

    const copySuffixStartPosition = name.lastIndexOf(copySuffixStart);

    if (copySuffixStartPosition >= 0) {
        originName = name.substring(0, copySuffixStartPosition);
        index = parseInt(name.substring(copySuffixStartPosition + copySuffixStart.length));

        if (isNaN(index)) {
            index = 0;
        }
    }

    while (index <= Number.MAX_SAFE_INTEGER) {
        index++;
        const copyName = `${originName}${copySuffixStart}${index})`;

        if (!existingNames.has(copyName)) {
            return copyName;
        }
    }

    return originName;
}

export function isMatching(value: string | undefined, search: string): boolean {
    return !!value && value.toLowerCase().includes(search.toLowerCase());
}

export function toArray(data: string | undefined, separator = ','): string[] {
    return data ? data.split(separator) : [];
}

function makeUniqueName(
    orig: string,
    existing: Iterable<string>,
    build: (x: string, idx: number) => string): string {
    const names = new Set(existing);

    if (!names.has(orig)) {
        return orig;
    }

    for (let idx = 1; ; ++idx) {
        const dupName = build(orig, idx);

        if (!names.has(dupName)) {
            return dupName;
        }
    }
}

export function makeUniqueDisplayName(orig: string, existing: Iterable<string>): string {
    return makeUniqueName(orig, existing, (x: string, idx: number) => `${x} (${idx})`);
}

export function makeUniqueUnderscoreName(orig: string, existing: Iterable<string>): string {
    return makeUniqueName(orig, existing, (x: string, idx: number) => `${x}_${idx}`);
}

export const isNotEmptyString = (s: string) => /\S+.*/.test(s);

export const capitalizeFirstLetter = (value: string) => {
    const [f, ...rest] = value.split('');

    return f.toUpperCase() + rest.join('');
};
