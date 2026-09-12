/* ============================================================
   Placement Aptitude Lab — application logic
   ============================================================ */

/* ============================================================
   QUESTION BANK
   To add a question, add another object to QUESTION_BANK below.
   Shape: { id, category, difficulty, question, options, answer, explanation }
   "answer" must exactly match one string in "options".
   ============================================================ */

var CATEGORY_GROUPS = [
  {
    id: 'quantitative',
    label: 'Quantitative Aptitude',
    categories: [
      { id: 'number-system', name: 'Number System', description: 'HCF, LCM, divisibility and remainder problems.' },
      { id: 'percentages', name: 'Percentages', description: 'Percentage change, increase and comparison problems.' },
      { id: 'ratio-proportion', name: 'Ratio & Proportion', description: 'Dividing and comparing quantities.' },
      { id: 'averages', name: 'Averages', description: 'Mean-based and weighted average problems.' },
      { id: 'profit-loss-discount', name: 'Profit, Loss & Discount', description: 'Cost price, selling price and discount.' },
      { id: 'simple-compound-interest', name: 'Simple & Compound Interest', description: 'Interest accrued over time.' },
      { id: 'time-work', name: 'Time & Work', description: 'Work rate and combined efficiency.' },
      { id: 'pipes-cisterns', name: 'Pipes & Cisterns', description: 'Filling and emptying rate problems.' },
      { id: 'time-speed-distance', name: 'Time, Speed & Distance', description: 'Relative speed and travel time.' },
      { id: 'trains', name: 'Trains', description: 'Crossing time and platform-length problems.' },
      { id: 'boats-streams', name: 'Boats & Streams', description: 'Upstream and downstream speed.' },
      { id: 'mixtures-alligation', name: 'Mixtures & Alligation', description: 'Mixing quantities at different rates.' },
      { id: 'ages', name: 'Ages', description: 'Present and future age relationships.' },
      { id: 'algebra', name: 'Algebra', description: 'Linear and quadratic equation problems.' },
      { id: 'permutation-combination', name: 'Permutation & Combination', description: 'Counting arrangements and selections.' },
      { id: 'probability', name: 'Probability', description: 'Chance and likelihood calculations.' },
      { id: 'geometry-mensuration', name: 'Geometry & Mensuration', description: 'Area, perimeter and volume.' },
      { id: 'data-interpretation', name: 'Data Interpretation', description: 'Reasoning from figures, tables and charts.' }
    ]
  },
  {
    id: 'logical',
    label: 'Logical Reasoning',
    categories: [
      { id: 'number-series', name: 'Number Series', description: 'Spotting numeric patterns.' },
      { id: 'letter-series', name: 'Letter Series', description: 'Spotting alphabetic patterns.' },
      { id: 'coding-decoding', name: 'Coding-Decoding', description: 'Letter and word substitution codes.' },
      { id: 'blood-relations', name: 'Blood Relations', description: 'Family relationship puzzles.' },
      { id: 'direction-sense', name: 'Direction Sense', description: 'Movement and direction problems.' },
      { id: 'seating-arrangement', name: 'Seating Arrangement', description: 'Row and position based puzzles.' },
      { id: 'logical-puzzles', name: 'Logical Puzzles', description: 'Multi-clue deduction puzzles.' },
      { id: 'syllogisms', name: 'Syllogisms', description: 'Statements and valid conclusions.' },
      { id: 'statement-conclusions', name: 'Statement & Conclusions', description: 'Judging what follows from a statement.' },
      { id: 'statement-assumptions', name: 'Statement & Assumptions', description: 'Judging implicit assumptions.' },
      { id: 'statement-arguments', name: 'Statement & Arguments', description: 'Judging strong and weak arguments.' },
      { id: 'cause-effect', name: 'Cause & Effect', description: 'Relating two given statements.' },
      { id: 'assertion-reason', name: 'Assertion & Reason', description: 'Judging assertion-reason pairs.' },
      { id: 'course-of-action', name: 'Course of Action', description: 'Judging suggested actions to a problem.' },
      { id: 'ranking-ordering', name: 'Ranking & Ordering', description: 'Relative position and rank problems.' },
      { id: 'analogy', name: 'Analogy', description: 'Word relationship pairs.' },
      { id: 'classification', name: 'Classification / Odd One Out', description: 'Finding the item that does not belong.' },
      { id: 'venn-diagrams', name: 'Venn Diagrams', description: 'Set relationships between groups.' },
      { id: 'calendar', name: 'Calendar', description: 'Day and date calculations.' },
      { id: 'clocks', name: 'Clocks', description: 'Clock angle and coincidence problems.' },
      { id: 'non-verbal-reasoning', name: 'Non-Verbal / Abstract Reasoning', description: 'Pattern and figure based reasoning.' }
    ]
  },
  {
    id: 'verbal',
    label: 'Verbal Ability',
    categories: [
      { id: 'synonyms-antonyms', name: 'Synonyms & Antonyms', description: 'Word meaning and opposites.' },
      { id: 'vocabulary', name: 'Vocabulary', description: 'Word meaning in context.' },
      { id: 'grammar', name: 'Grammar', description: 'Correct grammatical usage.' },
      { id: 'error-spotting', name: 'Error Spotting', description: 'Identifying the erroneous part of a sentence.' },
      { id: 'sentence-correction', name: 'Sentence Correction', description: 'Choosing the correctly written sentence.' },
      { id: 'fill-blanks', name: 'Fill in the Blanks', description: 'Choosing the word that fits a sentence.' },
      { id: 'sentence-completion', name: 'Sentence Completion', description: 'Completing sentences logically.' },
      { id: 'para-jumbles', name: 'Para Jumbles', description: 'Reordering scrambled sentences.' },
      { id: 'reading-comprehension', name: 'Reading Comprehension', description: 'Short passages with questions.' },
      { id: 'sentence-ordering', name: 'Sentence Ordering', description: 'Reordering scrambled words.' },
      { id: 'cloze-test', name: 'Cloze Test', description: 'Choosing the right word for a blank in context.' },
      { id: 'critical-reasoning', name: 'Critical Reasoning', description: 'Evaluating arguments and conclusions.' }
    ]
  },
  {
    id: 'technical',
    label: 'Technical / IT Aptitude',
    categories: [
      { id: 'pseudocode', name: 'Pseudocode', description: 'Tracing simple pseudocode logic.' },
      { id: 'programming-logic', name: 'Programming Logic', description: 'Core programming fundamentals.' },
      { id: 'oop', name: 'OOP', description: 'Object-oriented programming concepts.' },
      { id: 'dbms-sql', name: 'DBMS / SQL', description: 'Databases and SQL fundamentals.' },
      { id: 'computer-networks', name: 'Computer Networks', description: 'Networking basics and protocols.' },
      { id: 'operating-systems', name: 'Operating Systems', description: 'Core OS concepts.' },
      { id: 'data-structures', name: 'Data Structures', description: 'Core data structure fundamentals.' }
    ]
  }
];

var CATEGORY_META = {};
CATEGORY_GROUPS.forEach(function (group) {
  group.categories.forEach(function (cat) {
    CATEGORY_META[cat.id] = { name: cat.name, description: cat.description, group: group.id, groupLabel: group.label };
  });
});

function Q(id, category, difficulty, question, options, answer, explanation) {
  return { id: id, category: category, difficulty: difficulty, question: question, options: options, answer: answer, explanation: explanation };
}

