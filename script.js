// Conversion rate (approximate)
const costPerCoin = 0.0436; // SAR per coin

// Full coins required per level (NOT cumulative)
const levelCoins = {
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

// Calculate cost from a number of coins
function calculateCost() {
    const coins = parseInt(document.getElementById('diamonds-input').value, 10);
    if (isNaN(coins) || coins < 0) {
        document.getElementById('cost-result').textContent = "Please enter a valid number of coins.";
        return;
    }

    const totalSAR = coins * costPerCoin;
    document.getElementById('cost-result').textContent = `Cost: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}

// Calculate revenue from coins assuming 50% donation
function calculateRevenue() {
    const coins = parseInt(document.getElementById('revenue-input').value, 10);
    if (isNaN(coins) || coins < 0) {
        document.getElementById('revenue-result').textContent = "Please enter a valid number of coins.";
        return;
    }

    const totalSAR = (coins * costPerCoin) / 2;
    document.getElementById('revenue-result').textContent = `Revenue: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}

// Calculate the coins and cost for going from one level to another
function calculateLevel() {
    const from = parseInt(document.getElementById('level-from').value, 10);
    const to = parseInt(document.getElementById('level-to').value, 10);

    if (isNaN(from) || isNaN(to) || from < 1 || to < 1 || to <= from) {
        document.getElementById('level-result').textContent = "Please enter valid 'From' and 'To' levels (To > From).";
        return;
    }

    let coinsNeeded = 0;
    for (let lvl = from + 1; lvl <= to; lvl++) {
        coinsNeeded += levelCoins[lvl];
    }

    const totalSAR = coinsNeeded * costPerCoin;
    document.getElementById('level-result').textContent = `Coins Needed: ${coinsNeeded.toLocaleString()} Cost: ${totalSAR.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SAR`;
}

// Add this at the end of the file to populate the Popular Gifts table
document.addEventListener('DOMContentLoaded', function() {
    const gifts = [
        { name: 'البرج', coins: 30000 },
        { name: 'النفوذ', coins: 30000 },
        { name: 'الفارس', coins: 29999 },
        { name: 'ذيب', coins: 29999 },
        { name: 'سفينة حربية', coins: 29999 },
        { name: 'النمر العربي', coins: 24999 },
        { name: 'إلى الفضاء', coins: 18999 },
        { name: 'سيارة رياضية', coins: 18999 },
        { name: 'On Fire', coins: 18999 },
        { name: 'Sky Love', coins: 18999 },
        { name: 'التدخل السريع', coins: 18999 },
        { name: 'شاهين', coins: 18000 },
        { name: 'Gorilla', coins: 18000 },
        { name: 'جواهر', coins: 15000 },
        { name: 'The Protector', coins: 15000 },
        { name: 'المكوك', coins: 15000 },
        { name: 'عوية الذيب', coins: 15000 },
        { name: 'يوم المهلب', coins: 15000 },
        { name: 'مارادونا', coins: 10000 },
        { name: 'تيرق وترعد', coins: 10000 },
        { name: 'الفارسه', coins: 10000 },
        { name: 'جلاد النار', coins: 10000 },
        { name: 'Team Attack', coins: 10000 },
        { name: 'On fire', coins: 10000 },
        { name: 'Team Attack', coins: 10000 },
        { name: 'ضربة راس', coins: 10000 },
        { name: 'أسد طويق', coins: 10000 },
        { name: 'الفارسه', coins: 10000 },
        { name: 'جلاد النار', coins: 10000 },
        { name: 'Geneva', coins: 5000 },
        { name: 'رحلة غروب', coins: 5000 },
        { name: 'القوة الضاربة', coins: 5000 },
        { name: 'A1A', coins: 8707 },
        { name: 'التنين الأسطوري', coins: 7777 },
        { name: 'Cyber Jaco', coins: 7777 },
        { name: 'Joker', coins: 7000 },
        { name: 'Speed Up', coins: 7000 },
        { name: 'سندريلا', coins: 6999 },
        { name: 'التنين', coins: 9499 },
        { name: 'قصر', coins: 9999 },
        { name: 'المصمك', coins: 9999 },
        { name: 'صقر', coins: 8999 },
        { name: 'الأفعوانية', coins: 8999 },
        { name: 'Scar Face', coins: 29999 },
        { name: 'Time Out', coins: 29999 },
        { name: 'Grim Reaper', coins: 29999 },
        { name: 'Disaster', coins: 29999 },
        { name: 'Game Over', coins: 29999 },
        { name: 'Poison', coins: 20000 },
        { name: 'Ghost', coins: 19999 },
        { name: 'الصقر', coins: 29999 },
        { name: 'The King', coins: 29999 },
        { name: 'القوس', coins: 29999 },
        { name: 'المحارب', coins: 29999 },
        { name: 'عربة خيل', coins: 1999 },
        { name: 'بخور', coins: 399 },
        { name: 'النصر', coins: 1999 },
        { name: 'العلم', coins: 499 },
        { name: 'كفو', coins: 49 },
        { name: 'موهيتو', coins: 9 },
        { name: 'عصير', coins: 9 },
        { name: 'شطه', coins: 9 },
        { name: 'ضحك', coins: 29 },
        { name: 'نعنعش', coins: 6 },
        { name: 'قلب', coins: 499 },
        { name: 'عام الإبل', coins: 2024 },
        { name: 'قهوة', coins: 999 },
        { name: 'خاتم', coins: 699 },
        { name: 'موزة', coins: 66 },
        { name: 'بياله شاهي', coins: 29 },
        { name: 'بدون دموع', coins: 19 },
        { name: 'حلاو', coins: 1 },
        { name: 'آيس كريم', coins: 1 },
        { name: 'سيارة رالي', coins: 1699 },
        { name: 'لؤلؤة', coins: 39 },
        { name: 'خلط', coins: 299 },
        { name: 'قطة', coins: 299 },
        { name: 'دريل', coins: 299 },
        { name: 'شربك', coins: 199 },
        { name: 'خاتم', coins: 699 },
        { name: 'عود', coins: 499 },
        { name: 'صندوق جاكو', coins: 499 },
        { name: 'أضواء', coins: 399 },
        { name: 'التابوت', coins: 399 },
        { name: 'الشبح الصغير', coins: 399 },
        { name: 'الحلو المسكت', coins: 399 },
        { name: 'مسدس موية', coins: 299 },
        { name: 'خشـمك', coins: 999 },
        { name: 'الأول', coins: 999 },
        { name: 'عصا سحرية', coins: 800 },
        { name: 'بوليفارد رن واي', coins: 399 },
        { name: 'لؤلؤة', coins: 39 },
        { name: 'ضحك', coins: 29 },
        { name: 'نعنعش', coins: 6 },
        { name: 'علم', coins: 199 },
        { name: 'فراشة', coins: 199 },
        { name: 'مايك', coins: 49 },
        { name: 'سيكل', coins: 99 },
        { name: 'ساعة يد', coins: 49 },
        { name: 'صبار', coins: 29 },
        { name: 'كليجة', coins: 9 },
        { name: 'شنب', coins: 69 },
        { name: 'مصاقيل', coins: 59 },
        { name: 'دونات', coins: 9 },
        { name: 'كعك', coins: 9 },
        { name: 'مصاصة', coins: 9 },
        { name: 'F15', coins: 4999 },
        { name: 'خزامى', coins: 99 },
        { name: 'منصة جاكو', coins: 999 },
        { name: 'عربة خيل', coins: 1999 },
        { name: 'بخور', coins: 399 },
        { name: 'النصر', coins: 1999 },
        { name: 'العلم', coins: 499 }
    ];
    const tbody = document.getElementById('gift-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        gifts.forEach(gift => {
            const sar = (gift.coins * costPerCoin).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style='padding:8px; text-align:center;'>${gift.name}</td>
                <td style='padding:8px; text-align:center;'>${gift.coins}</td>
                <td style='padding:8px; text-align:center;'>${sar} ر.س</td>
            `;
            tbody.appendChild(tr);
        });
    }
});

// Hide loading screen and show A2HS banner if not installed
window.addEventListener('DOMContentLoaded', function() {
  // Hide loading screen
  var loading = document.getElementById('loading-screen');
  if (loading) loading.style.display = 'none';

  // Show A2HS banner if not standalone
  if (window.matchMedia('(display-mode: standalone)').matches === false) {
    var a2hs = document.getElementById('a2hs-banner');
    if (a2hs) a2hs.style.display = 'block';
  }
});
