/**
 * @param size - file size in bytes
 */
export function humanFileSize(size: number) {
    const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return (Math.round((size / Math.pow(1024, i)) * 10) / 10) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}