var QUESTION_BANK = [
  // ---------- Number System ----------
  Q('q001', 'number-system', 'easy', 'Find the smallest number which, when divided by 6, 9 and 12, leaves remainder 1 in each case.', ['36', '37', '73', '72'], '37', 'The LCM of 6, 9 and 12 is 36. Adding the common remainder 1 gives 37.'),
  Q('q002', 'number-system', 'easy', 'A number divisible by 2 must have which last digit property?', ['A prime last digit', 'An odd last digit', 'An even last digit', 'A zero hundreds digit'], 'An even last digit', 'The correct answer is An even last digit.'),
  Q('q003', 'number-system', 'easy', 'Which operation is used to find the greatest common divisor?', ['Prime-factor overlap', 'Adding the numbers', 'Taking their average', 'Multiplying all integers'], 'Prime-factor overlap', 'The correct answer is Prime-factor overlap.'),
  Q('q004', 'number-system', 'medium', 'What is the remainder when 2^100 is divided by 7?', ['1', '2', '4', '6'], '2', '2^3 = 8 leaves remainder 1 mod 7, so 2^99 = (2^3)^33 leaves remainder 1, and 2^100 leaves remainder 2.'),
  Q('q005', 'number-system', 'medium', 'The HCF of two numbers is 12 and their LCM is 240. If one number is 48, find the other.', ['40', '60', '72', '80'], '60', 'Product of numbers = HCF x LCM = 12 x 240 = 2880. Other number = 2880 / 48 = 60.'),
  Q('q006', 'number-system', 'medium', 'If n is divisible by 6, which pair must both divide n?', ['4 and 5', '3 and 5', '2 and 3', '2 and 7'], '2 and 3', 'The correct answer is 2 and 3.'),
  Q('q007', 'number-system', 'medium', 'What is the remainder when 17 is divided by 5?', ['2', '3', '4', '1'], '2', 'The correct answer is 2.'),
  Q('q008', 'number-system', 'hard', 'A number divided by 342 gives a remainder of 47. What remainder is obtained when the same number is divided by 18?', ['9', '10', '11', '13'], '11', '342 = 18 x 19, so the remainder 47 reduces mod 18 to 47 - 36 = 11.'),
  Q('q009', 'number-system', 'hard', 'What is the smallest positive number divisible by 9 and 12?', ['48', '24', '18', '36'], '36', 'The correct answer is 36.'),
  Q('q010', 'number-system', 'hard', 'If a number leaves remainder 4 when divided by 7, what remainder does it leave when 14 is added?', ['6', '0', '2', '4'], '4', 'The correct answer is 4.'),
  // ---------- Percentages ----------
  Q('q011', 'percentages', 'easy', 'If 40% of a number is 240, what is the number?', ['500', '540', '600', '640'], '600', 'Number = 240 / 0.40 = 600.'),
  Q('q012', 'percentages', 'easy', '25% is equal to which fraction?', ['1/5', '1/4', '2/5', '1/3'], '1/4', 'The correct answer is 1/4.'),
  Q('q013', 'percentages', 'easy', 'A 10% increase means the new value is what multiple of the old value?', ['1.20', '1.10', '1.01', '0.90'], '1.10', 'The correct answer is 1.10.'),
  Q('q014', 'percentages', 'medium', "A's salary is 25% more than B's. By what percent is B's salary less than A's?", ['15%', '20%', '25%', '30%'], '20%', 'If A = 1.25B, then B is less than A by (0.25 / 1.25) x 100 = 20%.'),
  Q('q015', 'percentages', 'medium', 'The price of an item is increased by 20% and then decreased by 20%. What is the net percentage change?', ['No change', '-4%', '-2%', '-10%'], '-4%', 'Net factor = 1.20 x 0.80 = 0.96, a net decrease of 4%.'),
  Q('q016', 'percentages', 'medium', 'A 20% discount on Rs. 500 equals', ['Rs. 120', 'Rs. 100', 'Rs. 150', 'Rs. 80'], 'Rs. 100', 'The correct answer is Rs. 100.'),
  Q('q017', 'percentages', 'medium', 'If a value changes from 80 to 100, the percentage increase is', ['20%', '25%', '22.5%', '30%'], '25%', 'The correct answer is 25%.'),
  Q('q018', 'percentages', 'hard', 'In an election between two candidates, 20% of the total votes were invalid. Of the valid votes, the winner got 60%. If the total votes were 7500, how many valid votes did the winner get?', ['3000', '3600', '4200', '4500'], '3600', 'Valid votes = 80% of 7500 = 6000. Winner got 60% of 6000 = 3600.'),
  Q('q019', 'percentages', 'hard', 'Successive increases of 10% and 20% give a net increase of', ['30%', '28%', '34%', '32%'], '32%', 'The correct answer is 32%.'),
  Q('q020', 'percentages', 'hard', 'If A is 25% less than B, then A:B equals', ['3:4', '1:4', '5:4', '4:5'], '3:4', 'The correct answer is 3:4.'),
  // ---------- Ratio & Proportion ----------
  Q('q021', 'ratio-proportion', 'easy', 'Divide 720 in the ratio 2:3:4. Find the largest share.', ['240', '280', '320', '360'], '320', 'Total parts = 9, each part = 80. Largest share = 4 x 80 = 320.'),
  Q('q022', 'ratio-proportion', 'easy', 'The simplest form of 15:25 is', ['3:5', '5:3', '2:5', '5:8'], '3:5', 'The correct answer is 3:5.'),
  Q('q023', 'ratio-proportion', 'easy', 'If 4 notebooks cost Rs. 80, one notebook costs', ['Rs. 30', 'Rs. 15', 'Rs. 25', 'Rs. 20'], 'Rs. 20', 'The correct answer is Rs. 20.'),
  Q('q024', 'ratio-proportion', 'medium', 'If a:b = 3:4 and b:c = 8:9, find a:b:c.', ['3:4:9', '6:8:9', '3:8:9', '6:4:9'], '6:8:9', 'Scale a:b to 6:8 so that b matches 8 in b:c = 8:9, giving a:b:c = 6:8:9.'),
  Q('q025', 'ratio-proportion', 'medium', 'Two numbers are in the ratio 5:7. If each is increased by 10, the ratio becomes 7:9. Find the larger number.', ['20 and 28', '25 and 35', '15 and 21', '30 and 42'], '25 and 35', 'Solving (5x+10)/(7x+10) = 7/9 gives x = 5, so the numbers are 25 and 35.'),
  Q('q026', 'ratio-proportion', 'medium', 'In direct proportion, if one quantity doubles, the other', ['Doubles', 'Becomes four times', 'Stays unchanged', 'Halves'], 'Doubles', 'The correct answer is Doubles.'),
  Q('q027', 'ratio-proportion', 'medium', 'In inverse proportion, if one quantity doubles, the other', ['Triples', 'Halves', 'Stays unchanged', 'Doubles'], 'Halves', 'The correct answer is Halves.'),
  Q('q028', 'ratio-proportion', 'hard', "Two salaries are in the ratio 3:5 and their sum is Rs. 6400. Find the larger salary.", ['2400', '3600', '4000', '4800'], '4000', 'Total parts = 8, each part = 800. Larger salary = 5 x 800 = 4000.'),
  Q('q029', 'ratio-proportion', 'hard', 'If A:B=2:3 and B:C=4:5, A:B:C is', ['8:6:15', '8:12:15', '6:12:10', '2:4:5'], '8:12:15', 'The correct answer is 8:12:15.'),
  Q('q030', 'ratio-proportion', 'hard', 'A quantity is divided in ratio 3:5. What fraction goes to the larger share?', ['5/3', '5/8', '3/5', '3/8'], '5/8', 'The correct answer is 5/8.'),
  // ---------- Averages ----------
  Q('q031', 'averages', 'easy', 'The average of 5 numbers is 20. If one number, 10, is removed, what is the average of the remaining 4 numbers?', ['20', '21.25', '22.5', '25'], '22.5', 'Total sum = 100. After removing 10, sum = 90, average = 90/4 = 22.5.'),
  Q('q032', 'averages', 'easy', 'The average of 10 and 20 is', ['30', '20', '15', '10'], '15', 'The correct answer is 15.'),
  Q('q033', 'averages', 'easy', 'If every value in a data set increases by 5, its average', ['Increases by 5', 'Does not change', 'Doubles', 'Decreases by 5'], 'Increases by 5', 'The correct answer is Increases by 5.'),
  Q('q034', 'averages', 'medium', 'The average weight of 10 students is 42 kg. A new student joins and the average becomes 43 kg. Find the new student\'s weight.', ['45', '50', '53', '55'], '53', 'Old total = 420, new total = 11 x 43 = 473. New student\'s weight = 473 - 420 = 53 kg.'),
  Q('q035', 'averages', 'medium', 'Find the average of the first 50 natural numbers.', ['25', '25.5', '26', '26.5'], '25.5', 'Sum = 50 x 51 / 2 = 1275. Average = 1275 / 50 = 25.5.'),
  Q('q036', 'averages', 'medium', 'The average of 5 numbers is 12. Their sum is', ['72', '50', '48', '60'], '60', 'The correct answer is 60.'),
  Q('q037', 'averages', 'medium', 'The average of 8 numbers is 15. If one value 22 is removed, the remaining sum is', ['100', '108', '98', '102'], '98', 'The correct answer is 98.'),
  Q('q038', 'averages', 'hard', 'The average of 11 results is 50. The average of the first 6 is 49 and of the last 6 is 52. Find the 6th result.', ['50', '54', '56', '58'], '56', 'Sum of 11 = 550, sum of first 6 = 294, sum of last 6 = 312. 6th result = 294 + 312 - 550 = 56.'),
  Q('q039', 'averages', 'hard', 'The combined average of two groups depends on', ['Only the smaller group', 'Only the number of groups', 'Their group sizes and averages', 'Only the larger average'], 'Their group sizes and averages', 'The correct answer is Their group sizes and averages.'),
  Q('q040', 'averages', 'hard', 'If two groups have the same size, their combined average is', ['Always their smaller average', 'Always their larger average', 'The average of their two averages', 'Their difference'], 'The average of their two averages', 'The correct answer is The average of their two averages.'),
  // ---------- Profit, Loss & Discount ----------
  Q('q041', 'profit-loss-discount', 'easy', 'A shopkeeper buys an item for Rs. 400 and sells it for Rs. 460. Find the profit percent.', ['10%', '12%', '15%', '20%'], '15%', 'Profit = 60. Profit% = 60/400 x 100 = 15%.'),
  Q('q042', 'profit-loss-discount', 'easy', 'Profit is calculated as', ['SP − CP', 'MP − CP', 'SP − MP', 'CP − SP'], 'SP − CP', 'The correct answer is SP − CP.'),
  Q('q043', 'profit-loss-discount', 'easy', 'A 10% discount on Rs. 1,000 is', ['Rs. 100', 'Rs. 200', 'Rs. 110', 'Rs. 90'], 'Rs. 100', 'The correct answer is Rs. 100.'),
  Q('q044', 'profit-loss-discount', 'medium', 'The marked price of an item is Rs. 1200. A discount of 15% is given. Find the selling price.', ['960', '1000', '1020', '1080'], '1020', 'Selling price = 1200 x 0.85 = 1020.'),
  Q('q045', 'profit-loss-discount', 'medium', 'A trader marks his goods 40% above cost price and then gives a discount of 10%. Find his profit percent.', ['20%', '24%', '26%', '30%'], '26%', 'Net factor = 1.40 x 0.90 = 1.26, giving a profit of 26%.'),
  Q('q046', 'profit-loss-discount', 'medium', 'If CP=Rs. 400 and SP=Rs. 500, profit percent is', ['30%', '15%', '20%', '25%'], '25%', 'The correct answer is 25%.'),
  Q('q047', 'profit-loss-discount', 'medium', 'If an item is sold below its cost price, the result is', ['Discount only', 'Profit', 'No change', 'Loss'], 'Loss', 'The correct answer is Loss.'),
  Q('q048', 'profit-loss-discount', 'hard', 'By selling an article for Rs. 720, a man loses 10%. At what price should he sell it to gain 10%?', ['800', '850', '880', '900'], '880', 'Cost price = 720 / 0.90 = 800. Selling price for 10% gain = 800 x 1.10 = 880.'),
  Q('q049', 'profit-loss-discount', 'hard', 'Two successive discounts of 10% and 10% equal a single discount of', ['19%', '18%', '20%', '21%'], '19%', 'The correct answer is 19%.'),
  Q('q050', 'profit-loss-discount', 'hard', 'If an article is sold at 20% profit, SP:CP is', ['5:4', '6:5', '4:5', '5:6'], '6:5', 'The correct answer is 6:5.'),
  // ---------- Simple & Compound Interest ----------
  Q('q051', 'simple-compound-interest', 'easy', 'Find the simple interest on Rs. 5000 at 8% p.a. for 3 years.', ['1000', '1100', '1200', '1300'], '1200', 'SI = (5000 x 8 x 3)/100 = 1200.'),
  Q('q052', 'simple-compound-interest', 'easy', 'Simple interest is calculated on', ['Selling price', 'Amount only', 'Principal', 'Interest only'], 'Principal', 'The correct answer is Principal.'),
  Q('q053', 'simple-compound-interest', 'easy', 'At 10% simple interest for 2 years, interest on Rs. 1,000 is', ['Rs. 220', 'Rs. 100', 'Rs. 110', 'Rs. 200'], 'Rs. 200', 'The correct answer is Rs. 200.'),
  Q('q054', 'simple-compound-interest', 'medium', 'Find the compound interest on Rs. 10000 at 10% p.a. for 2 years, compounded annually.', ['2000', '2100', '2200', '2400'], '2100', 'Amount = 10000 x 1.1 x 1.1 = 12100. CI = 12100 - 10000 = 2100.'),
  Q('q055', 'simple-compound-interest', 'medium', 'At what rate percent per annum will Rs. 800 amount to Rs. 968 in 2 years at compound interest?', ['8%', '9%', '10%', '12%'], '10%', '968/800 = 1.21 = 1.1^2, so the rate is 10%.'),
  Q('q056', 'simple-compound-interest', 'medium', 'Compound interest differs from simple interest because interest is', ['Added to the principal for later periods', 'Always ignored', 'Always constant', 'Paid before borrowing'], 'Added to the principal for later periods', 'The correct answer is Added to the principal for later periods.'),
  Q('q057', 'simple-compound-interest', 'medium', 'At 10% annual CI, Rs. 1,000 becomes after one year', ['Rs. 1,200', 'Rs. 900', 'Rs. 1,010', 'Rs. 1,100'], 'Rs. 1,100', 'The correct answer is Rs. 1,100.'),
  Q('q058', 'simple-compound-interest', 'hard', 'The difference between compound interest and simple interest on a sum for 2 years at 10% p.a. is Rs. 150. Find the sum.', ['12000', '15000', '18000', '20000'], '15000', 'Difference = P x (r/100)^2 = P x 0.01. So P = 150/0.01 = 15000.'),
  Q('q059', 'simple-compound-interest', 'hard', 'For two years, the CI−SI difference at rate r% is', ['Pr/100', '2Pr/100', 'P/r', 'P(r/100)^2'], 'P(r/100)^2', 'The correct answer is P(r/100)^2.'),
  Q('q060', 'simple-compound-interest', 'hard', 'At 5% compound interest, the annual growth factor is', ['0.95', '1.05', '1.5', '5.05'], '1.05', 'The correct answer is 1.05.'),
  // ---------- Time & Work ----------
  Q('q061', 'time-work', 'easy', 'A can do a piece of work in 10 days and B in 15 days. Working together, how many days will they take?', ['5', '6', '7', '8'], '6', 'Combined rate = 1/10 + 1/15 = 1/6, so together they take 6 days.'),
  Q('q062', 'time-work', 'easy', 'If a person completes a job in 10 days, the one-day work rate is', ['1/20', '1/10', '10', '1/5'], '1/10', 'The correct answer is 1/10.'),
  Q('q063', 'time-work', 'easy', 'If A and B work together, their rates are', ['Subtracted always', 'Averaged always', 'Multiplied always', 'Added'], 'Added', 'The correct answer is Added.'),
  Q('q064', 'time-work', 'medium', "A can finish a job in 12 days. After 4 days, B joins him and together they finish the remaining work in 4 more days. In how many days can B alone finish the job?", ['8', '10', '12', '16'], '12', "A completes 4/12 = 1/3 in 4 days. Remaining 2/3 is done in 4 days combined, so combined rate = 1/6/day. B's rate = 1/6 - 1/12 = 1/12, so B alone takes 12 days."),
  Q('q065', 'time-work', 'medium', '12 men can complete a piece of work in 8 days. How many men are needed to complete it in 6 days?', ['14', '16', '18', '20'], '16', 'Men x Days is constant: 12 x 8 = 96. Men needed = 96 / 6 = 16.'),
  Q('q066', 'time-work', 'medium', '12 workers working 5 days provide how many worker-days?', ['17', '72', '50', '60'], '60', 'The correct answer is 60.'),
  Q('q067', 'time-work', 'medium', "If a worker's efficiency doubles, time for the same work becomes", ['Double', 'Half', 'Unchanged', 'Four times'], 'Half', 'The correct answer is Half.'),
  Q('q068', 'time-work', 'hard', 'A and B together can complete a work in 6 days. A alone can complete it in 10 days. In how many days can B alone complete it?', ['12', '15', '18', '20'], '15', "B's rate = 1/6 - 1/10 = 1/15, so B alone takes 15 days."),
  Q('q069', 'time-work', 'hard', 'A does a job in 6 days and B in 3 days. Together their rate is', ['1/9', '2/9', '1/3', '1/2 job/day'], '1/2 job/day', 'The correct answer is 1/2 job/day.'),
  Q('q070', 'time-work', 'hard', 'If A alone takes 8 days and B alone 12 days, together they take', ['10 days', '24/5 days', '20/3 days', '6 days'], '24/5 days', 'The correct answer is 24/5 days.'),
  // ---------- Pipes & Cisterns ----------
  Q('q071', 'pipes-cisterns', 'easy', 'Pipe A fills a tank in 6 hours and pipe B fills it in 8 hours. If both are opened together, in how much time will the tank be filled?', ['3 3/7 hours', '4 hours', '3.5 hours', '4 hours 30 minutes'], '3 3/7 hours', 'Combined rate = 1/6 + 1/8 = 7/24, so time = 24/7 = 3 3/7 hours.'),
  Q('q072', 'pipes-cisterns', 'easy', "An inlet pipe's rate is measured as", ['Water temperature', 'Fraction of tank filled per unit time', 'Tank volume only', 'Pipe length'], 'Fraction of tank filled per unit time', 'The correct answer is Fraction of tank filled per unit time.'),
  Q('q073', 'pipes-cisterns', 'easy', 'A pipe filling a tank in 5 hours has rate', ['1/2 tank/hour', '1/5 tank/hour', '1/10 tank/hour', '5 tank/hour'], '1/5 tank/hour', 'The correct answer is 1/5 tank/hour.'),
  Q('q074', 'pipes-cisterns', 'medium', 'Pipe A can fill a tank in 10 hours and pipe B can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?', ['20 hours', '25 hours', '30 hours', '35 hours'], '30 hours', 'Net rate = 1/10 - 1/15 = 1/30, so the tank fills in 30 hours.'),
  Q('q075', 'pipes-cisterns', 'medium', 'Two pipes can fill a tank in 20 and 30 minutes. Both are opened together, but the first is closed after 5 minutes. Find the total time to fill the tank.', ['20 minutes', '21 minutes', '22.5 minutes', '25 minutes'], '22.5 minutes', 'Combined rate = 1/12 per minute; in 5 minutes 5/12 is filled. Remaining 7/12 is filled by pipe 2 alone in 17.5 minutes, giving a total of 22.5 minutes.'),
  Q('q076', 'pipes-cisterns', 'medium', 'An outlet removes water, so its rate is treated as', ['Zero', 'Squared', 'Negative', 'Positive only'], 'Negative', 'The correct answer is Negative.'),
  Q('q077', 'pipes-cisterns', 'medium', 'If two inlet rates are 1/6 and 1/3 tank/hour, together they are', ['2/3', '1/2 tank/hour', '1/3', '1/18'], '1/2 tank/hour', 'The correct answer is 1/2 tank/hour.'),
  Q('q078', 'pipes-cisterns', 'hard', 'An inlet pipe can fill a tank in 8 hours. A leak in the tank can empty a full tank in 12 hours. If the tank is empty and both the inlet and the leak are active, how long will it take to fill the tank?', ['16 hours', '20 hours', '24 hours', '28 hours'], '24 hours', 'Net rate = 1/8 - 1/12 = 1/24, so it takes 24 hours to fill the tank.'),
  Q('q079', 'pipes-cisterns', 'hard', 'A tank fills in 4 hours and a leak empties it in 12 hours. Net filling rate is', ['1/8', '1/3', '1/6 tank/hour', '1/16'], '1/6 tank/hour', 'The correct answer is 1/6 tank/hour.'),
  Q('q080', 'pipes-cisterns', 'hard', 'If an inlet fills a tank in 3 hours and an outlet empties it in 6 hours, both open from empty, fill time is', ['9 hours', '6 hours', '2 hours', '3 hours'], '6 hours', 'The correct answer is 6 hours.'),
  // ---------- Time, Speed & Distance ----------
  Q('q081', 'time-speed-distance', 'easy', 'A car travels 180 km in 3 hours. Find its speed.', ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], '60 km/h', 'Speed = distance/time = 180/3 = 60 km/h.'),
  Q('q082', 'time-speed-distance', 'easy', 'Speed is calculated as', ['Distance + time', 'Time ÷ distance', 'Distance ÷ time', 'Distance × time'], 'Distance ÷ time', 'The correct answer is Distance ÷ time.'),
  Q('q083', 'time-speed-distance', 'easy', 'A car travels 120 km in 2 hours. Speed is', ['60 km/h', '40 km/h', '50 km/h', '80 km/h'], '60 km/h', 'The correct answer is 60 km/h.'),
  Q('q084', 'time-speed-distance', 'medium', 'A man covers a distance at 40 km/h and returns over the same route at 60 km/h. Find his average speed for the whole journey.', ['45 km/h', '48 km/h', '50 km/h', '52 km/h'], '48 km/h', 'Average speed = (2 x 40 x 60)/(40+60) = 4800/100 = 48 km/h.'),
  Q('q085', 'time-speed-distance', 'medium', 'A and B start from the same point and walk in opposite directions at 5 km/h and 7 km/h respectively. How far apart are they after 2 hours?', ['20 km', '22 km', '24 km', '26 km'], '24 km', 'Relative speed = 5 + 7 = 12 km/h. Distance in 2 hours = 12 x 2 = 24 km.'),
  Q('q086', 'time-speed-distance', 'medium', 'At constant speed, doubling distance makes travel time', ['Unchanged', 'Double', 'Half', 'Four times'], 'Double', 'The correct answer is Double.'),
  Q('q087', 'time-speed-distance', 'medium', 'A speed of 10 m/s equals', ['36 km/h', '30 km/h', '18 km/h', '72 km/h'], '36 km/h', 'The correct answer is 36 km/h.'),
  Q('q088', 'time-speed-distance', 'hard', 'A thief is spotted by a policeman from a distance of 200 m. The thief runs at 10 km/h and the policeman chases at 12 km/h. Find the distance the thief will have run before being caught.', ['800 m', '900 m', '1000 m', '1200 m'], '1000 m', 'Relative speed = 2 km/h. Time to close 200 m = 0.2/2 = 0.1 hour. Distance run by thief = 10 x 0.1 = 1 km = 1000 m.'),
  Q('q089', 'time-speed-distance', 'hard', 'For equal distances at speeds 40 and 60 km/h, average speed is', ['45 km/h', '52 km/h', '50 km/h', '48 km/h'], '48 km/h', 'The correct answer is 48 km/h.'),
  Q('q090', 'time-speed-distance', 'hard', 'Two objects moving toward each other at 5 and 7 km/h have relative speed', ['7 km/h', '35 km/h', '2 km/h', '12 km/h'], '12 km/h', 'The correct answer is 12 km/h.'),
  // ---------- Trains ----------
  Q('q091', 'trains', 'easy', 'A train 150 m long crosses a pole in 15 seconds. Find its speed in km/h.', ['30', '33', '36', '40'], '36', 'Speed = 150/15 = 10 m/s = 36 km/h.'),
  Q('q092', 'trains', 'easy', 'A train crossing a pole covers', ['Zero distance', 'Only the pole width', 'Its own length', 'Platform length only'], 'Its own length', 'The correct answer is Its own length.'),
  Q('q093', 'trains', 'easy', 'A 100 m train crosses a pole in 5 s. Speed is', ['5 m/s', '25 m/s', '50 m/s', '20 m/s'], '20 m/s', 'The correct answer is 20 m/s.'),
  Q('q094', 'trains', 'medium', 'A train 200 m long moving at 72 km/h crosses a platform in 30 seconds. Find the length of the platform.', ['350 m', '380 m', '400 m', '420 m'], '400 m', '72 km/h = 20 m/s. Distance covered = 20 x 30 = 600 m. Platform length = 600 - 200 = 400 m.'),
  Q('q095', 'trains', 'medium', 'Two trains 120 m and 180 m long run at 54 km/h and 36 km/h respectively in opposite directions. Find the time they take to cross each other.', ['10 s', '11 s', '12 s', '13 s'], '12 s', 'Relative speed = 90 km/h = 25 m/s. Total length = 300 m. Time = 300/25 = 12 s.'),
  Q('q096', 'trains', 'medium', 'To convert km/h to m/s, multiply by', ['18/5', '5/18', '3/5', '5/3'], '5/18', 'The correct answer is 5/18.'),
  Q('q097', 'trains', 'medium', 'A train crossing a platform covers', ['Train length + platform length', 'Only train length', 'Only platform length', 'Their difference always'], 'Train length + platform length', 'The correct answer is Train length + platform length.'),
  Q('q098', 'trains', 'hard', 'A train running at 54 km/h crosses another train of the same length running at 36 km/h in the same direction in 40 seconds. Find the length of each train.', ['80 m', '90 m', '100 m', '120 m'], '100 m', 'Relative speed = 18 km/h = 5 m/s. 2L = 5 x 40 = 200, so L = 100 m.'),
  Q('q099', 'trains', 'hard', 'Two trains moving in opposite directions have relative speed equal to', ['Average speed', 'Difference of speeds', 'Product of speeds', 'Sum of their speeds'], 'Sum of their speeds', 'The correct answer is Sum of their speeds.'),
  Q('q100', 'trains', 'hard', 'Two equal trains of length 120 m moving in the same direction at relative speed 6 m/s take to cross', ['20 s', '30 s', '40 s', '60 s'], '40 s', 'The correct answer is 40 s.'),
  // ---------- Boats & Streams ----------
  Q('q101', 'boats-streams', 'easy', "A boat's speed in still water is 15 km/h and the stream's speed is 3 km/h. Find the boat's downstream speed.", ['12 km/h', '15 km/h', '18 km/h', '21 km/h'], '18 km/h', 'Downstream speed = 15 + 3 = 18 km/h.'),
  Q('q102', 'boats-streams', 'easy', 'Downstream speed equals', ['Still-water speed − stream speed', 'Still-water speed + stream speed', 'Stream speed only', 'Their product'], 'Still-water speed + stream speed', 'The correct answer is Still-water speed + stream speed.'),
  Q('q103', 'boats-streams', 'easy', 'Upstream speed equals', ['Stream speed only', 'Their sum', 'Still-water speed × stream speed', 'Still-water speed − stream speed'], 'Still-water speed − stream speed', 'The correct answer is Still-water speed − stream speed.'),
  Q('q104', 'boats-streams', 'medium', 'A boat covers 24 km downstream in 2 hours and returns upstream in 3 hours. Find the speed of the boat in still water.', ['8', '9', '10', '11'], '10', 'Downstream speed = 12 km/h, upstream speed = 8 km/h. Boat speed = (12+8)/2 = 10 km/h.'),
  Q('q105', 'boats-streams', 'medium', 'A man rows 10 km upstream in 2 hours and 10 km downstream in 1.25 hours. Find the speed of the stream.', ['1 km/h', '1.5 km/h', '2 km/h', '2.5 km/h'], '1.5 km/h', 'Upstream speed = 5 km/h, downstream speed = 8 km/h. Stream speed = (8-5)/2 = 1.5 km/h.'),
  Q('q106', 'boats-streams', 'medium', 'A boat moves at 10 km/h in still water and stream is 2 km/h. Downstream speed is', ['12 km/h', '10 km/h', '8 km/h', '20 km/h'], '12 km/h', 'The correct answer is 12 km/h.'),
  Q('q107', 'boats-streams', 'medium', 'With still-water speed 15 and stream speed 3, upstream speed is', ['18 km/h', '15 km/h', '9 km/h', '12 km/h'], '12 km/h', 'The correct answer is 12 km/h.'),
  Q('q108', 'boats-streams', 'hard', 'A boatman rows to a place 45 km away and back in 20 hours. He finds that he can row 12 km with the stream in the same time as 4 km against the stream. Find the speed of the stream.', ['2 km/h', '3 km/h', '4 km/h', '5 km/h'], '3 km/h', 'Downstream:upstream speed ratio = 3:1. Solving 45/3x + 45/x = 20 gives x = 3, so downstream = 9, upstream = 3, and stream speed = (9-3)/2 = 3 km/h.'),
  Q('q109', 'boats-streams', 'hard', 'If downstream and upstream speeds are 14 and 10 km/h, stream speed is', ['4 km/h', '12 km/h', '2 km/h', '10 km/h'], '2 km/h', 'The correct answer is 2 km/h.'),
  Q('q110', 'boats-streams', 'hard', "For the same distance, a round trip's average speed is the harmonic mean of", ['Only still-water speed', 'Only downstream speed', 'Their sum', 'Upstream and downstream speeds'], 'Upstream and downstream speeds', 'The correct answer is Upstream and downstream speeds.'),
  // ---------- Mixtures & Alligation ----------
  Q('q111', 'mixtures-alligation', 'easy', 'In what ratio must rice at Rs. 40/kg be mixed with rice at Rs. 60/kg so that the mixture costs Rs. 52/kg?', ['2:3', '3:2', '4:5', '5:4'], '2:3', 'By alligation, ratio = (60-52):(52-40) = 8:12 = 2:3.'),
  Q('q112', 'mixtures-alligation', 'easy', 'In a mixture, concentration means', ['Difference only', 'Amount of component ÷ total amount', 'Component + total', 'Total ÷ component'], 'Amount of component ÷ total amount', 'The correct answer is Amount of component ÷ total amount.'),
  Q('q113', 'mixtures-alligation', 'easy', 'Mixing 2 L water with 3 L water gives', ['6 L', '1 L', '2.5 L', '5 L'], '5 L', 'The correct answer is 5 L.'),
  Q('q114', 'mixtures-alligation', 'medium', 'A container has 50 litres of milk. 10 litres is withdrawn and replaced with water; this is done once more. Find the quantity of milk left.', ['28 litres', '30 litres', '32 litres', '34 litres'], '32 litres', 'Milk left = 50 x (1 - 10/50)^2 = 50 x 0.64 = 32 litres.'),
  Q('q115', 'mixtures-alligation', 'medium', 'How many kg of sugar costing Rs. 20/kg must be mixed with 40 kg of sugar costing Rs. 15/kg so that the mixture is worth Rs. 18/kg?', ['50 kg', '60 kg', '70 kg', '80 kg'], '60 kg', 'By alligation, cheap:dear = (20-18):(18-15) = 2:3. Since the cheap quantity is 40 kg, the dearer quantity = 40 x 3/2 = 60 kg.'),
  Q('q116', 'mixtures-alligation', 'medium', 'A 20% salt solution contains how much salt in 200 mL?', ['40 mL', '80 mL', '60 mL', '20 mL'], '40 mL', 'The correct answer is 40 mL.'),
  Q('q117', 'mixtures-alligation', 'medium', 'To make a mixture stronger in solute, one can generally', ['Always add solvent', 'Add more solute or remove solvent', 'Do nothing', 'Remove solute'], 'Add more solute or remove solvent', 'The correct answer is Add more solute or remove solvent.'),
  Q('q118', 'mixtures-alligation', 'hard', 'Two vessels contain milk and water mixtures in the ratio 3:1 and 5:2 respectively. Equal quantities from each are mixed together. Find the ratio of milk to water in the resulting mixture.', ['41:15', '39:17', '43:13', '37:19'], '41:15', 'Taking 28 units from each: vessel 1 gives 21 milk and 7 water; vessel 2 gives 20 milk and 8 water. Total milk:water = 41:15.'),
  Q('q119', 'mixtures-alligation', 'hard', 'Alligation is primarily used to find', ['Prime factors', 'Mixing ratios for target averages', 'Clock angles', 'Blood relations'], 'Mixing ratios for target averages', 'The correct answer is Mixing ratios for target averages.'),
  Q('q120', 'mixtures-alligation', 'hard', 'Mixing equal quantities of 20% and 40% solutions gives', ['25%', '60%', '20%', '30%'], '30%', 'The correct answer is 30%.'),
  // ---------- Ages ----------
  Q('q121', 'ages', 'easy', "A father's present age is 3 times his son's age. After 5 years, the father's age will be 2.5 times the son's age. Find the son's present age.", ['10', '12', '15', '18'], '15', 'Let son = x, father = 3x. 3x+5 = 2.5(x+5) gives x = 15.'),
  Q('q122', 'ages', 'easy', 'If A is 5 years older than B, their age difference is', ['5 years', '0 years', '15 years', '10 years'], '5 years', 'The correct answer is 5 years.'),
  Q('q123', 'ages', 'easy', 'If a child is 10 now, after 5 years the age is', ['10', '15', '20', '5'], '15', 'The correct answer is 15.'),
  Q('q124', 'ages', 'medium', "The sum of the present ages of A and B is 42 years. Five years ago, A's age was thrice B's age then. Find A's present age.", ['24', '27', '29', '31'], '29', 'Let B = b, A = 42-b. (42-b-5) = 3(b-5) gives b = 13, so A = 29.'),
  Q('q125', 'ages', 'medium', "A is twice as old as B was two years ago. The difference between A's and B's present ages is 2 years. Find A's present age.", ['6', '8', '10', '12'], '8', "Let B's current age = b. A = 2(b-2). A - b = 2 gives b = 6, so A = 8."),
  Q('q126', 'ages', 'medium', 'Age ratios should be compared using', ['Ages measured at the same point in time', 'Only differences', 'Only names', 'Unrelated dates'], 'Ages measured at the same point in time', 'The correct answer is Ages measured at the same point in time.'),
  Q('q127', 'ages', 'medium', "If father is 3 times son's age and son is 12, father is", ['48', '30', '24', '36'], '36', 'The correct answer is 36.'),
  Q('q128', 'ages', 'hard', "Ten years ago, the ratio of the ages of P and Q was 1:2. The ratio of their present ages is 3:5. Find Q's present age.", ['40', '45', '50', '55'], '50', 'Ages 10 years ago: x and 2x. Present: x+10 and 2x+10. (x+10):(2x+10) = 3:5 gives x = 20, so Q is now 50.'),
  Q('q129', 'ages', 'hard', 'Five years ago A was twice B. If their current difference is 10, current ages are', ['25 and 15', '18 and 8', '20 and 10', '30 and 20'], '25 and 15', 'The correct answer is 25 and 15.'),
  Q('q130', 'ages', 'hard', 'Ages of A and B are in ratio 4:5 and sum to 45. A is', ['30', '15', '20', '25'], '20', 'The correct answer is 20.'),
  // ---------- Algebra ----------
  Q('q131', 'algebra', 'easy', 'Solve for x: 3x - 7 = 11', ['4', '5', '6', '7'], '6', '3x = 18, so x = 6.'),
  Q('q132', 'algebra', 'easy', 'The value of x satisfying x+5=12 is', ['5', '6', '7', '8'], '7', 'The correct answer is 7.'),
  Q('q133', 'algebra', 'easy', 'If 2x=18, x equals', ['9', '10', '8', '12'], '9', 'The correct answer is 9.'),
  Q('q134', 'algebra', 'medium', 'If x + 1/x = 5, find the value of x^2 + 1/x^2.', ['21', '23', '25', '27'], '23', 'x^2 + 1/x^2 = (x+1/x)^2 - 2 = 25 - 2 = 23.'),
  Q('q135', 'algebra', 'medium', 'Find the sum of the roots of x^2 - 7x + 12 = 0.', ['5', '6', '7', '8'], '7', 'For ax^2+bx+c=0, sum of roots = -b/a = 7.'),
  Q('q136', 'algebra', 'medium', 'For x²=49, the real solutions are', ['49 and −49', '7 only', '−7 only', '7 and −7'], '7 and −7', 'The correct answer is 7 and −7.'),
  Q('q137', 'algebra', 'medium', 'The sum of roots of ax²+bx+c=0 is', ['b/a', 'c/a', '−c/b', '−b/a'], '−b/a', 'The correct answer is −b/a.'),
  Q('q138', 'algebra', 'hard', 'If a + b = 10 and ab = 21, find a^2 + b^2.', ['50', '54', '58', '62'], '58', 'a^2+b^2 = (a+b)^2 - 2ab = 100 - 42 = 58.'),
  Q('q139', 'algebra', 'hard', 'If x+y=10 and xy=21, x²+y² equals', ['79', '100', '58', '42'], '58', 'The correct answer is 58.'),
  Q('q140', 'algebra', 'hard', 'If x+1/x=5, then x²+1/x² equals', ['25', '23', '27', '21'], '23', 'The correct answer is 23.'),
  // ---------- Permutation & Combination ----------
  Q('q141', 'permutation-combination', 'easy', 'In how many ways can 4 people be arranged in a row?', ['12', '16', '24', '32'], '24', '4! = 24.'),
  Q('q142', 'permutation-combination', 'easy', 'The number of arrangements of n distinct objects is', ['2n', 'n!', 'n²', 'n/2'], 'n!', 'The correct answer is n!.'),
  Q('q143', 'permutation-combination', 'easy', 'Choosing 2 people from 5 is a', ['Probability', 'Factorial only', 'Combination', 'Permutation'], 'Combination', 'The correct answer is Combination.'),
  Q('q144', 'permutation-combination', 'medium', 'In how many ways can a committee of 3 be formed from 6 people?', ['15', '18', '20', '24'], '20', 'C(6,3) = 20.'),
  Q('q145', 'permutation-combination', 'medium', 'How many 3-digit numbers can be formed using the digits 1 to 5 without repetition?', ['50', '60', '75', '100'], '60', '5 x 4 x 3 = 60.'),
  Q('q146', 'permutation-combination', 'medium', '5! equals', ['120', '60', '100', '150'], '120', 'The correct answer is 120.'),
  Q('q147', 'permutation-combination', 'medium', 'Number of ways to choose 3 from 6 is', ['15', '24', '20', '18'], '20', 'The correct answer is 20.'),
  Q('q148', 'permutation-combination', 'hard', 'In how many ways can the letters of the word "APPLE" be arranged?', ['60', '90', '120', '150'], '60', 'APPLE has 5 letters with P repeated twice: 5!/2! = 60.'),
  Q('q149', 'permutation-combination', 'hard', 'Number of ordered selections of 2 from 5 is', ['20', '15', '10', '25'], '20', 'The correct answer is 20.'),
  Q('q150', 'permutation-combination', 'hard', 'If two identical letters occur in 5 letters, distinct arrangements are generally', ['2!/5!', '5!×2', '5!/5', '5!/2!'], '5!/2!', 'The correct answer is 5!/2!.'),
  // ---------- Probability ----------
  Q('q151', 'probability', 'easy', 'A die is thrown once. Find the probability of getting a number greater than 4.', ['1/6', '1/3', '1/2', '2/3'], '1/3', 'Favourable outcomes {5,6}: probability = 2/6 = 1/3.'),
  Q('q152', 'probability', 'easy', 'Probability of a certain event is', ['2', '1', '1/2', '0'], '1', 'The correct answer is 1.'),
  Q('q153', 'probability', 'easy', 'Probability of an impossible event is', ['1/2', '−1', '1', '0'], '0', 'The correct answer is 0.'),
  Q('q154', 'probability', 'medium', 'Two coins are tossed. Find the probability of getting at least one head.', ['1/4', '1/2', '3/4', '1'], '3/4', 'P(no head) = 1/4, so P(at least one head) = 1 - 1/4 = 3/4.'),
  Q('q155', 'probability', 'medium', 'A bag contains 5 red and 3 blue balls. One ball is drawn at random. Find the probability it is blue.', ['3/8', '1/2', '5/8', '1/4'], '3/8', 'Probability = 3/(5+3) = 3/8.'),
  Q('q156', 'probability', 'medium', 'A fair die has how many equally likely outcomes?', ['6', '4', '5', '8'], '6', 'The correct answer is 6.'),
  Q('q157', 'probability', 'medium', 'Probability of getting a head on a fair coin is', ['1/2', '1', '1/3', '1/4'], '1/2', 'The correct answer is 1/2.'),
  Q('q158', 'probability', 'hard', 'Two dice are rolled. Find the probability that the sum of the numbers is 8.', ['4/36', '5/36', '6/36', '7/36'], '5/36', 'Favourable pairs: (2,6),(3,5),(4,4),(5,3),(6,2) — 5 outcomes out of 36.'),
  Q('q159', 'probability', 'hard', 'Probability of at least one head in two fair tosses is', ['2/3', '3/4', '1/2', '1/4'], '3/4', 'The correct answer is 3/4.'),
  Q('q160', 'probability', 'hard', 'If two independent events have probabilities 1/2 and 1/3, both occurring has probability', ['5/6', '1/5', '1/6', '2/3'], '1/6', 'The correct answer is 1/6.'),
  // ---------- Geometry & Mensuration ----------
  Q('q161', 'geometry-mensuration', 'easy', 'Find the area of a rectangle with length 12 cm and breadth 8 cm.', ['84', '90', '96', '104'], '96', 'Area = 12 x 8 = 96 sq cm.'),
  Q('q162', 'geometry-mensuration', 'easy', 'Area of a rectangle is', ['2(length+breadth)', 'length × breadth', 'length/breadth', 'length + breadth'], 'length × breadth', 'The correct answer is length × breadth.'),
  Q('q163', 'geometry-mensuration', 'easy', 'Perimeter of a square of side 6 cm is', ['24 cm', '36 cm', '18 cm', '12 cm'], '24 cm', 'The correct answer is 24 cm.'),
  Q('q164', 'geometry-mensuration', 'medium', 'Find the circumference of a circle with radius 7 cm (use pi = 22/7).', ['22', '33', '44', '55'], '44', 'Circumference = 2 x 22/7 x 7 = 44 cm.'),
  Q('q165', 'geometry-mensuration', 'medium', 'Find the volume of a cube with side 5 cm.', ['100', '110', '125', '150'], '125', 'Volume = 5^3 = 125 cubic cm.'),
  Q('q166', 'geometry-mensuration', 'medium', 'Area of a triangle is', ['1/2 × base × height', 'base × height', '2base×height', 'base+height'], '1/2 × base × height', 'The correct answer is 1/2 × base × height.'),
  Q('q167', 'geometry-mensuration', 'medium', 'Circumference of a circle is', ['r²', '2πr', 'πr²', 'πd²'], '2πr', 'The correct answer is 2πr.'),
  Q('q168', 'geometry-mensuration', 'hard', 'The area of a right triangle is 60 sq cm and one of its legs is 15 cm. Find the other leg.', ['6', '8', '10', '12'], '8', 'Area = 1/2 x base x height. 60 = 1/2 x 15 x h gives h = 8 cm.'),
  Q('q169', 'geometry-mensuration', 'hard', 'Volume of a cube of side 4 cm is', ['48 cm³', '64 cm³', '16 cm³', '32 cm³'], '64 cm³', 'The correct answer is 64 cm³.'),
  Q('q170', 'geometry-mensuration', 'hard', 'A right triangle with legs 6 and 8 has hypotenuse', ['12', '14', '16', '10'], '10', 'The correct answer is 10.'),
  // ---------- Data Interpretation ----------
  Q('q171', 'data-interpretation', 'easy', "A company's sales (in Rs. lakh) were: 2019: 50, 2020: 60, 2021: 75, 2022: 90. Find the percentage increase in sales from 2020 to 2021.", ['15%', '20%', '25%', '30%'], '25%', 'Increase = 15 on a base of 60 = 15/60 x 100 = 25%.'),
  Q('q172', 'data-interpretation', 'easy', 'A table is most useful for', ['Writing programs', 'Comparing organized numerical data', 'Storing passwords', 'Drawing code'], 'Comparing organized numerical data', 'The correct answer is Comparing organized numerical data.'),
  Q('q173', 'data-interpretation', 'easy', 'If sales rise from 100 to 120, the increase is', ['10%', '20%', '25%', '15%'], '20%', 'The correct answer is 20%.'),
  Q('q174', 'data-interpretation', 'medium', 'In a survey of 500 students, 60% preferred tea and the rest preferred coffee. How many students preferred coffee?', ['150', '180', '200', '220'], '200', 'Coffee preference = 40% of 500 = 200.'),
  Q('q175', 'data-interpretation', 'medium', 'The marks of 5 students are 45, 60, 72, 80 and 93. Find the median mark.', ['60', '72', '75', '80'], '72', 'Sorted, the middle value (3rd of 5) is 72.'),
  Q('q176', 'data-interpretation', 'medium', 'The median of 3, 7, 9, 12, 15 is', ['9', '12', '15', '7'], '9', 'The correct answer is 9.'),
  Q('q177', 'data-interpretation', 'medium', 'If four values sum to 200, their average is', ['60', '50', '40', '45'], '50', 'The correct answer is 50.'),
  Q('q178', 'data-interpretation', 'hard', "A pie chart shows a company's expenses: Salaries 40%, Rent 15%, Marketing 20%, Others 25%. If total expense is Rs. 20 lakh, find the amount spent on Marketing.", ['3 lakh', '3.5 lakh', '4 lakh', '4.5 lakh'], '4 lakh', 'Marketing = 20% of 20 lakh = 4 lakh.'),
  Q('q179', 'data-interpretation', 'hard', 'A 30% share of Rs. 50 lakh equals', ['Rs. 12 lakh', 'Rs. 20 lakh', 'Rs. 15 lakh', 'Rs. 10 lakh'], 'Rs. 15 lakh', 'The correct answer is Rs. 15 lakh.'),
  Q('q180', 'data-interpretation', 'hard', 'If A=80 and B=100, A is what percent less than B?', ['25%', '15%', '20%', '10%'], '20%', 'The correct answer is 20%.'),
  // ---------- Number Series ----------
  Q('q181', 'number-series', 'easy', 'Find the next number in the series: 2, 4, 6, 8, ?', ['9', '10', '11', '12'], '10', 'The series increases by 2 each time.'),
  Q('q182', 'number-series', 'easy', '2, 5, 8, 11, ?', ['14', '13', '15', '12'], '14', 'The common difference is 3.'),
  Q('q183', 'number-series', 'easy', '4, 8, 12, 16, ?', ['18', '20', '22', '24'], '20', 'Add 4 each time.'),
  Q('q184', 'number-series', 'medium', 'Find the next number in the series: 3, 6, 12, 24, ?', ['36', '42', '48', '54'], '48', 'Each term is double the previous term.'),
  Q('q185', 'number-series', 'medium', 'Find the missing number: 5, 11, 19, 29, ?', ['39', '40', '41', '43'], '41', 'The differences are 6, 8, 10, 12, so the next term is 29+12 = 41.'),
  Q('q186', 'number-series', 'medium', '3, 6, 12, 24, ?', ['48', '54', '42', '36'], '48', 'Each term doubles.'),
  Q('q187', 'number-series', 'medium', '2, 6, 12, 20, ?', ['32', '30', '36', '28'], '30', 'Terms are n(n+1): 1×2,2×3,3×4,4×5,5×6.'),
  Q('q188', 'number-series', 'hard', 'Find the next term: 1, 1, 2, 3, 5, 8, 13, ?', ['18', '20', '21', '24'], '21', 'This is the Fibonacci series; each term is the sum of the two preceding terms.'),
  Q('q189', 'number-series', 'hard', '1, 4, 9, 16, ?', ['25', '24', '20', '36'], '25', 'These are consecutive squares.'),
  Q('q190', 'number-series', 'hard', '5, 10, 20, 40, ?', ['80', '60', '70', '90'], '80', 'Each term is multiplied by 2.'),
  // ---------- Letter Series ----------
  Q('q191', 'letter-series', 'easy', 'Find the next letter: A, C, E, G, ?', ['H', 'I', 'J', 'K'], 'I', 'The series skips one letter each time: A, C, E, G, I.'),
  Q('q192', 'letter-series', 'easy', 'A, C, E, G, ?', ['J', 'H', 'I', 'K'], 'I', 'Move forward by two letters.'),
  Q('q193', 'letter-series', 'easy', 'Z, X, V, T, ?', ['Q', 'R', 'S', 'P'], 'R', 'Move backward by two letters.'),
  Q('q194', 'letter-series', 'medium', 'Find the odd one out: BD, FH, JL, NP, RU', ['BD', 'FH', 'NP', 'RU'], 'RU', 'Every pair follows a +2 letter gap except RU, which breaks the pattern (it should be RT).'),
  Q('q195', 'letter-series', 'medium', 'Complete the series: Z, X, V, T, ?', ['Q', 'R', 'S', 'T'], 'R', 'Each letter goes back by 2 positions in the alphabet.'),
  Q('q196', 'letter-series', 'medium', 'B, E, H, K, ?', ['M', 'O', 'P', 'N'], 'N', 'Move forward by three positions.'),
  Q('q197', 'letter-series', 'medium', 'AZ, BY, CX, DW, ?', ['FV', 'EW', 'EU', 'EV'], 'EV', 'First letter advances; second retreats.'),
  Q('q198', 'letter-series', 'hard', 'Find the next term: AZ, BY, CX, DW, ?', ['EU', 'EV', 'EW', 'FV'], 'EV', 'The first letters move forward (A,B,C,D,E) while the second letters move backward (Z,Y,X,W,V).'),
  Q('q199', 'letter-series', 'hard', 'C, F, J, O, ?', ['W', 'V', 'U', 'T'], 'U', 'Gaps are +3,+4,+5,+6.'),
  Q('q200', 'letter-series', 'hard', 'AB, DE, GH, JK, ?', ['LM', 'NO', 'OP', 'MN'], 'MN', 'Each pair advances by three positions.'),
  // ---------- Coding-Decoding ----------
  Q('q201', 'coding-decoding', 'easy', 'If CAT is coded as DBU, how is DOG coded?', ['EPH', 'EPI', 'FQH', 'EQH'], 'EPH', 'Each letter is shifted forward by one position: D-O-G becomes E-P-H.'),
  Q('q202', 'coding-decoding', 'easy', 'If CAT is coded as DBU, DOG becomes', ['FPI', 'EPH', 'EOG', 'DOH'], 'EPH', 'Each letter is shifted forward by one.'),
  Q('q203', 'coding-decoding', 'easy', 'If PEN is coded as ODM, BOX becomes', ['ANW', 'BNX', 'AOW', 'CPY'], 'ANW', 'Each letter is shifted backward by one.'),
  Q('q204', 'coding-decoding', 'medium', 'In a certain code, PEN is written as ODM. How is BOOK written in that code?', ['ANNJ', 'ANNI', 'BNNJ', 'ANOJ'], 'ANNJ', 'Each letter is shifted back by one position: B-O-O-K becomes A-N-N-J.'),
  Q('q205', 'coding-decoding', 'medium', 'If MADRAS is coded as NBESBT, how is BOMBAY coded in the same language?', ['CPNCBZ', 'CPNCBY', 'CQNCBZ', 'CPOCBZ'], 'CPNCBZ', 'Each letter is shifted forward by one position.'),
  Q('q206', 'coding-decoding', 'medium', 'If each letter is replaced by its next alphabet letter, JAVA becomes', ['KBVA', 'JZUZ', 'KBWB', 'LBXB'], 'KBWB', 'J→K, A→B, V→W, A→B.'),
  Q('q207', 'coding-decoding', 'medium', 'If SUN is coded by reversing the word, the code is', ['SNU', 'NSU', 'NUS', 'UNS'], 'NUS', 'Reversal changes SUN to NUS.'),
  Q('q208', 'coding-decoding', 'hard', 'If FRIEND is coded as HUMJTK, using increasing shifts of 2,3,4,5,6,7 for each letter, what does CANDLE code to?', ['EDRIRL', 'EDQIRL', 'EDRIRM', 'FDRIRL'], 'EDRIRL', 'Applying shifts of +2,+3,+4,+5,+6,+7 to C,A,N,D,L,E gives E,D,R,I,R,L.'),
  Q('q209', 'coding-decoding', 'hard', 'If A=1, B=2, ... Z=26, the code for CAB is', ['1-3-2', '2-1-3', '3-1-2', '3-2-1'], '3-1-2', 'C=3, A=1, B=2.'),
  Q('q210', 'coding-decoding', 'hard', 'If a word is coded by shifting each letter two places forward, CODE becomes', ['EPFG', 'EQFE', 'DQEF', 'EQFG'], 'EQFG', 'C→E, O→Q, D→F, E→G.'),
  // ---------- Blood Relations ----------
  Q('q211', 'blood-relations', 'easy', 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?', ['Sister', 'Mother', 'Aunt', 'Grandmother'], 'Mother', "The only daughter of the woman's mother is the woman herself, so the man's mother is the woman."),
  Q('q212', 'blood-relations', 'easy', "A is B's brother. B is C's sister. A is C's", ['Uncle', 'Brother', 'Father', 'Cousin'], 'Brother', 'A and C are siblings.'),
  Q('q213', 'blood-relations', 'easy', "P is Q's mother. Q is R's father. P is R's", ['Mother', 'Aunt', 'Grandmother', 'Sister'], 'Grandmother', "P is the mother of R's father."),
  Q('q214', 'blood-relations', 'medium', "A is B's sister. C is B's mother. D is C's father. How is A related to D?", ['Daughter', 'Granddaughter', 'Mother', 'Sister'], 'Granddaughter', "Since C is B's mother and D is C's father, D is the grandfather of both B and A, making A his granddaughter."),
  Q('q215', 'blood-relations', 'medium', 'Introducing a man, a woman said, "He is the son of my grandfather\'s only son." How is the man related to the woman?', ['Father', 'Brother', 'Cousin', 'Uncle'], 'Brother', "The grandfather's only son is the woman's own father, so the man is the woman's brother."),
  Q('q216', 'blood-relations', 'medium', "X is Y's father. Y is Z's mother. X is Z's", ['Grandfather', 'Brother', 'Uncle', 'Father'], 'Grandfather', "X is the father of Z's mother."),
  Q('q217', 'blood-relations', 'medium', "A's mother's brother is A's", ['Father', 'Maternal uncle', 'Cousin', 'Grandfather'], 'Maternal uncle', "Mother's brother is maternal uncle."),
  Q('q218', 'blood-relations', 'hard', 'P is the brother of Q. Q is the sister of R. R is the father of S. How is P related to S?', ['Father', 'Uncle', 'Grandfather', 'Brother'], 'Uncle', "Q is R's sibling, and P is Q's brother, so P is also R's sibling. Since R is S's father, P is S's uncle."),
  Q('q219', 'blood-relations', 'hard', "M is N's sister and N is O's son. M is O's", ['Aunt', 'Mother', 'Daughter', 'Grandmother'], 'Daughter', "M and N are siblings; N is O's son."),
  Q('q220', 'blood-relations', 'hard', "R is S's father. T is R's daughter. T is S's", ['Cousin', 'Mother', 'Sister', 'Aunt'], 'Sister', "R's children S and T are siblings."),
  // ---------- Direction Sense ----------
  Q('q221', 'direction-sense', 'easy', 'A man walks 5 km towards north, then turns right and walks 3 km. Which direction is he facing now?', ['North', 'South', 'East', 'West'], 'East', 'Turning right while facing north means he is now facing east.'),
  Q('q222', 'direction-sense', 'easy', 'Facing north, a right turn points', ['West', 'East', 'South', 'North'], 'East', 'Right of north is east.'),
  Q('q223', 'direction-sense', 'easy', 'Facing east, a left turn points', ['West', 'South', 'North', 'East'], 'North', 'Left of east is north.'),
  Q('q224', 'direction-sense', 'medium', 'A man walks 10 km east, turns left and walks 5 km, then turns left again and walks 10 km. How far is he from his starting point?', ['5 km', '10 km', '15 km', '20 km'], '5 km', 'His net displacement is 5 km north and 0 km east-west, a straight-line distance of 5 km.'),
  Q('q225', 'direction-sense', 'medium', 'Starting from point A, Ravi walks 3 km south, then turns left and walks 4 km. How far and in which direction is he from A?', ['5 km SE', '7 km SE', '5 km NE', '7 km NW'], '5 km SE', 'The 3 km and 4 km legs form a right angle, giving a straight-line distance of 5 km, in the south-east direction.'),
  Q('q226', 'direction-sense', 'medium', 'Walk 3 km north and 4 km east. Shortest distance is', ['6 km', '7 km', '5 km', '8 km'], '5 km', 'Use √(3²+4²)=5.'),
  Q('q227', 'direction-sense', 'medium', 'Walk 5 km south then 5 km north. Displacement is', ['10 km', '5 km', '0 km', '25 km'], '0 km', 'The movements cancel.'),
  Q('q228', 'direction-sense', 'hard', 'A person walks 6 km north, then 8 km east. Find the shortest distance between his starting point and his current position.', ['8 km', '10 km', '12 km', '14 km'], '10 km', 'By the Pythagorean theorem, distance = sqrt(6^2 + 8^2) = 10 km.'),
  Q('q229', 'direction-sense', 'hard', 'Walk 6 km east then 8 km north. Direction from start is', ['South-west', 'South-east', 'North-east', 'North-west'], 'North-east', 'Both north and east components are positive.'),
  Q('q230', 'direction-sense', 'hard', 'A person faces south and turns right. He faces', ['North', 'South', 'West', 'East'], 'West', 'Right of south is west.'),
  // ---------- Seating Arrangement ----------
  Q('q231', 'seating-arrangement', 'easy', 'Five friends A, B, C, D, E sit in a row. A is to the left of B and to the right of C. D is to the right of E and to the left of A. What is the order from left to right?', ['E, D, C, A, B', 'C, E, D, A, B', 'E, C, D, A, B', 'D, E, C, A, B'], 'E, D, C, A, B', 'Checking each clue against the order E, D, C, A, B satisfies every condition given.'),
  Q('q232', 'seating-arrangement', 'easy', 'In a row of 10, P is 3rd from left. Its position from right is', ['7th', '8th', '9th', '6th'], '8th', '10−3+1=8.'),
  Q('q233', 'seating-arrangement', 'easy', 'In a row, A is immediately left of B. If A is 5th from left, B is', ['6th from left', '7th', '4th', '5th'], '6th from left', 'Immediately right means next position.'),
  Q('q234', 'seating-arrangement', 'medium', 'In a row of 12 children facing north, P is 5th from the left and Q is 6th from the right. How many children sit between P and Q?', ['0', '1', '2', '3'], '1', "Q's position from the left is 12-6+1 = 7, so exactly one child (at position 6) sits between P (5th) and Q (7th)."),
  Q('q235', 'seating-arrangement', 'medium', 'In a row, Meera is 12th from the left and 9th from the right. How many students are there in the row?', ['18', '19', '20', '21'], '20', 'Total = 12 + 9 - 1 = 20.'),
  Q('q236', 'seating-arrangement', 'medium', 'Q is 4th from left and 5th from right. Total people are', ['8', '10', '9', '7'], '8', 'Total=4+5−1=8.'),
  Q('q237', 'seating-arrangement', 'medium', 'Six people A–F sit in a row. A is left of B, B left of C. Which order is possible?', ['B, A, C, D, E, F', 'A, C, B, D, E, F', 'A, B, C, D, E, F', 'C, B, A, D, E, F'], 'A, B, C, D, E, F', 'Only the first preserves A<B<C.'),
  Q('q238', 'seating-arrangement', 'hard', 'Five friends A, B, C, D, E sit in a row. C is immediately to the left of D. B is at one of the ends. A is second from the left. E is between A and C. What is the position of D from the left end?', ['3rd', '4th', '5th', '2nd'], '5th', 'The only order satisfying all clues is B, A, E, C, D, placing D at the 5th position.'),
  Q('q239', 'seating-arrangement', 'hard', 'In 9 seats, R is 2nd from left and S is 3rd from right. How many sit between them?', ['5', '4', '6', '3'], '4', 'S is 7th from left; positions 3–6 give four people.'),
  Q('q240', 'seating-arrangement', 'hard', 'A is 4th from left in a row of 11. B is 4th from right. Positions between A and B are', ['2', '3', '5', '4'], '3', 'B is 8th from left; positions 5,6,7 lie between.'),
  // ---------- Logical Puzzles ----------
  Q('q241', 'logical-puzzles', 'easy', 'If all cats are animals, and all animals are living things, then all cats are:', ['non-living', 'living things', 'plants', 'none of these'], 'living things', 'This follows directly by transitivity of the two given statements.'),
  Q('q242', 'logical-puzzles', 'easy', 'Four tasks A,B,C,D must be done with A before B and C before D. Which order is valid?', ['A, C, B, D', 'D, C, A, B', 'B, A, C, D', 'C, D, B, A'], 'A, C, B, D', 'Only A<C<B<D satisfies both precedence rules.'),
  Q('q243', 'logical-puzzles', 'easy', "If Monday's task is testing and Tuesday's is coding, which statement is certain?", ['They occur together', 'Testing occurs before coding', 'Neither is scheduled', 'Coding occurs before testing'], 'Testing occurs before coding', 'Monday precedes Tuesday.'),
  Q('q244', 'logical-puzzles', 'medium', 'A is taller than B. C is shorter than B. D is taller than A. Who is the tallest?', ['A', 'B', 'C', 'D'], 'D', 'D > A > B > C, so D is the tallest.'),
  Q('q245', 'logical-puzzles', 'medium', 'Statement: "All pens are pencils. Some pencils are erasers." Which conclusion definitely follows: "Some pens are erasers" or "Some erasers are pencils"?', ['Some pens are erasers', 'Some erasers are pencils', 'All pencils are pens', 'No erasers are pencils'], 'Some erasers are pencils', '"Some pencils are erasers" can be directly converted to "Some erasers are pencils," while the pen-eraser link is not guaranteed.'),
  Q('q246', 'logical-puzzles', 'medium', 'Three books P,Q,R are stacked. P is above Q and Q above R. Top book is', ['R', 'P', 'Q', 'Cannot be determined'], 'P', 'P is above both.'),
  Q('q247', 'logical-puzzles', 'medium', 'Five people have distinct ranks. A is above B and C is above A. Who is definitely above B?', ['C', 'B', 'No one', 'Only A'], 'C', 'C>A>B.'),
  Q('q248', 'logical-puzzles', 'hard', 'Five boxes P, Q, R, S, T are stacked one above another. R is above S but below Q. T is at the bottom. P is between Q and R. What is the order from top to bottom?', ['Q, P, R, S, T', 'P, Q, R, S, T', 'Q, R, P, S, T', 'Q, P, S, R, T'], 'Q, P, R, S, T', 'This is the only arrangement consistent with every clue given.'),
  Q('q249', 'logical-puzzles', 'hard', 'A team has exactly one leader, one tester and one developer. If Ravi is leader and Meena is tester, the developer is', ['The remaining member', 'Meena', 'Ravi', 'Either Ravi or Meena'], 'The remaining member', 'Roles are distinct.'),
  Q('q250', 'logical-puzzles', 'hard', 'Four items W,X,Y,Z: W before X; Y after X; Z before W. Which must be first among them?', ['W', 'Y', 'X', 'Z'], 'Z', 'Z<W<X<Y.'),
  // ---------- Syllogisms ----------
  Q('q251', 'syllogisms', 'easy', 'Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red. Does the conclusion follow?', ['Conclusion follows', 'Conclusion does not follow', 'Both follow', 'Cannot be determined'], 'Conclusion does not follow', 'The red flowers are not established to overlap with roses specifically, so the conclusion is not guaranteed.'),
  Q('q252', 'syllogisms', 'easy', 'All roses are flowers. All flowers need water. Therefore all roses need water.', ['Does not follow', 'Follows', 'Contradicts', 'May follow only'], 'Follows', 'The conclusion follows transitively.'),
  Q('q253', 'syllogisms', 'easy', 'All cats are animals. Some animals are black. Therefore some cats are black.', ['Contradicts', 'Always true', 'Does not follow', 'Follows'], 'Does not follow', 'Black animals need not be cats.'),
  Q('q254', 'syllogisms', 'medium', 'Statements: All doctors are educated. All educated people are respected. Conclusion: All doctors are respected. Does the conclusion follow?', ['Follows', 'Does not follow', 'Only possibly follows', 'Contradicts'], 'Follows', 'This follows directly by transitivity of the two universal statements.'),
  Q('q255', 'syllogisms', 'medium', 'Statements: Some books are pens. All pens are pencils. Conclusions: I. Some books are pencils. II. Some pencils are books. Which conclusion(s) follow?', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 'Both follow', 'Some books are pens and all pens are pencils, so some books are pencils; by conversion, some pencils are also books.'),
  Q('q256', 'syllogisms', 'medium', 'No birds are mammals. All sparrows are birds. Therefore no sparrows are mammals.', ['Does not follow', 'Only possibly follows', 'Follows', 'Contradicts'], 'Follows', 'Sparrows are birds and birds are not mammals.'),
  Q('q257', 'syllogisms', 'medium', 'Some engineers are writers. All writers are readers. Therefore some engineers are readers.', ['Contradicts', 'Impossible', 'Follows', 'Does not follow'], 'Follows', 'The engineers who are writers are readers.'),
  Q('q258', 'syllogisms', 'hard', 'Statements: No cups are plates. Some plates are spoons. Conclusion: Some spoons are not cups. Does it follow?', ['Follows', 'Does not follow', 'Follows only if all spoons are plates', 'Cannot be determined'], 'Follows', 'The spoons that are plates cannot be cups (since no cups are plates), so at least some spoons are not cups.'),
  Q('q259', 'syllogisms', 'hard', 'All A are B. No B are C. Therefore no A are C.', ['Only possibly', 'Does not follow', 'Contradicts', 'Follows'], 'Follows', 'A is a subset of B, and B excludes C.'),
  Q('q260', 'syllogisms', 'hard', 'Some P are Q. No Q are R. Therefore some P are not R.', ['Contradicts', 'Cannot be stated', 'Follows', 'Does not follow'], 'Follows', 'The P elements that are Q cannot be R.'),
  // ---------- Statement & Conclusions ----------
  Q('q261', 'statement-conclusions', 'easy', 'Statement: "The company reported a 30% rise in profits this quarter." Conclusion: "The company\'s sales strategy was successful this quarter." Does the conclusion follow?', ['Follows', 'Does not follow', 'Only partly follows', 'Contradicts'], 'Does not follow', 'A rise in profits could be due to several factors and does not confirm the sales strategy specifically.'),
  Q('q262', 'statement-conclusions', 'easy', 'Statement: All employees received an ID card. Conclusion: Every employee received an ID card.', ['Does not follow', 'Contradicts', 'Cannot be related', 'Follows'], 'Follows', 'It restates the statement.'),
  Q('q263', 'statement-conclusions', 'easy', 'Statement: Some buses are electric. Conclusion: All buses are electric.', ['Does not follow', 'Follows', 'Contradicts', 'Must be true'], 'Does not follow', 'Some does not imply all.'),
  Q('q264', 'statement-conclusions', 'medium', 'Statement: "All employees must complete the training by Friday or lose access to the system." Conclusion: "Some employees may lose system access." Does it follow?', ['Follows', 'Does not follow', 'Cannot be inferred', 'Contradicts'], 'Follows', 'The statement implies this consequence is a real possibility for those who do not complete the training.'),
  Q('q265', 'statement-conclusions', 'medium', 'Statement: "It rained heavily throughout the night in the city." Conclusion: "The roads in the city were flooded the next morning." Does it follow?', ['Follows', 'Does not follow', 'Only possibly follows', 'Contradicts'], 'Does not follow', 'Heavy rain does not necessarily confirm flooding without further information.'),
  Q('q266', 'statement-conclusions', 'medium', 'Statement: No late applications are accepted. Conclusion: A late application will not be accepted.', ['Only possibly', 'Does not follow', 'Contradicts', 'Follows'], 'Follows', 'It directly follows.'),
  Q('q267', 'statement-conclusions', 'medium', 'Statement: The library opens at 8 AM. Conclusion: The library is open at 7 AM.', ['Does not follow', 'Must be true', 'Contradicts', 'Follows'], 'Does not follow', 'The statement gives no 7 AM information.'),
  Q('q268', 'statement-conclusions', 'hard', 'Statement: "Only candidates who score above 80% in the written test will be called for interview." Conclusion: "A candidate who scored 85% will definitely get the job." Does it follow?', ['Follows', 'Does not follow', 'Only if selected', 'Contradicts'], 'Does not follow', 'Being called for an interview does not guarantee getting the job.'),
  Q('q269', 'statement-conclusions', 'hard', 'Statement: All selected candidates passed the test. Conclusion: Anyone selected passed the test.', ['Follows', 'Does not follow', 'Cannot tell', 'Contradicts'], 'Follows', 'Anyone selected belongs to the selected set.'),
  Q('q270', 'statement-conclusions', 'hard', 'Statement: Some laptops are expensive. Conclusion: Some expensive items are laptops.', ['Follows', 'Does not follow', 'Contradicts', 'Always false'], 'Follows', 'The same existing items can be described in either direction.'),
  // ---------- Statement & Assumptions ----------
  Q('q271', 'statement-assumptions', 'easy', 'Statement: "Please switch off the lights when leaving the room." Assumption: "Lights left on waste electricity." Is this assumption implicit?', ['Implicit', 'Not implicit', 'Contradictory', 'Unrelated'], 'Implicit', 'The instruction only makes sense if leaving lights on has some undesirable effect, such as wasting electricity.'),
  Q('q272', 'statement-assumptions', 'easy', 'Statement: Use helmets while riding. Assumption: Helmets can reduce injury risk.', ['Not implicit', 'Implicit', 'Irrelevant', 'Contradictory'], 'Implicit', 'The advice relies on protective benefit.'),
  Q('q273', 'statement-assumptions', 'easy', 'Statement: Install lights in the corridor. Assumption: Better lighting improves visibility.', ['Not implicit', 'Implicit', 'Contradictory', 'Impossible'], 'Implicit', 'The recommendation presumes a visibility problem/benefit.'),
  Q('q274', 'statement-assumptions', 'medium', 'Statement: "The company introduced a helpline number for customer complaints." Assumption: "Customers might have complaints that need addressing." Is the assumption valid?', ['Valid', 'Invalid', 'Contradictory', 'Irrelevant'], 'Valid', 'Introducing a complaints helpline assumes customers may have complaints.'),
  Q('q275', 'statement-assumptions', 'medium', 'Statement: "Wear a helmet while riding a two-wheeler." Assumption: "Not wearing a helmet increases the risk of injury." Is this valid?', ['Valid', 'Invalid', 'Unrelated', 'Contradictory'], 'Valid', 'The advice is based on the assumption that helmets reduce injury risk.'),
  Q('q276', 'statement-assumptions', 'medium', 'Statement: Take an umbrella because it may rain. Assumption: The person wants protection from rain.', ['Contradictory', 'Not implicit', 'Irrelevant', 'Implicit'], 'Implicit', 'The advice makes sense if avoiding rain matters.'),
  Q('q277', 'statement-assumptions', 'medium', 'Statement: Ban phones during the exam. Assumption: Phones may facilitate unfair assistance.', ['Unrelated', 'Contradictory', 'Implicit', 'Not implicit'], 'Implicit', 'The restriction presumes a cheating/distraction risk.'),
  Q('q278', 'statement-assumptions', 'hard', 'Statement: "The library will remain closed on all national holidays." Assumption: "Some people wish to visit the library on national holidays." Is this a valid assumption underlying the announcement?', ['Valid', 'Invalid', 'Contradictory', 'Irrelevant'], 'Valid', 'The announcement is only necessary because some people might otherwise plan to visit on those days.'),
  Q('q279', 'statement-assumptions', 'hard', "Statement: Buy this printer because it is cheap. Assumption: Price is relevant to the buyer's decision.", ['Implicit', 'Contradictory', 'Not implicit', 'Impossible'], 'Implicit', 'Otherwise low price would not support the recommendation.'),
  Q('q280', 'statement-assumptions', 'hard', 'Statement: Increase server capacity before the launch. Assumption: Current capacity may be insufficient for expected load.', ['Contradictory', 'Not implicit', 'Irrelevant', 'Implicit'], 'Implicit', 'The action is based on anticipated load.'),
  // ---------- Statement & Arguments ----------
  Q('q281', 'statement-arguments', 'easy', 'Statement: "Should smoking be banned in public places?" Argument: "Yes, it protects non-smokers from passive smoking." Is this argument strong or weak?', ['Strong', 'Weak', 'Irrelevant', 'Contradictory'], 'Strong', 'It addresses a direct and significant consequence relevant to the issue.'),
  Q('q282', 'statement-arguments', 'easy', 'Should employees follow safety rules even when unsupervised? Yes, because safety applies regardless of supervision.', ['Strong', 'Circular', 'Irrelevant', 'Weak'], 'Strong', 'It gives a direct safety-based reason.'),
  Q('q283', 'statement-arguments', 'easy', 'Should a company back up important data? Yes, because backups help recover from data loss.', ['Strong', 'Weak', 'Contradictory', 'Irrelevant'], 'Strong', 'The reason directly supports the action.'),
  Q('q284', 'statement-arguments', 'medium', 'Statement: "Should all college students be required to intern before graduating?" Argument: "No, some fields do not have enough internship opportunities for everyone." Strong or weak?', ['Strong', 'Weak', 'Irrelevant', 'Circular'], 'Strong', 'This raises a real, practical obstacle directly relevant to the policy.'),
  Q('q285', 'statement-arguments', 'medium', 'Statement: "Should the government increase the tax on junk food?" Argument: "No, because I do not like paying taxes." Strong or weak?', ['Strong', 'Weak', 'Relevant', 'Neutral'], 'Weak', 'This is a personal preference unrelated to the merits of the policy.'),
  Q('q286', 'statement-arguments', 'medium', 'Should a school cancel all exams because one student is absent? No, because one absence does not justify disrupting everyone.', ['Irrelevant', 'Weak', 'Circular', 'Strong'], 'Strong', 'The argument addresses proportionality.'),
  Q('q287', 'statement-arguments', 'medium', 'Should a city add buses on a crowded route? Yes, because additional capacity can reduce overcrowding.', ['Weak', 'Contradictory', 'Irrelevant', 'Strong'], 'Strong', 'It directly addresses the stated problem.'),
  Q('q288', 'statement-arguments', 'hard', 'Statement: "Should online exams replace offline exams permanently?" Argument: "Yes, because online exams are always cheaper to conduct." Strong or weak?', ['Strong', 'Weak', 'Relevant', 'Irrelevant'], 'Weak', 'Cost alone does not address integrity and fairness concerns central to the issue, and the claim overgeneralizes with "always."'),
  Q('q289', 'statement-arguments', 'hard', 'Should passwords be shared with colleagues to save time? No, because sharing credentials weakens accountability and security.', ['Strong', 'Unrelated', 'Irrelevant', 'Weak'], 'Strong', 'The reason is directly relevant to access control.'),
  Q('q290', 'statement-arguments', 'hard', 'Should a company ignore customer complaints? No, because complaints can reveal service problems.', ['Contradictory', 'Irrelevant', 'Strong', 'Weak'], 'Strong', 'The reason connects feedback to improvement.'),
  // ---------- Cause & Effect ----------
  Q('q291', 'cause-effect', 'easy', "I. The company's stock price fell sharply. II. The company reported lower than expected quarterly earnings. What is the relationship?", ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Same event described twice'], 'II is cause, I is effect', 'Poor earnings typically cause a decline in stock price.'),
  Q('q292', 'cause-effect', 'easy', 'Heavy rainfall causes urban flooding when drainage is inadequate. Heavy rain is the', ['Cause', 'Effect', 'Exception', 'Solution'], 'Cause', 'Rainfall is the initiating event.'),
  Q('q293', 'cause-effect', 'easy', 'A power outage causes a router to stop. The router stopping is the', ['Condition', 'Assumption', 'Effect', 'Cause'], 'Effect', 'It occurs as a result of the outage.'),
  Q('q294', 'cause-effect', 'medium', 'I. Heavy rains lashed the coastal city. II. Several low-lying areas were flooded. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Cannot be determined'], 'I is cause, II is effect', 'Heavy rain is a natural and direct cause of flooding in low-lying areas.'),
  Q('q295', 'cause-effect', 'medium', 'I. The school announced a surprise holiday. II. A prominent political leader passed away in the city. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Same cause for both'], 'II is cause, I is effect', 'The death of a prominent leader is a common cause for a sudden holiday announcement.'),
  Q('q296', 'cause-effect', 'medium', 'A student studies consistently and scores higher. Studying is the likely', ['Cause', 'Unrelated event', 'Effect', 'Result only'], 'Cause', 'The study behavior precedes and plausibly produces the result.'),
  Q('q297', 'cause-effect', 'medium', 'A server overload leads to slower response time. Slower response is the', ['Effect', 'Input', 'Trigger', 'Cause'], 'Effect', 'It follows the overload.'),
  Q('q298', 'cause-effect', 'hard', 'I. Sales of umbrellas increased sharply in June. II. The monsoon arrived early this year. What is the relationship?', ['I is cause, II is effect', 'II is cause, I is effect', 'Independent events', 'Both are effects of a third cause'], 'II is cause, I is effect', 'An early monsoon naturally leads to greater demand for umbrellas.'),
  Q('q299', 'cause-effect', 'hard', 'If a pipe is blocked, water flow decreases. The blockage is the', ['Measurement', 'Output', 'Effect', 'Cause'], 'Cause', 'The blockage produces reduced flow.'),
  Q('q300', 'cause-effect', 'hard', 'A battery is depleted, so the device shuts down. The shutdown is the', ['Effect', 'Input', 'Assumption', 'Cause'], 'Effect', 'It is a consequence of depletion.'),
  // ---------- Assertion & Reason ----------
  Q('q301', 'assertion-reason', 'easy', 'Assertion (A): Plants need sunlight to grow. Reason (R): Sunlight helps plants prepare food through photosynthesis. Choose the correct relation.', ['Both true, R explains A', 'Both true, R does not explain A', 'A true, R false', 'A false, R true'], 'Both true, R explains A', 'Photosynthesis, driven by sunlight, is the actual reason plants need light to grow.'),
  Q('q302', 'assertion-reason', 'easy', 'Assertion: Plants need sunlight. Reason: Sunlight supports photosynthesis.', ['Both false', 'Assertion true, reason false', 'Both true but unrelated', 'Both true and reason explains assertion'], 'Both true and reason explains assertion', 'Photosynthesis requires light energy.'),
  Q('q303', 'assertion-reason', 'easy', 'Assertion: Ice melts when heated. Reason: Heating increases its temperature toward its melting point.', ['Assertion false, reason true', 'Both false', 'Both true but unrelated', 'Both true and reason explains assertion'], 'Both true and reason explains assertion', 'Heating supplies energy causing melting.'),
  Q('q304', 'assertion-reason', 'medium', 'Assertion (A): Metals conduct electricity well. Reason (R): Metals have free electrons that can move through the material. Choose the correct relation.', ['Both true, R explains A', 'Both true, R does not explain A', 'A true, R false', 'A false, R true'], 'Both true, R explains A', 'Free electrons moving through the metal are exactly what allows electrical conduction.'),
  Q('q305', 'assertion-reason', 'medium', 'Assertion (A): Ice floats on water. Reason (R): Ice is denser than water. Choose the correct relation.', ['Both true, R explains A', 'A true, R false', 'A false, R true', 'Both false'], 'A true, R false', 'Ice actually floats because it is less dense than water, so the given reason is false.'),
  Q('q306', 'assertion-reason', 'medium', 'Assertion: TCP is connection-oriented. Reason: TCP establishes a connection before reliable data transfer.', ['Both false', 'Both true and reason explains assertion', 'Both true but unrelated', 'Assertion true, reason false'], 'Both true and reason explains assertion', 'The reason describes the connection-oriented behavior.'),
  Q('q307', 'assertion-reason', 'medium', 'Assertion: SQL can retrieve rows. Reason: SELECT is used to query data.', ['Both false', 'Both true but unrelated', 'Both true and reason explains assertion', 'Assertion false, reason true'], 'Both true and reason explains assertion', 'SELECT retrieves data.'),
  Q('q308', 'assertion-reason', 'hard', "Assertion (A): India has a large software services export industry. Reason (R): India has a low literacy rate. Choose the correct relation.", ['Both true, R explains A', 'A true, R false', 'A false, R true', 'Both false'], 'A true, R false', "India's software export strength stems from technical education and skilled talent, not from a low literacy rate, and the reason as stated is inaccurate."),
  Q('q309', 'assertion-reason', 'hard', 'Assertion: A stack follows FIFO. Reason: Queues follow FIFO.', ['Both false', 'Both true and reason explains assertion', 'Assertion false, reason true', 'Assertion true, reason false'], 'Assertion false, reason true', 'Stacks are LIFO, while queues are FIFO.'),
  Q('q310', 'assertion-reason', 'hard', 'Assertion: HTTP is an application-layer protocol. Reason: It is used for web communication.', ['Both true but unrelated', 'Assertion false, reason true', 'Both true and reason explains assertion', 'Both false'], 'Both true and reason explains assertion', 'HTTP operates at the application layer and supports web communication.'),
  // ---------- Course of Action ----------
  Q('q311', 'course-of-action', 'easy', 'Problem: "Absenteeism among factory workers has increased." Course of action: "The management should investigate the reasons for absenteeism." Does it follow?', ['Follows', 'Does not follow', 'Contradicts', 'Irrelevant'], 'Follows', 'Investigating the cause is a reasonable first step to addressing the problem.'),
  Q('q312', 'course-of-action', 'easy', 'Problem: Many employees miss a required deadline. Best action?', ['Cancel the work', 'Punish everyone immediately', 'Ignore the issue', 'Send reminders and clarify the deadline'], 'Send reminders and clarify the deadline', 'The action addresses the cause without being excessive.'),
  Q('q313', 'course-of-action', 'easy', 'Problem: A website has frequent outages. Best first action?', ['Delete the website', 'Ignore outages', 'Replace every computer', 'Review logs and identify the failure point'], 'Review logs and identify the failure point', 'Diagnosis should precede targeted remediation.'),
  Q('q314', 'course-of-action', 'medium', 'Problem: "There has been a spike in road accidents near a school." Course of action: "Traffic police should install speed breakers and signage near the school." Does it follow?', ['Follows', 'Does not follow', 'Contradicts', 'Irrelevant'], 'Follows', 'This is a direct, practical measure addressing the stated safety problem.'),
  Q('q315', 'course-of-action', 'medium', 'Problem: "The company\'s website has been experiencing frequent downtime." Course of action: "The company should immediately shut down the website permanently." Does it follow?', ['Follows', 'Does not follow', 'Partly follows', 'Cannot be determined'], 'Does not follow', 'This is an extreme response that does not solve the underlying downtime problem.'),
  Q('q316', 'course-of-action', 'medium', 'Problem: A classroom has repeated noise during tests. Best action?', ['Ignore it', 'Cancel all classes', 'Punish unrelated students', 'Set and enforce clear test rules'], 'Set and enforce clear test rules', 'Clear rules directly address the behavior.'),
  Q('q317', 'course-of-action', 'medium', 'Problem: A database is filling rapidly. Best action?', ['Measure storage growth and plan capacity', 'Shut down permanently', 'Ignore the alert', 'Delete random records'], 'Measure storage growth and plan capacity', 'Capacity planning should be evidence-based.'),
  Q('q318', 'course-of-action', 'hard', 'Problem: "A significant number of employees are resigning within their first year." Course of action I: "HR should conduct exit interviews to understand the reasons." Course of action II: "The company should stop hiring new employees altogether." Which follows?', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 'Only I follows', 'Exit interviews directly address understanding the problem, while halting all hiring is an extreme and unrelated measure.'),
  Q('q319', 'course-of-action', 'hard', 'Problem: Customers report the same login issue. Best action?', ['Close all accounts', 'Ignore complaints', 'Reproduce and investigate the common failure', 'Blame users'], 'Reproduce and investigate the common failure', 'Repeated reports justify technical investigation.'),
  Q('q320', 'course-of-action', 'hard', 'Problem: A process has one recurring bottleneck. Best action?', ['Stop the process forever', 'Do nothing', 'Measure the bottleneck and improve that step', 'Change every step blindly'], 'Measure the bottleneck and improve that step', 'Targeted improvement is practical.'),
  // ---------- Ranking & Ordering ----------
  Q('q321', 'ranking-ordering', 'easy', 'In a class of 40 students, Ravi ranks 15th from the top. What is his rank from the bottom?', ['24', '25', '26', '27'], '26', 'Rank from bottom = 40 - 15 + 1 = 26.'),
  Q('q322', 'ranking-ordering', 'easy', 'In a race, A finishes before B and B before C. Who finishes first?', ['Cannot tell', 'C', 'B', 'A'], 'A', 'A is before both B and C.'),
  Q('q323', 'ranking-ordering', 'easy', 'R is 7th from left in a row of 20. Position from right is', ['12th', '13th', '15th', '14th'], '14th', '20−7+1=14.'),
  Q('q324', 'ranking-ordering', 'medium', 'Four students scored differently in a test. Arjun scored more than Bala but less than Chetan. Deepa scored less than Bala. Who scored the least?', ['Arjun', 'Bala', 'Chetan', 'Deepa'], 'Deepa', 'The order is Chetan > Arjun > Bala > Deepa, so Deepa scored the least.'),
  Q('q325', 'ranking-ordering', 'medium', 'In a queue, Manoj is 7th from the front and 12th from the end. How many people are in the queue?', ['16', '17', '18', '19'], '18', 'Total = 7 + 12 - 1 = 18.'),
  Q('q326', 'ranking-ordering', 'medium', 'A is taller than B; B taller than C. Who is shortest?', ['A', 'C', 'Cannot tell', 'B'], 'C', 'C is below B and A in the ordering.'),
  Q('q327', 'ranking-ordering', 'medium', 'In a class, P ranks 5th from top and 16th from bottom. Total students are', ['19', '20', '22', '21'], '20', 'Total=5+16−1=20.'),
  Q('q328', 'ranking-ordering', 'hard', 'Among five friends, P is taller than Q but shorter than R. S is taller than R. T is shorter than Q. Who is the tallest and who is the shortest?', ['S tallest, T shortest', 'R tallest, T shortest', 'S tallest, Q shortest', 'P tallest, T shortest'], 'S tallest, T shortest', 'The order is S > R > P > Q > T.'),
  Q('q329', 'ranking-ordering', 'hard', 'If X ranks above Y and Y above Z, which statement must be true?', ['X and Z have equal rank', 'Z ranks above X', 'X ranks above Z', 'Y ranks below Z'], 'X ranks above Z', 'Ordering is transitive.'),
  Q('q330', 'ranking-ordering', 'hard', 'A is 3rd from left and B is 5th from right in a row of 12. Number between them is', ['3', '5', '6', '4'], '4', 'B is 8th from left; positions 4–7 are between.'),
  // ---------- Analogy ----------
  Q('q331', 'analogy', 'easy', 'Doctor : Hospital :: Teacher : ?', ['Clinic', 'School', 'Hospital', 'College'], 'School', 'A doctor works at a hospital just as a teacher works at a school.'),
  Q('q332', 'analogy', 'easy', 'Bird : Nest :: Bee : ?', ['Hive', 'Den', 'Stable', 'Kennel'], 'Hive', "A nest is a bird's dwelling; a hive is a bee's."),
  Q('q333', 'analogy', 'easy', 'Book : Read :: Food : ?', ['Plate', 'Cooker', 'Drink', 'Eat'], 'Eat', 'Reading is the usual action for a book; eating for food.'),
  Q('q334', 'analogy', 'medium', 'Pen : Write :: Knife : ?', ['Sharp', 'Cut', 'Kitchen', 'Blade'], 'Cut', 'A pen is used to write just as a knife is used to cut.'),
  Q('q335', 'analogy', 'medium', 'Bird : Nest :: Man : ?', ['Cave', 'House', 'Tree', 'Sky'], 'House', 'A bird lives in a nest just as a man lives in a house.'),
  Q('q336', 'analogy', 'medium', 'Doctor : Hospital :: Teacher : ?', ['Bank', 'Factory', 'Court', 'School'], 'School', 'A teacher commonly works in a school.'),
  Q('q337', 'analogy', 'medium', 'Puppy : Dog :: Calf : ?', ['Goat', 'Horse', 'Cow', 'Sheep'], 'Cow', 'A calf is a young cow.'),
  Q('q338', 'analogy', 'hard', 'Ornithologist : Birds :: Entomologist : ?', ['Fish', 'Insects', 'Reptiles', 'Plants'], 'Insects', 'An ornithologist studies birds just as an entomologist studies insects.'),
  Q('q339', 'analogy', 'hard', 'Keyboard : Typing :: Brush : ?', ['Walking', 'Painting', 'Counting', 'Driving'], 'Painting', 'A keyboard is used for typing; a brush for painting.'),
  Q('q340', 'analogy', 'hard', 'Seed : Plant :: Egg : ?', ['Stone', 'Bird', 'Tree', 'Water'], 'Bird', 'An egg can develop into a bird, analogous to seed into plant.'),
  // ---------- Classification / Odd One Out ----------
  Q('q341', 'classification', 'easy', 'Find the odd one out: Apple, Mango, Potato, Banana', ['Apple', 'Mango', 'Potato', 'Banana'], 'Potato', 'Potato is a vegetable, while the others are fruits.'),
  Q('q342', 'classification', 'easy', 'Find the odd one out: Apple, Mango, Banana, Carrot', ['Banana', 'Carrot', 'Apple', 'Mango'], 'Carrot', 'Carrot is a vegetable; the others are fruits.'),
  Q('q343', 'classification', 'easy', 'Find the odd one out: 2, 3, 5, 9', ['2', '5', '9', '3'], '9', '2,3,5 are prime; 9 is not.'),
  Q('q344', 'classification', 'medium', 'Find the odd one out: 8, 27, 64, 100', ['8', '27', '64', '100'], '100', '8, 27 and 64 are perfect cubes (2^3, 3^3, 4^3), but 100 is not.'),
  Q('q345', 'classification', 'medium', 'Find the odd one out: Triangle, Square, Circle, Cube', ['Triangle', 'Square', 'Circle', 'Cube'], 'Cube', 'Cube is a three-dimensional shape, while the others are two-dimensional.'),
  Q('q346', 'classification', 'medium', 'Find the odd one out: Square, Triangle, Circle, Cube', ['Circle', 'Triangle', 'Square', 'Cube'], 'Cube', 'Cube is three-dimensional.'),
  Q('q347', 'classification', 'medium', 'Find the odd one out: TCP, UDP, HTTP, JPEG', ['UDP', 'TCP', 'HTTP', 'JPEG'], 'JPEG', 'JPEG is an image format; the others are network protocols.'),
  Q('q348', 'classification', 'hard', 'Find the odd one out: Delhi, Mumbai, Chennai, Sikkim', ['Delhi', 'Mumbai', 'Chennai', 'Sikkim'], 'Sikkim', 'Sikkim is a state, while the others are cities.'),
  Q('q349', 'classification', 'hard', 'Find the odd one out: 16, 25, 36, 48', ['16', '25', '48', '36'], '48', '16,25,36 are perfect squares.'),
  Q('q350', 'classification', 'hard', 'Find the odd one out: Monday, Tuesday, March, Friday', ['Monday', 'Friday', 'March', 'Tuesday'], 'March', 'March is a month; the others are weekdays.'),
  // ---------- Venn Diagrams ----------
  Q('q351', 'venn-diagrams', 'easy', 'Which diagram best represents the relationship: "Doctors, Men, Indians"?', ['Three intersecting circles', 'Three separate circles', 'One circle fully inside another', 'Two circles intersecting, one separate'], 'Three intersecting circles', 'Each group can overlap with the other two without being identical, so three intersecting circles fit best.'),
  Q('q352', 'venn-diagrams', 'easy', 'If A is a subset of B, every member of A is', ['Only outside A', 'Also in B', 'Outside B', 'In neither'], 'Also in B', 'Subset means A is contained in B.'),
  Q('q353', 'venn-diagrams', 'easy', 'If two sets are disjoint, their intersection contains', ['All elements', 'Their union', 'No elements', 'One element'], 'No elements', 'Disjoint sets have empty intersection.'),
  Q('q354', 'venn-diagrams', 'medium', 'Which diagram best represents "Fruits, Apples, Red things"?', ['Apples circle fully inside Fruits circle, both overlapping Red things circle', 'Three separate circles', 'One large circle containing the other two fully', 'Apples and Red things fully overlapping, Fruits separate'], 'Apples circle fully inside Fruits circle, both overlapping Red things circle', 'Every apple is a fruit, but only some fruits and some apples are red.'),
  Q('q355', 'venn-diagrams', 'medium', 'Which diagram best represents "Vehicles, Cars, Buses"?', ['Cars and Buses are separate circles, both inside Vehicles', 'Cars fully inside Buses', 'One combined circle for all three', 'Buses inside Cars, both inside Vehicles'], 'Cars and Buses are separate circles, both inside Vehicles', 'Cars and buses are both vehicles but are distinct, non-overlapping categories.'),
  Q('q356', 'venn-diagrams', 'medium', 'A∩B represents elements', ['In A only', 'In B only', 'Common to A and B', 'Outside both'], 'Common to A and B', 'Intersection contains common elements.'),
  Q('q357', 'venn-diagrams', 'medium', 'A∪B represents elements', ['Only in B', 'In A or B or both', 'Only in A', 'In neither'], 'In A or B or both', 'Union combines both sets.'),
  Q('q358', 'venn-diagrams', 'hard', 'Which diagram best represents "Squares, Rectangles, Rhombuses"?', ['Squares circle at the intersection of Rectangles and Rhombuses', 'Three separate circles', 'Rectangles fully inside Rhombuses', 'Squares circle containing both Rectangles and Rhombuses'], 'Squares circle at the intersection of Rectangles and Rhombuses', 'A square is both a rectangle and a rhombus, placing it at the overlap of the two circles.'),
  Q('q359', 'venn-diagrams', 'hard', 'If |A|=20, |B|=15 and |A∩B|=5, |A∪B| is', ['40', '25', '35', '30'], '30', '|A∪B|=20+15−5=30.'),
  Q('q360', 'venn-diagrams', 'hard', 'If all programmers are employees, programmers are a', ['Subset of employees', 'Complement of employees', 'Superset of employees', 'Disjoint from employees'], 'Subset of employees', 'Every programmer belongs to the employee set.'),
  // ---------- Calendar ----------
  Q('q361', 'calendar', 'easy', 'If today is Monday, what day will it be after 15 days?', ['Sunday', 'Monday', 'Tuesday', 'Wednesday'], 'Tuesday', '15 mod 7 = 1, so the day advances by 1 from Monday to Tuesday.'),
  Q('q362', 'calendar', 'easy', 'How many days are in a leap year?', ['366', '364', '367', '365'], '366', 'A leap year has one extra day in February.'),
  Q('q363', 'calendar', 'easy', 'How many days are in a non-leap year?', ['360', '364', '365', '366'], '365', 'A normal year has 365 days.'),
  Q('q364', 'calendar', 'medium', 'If 1st January 2024 was a Monday, what day was 1st January 2025? (2024 has 366 days.)', ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'Wednesday', '366 mod 7 = 2, so the day advances by 2 from Monday to Wednesday.'),
  Q('q365', 'calendar', 'medium', 'What was the day of the week on 15th August 1947?', ['Thursday', 'Friday', 'Saturday', 'Sunday'], 'Friday', 'This is a well-known historical fact: India\'s Independence Day in 1947 fell on a Friday.'),
  Q('q366', 'calendar', 'medium', 'A leap year is generally divisible by', ['3', '5', '7', '4'], '4', 'Years divisible by 4 are leap years except century exceptions.'),
  Q('q367', 'calendar', 'medium', 'Which century year is a leap year?', ['2000', '2100', '1800', '1900'], '2000', 'Century years must be divisible by 400; 2000 is.'),
  Q('q368', 'calendar', 'hard', 'If the first day of a 30-day month is Friday, what is the last day of that month?', ['Saturday', 'Sunday', 'Monday', 'Friday'], 'Saturday', 'From day 1 to day 30 is 29 days later. 29 mod 7 = 1, so the last day is one day after Friday, which is Saturday.'),
  Q('q369', 'calendar', 'hard', 'If today is Monday, the day after 14 days is', ['Monday', 'Tuesday', 'Sunday', 'Wednesday'], 'Monday', '14 days is exactly two weeks.'),
  Q('q370', 'calendar', 'hard', 'A week has how many days?', ['7', '6', '5', '8'], '7', 'The calendar week contains seven days.'),
  // ---------- Clocks ----------
  Q('q371', 'clocks', 'easy', 'At approximately what time between 3 and 4 o\'clock will the hands of a clock be together?', ['3:15', '3:16 (approx)', '3:20', '3:12'], '3:16 (approx)', 'Using the standard formula, the hands coincide at about 3 hours 16 4/11 minutes.'),
  Q('q372', 'clocks', 'easy', 'A clock face has how many degrees?', ['720°', '360°', '270°', '180°'], '360°', 'A full circle is 360 degrees.'),
  Q('q373', 'clocks', 'easy', 'The minute hand moves how many degrees per minute?', ['6°', '10°', '12°', '5°'], '6°', '360°/60=6° per minute.'),
  Q('q374', 'clocks', 'medium', 'What is the angle between the hour and minute hands at 4:00?', ['90 degrees', '100 degrees', '110 degrees', '120 degrees'], '120 degrees', 'At 4:00 the hour hand is at the 4 mark, which is 120 degrees from 12, where the minute hand rests.'),
  Q('q375', 'clocks', 'medium', 'How many times do the hands of a clock coincide in a full day (24 hours)?', ['20', '22', '24', '44'], '22', 'The hands coincide 22 times in a 24-hour period.'),
  Q('q376', 'clocks', 'medium', 'The hour hand moves how many degrees per hour?', ['15°', '60°', '30°', '6°'], '30°', '360°/12=30° per hour.'),
  Q('q377', 'clocks', 'medium', 'At 3:00, the angle between hands is', ['180°', '60°', '90°', '0°'], '90°', 'The minute hand is at 12 and hour hand at 3.'),
  Q('q378', 'clocks', 'hard', 'At approximately what time between 8 and 9 o\'clock will the minute and hour hands of a clock first be at right angles?', ['8:10 10/11 minutes', '8:16 4/11 minutes', '8:21 9/11 minutes', '8:27 3/11 minutes'], '8:10 10/11 minutes', 'Using the standard right-angle formula for clock hands, the first right angle after 8:00 occurs at about 8 hours 10 10/11 minutes.'),
  Q('q379', 'clocks', 'hard', 'At 6:00, the angle between hands is', ['180°', '120°', '270°', '90°'], '180°', 'The hands are opposite.'),
  Q('q380', 'clocks', 'hard', 'How many times do clock hands approximately overlap in 12 hours?', ['11', '13', '12', '10'], '11', 'They coincide 11 times in a 12-hour cycle.'),
  // ---------- Non-Verbal / Abstract Reasoning ----------
  Q('q381', 'non-verbal-reasoning', 'easy', 'A square is rotated 90 degrees clockwise. What was originally the top side is now on which side?', ['Left', 'Right', 'Bottom', 'Top'], 'Right', 'A 90-degree clockwise rotation moves the top side to the right.'),
  Q('q382', 'non-verbal-reasoning', 'easy', 'A shape rotated 90° clockwise turns its top side toward the', ['Right', 'Same direction', 'Bottom', 'Left'], 'Right', 'Clockwise rotation moves the top toward the right.'),
  Q('q383', 'non-verbal-reasoning', 'easy', 'A mirror image reverses', ['Up and down only', 'Left and right', 'Color only', 'Size only'], 'Left and right', 'A vertical mirror reverses horizontal orientation.'),
  Q('q384', 'non-verbal-reasoning', 'medium', 'In a sequence of figures, the number of sides increases by one each time: triangle, square, pentagon, ? What comes next?', ['Hexagon', 'Heptagon', 'Octagon', 'Circle'], 'Hexagon', 'Following the pattern of 3, 4, 5 sides, the next figure has 6 sides: a hexagon.'),
  Q('q385', 'non-verbal-reasoning', 'medium', "A dot moves one position clockwise around a square's corners each step, starting at the top-left corner. Where is it after 3 steps?", ['Top-right', 'Bottom-right', 'Bottom-left', 'Top-left'], 'Bottom-left', 'Moving clockwise: top-left to top-right (1), to bottom-right (2), to bottom-left (3).'),
  Q('q386', 'non-verbal-reasoning', 'medium', 'If a pattern repeats every 3 shapes, the 10th shape matches position', ['3', '2', '4', '1'], '1', '10 mod 3=1.'),
  Q('q387', 'non-verbal-reasoning', 'medium', 'A square rotated 90° remains', ['A square', 'A circle', 'A rectangle only', 'A triangle'], 'A square', 'Rotation changes orientation, not its basic square shape.'),
  Q('q388', 'non-verbal-reasoning', 'hard', "A cube's faces are numbered 1 to 6 such that opposite faces always sum to 7. If face 2 is on top, which face is at the bottom?", ['3', '4', '5', '6'], '5', 'Since opposite faces sum to 7, the face opposite 2 is 5.'),
  Q('q389', 'non-verbal-reasoning', 'hard', 'If an arrow points north and is rotated 180°, it points', ['North', 'South', 'West', 'East'], 'South', 'A half-turn reverses direction.'),
  Q('q390', 'non-verbal-reasoning', 'hard', 'A figure with vertical symmetry has matching halves across its', ['Diagonal only', 'Horizontal axis only', 'Vertical axis', 'Center point only'], 'Vertical axis', 'Vertical symmetry mirrors across a vertical line.'),
  // ---------- Synonyms & Antonyms ----------
  Q('q391', 'synonyms-antonyms', 'easy', 'Choose the word closest in meaning to "Abundant":', ['Scarce', 'Plentiful', 'Empty', 'Rare'], 'Plentiful', 'Abundant means existing in large quantities, similar to plentiful.'),
  Q('q392', 'synonyms-antonyms', 'easy', "Synonym of 'rapid' is", ['Slow', 'Late', 'Weak', 'Fast'], 'Fast', 'Rapid means fast.'),
  Q('q393', 'synonyms-antonyms', 'easy', "Antonym of 'ancient' is", ['Old', 'Former', 'Modern', 'Historic'], 'Modern', 'Modern is opposite in meaning to ancient.'),
  Q('q394', 'synonyms-antonyms', 'medium', 'Choose the antonym of "Benevolent":', ['Kind', 'Generous', 'Malevolent', 'Charitable'], 'Malevolent', 'Benevolent means kind and well-meaning; its opposite is malevolent.'),
  Q('q395', 'synonyms-antonyms', 'medium', 'Choose the word closest in meaning to "Meticulous":', ['Careless', 'Careful', 'Hasty', 'Vague'], 'Careful', 'Meticulous means showing great attention to detail, close to careful.'),
  Q('q396', 'synonyms-antonyms', 'medium', "Synonym of 'assist' is", ['Ignore', 'Avoid', 'Help', 'Hinder'], 'Help', 'Assist means help.'),
  Q('q397', 'synonyms-antonyms', 'medium', "Antonym of 'expand' is", ['Extend', 'Contract', 'Increase', 'Enlarge'], 'Contract', 'Contract means become smaller.'),
  Q('q398', 'synonyms-antonyms', 'hard', 'Choose the antonym of "Ephemeral":', ['Fleeting', 'Permanent', 'Brief', 'Transient'], 'Permanent', 'Ephemeral means lasting for a very short time; its opposite is permanent.'),
  Q('q399', 'synonyms-antonyms', 'hard', "Synonym of 'precise' is", ['Vague', 'Exact', 'Approximate', 'Random'], 'Exact', 'Precise means exact.'),
  Q('q400', 'synonyms-antonyms', 'hard', "Antonym of 'scarce' is", ['Rare', 'Insufficient', 'Abundant', 'Limited'], 'Abundant', 'Abundant means plentiful.'),
  // ---------- Vocabulary ----------
  Q('q401', 'vocabulary', 'easy', 'Choose the word closest in meaning to "Candid":', ['Frank', 'Secretive', 'Confused', 'Rude'], 'Frank', 'Candid means truthful and straightforward, similar to frank.'),
  Q('q402', 'vocabulary', 'easy', "In 'The manager was reluctant to approve it', reluctant means", ['Certain', 'Unwilling', 'Unable', 'Eager'], 'Unwilling', 'Reluctant means hesitant or unwilling.'),
  Q('q403', 'vocabulary', 'easy', "In 'The evidence was compelling', compelling means", ['Convincing', 'Weak', 'Optional', 'Confusing'], 'Convincing', 'Compelling evidence is convincing.'),
  Q('q404', 'vocabulary', 'medium', 'What does "Ubiquitous" mean?', ['Rare', 'Present everywhere', 'Ancient', 'Unclear'], 'Present everywhere', 'Ubiquitous means found everywhere.'),
  Q('q405', 'vocabulary', 'medium', 'What is a "Pragmatic" approach?', ['Practical', 'Idealistic', 'Emotional', 'Theoretical'], 'Practical', 'Pragmatic means dealing with things sensibly and practically.'),
  Q('q406', 'vocabulary', 'medium', "A person who is 'meticulous' is", ['Impatient', 'Careless', 'Noisy', 'Very careful'], 'Very careful', 'Meticulous means extremely careful about details.'),
  Q('q407', 'vocabulary', 'medium', "If a plan is 'feasible', it is", ['Practical to do', 'Impossible', 'Already finished', 'Illegal'], 'Practical to do', 'Feasible means possible and practical.'),
  Q('q408', 'vocabulary', 'hard', 'What does "Ostensible" mean?', ['Genuine', 'Apparent', 'Hidden', 'Confirmed'], 'Apparent', 'Ostensible means appearing to be true, though not necessarily so.'),
  Q('q409', 'vocabulary', 'hard', "To 'mitigate' a problem means to", ['Create it', 'Ignore it', 'Increase it', 'Reduce its severity'], 'Reduce its severity', 'Mitigate means lessen or reduce.'),
  Q('q410', 'vocabulary', 'hard', "If a result is 'ambiguous', it is", ['Numerical', 'Open to more than one interpretation', 'Certain', 'Obvious'], 'Open to more than one interpretation', 'Ambiguous information permits multiple interpretations.'),
  // ---------- Grammar ----------
  Q('q411', 'grammar', 'easy', 'Choose the correct sentence.', ['He don\'t like tea.', 'He doesn\'t like tea.', 'He not like tea.', 'He no like tea.'], 'He doesn\'t like tea.', 'The correct third-person singular negative form uses "doesn\'t".'),
  Q('q412', 'grammar', 'easy', 'Choose the correct sentence.', ['She has complete the work.', 'She has completed the work.', 'She have completed the work.', 'She having completed the work.'], 'She has completed the work.', 'Singular subject she takes has; completed is the past participle.'),
  Q('q413', 'grammar', 'easy', 'Choose the correct form: Neither of the answers ___ correct.', ['are', 'were', 'is', 'be'], 'is', 'Neither is singular in standard formal usage.'),
  Q('q414', 'grammar', 'medium', 'Choose the correct tense: "By the time she arrived, we ___ dinner."', ['finish', 'had finished', 'finished', 'have finished'], 'had finished', 'The past perfect tense is used for an action completed before another past action.'),
  Q('q415', 'grammar', 'medium', 'Choose the correct sentence.', ['Neither of the boys were present.', 'Neither of the boys was present.', 'Neither of the boys are present.', 'Neither of the boy was present.'], 'Neither of the boys was present.', '"Neither" is singular and takes a singular verb, "was".'),
  Q('q416', 'grammar', 'medium', 'Choose the correct article: He is ___ honest employee.', ['a', 'the', 'an', 'no article'], 'an', "Honest begins with a vowel sound, so 'an' is used."),
  Q('q417', 'grammar', 'medium', 'Choose the correct preposition: She is good ___ mathematics.', ['at', 'on', 'in', 'for'], 'at', "The standard expression is 'good at'."),
  Q('q418', 'grammar', 'hard', 'Choose the sentence with correct subject-verb agreement.', ['The list of items are on the desk.', 'The list of items is on the desk.', 'The list of item is on the desk.', 'The lists of items is on the desk.'], 'The list of items is on the desk.', 'The subject is "list" (singular), so the verb must be "is".'),
  Q('q419', 'grammar', 'hard', 'Choose the parallel form: He likes reading, writing and ___.', ['to code', 'coded', 'coding', 'code'], 'coding', 'The list uses gerunds: reading, writing, coding.'),
  Q('q420', 'grammar', 'hard', 'Choose the correct sentence.', ['The team members have submitted their reports.', 'The team members submitting their reports.', 'The team members have submit their reports.', 'The team members has submitted their reports.'], 'The team members have submitted their reports.', 'Plural subject members takes have; submitted is the correct participle.'),
  // ---------- Error Spotting ----------
  Q('q421', 'error-spotting', 'easy', 'Find the part with an error: "She / go to office / every day."', ['She', 'go to office', 'every day', 'No error'], 'go to office', '"Go" should be "goes" to agree with the singular subject "She".'),
  Q('q422', 'error-spotting', 'easy', "Identify the error: 'He do not like coffee.'", ['coffee', 'do', 'He', 'not'], 'do', "With singular he, 'does' is required."),
  Q('q423', 'error-spotting', 'easy', "Identify the error: 'She is senior than me.'", ['than', 'She', 'me', 'is'], 'than', "The standard construction is 'senior to me'."),
  Q('q424', 'error-spotting', 'medium', 'Find the part with an error: "Each of the students / have submitted / their assignment."', ['Each of the students', 'have submitted', 'their assignment', 'No error'], 'have submitted', '"Each" is singular, so the verb should be "has submitted".'),
  Q('q425', 'error-spotting', 'medium', 'Find the part with an error: "He is one of the / best player / in the team."', ['He is one of the', 'best player', 'in the team', 'No error'], 'best player', 'It should be "best players" since it refers to one among many players.'),
  Q('q426', 'error-spotting', 'medium', "Identify the error: 'Each of the boys have a ticket.'", ['boys', 'Each', 'ticket', 'have'], 'have', "Each is singular, so 'has' is required."),
  Q('q427', 'error-spotting', 'medium', "Identify the error: 'I have seen him yesterday.'", ['have seen', 'him', 'yesterday', 'I'], 'have seen', "A finished past-time marker 'yesterday' normally takes simple past: saw."),
  Q('q428', 'error-spotting', 'hard', 'Find the part with an error: "Despite of / his hard work, / he could not succeed."', ['Despite of', 'his hard work,', 'he could not succeed.', 'No error'], 'Despite of', '"Despite" should not be followed by "of"; the correct usage is simply "Despite".'),
  Q('q429', 'error-spotting', 'hard', "Identify the error: 'The news are encouraging.'", ['are', 'encouraging', 'The', 'news'], 'are', "'News' is treated as singular: the news is."),
  Q('q430', 'error-spotting', 'hard', "Identify the error: 'She discussed about the issue.'", ['issue', 'She', 'discussed', 'about'], 'about', "'Discuss' takes its object directly without 'about'."),
  // ---------- Sentence Correction ----------
  Q('q431', 'sentence-correction', 'easy', 'Choose the correctly written sentence.', ['Me and him went to the market.', 'He and I went to the market.', 'Him and me went to market.', 'I and he went market.'], 'He and I went to the market.', 'Subject pronouns "He" and "I" are correctly used together.'),
  Q('q432', 'sentence-correction', 'easy', 'Choose the correct sentence.', ['He was been working here for two years.', 'He has been working here for two years.', 'He is working here since two years.', 'He has working here for two years.'], 'He has been working here for two years.', 'Present perfect continuous correctly expresses an action continuing over a duration.'),
  Q('q433', 'sentence-correction', 'easy', 'Choose the correct sentence.', ['I prefer tea than coffee.', 'I prefer tea to coffee.', 'I prefer tea over than coffee.', 'I am prefer tea to coffee.'], 'I prefer tea to coffee.', "The standard construction is 'prefer X to Y'."),
  Q('q434', 'sentence-correction', 'medium', 'Choose the correctly written sentence.', ['She is married with a doctor.', 'She is married to a doctor.', 'She is married by a doctor.', 'She married with a doctor.'], 'She is married to a doctor.', 'The correct preposition following "married" is "to".'),
  Q('q435', 'sentence-correction', 'medium', 'Choose the correctly written sentence.', ['I have been knowing him for ten years.', 'I have known him for ten years.', 'I am knowing him for ten years.', 'I know him since ten years.'], 'I have known him for ten years.', '"Know" is a stative verb and is not typically used in continuous forms.'),
  Q('q436', 'sentence-correction', 'medium', 'Choose the correct sentence.', ['She are one of the best students in the class.', 'She is one of best students in class.', 'She is one of the best student in the class.', 'She is one of the best students in the class.'], 'She is one of the best students in the class.', "After 'one of the', a plural noun is used."),
  Q('q437', 'sentence-correction', 'medium', 'Choose the correct sentence.', ['If I were you, I would accept the offer.', 'If I am you, I would accept the offer.', 'If I was you, I will accept the offer.', 'If I were you, I will accepted the offer.'], 'If I were you, I would accept the offer.', "The hypothetical condition uses 'were' and 'would'."),
  Q('q438', 'sentence-correction', 'hard', 'Choose the correctly written sentence.', ['Not only he is intelligent but also hardworking.', 'Not only is he intelligent but also hardworking.', 'He is not only intelligent but hardworking also.', 'Not only is he intelligent but also he is hardworking.'], 'Not only is he intelligent but also hardworking.', '"Not only" at the start of a clause requires inverted subject-verb order.'),
  Q('q439', 'sentence-correction', 'hard', 'Choose the correct sentence.', ['The report must be submit by Friday.', 'The report must submitted by Friday.', 'The report must be submitted by Friday.', 'The report must be submitting by Friday.'], 'The report must be submitted by Friday.', 'A modal passive uses must + be + past participle.'),
  Q('q440', 'sentence-correction', 'hard', 'Choose the correct sentence.', ['Despite of the rain, the match continued.', 'Despite the rain, but the match continued.', 'Despite raining, but match continued.', 'Despite the rain, the match continued.'], 'Despite the rain, the match continued.', 'Despite is followed directly by a noun phrase.'),
  // ---------- Fill in the Blanks ----------
  Q('q441', 'fill-blanks', 'easy', 'The train ___ at 9 o\'clock every morning.', ['leave', 'leaves', 'leaving', 'left'], 'leaves', 'The subject "train" is singular and the sentence describes a routine, requiring the simple present "leaves".'),
  Q('q442', 'fill-blanks', 'easy', 'The manager asked us to ___ the deadline.', ['take', 'make', 'do', 'meet'], 'meet', "'Meet a deadline' is the standard collocation."),
  Q('q443', 'fill-blanks', 'easy', 'The results were ___ than expected.', ['best', 'good', 'well', 'better'], 'better', "The comparative form 'better' fits 'than'."),
  Q('q444', 'fill-blanks', 'medium', 'She has been working here ___ 2015.', ['for', 'since', 'from', 'by'], 'since', '"Since" is used with a specific point in time.'),
  Q('q445', 'fill-blanks', 'medium', 'He is good ___ mathematics.', ['in', 'at', 'on', 'with'], 'at', 'The correct idiomatic preposition is "good at".'),
  Q('q446', 'fill-blanks', 'medium', 'Please ___ attention to the instructions.', ['make', 'pay', 'take', 'do'], 'pay', "'Pay attention' is the standard expression."),
  Q('q447', 'fill-blanks', 'medium', 'The meeting was postponed ___ Monday.', ['until', 'at', 'from', 'by'], 'until', "'Postponed until Monday' indicates the new time."),
  Q('q448', 'fill-blanks', 'hard', 'The manager insisted ___ the report before the deadline.', ['on completing', 'to complete', 'completing', 'for completing'], 'on completing', '"Insist on" is followed by a gerund.'),
  Q('q449', 'fill-blanks', 'hard', 'The engineer is responsible ___ testing the system.', ['for', 'with', 'to', 'at'], 'for', "'Responsible for' is the correct preposition."),
  Q('q450', 'fill-blanks', 'hard', 'The proposal was rejected because it was not financially ___.', ['viable', 'visible', 'audible', 'portable'], 'viable', 'Viable means capable of succeeding or working economically.'),
  // ---------- Sentence Completion ----------
  Q('q451', 'sentence-completion', 'easy', 'Complete: "Although he was tired, he ___ finished the project."', ['still', 'also', 'never', 'ever'], 'still', '"Still" fits the contrast introduced by "Although".'),
  Q('q452', 'sentence-completion', 'easy', 'Although the task was difficult, the team ___.', ['cancelled the deadline', 'made it more difficult', 'completed it on time', 'ignored it completely'], 'completed it on time', 'The contrast introduced by although is logically completed by a successful outcome.'),
  Q('q453', 'sentence-completion', 'easy', 'Because the server was overloaded, ___.', ['the network became a keyboard', 'response time increased', 'the database was deleted', 'the load disappeared'], 'response time increased', 'Overload plausibly causes slower responses.'),
  Q('q454', 'sentence-completion', 'medium', 'Complete: "The company decided to expand its operations ___ increasing competition."', ['because', 'despite', 'so that', 'unless'], 'despite', '"Despite" correctly introduces a contrasting circumstance.'),
  Q('q455', 'sentence-completion', 'medium', 'Complete: "___ she studied hard, she failed the exam."', ['Because', 'Although', 'Since', 'So'], 'Although', 'The sentence expresses a contrast between studying hard and failing, which "Although" conveys.'),
  Q('q456', 'sentence-completion', 'medium', 'If you practice regularly, ___.', ['time stops', 'your performance is likely to improve', 'skills disappear', 'practice becomes impossible'], 'your performance is likely to improve', 'Regular practice generally improves performance.'),
  Q('q457', 'sentence-completion', 'medium', 'The report was concise, yet ___.', ['it was never written', 'it contradicted every fact', 'it had no words', 'it contained all key findings'], 'it contained all key findings', 'Concise can still contain essential information.'),
  Q('q458', 'sentence-completion', 'hard', 'Complete: "The project was delayed, ___ resulted in additional costs."', ['that', 'which', 'who', 'what'], 'which', '"Which" correctly introduces a non-restrictive clause referring to the whole preceding idea.'),
  Q('q459', 'sentence-completion', 'hard', 'Since the road was blocked, ___.', ['we took another route', 'the road became longer instantly', 'we drove through the barrier', 'we stopped the traffic light'], 'we took another route', 'An alternative route is a logical response.'),
  Q('q460', 'sentence-completion', 'hard', 'The candidate prepared well; therefore, ___.', ['she forgot the topic', 'the exam was cancelled', 'preparation became irrelevant', 'she performed confidently'], 'she performed confidently', 'Therefore calls for a consequence of preparation.'),
  // ---------- Para Jumbles ----------
  Q('q461', 'para-jumbles', 'easy', 'Arrange in a meaningful order: P) He opened the door. Q) He heard a knock. R) He was surprised to see his friend. S) He walked to the door.', ['QSPR', 'PQSR', 'QPSR', 'SPQR'], 'QSPR', 'The logical sequence is: hearing the knock, walking to the door, opening it, then being surprised.'),
  Q('q462', 'para-jumbles', 'easy', 'Arrange logically: P. The alarm rang. Q. Everyone left the building. R. A fire drill began. S. The supervisor announced it.', ['P-S-Q-R', 'S-R-P-Q', 'R-Q-S-P', 'Q-P-S-R'], 'S-R-P-Q', 'The announcement leads to the drill, then the alarm, then evacuation.'),
  Q('q463', 'para-jumbles', 'easy', 'Arrange: P. He opened the laptop. Q. He submitted the form. R. He filled in the details. S. He connected to the portal.', ['P-S-R-Q', 'Q-R-S-P', 'R-S-P-Q', 'S-P-Q-R'], 'P-S-R-Q', 'Opening the laptop precedes connecting, filling, and submitting.'),
  Q('q464', 'para-jumbles', 'medium', 'Arrange in a meaningful order: P) then submitted his resignation letter. Q) After much thought, R) he decided to leave the company S) and', ['QRSP', 'PQRS', 'RQSP', 'QSRP'], 'QRSP', 'The sentence reads: "After much thought, he decided to leave the company and then submitted his resignation letter."'),
  Q('q465', 'para-jumbles', 'medium', 'Arrange in a meaningful order: P) The results were declared. Q) Students had appeared for the exam. R) A month later. S) Everyone was anxious.', ['QSRP', 'PQRS', 'QRSP', 'SQRP'], 'QSRP', 'The events flow as: students appeared for the exam, everyone was anxious, a month later, the results were declared.'),
  Q('q466', 'para-jumbles', 'medium', 'Arrange: P. The seed was planted. Q. It was watered regularly. R. A shoot appeared. S. The plant grew taller.', ['R-Q-P-S', 'Q-P-S-R', 'P-Q-R-S', 'S-R-Q-P'], 'P-Q-R-S', 'Planting precedes watering, sprouting, and growth.'),
  Q('q467', 'para-jumbles', 'medium', 'Arrange: P. The data was collected. Q. The results were analyzed. R. A conclusion was written. S. The report was published.', ['S-R-Q-P', 'R-Q-P-S', 'P-Q-R-S', 'Q-P-R-S'], 'P-Q-R-S', 'Collection precedes analysis, conclusion, and publication.'),
  Q('q468', 'para-jumbles', 'hard', 'Arrange in a meaningful order: P) despite the heavy rain. Q) The match continued R) because the ground had good drainage S) which surprised the spectators.', ['QPSR', 'QPRS', 'PQSR', 'QSPR'], 'QPSR', 'The sentence reads: "The match continued despite the heavy rain, which surprised the spectators, because the ground had good drainage."'),
  Q('q469', 'para-jumbles', 'hard', 'Arrange: P. The invitation was sent. Q. Guests arrived. R. The venue was decorated. S. The event started.', ['P-R-Q-S', 'R-P-S-Q', 'S-Q-R-P', 'Q-P-R-S'], 'P-R-Q-S', 'Invitation and preparation occur before arrival and the event.'),
  Q('q470', 'para-jumbles', 'hard', 'Arrange: P. The problem was identified. Q. A solution was proposed. R. The solution was tested. S. The issue was resolved.', ['S-R-Q-P', 'Q-P-S-R', 'P-Q-R-S', 'R-Q-P-S'], 'P-Q-R-S', 'Identification precedes proposal, testing, and resolution.'),
  // ---------- Reading Comprehension ----------
  Q('q471', 'reading-comprehension', 'easy', 'Passage: "The IT industry in India has grown rapidly over the last two decades, becoming one of the largest employers of engineering graduates." What does the passage mainly discuss?', ['Decline of the IT industry', 'Growth of the IT industry in India', 'Engineering colleges', 'Government policies'], 'Growth of the IT industry in India', 'The passage focuses specifically on the rapid growth of the IT industry and its employment impact.'),
  Q('q472', 'reading-comprehension', 'easy', "Passage: 'A startup reduced meeting time by using written updates. Employees reported fewer interruptions.' What change was made?", ['Employees stopped working', 'Interruptions increased', 'Written updates replaced some meetings', 'More meetings were added'], 'Written updates replaced some meetings', 'The passage explicitly states the use of written updates to reduce meeting time.'),
  Q('q473', 'reading-comprehension', 'easy', "Passage: 'The library extended its hours during exams. Usage increased most in the evening.' When was usage highest?", ['During holidays', 'In the evening', 'At noon', 'Early morning'], 'In the evening', 'The passage directly identifies evening as the period of greatest increase.'),
  Q('q474', 'reading-comprehension', 'medium', 'Passage: "Remote work became widespread during the pandemic, and many companies later adopted hybrid models combining office and home work." What model did many companies adopt after the pandemic?', ['Fully remote', 'Fully in-office', 'Hybrid model', 'No fixed model'], 'Hybrid model', 'The passage explicitly states that companies adopted hybrid models.'),
  Q('q475', 'reading-comprehension', 'medium', 'Passage: "Effective time management involves prioritizing tasks based on urgency and importance, rather than simply working on whatever comes first." According to the passage, tasks should be prioritized based on:', ['Order of arrival', 'Urgency and importance', 'Personal preference', 'Difficulty level'], 'Urgency and importance', 'The passage directly states this is the basis for effective prioritization.'),
  Q('q476', 'reading-comprehension', 'medium', "Passage: 'A team tested two designs. Design A was faster, while Design B used less memory.' Which design used less memory?", ['Design B', 'Design A', 'Both equally', 'Neither'], 'Design B', 'The passage explicitly says B used less memory.'),
  Q('q477', 'reading-comprehension', 'medium', "Passage: 'The city added buses on Route 5 after complaints about crowding. Passenger waiting time fell.' Why were buses added?", ['Because of crowding complaints', 'Because fares increased', 'Because roads closed', 'Because demand disappeared'], 'Because of crowding complaints', 'The passage gives crowding complaints as the reason.'),
  Q('q478', 'reading-comprehension', 'hard', 'Passage: "While automation increases efficiency, it also raises concerns about job displacement, prompting calls for reskilling programs to help workers transition to new roles." What does the passage suggest as a response to job displacement caused by automation?', ['Banning automation', 'Reskilling programs', 'Reducing efficiency', 'Ignoring the issue'], 'Reskilling programs', 'The passage specifically mentions reskilling programs as the suggested response.'),
  Q('q479', 'reading-comprehension', 'hard', "Passage: 'An analyst compared monthly sales and found December highest. January was second.' Which month had the highest sales?", ['November', 'December', 'February', 'January'], 'December', 'The passage explicitly states December was highest.'),
  Q('q480', 'reading-comprehension', 'hard', "Passage: 'The company introduced automated tests. Bugs found after release decreased.' What happened after automation?", ['Bugs increased', 'Testing stopped', 'Post-release bugs decreased', 'Releases stopped'], 'Post-release bugs decreased', 'The passage directly reports fewer bugs after release.'),
  // ---------- Sentence Ordering ----------
  Q('q481', 'sentence-ordering', 'easy', 'Rearrange the words to form a meaningful sentence: "to / he / office / walks / every day"', ['He walks to office every day.', 'He every day walks to office.', 'To office he walks every day.', 'Walks he to office every day.'], 'He walks to office every day.', 'This follows the standard subject-verb-object-time word order.'),
  Q('q482', 'sentence-ordering', 'easy', "Arrange the words into a correct sentence: 'always / arrives / she / early'", ['She always arrives early', 'Early arrives always she', 'Always she early arrives', 'Arrives she always early'], 'She always arrives early', 'The standard word order is subject + adverb + verb + complement.'),
  Q('q483', 'sentence-ordering', 'easy', "Arrange: 'to / wants / learn / Ravi / Python'", ['Python wants Ravi to learn', 'Ravi wants to learn Python', 'Wants Ravi Python learn to', 'To learn Ravi wants Python'], 'Ravi wants to learn Python', 'Subject, verb, infinitive phrase, and object form the natural sentence.'),
  Q('q484', 'sentence-ordering', 'medium', 'Rearrange the words to form a meaningful sentence: "market / she / vegetables / bought / from / the"', ['She bought vegetables from the market.', 'She from the market bought vegetables.', 'Vegetables she bought from the market.', 'She bought from the market vegetables.'], 'She bought vegetables from the market.', 'This follows the natural subject-verb-object-place word order.'),
  Q('q485', 'sentence-ordering', 'medium', 'Rearrange the words to form a meaningful sentence: "despite / the / rain / heavy / went / they / out"', ['Despite the heavy rain, they went out.', 'They went out despite heavy the rain.', 'Heavy rain despite, they went out.', 'Despite heavy the rain they went.'], 'Despite the heavy rain, they went out.', 'This correctly places the modifier "heavy" before "rain" and the clause before the main sentence.'),
  Q('q486', 'sentence-ordering', 'medium', "Arrange: 'completed / the / team / project'", ['The project team completed the', 'The team completed the project', 'Team the completed project', 'Completed team the project'], 'The team completed the project', 'The correct order is subject + verb + object.'),
  Q('q487', 'sentence-ordering', 'medium', "Arrange: 'carefully / read / instructions / the'", ['Read the instructions carefully', 'Carefully the read instructions', 'The carefully instructions read', 'Instructions read carefully the'], 'Read the instructions carefully', 'Imperative verb + object + adverb is grammatical.'),
  Q('q488', 'sentence-ordering', 'hard', 'Rearrange the words to form a meaningful sentence: "not / only / hardworking / he / but / intelligent / also / is / is"', ['Not only is he hardworking but also intelligent.', 'He is not only hardworking but also is intelligent.', 'Not only he is hardworking but also intelligent.', 'He not only is hardworking but intelligent also.'], 'Not only is he hardworking but also intelligent.', 'The "not only... but also" construction requires inverted subject-verb order after "not only".'),
  Q('q489', 'sentence-ordering', 'hard', "Arrange: 'because / late / was / he / traffic / of'", ['Late he because traffic was of', 'Because traffic he was late of', 'He because was traffic late of', 'He was late because of traffic'], 'He was late because of traffic', 'This order forms a grammatical causal sentence.'),
  Q('q490', 'sentence-ordering', 'hard', "Arrange: 'has / already / report / submitted / she / the'", ['She has already submitted the report', 'Already she report has submitted the', 'The report she already has submitted', 'She submitted already has the report'], 'She has already submitted the report', "The present perfect places 'has' before the participle and 'already' before it."),
  // ---------- Cloze Test ----------
  Q('q491', 'cloze-test', 'easy', 'The manager called a meeting to ___ the new project timeline.', ['discuss', 'discussing', 'discussed', 'discussion'], 'discuss', 'The base verb form is needed after "to" in an infinitive.'),
  Q('q492', 'cloze-test', 'easy', 'The team worked hard, ___ it missed the deadline.', ['unless', 'because', 'but', 'so that'], 'but', "'But' marks the contrast between effort and the missed deadline."),
  Q('q493', 'cloze-test', 'easy', 'The system failed ___ the database was unavailable.', ['unless', 'although', 'while', 'because'], 'because', "'Because' introduces the cause."),
  Q('q494', 'cloze-test', 'medium', 'Despite several ___, the team managed to complete the project on time.', ['obstacle', 'obstacles', 'obstacling', 'obstacled'], 'obstacles', 'The plural noun form fits after "several".'),
  Q('q495', 'cloze-test', 'medium', 'The report ___ submitted before the deadline to avoid penalties.', ['must', 'must be', 'must have', 'must being'], 'must be', 'The passive construction "must be submitted" fits the context.'),
  Q('q496', 'cloze-test', 'medium', 'Please back up the file ___ you lose your work.', ['before', 'because', 'during', 'although'], 'before', "'Before' expresses a precaution in time."),
  Q('q497', 'cloze-test', 'medium', 'The candidate was tired; ___, she completed the test.', ['however', 'therefore', 'unless', 'because'], 'however', "'However' introduces contrast."),
  Q('q498', 'cloze-test', 'hard', 'Had the company invested in R&D earlier, it ___ a stronger market position today.', ['would have', 'would have had', 'will have', 'would had'], 'would have had', 'This is a mixed conditional using the third conditional clause with a present result, correctly formed as "would have had".'),
  Q('q499', 'cloze-test', 'hard', 'The company reduced costs ___ improving efficiency.', ['by', 'from', 'to', 'at'], 'by', "'By + gerund' expresses the method."),
  Q('q500', 'cloze-test', 'hard', 'The results were reliable ___ the sample was carefully controlled.', ['because', 'or', 'unless', 'but'], 'because', 'The controlled sample is the stated reason for reliability.'),
  // ---------- Critical Reasoning ----------
  Q('q501', 'critical-reasoning', 'easy', '"All employees who arrive late will be marked absent for the day." If Ravi arrived late, what can be concluded?', ['Ravi will be marked absent for the day.', 'Ravi will be promoted.', 'Ravi will be marked present.', 'Nothing can be concluded.'], 'Ravi will be marked absent for the day.', 'This follows directly from the given rule.'),
  Q('q502', 'critical-reasoning', 'easy', 'Argument: All deployed code should be tested. Conclusion: This new release should be tested before deployment. Is the conclusion supported?', ['It contradicts the argument', 'No', 'Only by unrelated facts', 'Yes'], 'Yes', 'The new release is code intended for deployment, so it falls under the stated rule.'),
  Q('q503', 'critical-reasoning', 'easy', 'Argument: The office is crowded, so adding desks may worsen movement. Which fact strengthens it?', ['Employees use laptops', 'The office has windows', 'The current aisles are already narrow', 'The desks are new'], 'The current aisles are already narrow', 'Narrow aisles directly increase the concern about movement.'),
  Q('q504', 'critical-reasoning', 'medium', 'Argument: "Company X\'s profits have grown every year since it adopted remote work, so remote work causes profit growth." What is the flaw in this reasoning?', ['Correlation is mistaken for causation.', 'The argument is completely valid.', 'Profits cannot be measured.', 'Remote work is undefined.'], 'Correlation is mistaken for causation.', 'The argument ignores other possible factors that could explain the profit growth.'),
  Q('q505', 'critical-reasoning', 'medium', '"If it rains, the match will be cancelled. It did not rain." What can be concluded about the match?', ['The match was cancelled.', 'The match was not cancelled.', 'Nothing can be concluded about the match being cancelled or not.', 'The match was postponed.'], 'Nothing can be concluded about the match being cancelled or not.', 'The original statement does not say the match will only be cancelled if it rains, so denying the antecedent gives no valid conclusion.'),
  Q('q506', 'critical-reasoning', 'medium', "Argument: A product's sales rose after advertising increased. Which fact weakens the claim that advertising caused the rise?", ['A major competitor was out of stock during the same period', 'The product was available', 'The campaign had many views', 'The advertisement was new'], 'A major competitor was out of stock during the same period', 'A competitor shortage provides an alternative cause.'),
  Q('q507', 'critical-reasoning', 'medium', 'Argument: The company should adopt backups because hardware can fail. The key assumption is that', ['Hardware never fails', 'Backups can help recover data after failure', 'Backups are free', 'All data is public'], 'Backups can help recover data after failure', 'Without recoverability, backups would not support the recommendation.'),
  Q('q508', 'critical-reasoning', 'hard', '"A recent study found that people who drink coffee daily have a lower risk of a certain disease. Therefore, drinking coffee prevents the disease." What is the weakness in this reasoning?', ['The study sample was too large.', 'It assumes causation from correlation, ignoring other factors.', 'Coffee is not a beverage.', 'The disease is not defined.'], 'It assumes causation from correlation, ignoring other factors.', 'A correlation between coffee drinking and lower disease risk does not by itself establish that coffee causes the reduced risk.'),
  Q('q509', 'critical-reasoning', 'hard', 'If every reliable source is checked and Source X is reliable, what follows?', ['Only unreliable sources matter', 'No source should be checked', 'Source X must be false', 'Source X should be checked'], 'Source X should be checked', 'X belongs to the set of reliable sources.'),
  Q('q510', 'critical-reasoning', 'hard', 'A manager claims training caused productivity to rise. Which evidence best supports the claim?', ['The office was renovated', 'Productivity rose after training while comparable untrained teams did not improve', 'Training was popular', 'Productivity was measured once'], 'Productivity rose after training while comparable untrained teams did not improve', 'A controlled comparison better supports causal attribution.'),
  // ---------- Pseudocode ----------
  Q('q511', 'pseudocode', 'easy', 'What will the following pseudocode print?\nSET x = 5\nSET y = 10\nPRINT x + y', ['5', '10', '15', '50'], '15', 'x + y = 5 + 10 = 15.'),
  Q('q512', 'pseudocode', 'easy', 'What does `x = 5; x = x + 2; print(x)` output?', ['7', '2', '10', '5'], '7', 'x becomes 7 after the assignment.'),
  Q('q513', 'pseudocode', 'easy', 'How many times does `for i=1 to 5` execute its body?', ['10', '6', '5', '4'], '5', 'The values are 1,2,3,4,5.'),
  Q('q514', 'pseudocode', 'medium', 'What is the output?\nSET count = 0\nFOR i = 1 TO 5\n  SET count = count + i\nEND FOR\nPRINT count', ['10', '15', '20', '25'], '15', 'The loop adds 1+2+3+4+5 = 15 to count.'),
  Q('q515', 'pseudocode', 'medium', 'What does this pseudocode print?\nSET a = 10, b = 20\nIF a > b THEN\n  PRINT a\nELSE\n  PRINT b\nEND IF', ['10', '20', '30', 'Error'], '20', 'Since a is not greater than b, the ELSE branch executes and prints b, which is 20.'),
  Q('q516', 'pseudocode', 'medium', 'If `x=3; if x>2 print(1) else print(0)`, output is', ['1', '2', '0', '3'], '1', '3 is greater than 2.'),
  Q('q517', 'pseudocode', 'medium', 'What is the final value of x in `x=0; for i=1 to 4 x=x+i`?', ['6', '4', '10', '8'], '10', 'x=0+1+2+3+4=10.'),
  Q('q518', 'pseudocode', 'hard', 'Trace the output:\nSET n = 5\nSET fact = 1\nFOR i = 1 TO n\n  SET fact = fact * i\nEND FOR\nPRINT fact', ['24', '60', '120', '720'], '120', 'This computes 5 factorial: 1x2x3x4x5 = 120.'),
  Q('q519', 'pseudocode', 'hard', 'What does a nested loop of 3 iterations inside 4 iterations execute in total?', ['16 times', '12 times', '10 times', '7 times'], '12 times', 'The inner body runs 3 times for each of 4 outer iterations: 12.'),
  Q('q520', 'pseudocode', 'hard', 'If an array has 5 elements and a loop visits indices 0 through 4 once, how many visits occur?', ['6', '5', '4', '10'], '5', 'There are five valid indices from 0 to 4.'),
  // ---------- Programming Logic ----------
  Q('q521', 'programming-logic', 'easy', 'What is the time complexity of accessing an element in an array by index?', ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], 'O(1)', 'Array indexing is a direct memory access operation, taking constant time.'),
  Q('q522', 'programming-logic', 'easy', 'Which operator checks equality in many programming languages?', ['!=', '==', '+=', '='], '==', '== compares values; = commonly assigns.'),
  Q('q523', 'programming-logic', 'easy', 'What is the purpose of a loop?', ['Repeat instructions', 'Compile code', 'Store only one value', 'Define a class only'], 'Repeat instructions', 'Loops execute a block repeatedly.'),
  Q('q524', 'programming-logic', 'medium', 'Which loop structure is guaranteed to execute its body at least once?', ['for', 'while', 'do-while', 'foreach'], 'do-while', 'A do-while loop checks its condition after executing the loop body, so it always runs at least once.'),
  Q('q525', 'programming-logic', 'medium', 'What is the result of 5 % 2 in most programming languages?', ['0', '1', '2', '2.5'], '1', 'The modulus operator returns the remainder of the division, which is 1.'),
  Q('q526', 'programming-logic', 'medium', 'Which structure is commonly used to choose between conditions?', ['import', 'comment', 'array', 'if-else'], 'if-else', 'if-else provides conditional branching.'),
  Q('q527', 'programming-logic', 'medium', 'What is recursion?', ['Deleting a variable', 'A loop with no condition', 'Sorting only', 'A function calling itself'], 'A function calling itself', 'Recursion is self-invocation with a base case.'),
  Q('q528', 'programming-logic', 'hard', 'What is the time complexity of binary search on a sorted array of n elements?', ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], 'O(log n)', 'Binary search halves the search space at each step, giving logarithmic time complexity.'),
  Q('q529', 'programming-logic', 'hard', 'Binary search on a sorted array has typical time complexity', ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], 'O(log n)', 'The search interval is roughly halved each step.'),
  Q('q530', 'programming-logic', 'hard', 'What does an array index usually identify?', ["The program's file", 'Its data type only', "An element's position", 'A network port'], "An element's position", 'An index locates an element in an array.'),
  // ---------- OOP ----------
  Q('q531', 'oop', 'easy', 'Which OOP concept allows a child class to inherit properties and behavior from a parent class?', ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], 'Inheritance', 'Inheritance allows a class to acquire the properties and methods of another class.'),
  Q('q532', 'oop', 'easy', 'Encapsulation means', ['Deleting objects', 'Copying files', 'Bundling data and methods with controlled access', 'Only using loops'], 'Bundling data and methods with controlled access', 'Encapsulation combines state and behavior and controls access.'),
  Q('q533', 'oop', 'easy', 'Inheritance allows a class to', ['Avoid all methods', 'Acquire features from another class', 'Become a database', 'Run without memory'], 'Acquire features from another class', 'A derived class can reuse/extend a base class.'),
  Q('q534', 'oop', 'medium', 'What is the term for hiding internal implementation details and exposing only necessary functionality?', ['Inheritance', 'Encapsulation', 'Polymorphism', 'Overloading'], 'Encapsulation', 'Encapsulation bundles data and methods together while restricting direct access to internal details.'),
  Q('q535', 'oop', 'medium', 'What OOP feature allows a function or method to behave differently depending on the object that calls it?', ['Inheritance', 'Encapsulation', 'Polymorphism', 'Abstraction'], 'Polymorphism', 'Polymorphism allows the same interface to be used for different underlying forms.'),
  Q('q536', 'oop', 'medium', 'Polymorphism means', ['One interface can have different implementations', 'One class has no methods', 'All objects are identical', 'Data is always private'], 'One interface can have different implementations', 'Polymorphism permits different behavior through a common interface.'),
  Q('q537', 'oop', 'medium', 'Abstraction focuses on', ['Removing all classes', 'Exposing every detail', 'Only storing numbers', 'Essential behavior while hiding implementation details'], 'Essential behavior while hiding implementation details', 'Abstraction hides unnecessary implementation detail.'),
  Q('q538', 'oop', 'hard', 'What is the key difference between method overloading and method overriding?', ['They are the same thing.', 'Overloading is same-class same-signature; overriding is cross-class different-signature.', 'Overloading is same-class with different parameters; overriding is a subclass redefining the same signature.', 'Overriding only works with private methods.'], 'Overloading is same-class with different parameters; overriding is a subclass redefining the same signature.', 'Overloading distinguishes methods by parameter list within one class, while overriding replaces a parent method with the same signature in a subclass.'),
  Q('q539', 'oop', 'hard', 'Method overloading usually means', ['Deleting a method', 'Same method name with different parameter lists', 'Overriding a field only', 'Same parameters with unrelated names'], 'Same method name with different parameter lists', 'Overloading distinguishes methods by parameters.'),
  Q('q540', 'oop', 'hard', 'A constructor is primarily used to', ['Send HTTP packets', 'Initialize a new object', 'Sort an array', 'Destroy a database'], 'Initialize a new object', "Constructors establish an object's initial state."),
  // ---------- DBMS / SQL ----------
  Q('q541', 'dbms-sql', 'easy', 'Which SQL keyword is used to remove duplicate rows from a result set?', ['UNIQUE', 'DISTINCT', 'REMOVE', 'FILTER'], 'DISTINCT', 'DISTINCT filters out duplicate rows from the query result.'),
  Q('q542', 'dbms-sql', 'easy', 'Which SQL command retrieves rows?', ['SELECT', 'UPDATE', 'INSERT', 'DELETE'], 'SELECT', 'SELECT queries data.'),
  Q('q543', 'dbms-sql', 'easy', 'Which clause filters rows before grouping?', ['ORDER BY', 'HAVING', 'WHERE', 'JOIN'], 'WHERE', 'WHERE filters individual rows before grouping.'),
  Q('q544', 'dbms-sql', 'medium', 'Which SQL clause is used to filter groups after an aggregation?', ['WHERE', 'HAVING', 'GROUP BY', 'FILTER'], 'HAVING', 'HAVING filters aggregated results, whereas WHERE filters rows before aggregation.'),
  Q('q545', 'dbms-sql', 'medium', 'What does a PRIMARY KEY constraint ensure?', ['Allows duplicate values', 'Uniquely identifies each row and disallows NULLs', 'Allows NULL values only', 'Sorts the table'], 'Uniquely identifies each row and disallows NULLs', 'A primary key must contain unique, non-null values for every row.'),
  Q('q546', 'dbms-sql', 'medium', 'Which clause filters grouped results?', ['FROM', 'WHERE', 'VALUES', 'HAVING'], 'HAVING', 'HAVING applies conditions to groups.'),
  Q('q547', 'dbms-sql', 'medium', 'A primary key must', ['Uniquely identify each row', 'Contain only text', 'Allow duplicates always', 'Be nullable always'], 'Uniquely identify each row', 'Primary keys uniquely identify records and are not null.'),
  Q('q548', 'dbms-sql', 'hard', 'In database normalization, which normal form eliminates transitive dependency?', ['1NF', '2NF', '3NF', 'BCNF'], '3NF', 'Third Normal Form removes transitive dependencies on the primary key.'),
  Q('q549', 'dbms-sql', 'hard', 'Which JOIN returns matching rows from both tables?', ['INNER JOIN', 'FULL TEXT JOIN', 'SORT JOIN', 'CROSS JOIN'], 'INNER JOIN', 'INNER JOIN returns rows satisfying the join condition.'),
  Q('q550', 'dbms-sql', 'hard', 'Which normal form removes partial dependency on part of a composite key?', ['Second Normal Form', 'First Normal Form', 'Third Normal Form', 'Fourth Normal Form'], 'Second Normal Form', '2NF removes partial dependencies on a composite candidate key.'),
  // ---------- Computer Networks ----------
  Q('q551', 'computer-networks', 'easy', 'What does IP stand for in networking?', ['Internet Protocol', 'Internal Process', 'Internet Process', 'Internal Protocol'], 'Internet Protocol', 'IP stands for Internet Protocol, used for addressing and routing packets.'),
  Q('q552', 'computer-networks', 'easy', 'Which protocol is connection-oriented and reliable?', ['DNS', 'TCP', 'IP', 'UDP'], 'TCP', 'TCP provides connection-oriented reliable transport.'),
  Q('q553', 'computer-networks', 'easy', 'DNS primarily translates', ['HTML to SQL', 'Domain names to IP addresses', 'Ports to passwords', 'Files to folders'], 'Domain names to IP addresses', 'DNS resolves domain names to IP addresses.'),
  Q('q554', 'computer-networks', 'medium', 'Which layer of the OSI model is responsible for routing data between networks?', ['Physical', 'Data Link', 'Network', 'Transport'], 'Network', 'The Network layer handles logical addressing and routing.'),
  Q('q555', 'computer-networks', 'medium', 'Which protocol is used to securely transfer web pages over an encrypted connection?', ['HTTP', 'FTP', 'HTTPS', 'SMTP'], 'HTTPS', 'HTTPS encrypts HTTP traffic using SSL/TLS.'),
  Q('q556', 'computer-networks', 'medium', 'HTTP commonly uses which default port?', ['80', '25', '22', '443'], '80', 'Port 80 is the conventional default for HTTP.'),
  Q('q557', 'computer-networks', 'medium', 'HTTPS is HTTP protected primarily using', ['FTP', 'TLS', 'DHCP', 'ARP'], 'TLS', 'HTTPS uses TLS to secure HTTP communication.'),
  Q('q558', 'computer-networks', 'hard', 'What is the primary purpose of DNS in networking?', ['Encrypt network traffic', 'Translate domain names into IP addresses', 'Assign IP addresses dynamically', 'Route data packets'], 'Translate domain names into IP addresses', 'DNS resolves human-readable domain names to their corresponding IP addresses.'),
  Q('q559', 'computer-networks', 'hard', 'Which OSI layer handles routing between networks?', ['Physical layer', 'Presentation layer', 'Session layer', 'Network layer'], 'Network layer', 'The network layer provides logical addressing and routing.'),
  Q('q560', 'computer-networks', 'hard', 'UDP is often preferred when an application values', ['Strict ordering', 'Low overhead and speed', 'Guaranteed delivery', 'Connection setup'], 'Low overhead and speed', 'UDP avoids connection and retransmission overhead.'),
  // ---------- Operating Systems ----------
  Q('q561', 'operating-systems', 'easy', 'What is the main function of an operating system?', ['Manage hardware and software resources', 'Only run games', 'Write documents', 'Design websites'], 'Manage hardware and software resources', 'An operating system manages a computer\'s hardware and software resources.'),
  Q('q562', 'operating-systems', 'easy', 'A process is', ['A source-code comment', 'A database table', 'A network cable', 'A program in execution'], 'A program in execution', 'A process is an executing program.'),
  Q('q563', 'operating-systems', 'easy', 'A thread is', ['A disk partition', 'A file type', 'A unit of execution within a process', 'A compiler'], 'A unit of execution within a process', "Threads share a process's resources while executing independently."),
  Q('q564', 'operating-systems', 'medium', 'What is a deadlock in operating systems?', ['A crash of the OS', 'A situation where processes wait indefinitely for each other\'s resources', 'A type of virus', 'A memory leak'], 'A situation where processes wait indefinitely for each other\'s resources', 'A deadlock occurs when a set of processes are each waiting on resources held by the others.'),
  Q('q565', 'operating-systems', 'medium', 'Which scheduling algorithm can cause starvation for longer processes?', ['First Come First Served', 'Shortest Job First', 'Round Robin', 'Priority scheduling with aging'], 'Shortest Job First', 'Shortest Job First can indefinitely delay longer processes if shorter ones keep arriving.'),
  Q('q566', 'operating-systems', 'medium', 'Which scheduling algorithm uses time slices?', ['Round Robin', 'Binary search', 'DFS', 'FCFS only'], 'Round Robin', 'Round Robin assigns a time quantum to each ready process.'),
  Q('q567', 'operating-systems', 'medium', 'Deadlock requires conditions including', ['Only fast CPU', 'No shared resources', 'Circular wait', 'Unlimited memory'], 'Circular wait', 'Circular wait is one of the necessary Coffman conditions.'),
  Q('q568', 'operating-systems', 'hard', 'What is thrashing in the context of virtual memory?', ['A CPU overheating issue', 'Excessive paging causing the system to spend more time swapping than executing', 'A type of deadlock', 'A network congestion issue'], 'Excessive paging causing the system to spend more time swapping than executing', 'Thrashing occurs when a system spends more time handling page faults than doing actual work.'),
  Q('q569', 'operating-systems', 'hard', 'Virtual memory allows', ['Disabling processes', 'Replacing the CPU', 'Deleting RAM', 'Using disk as an extension of apparent memory'], 'Using disk as an extension of apparent memory', 'Virtual memory maps virtual addresses to physical memory and can use disk backing.'),
  Q('q570', 'operating-systems', 'hard', 'Paging divides memory into fixed-size', ['Processes and threads', 'Pages and frames', 'Files and folders', 'Rows and columns'], 'Pages and frames', 'Virtual pages map to physical frames.'),
  // ---------- Data Structures ----------
  Q('q571', 'data-structures', 'easy', 'Which data structure follows the Last In First Out (LIFO) principle?', ['Queue', 'Stack', 'Array', 'Linked List'], 'Stack', 'A stack removes the most recently added element first, following LIFO order.'),
  Q('q572', 'data-structures', 'easy', 'A stack follows', ['Priority only', 'Random only', 'LIFO', 'FIFO'], 'LIFO', 'Last in, first out.'),
  Q('q573', 'data-structures', 'easy', 'A queue follows', ['FIFO', 'Random only', 'Tree order', 'LIFO'], 'FIFO', 'First in, first out.'),
  Q('q574', 'data-structures', 'medium', 'What is the time complexity of inserting an element at the beginning of a singly linked list?', ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], 'O(1)', 'Inserting at the head only requires updating a pointer, taking constant time.'),
  Q('q575', 'data-structures', 'medium', 'Which data structure is used internally to implement recursive function calls?', ['Queue', 'Stack', 'Tree', 'Graph'], 'Stack', 'Recursive calls are managed using a call stack.'),
  Q('q576', 'data-structures', 'medium', 'Binary search requires the data to be', ['Sorted', 'Hashed only', 'Encrypted', 'Reversed always'], 'Sorted', 'Binary search relies on sorted order.'),
  Q('q577', 'data-structures', 'medium', 'Average-case lookup in a well-designed hash table is approximately', ['O(log n)', 'O(n log n)', 'O(1)', 'O(n²)'], 'O(1)', 'Good hashing gives expected constant-time lookup.'),
  Q('q578', 'data-structures', 'hard', 'What is the worst-case time complexity of quicksort?', ['O(n log n)', 'O(n^2)', 'O(log n)', 'O(n)'], 'O(n^2)', 'Quicksort degrades to O(n^2) in the worst case, such as when the pivot choices are consistently poor.'),
  Q('q579', 'data-structures', 'hard', 'Which structure is naturally suited to BFS?', ['Stack', 'Heap only', 'Queue', 'Array only'], 'Queue', 'BFS processes vertices level by level using a queue.'),
  Q('q580', 'data-structures', 'hard', 'Worst-case quicksort time complexity is', ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'], 'O(n²)', 'Poor pivot choices can produce quadratic partitions.'),
];

