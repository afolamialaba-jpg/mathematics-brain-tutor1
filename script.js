const curriculum = {
  JSS1: [
    {
      title: "Number & numeration", term: "First term · Number",
      intro: "Numbers help us count, compare and describe quantities. Place value tells you what each digit is worth; a digit's value changes with its position.",
      points: ["In 5,284, the 5 means 5,000, the 2 means 200, the 8 means 80 and the 4 means 4.", "Compare whole numbers from the left: at the first different digit, the larger digit belongs to the greater number.", "Roman numerals use I, V, X, L, C, D and M. A smaller numeral before a larger one is subtracted (IV = 4)."],
      example: ["What is the value of 7 in 37,465?", "The 7 is in the thousands place, so its value is <strong>7,000</strong>."],
      questions: [
        ["What is the value of 6 in 46,281?", ["6", "60", "6,000", "60,000"], 2, "The 6 is in the thousands place: 6 × 1,000 = 6,000."],
        ["Which is the greatest number?", ["5,902", "5,920", "5,209", "5,290"], 1, "Compare digits from left to right. 5,920 is greatest."],
        ["Write 4,306 in expanded form.", ["4,000 + 300 + 6", "4,000 + 30 + 6", "400 + 30 + 6", "4,000 + 300 + 60"], 0, "4,306 = 4 thousands + 3 hundreds + 0 tens + 6 units."],
        ["What is the Roman numeral for 9?", ["XI", "IX", "IV", "VI"], 1, "I before X means subtract 1 from 10: IX = 9."]
      ]
    },
    {
      title: "Whole number operations", term: "First term · Number",
      intro: "Addition, subtraction, multiplication and division are the four basic operations. Brackets and operation order keep calculations consistent.",
      points: ["Use BODMAS: Brackets, Orders (powers), Division and Multiplication, Addition and Subtraction.", "Multiplication and division have equal priority; work from left to right. The same applies to addition and subtraction.", "Estimate first to check whether an answer is sensible. Multiplication can be checked with division."],
      example: ["Work out 36 ÷ 4 + 5 × 2.", "Division and multiplication first: 9 + 10 = <strong>19</strong>."],
      questions: [
        ["Work out 48 ÷ 6 + 7.", ["15", "8", "14", "55"], 0, "Divide first: 48 ÷ 6 = 8; then 8 + 7 = 15."],
        ["What is 125 × 8?", ["900", "1,000", "1,025", "800"], 1, "125 × 8 = 1,000."],
        ["Work out (18 − 6) × 3.", ["30", "36", "12", "54"], 1, "Brackets first: 18 − 6 = 12; then 12 × 3 = 36."],
        ["A school has 9 classes with 32 pupils each. How many pupils?", ["288", "248", "298", "320"], 0, "9 × 32 = 288 pupils."]
      ]
    },
    {
      title: "Factors, multiples & primes", term: "First term · Number",
      intro: "Factors divide a number exactly, while multiples are found by multiplying. Prime numbers have exactly two factors: 1 and themselves.",
      points: ["Factors of 12 are 1, 2, 3, 4, 6 and 12.", "A prime number is greater than 1; 1 is neither prime nor composite.", "The HCF is the greatest common factor. The LCM is the smallest positive common multiple."],
      example: ["Find the HCF of 12 and 18.", "Common factors are 1, 2, 3 and 6. The greatest is <strong>6</strong>."],
      questions: [
        ["Which number is prime?", ["21", "27", "29", "33"], 2, "29 has only 1 and 29 as factors."],
        ["What is the LCM of 4 and 6?", ["2", "10", "12", "24"], 2, "Multiples: 4, 8, 12… and 6, 12… The least common one is 12."],
        ["What is the HCF of 15 and 25?", ["5", "10", "15", "75"], 0, "Their common factors are 1 and 5; the HCF is 5."],
        ["Which is a factor of 36?", ["5", "7", "8", "9"], 3, "36 ÷ 9 = 4, so 9 is a factor."]
      ]
    },
    {
      title: "Fractions, decimals & percentages", term: "First term · Number",
      intro: "Fractions, decimals and percentages are different ways to represent parts of a whole. Convert between them to choose the easiest form for a calculation.",
      points: ["Equivalent fractions have the same value: multiply or divide the numerator and denominator by the same number.", "To add or subtract fractions, use a common denominator. Multiply numerators and denominators to multiply fractions.", "Percent means 'out of 100': 0.25 = ¼ = 25%. To find a percentage, multiply by the percentage as a fraction."],
      example: ["Find ¾ of 20.", "¾ × 20 = 3 × 5 = <strong>15</strong>."],
      questions: [
        ["What is ⅗ as a percentage?", ["30%", "50%", "60%", "80%"], 2, "⅗ = 0.6; 0.6 × 100 = 60%."],
        ["Work out ½ + ¼.", ["¾", "⅔", "⅛", "1"], 0, "½ = 2/4, so 2/4 + 1/4 = 3/4."],
        ["What is 0.35 as a fraction in its simplest form?", ["35/10", "7/20", "3/5", "35/100"], 1, "0.35 = 35/100. Divide top and bottom by 5 to get 7/20."],
        ["Find 20% of 150.", ["20", "25", "30", "35"], 2, "10% of 150 is 15, so 20% is 30."]
      ]
    },
    {
      title: "Ratio, rate & proportion", term: "Second term · Number",
      intro: "A ratio compares quantities by division. Rates compare quantities with different units, and proportion helps scale quantities up or down.",
      points: ["Write ratios in the same units and simplify by dividing every part by the same common factor.", "A rate such as 60 km/h compares distance with time.", "For a direct proportion, multiplying one quantity by a factor multiplies the other by the same factor."],
      example: ["Share 24 mangoes in the ratio 1:3.", "There are 4 parts; each part is 24 ÷ 4 = 6. Shares are <strong>6 and 18</strong>."],
      questions: [
        ["Simplify the ratio 12:18.", ["2:3", "3:2", "6:9", "4:9"], 0, "Divide both terms by their HCF, 6: 12:18 = 2:3."],
        ["A car travels 120 km in 2 hours. What is its average speed?", ["60 km/h", "240 km/h", "122 km/h", "30 km/h"], 0, "Speed = distance ÷ time = 120 ÷ 2 = 60 km/h."],
        ["If 3 notebooks cost ₦450, how much do 5 cost at the same rate?", ["₦600", "₦750", "₦900", "₦1,050"], 1, "One costs ₦150; 5 cost 5 × ₦150 = ₦750."],
        ["Divide 40 in the ratio 3:5. What is the larger share?", ["15", "20", "25", "30"], 2, "There are 8 parts; each is 5. The larger share is 5 × 5 = 25."]
      ]
    },
    {
      title: "Directed numbers", term: "Second term · Number",
      intro: "Directed numbers include positive numbers, negative numbers and zero. They are useful for temperatures, debts and positions above or below a reference point.",
      points: ["On a number line, numbers increase as you move right; −2 is greater than −5.", "Adding a negative is like subtracting: 4 + (−7) = −3.", "Subtracting a negative is like adding: 6 − (−2) = 8. For multiplication, same signs give positive; different signs give negative."],
      example: ["Work out −3 + 8.", "Start at −3 and move 8 places right: <strong>5</strong>."],
      questions: [
        ["Which number is greater?", ["−8", "−3", "−10", "−12"], 1, "On the number line, −3 is furthest right and is the greatest."],
        ["Work out 7 + (−11).", ["4", "−4", "18", "−18"], 1, "7 − 11 = −4."],
        ["Work out −4 × 3.", ["12", "−12", "7", "−7"], 1, "Different signs give a negative: 4 × 3 = 12, so −12."],
        ["At 2°C, the temperature falls by 6°C. What is it now?", ["8°C", "4°C", "−4°C", "−8°C"], 2, "2 − 6 = −4°C."]
      ]
    },
    {
      title: "Algebraic expressions", term: "Second term · Algebra",
      intro: "Algebra uses letters to stand for numbers. An expression combines variables, numbers and operations; simplifying collects like terms.",
      points: ["In 5x, 5 is the coefficient and x is the variable. 5x means 5 × x.", "Like terms have the same variable part: 3a + 2a = 5a, but 3a + 2b cannot be combined.", "Use the distributive law: a(b + c) = ab + ac."],
      example: ["Simplify 4x + 3 + 2x − 1.", "Collect like terms: (4x + 2x) + (3 − 1) = <strong>6x + 2</strong>."],
      questions: [
        ["Simplify 7a − 3a.", ["4", "4a", "10a", "4a²"], 1, "Subtract the coefficients: 7a − 3a = 4a."],
        ["Expand 3(x + 4).", ["3x + 4", "3x + 12", "x + 12", "7x"], 1, "Multiply each term inside the brackets by 3."],
        ["If y = 5, what is 2y + 3?", ["10", "13", "16", "25"], 1, "Substitute 5 for y: 2 × 5 + 3 = 13."],
        ["Simplify 2m + 3n + m.", ["6mn", "3m + 3n", "5mn", "3m + n"], 1, "Combine the m terms only: 2m + m = 3m."]
      ]
    },
    {
      title: "Simple equations", term: "Second term · Algebra",
      intro: "An equation says that two expressions are equal. Solve it by keeping both sides balanced and undoing operations in reverse order.",
      points: ["Whatever you do to one side of an equation, do to the other side too.", "Use inverse operations: undo addition with subtraction, multiplication with division.", "Check a solution by substituting it into the original equation."],
      example: ["Solve x + 7 = 12.", "Subtract 7 from both sides: x = 12 − 7, so <strong>x = 5</strong>."],
      questions: [
        ["Solve x − 6 = 9.", ["3", "15", "−15", "54"], 1, "Add 6 to both sides: x = 9 + 6 = 15."],
        ["Solve 4y = 28.", ["7", "24", "32", "112"], 0, "Divide both sides by 4: y = 7."],
        ["Solve n/3 = 5.", ["2", "8", "15", "20"], 2, "Multiply both sides by 3: n = 15."],
        ["Solve 2x + 1 = 11.", ["4", "5", "6", "10"], 1, "Subtract 1 to get 2x = 10; divide by 2: x = 5."]
      ]
    },
    {
      title: "Geometry: lines, angles & shapes", term: "Third term · Geometry",
      intro: "Geometry describes shapes, lines and angles. Recognising angle facts and the properties of common 2D shapes makes problems easier to solve.",
      points: ["Angles on a straight line add to 180°; angles around a point add to 360°.", "Vertically opposite angles are equal. A right angle is 90°.", "A triangle has interior angles totalling 180°. A quadrilateral has interior angles totalling 360°."],
      example: ["Two angles on a straight line are 65° and x°. Find x.", "Angles on a straight line sum to 180°: x = 180° − 65° = <strong>115°</strong>."],
      questions: [
        ["One angle on a straight line is 128°. Find the other.", ["42°", "52°", "62°", "128°"], 1, "Angles on a straight line sum to 180°: 180° − 128° = 52°."],
        ["Two angles in a triangle are 45° and 75°. Find the third.", ["50°", "60°", "70°", "80°"], 1, "180° − 45° − 75° = 60°."],
        ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1, "A hexagon has six sides."],
        ["What is the size of a right angle?", ["45°", "90°", "180°", "360°"], 1, "A right angle measures 90°."]
      ]
    },
    {
      title: "Measurement & mensuration", term: "Third term · Measurement",
      intro: "Measurement assigns numbers and units to length, mass, time and capacity. Perimeter measures the boundary; area measures the surface inside it.",
      points: ["1 m = 100 cm; 1 km = 1,000 m; 1 kg = 1,000 g; 1 litre = 1,000 ml.", "Perimeter of a rectangle = 2(length + width); area = length × width.", "Area is measured in square units (cm², m²). Always write the correct unit."],
      example: ["Find the area of a rectangle 8 cm long and 3 cm wide.", "Area = length × width = 8 × 3 = <strong>24 cm²</strong>."],
      questions: [
        ["Convert 3.5 m to centimetres.", ["35 cm", "350 cm", "3,500 cm", "0.35 cm"], 1, "3.5 × 100 = 350 cm."],
        ["Find the perimeter of a square with side 6 cm.", ["12 cm", "24 cm", "36 cm", "18 cm"], 1, "A square has four equal sides: 4 × 6 = 24 cm."],
        ["Find the area of a rectangle 9 m by 4 m.", ["13 m²", "26 m²", "36 m²", "72 m²"], 2, "Area = 9 × 4 = 36 m²."],
        ["How many minutes are in 2 hours 15 minutes?", ["125", "130", "135", "215"], 2, "2 hours = 120 minutes; 120 + 15 = 135 minutes."]
      ]
    },
    {
      title: "Data handling & statistics", term: "Third term · Statistics",
      intro: "Statistics helps us collect, organise and interpret information. Tables and charts show data clearly; averages summarise a set of numbers.",
      points: ["A frequency table records how often each value occurs. Bar-chart bars have gaps; a title and labelled axes are important.", "Mean = total of values ÷ number of values. Median is the middle after sorting.", "Mode is the most frequent value; range = largest value − smallest value."],
      example: ["Find the mean of 2, 4 and 9.", "Mean = (2 + 4 + 9) ÷ 3 = 15 ÷ 3 = <strong>5</strong>."],
      questions: [
        ["Find the mean of 3, 5, 7 and 9.", ["5", "6", "7", "24"], 1, "Sum = 24; divide by 4 values: mean = 6."],
        ["Find the median of 2, 4, 8, 10, 12.", ["4", "8", "10", "12"], 1, "The ordered list has five values; the middle (third) is 8."],
        ["What is the mode of 1, 2, 2, 3, 5?", ["1", "2", "3", "5"], 1, "2 occurs more often than any other value."],
        ["Find the range of 6, 11, 4, 15.", ["9", "10", "11", "19"], 2, "Range = largest − smallest = 15 − 4 = 11."]
      ]
    },
    {
      title: "Approximation & estimation", term: "Third term · Number",
      intro: "Rounding and estimation make calculations quicker and help you check whether an answer is reasonable. State the degree of accuracy whenever you round.",
      points: ["To round to the nearest whole number, check the tenths digit; 5 or more rounds up.", "For decimal places, count digits after the decimal point. For significant figures, start at the first non-zero digit.", "Estimate by rounding numbers to friendly values, then check the exact answer is close to your estimate."],
      example: ["Estimate 48 × 19.", "Round 48 to 50 and 19 to 20: 50 × 20 = <strong>1,000</strong>."],
      questions: [
        ["Round 36.7 to the nearest whole number.", ["36", "37", "36.5", "40"], 1, "The tenths digit is 7, so round 36 up to 37."],
        ["Round 5.284 to 1 decimal place.", ["5.2", "5.3", "5.28", "5.29"], 1, "The second decimal digit is 8, so 5.2 rounds up to 5.3."],
        ["Which is the best estimate for 198 + 403?", ["500", "600", "700", "800"], 1, "Round to 200 + 400 = 600."],
        ["Round 7,649 to the nearest thousand.", ["7,000", "7,500", "8,000", "7,600"], 2, "The hundreds digit is 6, so round 7,000 up to 8,000."]
      ]
    },
    {
      title: "Sets & Venn diagrams", term: "Third term · Number",
      intro: "A set is a collection of distinct objects. Set notation and Venn diagrams help organise groups and show what they have in common.",
      points: ["A set is written in braces, for example A = {1, 2, 3}. Each member is an element of the set.", "The intersection A ∩ B contains elements in both sets; the union A ∪ B contains elements in either set or both.", "A Venn diagram uses overlapping circles inside a rectangle to show sets and the universal set."],
      example: ["A = {1, 2, 3} and B = {2, 3, 4}. Find A ∩ B.", "The elements in both sets are 2 and 3, so A ∩ B = <strong>{2, 3}</strong>."],
      questions: [
        ["If A = {a, b, c}, which is an element of A?", ["d", "b", "e", "f"], 1, "The element b is listed in set A."],
        ["A = {1, 2, 3} and B = {3, 4}. Find A ∩ B.", ["{1, 2, 3, 4}", "{1, 2}", "{3}", "{4}"], 2, "The only element common to A and B is 3."],
        ["A = {1, 2} and B = {2, 3}. Find A ∪ B.", ["{2}", "{1, 2, 3}", "{1, 3}", "{1, 2, 2, 3}"], 1, "The union contains each element in either set, without repetition."],
        ["If there are 5 pupils in a set and 2 are also in another set, how many are only in the first set?", ["2", "3", "5", "7"], 1, "The 2 shared pupils are part of the 5, leaving 5 − 2 = 3 only in the first set."]
      ]
    }
  ],
  JSS2: [
    {
      title: "Number bases & indices", term: "First term · Number",
      intro: "A number base tells you how many digits are used to write numbers. Indices (powers) are a concise way to write repeated multiplication.",
      points: ["In base 5, digits are 0–4. The place values are powers of 5: …, 125, 25, 5, 1.", "Convert a base-ten number by repeated division; convert to base ten by multiplying each digit by its place value.", "For positive whole numbers, aᵐ × aⁿ = aᵐ⁺ⁿ and aᵐ ÷ aⁿ = aᵐ⁻ⁿ (a ≠ 0)."],
      example: ["Convert 23₅ to base ten.", "2 × 5 + 3 = <strong>13₁₀</strong>."],
      questions: [
        ["Convert 101₂ to base ten.", ["3", "4", "5", "6"], 2, "1 × 4 + 0 × 2 + 1 × 1 = 5."],
        ["What is 3² × 3³?", ["3⁵", "3⁶", "9⁵", "6⁵"], 0, "For the same base, add exponents: 3² × 3³ = 3⁵."],
        ["Convert 14₅ to base ten.", ["9", "14", "25", "7"], 0, "1 × 5 + 4 = 9."],
        ["What is 2⁴?", ["8", "12", "16", "24"], 2, "2⁴ = 2 × 2 × 2 × 2 = 16."]
      ]
    },
    {
      title: "Fractions, ratio & proportion", term: "First term · Number",
      intro: "Use fractions to work with parts, ratios to compare quantities, and proportions to scale quantities while keeping their relationship constant.",
      points: ["To divide by a fraction, multiply by its reciprocal: a ÷ b/c = a × c/b.", "In a ratio, add the parts to find the total number of equal shares before dividing.", "Direct proportion has a constant unit rate. Check that units match before comparing."],
      example: ["Share ₦360 in the ratio 2:4.", "There are 6 parts; each is ₦60. Shares: ₦120 and <strong>₦240</strong>."],
      questions: [
        ["Work out ⅔ ÷ ⅙.", ["2", "3", "4", "12"], 2, "Multiply by the reciprocal: ⅔ × 6 = 4."],
        ["Simplify 21:28.", ["3:4", "4:3", "7:8", "6:7"], 0, "Divide both terms by 7 to get 3:4."],
        ["If 4 kg of rice costs ₦3,200, what does 1 kg cost?", ["₦400", "₦800", "₦1,200", "₦12,800"], 1, "₦3,200 ÷ 4 = ₦800 per kg."],
        ["Share 35 in the ratio 2:5. What is the smaller share?", ["5", "10", "14", "25"], 1, "There are 7 parts; each is 5. The smaller share is 2 × 5 = 10."]
      ]
    },
    {
      title: "Percentages & financial maths", term: "First term · Number",
      intro: "Percentages make comparisons out of 100. They are used for discounts, profit, loss, simple interest and everyday money decisions.",
      points: ["Percentage change = change ÷ original amount × 100%.", "Discount = percentage × marked price; sale price = marked price − discount.", "Simple interest I = PRT/100, where P is principal, R is annual rate (%) and T is time in years."],
      example: ["A ₦2,000 bag has a 10% discount. Find the sale price.", "Discount = 10% × ₦2,000 = ₦200. Sale price = <strong>₦1,800</strong>."],
      questions: [
        ["Find 15% of ₦800.", ["₦80", "₦100", "₦120", "₦150"], 2, "0.15 × ₦800 = ₦120."],
        ["A shirt costs ₦5,000 and is reduced by 20%. What is the sale price?", ["₦1,000", "₦3,000", "₦4,000", "₦4,800"], 2, "20% of ₦5,000 = ₦1,000 discount; sale price = ₦4,000."],
        ["Find the simple interest on ₦10,000 at 5% for 2 years.", ["₦500", "₦1,000", "₦1,500", "₦2,000"], 1, "I = PRT/100 = 10,000 × 5 × 2 ÷ 100 = ₦1,000."],
        ["A value rises from 40 to 50. What is the percentage increase?", ["10%", "20%", "25%", "50%"], 2, "Increase is 10; 10 ÷ 40 × 100% = 25%."]
      ]
    },
    {
      title: "Approximation & standard form", term: "First term · Number",
      intro: "Rounding gives a useful nearby value. Standard form writes very large or very small numbers as a number from 1 to less than 10 multiplied by a power of ten.",
      points: ["To round to a given place, look at the digit immediately to its right: 5 or more rounds up.", "Significant figures start at the first non-zero digit; zeros between significant digits count.", "Standard form is A × 10ⁿ, where 1 ≤ A < 10 and n is an integer."],
      example: ["Write 56,300 in standard form.", "Move the decimal point four places left: <strong>5.63 × 10⁴</strong>."],
      questions: [
        ["Round 7.386 to 2 decimal places.", ["7.38", "7.39", "7.40", "7.30"], 1, "The third decimal digit is 6, so round the hundredths digit up: 7.39."],
        ["Round 4,768 to the nearest hundred.", ["4,700", "4,760", "4,800", "5,000"], 2, "The tens digit is 6, so round 4,700 up to 4,800."],
        ["Write 0.00052 in standard form.", ["5.2 × 10⁻⁴", "5.2 × 10⁴", "52 × 10⁻⁵", "0.52 × 10⁻³"], 0, "Move the decimal 4 places right to get 5.2, so the power is −4."],
        ["Give 83,491 to 2 significant figures.", ["83,000", "83,500", "84,000", "80,000"], 0, "The first two significant digits are 8 and 3. The next digit is 4, so it remains 83,000." ]
      ]
    },
    {
      title: "Algebra: expressions & factorisation", term: "Second term · Algebra",
      intro: "Algebraic expressions can be simplified, expanded and factorised. Factorising reverses expansion by taking out a common factor.",
      points: ["Collect only like terms, such as 4x + 2x = 6x.", "Expand brackets by multiplying every term inside: 2(3x − 4) = 6x − 8.", "Factorise by finding the highest common factor of all terms: 6x + 9 = 3(2x + 3)."],
      example: ["Factorise 8x + 12.", "The highest common factor is 4: 8x + 12 = <strong>4(2x + 3)</strong>."],
      questions: [
        ["Simplify 5a + 3 − 2a + 4.", ["3a + 7", "7a + 7", "3a − 1", "7a + 1"], 0, "Combine 5a − 2a = 3a and 3 + 4 = 7."],
        ["Expand 4(2x − 3).", ["8x − 3", "8x − 12", "6x − 12", "8x + 12"], 1, "Multiply both terms by 4: 8x − 12."],
        ["Factorise 10y + 15.", ["5(2y + 3)", "10(y + 15)", "5(2y + 15)", "15(y + 10)"], 0, "The highest common factor is 5: 5(2y + 3)."],
        ["If a = 3 and b = 2, find 2a² + b.", ["14", "16", "20", "22"], 2, "2 × 3² + 2 = 2 × 9 + 2 = 20."]
      ]
    },
    {
      title: "Equations & inequalities", term: "Second term · Algebra",
      intro: "Solve linear equations using inverse operations. Inequalities compare values and use signs such as <, >, ≤ and ≥.",
      points: ["Keep an equation balanced by applying the same operation to both sides.", "When multiplying or dividing an inequality by a negative number, reverse its sign.", "Check an equation's solution by substituting it back into the original statement."],
      example: ["Solve 3x − 4 = 11.", "Add 4: 3x = 15. Divide by 3: <strong>x = 5</strong>."],
      questions: [
        ["Solve 5x + 2 = 22.", ["4", "5", "6", "10"], 0, "Subtract 2 to get 5x = 20; divide by 5: x = 4."],
        ["Solve 2(y − 3) = 10.", ["2", "5", "8", "13"], 2, "Divide by 2: y − 3 = 5; add 3: y = 8."],
        ["Which number satisfies x + 4 < 9?", ["6", "5", "4", "10"], 2, "Subtract 4: x < 5. Of these choices, 4 satisfies it."],
        ["Solve 7 − 2x = 1.", ["−3", "3", "4", "6"], 1, "Subtract 7: −2x = −6; divide by −2: x = 3."]
      ]
    },
    {
      title: "Angles, polygons & constructions", term: "Second term · Geometry",
      intro: "Angle relationships help find unknown angles. Polygon properties and accurate ruler-and-compass constructions are important geometry skills.",
      points: ["Angles in a triangle total 180°; angles in a quadrilateral total 360°.", "The sum of interior angles of an n-sided polygon is (n − 2) × 180°.", "A protractor measures angles. A compass and ruler can construct perpendicular bisectors and angle bisectors."],
      example: ["Find each interior angle of a regular hexagon.", "Sum = (6 − 2) × 180° = 720°. Each = 720° ÷ 6 = <strong>120°</strong>."],
      questions: [
        ["What is the sum of the interior angles of a pentagon?", ["360°", "540°", "720°", "900°"], 1, "(5 − 2) × 180° = 540°."],
        ["Each exterior angle of a regular polygon is 45°. How many sides does it have?", ["6", "8", "10", "12"], 1, "Exterior angles sum to 360°; 360° ÷ 45° = 8 sides."],
        ["Two angles of a triangle are 38° and 92°. Find the third.", ["40°", "50°", "60°", "70°"], 1, "180° − 38° − 92° = 50°."],
        ["What instrument is used to measure an angle?", ["Compass", "Protractor", "Set square only", "Divider"], 1, "A protractor is the standard instrument for measuring angles."]
      ]
    },
    {
      title: "Mensuration & Pythagoras", term: "Third term · Measurement",
      intro: "Mensuration finds lengths, perimeters, areas and volumes. Pythagoras' theorem connects the sides of a right-angled triangle.",
      points: ["Area of a triangle = ½ × base × perpendicular height; area of a parallelogram = base × perpendicular height.", "Volume of a cuboid = length × width × height; surface area is measured in square units.", "For a right triangle, hypotenuse² = shorter side² + other shorter side². The hypotenuse is opposite the right angle."],
      example: ["A right triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.", "c² = 6² + 8² = 100, so c = √100 = <strong>10 cm</strong>."],
      questions: [
        ["Find the area of a triangle with base 10 cm and height 6 cm.", ["16 cm²", "30 cm²", "60 cm²", "80 cm²"], 1, "Area = ½ × 10 × 6 = 30 cm²."],
        ["Find the volume of a cuboid 4 cm × 3 cm × 5 cm.", ["12 cm³", "20 cm³", "60 cm³", "120 cm³"], 2, "Volume = 4 × 3 × 5 = 60 cm³."],
        ["A right triangle has shorter sides 5 cm and 12 cm. Find its hypotenuse.", ["13 cm", "15 cm", "17 cm", "60 cm"], 0, "c² = 5² + 12² = 169, so c = 13 cm."],
        ["A square has area 49 cm². Find its perimeter.", ["14 cm", "21 cm", "28 cm", "49 cm"], 2, "Side = √49 = 7 cm; perimeter = 4 × 7 = 28 cm."]
      ]
    },
    {
      title: "Coordinates & graphs", term: "Third term · Algebra",
      intro: "Coordinates locate points on a grid, and graphs show how quantities are related. Read and plot carefully using the correct scale and axis order.",
      points: ["Coordinates are written (x, y): move along the x-axis first, then up or down the y-axis.", "The origin is (0, 0). The horizontal axis is x; the vertical axis is y.", "A straight-line graph can represent a relationship such as y = 2x. Make a table of values, plot points and join them."],
      example: ["For y = 2x + 1, find y when x = 3.", "Substitute x = 3: y = 2(3) + 1 = <strong>7</strong>."],
      questions: [
        ["In which quadrant is the point (−2, 3)?", ["I", "II", "III", "IV"], 1, "Negative x and positive y place the point in quadrant II."],
        ["For y = 3x, find y when x = 4.", ["7", "12", "16", "34"], 1, "Substitute x = 4: y = 3 × 4 = 12."],
        ["What are the coordinates of the origin?", ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"], 3, "The x- and y-axes meet at (0, 0), the origin."],
        ["Which axis is vertical?", ["x-axis", "y-axis", "both", "neither"], 1, "The y-axis runs vertically."]
      ]
    },
    {
      title: "Statistics & probability", term: "Third term · Statistics",
      intro: "Statistics describes and compares data sets. Probability measures how likely an event is, from impossible (0) to certain (1).",
      points: ["Mean = sum ÷ count; median = middle after ordering; mode = most frequent; range = maximum − minimum.", "Probability = number of favourable outcomes ÷ total equally likely outcomes.", "A probability is between 0 and 1 (or 0% and 100%). The probabilities of all outcomes add to 1."],
      example: ["A fair die is rolled. Find the probability of getting an even number.", "Even outcomes are 2, 4 and 6: 3 out of 6, so probability = <strong>½</strong>."],
      questions: [
        ["A bag has 3 red and 2 blue balls. What is the probability of picking red?", ["2/5", "3/5", "1/2", "3/2"], 1, "There are 3 red balls out of 5 total, so the probability is 3/5."],
        ["Find the median of 3, 5, 6, 8, 10, 12.", ["6", "7", "8", "9"], 1, "With 6 values, average the middle two: (6 + 8) ÷ 2 = 7."],
        ["A fair coin is tossed. What is the probability of tails?", ["0", "1/4", "1/2", "1"], 2, "There is 1 tails outcome out of 2 equally likely outcomes."],
        ["If the probability of rain is 0.3, what is the probability it will not rain?", ["0.3", "0.6", "0.7", "1.3"], 2, "Complementary probabilities sum to 1: 1 − 0.3 = 0.7."]
      ]
    },
    {
      title: "Bearings, scale & maps", term: "Third term · Geometry",
      intro: "Bearings give direction measured clockwise from north. Scale drawings and maps represent real distances using a fixed ratio.",
      points: ["A three-figure bearing is measured clockwise from north: east is 090°, south is 180°, west is 270°.", "A scale of 1:50,000 means 1 unit on the map represents 50,000 of the same units in real life.", "Convert units consistently before using a map scale or calculating distance."],
      example: ["On a map with scale 1:100,000, two towns are 3 cm apart. Find the real distance.", "3 × 100,000 = 300,000 cm = 3,000 m = <strong>3 km</strong>."],
      questions: [
        ["What is the bearing of due east?", ["000°", "090°", "180°", "270°"], 1, "Bearings start at north and turn clockwise. Due east is 090°."],
        ["What is the bearing of due south?", ["090°", "135°", "180°", "270°"], 2, "Due south is 180° clockwise from north."],
        ["A map scale is 1:50,000. What real distance does 2 cm represent?", ["100 m", "500 m", "1 km", "10 km"], 2, "2 × 50,000 = 100,000 cm = 1,000 m = 1 km."],
        ["A 4 km journey is shown as 8 cm on a map. What is the scale?", ["1:5,000", "1:20,000", "1:50,000", "1:200,000"], 2, "4 km = 400,000 cm. Scale = 8:400,000 = 1:50,000."]
      ]
    },
    {
      title: "Transformations & symmetry", term: "Third term · Geometry",
      intro: "Transformations move or turn shapes on a coordinate grid. The image keeps the same size and shape under a translation, reflection or rotation.",
      points: ["A translation slides every point by the same distance and direction, described by a vector.", "A reflection flips a shape over a mirror line; each point and its image are equally far from that line.", "A rotation turns a shape about a fixed centre by a stated angle and direction. Lines of symmetry divide a shape into matching halves."],
      example: ["Translate point (2, 1) by vector (3, −2).", "Add 3 to x and −2 to y: (2 + 3, 1 − 2) = <strong>(5, −1)</strong>."],
      questions: [
        ["Translate (1, 4) by vector (2, −3). What is the image?", ["(3, 1)", "(−1, 7)", "(3, 7)", "(−1, 1)"], 0, "Add the vector components: (1 + 2, 4 − 3) = (3, 1)."],
        ["Reflect the point (3, 2) in the x-axis.", ["(−3, 2)", "(3, −2)", "(−3, −2)", "(2, 3)"], 1, "Reflection in the x-axis keeps x and changes the sign of y."],
        ["A quarter-turn is how many degrees?", ["45°", "90°", "180°", "270°"], 1, "A full turn is 360°; a quarter-turn is 360° ÷ 4 = 90°."],
        ["How many lines of symmetry does a non-square rectangle have?", ["1", "2", "3", "4"], 1, "A non-square rectangle has two lines of symmetry through the midpoints of opposite sides."]
      ]
    }
  ]
};

