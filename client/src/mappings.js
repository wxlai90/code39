const alphabetMappings = {
    'A': [1, 0, 0, 2, 0, 1],
    'B': [0, 1, 0, 2, 0, 1],
    'C': [1, 1, 0, 2, 0, 0],
    'D': [0, 0, 1, 2, 0, 1],
    'E': [1, 0, 1, 2, 0, 0],
    'F': [0, 1, 1, 2, 0, 0],
    'G': [0, 0, 0, 2, 1, 1],
    'H': [1, 0, 0, 2, 1, 0],
    'I': [0, 1, 0, 2, 1, 0],
    'J': [0, 0, 1, 2, 1, 0],
    'K': [1, 0, 0, 0, 2, 1],
    'L': [0, 1, 0, 0, 2, 1],
    'M': [1, 1, 0, 0, 2, 0],
    'N': [0, 0, 1, 0, 2, 1],
    'O': [1, 0, 1, 0, 2, 0],
    'P': [0, 1, 1, 0, 2, 0],
    'Q': [0, 0, 0, 1, 2, 1],
    'R': [1, 0, 0, 1, 2, 0],
    'S': [0, 1, 0, 1, 2, 0],
    'T': [0, 0, 1, 1, 2, 0],
    'U': [1, 2, 0, 0, 0, 1],
    'V': [0, 2, 1, 0, 0, 1],
    'W': [1, 2, 1, 0, 0, 0],
    'X': [0, 2, 0, 1, 0, 1],
    'Y': [1, 2, 0, 1, 0, 0],
    'Z': [0, 2, 1, 1, 0, 0],
}


const numericMappings = {
    0: [0, 0, 2, 1, 1, 0],
    1: [1, 0, 2, 0, 0, 1],
    2: [0, 1, 2, 0, 0, 1],
    3: [1, 1, 2, 0, 0, 0],
    4: [0, 0, 2, 1, 0, 1],
    5: [1, 0, 2, 1, 0, 0],
    6: [0, 1, 2, 1, 0, 0],
    7: [0, 0, 2, 0, 1, 1],
    8: [1, 0, 2, 0, 1, 0],
    9: [0, 1, 2, 0, 1, 0],
}

const symbolMappings = {
    '*': [0, 2, 0, 1, 1, 0],
    ' ': [0, 2, 1, 0, 1, 0],
    '-': [0, 2, 0, 0, 1, 1],
}

const allMappings = {
    ...alphabetMappings,
    ...numericMappings,
    ...symbolMappings
}

export default allMappings