/* ============================================================
   STORAGE
   ============================================================ */

var STORAGE_KEYS = {
  prefs: 'pal_prefs',
  progress: 'pal_progress',
  session: 'pal_session'
};

function safeParse(raw, fallback) {
  if (!raw) return fallback;
  try {
    var parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (e) {
    return fallback;
  }
}

function loadPrefs() {
  return safeParse(localStorage.getItem(STORAGE_KEYS.prefs), {
    source: 'all',
    singleCategory: CATEGORY_GROUPS[0].categories[0].id,
    count: '10',
    difficulty: 'mixed',
    timerEnabled: false,
    timerMinutes: 20
  });
}

function savePrefs(prefs) {
  try { localStorage.setItem(STORAGE_KEYS.prefs, JSON.stringify(prefs)); } catch (e) { /* ignore */ }
}

function defaultProgress() {
  return {
    totalSessions: 0,
    questionsAttempted: 0,
    correctAnswers: 0,
    bestAccuracy: 0,
    categories: {},
    recentSessions: []
  };
}

function loadProgress() {
  var p = safeParse(localStorage.getItem(STORAGE_KEYS.progress), null);
  if (!p) return defaultProgress();
  p.categories = p.categories || {};
  p.recentSessions = p.recentSessions || [];
  return p;
}

function saveProgress(progress) {
  try { localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress)); } catch (e) { /* ignore */ }
}