function makeQuestion(prompt, answer, explanation, wrongAnswers, seed) {
  const choices = [String(answer)];
  for (const wrong of wrongAnswers) {
    if (!choices.includes(String(wrong))) choices.push(String(wrong));
    if (choices.length === 4) break;
  }
  let fallback = 1;
  while (choices.length < 4) {
    const candidate = Number(answer) + fallback++;
    if (!choices.includes(String(candidate))) choices.push(String(candidate));
  }
  const correct = choices.shift();
  const offset = seed % 4;
  const options = choices.slice();
  options.splice(offset, 0, correct);
  return [prompt, options, offset, explanation];
}

function numberQuestion(prompt, answer, explanation, seed, suffix = "") {
  const display = value => `${value}${suffix}`;
  const wrongs = [answer + 1, answer - 1, answer + 2, answer - 2].map(display);
  return makeQuestion(prompt, display(answer), explanation, wrongs, seed);
}

function generatedQuestion(topic, seed) {
  const n = seed + 2;
  const m = seed + 3;
  switch (topic) {
    case "Number & numeration": {
      const place = [10, 100, 1000][seed % 3];
      const digit = (seed % 8) + 1;
      const value = digit * place;
      const number = value + ((m * 7 + 4) % place);
      return numberQuestion(`What is the value of ${digit} in ${number}?`, value, `The ${digit} is in the ${place === 10 ? "tens" : place === 100 ? "hundreds" : "thousands"} place, so its value is ${value}.`, seed);
    }
    case "Whole number operations": {
      const a = n * 4, b = n + 3;
      const answer = a + b * 2;
      return numberQuestion(`Work out ${a} + ${b} × 2.`, answer, `Multiply first: ${b} × 2 = ${b * 2}; then add ${a} to get ${answer}.`, seed);
    }
    case "Factors, multiples & primes": {
      const a = n * 2, b = n * 3;
      return numberQuestion(`What is the HCF of ${a} and ${b}?`, n, `${a} and ${b} are both multiples of ${n}; their greatest common factor is ${n}.`, seed);
    }
    case "Fractions, decimals & percentages": {
      const percent = [10, 20, 25, 50][seed % 4];
      const amount = n * 4;
      const answer = amount * percent / 100;
      return numberQuestion(`Find ${percent}% of ${amount}.`, answer, `${percent}% of ${amount} = ${percent}/100 × ${amount} = ${answer}.`, seed);
    }
    case "Ratio, rate & proportion": {
      const parts = (seed % 4) + 2, total = parts * n;
      return numberQuestion(`Share ${total} in the ratio 1:${parts - 1}. What is the larger share?`, n * (parts - 1), `There are ${parts} parts, each worth ${n}. The larger share is ${parts - 1} × ${n}.`, seed);
    }
    case "Directed numbers": {
      const start = (seed % 15) - 7, change = (seed % 9) + 2;
      const answer = start - change;
      return numberQuestion(`Work out ${start} − ${change}.`, answer, `Subtract ${change} from ${start}: the answer is ${answer}.`, seed);
    }
    case "Algebraic expressions": {
      const first = (seed % 7) + 2, second = (seed % 5) + 1;
      return makeQuestion(`Simplify ${first}x + ${second}x.`, `${first + second}x`, `Combine like terms by adding the coefficients: ${first} + ${second} = ${first + second}.`, [`${first * second}x`, `${first + second}`, `${first - second}x`], seed);
    }
    case "Simple equations": {
      const answer = seed + 4, add = (seed % 9) + 2, total = answer + add;
      return numberQuestion(`Solve x + ${add} = ${total}.`, answer, `Subtract ${add} from both sides: x = ${total} − ${add} = ${answer}.`, seed);
    }
    case "Geometry: lines, angles & shapes": {
      const first = 30 + (seed % 5) * 10, second = 40 + (seed % 4) * 10;
      const answer = 180 - first - second;
      return numberQuestion(`Two angles in a triangle are ${first}° and ${second}°. Find the third angle.`, answer, `Triangle angles total 180°: 180° − ${first}° − ${second}° = ${answer}°.`, seed, "°");
    }
    case "Measurement & mensuration": {
      const length = n + 2, width = (seed % 8) + 2, answer = length * width;
      return numberQuestion(`Find the area of a rectangle ${length} cm by ${width} cm.`, answer, `Area = length × width = ${length} × ${width} = ${answer} cm².`, seed, " cm²");
    }
    case "Data handling & statistics": {
      const a = n, b = n + 2, c = n + 4, answer = n + 2;
      return numberQuestion(`Find the mean of ${a}, ${b} and ${c}.`, answer, `Mean = (${a} + ${b} + ${c}) ÷ 3 = ${answer}.`, seed);
    }
    case "Approximation & estimation": {
      const value = n * 10 + (seed % 9), answer = Math.round(value / 10) * 10;
      return numberQuestion(`Round ${value} to the nearest ten.`, answer, `The units digit is ${value % 10}; rounding to the nearest ten gives ${answer}.`, seed);
    }
    case "Sets & Venn diagrams": {
      const common = n + 1, onlyA = n + 2, onlyB = n + 3;
      return makeQuestion(`A = {${onlyA}, ${common}} and B = {${common}, ${onlyB}}. Find A ∩ B.`, `{${common}}`, `The intersection contains only the element shared by both sets: {${common}}.`, [`{${onlyA}, ${common}, ${onlyB}}`, `{${onlyA}, ${onlyB}}`, `{${common}, ${onlyB}}`], seed);
    }
    case "Number bases & indices": {
      const value = n % 8 + 1, square = value * value;
      return numberQuestion(`Evaluate ${value}².`, square, `${value}² means ${value} × ${value} = ${square}.`, seed);
    }
    case "Fractions, ratio & proportion": {
      const numerator = seed % 5 + 1, denominator = numerator * 2;
      return makeQuestion(`What is ${numerator}/${denominator} in its simplest form?`, "1/2", `Divide the numerator and denominator by ${numerator}: ${numerator}/${denominator} = 1/2.`, ["1/3", "2/3", "1/4"], seed);
    }
    case "Percentages & financial maths": {
      const percent = [5, 10, 20, 25][seed % 4], amount = (n + 2) * 20;
      const answer = amount * percent / 100;
      return numberQuestion(`Find ${percent}% of ₦${amount}.`, answer, `${percent}/100 × ₦${amount} = ₦${answer}.`, seed);
    }
    case "Approximation & standard form": {
      const coefficient = (seed % 8) + 1, power = (seed % 5) + 2;
      const answer = `${coefficient} × 10${["²", "³", "⁴", "⁵", "⁶"][power - 2]}`;
      const alternatives = [`${coefficient + 1} × 10${["²", "³", "⁴", "⁵", "⁶"][power - 2]}`, `${coefficient} × 10${["¹", "²", "³", "⁴", "⁵"][power - 2]}`, `${coefficient} × 10${["³", "⁴", "⁵", "⁶", "⁷"][power - 2]}`];
      return makeQuestion(`Write ${coefficient * Math.pow(10, power)} in standard form.`, answer, `Move the decimal point ${power} places left: ${coefficient} × 10${["²", "³", "⁴", "⁵", "⁶"][power - 2]}.`, alternatives, seed);
    }
    case "Algebra: expressions & factorisation": {
      const factor = seed % 8 + 2, first = seed % 5 + 2, second = seed % 4 + 1;
      return makeQuestion(`Factorise ${factor * first}x + ${factor * second}.`, `${factor}(${first}x + ${second})`, `The highest common factor is ${factor}: ${factor * first}x + ${factor * second} = ${factor}(${first}x + ${second}).`, [`${first}(${factor}x + ${second})`, `${factor}(${first}x − ${second})`, `${factor * first}(x + ${second})`], seed);
    }
    case "Equations & inequalities": {
      const answer = seed + 2, factor = seed % 5 + 2, total = answer * factor;
      return numberQuestion(`Solve ${factor}x = ${total}.`, answer, `Divide both sides by ${factor}: x = ${total} ÷ ${factor} = ${answer}.`, seed);
    }
    case "Angles, polygons & constructions": {
      const sides = seed % 5 + 3, total = (sides - 2) * 180;
      return numberQuestion(`What is the sum of the interior angles of a ${["triangle", "quadrilateral", "pentagon", "hexagon", "heptagon"][sides - 3]}?`, total, `Interior-angle sum = (n − 2) × 180° = (${sides} − 2) × 180° = ${total}°.`, seed, "°");
    }
    case "Mensuration & Pythagoras": {
      const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]];
      const [a, b, answer] = triples[seed % triples.length];
      return numberQuestion(`A right triangle has shorter sides ${a} cm and ${b} cm. Find its hypotenuse.`, answer, `By Pythagoras, c² = ${a}² + ${b}² = ${answer * answer}; c = ${answer} cm.`, seed, " cm");
    }
    case "Coordinates & graphs": {
      const x = seed + 1, answer = 2 * x + 1;
      return numberQuestion(`For y = 2x + 1, find y when x = ${x}.`, answer, `Substitute x = ${x}: y = 2(${x}) + 1 = ${answer}.`, seed);
    }
    case "Statistics & probability": {
      const favourable = seed % 5 + 1, total = 6;
      const gcd = (a, b) => b ? gcd(b, a % b) : a;
      const divisor = gcd(favourable, total);
      return makeQuestion(`An event has ${favourable} favourable outcomes out of ${total} equally likely outcomes. What is its probability?`, `${favourable / divisor}/${total / divisor}`, `Probability = favourable outcomes ÷ total outcomes = ${favourable}/${total} = ${favourable / divisor}/${total / divisor}.`, ["1/2", "1/3", "2/3"], seed);
    }
    case "Bearings, scale & maps": {
      const mapCm = seed % 8 + 1, km = mapCm;
      return numberQuestion(`On a map with scale 1:100,000, what real distance does ${mapCm} cm represent?`, km, `${mapCm} × 100,000 cm = ${mapCm * 1000} m = ${km} km.`, seed, " km");
    }
    case "Transformations & symmetry": {
      const x = seed % 12 - 5, y = seed % 10 - 4, dx = seed % 5 + 1, dy = -(seed % 4 + 1);
      const answer = `(${x + dx}, ${y + dy})`;
      const wrongs = [`(${x - dx}, ${y + dy})`, `(${x + dx}, ${y - dy})`, `(${x}, ${y})`];
      return makeQuestion(`Translate (${x}, ${y}) by vector (${dx}, ${dy}).`, answer, `Add the vector components: (${x} + ${dx}, ${y} + (${dy})) = ${answer}.`, wrongs, seed);
    }
    default:
      throw new Error(`No practice-question generator exists for "${topic}".`);
  }
}

