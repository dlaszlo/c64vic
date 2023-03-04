export const vicBankList = [
    {label: "$0000 - $3fff", value: "0"},
    {label: "$4000 - $7fff", value: "1"},
    {label: "$8000 - $bfff", value: "2"},
    {label: "$c000 - $ffff", value: "3"},
]

export const map_dd00 = {
    "0": "$3f",
    "1": "$3e",
    "2": "$3d",
    "3": "$3c",
}

export const map_dd02 = {
    "0": "$3c",
    "1": "$3d",
    "2": "$3e",
    "3": "$3f",
}

export const bitmapList = [
    {label: "$0000", value: "0"},
    {label: "$2000", value: "1"},
]

export const charMemList = [
    {label: "$0000", value: "0"},
    {label: "$0800", value: "1"},
    {label: "$1000", value: "2"},
    {label: "$1800", value: "3"},
    {label: "$2000", value: "4"},
    {label: "$2800", value: "5"},
    {label: "$3000", value: "6"},
    {label: "$3800", value: "7"},
]

export const screenMemList = [
    {label: "$0000", value: "0"},
    {label: "$0400", value: "1"},
    {label: "$0800", value: "2"},
    {label: "$0c00", value: "3"},
    {label: "$1000", value: "4"},
    {label: "$1400", value: "5"},
    {label: "$1800", value: "6"},
    {label: "$1c00", value: "7"},
    {label: "$2000", value: "8"},
    {label: "$2400", value: "9"},
    {label: "$2800", value: "10"},
    {label: "$2c00", value: "11"},
    {label: "$3000", value: "12"},
    {label: "$3400", value: "13"},
    {label: "$3800", value: "14"},
    {label: "$3c00", value: "15"},
]

export const memAreas1List = [
    {label: "RAM", value: "0"},
    {label: "BASIC", value: "1"},
]

export const memAreas2List = [
    {label: "RAM", value: "0"},
    {label: "CHARROM", value: "1"},
    {label: "I/O", value: "2"},
]

export const memAreas3List = [
    {label: "RAM", value: "0"},
    {label: "KERNAL", value: "1"},
]

export const map_01 = {
    "010": "$31",
    "011": "$32",
    "111": "$33",
    "000": "$34",
    "020": "$35",
    "021": "$36",
    "121": "$37",
}

export const screenModeList = [
    {label: "Hires text mode", value: "0"},
    {label: "Multicolor text mode", value: "1"},
    {label: "Hires bitmap mode", value: "2"},
    {label: "Multicolor bitmap mode", value: "3"},
    {label: "ECM text mode", value: "4"},
    {label: "ECM multicolor text mode (invalid)", value: "5"},
    {label: "ECM hires bitmap mode (invalid)", value: "6"},
    {label: "ECM multicolor bitmap mode (invalid)", value: "7"},
    {label: "Disable screen", value: "8"},
]

export const xScrollList = [
    {label: "0 px", value: "0"},
    {label: "1 px", value: "1"},
    {label: "2 px", value: "2"},
    {label: "3 px", value: "3"},
    {label: "4 px", value: "4"},
    {label: "5 px", value: "5"},
    {label: "6 px", value: "6"},
    {label: "7 px", value: "7"},
]

export const yScrollList = [
    {label: "0 px", value: "0"},
    {label: "1 px", value: "1"},
    {label: "2 px", value: "2"},
    {label: "3 px", value: "3"},
    {label: "4 px", value: "4"},
    {label: "5 px", value: "5"},
    {label: "6 px", value: "6"},
    {label: "7 px", value: "7"},
]

export const screenWidthList = [
    {label: "38 columns", value: "0"},
    {label: "40 columns", value: "8"}
]

export const screenHeightList = [
    {label: "24 rows", value: "0"},
    {label: "25 rows", value: "8"}
]

export const map_d011 = {
    "0": 1 << 4,
    "1": 1 << 4,
    "2": 3 << 4,
    "3": 3 << 4,
    "4": 5 << 4,
    "5": 5 << 4,
    "6": 7 << 4,
    "7": 7 << 4,
    "8": 0 << 4,
}

export const map_d016 = {
    "0": 0 << 4,
    "1": 1 << 4,
    "2": 0 << 4,
    "3": 1 << 4,
    "4": 0 << 4,
    "5": 1 << 4,
    "6": 0 << 4,
    "7": 1 << 4,
    "8": 0 << 4,
}