function loadActiveSession() {
  return safeParse(localStorage.getItem(STORAGE_KEYS.session), null);
}

function saveActiveSession(session) {
  try { localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session)); } catch (e) { /* ignore */ }
}

function clearActiveSession() {
  try { localStorage.removeItem(STORAGE_KEYS.session); } catch (e) { /* ignore */ }
}

/* ============================================================
   STATE
   ============================================================ */

var state = {
  currentView: 'home',
  prefs: loadPrefs(),
  progress: loadProgress(),
  session: null,
  timerIntervalId: null,
  lastResult: null
};

/* ============================================================
   UTILITIES
   ============================================================ */

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function getCategoriesForSource(source, singleCategory) {
  if (source === 'single') return [singleCategory];
  if (source === 'all') return Object.keys(CATEGORY_META);
  var group = CATEGORY_GROUPS.filter(function (g) { return g.id === source; })[0];
  return group ? group.categories.map(function (c) { return c.id; }) : [];
}

function formatTime(totalSeconds) {
  var m = Math.floor(totalSeconds / 60);
  var s = totalSeconds % 60;
  return (m < 10 ? '0' + m : '' + m) + ':' + (s < 10 ? '0' + s : '' + s);
}

function el(id) { return document.getElementById(id); }

function showModal(title, body, onConfirm) {
  el('confirm-modal-title').textContent = title;
  el('confirm-modal-body').textContent = body;
  el('confirm-modal').classList.remove('hidden');
  var okBtn = el('confirm-modal-ok');
  var cancelBtn = el('confirm-modal-cancel');
  function cleanup() {
    el('confirm-modal').classList.add('hidden');
    okBtn.removeEventListener('click', onOk);
    cancelBtn.removeEventListener('click', onCancel);
  }
  function onOk() { cleanup(); onConfirm(); }
  function onCancel() { cleanup(); }
  okBtn.addEventListener('click', onOk);
  cancelBtn.addEventListener('click', onCancel);
}