for (const topics of Object.values(curriculum)) {
  for (const topic of topics) {
    const originalCount = topic.questions.length;
    for (let seed = 0; seed < 50 - originalCount; seed += 1) {
      topic.questions.push(generatedQuestion(topic.title, seed));
    }
  }
}

const STORAGE_KEY = "maths-made-easy-progress-v1";
const state = {
  level: "JSS1",
  topicIndex: 0,
  activeTab: "learn",
  questionIndex: 0,
  selectedAnswer: null,
  answers: [],
  search: "",
  progress: loadProgress(),
  toastTimer: null
};

const elements = {
  topicNav: document.getElementById("topic-nav"),
  lessonContent: document.getElementById("lesson-content"),
  topicSearch: document.getElementById("topic-search"),
  solvedCount: document.getElementById("solved-count"),
  topicCount: document.getElementById("topic-count"),
  questionCount: document.getElementById("question-count"),
  visibleCount: document.getElementById("visible-count"),
  crumbClass: document.getElementById("crumb-class"),
  crumbTopic: document.getElementById("crumb-topic"),
  lessonNumber: document.getElementById("lesson-number"),
  bookmark: document.getElementById("bookmark-button"),
  toast: document.getElementById("toast")
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      answered: Number.isInteger(saved.answered) && saved.answered >= 0 ? saved.answered : 0,
      correct: Number.isInteger(saved.correct) && saved.correct >= 0 ? saved.correct : 0,
      completed: Array.isArray(saved.completed) ? saved.completed.filter(value => typeof value === "string") : [],
      bookmarks: Array.isArray(saved.bookmarks) ? saved.bookmarks.filter(value => typeof value === "string") : []
    };
  } catch (error) {
    console.warn("Could not read saved learning progress.", error);
    return { answered: 0, correct: 0, completed: [], bookmarks: [] };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (error) {
    console.warn("Could not save learning progress.", error);
    showToast("Progress could not be saved on this device.");
  }
}

