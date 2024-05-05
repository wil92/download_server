import {humanFileSize} from "../src/utils/human-file-size";

test('Validate human file sizes values', () => {
    expect(humanFileSize(500)).toBe('500 B');
    expect(humanFileSize(800)).toBe('800 B');
    expect(humanFileSize(1024)).toBe('1 kB');
    expect(humanFileSize(1524)).toBe('1.5 kB');
    expect(humanFileSize(1048576)).toBe('1 MB');
    expect(humanFileSize(1548576)).toBe('1.5 MB');
});