/* ============================================================
   BUILD QUESTION SET
   ============================================================ */

function buildQuestionSet(prefs) {
  var categories = getCategoriesForSource(prefs.source, prefs.singleCategory);
  var pool = QUESTION_BANK.filter(function (q) {
    if (categories.indexOf(q.category) === -1) return false;
    if (prefs.difficulty !== 'mixed' && q.difficulty !== prefs.difficulty) return false;
    return true;
  });

  pool = shuffleArray(pool);

  var count = prefs.count === 'all' ? pool.length : Math.min(parseInt(prefs.count, 10), pool.length);
  var selected = pool.slice(0, count);

  return selected.map(function (q) {
    var options = shuffleArray(q.options);
    return {
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      question: q.question,
      options: options,
      correctAnswer: q.answer,
      explanation: q.explanation
    };
  });
}

function availableCount(source, singleCategory, difficulty) {
  var categories = getCategoriesForSource(source, singleCategory);
  return QUESTION_BANK.filter(function (q) {
    if (categories.indexOf(q.category) === -1) return false;
    if (difficulty !== 'mixed' && q.difficulty !== difficulty) return false;
    return true;
  }).length;
}

/* ============================================================
   NAVIGATION / VIEWS
   ============================================================ */

function setView(name) {
  state.currentView = name;
  document.querySelectorAll('.view').forEach(function (v) { v.classList.add('hidden'); });
  var target = document.querySelector('.view[data-view="' + name + '"]');
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === name);
  });

  var showStatus = (name === 'test');
  el('topbar-status').classList.toggle('hidden', !showStatus);

  if (name === 'categories') renderCategories();
  if (name === 'progress') renderProgress();
  if (name === 'home') renderSetupSummary();
}