function currentTopics() {
  return curriculum[state.level];
}

function topicKey(level, index) {
  return `${level}-${index}`;
}

function currentTopic() {
  return currentTopics()[state.topicIndex];
}

function renderTopicNav() {
  const topics = currentTopics();
  const filtered = topics.map((topic, index) => ({ topic, index }))
    .filter(({ topic }) => topic.title.toLowerCase().includes(state.search.toLowerCase()));
  elements.visibleCount.textContent = filtered.length;
  elements.topicNav.innerHTML = filtered.length ? filtered.map(({ topic, index }) => {
    const completed = state.progress.completed.includes(topicKey(state.level, index));
    return `<button class="topic-link${state.topicIndex === index ? " active" : ""}" data-topic="${index}" aria-current="${state.topicIndex === index ? "page" : "false"}">
      <span class="topic-index">${String(index + 1).padStart(2, "0")}</span><span class="topic-name">${escapeHtml(topic.title)}</span><span class="topic-check" aria-label="${completed ? "Completed" : ""}">${completed ? "✓" : ""}</span>
    </button>`;
  }).join("") : `<p class="empty-search">No topics match “${escapeHtml(state.search)}”.</p>`;
}

function renderLesson() {
  const topic = currentTopic();
  if (!topic) return;
  elements.crumbClass.textContent = state.level.replace("JSS", "JSS ");
  elements.crumbTopic.textContent = topic.title;
  elements.lessonNumber.textContent = `TOPIC ${String(state.topicIndex + 1).padStart(2, "0")}`;
  const bookmarked = state.progress.bookmarks.includes(topicKey(state.level, state.topicIndex));
  elements.bookmark.classList.toggle("saved", bookmarked);
  elements.bookmark.setAttribute("aria-label", bookmarked ? "Remove saved topic" : "Save topic");
  elements.bookmark.title = bookmarked ? "Remove saved topic" : "Save topic";
  elements.bookmark.querySelector("span").textContent = bookmarked ? "★" : "☆";
  elements.lessonContent.innerHTML = `
    <header class="lesson-header">
      <span class="term-label">${escapeHtml(topic.term)}</span>
      <h2>${escapeHtml(topic.title)}</h2>
      <p class="lesson-intro">${escapeHtml(topic.intro)}</p>
    </header>
    <div class="lesson-tabs" role="tablist" aria-label="Lesson sections">
      <button class="tab-button${state.activeTab === "learn" ? " active" : ""}" role="tab" aria-selected="${state.activeTab === "learn"}" data-tab="learn">Learn</button>
      <button class="tab-button${state.activeTab === "practice" ? " active" : ""}" role="tab" aria-selected="${state.activeTab === "practice"}" data-tab="practice">Practice <span class="tab-count">${topic.questions.length} questions</span></button>
    </div>
    <div class="tab-panel" role="tabpanel">${state.activeTab === "learn" ? renderLearn(topic) : renderPractice(topic)}</div>`;
}

