// Conversion rate (approximate)
const costPerDiamond = 0.0436; // SAR per diamond

// Full diamonds required per level (NOT cumulative)
const levelDiamonds = {
    1: 1,
    2: 20,
    3: 50,
    4: 120,
    5: 250,
    6: 630,
    7: 1260,
    8: 2560,
    9: 4260,
    10: 6250,
    11: 8500,
    12: 10080,
    13: 12000,
    14: 14200,
    15: 16900,
    16: 20000,
    17: 24000,
    18: 28000,
    19: 33000,
    20: 39600,
    21: 47000,
    22: 55700,
    23: 66100,
    24: 78500,
    25: 93000,
    26: 110000,
    27: 131000,
    28: 156000,
    29: 185000,
    30: 218000,
    31: 259000,
    32: 308000,
    33: 366000,
    34: 434000,
    35: 515000,
    36: 611000,
    37: 725000,
    38: 859000,
    39: 1020000,
    40: 1210000,
    41: 1440000,
    42: 1700000,
    43: 2020000,
    44: 2390000,
    45: 2850000,
    46: 3380000,
    47: 4000000,
    48: 4750000,
    49: 5640000,
    50: 6700000,
    51: 7940000,
    52: 9420000,
    53: 11180000,
    54: 13200000,
    55: 15700000,
    56: 18700000,
    57: 22200000,
    58: 26300000,
    59: 31200000,
    60: 37000000,
    61: 43900000,
    62: 52000000,
    63: 61800000,
    64: 73300000,
    65: 87000000,
    66: 103000000,
    67: 122000000,
    68: 145000000,
    69: 172000000,
    70: 205000000
};

// Function to show the correct section based on selected option
function showSection(section) {
    document.getElementById('cost-section').classList.add('hidden');
    document.getElementById('revenue-section').classList.add('hidden');
    document.getElementById('lvl-section').classList.add('hidden');

    document.getElementById(`${section}-section`).classList.remove('hidden');
}

// Calculate cost from a number of diamonds
function calculateCost() {
    const diamonds = parseInt(document.getElementById('diamonds-input').value, 10);
    if (isNaN(diamonds) || diamonds < 0) {
        document.getElementById('cost-result').textContent = "Please enter a valid number of diamonds.";
        return;
    }

    const totalSAR = diamonds * costPerDiamond;
    document.getElementById('cost-result').textContent = `Cost: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}

// Calculate revenue from diamonds assuming 50% donation
function calculateRevenue() {
    const diamonds = parseInt(document.getElementById('revenue-input').value, 10);
    if (isNaN(diamonds) || diamonds < 0) {
        document.getElementById('revenue-result').textContent = "Please enter a valid number of diamonds.";
        return;
    }

    const totalSAR = (diamonds * costPerDiamond) / 2;
    document.getElementById('revenue-result').textContent = `Revenue: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}

// Calculate the diamonds and cost for going from one level to another
function calculateLevel() {
    const from = parseInt(document.getElementById('level-from').value, 10);
    const to = parseInt(document.getElementById('level-to').value, 10);

    if (isNaN(from) || isNaN(to) || from < 1 || to < 1 || to <= from) {
        document.getElementById('level-result').textContent = "Please enter valid 'From' and 'To' levels (To > From).";
        return;
    }

    let diamondsNeeded = 0;
    for (let lvl = from + 1; lvl <= to; lvl++) {
        diamondsNeeded += levelDiamonds[lvl];
    }

    const totalSAR = diamondsNeeded * costPerDiamond;
    document.getElementById('level-result').textContent = `Diamonds Needed: ${diamondsNeeded.toLocaleString()} Cost: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}