function goToNav(name) {
  if (name === 'home' || name === 'categories' || name === 'progress') {
    setView(name);
  }
}

/* ============================================================
   SETUP FORM
   ============================================================ */

function renderSingleCategoryOptions() {
  var select = el('single-category-select');
  select.innerHTML = '';
  CATEGORY_GROUPS.forEach(function (group) {
    var optgroup = document.createElement('optgroup');
    optgroup.label = group.label;
    group.categories.forEach(function (cat) {
      var opt = document.createElement('option');
      opt.value = cat.id;
      opt.textContent = cat.name;
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  });
  select.value = state.prefs.singleCategory;
}

function applyPrefsToForm() {
  var prefs = state.prefs;
  el('source-select').value = prefs.source;
  el('single-category-group').classList.toggle('hidden', prefs.source !== 'single');
  renderSingleCategoryOptions();

  document.querySelectorAll('#count-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', chip.getAttribute('data-count') === String(prefs.count));
  });
  document.querySelectorAll('#difficulty-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', chip.getAttribute('data-difficulty') === prefs.difficulty);
  });

  el('timer-enabled').checked = !!prefs.timerEnabled;
  el('timer-options').classList.toggle('enabled', !!prefs.timerEnabled);

  document.querySelectorAll('#timer-preset-options .chip').forEach(function (chip) {
    chip.classList.toggle('selected', parseInt(chip.getAttribute('data-minutes'), 10) === prefs.timerMinutes);
  });
  var presetMatches = ['10', '15', '20', '30', '45', '60'].indexOf(String(prefs.timerMinutes)) !== -1;
  el('custom-minutes').value = presetMatches ? '' : prefs.timerMinutes;

  renderSetupSummary();
}