function renderLearn(topic) {
  return `<div class="learn-layout">
    <article class="content-card">
      <h3 class="card-heading"><span class="heading-icon" aria-hidden="true">✦</span>Key ideas</h3>
      <p>${escapeHtml(topic.intro)}</p>
      <ul class="key-list">${topic.points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
    </article>
    <article class="content-card example-card">
      <h3 class="card-heading"><span class="heading-icon" aria-hidden="true">↗</span>Worked example</h3>
      <p class="example-label">Try this</p>
      <p class="example-question">${escapeHtml(topic.example[0])}</p>
      <p class="example-answer">${topic.example[1]}</p>
    </article>
  </div>`;
}

function renderPractice(topic) {
  if (state.questionIndex >= topic.questions.length) return renderScore(topic);
  const [prompt, options, correctIndex, explanation] = topic.questions[state.questionIndex];
  const answered = state.selectedAnswer !== null;
  const correct = answered && state.selectedAnswer === correctIndex;
  const percent = Math.round((state.questionIndex / topic.questions.length) * 100);
  return `<section class="practice-panel" aria-label="Topic practice">
    <div class="practice-topline"><span>QUESTION ${state.questionIndex + 1} OF ${topic.questions.length}</span><div class="progress-track" role="progressbar" aria-label="Practice progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><div class="progress-fill" style="width:${percent}%"></div></div></div>
    <div class="question-card">
      <p class="question-label">Choose the best answer</p>
      <h3 class="question-text">${escapeHtml(prompt)}</h3>
      <div class="answer-options">${options.map((option, index) => {
        let className = "answer-option";
        if (answered && index === correctIndex) className += " correct";
        else if (answered && index === state.selectedAnswer) className += " incorrect";
        return `<button class="${className}" data-answer="${index}" ${answered ? "disabled" : ""}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`;
      }).join("")}</div>
      <div class="feedback${answered ? ` show ${correct ? "is-correct" : "is-incorrect"}` : ""}" role="status">
        ${answered ? `<p class="working-label">${correct ? "Good work!" : "Let's work it out."}</p><strong class="working-title">Working</strong><p class="feedback-working">${escapeHtml(explanation)}</p><p class="feedback-answer"><strong>Answer:</strong> ${escapeHtml(options[correctIndex])}</p>` : ""}
      </div>
    </div>
    <div class="practice-footer"><span class="answer-hint">${answered ? "Answer recorded" : "Take your time — you can do it."}</span><button class="next-button" data-next ${answered ? "" : "disabled"}>${state.questionIndex === topic.questions.length - 1 ? "See my score" : "Next question"} <span aria-hidden="true">→</span></button></div>
  </section>`;
}

