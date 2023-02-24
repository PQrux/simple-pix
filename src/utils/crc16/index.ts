export default function crc16(str: string) {
    const POLY  = 0x1021;
    const START = 0xFFFF;

    function get_crc_for_num(i: number) {
        let crc = 0;
        let c = i * 256;
        [...Array(8).keys()].forEach(_ => {
            crc = ((crc ^ c) & 0x8000) ? (crc * 2) ^ POLY : crc * 2;
            c = c * 2 });
        return crc;
    }

    const table = [...Array(256).keys()].map((_,n) => get_crc_for_num(n));

    let crc = START;

    str.split("").forEach(c => {
        crc = (crc * 0x100) ^ table[ ( ((crc / 0x100) >> 0) ^ c.charCodeAt(0) ) & 0xFF ];
        crc = (((crc / 0x10000) >> 0) * 0x10000) ^ crc;
    }
    )

    return crc.toString(16);
}