function renderSetupSummary() {
  var prefs = state.prefs;
  var categories = getCategoriesForSource(prefs.source, prefs.singleCategory);
  var available = availableCount(prefs.source, prefs.singleCategory, prefs.difficulty);
  var sourceLabel = prefs.source === 'single'
    ? (CATEGORY_META[prefs.singleCategory] ? CATEGORY_META[prefs.singleCategory].name : 'Category')
    : (prefs.source === 'all' ? 'Random — All Categories' : CATEGORY_GROUPS.filter(function (g) { return g.id === prefs.source; })[0].label);

  var countLabel = prefs.count === 'all' ? 'All available (' + available + ')' : (prefs.count + ' (of ' + available + ' available)');
  var difficultyLabel = prefs.difficulty.charAt(0).toUpperCase() + prefs.difficulty.slice(1);
  var timerLabel = prefs.timerEnabled ? (prefs.timerMinutes + ' minutes') : 'Untimed';

  el('summary-list').innerHTML =
    '<div><dt>Source</dt><dd>' + sourceLabel + '</dd></div>' +
    '<div><dt>Questions</dt><dd>' + countLabel + '</dd></div>' +
    '<div><dt>Difficulty</dt><dd>' + difficultyLabel + '</dd></div>' +
    '<div><dt>Timer</dt><dd>' + timerLabel + '</dd></div>';

  var note = el('setup-note');
  if (available === 0) {
    note.textContent = 'No questions are available for this combination yet. Try a different difficulty or source.';
  } else {
    note.textContent = available + ' question(s) match your current filters.';
  }
  el('start-practice-btn').disabled = available === 0;
}