function renderScore(topic) {
  const score = state.answers.filter(Boolean).length;
  const percent = Math.round((score / topic.questions.length) * 100);
  return `<section class="score-panel" aria-label="Practice results">
    <span class="score-icon" aria-hidden="true">${percent >= 70 ? "✦" : "✓"}</span>
    <h3>${percent >= 70 ? "Brilliant effort!" : "Good practice!"}</h3>
    <p>You got <strong>${score} out of ${topic.questions.length}</strong> correct (${percent}%). ${percent >= 70 ? "Keep building on what you know." : "Review the lesson and have another go."}</p>
    <button class="retry-button" data-retry>Try again</button>
    <button class="next-button" data-back-to-learn>Review lesson</button>
  </section>`;
}

function updateStats() {
  elements.solvedCount.textContent = state.progress.answered;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2300);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function selectTopic(index) {
  if (index < 0 || index >= currentTopics().length) return;
  state.topicIndex = index;
  state.activeTab = "learn";
  state.questionIndex = 0;
  state.selectedAnswer = null;
  state.answers = [];
  renderTopicNav();
  renderLesson();
}

function resetPractice() {
  state.questionIndex = 0;
  state.selectedAnswer = null;
  state.answers = [];
  renderLesson();
}

document.querySelectorAll(".class-button").forEach(button => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    state.topicIndex = 0;
    state.activeTab = "learn";
    state.questionIndex = 0;
    state.selectedAnswer = null;
    state.answers = [];
    document.querySelectorAll(".class-button").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderTopicNav();
    renderLesson();
  });
});

elements.topicNav.addEventListener("click", event => {
  const button = event.target.closest("[data-topic]");
  if (button) selectTopic(Number(button.dataset.topic));
});

elements.topicSearch.addEventListener("input", event => {
  state.search = event.target.value.trim();
  renderTopicNav();
});

elements.lessonContent.addEventListener("click", event => {
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    state.activeTab = tab.dataset.tab;
    renderLesson();
    return;
  }
  const option = event.target.closest("[data-answer]");
  if (option && state.selectedAnswer === null) {
    const chosen = Number(option.dataset.answer);
    const question = currentTopic().questions[state.questionIndex];
    state.selectedAnswer = chosen;
    state.answers[state.questionIndex] = chosen === question[2];
    state.progress.answered += 1;
    if (chosen === question[2]) state.progress.correct += 1;
    saveProgress();
    updateStats();
    renderLesson();
    return;
  }
  if (event.target.closest("[data-next]") && state.selectedAnswer !== null) {
    state.questionIndex += 1;
    state.selectedAnswer = null;
    if (state.questionIndex >= currentTopic().questions.length) {
      const key = topicKey(state.level, state.topicIndex);
      if (!state.progress.completed.includes(key)) state.progress.completed.push(key);
      saveProgress();
      renderTopicNav();
    }
    renderLesson();
    return;
  }
  if (event.target.closest("[data-retry]")) {
    resetPractice();
    return;
  }
  if (event.target.closest("[data-back-to-learn]")) {
    state.activeTab = "learn";
    renderLesson();
  }
});

elements.bookmark.addEventListener("click", () => {
  const key = topicKey(state.level, state.topicIndex);
  const position = state.progress.bookmarks.indexOf(key);
  if (position === -1) {
    state.progress.bookmarks.push(key);
    showToast("Topic saved for later.");
  } else {
    state.progress.bookmarks.splice(position, 1);
    showToast("Topic removed from saved topics.");
  }
  saveProgress();
  renderLesson();
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    elements.topicSearch.focus();
  }
});

const allTopics = Object.values(curriculum).flat();
const totalQuestions = allTopics.reduce((sum, topic) => sum + topic.questions.length, 0);
elements.topicCount.textContent = allTopics.length;
elements.questionCount.textContent = totalQuestions.toLocaleString();
updateStats();
renderTopicNav();
renderLesson();