function initSetupForm() {
  applyPrefsToForm();

  el('source-select').addEventListener('change', function () {
    state.prefs.source = this.value;
    el('single-category-group').classList.toggle('hidden', this.value !== 'single');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('single-category-select').addEventListener('change', function () {
    state.prefs.singleCategory = this.value;
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('count-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#count-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.count = chip.getAttribute('data-count');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('difficulty-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#difficulty-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.difficulty = chip.getAttribute('data-difficulty');
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('timer-enabled').addEventListener('change', function () {
    state.prefs.timerEnabled = this.checked;
    el('timer-options').classList.toggle('enabled', this.checked);
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('timer-preset-options').addEventListener('click', function (e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#timer-preset-options .chip').forEach(function (c) { c.classList.remove('selected'); });
    chip.classList.add('selected');
    state.prefs.timerMinutes = parseInt(chip.getAttribute('data-minutes'), 10);
    el('custom-minutes').value = '';
    savePrefs(state.prefs);
    renderSetupSummary();
  });

  el('custom-minutes').addEventListener('input', function () {
    var val = parseInt(this.value, 10);
    if (val && val > 0) {
      document.querySelectorAll('#timer-preset-options .chip').forEach(function (c) { c.classList.remove('selected'); });
      state.prefs.timerMinutes = val;
      savePrefs(state.prefs);
      renderSetupSummary();
    }
  });

  el('setup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    startSession(state.prefs);
  });
}

/* ============================================================
   CATEGORIES PAGE
   ============================================================ */

function renderCategories() {
  var container = el('categories-groups');
  container.innerHTML = '';

  CATEGORY_GROUPS.forEach(function (group) {
    var groupEl = document.createElement('div');
    groupEl.className = 'category-group';

    var title = document.createElement('h2');
    title.className = 'category-group-title';
    title.textContent = group.label;
    groupEl.appendChild(title);

    var grid = document.createElement('div');
    grid.className = 'category-grid';

    group.categories.forEach(function (cat) {
      var count = QUESTION_BANK.filter(function (q) { return q.category === cat.id; }).length;
      var card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML =
        '<h3>' + cat.name + '</h3>' +
        '<p>' + cat.description + '</p>' +
        '<div class="category-card-footer">' +
        '<span class="category-count">' + count + ' question' + (count === 1 ? '' : 's') + '</span>' +
        '<button class="category-start-btn" data-category="' + cat.id + '">Start</button>' +
        '</div>';
      grid.appendChild(card);
    });

    groupEl.appendChild(grid);
    container.appendChild(groupEl);
  });

  container.querySelectorAll('.category-start-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var catId = this.getAttribute('data-category');
      state.prefs.source = 'single';
      state.prefs.singleCategory = catId;
      savePrefs(state.prefs);
      applyPrefsToForm();
      setView('home');
    });
  });
}

/* ============================================================
   PROGRESS PAGE
   ============================================================ */

function renderProgress() {
  var progress = state.progress;
  var accuracy = progress.questionsAttempted > 0
    ? Math.round((progress.correctAnswers / progress.questionsAttempted) * 100)
    : 0;

  el('progress-stats').innerHTML =
    statCard(progress.totalSessions, 'Total sessions') +
    statCard(progress.questionsAttempted, 'Questions attempted') +
    statCard(accuracy + '%', 'Overall accuracy') +
    statCard(progress.bestAccuracy + '%', 'Best session accuracy');

  var catIds = Object.keys(progress.categories);
  var catTable = el('progress-category-table');
  if (catIds.length === 0) {
    catTable.innerHTML = '<p class="empty-note">No category data yet. Complete a practice session to see performance here.</p>';
  } else {
    var rows = catIds.map(function (id) {
      var c = progress.categories[id];
      var acc = c.attempted > 0 ? Math.round((c.correct / c.attempted) * 100) : 0;
      var name = CATEGORY_META[id] ? CATEGORY_META[id].name : id;
      return '<tr><td>' + name + '</td><td>' + c.attempted + '</td><td>' + acc + '%</td></tr>';
    }).join('');
    catTable.innerHTML = '<table class="row-table"><thead><tr><th>Category</th><th>Attempted</th><th>Accuracy</th></tr></thead><tbody>' + rows + '</tbody></table>';
  }

  var recentList = el('progress-recent-list');
  if (progress.recentSessions.length === 0) {
    recentList.innerHTML = '<p class="empty-note">No sessions yet. Start a practice session to build your history.</p>';
  } else {
    var items = progress.recentSessions.slice(0, 8).map(function (s) {
      var date = new Date(s.date);
      return '<div class="recent-session-row">' +
        '<span>' + s.sourceLabel + '<br><span class="recent-session-meta">' + date.toLocaleDateString() + ' &middot; ' + s.count + ' questions</span></span>' +
        '<span>' + s.accuracy + '%</span>' +
        '</div>';
    }).join('');
    recentList.innerHTML = items;
  }
}

function statCard(value, label) {
  return '<div class="stat-card"><div class="stat-value">' + value + '</div><div class="stat-label">' + label + '</div></div>';
}

function resetProgress() {
  showModal('Reset progress?', 'This will permanently delete your session history and statistics stored on this device.', function () {
    state.progress = defaultProgress();
    saveProgress(state.progress);
    renderProgress();
  });
}

/* ============================================================
   TEST SESSION
   ============================================================ */

function startSession(prefs) {
  var questions = buildQuestionSet(prefs);
  if (questions.length === 0) return;

  var sourceLabel = prefs.source === 'single'
    ? (CATEGORY_META[prefs.singleCategory] ? CATEGORY_META[prefs.singleCategory].name : 'Category')
    : (prefs.source === 'all' ? 'Random — All Categories' : CATEGORY_GROUPS.filter(function (g) { return g.id === prefs.source; })[0].label);

  var now = Date.now();
  var session = {
    sourceLabel: sourceLabel,
    difficulty: prefs.difficulty,
    prefsSnapshot: JSON.parse(JSON.stringify(prefs)),
    questions: questions,
    answers: questions.map(function () { return null; }),
    marked: questions.map(function () { return false; }),
    currentIndex: 0,
    timerEnabled: !!prefs.timerEnabled,
    timerMinutes: prefs.timerMinutes,
    startTime: now,
    endTime: prefs.timerEnabled ? (now + prefs.timerMinutes * 60000) : null,
    finished: false
  };

  state.session = session;
  saveActiveSession(session);
  enterTestView();
}

function enterTestView() {
  setView('test');
  buildPalette();
  renderQuestion();
  startTimerLoop();
}

function currentQuestion() {
  return state.session.questions[state.session.currentIndex];
}

function renderQuestion() {
  var session = state.session;
  var idx = session.currentIndex;
  var q = session.questions[idx];
  var total = session.questions.length;

  el('test-progress-fill').style.width = (((idx + 1) / total) * 100) + '%';
  el('topbar-progress').textContent = 'Q' + (idx + 1) + ' of ' + total;

  el('question-category-badge').textContent = CATEGORY_META[q.category] ? CATEGORY_META[q.category].name : q.category;
  el('question-difficulty-badge').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
  el('question-text').textContent = (idx + 1) + '. ' + q.question;

  var optionsList = el('options-list');
  optionsList.innerHTML = '';
  var selected = session.answers[idx];
  q.options.forEach(function (optionText, i) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option' + (selected === optionText ? ' selected' : '');
    btn.setAttribute('data-option-index', i);
    btn.innerHTML = '<span class="option-key">' + String.fromCharCode(65 + i) + '</span><span>' + optionText + '</span>';
    btn.addEventListener('click', function () { selectAnswer(optionText); });
    optionsList.appendChild(btn);
  });

  el('mark-review-btn').classList.toggle('active', session.marked[idx]);
  el('mark-review-btn').textContent = session.marked[idx] ? 'Marked for Review' : 'Mark for Review';

  el('prev-question-btn').disabled = idx === 0;
  var isLast = idx === total - 1;
  el('next-question-btn').classList.toggle('hidden', isLast);
  el('finish-test-btn').classList.toggle('hidden', !isLast);

  updatePaletteHighlight();
}

function selectAnswer(optionText) {
  var session = state.session;
  session.answers[session.currentIndex] = optionText;
  saveActiveSession(session);
  renderQuestion();
}

function nextQuestion() {
  var session = state.session;
  if (session.currentIndex < session.questions.length - 1) {
    session.currentIndex++;
    saveActiveSession(session);
    renderQuestion();
  }
}

function previousQuestion() {
  var session = state.session;
  if (session.currentIndex > 0) {
    session.currentIndex--;
    saveActiveSession(session);
    renderQuestion();
  }
}

function toggleReview() {
  var session = state.session;
  session.marked[session.currentIndex] = !session.marked[session.currentIndex];
  saveActiveSession(session);
  renderQuestion();
}

function goToQuestion(index) {
  var session = state.session;
  session.currentIndex = index;
  saveActiveSession(session);
  renderQuestion();
}

function buildPalette() {
  var grid = el('palette-grid');
  grid.innerHTML = '';
  state.session.questions.forEach(function (q, i) {
    var cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'palette-cell';
    cell.textContent = i + 1;
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', function () { goToQuestion(i); });
    grid.appendChild(cell);
  });
}

function updatePaletteHighlight() {
  var session = state.session;
  var cells = el('palette-grid').querySelectorAll('.palette-cell');
  cells.forEach(function (cell, i) {
    cell.classList.remove('answered', 'marked', 'current');
    if (i === session.currentIndex) cell.classList.add('current');
    else if (session.marked[i]) cell.classList.add('marked');
    else if (session.answers[i] !== null) cell.classList.add('answered');
  });
}

/* ---------- Timer ---------- */

function startTimerLoop() {
  stopTimerLoop();
  updateTimerDisplay();
  state.timerIntervalId = setInterval(updateTimer, 1000);
}

function stopTimerLoop() {
  if (state.timerIntervalId) {
    clearInterval(state.timerIntervalId);
    state.timerIntervalId = null;
  }
}

function updateTimer() {
  updateTimerDisplay();
}

function updateTimerDisplay() {
  var session = state.session;
  var chip = el('topbar-timer');
  if (!session || !session.timerEnabled) {
    chip.textContent = 'Untimed';
    chip.classList.remove('timer-warn', 'timer-danger');
    return;
  }
  var remainingMs = session.endTime - Date.now();
  var remainingSeconds = Math.max(0, Math.round(remainingMs / 1000));
  chip.textContent = formatTime(remainingSeconds);
  chip.classList.toggle('timer-warn', remainingSeconds <= 300 && remainingSeconds > 60);
  chip.classList.toggle('timer-danger', remainingSeconds <= 60);

  if (remainingSeconds <= 0 && !session.finished) {
    finishSession(true);
  }
}

/* ---------- Finish / Results ---------- */

function finishSession(auto) {
  stopTimerLoop();
  var session = state.session;
  if (session.finished) return;
  session.finished = true;

  var timeTakenSeconds = Math.round((Date.now() - session.startTime) / 1000);

  var correct = 0, incorrect = 0, unanswered = 0;
  var byCategory = {};
  var byDifficulty = { easy: { attempted: 0, correct: 0 }, medium: { attempted: 0, correct: 0 }, hard: { attempted: 0, correct: 0 } };

  session.questions.forEach(function (q, i) {
    var userAnswer = session.answers[i];
    var isCorrect = userAnswer !== null && userAnswer === q.correctAnswer;

    if (userAnswer === null) unanswered++;
    else if (isCorrect) correct++;
    else incorrect++;

    if (!byCategory[q.category]) byCategory[q.category] = { attempted: 0, correct: 0 };
    byCategory[q.category].attempted++;
    if (isCorrect) byCategory[q.category].correct++;

    if (byDifficulty[q.difficulty]) {
      byDifficulty[q.difficulty].attempted++;
      if (isCorrect) byDifficulty[q.difficulty].correct++;
    }
  });

  var total = session.questions.length;
  var accuracyBase = correct + incorrect;
  var accuracy = accuracyBase > 0 ? Math.round((correct / accuracyBase) * 100) : 0;

  var result = {
    total: total,
    correct: correct,
    incorrect: incorrect,
    unanswered: unanswered,
    accuracy: accuracy,
    timeTakenSeconds: timeTakenSeconds,
    avgTimePerQuestion: total > 0 ? Math.round(timeTakenSeconds / total) : 0,
    byCategory: byCategory,
    byDifficulty: byDifficulty,
    sourceLabel: session.sourceLabel,
    auto: !!auto
  };

  state.lastResult = result;

  // Update long-term progress
  var progress = state.progress;
  progress.totalSessions++;
  progress.questionsAttempted += total;
  progress.correctAnswers += correct;
  if (accuracy > progress.bestAccuracy) progress.bestAccuracy = accuracy;

  Object.keys(byCategory).forEach(function (catId) {
    if (!progress.categories[catId]) progress.categories[catId] = { attempted: 0, correct: 0 };
    progress.categories[catId].attempted += byCategory[catId].attempted;
    progress.categories[catId].correct += byCategory[catId].correct;
  });

  progress.recentSessions.unshift({
    date: Date.now(),
    sourceLabel: session.sourceLabel,
    count: total,
    accuracy: accuracy
  });
  progress.recentSessions = progress.recentSessions.slice(0, 20);

  saveProgress(progress);
  clearActiveSession();

  renderResults();
  setView('results');
}

function renderResults() {
  var r = state.lastResult;
  if (!r) return;

  el('results-subtitle').textContent = r.sourceLabel + (r.auto ? ' · auto-submitted when time ran out' : '');

  var circumference = 2 * Math.PI * 52;
  var offset = circumference - (r.accuracy / 100) * circumference;
  el('score-ring-fill').style.strokeDasharray = circumference;
  el('score-ring-fill').style.strokeDashoffset = offset;
  el('score-ring-value').textContent = r.accuracy + '%';

  el('score-breakdown').innerHTML =
    breakdownRow('Score', r.correct + ' / ' + r.total) +
    breakdownRow('Correct', r.correct) +
    breakdownRow('Incorrect', r.incorrect) +
    breakdownRow('Unanswered', r.unanswered) +
    breakdownRow('Time taken', formatTime(r.timeTakenSeconds)) +
    breakdownRow('Avg time / question', r.avgTimePerQuestion + 's');

  var catHtml = Object.keys(r.byCategory).map(function (catId) {
    var c = r.byCategory[catId];
    var pct = c.attempted > 0 ? Math.round((c.correct / c.attempted) * 100) : 0;
    var name = CATEGORY_META[catId] ? CATEGORY_META[catId].name : catId;
    return breakdownBar(name, pct, c.correct + '/' + c.attempted);
  }).join('');
  el('results-category-breakdown').innerHTML = catHtml || '<p class="empty-note">No category data.</p>';

  var diffHtml = ['easy', 'medium', 'hard'].map(function (d) {
    var c = r.byDifficulty[d];
    if (!c || c.attempted === 0) return '';
    var pct = Math.round((c.correct / c.attempted) * 100);
    var label = d.charAt(0).toUpperCase() + d.slice(1);
    return breakdownBar(label, pct, c.correct + '/' + c.attempted);
  }).join('');
  el('results-difficulty-breakdown').innerHTML = diffHtml || '<p class="empty-note">No difficulty data.</p>';
}

function breakdownRow(label, value) {
  return '<div class="score-breakdown-row"><span>' + label + '</span><span>' + value + '</span></div>';
}

function breakdownBar(label, pct, sublabel) {
  return '<div class="breakdown-bar-row">' +
    '<div class="breakdown-bar-label"><span>' + label + '</span><span>' + sublabel + ' &middot; ' + pct + '%</span></div>' +
    '<div class="breakdown-bar-track"><div class="breakdown-bar-fill" style="width:' + pct + '%"></div></div>' +
    '</div>';
}

/* ---------- Review ---------- */

function renderReview() {
  var session = state.session;
  var list = el('review-list');
  list.innerHTML = session.questions.map(function (q, i) {
    var userAnswer = session.answers[i];
    var isCorrect = userAnswer !== null && userAnswer === q.correctAnswer;
    var stateClass = userAnswer === null ? '' : (isCorrect ? 'correct' : 'incorrect');
    var stateLabel = userAnswer === null ? 'Unanswered' : (isCorrect ? 'Correct' : 'Incorrect');

    return '<div class="review-item">' +
      '<div class="review-item-header">' +
      '<span class="badge">' + (CATEGORY_META[q.category] ? CATEGORY_META[q.category].name : q.category) + '</span>' +
      '<span class="badge badge-muted">' + q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1) + '</span>' +
      '</div>' +
      '<div class="review-item-question">' + (i + 1) + '. ' + q.question + '</div>' +
      (userAnswer !== null ? '<div class="review-answer-row ' + stateClass + '">Your answer: ' + userAnswer + ' &mdash; ' + stateLabel + '</div>' : '<div class="review-answer-row">You did not answer this question.</div>') +
      (isCorrect ? '' : '<div class="review-answer-row correct">Correct answer: ' + q.correctAnswer + '</div>') +
      '<div class="review-explanation">' + q.explanation + '</div>' +
      '</div>';
  }).join('');
}

/* ============================================================
   EVENT WIRING
   ============================================================ */

function initNavigation() {
  document.querySelectorAll('.nav-item, .bottom-nav-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      goToNav(this.getAttribute('data-nav'));
    });
  });
}

function initTestControls() {
  el('prev-question-btn').addEventListener('click', previousQuestion);
  el('next-question-btn').addEventListener('click', nextQuestion);
  el('mark-review-btn').addEventListener('click', toggleReview);
  el('finish-test-btn').addEventListener('click', function () { confirmFinish(); });
  el('palette-finish-btn').addEventListener('click', function () { confirmFinish(); });

  document.addEventListener('keydown', function (e) {
    if (state.currentView !== 'test') return;
    if (['1', '2', '3', '4'].indexOf(e.key) !== -1) {
      var idx = parseInt(e.key, 10) - 1;
      var q = currentQuestion();
      if (q && q.options[idx] !== undefined) selectAnswer(q.options[idx]);
    } else if (e.key === 'ArrowLeft') {
      previousQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    } else if (e.key === 'Enter') {
      var session = state.session;
      if (session.currentIndex < session.questions.length - 1) nextQuestion();
    }
  });
}

function confirmFinish() {
  var session = state.session;
  var unanswered = session.answers.filter(function (a) { return a === null; }).length;
  var body = unanswered > 0
    ? 'You have ' + unanswered + ' unanswered question(s). Do you want to submit the test now?'
    : 'Submit your answers now? You will not be able to change them after this.';
  showModal('Submit test?', body, function () { finishSession(false); });
}

function initResultsControls() {
  el('review-answers-btn').addEventListener('click', function () {
    renderReview();
    setView('review');
  });
  el('review-back-btn').addEventListener('click', function () { setView('results'); });

  el('retry-same-btn').addEventListener('click', function () {
    startSession(state.session ? state.session.prefsSnapshot : state.prefs);
  });

  el('new-practice-btn').addEventListener('click', function () { setView('home'); });
  el('back-dashboard-btn').addEventListener('click', function () { setView('home'); });
}

function initProgressControls() {
  el('reset-progress-btn').addEventListener('click', resetProgress);
}

/* ============================================================
   INIT
   ============================================================ */

function init() {
  initNavigation();
  initSetupForm();
  initTestControls();
  initResultsControls();
  initProgressControls();

  var activeSession = loadActiveSession();
  if (activeSession && !activeSession.finished) {
    var expired = activeSession.timerEnabled && activeSession.endTime <= Date.now();
    state.session = activeSession;
    if (expired) {
      finishSession(true);
    } else {
      enterTestView();
    }
  } else {
    setView('home');
  }
}

document.addEventListener('DOMContentLoaded', init);